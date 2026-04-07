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

/* Sets the 'active' class on the navigation link that matches the current page URL.*/

function ActiveNav() {
    // Get all navigation links
    const navLinks = document.querySelectorAll('.nav_bar a');

    // Iterate over each link
    navLinks.forEach(link => {
        // Check if the link's href matches the current window location
        if (window.location.href === link.href) {
            // Add the 'active' class to highlight the current page
            link.classList.add("active");
        }
    });
}

ActiveNav();

/* jQuery functionality for Read More / Read Less toggle */

$(document).ready(function() {
    // Click event for Read More button
    $("#readMore").click(function() {
        $("#longIntro").show();
        $("#readMore").hide();
        $("#readLess").show();
    });

    // Click event for Read Less button
    $("#readLess").click(function() {
        $("#longIntro").hide();
        $("#readMore").show();
        $("#readLess").hide();
    });
});

/* Show purchase form and populate selected date */
function showPurchaseForm(date) {
    var form = document.getElementById("purchaseForm");
    var dateField = document.getElementById("selectedDate");

    // Show the form
    form.style.display = "block";

    // Set the selected date
    dateField.value = date;

    // Scroll to the form
    form.scrollIntoView({ behavior: "smooth" });
}

/* Calculate total price for ticket purchase form */
function calculateTotal() {
    var ticketType = document.getElementById("ticketType");
    var quantity = document.getElementById("ticketQuantity");
    var totalDisplay = document.getElementById("totalPrice");

    if (ticketType && quantity && totalDisplay) {
        var price = parseFloat(ticketType.value) || 0;
        var qty = parseInt(quantity.value) || 0;
        var total = price * qty;

        totalDisplay.textContent = "Total: $" + total.toFixed(2);
    }
}

/* Calculate total price for checkout form */
function calculateCheckoutTotal() {
    var ticketType = document.getElementById("checkoutTicketType");
    var quantity = document.getElementById("checkoutQuantity");
    var totalDisplay = document.getElementById("checkoutTotalPrice");

    if (ticketType && quantity && totalDisplay) {
        var price = parseFloat(ticketType.value) || 0;
        var qty = parseInt(quantity.value) || 0;
        var total = price * qty;

        totalDisplay.textContent = "Total: $" + total.toFixed(2);
    }
}

/* Submit purchase and show alert */
function submitPurchase() {
    var total = document.getElementById("totalPrice").textContent;
    alert("Order confirmed!\n" + total + "\n\nRedirecting to payment system.");
}

/* Submit checkout and show alert */
function submitCheckout() {
    var total = document.getElementById("checkoutTotalPrice").textContent;
    alert("Order confirmed!\n" + total + "\n\nRedirecting to payment system.");
}

/* Toggle mobile navigation menu */
function toggleMenu() {
    var navMenu = document.getElementById("navMenu");
    navMenu.classList.toggle("active");
}

/* Initialize Leaflet map */
function initMap() {
    // Check if map element exists
    var mapElement = document.getElementById("map");
    if (!mapElement) return;

    // Initialize map centered on Pittsburgh
    var map = L.map('map').setView([40.4406, -79.9959], 13);

    // Add OpenStreetMap tile layer
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
        maxZoom: 19
    }).addTo(map);

    // Custom marker style with new color scheme
    var markerStyle = {
        radius: 12,
        fillColor: "#4464AD",
        color: "#A4B0F5",
        weight: 4,
        opacity: 1,
        fillOpacity: 0.85
    };

    // Add circle markers for museums and monuments in Pittsburgh

    // Carnegie Museum of Art
    L.circleMarker([40.4434, -79.9494], markerStyle).addTo(map)
        .bindPopup('<b>Carnegie Museum of Art</b><br>One of the premier art museums in the United States.');

    // Andy Warhol Museum
    L.circleMarker([40.4477, -79.9967], markerStyle).addTo(map)
        .bindPopup('<b>The Andy Warhol Museum</b><br>Largest museum dedicated to a single artist.');

    // Phipps Conservatory and Botanical Gardens
    L.circleMarker([40.4380, -79.9472], markerStyle).addTo(map)
        .bindPopup('<b>Phipps Conservatory</b><br>Historic botanical garden and greenhouse.');

    // Fort Pitt Museum
    L.circleMarker([40.4411, -79.9955], markerStyle).addTo(map)
        .bindPopup('<b>Fort Pitt Museum</b><br>Museum celebrating Pittsburgh\'s history.');

    // Soldiers & Sailors Memorial Hall
    L.circleMarker([40.4418, -79.9533], markerStyle).addTo(map)
        .bindPopup('<b>Soldiers & Sailors Memorial</b><br>Memorial to veterans and military history museum.');

    // Carnegie Science Center
    L.circleMarker([40.4458, -80.0175], markerStyle).addTo(map)
        .bindPopup('<b>Carnegie Science Center</b><br>Science museum with interactive exhibits.');

    // National Aviary
    L.circleMarker([40.4517, -80.0086], markerStyle).addTo(map)
        .bindPopup('<b>National Aviary</b><br>America\'s only independent indoor nonprofit zoo dedicated to birds.');
}

// Initialize map when page loads
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initMap);
} else {
    initMap();
}