let namee = window.localStorage.getItem("Selected_Student");
let Genders = ['Male', 'Female'];
let statutes = ['Active', 'Inactive'];
document.getElementById('name').value = JSON.parse(namee).Name;
for(let i = 0; i < 2; i++){
    if (JSON.parse(namee).Gender === Genders[i].value)
        document.getElementById('Gen').value = Genders[i];
}


document.getElementById("GPA").value = JSON.parse(namee).GPA;
document.getElementById("ID").value = parseFloat(JSON.parse(namee).date);
for(let i = 0; i < 2; i++){
    if (JSON.parse(namee).Gender === Genders[i].value)
        document.getElementById('sta').value = statutes[i];
}
//document.getElementById("sta").value = JSON.parse(namee).status;
document.getElementById("date").value = JSON.parse(namee).date;
document.getElementById("dep").value = JSON.parse(namee).department;
document.getElementById("email").value = JSON.parse(namee).email;
document.getElementById("phone").value = JSON.parse(namee).phone;


//This Script redirects to search after viewing student
document.getElementById("edit_button").onclick = function () {
    location.href = "search_student.html";  
};
//This should clear the previous element from the memory.
//window.localStorage.removeItem(Selected_Student);

//Edit student is not working
let editButton = document.getElementById('edit_button');
submitBtn.addEventListener('click', store);
function store() {
    console.log("the student is added")
    let form = document.querySelector(`form`)
    if (form.checkValidity()) {
        obj['Name'] = document.getElementById('name').value;
        obj['Gender'] = document.getElementById('Gen').value;
        obj['GPA'] = document.getElementById('GPA').value;
        obj['ID'] = document.getElementById('ID').value;
        obj['level'] = document.getElementById('level').value;
        obj['status'] = document.getElementById('sta').value;
        obj['date'] = document.getElementById('date').value;
        obj['department'] = document.getElementById('dep').value;
        obj['email'] = document.getElementById('email').value;
        obj['phone'] = document.getElementById('phone').value;
        let key = obj['Name'];
        let object = JSON.stringify(obj);
        localStorage.setItem(key, object);
    }
}