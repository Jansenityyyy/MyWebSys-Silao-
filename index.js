
document.addEventListener("DOMContentLoaded", function() {
    setTimeout(function() {
        document.getElementById("loading-screen").style.opacity = "0";
        setTimeout(function() {
            document.getElementById("loading-screen").style.display = "none";
            document.getElementById("main-content").style.display = "block";
        }, 500);
    }, 1000);
});

// Menu Toggle Script
var MenuItems = document.getElementById("MenuItems");
MenuItems.style.maxHeight = "0px";

function menutoggle(){
    if (MenuItems.style.maxHeight == "0px") {
        MenuItems.style.maxHeight = "200px";
    } else {
        MenuItems.style.maxHeight = "0px";
    }
}
//-----------------ACCOUNT-----------------//
var MenuItems = document.getElementById("MenuItems");


MenuItems.style.maxHeight = "0px";

function menutoggle() {
    if (MenuItems.style.maxHeight === "0px") {
        MenuItems.style.maxHeight = "200px"; 
    } else {
        MenuItems.style.maxHeight = "0px"; 
    }
}



//------------ACCOUNT--------------//
    var LoginForm = document.getElementById("LoginForm");
    var RegForm = document.getElementById("RegForm");
    var Indicator = document.getElementById("Indicator");

    function register(){

        RegForm.style.transform = "translateX(0px)";
        LoginForm.style.transform = "translateX(0px)";
        Indicator.style.transform = "translateX(100px)";
    }
    function login(){

        RegForm.style.transform = "translateX(300px)";
        LoginForm.style.transform = "translateX(300px)";
        Indicator.style.transform = "translateX(0px)";
    }

    var ProductImg = document.getElementById("ProductImg");
    var SmallImg = document.getElementsByClassName("small-img");

        SmallImg[0].onclick = function()
        {
            ProductImg.src = SmallImg[0].src;
        }
        SmallImg[1].onclick = function()
        {
            ProductImg.src = SmallImg[1].src;
        }
        SmallImg[2].onclick = function()
        {
            ProductImg.src = SmallImg[2].src;
        }
        SmallImg[3].onclick = function()
        {
            ProductImg.src = SmallImg[3].src;
        }
        document.addEventListener("DOMContentLoaded", function () {
            var ProductImg = document.getElementById("ProductImg").querySelector("img");
            var SmallImg = document.getElementsByClassName("small-img");
        
            for (let i = 0; i < SmallImg.length; i++) {
                SmallImg[i].onclick = function () {
                    ProductImg.src = SmallImg[i].src;
                };
            }
        });



//--------------CHECK-OUT------------//

        function checkout() {
            alert("Redirecting to checkout...");
            window.location.href = "checkout.html"; // Change this to your actual checkout page
        }
    
//------------------COUPON------------------//

    function applyCoupon() {
        var couponInput = document.getElementById("couponCode").value;
        var subtotal = 2000; // Default subtotal
        var discountText = document.getElementById("discountText");

        if (couponInput === "VOGUE10") { // Example coupon
            var discountAmount = subtotal * 0.10; // 10% discount
            var newTotal = subtotal - discountAmount;
            document.querySelector(".total-price table").innerHTML = `
                <tr><td>Subtotal</td><td>₱${subtotal.toFixed(2)}</td></tr>
                <tr><td>Discount (10%)</td><td>-₱${discountAmount.toFixed(2)}</td></tr>
                <tr><td>Tax</td><td>₱31</td></tr>
                <tr><td>Total</td><td>₱${(newTotal + 31).toFixed(2)}</td></tr>
            `;
            discountText.style.display = "block";
        } else {
            alert("Invalid Coupon Code");
            discountText.style.display = "none";
        }
    }

//--------------------slider-------------------//
document.addEventListener("DOMContentLoaded", function() {
    setTimeout(function() {
        document.getElementById("loading-screen").style.opacity = "0";
        setTimeout(function() {
            document.getElementById("loading-screen").style.display = "none";
            document.getElementById("main-content").style.display = "block";
        }, 500);
    }, 1000);
});

