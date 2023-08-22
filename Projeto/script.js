const fname = document.getElementById('fname');
const lname = document.getElementById('lname');
const email = document.getElementById('email');
const cpfnum = document.getElementById('cpfnum');
const submit = document.getElementsByClassName('form-register')[0];

submit.addEventListener('submit', (e)=>{
    e.preventDefault();
    console.log("Clicado")


    let ebody = `
    <b>Name:</b>${fname.value}&nbsp;${lname.value}
    <br>
    <b>Email:</b>${email.value}
    <br>
    
    `

    Email.send({
        SecureToken : "4c3e6e1b-8b4e-4072-b5bd-b86a7d78919f",
        To : (email.value),
        From : "hitsugaya-br@hotmail.com",
        Subject : "E-mail de verificação (EMPRESA)",
        Body : ebody
    }).then(
      message => alert(message)
    );
})



//049B428AE1AFDF70EB91D348501271F48F9A
//smtp.elasticemail.com:2525
//4c3e6e1b-8b4e-4072-b5bd-b86a7d78919f 