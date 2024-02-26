var randomNumberP1 = Math.floor((Math.random() * 6) + 1);
var randomNumberP2 = Math.floor((Math.random() * 6) + 1);
var count = 0;


var firstImageSrc =  "images/dice" + randomNumberP1 + ".png";
var secondImageSrc = "images/dice" + randomNumberP2 + ".png";


if(randomNumberP1 > randomNumberP2){
    document.querySelector("h1").textContent="Winner Player 1";
}else if(randomNumberP1 < randomNumberP2){
    document.querySelector("h1").textContent="Winner Player 2";
}else{
    document.querySelector("h1").textContent="DRAW";
}


document.querySelector(".img2").setAttribute("src", secondImageSrc);
document.querySelector(".img1").setAttribute("src", firstImageSrc);