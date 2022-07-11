var inputImage, imgData

var saveFile = function (event) {
    inputImage = document.getElementById('input-image');
    imgData = getBase64Image(inputImage);
    localStorage.setItem("imgData", imgData);
}

function getBase64Image(img) {
    var canvas = document.createElement("canvas");
    canvas.width = img.width;
    canvas.height = img.height;

    var ctx = canvas.getContext("2d");
    ctx.drawImage(img, 0, 0);

    var dataURL = canvas.toDataURL("image/png");

    return dataURL.replace(/^data:image\/(png|jpg);base64,/, "");
}