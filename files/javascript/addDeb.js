let button = document.querySelector(`.butt.b1`);
let arrow = document.querySelector(`.department #dep>div:first-child`);
let deps = document.querySelector(`.department .parent`);
let ds = document.querySelectorAll(`.parent>div`)
console.log(deps)
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

window.onload = function() {
    let editStudent = window.localStorage.getItem("editStudent");
    editStudent = JSON.parse(editStudent)
    let inputs = document.querySelectorAll("input");
    let i = 0;
    for (let a in editStudent) {
        inputs[i].value = editStudent[a];
        i++;
        if (i == 9) {
            break;
        }
    }
    let a = 0;
    arrow.addEventListener("click", function() {
        if (deps.classList.contains("active")) {
            deps.classList.remove("active");
        } else {
            deps.classList.add("active");
        }
        if (arrow.classList.contains("active")) {
            arrow.classList.remove("active")
        } else {
            arrow.classList.add("active")
        }
    });
    ds.forEach((ele) => {
        ele.addEventListener("click", (event) => {
            ds.forEach((e) => { e.classList.remove("active") })
            event.target.classList.add("active");
        })
    });
    button.onclick = () => {
        let aaa = document.querySelector(`.parent>div.active`);
        editStudent["Department"] = aaa.dataset.dep;
        console.log(editStudent["Department"])
        console.log(editStudent);
        editStudent = JSON.stringify(editStudent);
        window.localStorage.setItem("editStudent", editStudent);
    }
}

// window.onload = () => {
//     let obj = { name: "hzaem", Gender: "male", cpa: "2", ID: 20210525, Level: 3, Status: "active", DateBirth: "9-29-2003", Email: "hazemelbehary@gmail.com", Phone: "01118013540", Department: "IS" };
// obj = JSON.stringify(obj);
// let a = window.localStorage.setItem("editStudent", obj);

// }
