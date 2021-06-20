//--------------- MODAL 1 ---------------
// Get the modal
let modal1 = document.getElementById("modal1");

// Get the button that opens the modal
let btn1 = document.getElementById("button1");

// Get the <span> element that closes the modal
let span1 = document.getElementsByClassName("close1")[0];

// When the user clicks the button, open the modal 
btn1.onclick = function () {
    modal1.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span1.onclick = function () {
    modal1.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
    if (event.target == modal1) {
        modal1.style.display = "none";
    }
}

//--------------- MODAL 2 ---------------
let modal2 = document.getElementById("modal2");

let btn2 = document.getElementById("button2");

let span2 = document.getElementsByClassName("close2")[0];

btn2.onclick = function () {
    modal2.style.display = "block";
}

span2.onclick = function () {
    modal2.style.display = "none";
}

window.onclick = function (event) {
    if (event.target == modal2) {
        modal2.style.display = "none";
    }
}


//--------------- MODAL 3 ---------------
let modal3 = document.getElementById("modal3");

let btn3 = document.getElementById("button3");

let span3 = document.getElementsByClassName("close3")[0];

btn3.onclick = function () {
    modal3.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span3.onclick = function () {
    modal3.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
    if (event.target == modal3) {
        modal3.style.display = "none";
    }
}


//--------------- EMAIL BUTTON ---------------
$(document).ready(function () {
    $(".footer").delay(3000).fadeIn('slow');
});

