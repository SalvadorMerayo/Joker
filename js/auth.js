const idAutenticacion = localStorage.getItem('idLogueado')
if(!idAutenticacion){
    window.location.href = '/pages/login.html'
}