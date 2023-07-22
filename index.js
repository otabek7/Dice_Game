var randomNumber1 = Math.floor(Math.random() * 6)+1;

var randomImage = "dice" + randomNumber1 + ".png";
var randomSource = "./images/" + randomImage;

document.querySelector("img.img1").setAttribute("src", randomSource);

var randomNumber2 = Math.floor(Math.random() * 6)+1;

var randomImage1 = "dice" + randomNumber2 + ".png";
var randomSource2 = "./images/" + randomImage1;

document.querySelector("img.img2").setAttribute("src", randomSource2);

if(randomNumber1>randomNumber2){
    document.querySelector("h1").innerHTML = "🚩Player 1 Wins!";
}

else if(randomNumber1<randomNumber2){
    document.querySelector("h1").innerHTML = "Player 2 Wins!🚩";
}

else{
    document.querySelector("h1").innerHTML = "Draw!";
}