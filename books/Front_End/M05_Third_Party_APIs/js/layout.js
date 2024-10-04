document.getElementById("contactForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent the form from submitting

    // Get form data
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;

    // Simulate form submission and show success message
    document.getElementById("successMsg").textContent = "Thank you, " + name + "! Your message has been sent.";
    
    // Clear form fields
    document.getElementById("contactForm").reset();
});
