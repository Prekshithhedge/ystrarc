function sendmail() {
    var designation = document.getElementById('designation');
    var comments = document.getElementById('comment');
 // Validate the required fields
 var name = document.getElementById('name');
 var contactNumber = document.getElementById('contactNumber');
 var email = document.getElementById('email');
   // Reset borders to default
   name.style.border = '1px solid #ccc';
 contactNumber.style.border = '1px solid #ccc';
 email.style.border = '1px solid #ccc';

 if (name.checkValidity() === false) {
     name.style.border = '2px solid red';
     alert("Please enter your name.");
     return;
 }

 if (contactNumber.checkValidity() === false) {
     contactNumber.style.border = '2px solid red';
     alert("Please enter a valid 10-digit phone number.");
     return;
 }

 if (email.checkValidity() === false) {
     email.style.border = '2px solid red';
     alert("Please enter a valid email address.");
     return;
 }
    var data = {
        service_id: 'service_61w2nvd',
        template_id: 'template_73zdyjy',
        user_id: 'PhuE0-i5_t1lGiqRl',
        template_params: {
            'from_name': name.value,
            'to_name': 'YSTR Structural Consultant & Design Studio',
            'from_designation': designation.value, 
            'from_contact': contactNumber.value, 
            'from_email': email.value, // Include the email address here
            'from_message': comments.value, 
            
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
