let parentDiv = document.getElementById("qa-container");
let questions = parentDiv.querySelectorAll(".collapsible-btn");

console.log("bruh");
console.log(questions.length)
for (let i = 0; i < questions.length; i++) {
    console.log(i);
    questions[i].addEventListener("click", function() {
        this.classList.toggle("active");
        let content = this.nextElementSibling;
        
        if (content.style.display === "block") {
            content.style.display = "none";
        } else {
            content.style.display = "block";
        }
    });
}