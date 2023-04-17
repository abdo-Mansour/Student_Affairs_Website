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

function store() {
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
