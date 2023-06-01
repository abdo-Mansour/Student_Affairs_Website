function getCSRFToken() {
    var csrfTokenElement = document.querySelector('[name="csrfmiddlewaretoken"]');
    if (csrfTokenElement) {
        return csrfTokenElement.value;
    }
    return null;
}

function updateDep() {
  
    // Create an empty object
    let id = document.getElementById("studentId").textContent;
    let dep = document.getElementById("depSelect").value;
    // Iterate over the select elements and store their values in the object
    
    let url = "/departmentSave?id=" + encodeURIComponent(id) + "&dep=" + encodeURIComponent(dep);
    // Ajax Request
    var xhr = new XMLHttpRequest();
    var csrftoken = getCSRFToken(); // Call the function to get the CSRF token
    xhr.open("POST", url);
    xhr.setRequestHeader("Content-Type", "application/json");
    xhr.setRequestHeader("X-CSRFToken", csrftoken); // Include CSRF token
    xhr.onreadystatechange = function () {
      if (xhr.readyState === 4 && xhr.status === 200) {
        // Request successful, do something with the response
        console.log(this.responseText);
      }
    };
  
    xhr.send();
}

function back(){
    // Construct the URL with the query string
    var url = "/search/"; // Replace 'another-page' with the actual URL name in your Django urlpatterns
            
    // Navigate to the new page
    window.location.href = url;
}