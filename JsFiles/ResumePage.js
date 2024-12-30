const displayName = localStorage.getItem('Name')
const displayEmail = localStorage.getItem('Email')
const displayQualification = localStorage.getItem('Qualification')
const displayCGPA = localStorage.getItem('CGPA')
const displaySkills = localStorage.getItem('Skills')

document.getElementById('displayName').textContent = displayName; 
document.getElementById('displayEmail').textContent = displayEmail;
document.getElementById('displayQualification').textContent = displayQualification
document.getElementById('displayCGPA').textContent = displayCGPA
document.getElementById('displaySkills').textContent = displaySkills