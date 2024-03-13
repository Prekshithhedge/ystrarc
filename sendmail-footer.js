function sendmailfooter() {
    var email = document.getElementById('email2');
    email.style.border = '1px solid #ccc';

    if (email.checkValidity() === false) {
        email.style.border = '2px solid red';
        alert("Please enter a valid email address.");
        return;
    }

    var emailjsUserId = process.env.EMAILJS_USER_ID; // Retrieve EmailJS user ID from environment variable
    if (!emailjsUserId) {
        alert("EmailJS user ID not found in environment variables.");
        return;
    }

    var data = {
        service_id: 'service_61w2nvd',
        template_id: 'template_izd43fn',
        user_id: emailjsUserId, // Use the EmailJS user ID from environment variable
        template_params: {
            'to_name': 'YSTR Structural Consultant & Design Studio',
            'from_email': email.value, // Include the email address here
        }
    };

    fetch('https://api.emailjs.com/api/v1.0/email/send', {
        method: "POST",
        body: JSON.stringify(data),
        headers: {
            'Content-Type': 'application/json'
        }
    })
    .then((response) => {
        if (response.ok) {
            alert('Your mail is sent!');
        } else {
            throw new Error('Request failed with status ' + response.status);
        }
    })
    .catch((error) => {
        alert('Oops... ' + JSON.stringify(error));
    });
}
