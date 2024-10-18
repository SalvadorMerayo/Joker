const id = localStorage.getItem('idLogueado')
// if(!id){
//     window.location.href = '/pages/login.html'
// }

const baseDatos = JSON.parse(localStorage.getItem('usuarios'))
const usuario = baseDatos.find( jugador => jugador.id === parseInt(id))

if(!usuario){
    window.location.href = '/pages/login.html'
}

document.getElementById('nombreUsuario').innerHTML = usuario.nombre

// const DECK = [
//     "0r", "0y", "0b", "0g",
//     "1r", "1r", "1y", "1y", "1b", "1b", "1g", "1g",
//     "2r", "2r", "2y", "2y", "2b", "2b", "2g", "2g",




//     "3r", "3r", "3y", "3y", "3b", "3b", "3g", "3g",
//     "4r", "4r", "4y", "4y", "4b", "4b", "4g", "4g",
//     "5r", "5r", "5y", "5y", "5b", "5b", "5g", "5g",
//     "6r", "6r", "6y", "6y", "6b", "6b", "6g", "6g",
//     "7r", "7r", "7y", "7y", "7b", "7b", "7g", "7g",
//     "8r", "8r", "8y", "8y", "8b", "8b", "8g", "8g",
//     "9r", "9r", "9y", "9y", "9b", "9b", "9g", "9g",
//     "d2r", "d2r", "d2y", "d2y", "d2b", "d2b", "d2g", "d2g",
//     "sr", "sr", "sy", "sy", "sb", "sb", "sg", "sg",
//     "rr", "rr", "ry", "ry", "rb", "rb", "rg", "rg",
//     "w", "w", "w", "w", "w+4", "w+4", "w+4", "w+4"
// ];

const DECK = [
    { color: 'amarillo', numero: 0, imagen: '/assets/cartas/numeros/cero_amarillo.png' },
    { color: 'naranja', numero: 0, imagen: '/assets/cartas/numeros/cero_naranja.png' },
    { color: 'negro', numero: 0, imagen: '/assets/cartas/numeros/cero_negro.png' },
    { color: 'rojo', numero: 0, imagen: '/assets/cartas/numeros/cero_rojo.png' },
    
    { color: 'amarillo', numero: 1, imagen: '/assets/cartas/numeros/uno_amarillo.png' },
    { color: 'naranja', numero: 1, imagen: '/assets/cartas/numeros/uno_naranja.png' },
    { color: 'negro', numero: 1, imagen: '/assets/cartas/numeros/uno_negro.png' },
    { color: 'rojo', numero: 1, imagen: '/assets/cartas/numeros/uno_rojo.png' },
    { color: 'amarillo', numero: 1, imagen: '/assets/cartas/numeros/uno_amarillo.png' },
    { color: 'naranja', numero: 1, imagen: '/assets/cartas/numeros/uno_naranja.png' },
    { color: 'negro', numero: 1, imagen: '/assets/cartas/numeros/uno_negro.png' },
    { color: 'rojo', numero: 1, imagen: '/assets/cartas/numeros/uno_rojo.png' },

    { color: 'amarillo', numero: 2, imagen: '/assets/cartas/numeros/dos_amarillo.png' },
    { color: 'naranja', numero: 2, imagen: '/assets/cartas/numeros/dos_naranja.png' },
    { color: 'negro', numero: 2, imagen: '/assets/cartas/numeros/dos_negro.png' },
    { color: 'rojo', numero: 2, imagen: '/assets/cartas/numeros/dos_rojo.png' },
    { color: 'amarillo', numero: 2, imagen: '/assets/cartas/numeros/dos_amarillo.png' },
    { color: 'naranja', numero: 2, imagen: '/assets/cartas/numeros/dos_naranja.png' },
    { color: 'negro', numero: 2, imagen: '/assets/cartas/numeros/dos_negro.png' },
    { color: 'rojo', numero: 2, imagen: '/assets/cartas/numeros/dos_rojo.png' },
]

let cartasDisponibles = [...DECK];
let cartasJugadas = [];

function mezclarMazo(mazo) {
    for (let i = mazo.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [mazo[i], mazo[j]] = [mazo[j], mazo[i]];
    }
    return mazo;
}

function repartirCartas(mazoMezclado) {
    let jugadores = [];
    for (let i = 0; i < 2; i++) {
        jugadores.push([]);
    }

    for (let i = 0; i < 7; i++) {
        for (let j = 0; j < 2; j++) {
            jugadores[j].push(mazoMezclado.pop());
        }
    }
    return jugadores;
}

function mostrarCartas(jugadores) {
    const manoJugadorUno = document.getElementById('manoJugadorUno')
    const manoJugadorDos = document.getElementById('manoJugadorDos')
    manoJugadorUno.innerHTML = '';
    manoJugadorDos.innerHTML = '';

    for(let i = 0; i < 2; i++){
        jugadores[i].forEach((carta, index) => {
            const cartaDiv = document.createElement('div');
            cartaDiv.classList.add('card');
            cartaDiv.style.left = `${2.2 * index}em`;
            cartaDiv.onclick = () => jugarCarta(carta);
            if(i === 1){
                cartaDiv.innerHTML = `<img src="${carta.imagen}">`;
                manoJugadorUno.appendChild(cartaDiv);
            } else {
                cartaDiv.innerHTML = '<img src="/assets/carta_trasera.png">';
                manoJugadorDos.appendChild(cartaDiv);
            }
        });
    }
}

const comenzarJuego = () => {
    const mazoMezclado = mezclarMazo(cartasDisponibles); 
    const jugadores = repartirCartas(mazoMezclado);
    mostrarCartas(jugadores);
}

const jugarCarta = (carta) => {
    console.log(carta)
    const discard_pile = document.getElementById('discard_pile')
    if(cartasJugadas < 1){
        const cartaDiv = document.createElement('div');
        cartaDiv.classList.add('card');
        cartaDiv.classList.add('top-card');
        cartaDiv.id = 'cartaDescartada'
        cartaDiv.innerHTML = `<img src="${carta.imagen}">`;
        discard_pile.appendChild(cartaDiv);
    } else {
        const cartaDescartada = document.getElementById('cartaDescartada')
        cartaDescartada.innerHTML = `<img src="${carta.imagen}">`;
    }
    cartasJugadas.push(carta);

    if(cartasJugadas.length >= 10){
        const pilaDiv = document.createElement('div');
        pilaDiv.classList.add('card');
        pilaDiv.classList.add('pile');
        discard_pile.appendChild(pilaDiv);
    }
}