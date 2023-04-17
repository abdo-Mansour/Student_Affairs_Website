




let elements_in_table = 1;
let max_elements = 1;

function insert(obj)
{
    let table = document.getElementById('table');
        let table_row = table.insertRow(-1);

        let label_1 = document.createElement('label');
        label_1.setAttribute('for',elements_in_table.toString());
        let Name = table_row.insertCell(0);
        let node_1 = document.createTextNode(obj.Name);
        label_1.appendChild(node_1);
        Name.appendChild(label_1);
        
        let label_2 = document.createElement('label');
        label_2.setAttribute('for',elements_in_table.toString());
        let ID = table_row.insertCell(1);
        let node_2 = document.createTextNode(obj.ID);
        label_2.appendChild(node_2);
        ID.appendChild(label_2);

        let label_3 = document.createElement('label');
        label_3.setAttribute('for',elements_in_table.toString());
        let Status = table_row.insertCell(2);
        let circle = document.createElement('span');
        circle.setAttribute('class','material-icons');
        circle.setAttribute('style','color: #12F10D; font-size:10px');
        circle.setAttribute('class','material-icons');
        circle.innerHTML = 'circle';
        label_3.appendChild(circle);
        let node_3 = document.createTextNode('Active');
        label_3.appendChild(node_3);
        Status.appendChild(label_3);

    
        let Select = table_row.insertCell(3);
        Select.setAttribute('class','input');
        let input = document.createElement('input');
        input.setAttribute('id',elements_in_table.toString());
        input.setAttribute('type','radio');
        input.setAttribute('name','selected_student');
        input.setAttribute('class','Select');
        Select.appendChild(input);
}



function search(){

    let body = document.getElementsByTagName('tr');
    for (let index = 0; index < body.length;) {
        if (body[index].getAttribute('class') != 'head') {
            body[index].remove();
            body.length -=1;
        }
        else
        {
            index++;
        }
    }
    elements_in_table = 1;
  
    if(document.getElementById('Name').checked){
        let person = JSON.parse(localStorage.getItem(document.getElementById('Searched_element').value));
        if(person != null && (person.status == 'Active' || person.status == 'active'))
        {
            insert(person);
        }
    }
    else
    {
        for (let i = 0; i < localStorage.length; i++) {
            const key = localStorage.key(i);
            const value = localStorage.getItem(key);
            const ObjValue = JSON.parse(value);
            if(ObjValue.department == document.getElementById('Searched_element').value && (ObjValue.status == 'Active' || ObjValue.status == 'active' ))
            {
                insert(ObjValue);
            }
            elements_in_table++;
        }
        max_elements = elements_in_table;
    }
}


function Delete()
{
    for (let index = 1; index <= max_elements; index++) {
        if(elements_in_table == 0)
        {
            max_elements = elements_in_table;
            break;
        }
        if (document.getElementById(index.toString()) != null){
            if(document.getElementById(index.toString()).checked)
            {
                let Selected = document.getElementById(index.toString());
                localStorage.removeItem(Selected.parentNode.parentNode.firstChild.firstChild.innerHTML);
                Selected.parentNode.parentNode.remove();
                break;
            } 
        }
    }
}

function Send_obj()
{
    let check = document.getElementsByClassName('input');
    for (let index = 0; index < check.length; index++) {
        if (check[index].firstChild.checked) {
            localStorage.setItem("Selected_Student",localStorage.getItem(check[index].parentNode.firstChild.firstChild.innerHTML));
            break;
        }
    }
}

document.getElementById("edit_button_search").onclick = function () {
    location.href = "Edit_Student.html";
};
document.getElementById("edit_dept_search").onclick = function () {
    location.href = "add_department.html";
};
document.getElementById("view_student_search").onclick = function () {
    location.href = "view_student.html";
};



