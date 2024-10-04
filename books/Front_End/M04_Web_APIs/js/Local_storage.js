document.getElementById("registerForm").addEventListener("submit", function(event) {
  event.preventDefault(); // Prevent form from submitting

  // Get form data
  const username = document.getElementById("username").value;
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;
  const gender = document.getElementById("gender").value;
  const birthdate = document.getElementById("birthdate").value;

  // Create user object
  const user = {
      username: username,
      email: email,
      password: password,
      gender: gender,
      birthdate: birthdate
  };

  // Save user data to local storage
  localStorage.setItem("user", JSON.stringify(user));

  // Display success message
  document.getElementById("successMsg").textContent = "Registration successful! Data stored in local storage.";
  
  // Clear form inputs
  document.getElementById("registerForm").reset();
});
