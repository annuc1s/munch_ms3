//contact form linked to private email using EmailJs
//allows for the passing of parameters from contact form to the EmailJS service
function sendMail(contactForm) {
    emailjs.send("gmail", "template_o4rvgv4", {
        "fname": contactForm.firstname.value,
        "lname": contactForm.lastname.value,
        "email": contactForm.email.value,
        "subject": contactForm.subject.value,
        "message": contactForm.message.value,
    })
     .then(
            function (response) {
                console.log("SUCCESS", response);
            },
            function (error) {
                console.log("ERROR", error);
            }
        );
    return false;
}