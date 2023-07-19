document.getElementById("contactForm").addEventListener("submit", function(event) {
    event.preventDefault();
  
    // Get form values
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var message = document.getElementById("message").value;
  
    // Send form data to the server (replace with your own implementation)
    sendFormData(name, email, message);
    
    // Clear form fields
    document.getElementById("name").value = "";
    document.getElementById("email").value = "";
    document.getElementById("message").value = "";
  });
  
  function sendFormData(name, email, message) {
    // Replace this function with your own implementation to send the form data
    // to your server or process it in any other way you prefer.
    // You can use AJAX, fetch, or any other method to send the data.
    // Example:
    // var formData = {
    //   name: name,
    //   email: email,
    //   message: message
    // };
    // fetch('/your-server-endpoint', {
    //   method: 'POST',
    //   body: JSON.stringify(formData),
    //   headers: {
    //     'Content-Type': 'application/json'
    //   }
    // })
    // .then(response => response.json())
    // .then(data => {
    //   // Process the response from the server if needed
    //   console.log(data);
    // })
    // .catch(error => {
    //   // Handle any errors that occurred during the request
    //   console.error(error);
    // });
  }
  