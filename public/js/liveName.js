function myFunction() {
    var x = document.getElementById("myInput").value;
    document.getElementById("demo").innerHTML = x;
}

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

    if (data) {
        const parsedData = JSON.parse(data);

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

document.addEventListener('DOMContentLoaded', function() {
    loadFormDataFromLocalStorage();
}, false);