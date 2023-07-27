function refresh (){
    window.location.reload();
}

var num1 = Math.floor((Math.random() * 6) + 1);

var img_adress = "images\\dice" + num1 + ".png";

// document.getElementsByClassName("img1")[0].src = img_adress;
var image_1 = document.querySelectorAll("img")[0];
image_1.setAttribute("src", img_adress);

var num2 = Math.floor((Math.random() * 6) + 1);

img_adress = img_adress = "images\\dice" + num2 + ".png";

// document.getElementsByClassName("img2")[0].src = img_adress;
var image_2 = document.querySelectorAll("img")[1];
image_2.setAttribute("src", img_adress);

var winner = "";
if (num1 > num2){
    document.querySelector("h1").textContent = "Player 1 wins 🚩";
}
else if (num2 > num1) {
    document.querySelector("h1").textContent = "Player 2 wins 🚩";
}
else {
    document.querySelector("h1").textContent = "Its a tie :)";
}
