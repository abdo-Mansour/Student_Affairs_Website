
// const obj = {
//     firstName: "John",
//     lastName: "Doe",
//     age: 50,
//     eyeColor: "blue"
// };
// const strObj = JSON.stringify(obj);
// localStorage.setItem(obj.firstName, strObj);


// function viewAll() {

for (let i = 0; i < localStorage.length; i++) {
    const key = localStorage.key(i);
    const value = localStorage.getItem(key);

    const ObjValue = JSON.parse(value);     // Get Object from LocalStorage //


    const table_row = document.createElement("tr");
    const table_data1 = document.createElement("td");
    const table_data2 = document.createElement("td");
    const table_data3 = document.createElement("td");

    // Inside td 3 //
    const Select = document.createElement("select");
    Select.setAttribute("class", "my-select");
    const Option1 = document.createElement("option");
    const Option2 = document.createElement("option");


    const Node1 = document.createTextNode(ObjValue.Name);
    const Node2 = document.createTextNode(ObjValue.ID);
    const Node3 = document.createTextNode(ObjValue.status);
    const Node4 = document.createTextNode("circle");
    const Node5 = document.createTextNode("active");
    const Node6 = document.createTextNode("inactive");

    const Div = document.createElement("div");          // This Div will contain the Select and the options //
    Div.setAttribute('id', 'StatDiv');

    const Span = document.createElement("span");        // This Span is the Gif before Status //
    Span.setAttribute("class", "material-icons");
    if (ObjValue.status === "active") {
        Span.setAttribute("style", "color: #0eff00; font-size:10px");
        //   Select.value = Node5;
        Option1.setAttribute("selected", "true");

    }
    if (ObjValue.status === "inactive") {
        Span.setAttribute("style", "color: red; font-size:10px");
        Option2.setAttribute("selected", "true");
        //  Select.value = Node6;
    }




    Div.appendChild(Span);



    table_data1.appendChild(Node1);
    table_data2.appendChild(Node2);

    Span.appendChild(Node4);
    // table_data3.appendChild(Node3);
    Option1.setAttribute("value", "active");
    Option2.setAttribute("value", "inactive");
    Option1.appendChild(Node5);
    Option2.appendChild(Node6);

    Select.appendChild(Option1);
    Select.appendChild(Option2);

    Div.appendChild(Select);

    table_data3.appendChild(Div);

    table_row.appendChild(table_data1);
    table_row.appendChild(table_data2);
    table_row.appendChild(table_data3);

    const element = document.getElementById("table");
    element.appendChild(table_row);


}
function Update() {
    var selectElements = document.querySelectorAll(".my-select");
    //console.log(selectElements);
    selectElements.forEach(function (selectElement) {
        selectElement.addEventListener('change', function () {
            // Get the value of the selected option
            const selectedValue = selectElement.value;
            // Use the selected value in your function or store it in a variable
            console.log('Selected value:', selectedValue);
            // Call your function with the selected value

        });
    });



}
// }

// <tr>
//                 <td>Ahmed Mansour</td>
//                 <td>20210577</td>
//                 <td>
//                     <div id="StatDiv">
//                         <span class="material-icons" style="color: red; font-size:10px">circle</span>
//                         <select>
//                             <option value="Active">Active</option>
//                             <option value="Inactive">Inactive</option>
//                         </select>
//                     </div>

//                 </td>
//             </tr> 