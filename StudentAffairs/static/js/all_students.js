
//get data from local storage and load it into table
const table = document.querySelector('table');
let currentStatus = {};

for (let i = 0; i < localStorage.length; i++) {
    const key = localStorage.key(i);
    if(key === "Selected_Student"){
        continue;
    }
    const student = localStorage.getItem(key);

    //get data from local storage
    let studentObj = JSON.parse(student);
    let studentName = studentObj.Name;
    let studentID = studentObj.ID;
    let studentStatus = studentObj.status;
    currentStatus[key] = studentStatus;
    
    //create new row
    const newRow = table.insertRow();
    //create cells
    const nameCell = newRow.insertCell();
    const idCell = newRow.insertCell();
    const statusCell = newRow.insertCell();
    //create text nodes
    const nameText = document.createTextNode(studentName);
    const idText = document.createTextNode(studentID);
    //create select element
    const statusSelect = document.createElement('select');
    statusSelect.className = "selectStat";
    //create circle element
    const circle = document.createElement('div');
    circle.className = "circleStat";
    //create main div
    const statDiv = document.createElement('div');
    statDiv.className = "StatDiv";
    statDiv.appendChild(circle);
    statDiv.appendChild(statusSelect);
    //create options
    const options = ['Active', 'Inactive'];
    options.forEach(option => {
        const optionElement = document.createElement('option');
        optionElement.value = option;
        optionElement.textContent = option;
        statusSelect.appendChild(optionElement);
    });
    
    if(studentStatus === "Active"){
        statusSelect.value = "Active";
    } else if(studentStatus === "Inactive"){
        statusSelect.value = "Inactive";
    }

    //add text to cells
    nameCell.appendChild(nameText);
    idCell.appendChild(idText);
    statusCell.appendChild(statDiv);
    //add id to select element
    statusSelect.id = studentName;

}

//get all drop down elements
const statDivs = document.querySelectorAll(".StatDiv");

statDivs.forEach(statDiv => {
    const circle = statDiv.querySelector(".circleStat");
    const selectDrop = statDiv.querySelector("select");
    const statusValue = selectDrop.value;


    
    if (statusValue === "Active") {
        circle.style.backgroundColor = "#00ff1a";
    } else if(statusValue === "Inactive") {
        circle.style.backgroundColor = "#ff3300";
    }

    selectDrop.addEventListener("change", () => statusChanged(selectDrop.id));
    
});

//function runs when the status is changed
function statusChanged(ID) {
    
    //get current status value
    let selectDrop = document.getElementById(ID);
    let statusValue = selectDrop.value;
    //get previous div element
    let circle = selectDrop.previousElementSibling;
    //change color according to status
    //console.log(statusValue);
    currentStatus[ID] = statusValue;
    
    if (statusValue === "Active" || statusValue === "active") {
        circle.style.backgroundColor = "#00ff1a";
    } else if(statusValue === "Inactive" || statusValue === "inactive") {
        circle.style.backgroundColor = "#ff3300";
    }
}


//save changes to local storage

function updateData(){
    console.log("data has been updated");
    for(let i = 0; i < localStorage.length ; i++){
        //console.log(i);

        const key = localStorage.key(i);
        if(key === "Selected_Student"){
            continue;
        }
        const student = localStorage.getItem(key);
        let studentObj = JSON.parse(student);
        console.log("key: " + key);
        console.log("studentObj: " + currentStatus[key]);
        studentObj.status = currentStatus[key];
        localStorage.removeItem(key);
        localStorage.setItem(key, JSON.stringify(studentObj));
    }
    alert("Data has been updated!");
}
