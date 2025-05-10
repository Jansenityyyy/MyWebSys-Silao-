document.addEventListener("DOMContentLoaded", function () {
    var ProductImg = document.getElementById("ProductImg").querySelector("img");
    var SmallImg = document.getElementsByClassName("small-img");

    for (let i = 0; i < SmallImg.length; i++) {
        SmallImg[i].onclick = function () {
            ProductImg.src = SmallImg[i].src;
        };
    }
});
