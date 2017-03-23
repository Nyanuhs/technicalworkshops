const https = require("https");

module.exports = function (faceKey) {
    this.getDetails = (buffer) => {
        let promise = new Promise((resolve) => {
            let headers = {
                "Content-Type": "application/octet-stream",
                "Content-Length": buffer.byteLength,
                "Ocp-Apim-Subscription-Key": faceKey
            };

            let options = {
                host: "westus.api.cognitive.microsoft.com",
                method: "POST",
                path: "/face/v1.0/detect?returnFaceId=true&returnFaceLandmarks=true&returnFaceAttributes=age,gender,headPose,smile,facialHair,glasses,emotion",
                headers: headers
            };

            let request = https.request(options, (response) => {
                let json = "";

                response.on("data", (chunk) => {
                    json = json + chunk;
                });

                response.on("end", () => {
                    let result = JSON.parse(json);
                    resolve(result);
                });
            });

            request.on("error", (e) => {
                console.log("Problems : " + e.message);
            });

            request.end(buffer);
        });

        return promise;
    };

    return this;

}