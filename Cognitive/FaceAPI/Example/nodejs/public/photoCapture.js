(function (global) {
    global.photoCapture = function (videoId, canvasId, captureButtonId, dataReady) {
        var width = 320;
        var height = 0;

        var streaming = false;

        var video = null;
        var canvas = null;
        var startbutton = null;

        function sendPhoto(data) {
            var request = new XMLHttpRequest();
            request.open("POST", "/photo", false);
            request.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
            request.addEventListener("loadend", (e) => {
                if (e.target.responseText && e.target.responseText.length > 0) {
                    var face = JSON.parse(e.target.responseText)[0];
                    if (face) {
                        dataReady(face);
                    }
                }
            });

            request.send(data);
        }

        function clearphoto() {
            var context = canvas.getContext('2d');
            context.fillStyle = "#AAA";
            context.fillRect(0, 0, canvas.width, canvas.height);
        }

        function takepicture() {
            var context = canvas.getContext('2d');
            if (width && height) {
                canvas.width = width;
                canvas.height = height;
                context.drawImage(video, 0, 0, width, height);

                var data = canvas.toDataURL('image/png');
                sendPhoto(data);
            } else {
                clearphoto();
            }
        }

        video = document.getElementById(videoId);
        canvas = document.getElementById(canvasId);
        startbutton = document.getElementById(captureButtonId);

        navigator.mediaDevices.getUserMedia({ video: true, audio: false })
            .then(function (stream) {
                video.srcObject = stream;
                video.play();
            })
            .catch(function (err) {
                console.log("An error occured! " + err);
            });

        video.addEventListener('canplay', function (ev) {
            if (!streaming) {
                height = video.videoHeight / (video.videoWidth / width);

                video.setAttribute('width', width);
                video.setAttribute('height', height);
                canvas.setAttribute('width', width);
                canvas.setAttribute('height', height);
                streaming = true;
            }
        }, false);

        startbutton.addEventListener('click', function (ev) {
            takepicture();
            ev.preventDefault();
        }, false);

        clearphoto();


    }

})(window);

