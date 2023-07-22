var randomNumber1 = Math.floor(Math.random() * 6)+1;

var randomImage = "dice" + randomNumber1 + ".png";
var randomSource = "./images/" + randomImage;

document.querySelector("img.img1").setAttribute("src", randomSource);

var randomNumber2 = Math.floor(Math.random() * 6)+1;

var randomImage1 = "dice" + randomNumber2 + ".png";
var randomSource2 = "./images/" + randomImage1;

document.querySelector("img.img2").setAttribute("src", randomSource2);
