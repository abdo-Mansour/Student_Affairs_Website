//get data from local storage and load it into table
const table = document.querySelector("table");
let updatedStatus = {};

//get all drop down elements
const statDivs = document.querySelectorAll(".StatDiv");

statDivs.forEach((statDiv) => {
  const circle = statDiv.querySelector(".custom-circle");
  const selectDrop = statDiv.querySelector("select");
  const statusValue = selectDrop.value;

  if (statusValue === "Active") {
    circle.style.color = "#0eff00";
  } else if (statusValue === "Inactive") {
    circle.style.color = "#ff3300";
  }

  selectDrop.addEventListener("change", () => statusChanged(selectDrop.id));
});

// //function runs when the status is changed
function statusChanged(ID) {
  //get current status value
  let selectDrop = document.getElementById(ID);
  let statusValue = selectDrop.value;
  //get previous div element
  let circle = selectDrop.previousElementSibling;
  //change color according to status
  //console.log(statusValue);
  updatedStatus[ID] = statusValue;

  if (statusValue === "Active" || statusValue === "active") {
    circle.style.color = "#00ff1a";
  } else if (statusValue === "Inactive" || statusValue === "inactive") {
    circle.style.color = "#ff3300";
  }
}

function getCSRFToken() {
  var csrfTokenElement = document.querySelector('[name="csrfmiddlewaretoken"]');
  if (csrfTokenElement) {
    return csrfTokenElement.value;
  }
  return null;
}

function updateData() {
  var selects = document.querySelectorAll("select");

  // Create an empty object
  var data = {};

  // Iterate over the select elements and store their values in the object
  selects.forEach(function (select) {
    var id = select.id;
    var status = select.value;
    data[id] = status;
  });
  var jsonData = JSON.stringify(data);
  // Ajax Request
  console.log("updateBtn clicked");
  var xhr = new XMLHttpRequest();
  var csrftoken = getCSRFToken(); // Call the function to get the CSRF token
  xhr.open("POST", "post_request");
  xhr.setRequestHeader("Content-Type", "application/json");
  xhr.setRequestHeader("X-CSRFToken", csrftoken); // Include CSRF token
  xhr.onreadystatechange = function () {
    if (xhr.readyState === 4 && xhr.status === 200) {
      // Request successful, do something with the response
      console.log(this.responseText);
    }
  };

  xhr.send(jsonData);
}
