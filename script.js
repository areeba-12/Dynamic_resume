// Select the form fieldset for the "Skills" section and the button
var skillsFieldset = document.getElementById("skillsFieldset");
var toggleButton = document.getElementById("toggleSkillsBtn");
// Function to toggle the visibility of the Skills section
function toggleSkillsVisibility() {
    if (skillsFieldset.style.display === "none") {
        skillsFieldset.style.display = "block";
        toggleButton.textContent = "Hide Skills";
    }
    else {
        skillsFieldset.style.display = "none";
        toggleButton.textContent = "Show Skills";
    }
}
// Add event listener to the toggle button
toggleButton.addEventListener("click", toggleSkillsVisibility);
