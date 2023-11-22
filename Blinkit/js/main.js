// pop login //

login.addEventListener("click", function () {
    myPopup.classList.add("show");
});

closePopup.addEventListener("click", function () {
    myPopup.classList.remove("show");
});

window.addEventListener("click", function (event) {
    if (event.target == myPopup) {
        myPopup.classList.remove("show");
    }
});


// pop location //


locationPop.addEventListener("click", function () {
    locationPopup.classList.add("show");
});

TimeUp.addEventListener("click", function () {
    locationPopup.classList.add("show");
});

closeBtn.addEventListener("click", function () {
    locationPopup.classList.remove("show");
});


// sticky navbar 

window.addEventListener("scroll", function () {
    var header = document.querySelector("header");
    header.classList.toggle("sticky", window.scrollY > 0);
});


//search input text

