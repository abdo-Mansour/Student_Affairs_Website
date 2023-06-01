let elements_in_table = 1;
let max_elements = 1;

function insert(obj)
{
    console.log("inserting");
    let table = document.getElementById('table');
    // delete all the elements in the table
    
    let table_row = table.insertRow(-1);

    let label_1 = document.createElement('label');
    let Name = table_row.insertCell(0);
    let node_1 = document.createTextNode(obj.name);
    label_1.appendChild(node_1);
    Name.appendChild(label_1);

    let label_2 = document.createElement('label');
    let ID = table_row.insertCell(1);
    let node_2 = document.createTextNode(obj.id);
    label_2.appendChild(node_2);
    ID.appendChild(label_2);

    let label_3 = document.createElement('label');
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
    input.setAttribute('id',obj.id);
    input.setAttribute('value',obj.id);
    input.setAttribute('type','radio');
    input.setAttribute('name','selected_student');
    input.setAttribute('class','Select');
    Select.appendChild(input);
    elements_in_table++;
}



function search(){
    

    console.log("searching");
    let query = document.getElementById('Searched_element').value;
    let method;
    if (document.getElementById('Name').checked) {
        method = 'name';
    } else if (document.getElementById('Department').checked) {
        method = 'department';
    }
    let url = "/search/search-query?query=" + encodeURIComponent(query) + "&method=" + encodeURIComponent(method);

    // Ajax Request
    let xhr = new XMLHttpRequest();
    xhr.open("GET", url);
    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4 && xhr.status === 200) {
            // Request successful, do something with the response
            let response = JSON.parse(xhr.responseText);
            console.log(response);
            let tableRows = document.getElementsByTagName('tr');
            for (let index = 0; index < tableRows.length;) {
                if (tableRows[index].getAttribute('class') != 'head') {
                    tableRows[index].remove();
                    tableRows.length -=1;
                }
                else
                {
                    index++;
                }
            }
            for(let i = 0; i < response.length; i++)
            {
                insert(response[i]);
            }

        }
    };
    console.log("sending request: " + url);
    xhr.send();
    
    
    
}

function getCSRFToken() {
    var csrfTokenElement = document.querySelector('[name="csrfmiddlewaretoken"]');
    if (csrfTokenElement) {
        return csrfTokenElement.value;
    }
    return null;
}

function deleteStudent()
{
    console.log("delete clicked");
    let allSelect = document.getElementsByClassName('Select');
    for(let i = 0; i < allSelect.length; i++)
    {
        if(allSelect[i].checked)
        {
            // localStorage.removeItem(allSelect[i].parentNode.parentNode.firstChild.firstChild.innerHTML);
            var jsonData = JSON.stringify({id: allSelect[i].value});
            // Ajax Request
            console.log(jsonData);
            console.log("delete clicked");
            var xhr = new XMLHttpRequest();
            xhr.open("POST", "/search-delete");
            xhr.onreadystatechange = function () {
                if (xhr.readyState === 4 && xhr.status === 200) {
                // Request successful, do something with the response
                    console.log(this.responseText);
                }
            };
            console.log("sending request" + jsonData)
            xhr.send(jsonData);
            allSelect[i].parentNode.parentNode.remove();
            //TODO: remove from the database
            break;
        }
    }



   
}

