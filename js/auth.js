const idAutenticacion = localStorage.getItem('idLogueado')
if(!idAutenticacion){
    window.location.href = '/pages/login.html'
}

const cerrarSesion = () => {
    localStorage.removeItem('idLogueado')
    window.location.href = '/index.html'
}