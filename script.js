// Contact Form Submission (basic functionality)
document.getElementById("contact-form").addEventListener("submit", function (event) {
    event.preventDefault();
    
    // Capture form data
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;

    // Basic validation (add more as needed)
    if (name && email && message) {
        alert("Thank you for your message, " + name + "!");
        // Reset form
        document.getElementById("contact-form").reset();
    } else {
        alert("Please fill out all fields.");
    }
});
