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

const obj = {
    Name: "",
    Gender: "",
    GPA: "",
    ID: "",
    level: "",
    status: "",
    date: "",
    department: "",
    email: "",
    phone: ""
}

let edit_butt = document.getElementById('edit_button');
edit_butt.addEventListener('click', store);
function store() {
    console.log("the student is edited")
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
