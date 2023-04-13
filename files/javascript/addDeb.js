let button = document.querySelector(`.butt`);
const obj = {
    name: "a",
    Gen: "c",
    cp: "d",
    ID: "cx",
    level: "cv",
    sta: "",
    date: "vc",
    dep: "c",
    email: "c",
    phone: "cv"
}
let arr2 = JSON.stringify(obj);
window.localStorage.setItem("DepartmentData", arr2);
button.onclick = function() {
    let inputs = document.querySelectorAll(`input`);
    inputs.forEach((ele) => {
        obj[ele.dataset.set] = ele.value;
        ele.value = "";
    })
    getEleFromLocalStorage(obj);
}

function getEleFromLocalStorage(obj) {
    let b = window.localStorage.getItem("DepartmentData");
    let arr = Array.from(JSON.parse(b));
    arr.push(obj);
    let c = JSON.stringify(arr);
    window.localStorage.setItem("DepartmentData", c);
}