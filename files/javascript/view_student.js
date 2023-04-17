let namee = window.localStorage.getItem("Selected_Student");
{"Name":"adham","Gender":"male","GPA":"3333","ID":"22222","level":"1","status":"active","date":"2222-02-22","department":"asdfa","email":"asdfaa@gmai.com","phone":"99999999999"}

document.getElementById('name').value = JSON.parse(namee).Name;
document.getElementById("Gen").value = JSON.parse(namee).Gender;
document.getElementById("GPA").value = JSON.parse(namee).GPA;
document.getElementById("ID").value = JSON.parse(namee).ID;
document.getElementById("sta").value = JSON.parse(namee).status;
document.getElementById("date").value = JSON.parse(namee).date;
document.getElementById("dep").value = JSON.parse(namee).department;
document.getElementById("email").value = JSON.parse(namee).email;
document.getElementById("phone").value = JSON.parse(namee).phone;



//This Script redirects to search after viewing student
document.getElementById("edit_button").onclick = function () {
     location.href = "search_student.html";
};
//This should clear the previous element from the memory.
window.localStorage.removeItem(Selected_Student);
