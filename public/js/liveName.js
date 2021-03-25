function myFunction() {
    var x = document.getElementById("myInput").value;
    document.getElementById("demo").innerHTML = x;
}

const form = document.querySelector(".design-form")
form.addEventListener('blur', (event) => {
    const formElement = document.querySelector(".design-form")
    const formData = new FormData(formElement)
    const obj = {}
    for (var pair of formData.entries()) {
        obj[pair[0]] = pair[1]
        console.log(pair[0] + ': ' + pair[1]);
    }
    localStorage.setItem('formData', JSON.stringify(obj))
    console.log(JSON.parse(localStorage.getItem('formData')))
}, true);

function once() {
    const data = localStorage.getItem('formData')
    if (data) {
        const parsedData = JSON.parse(data)
        Object.keys(parsedData).forEach(key => {
            if (parsedData[key]) {
                const inputs = document.querySelectorAll(`.design-form *[name="${key}"]`)
                inputs.forEach(input => {
                    if (input.type === 'radio' && input.value === parsedData[key]) {
                        input.checked = true;
                    } else {
                        input.value = parsedData[key]
                    }
                })
            }
        })
    }
}
document.addEventListener('DOMContentLoaded', function() {
    console.log('loaded')
    once()
}, false);