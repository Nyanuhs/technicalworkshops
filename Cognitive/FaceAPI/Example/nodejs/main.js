const express = require("express");
const faces = require("./faces.js");

let app = express();
let facesApi = faces("<insert your api key here>");


app.post("/photo", (req,res) => {
    let photo = null;

    req.on("data", (data) => {
        if( photo === null ) photo = data;
        else photo = Buffer.concat([photo,data]);
    });

    req.on("end", () => {
        let header = "data=image/png;base64,";
        let photoAsString = photo.toString().substr(header.length);

        let photoAsBinary = new Buffer(photoAsString, "base64");

        facesApi.getDetails(photoAsBinary).then((result) => {
            res.json(200, result);
        });
    });
});

app.use(express.static("public"));

app.listen(3000, () => {
    console.log("Server is running on port 3000");
});