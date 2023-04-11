let chevron = document.querySelectorAll(".container i");
let divs = document.querySelectorAll(".container ul li div");
chevron.forEach((e) => {
    e.addEventListener("click", (event) => {
        chevron.forEach((element) => {
            element.classList = "fa-solid fa-chevron-right"
        })
        event.target.classList = "fa-solid fa-chevron-down";
        divs.forEach((ele) => {
            ele.classList.remove("active")
        })
        let a = event.target.parentNode;
        a.classList.add("active");
        let activeClasses = document.querySelector(`.fa-solid.fa-chevron-down`)
    })
})