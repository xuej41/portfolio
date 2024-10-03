//Webpage Fade-in Effect
window.onload = function() {
    document.body.classList.add('fade-in');
};



//Typewriter Function
const words = ["Web Developer", "Computer Engineer", "Mechanic", "Hardware Enthusiast"];
let wordIndex = 0;
let charIndex = 0;
let isDeleting = false;
const typingSpeed = 150;
const deletingSpeed = 100;
const delayBetweenWords = 1000; // Delay between words

function typeWriter() {
    const dynamicText = document.getElementById("dynamic-text");
    
    // Determine current word
    const currentWord = words[wordIndex];
    
    if (isDeleting) {
        // Delete characters
        dynamicText.textContent = currentWord.substring(0, charIndex--);
        
        // Check if word is completely deleted
        if (charIndex < 0) {
            isDeleting = false;
            wordIndex = (wordIndex + 1) % words.length; // Move to the next word
            setTimeout(typeWriter, typingSpeed);
        } else {
            setTimeout(typeWriter, deletingSpeed);
        }
    } else {
        // Type characters
        dynamicText.textContent = currentWord.substring(0, charIndex++);
        
        // Check if word is fully typed
        if (charIndex > currentWord.length) {
            isDeleting = true; // Start deleting after typing
            setTimeout(typeWriter, delayBetweenWords); // Wait before deleting
        } else {
            setTimeout(typeWriter, typingSpeed);
        }
    }
}
// Start the typing effect on page load
document.addEventListener("DOMContentLoaded", function() {
    setTimeout(typeWriter, typingSpeed);
});




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