
let button = document.querySelector("#no")
let buttonyes = document.querySelector("#yes")


button.addEventListener("click", () => {
    document.querySelector("#no")
    .innerHTML = "Yes..❤"
    document.getElementById("no")
    .style.backgroundColor = "Green"

})
let res = document.querySelector("#res")
button.addEventListener("click", () => {
    document.querySelector("#res")
    .innerHTML = "Congratulation...Thanks❤....Mujhe Ummid Thi Aap Mna Nhi Kroge😂"
    document.getElementById ("res")
    .style.color = "white"
    .style.backgroundColor = "Red"
})

button.addEventListener("click", () => {
    document.querySelector("#yes")
    .innerHTML = "Yes..❤"
    document.getElementById("yes")
    .style.backgroundColor = "Red"

})
let ress = document.querySelector("#res")
buttonyes.addEventListener("click", () => {
    document.querySelector("#res")
    .innerHTML = "Congratulation...Thanks❤....Mujhe Ummid Thi Aap Mna Nhi Kroge😍"
    document.getElementById ("res")
    .style.color = "white"
    .style.backgroundColor = "red"
})