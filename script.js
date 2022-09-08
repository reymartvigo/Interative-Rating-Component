let mainPage = document.querySelector(".rating")
let thankyouPage = document.querySelector(".thank-you")
let submit = document.getElementById("btn")
let rating = document.getElementById("selected")
let scales = document.querySelectorAll("#btn-scale")


submit.addEventListener("click", () =>{
    mainPage.style.display = "none"
    thankyouPage.style.display = "block"
})

scales.forEach((scale) => {
    scale.addEventListener("click", () => {
      rating.innerHTML = scale.innerHTML
    })
})




