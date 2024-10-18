function iniciarSesion(event){
    event.preventDefault();

    const mensajeError = document.getElementById('mensajeError')
    mensajeError.innerHTML = ''

    const email = document.getElementById('email').value;
    const contrasenia = document.getElementById('contrasenia').value;
    
    const baseDatos = localStorage.getItem('usuarios')
    const baseDatosParseada = JSON.parse(baseDatos)

    const usuarioEncontrado = baseDatosParseada.find( (usuario) => usuario.email === email )

    if(!usuarioEncontrado){ // no existe?
        mensajeError.innerHTML = 'Datos incorrectos.'
        return;
    }

    if(usuarioEncontrado.contrasenia !== contrasenia){
        mensajeError.innerHTML = 'Datos incorrectos.'
        return;
    }
    
    localStorage.setItem('idLogueado', usuarioEncontrado.id)
    window.location.href = '/pages/dashboard/index.html'
}