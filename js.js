let mainNav = document.querySelector("aside");
function showAndHide() {
    mainNav.classList.toggle("hideAndShow")
}



let hello = document.querySelector(".likes");

function like() {
    hello.classList.toggle("like")
}

let input = document.querySelector(".bar");
let valueTest = document.querySelector(".value")
let formList = document.querySelector(".form")

formList.addEventListener("submit", function (e) {
    e.preventDefault();

    if (input.value === "") {
        valueTest.innerText = "Looking For Something? Write it..";
        return
    } else {
        valueTest.innerText = input.value;
    }


});


