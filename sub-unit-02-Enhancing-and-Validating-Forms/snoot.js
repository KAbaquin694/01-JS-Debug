"use-strict"

// global variables
var twentyNine = document.createDocumentFragment()
var thirty = document.createDocumentFragment();
var thirtyOne = document.createDocumentFragment();

function setUpDays() {
    var dates = document.getElementsById("delivDy");
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
    } if (selectedMonth === "2" && deliveryYear.options[deliveryYear.selectedIndex].value === "2020") {
        deliveryDay.appendChild(twentyNine.cloneNode(true));
    } else if (selecetedMonth === "4" || selectedMonth === "6" || slectedMonth === "9" || selectedMonth === "11") {
        deliveryDay.appendchild(thirty.cloneNode(true));
    } else if (selecetedMonth === "1" || selectedMonth === "3" || slectedMonth === "5" || selectedMonth === "7" || selectedMonth === "8" || selectedMonth === "10" || selectedMonth === "12") {
        deliveryDay.appendchild(thirtyOne.cloneNode(true));
    }
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
    setUpDays();
    createEventListener();
}

function createEventListeners() {
    var deliveryMonth = document.getElementById("delivMo");
    if (deliveryMonth.addEventListener){
        deliveryMonth.addEventListener("change", updateDays, false);
    } else if (deliveryMonth.attachEvent) {
        deliveryMonth.attachEvent("onchange", updateDays);
    }
    var deliveryYear = document.getElementById("delivYr");
    if (deliveryYear.addEventListener) {
        deliveryYear.addEventListener("change", updateDays, false);
    } else if (deliveryYear.attachEvent) {
        deliveryYear.attachEvent("onchange", updateDays);
    }
}

function autoCheckCustom() {
    var messageBox = document.getElementById("customText");
    if (messageBox.value !== "" &&  messageBox.value !== messageBox.placeholder) { document.getElementById("custom").checked ="checked"; 
} else {
    document.getElementById("custom").checked = "";
}
}

function copyBillingAddress() {
    var billingInputElements = document.querySelectorAll("#billingAddress input");
    var deliveryInputElements = document.querySelectorAll("#deliveryAddress input");
    if (document.getElementById("sameAddr").checked) {
        for (var i = 0; i < billingInputElements.length; i++) {
            deliveryInputElements[i +1].value = billingInputElements[i].value;
        } 
        document.querySelector("#deliveryAddress select").value = document.querySelector("#billingAddress select").value;
}}

function createEventListener() {
    var sumbitButton = document.getElementById("submit");
    if (sumbitButton.addEventListener) {
        sumbitButton.addEventListener("click", removeSelectdefaults, false);
    } else if (sumbitButton.attachEvent) {
        sumbitButton.addEvent("onclick", removeSelectDefaults);
    } for (var i = 0; i < emptyBoxes.length; i++) {
        emptyBoxes[i].selectedIndex = -1;
    }
    var same = document.getElementById("sameAddr");
    if (same.addEventListener) {
        same.addEventListener("change", copyBillingAddress,false);
    } else if (same.attachEvent) {
        same.attachEvent("onchange", copyBillingAddress);
    }
}


    function autoCheckFunction() {
        var messageBox = document.getElementById("customText");
        if (messageBox.addEventListener) {
            messageBox.addEventListener("change", autoCheckCustom, false);
        }  else if (messageBox.attachEvent) {
            messageBox.attachEvent("onchange", autoCheckCustom)
        }
    }