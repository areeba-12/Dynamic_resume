// Select form elements
var form = document.getElementById('resumeform');
var resumeOutput = document.getElementById('resumeOutput');
var resumeContent = document.getElementById('resumeContent');
// Function to generate resume from form data
function generateResume() {
    // Retrieve values from the form
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var phone = document.getElementById('phone').value;
    var education = document.getElementById('education').value;
    var experience = document.getElementById('experience').value;
    var skills = document.getElementById('skills').value;
    // Create resume content
    var resumeHTML = "\n        <h3>Personal Information</h3>\n        <p><strong>Name:</strong> ".concat(name, "</p>\n        <p><strong>Email:</strong> ").concat(email, "</p>\n        <p><strong>Phone:</strong> ").concat(phone, "</p>\n\n        <h3>Education</h3>\n        <p>").concat(education, "</p>\n\n        <h3>Experience</h3>\n        <p>").concat(experience, "</p>\n\n        <h3>Skills</h3>\n        <p>").concat(skills, "</p>\n    ");
    // Display the generated resume
    resumeContent.innerHTML = resumeHTML;
    resumeOutput.style.display = 'block';
}
// Add event listener to the generate resume button
var generateResumeBtn = document.getElementById('generateResumeBtn');
generateResumeBtn.addEventListener('click', generateResume);

