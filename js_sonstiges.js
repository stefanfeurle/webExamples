var box = "";
var imageNumber = 0;

function openNewBox(imageNr) {
    imageNumber = imageNr;
    box = document.getElementById("myBox");
    showImage(imageNumber);
}

function showImage(imageNumber) {
    var id = "img" + imageNumber;
    var page = imageNumber + "/20";

    if (imageNumber === 1 || imageNumber === 6 || imageNumber === 8 || imageNumber === 10 || imageNumber === 11 || imageNumber ===13) {
        var widthImage = "28%";
    } else if (imageNumber === 4) {
        widthImage = "63%";
    } else if (imageNumber === 9) {
        widthImage = "76%";
    } else if (imageNumber === 16) {
        widthImage = "25%";
    } else if (imageNumber === 15 || imageNumber === 17 || imageNumber === 18 || imageNumber === 19) {
        widthImage = "55%";
    } else {
        widthImage = "50%";
    }
   
    var img = document.getElementById(id).src;
    var boxImage = document.getElementById("image");
    var captionText = document.getElementById(id).alt;  
    
    box.style.display = "block";
    boxImage.src = img;
    boxImage.style.width = widthImage;
    document.getElementById("page").innerHTML = page;
    document.getElementById("caption").innerHTML = captionText;
}

function closeBox() {
    box.style.display = "none";
}

function lastImage() {
    imageNumber--;
    if(imageNumber === 0) {
        imageNumber = 20;
    }
    showImage(imageNumber);
}

function nextImage() {
    imageNumber++;
    if(imageNumber === 21) {
        imageNumber = 1;
    }
    showImage(imageNumber);
}