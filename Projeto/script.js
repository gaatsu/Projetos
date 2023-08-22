const fname = document.getElementById('fname');
const lname = document.getElementById('lname');
const email = document.getElementById('email');
const cpfnum = document.getElementById('cpfnum');
const submit = document.getElementsByClassName('form-register')[0];

submit.addEventListener('submit', (e)=>{
    e.preventDefault();
    console.log("Clicado")
})