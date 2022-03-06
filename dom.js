//create a button and add it to the html (the document)
const body = document.querySelector("body")
const button = document.createElement("button")
button.innerHTML = "button"
body.appendChild(button)

// When the button is clicked:
// - Insert an h1 tag with the text “Javascript test”
// - Change the background color of the body
button.addEventListener("click", buttonOnClick)
function buttonOnClick() {
    const h1 = document.createElement("h1")
    h1.innerHTML = "Javascript test"
    body.appendChild(h1)
    if (body.style.backgroundColor == "blue") {
        body.style.backgroundColor = "white"
    }
    else {
        body.style.backgroundColor = "blue"
    }
}
