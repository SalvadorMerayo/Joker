const idLogueado = localStorage.getItem('idLogueado');
const baseDatos = JSON.parse(localStorage.getItem('usuarios'))
const usuario = baseDatos.find( jugador => jugador.id === parseInt(idLogueado))

if(!usuario){
    window.location.href = '/pages/login.html'
}

const nombrePerfil = document.getElementById('nombrePerfil');
nombrePerfil.innerHTML = usuario.nombre;

const emailPerfil = document.getElementById('emailPerfil');
emailPerfil.innerHTML = usuario.email;

const nivelPerfil = document.getElementById('nivelPerfil');
nivelPerfil.innerHTML = `Nivel ${parseInt(usuario.experiencia / 750)}`;

const faltaXPPerfil = document.getElementById('faltaXPPerfil');
faltaXPPerfil.innerHTML = 750 - parseInt(usuario.experiencia % 750);

const partidasPerfil = document.getElementById('partidasPerfil');
partidasPerfil.innerHTML = usuario.partidasJugadas;

const ganadasPerfil = document.getElementById('ganadasPerfil');
ganadasPerfil.innerHTML = usuario.partidasGanadas;

const perdidasPerfil = document.getElementById('perdidasPerfil');
perdidasPerfil.innerHTML = usuario.partidasPerdidas;

const victoriasPerfil = document.getElementById('victoriasPerfil');
victoriasPerfil.innerHTML = `${parseFloat(usuario.partidasGanadas / usuario.partidasJugadas * 100).toFixed(2)} %`;