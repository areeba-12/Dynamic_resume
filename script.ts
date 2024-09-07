// Select form elements
const form = document.getElementById('resumeform') as HTMLFormElement;
const resumeOutput = document.getElementById('resumeOutput') as HTMLDivElement;
const resumeContent = document.getElementById('resumeContent') as HTMLDivElement;

// Function to generate resume from form data
function generateResume() {
    // Retrieve values from the form
    const name = (document.getElementById('name') as HTMLInputElement).value;
    const email = (document.getElementById('email') as HTMLInputElement).value;
    const phone = (document.getElementById('phone') as HTMLInputElement).value;
    const education = (document.getElementById('education') as HTMLTextAreaElement).value;
    const experience = (document.getElementById('experience') as HTMLTextAreaElement).value;
    const skills = (document.getElementById('skills') as HTMLTextAreaElement).value;

    // Create resume content
    const resumeHTML = `
        <h3>Personal Information</h3>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone}</p>

        <h3>Education</h3>
        <p>${education}</p>

        <h3>Experience</h3>
        <p>${experience}</p>

        <h3>Skills</h3>
        <p>${skills}</p>
    `;

    // Display the generated resume
    resumeContent.innerHTML = resumeHTML;
    resumeOutput.style.display = 'block';
}

// Add event listener to the generate resume button
const generateResumeBtn = document.getElementById('generateResumeBtn') as HTMLButtonElement;
generateResumeBtn.addEventListener('click', generateResume);

