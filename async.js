// Make an API call using the Fetch API. Make use of the following API:
// https://reqres.in/api/users
// Display the first_name of the first three users in the DOM
// const body = document.querySelector("body")
const p = []
fetch("https://reqres.in/api/users")
    .then(response => response.json())
    .then(results => {
        for (let i = 0; i < 3; i++){
            p[i] = document.createElement("p")
            p[i].innerHTML += results.data[i].first_name
            body.appendChild(p[i])
        }
})