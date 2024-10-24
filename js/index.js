const idAutenticacion = localStorage.getItem('idLogueado')
if(idAutenticacion){
    window.location.href = '/pages/dashboard/index.html'
}