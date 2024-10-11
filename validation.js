function validateForm() {
    let username = document.getElementById('username').value;
    let email = document.getElementById('email').value;
    let phone = document.getElementById('phone').value;
    let password = document.getElementById('password').value;
    let confirmPassword = document.getElementById('confirmPassword').value;
    let gender = document.querySelector('input[name="gender"]:checked');
    let ageGroup = document.getElementById('ageGroup').value;

    // Clear previous error styles
    document.querySelectorAll('label').forEach(label => {
        label.style.color = '';
    });

    let valid = true;

    // Validate Username
    const usernameRegex = /^[a-z0-9]{4,12}$/;
    if (!usernameRegex.test(username)) {
        valid = false;
        document.querySelector('label[for="username"]').style.color = 'orange';
    }

    // Validate Email
    const emailRegex = /^[\w-\.]+@([\w-]+\.)+[a-z]{2,4}$/;
    if (!emailRegex.test(email)) {
        valid = false;
        document.querySelector('label[for="email"]').style.color = 'orange';
    }

    // Validate Phone Number
    const phoneRegex = /^\(\d{3}\)-\d{3}-\d{4}$/;
    if (!phoneRegex.test(phone)) {
        valid = false;
        document.querySelector('label[for="phone"]').style.color = 'orange';
    }

    // Validate Password
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_]).{9,}$/;
    if (!passwordRegex.test(password)) {
        valid = false;
        document.querySelector('label[for="password"]').style.color = 'orange';
    }

    // Confirm Password Match
    if (password !== confirmPassword) {
        alert("Passwords do not match");
        valid = false;
    }

    // Validate Gender Selection
    if (!gender) {
        valid = false;
        document.querySelector('label[for="gender"]').style.color = 'orange';
    }

    // Validate Age Group
    if (!ageGroup) {
        valid = false;
        document.querySelector('label[for="ageGroup"]').style.color = 'orange';
    }

    // Submit if valid
    if (valid) {
        alert("Form submitted successfully!");
        // Here you could add form submission logic
    }
}
