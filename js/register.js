// const usuarios = [
//     {
//         id: 1,
//         nombre: 'Admin',
//         email: 'admin@admin.com',
//         contrasenia: 'admin123'
//     }
// ]
// localStorage.setItem('usuarios', JSON.stringify(usuarios))

function registrarme (event) {
    event.preventDefault()

    const nombre = document.getElementById('nombre').value
    const email = document.getElementById('email').value
    const contrasenia = document.getElementById('contrasenia').value
    const repetirContrasenia = document.getElementById('repetirContrasenia').value
    const mensajeError = document.getElementById('mensajeError')
    mensajeError.innerHTML = ''

    if(contrasenia !== repetirContrasenia){
        mensajeError.innerHTML = 'Las contraseñas no coinciden.'
        return;
    }

    const baseDatos = localStorage.getItem('usuarios')
    const baseDatosParseada = JSON.parse(baseDatos)
    const id = baseDatosParseada.length + 1

    const usuario_nuevo = {
        id,
        nombre: nombre.trim(),
        email: email.trim().toLowerCase(),
        contrasenia
    }

    const usuarios_final = [ ...baseDatosParseada, usuario_nuevo ]
    localStorage.setItem('usuarios', JSON.stringify(usuarios_final))
    alert('Usuario registrado con éxito!')
    window.location.href = '/pages/login.html'
}