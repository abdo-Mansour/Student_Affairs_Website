let button = document.querySelector(`.butt.b1`);
let departmentSelect = document.getElementById("depSelect");
console.log(deps)



function backPage() {
    window.location.href = "search_student.html";
}


window.onload = function() {
    let editStudent = window.localStorage.getItem("Selected_Student");
    editStudent = JSON.parse(editStudent);
    console.log(editStudent);
    //load student data and display
    document.getElementById('name').value = editStudent['Name'];
    document.getElementById('Gen').value = editStudent['Gender'];
    document.getElementById('GPA').value = editStudent['GPA'];
    document.getElementById('ID').value = editStudent['ID'];
    document.getElementById('level').value = editStudent['level'];
    document.getElementById('sta').value = editStudent['status'];
    document.getElementById('date').value = editStudent['date'];
    document.getElementById('dep').value = editStudent['department'];
    document.getElementById('email').value = editStudent['email'];
    document.getElementById('phone').value = editStudent['phone'];

    
    // arrow.addEventListener("click", function() {
    //     if (deps.classList.contains("active")) {
    //         deps.classList.remove("active");
    //     } else {
    //         deps.classList.add("active");
    //     }
    //     if (arrow.classList.contains("active")) {
    //         arrow.classList.remove("active")
    //     } else {
    //         arrow.classList.add("active")
    //     }
    // });

    // ds.forEach((ele) => {
    //     ele.addEventListener("click", (event) => {
    //         ds.forEach((e) => { e.classList.remove("active") })
    //         event.target.classList.add("active");
    //     })
    // });

    button.onclick = () => {
        let studentName = editStudent.Name;
        let selectedDep = document.getElementById("depSelect").value;

        editStudent["department"] = selectedDep;

        editStudent = JSON.stringify(editStudent);
        window.localStorage.setItem(studentName, editStudent);
    }
}