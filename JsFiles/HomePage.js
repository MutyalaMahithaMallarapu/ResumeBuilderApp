document.getElementById('myForm').addEventListener('submit', function(event){
const Name = document.getElementById('Name').value;
const Email = document.getElementById('email').value;
const Qualification = document.getElementById('qualification').value;
const CGPA = document.getElementById('cgpa').value;
const Skills = document.getElementById('skills').value

event.preventDefault()
localStorage.setItem('Name', Name);
localStorage.setItem('Email', Email);
localStorage.setItem('Qualification', Qualification);
localStorage.setItem('CGPA', CGPA);
localStorage.setItem('Skills', Skills)
window.location.href="Resume.html"
})

