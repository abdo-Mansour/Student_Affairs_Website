let namee = window.localStorage.getItem("Selected_Student");


document.getElementById('name').value = JSON.parse(namee).Name;
document.getElementById('Gen').value = JSON.parse(namee).Gender;
document.getElementById("GPA").value = JSON.parse(namee).GPA;
document.getElementById("ID").value = JSON.parse(namee).ID;
document.getElementById('level').value = JSON.parse(namee).level;
document.getElementById("sta").value = JSON.parse(namee).status;
document.getElementById("date").value = JSON.parse(namee).date;
document.getElementById("dep").value = JSON.parse(namee).department;
document.getElementById("email").value = JSON.parse(namee).email;
document.getElementById("phone").value = JSON.parse(namee).phone;

window.localStorage.removeItem('Selected_Student');
