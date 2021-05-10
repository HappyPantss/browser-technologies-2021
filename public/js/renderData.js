function loadFormDataFromLocalStorage() {

    const data = localStorage.getItem('formData');
    const piecesOffline = document.querySelector('.piecesOffline')
    const overviewPieces = document.querySelector('.overviewPieces')

    //add progressive form when javascript is enabled
    if (overviewPieces) {
        piecesOffline.style.display = "none"
        if (data) {
            const parsedData = JSON.parse(data);

            const userProfile = document.querySelector('.overviewPieces')
            userProfile.innerHTML = ''

            const profileElement =
                `
                <article class="pieces">
                <div class="sofa">
                    <div class="dropzone">
                        <div class="droptarget">
                            <p id="dragtarget">${parsedData.text}</p>
                        </div>
    
                        <div class="droptarget" id="dragtarget2"></div>
    
                        <div class="droptarget" id="dragtarget3"></div>
                    </div>
                    <svg fill="${parsedData.color}" id="dropbox" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="300" height="300" viewBox="0 0 40.143 40.143" xml:space="preserve">
                        <g>
                            <path d="M 28.744 38.024 L 11.397 38.024 C 10.293 38.024 9.397 37.128 9.397 36.024 L 9.397 18.182 L 8.279 19.3 C 7.904 19.676 7.395 19.886 6.864 19.886 C 6.334 19.886 5.824 19.675 5.449 19.3 L 0.584 14.431 C -0.196 13.65 -0.196 12.385 0.584 11.603 L 9.48 2.704 C 9.914 2.269 10.541 2.058 11.145 2.134 C 11.228 2.124 11.312 2.118 11.397 2.118 L 13.87 2.118 C 14.548 2.118 15.181 2.462 15.549 3.031 C 16.336 4.247 18.111 5.032 20.071 5.032 C 22.031 5.032 23.807 4.247 24.594 3.031 C 24.962 2.462 25.594 2.118 26.273 2.118 L 28.746 2.118 C 28.831 2.118 28.915 2.123 28.998 2.134 C 29.08 2.124 29.163 2.118 29.247 2.118 C 29.248 2.118 29.248 2.118 29.248 2.118 C 29.778 2.118 30.287 2.329 30.663 2.704 L 39.557 11.602 C 40.337 12.383 40.337 13.648 39.557 14.43 L 34.693 19.3 C 34.318 19.675 33.809 19.886 33.279 19.886 C 33.278 19.886 33.278 19.886 33.278 19.886 C 32.748 19.887 32.239 19.676 31.864 19.301 L 30.745 18.181 L 30.745 36.024 C 30.744 37.129 29.849 38.024 28.744 38.024 Z"/>
                        </g>
                    </svg>
                </div>
                
                <ul>
                    <li>Gender: ${parsedData.gender}</li>
                    <li>Size: ${parsedData.size}</li>
                    <li>Text: ${parsedData.text}</li>
                </ul>
    
                <div class="buttons">
                    <a class="formBtn" href="/design">Edit</a>
                    <a class="formBtn" id="addToCart" onclick="loadDataToCart()">+ Add to Cart</a>
                </div>
            </article>`

            userProfile.insertAdjacentHTML('beforeend', profileElement)

            const droptarget = document.querySelector('.droptarget p')
            droptarget.style.textShadow = 'none'
            if (parsedData.color === "white") {
                droptarget.style.color = 'black'
            }
        } else {
            const userProfile = document.querySelector('.overviewPieces')
            userProfile.innerHTML = ''

            const profileElement =
                `
                <article class="pieces"><a class="formBtn" href="/design">Add a new one</a></article>
                `

            userProfile.insertAdjacentHTML('beforeend', profileElement)
        }
    } else {
        if (data) {
            piecesOffline.style.display = "flex"
        } else {
            piecesOffline.style.display = "none"
        }
    }
}

document.addEventListener('DOMContentLoaded', function() {
    loadFormDataFromLocalStorage();
}, false);

function loadDataToCart() {
    const data = localStorage.getItem('formData');

    if (data) {
        const parsedData = JSON.parse(data);

        const emptyCart = document.querySelector('#emptyCart')
        emptyCart.innerHTML = ''

        const cartProfile = document.querySelector('.cartPiece')
        cartProfile.innerHTML = ''

        const cartElement =
            `
        <article class="cartItems">
            <div class="cartItem">
                <div class="sofaCart">
                    <svg fill="${parsedData.color}" id="dropbox" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="100" height="100" viewBox="0 0 40.143 40.143" xml:space="preserve">
                        <g>
                            <path d="M 28.744 38.024 L 11.397 38.024 C 10.293 38.024 9.397 37.128 9.397 36.024 L 9.397 18.182 L 8.279 19.3 C 7.904 19.676 7.395 19.886 6.864 19.886 C 6.334 19.886 5.824 19.675 5.449 19.3 L 0.584 14.431 C -0.196 13.65 -0.196 12.385 0.584 11.603 L 9.48 2.704 C 9.914 2.269 10.541 2.058 11.145 2.134 C 11.228 2.124 11.312 2.118 11.397 2.118 L 13.87 2.118 C 14.548 2.118 15.181 2.462 15.549 3.031 C 16.336 4.247 18.111 5.032 20.071 5.032 C 22.031 5.032 23.807 4.247 24.594 3.031 C 24.962 2.462 25.594 2.118 26.273 2.118 L 28.746 2.118 C 28.831 2.118 28.915 2.123 28.998 2.134 C 29.08 2.124 29.163 2.118 29.247 2.118 C 29.248 2.118 29.248 2.118 29.248 2.118 C 29.778 2.118 30.287 2.329 30.663 2.704 L 39.557 11.602 C 40.337 12.383 40.337 13.648 39.557 14.43 L 34.693 19.3 C 34.318 19.675 33.809 19.886 33.279 19.886 C 33.278 19.886 33.278 19.886 33.278 19.886 C 32.748 19.887 32.239 19.676 31.864 19.301 L 30.745 18.181 L 30.745 36.024 C 30.744 37.129 29.849 38.024 28.744 38.024 Z"/>
                        </g>
                    </svg>
                </div>
            </div>

            <div class="cartItem">
                <ul>
                    <li>Gender:
                        ${parsedData.gender}
                    </li>
                    <li>Size:
                        ${parsedData.size}
                    </li>
                    <li>Color:
                        ${parsedData.color}
                    </li>
                    <li>Text:
                        ${parsedData.text}
                    </li>
                </ul>
            </div>

            <div class="cartItem">
                <a class="deleteBtn" onclick="deleteItem()">🗑️</a>
            </div>
        </article>
        `

        cartProfile.insertAdjacentHTML('beforeend', cartElement)
    } else {

        const cartProfile = document.querySelector('.cartPiece')
        cartProfile.innerHTML = ''

        const cartElement =
            `<p>Make new shirts to add them to your shopping cart.</p>`

        cartProfile.insertAdjacentHTML('beforeend', cartElement)
    }
}

function deleteItem() {

    const cartProfile = document.querySelector('.cartPiece')
    cartProfile.innerHTML = ''

    const emptyCart = document.querySelector('#emptyCart')
    emptyCart.innerHTML = "You're shopping cart is empty.. Add one <a href='/'> here.</a>"

    const cartElement = ``

    cartProfile.insertAdjacentHTML('beforeend', cartElement)
}