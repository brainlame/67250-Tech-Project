var x = 5;
var y = 7;
var z = x + y;
console.log(z);
 
var A = "Hello ";
var B = "world!";
var C = A + B;
console.log(C);
 
function sumnPrint(x1, x2) {
    var result = x1 + x2;
    console.log(result);
}
 
sumnPrint(x, y); 
sumnPrint(A, B); 
 
if (C.length > z) {
    if (C.length > z) {
        console.log(C);
    }
} else {
    if (C.length < z) {
        console.log(z);
    } else {
        console.log("good job!");
    }
}
 
var L1 = ["Watermelon", "Pineapple", "Pear", "Banana"];
var L2 = ["Apple", "Banana", "Kiwi", "Orange"];
 
// for loop
// function findTheBanana(arr) {
//     for (var i = 0; i < arr.length; i++) {
//         if (arr[i] === "Banana") {
//             alert("Banana found!");
//         }
//     }
// }
 
// forEach
// function findTheBanana(arr) {
//     arr.forEach(function(item) {
//         if (item === "Banana") {
//             alert("Banana found!");
//         }
//     });
// }
 
// findTheBanana(L1);
// findTheBanana(L2);
 
var now = new Date();
var hour = now.getHours();
 
function greeting(h) {
    var greetingEl = document.getElementById("greeting");
    // fix: only run if element exists on the page
    if (!greetingEl) return; 
 
    var message;
    if (h < 5 || h >= 20) {
        message = "Good night";
    } else if (h < 12) {
        message = "Good morning";
    } else if (h < 18) {
        message = "Good afternoon";
    } else {
        message = "Good evening";
    }
 
    greetingEl.innerHTML = message + " — Welcome to the Museum";
}
 
greeting(hour);

function addYear() {
    var yearEl = document.getElementById("copyYear");
    if (yearEl) {
        yearEl.innerHTML = "© " + new Date().getFullYear() + " MonoMuse. All rights reserved.";
    }
}