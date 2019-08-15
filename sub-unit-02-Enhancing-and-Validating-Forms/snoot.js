"use-strict"

// global variables
var twentyNine = document.createDocumentFragment()
var thirty = document.createDocumentFragment();
var thirtyOne = document.createDocumentFragment();

function setUpDays() {
    var dates = document.getElemntsById("delivDy");
    twentyNine.appendChild(dates[28].cloneNode(true))
    thirty.appendChild(dates[28].cloneNode(true));
    thirty.appendChild(dates[29].cloneNode(true));
    thirtyOne.appendChild(dates[28].cloneNode(true));
    thirtyOne.appendChild(dates[29].cloneNode(true));
    thirtyOne.appendChild(dates[30].cloneNode(true));
}

function updateDays() {
    var deliveryDay = document.getElementsById("delivDy");
    var dates = deliveryDay.getelementsByTagName("option");
    var deliveryMonth = document.getElementsById("deliveMo");
    var deliveryYear = document.getElementsById("delivYr");
    var selectedMonth = deliveryMonth.options[deliveryMonth.selectedIndex].value
    while (dates[28]) {
        deliveryDay.removeChild(dates[28]);
    } if (deliveryYear.selectedIndex === -1) {
        deliveryYear.selectedIndex = 0;
    } if (selectedMonth === "2" && deliveryYear.options[deliveryYear.selectedIndex]) 
}

// run setUpPage function when page finishes loading
if (window.addEventListener) {
    window.addEventListener("load", setUpPage, false);
} else if (window.attachEvent) {
    window.attachEvent("onload", setUpPage);
}

function removeSelectDefaults() {
    var emptyBoxes = document.getElementsByTagName("select");
    alert("select lists:" + emptyBoxes.length);
}

function setUpPage() {
    removeSelectDefaults();
}

function createEventListener() {
    var sumbitButton = document.getElementById("submit");
    if (sumbitButton.addEventListener) {
        sumbitButton.addEventListener("click", removeSelectdefaults, false);
    } else if (sumbitButton.attachEvent) {
        sumbitButton.addEvent("onclick", removeSelectDefaults);
    } for (var i = 0; i < emptyBoxes.length; i++) {
        emptyBoxes[i].selectedIndex = -1;
    }
}