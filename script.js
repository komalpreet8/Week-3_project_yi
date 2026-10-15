// 1. DARK MODE FUNCTIONALITY

const themeButton = document.getElementById("themeButton");

themeButton.addEventListener("click", function () {

    document.body.classList.toggle("dark");

    if (document.body.classList.contains("dark")) {
        themeButton.textContent = "☀️ Light Mode";
    } else {
        themeButton.textContent = "🌙 Dark Mode";
    }

});


// 2. SHOW AND HIDE PRODUCT DETAILS

const detailsButtons = document.querySelectorAll(".detailsButton");

detailsButtons.forEach(function (button) {

    button.addEventListener("click", function () {

        const details = button.nextElementSibling;

        if (details.hidden) {

            details.textContent = button.dataset.info;
            details.hidden = false;
            button.textContent = "Hide Details";

        } else {

            details.hidden = true;
            button.textContent = "Show Details";

        }

    });

});


// 3. READ MORE FUNCTIONALITY

const readMoreButton = document.getElementById("readMoreButton");
const extraText = document.getElementById("extraText");

readMoreButton.addEventListener("click", function () {

    if (extraText.hidden) {

        extraText.hidden = false;
        readMoreButton.textContent = "Read Less";

    } else {

        extraText.hidden = true;
        readMoreButton.textContent = "Read More";

    }

});


// 4. CONTACT FORM VALIDATION

const contactForm = document.getElementById("contactForm");

contactForm.addEventListener("submit", function (event) {

    // Prevent the page from reloading.
    event.preventDefault();

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message").value.trim();

    const nameError = document.getElementById("nameError");
    const emailError = document.getElementById("emailError");
    const messageError = document.getElementById("messageError");
    const formResult = document.getElementById("formResult");

    // Clear previous errors.
    nameError.textContent = "";
    emailError.textContent = "";
    messageError.textContent = "";
    formResult.textContent = "";

    let isValid = true;

    // Validate name.
    if (name.length < 2) {

        nameError.textContent =
            "Please enter a name with at least 2 characters.";

        isValid = false;
    }

    // Validate email.
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailPattern.test(email)) {

        emailError.textContent =
            "Please enter a valid email address.";

        isValid = false;
    }

    // Validate message.
    if (message.length < 10) {

        messageError.textContent =
            "Message must contain at least 10 characters.";

        isValid = false;
    }

    // Display the result.
    if (isValid) {

        formResult.textContent =
            "Thank you, " + name + "! Your form passed validation.";

        formResult.style.color = "green";

        contactForm.reset();

    } else {

        formResult.textContent =
            "Please correct the errors above.";

        formResult.style.color = "red";

    }

});


// 5. AUTOMATICALLY DISPLAY THE CURRENT YEAR

document.getElementById("year").textContent =
    new Date().getFullYear();