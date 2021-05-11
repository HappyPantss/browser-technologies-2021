const designForm = document.querySelector('.design-form')

function changeText() {
    var x = document.getElementById("text").value;
    document.getElementById("dragtarget").innerHTML = x;
}

if (window.localStorage) {
    const form = document.querySelector(".design-form");

    form.addEventListener('blur', (event) => {
        const formElement = document.querySelector(".design-form");
        const formData = new FormData(formElement);
        const obj = {};

        for (var pair of formData.entries()) {
            obj[pair[0]] = pair[1];
        }

        localStorage.setItem('formData', JSON.stringify(obj));
    }, true);

    function loadFormDataFromLocalStorage() {
        const data = localStorage.getItem('formData');
        const dragtarget = document.querySelector("#dragtarget");

        if (data) {
            const parsedData = JSON.parse(data);
            dragtarget.innerHTML = parsedData.text;

            for (var pair of Object.entries(parsedData)) {
                const pairDomElement = document.getElementById(pair[0]);

                if (pairDomElement) {
                    pairDomElement.value = pair[1];
                } else {
                    const pairDomElements = document.getElementsByClassName(pair[0]);

                    for (const pairDomElement of pairDomElements) {
                        if (pairDomElement.type == 'radio' && pairDomElement.value == pair[1]) {
                            pairDomElement.checked = true;
                        }
                    }
                }
            }
        }
    }
}

document.addEventListener('DOMContentLoaded', function() {
    loadFormDataFromLocalStorage();
}, false);


function dragStart(event) {
    event.dataTransfer.setData("Text", event.target.id);
}

function allowDrop(event) {
    event.preventDefault();
}

function drop(event) {
    event.preventDefault();
    var data = event.dataTransfer.getData("Text");
    event.target.appendChild(document.getElementById(data));
}

//add progressive form when javascript is enabled
if (designForm) {
    designForm.classList.add('progForm')
    document.querySelector("#subBtn").style.display = "none"
    document.querySelector("#stepButtons").style.display = "block"
}

var currentTab = 0; // Current tab is set to be the first tab (0)
showTab(currentTab); // Display the current tab

function showTab(n) {
    // This function will display the specified tab of the form...
    var x = document.getElementsByClassName("tab");
    x[n].style.display = "block";
    //... and fix the Previous/Next buttons:
    if (n == 0) {
        document.getElementById("prevBtn").style.display = "none";
    } else {
        document.getElementById("prevBtn").style.display = "inline";
    }
    if (n == (x.length - 1)) {
        document.getElementById("nextBtn").innerHTML = "Submit";
    } else {
        document.getElementById("nextBtn").innerHTML = "Next";
    }
    //... and run a function that will display the correct step indicator:
    fixStepIndicator(n)
}

function nextPrev(n) {
    // This function will figure out which tab to display
    var x = document.getElementsByClassName("tab");
    // Exit the function if any field in the current tab is invalid:
    if (n == 1 && !validateForm()) return false;
    // Hide the current tab:
    x[currentTab].style.display = "none";
    // Increase or decrease the current tab by 1:
    currentTab = currentTab + n;
    // if you have reached the end of the form...
    if (currentTab >= x.length) {
        // ... the form gets submitted:
        document.getElementById("regForm").submit();
        return false;
    }
    // Otherwise, display the correct tab:
    showTab(currentTab);
}

function validateForm() {
    // This function deals with validation of the form fields
    var x, y, i, valid = true;
    x = document.getElementsByClassName("tab");
    y = x[currentTab].getElementsByTagName("input");
    // A loop that checks every input field in the current tab:
    for (i = 0; i < y.length; i++) {
        // If a field is empty...
        if (y[i].value == "") {
            // add an "invalid" class to the field:
            y[i].className += " invalid";
            // and set the current valid status to false
            valid = false;
        }
    }
    // If the valid status is true, mark the step as finished and valid:
    if (valid) {
        document.getElementsByClassName("step")[currentTab].className += " finish";
    }
    return valid; // return the valid status
}

function fixStepIndicator(n) {
    // This function removes the "active" class of all steps...
    var i, x = document.getElementsByClassName("step");
    for (i = 0; i < x.length; i++) {
        x[i].className = x[i].className.replace(" active", "");
    }
    //... and adds the "active" class on the current step:
    x[n].className += " active";
}

const colorRadios = document.querySelectorAll('.colors input')
const shirt = document.getElementById('dropbox')
const dragtarget = document.getElementById('dragtarget')

colorRadios.forEach(radio => {
    radio.addEventListener('change', handleColorChange)
})

// when color radio buttons change value
function handleColorChange(e) {
    //change colors
    switch (e.target.value) {

        case 'white':
            shirt.style.setProperty("fill", "white")
            dragtarget.style.setProperty("color", "black")
            break;

        case 'black':
            shirt.style.setProperty("fill", "black")
            dragtarget.style.setProperty("color", "white")
            break;

        case 'red':
            shirt.style.setProperty("fill", "red")
            dragtarget.style.setProperty("color", "white")
            break;

        case 'green':
            shirt.style.setProperty("fill", "green")
            dragtarget.style.setProperty("color", "white")
            break;

        case 'blue':
            shirt.style.setProperty("fill", "blue")
            dragtarget.style.setProperty("color", "white")
            break;

        case 'pink':
            shirt.style.setProperty("fill", "pink")
            dragtarget.style.setProperty("color", "white")
            break;

        default:
            break;
    }
}

function loadShirtColor() {
    const data = localStorage.getItem('formData');

    const parsedData = JSON.parse(data);

    const shirtProfile = document.getElementById('dropbox')

    if (parsedData.color === "white") {
        dragtarget.style.setProperty("color", "black")
    }
    shirtProfile.style.fill = parsedData.color
}

loadShirtColor();

// if (document.getElementById('#white').checked) {
//     document.getElementById('dropbox').style.fill = "white"
//         // console.log("White")
// }