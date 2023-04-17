
let student_obj = Selected_Student;


//This should clear the previous element from the memory.
window.localStorage.removeItem(Selected_Student);

document.getElementById('name').value = student_obj["Name"];
document.getElementById("Gen").value = student_obj["Gen"];
document.getElementById("GPA").value = student_obj["GPA"];
document.getElementById("ID").value = student_obj["ID"];
document.getElementById("sta").value = student_obj["level"];
document.getElementById("date").value = student_obj["Name"];
document.getElementById("dep").value = student_obj["department"];
document.getElementById("email").value = student_obj["email"];
document.getElementById("phone").value = student_obj["phone"];

//This Script redirects to search after viewing student
document.getElementById("edit_button").onclick = function () {
        location.href = "search_student.html";
    };
