

// Function to validate the form
function validate(e) {
    hideErrors();

    // Determine if the form has errors
    if (formHasErrors()) {
        e.preventDefault();
        return false;
    }

    // Show success message and allow form submission
    document.getElementById("successMessage").classList.remove("hidden");
    return true;
}

// Function to handle form reset
function resetForm(e) {
    if (confirm('Clear form?')) {
        hideErrors();
        document.getElementById("successMessage").classList.add("hidden");
        return true;
    }
    e.preventDefault();
    return false;
}

// Function to check for form errors
function formHasErrors() {
    let hasErrors = false;

    // Full Name
    let fullName = document.getElementById("fullName").value.trim();
    if (fullName === "") {
        document.getElementById("fullNameError").style.display = "block";
        hasErrors = true;
    }

    // Address
    let address = document.getElementById("address").value.trim();
    if (address === "") {
        document.getElementById("addressError").style.display = "block";
        hasErrors = true;
    }

    // City
    let city = document.getElementById("city").value.trim();
    if (city === "") {
        document.getElementById("cityError").style.display = "block";
        hasErrors = true;
    }

    // Postal Code
    let postalCode = document.getElementById("postalCode").value.trim();
    let postalCodePattern = /^[A-Za-z]\d[A-Za-z][ -]?\d[A-Za-z]\d$/;
    if (postalCode === "") {
        document.getElementById("postalCodeError").style.display = "block";
        hasErrors = true;
    } else if (!postalCodePattern.test(postalCode)) {
        document.getElementById("postalCodeError").style.display = "block";
        hasErrors = true;
    }

    // Email
    let email = document.getElementById("email").value.trim();
    let emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (email === "") {
        document.getElementById("emailError").style.display = "block";
        hasErrors = true;
    } else if (!emailPattern.test(email)) {
        document.getElementById("emailError").style.display = "block";
        hasErrors = true;
    }

    // Phone Number
    let phoneNumber = document.getElementById("phoneNumber").value.trim();
    if (phoneNumber === "") {
        document.getElementById("phoneNumberError").style.display = "block";
        hasErrors = true;
    }

    // Contact Preference
    let contactPreference = document.getElementsByName("contactPreference");
    let contactPreferenceSelected = Array.from(contactPreference).some(radio => radio.checked);
    if (!contactPreferenceSelected) {
        document.getElementById("contactPreferenceError").style.display = "block";
        hasErrors = true;
    }

    // Message
    let message = document.getElementById("message").value.trim();
    if (message === "") {
        document.getElementById("messageError").style.display = "block";
        hasErrors = true;
    }

    return hasErrors;
}

// Function to hide all error messages
function hideErrors() {
    let errors = document.getElementsByClassName("error");
    Array.from(errors).forEach(error => error.style.display = "none");
}

// Function to handle page load
function load() {
    hideErrors();
    document.getElementById("contactForm").addEventListener("submit", validate);
    document.getElementById("contactForm").addEventListener("reset", resetForm);
}

// Add event listener for page load
document.addEventListener("DOMContentLoaded", load);
