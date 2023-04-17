// let button = document.querySelector(`.butt`);
// const obj = {
//     name: "",
//     Gen: "",
//     cp: "",
//     ID: "",
//     level: "",
//     sta: "",
//     date: "",
//     dep: "",
//     email: "",
//     phone: ""
// }
// let arr2 = JSON.stringify(obj);
// let form = document.querySelector(`form`)
// window.localStorage.setItem("studentData", arr2);
// button.onclick = function() {
//     let inputs = document.querySelectorAll(`.input`);
//     if (form.checkValidity()) {
//         console.log(inputs)
//         inputs.forEach((ele) => {
//             obj[ele.dataset.set] = ele.value;
//             ele.value = "";
//         });
//         getEleFromLocalStorage(obj);
//     } else {
//         let as = "";
//         inputs.forEach((ele) => {
//             as += `Please Enter ${ele.dataset.set}` + "\n";
//         });
//         alert(as);
//     }
// }

// function getEleFromLocalStorage(obj) {
//     let b = window.localStorage.getItem("studentData");
//     let arr = Array.from(JSON.parse(b));
//     arr.push(obj);
//     let c = JSON.stringify(arr);
//     window.localStorage.setItem("studentData", c);
// }

























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
