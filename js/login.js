const email_admin = localStorage.getItem('email_admin')
const password_admin = localStorage.getItem('password_admin')

function iniciarSesion(formulario){
    formulario.preventDefault();
    const email = document.getElementById('email');
    const password = document.getElementById('password');

    if(email.value === email_admin){
        if(password.value === password_admin){
            alert('Bienvenido!')
            localStorage.setItem('sesion_iniciada', 'true');
            window.location.href = '/index.html'
        } else {
            alert('Datos incorrectos (password)!')
        }
    } else{
        alert('Datos incorrectos (email)!')
    }
}