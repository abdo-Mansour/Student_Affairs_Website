let namee = window.localStorage.getItem("Selected_Student");
let Genders = ['Male', 'Female'];
let statutes = ['Active', 'Inactive'];
document.getElementById('name').value = JSON.parse(namee).Name;
for(let i = 0; i < 2; i++){
    if (JSON.parse(namee).Gender === Genders[i].value)
        document.getElementById('Gen').value = Genders[i];
}


document.getElementById('name').value = JSON.parse(namee).Name;
document.getElementById('Gen').value = JSON.parse(namee).Gender;

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
document.getElementById("back_button").onclick = function () {
    location.href = "search_student.html";  
};
document.getElementById("edit_button").onclick = function () {
    location.href = "search_student.html";  
};
//This should clear the previous element from the memory.
//window.localStorage.removeItem(Selected_Student);


let temp_obj = JSON.parse(namee);
//Edit student is not working
let editButton = document.getElementById('edit_button');
editButton.addEventListener('click', store);
function store() {
    console.log("the student is added")
    let form = document.querySelector(`form`)
    if (form.checkValidity()) {
        temp_obj.Name = document.getElementById('name').value;
        temp_obj.Gender = document.getElementById('Gen').value;
        temp_obj.GPA = document.getElementById('GPA').value;
        temp_obj.ID = document.getElementById('ID').value;
        //temp_obj.level = document.getElementById('level').value;
        //temp_obj.status = document.getElementById('sta').value;
        temp_obj.date = document.getElementById('date').value;
        temp_obj.department = document.getElementById('dep').value;
        temp_obj.email = document.getElementById('email').value;
        temp_obj.phone = document.getElementById('phone').value;
        let key = temp_obj.Name.value;

        if(temp_obj.Name !== JSON.parse(namee).Name){
            window.localStorage.removeItem(JSON.parse(namee).Name);

        }
        let object = JSON.stringify(temp_obj);
        localStorage.setItem(document.getElementById('name').value = JSON.parse(namee).Name, object);
        window.localStorage.removeItem('Selected_Student');


    }
}