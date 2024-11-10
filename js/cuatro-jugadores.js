const id = localStorage.getItem('idLogueado')

const baseDatos = JSON.parse(localStorage.getItem('usuarios'))
const usuario = baseDatos.find( jugador => jugador.id === parseInt(id))

if(!usuario){
    window.location.href = '/pages/login.html'
}

document.getElementById('nombreUsuario').innerHTML = usuario.nombre

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
    { color: 'amarillo', numero: 3, imagen: '/assets/cartas/numeros/tres_amarillo.png' },
    { color: 'naranja', numero: 3, imagen: '/assets/cartas/numeros/tres_naranja.png' },
    { color: 'negro', numero: 3, imagen: '/assets/cartas/numeros/tres_negro.png' },
    { color: 'rojo', numero: 3, imagen: '/assets/cartas/numeros/tres_rojo.png' },
    { color: 'amarillo', numero: 3, imagen: '/assets/cartas/numeros/tres_amarillo.png' },
    { color: 'naranja', numero: 3, imagen: '/assets/cartas/numeros/tres_naranja.png' },
    { color: 'negro', numero: 3, imagen: '/assets/cartas/numeros/tres_negro.png' },
    { color: 'rojo', numero: 3, imagen: '/assets/cartas/numeros/tres_rojo.png' },
    { color: 'amarillo', numero: 4, imagen: '/assets/cartas/numeros/cuatro_amarillo.png' },
    { color: 'naranja', numero: 4, imagen: '/assets/cartas/numeros/cuatro_naranja.png' },
    { color: 'negro', numero: 4, imagen: '/assets/cartas/numeros/cuatro_negro.png' },
    { color: 'rojo', numero: 4, imagen: '/assets/cartas/numeros/cuatro_rojo.png' },
    { color: 'amarillo', numero: 4, imagen: '/assets/cartas/numeros/cuatro_amarillo.png' },
    { color: 'naranja', numero: 4, imagen: '/assets/cartas/numeros/cuatro_naranja.png' },
    { color: 'negro', numero: 4, imagen: '/assets/cartas/numeros/cuatro_negro.png' },
    { color: 'rojo', numero: 4, imagen: '/assets/cartas/numeros/cuatro_rojo.png' },
    { color: 'amarillo', numero: 5, imagen: '/assets/cartas/numeros/cinco_amarillo.png' },
    { color: 'naranja', numero: 5, imagen: '/assets/cartas/numeros/cinco_naranja.png' },
    { color: 'negro', numero: 5, imagen: '/assets/cartas/numeros/cinco_negro.png' },
    { color: 'rojo', numero: 5, imagen: '/assets/cartas/numeros/cinco_rojo.png' },
    { color: 'amarillo', numero: 5, imagen: '/assets/cartas/numeros/cinco_amarillo.png' },
    { color: 'naranja', numero: 5, imagen: '/assets/cartas/numeros/cinco_naranja.png' },
    { color: 'negro', numero: 5, imagen: '/assets/cartas/numeros/cinco_negro.png' },
    { color: 'rojo', numero: 5, imagen: '/assets/cartas/numeros/cinco_rojo.png' },
    { color: 'amarillo', numero: 6, imagen: '/assets/cartas/numeros/seis_amarillo.png' },
    { color: 'naranja', numero: 6, imagen: '/assets/cartas/numeros/seis_naranja.png' },
    { color: 'negro', numero: 6, imagen: '/assets/cartas/numeros/seis_negro.png' },
    { color: 'rojo', numero: 6, imagen: '/assets/cartas/numeros/seis_rojo.png' },
    { color: 'amarillo', numero: 6, imagen: '/assets/cartas/numeros/seis_amarillo.png' },
    { color: 'naranja', numero: 6, imagen: '/assets/cartas/numeros/seis_naranja.png' },
    { color: 'negro', numero: 6, imagen: '/assets/cartas/numeros/seis_negro.png' },
    { color: 'rojo', numero: 6, imagen: '/assets/cartas/numeros/seis_rojo.png' },
    { color: 'amarillo', numero: 7, imagen: '/assets/cartas/numeros/siete_amarillo.png' },
    { color: 'naranja', numero: 7, imagen: '/assets/cartas/numeros/siete_naranja.png' },
    { color: 'negro', numero: 7, imagen: '/assets/cartas/numeros/siete_negro.png' },
    { color: 'rojo', numero: 7, imagen: '/assets/cartas/numeros/siete_rojo.png' },
    { color: 'amarillo', numero: 7, imagen: '/assets/cartas/numeros/siete_amarillo.png' },
    { color: 'naranja', numero: 7, imagen: '/assets/cartas/numeros/siete_naranja.png' },
    { color: 'negro', numero: 7, imagen: '/assets/cartas/numeros/siete_negro.png' },
    { color: 'rojo', numero: 7, imagen: '/assets/cartas/numeros/siete_rojo.png' },
    { color: 'amarillo', numero: 8, imagen: '/assets/cartas/numeros/ocho_amarillo.png' },
    { color: 'naranja', numero: 8, imagen: '/assets/cartas/numeros/ocho_naranja.png' },
    { color: 'negro', numero: 8, imagen: '/assets/cartas/numeros/ocho_negro.png' },
    { color: 'rojo', numero: 8, imagen: '/assets/cartas/numeros/ocho_rojo.png' },
    { color: 'amarillo', numero: 8, imagen: '/assets/cartas/numeros/ocho_amarillo.png' },
    { color: 'naranja', numero: 8, imagen: '/assets/cartas/numeros/ocho_naranja.png' },
    { color: 'negro', numero: 8, imagen: '/assets/cartas/numeros/ocho_negro.png' },
    { color: 'rojo', numero: 8, imagen: '/assets/cartas/numeros/ocho_rojo.png' },
    { color: 'amarillo', numero: 9, imagen: '/assets/cartas/numeros/nueve_amarillo.png' },
    { color: 'naranja', numero: 9, imagen: '/assets/cartas/numeros/nueve_naranja.png' },
    { color: 'negro', numero: 9, imagen: '/assets/cartas/numeros/nueve_negro.png' },
    { color: 'rojo', numero: 9, imagen: '/assets/cartas/numeros/nueve_rojo.png' },
    { color: 'amarillo', numero: 9, imagen: '/assets/cartas/numeros/nueve_amarillo.png' },
    { color: 'naranja', numero: 9, imagen: '/assets/cartas/numeros/nueve_naranja.png' },
    { color: 'negro', numero: 9, imagen: '/assets/cartas/numeros/nueve_negro.png' },
    { color: 'rojo', numero: 9, imagen: '/assets/cartas/numeros/nueve_rojo.png' },
    { color: 'especial', numero: 10, imagen: '/assets/cartas/especiales/mas_tres.png' },
    { color: 'especial', numero: 10, imagen: '/assets/cartas/especiales/mas_tres.png' },
    { color: 'especial', numero: 10, imagen: '/assets/cartas/especiales/mas_tres.png' },
    { color: 'especial', numero: 10, imagen: '/assets/cartas/especiales/mas_tres.png' },
    { color: 'especial', numero: 11, imagen: '/assets/cartas/especiales/cambio_color.png' },
    { color: 'especial', numero: 11, imagen: '/assets/cartas/especiales/cambio_color.png' },
    { color: 'especial', numero: 11, imagen: '/assets/cartas/especiales/cambio_color.png' },
    { color: 'especial', numero: 11, imagen: '/assets/cartas/especiales/cambio_color.png' },
    { color: 'especial', numero: 12, imagen: '/assets/cartas/especiales/cambio_color_seis.png' },
    { color: 'especial', numero: 12, imagen: '/assets/cartas/especiales/cambio_color_seis.png' },
    { color: 'especial', numero: 12, imagen: '/assets/cartas/especiales/cambio_color_seis.png' },
    { color: 'especial', numero: 12, imagen: '/assets/cartas/especiales/cambio_color_seis.png' },
    { color: 'especial', numero: 13, imagen: '/assets/cartas/especiales/bomba.png' },
    { color: 'especial', numero: 13, imagen: '/assets/cartas/especiales/bomba.png' },
    { color: 'especial', numero: 13, imagen: '/assets/cartas/especiales/bomba.png' },
    { color: 'especial', numero: 13, imagen: '/assets/cartas/especiales/bomba.png' },
    { color: 'especial', numero: 14, imagen: '/assets/cartas/especiales/cambio_turno.png' },
    { color: 'especial', numero: 14, imagen: '/assets/cartas/especiales/cambio_turno.png' },
    { color: 'especial', numero: 14, imagen: '/assets/cartas/especiales/cambio_turno.png' },
    { color: 'especial', numero: 14, imagen: '/assets/cartas/especiales/cambio_turno.png' },
    { color: 'especial', numero: 15, imagen: '/assets/cartas/especiales/jocker.png' },
    { color: 'especial', numero: 15, imagen: '/assets/cartas/especiales/jocker.png' },
    { color: 'especial', numero: 15, imagen: '/assets/cartas/especiales/jocker.png' },
    { color: 'especial', numero: 15, imagen: '/assets/cartas/especiales/jocker.png' },
    { color: 'especial', numero: 16, imagen: '/assets/cartas/especiales/robo.png' },
    { color: 'especial', numero: 16, imagen: '/assets/cartas/especiales/robo.png' },
    { color: 'especial', numero: 16, imagen: '/assets/cartas/especiales/robo.png' },
    { color: 'especial', numero: 16, imagen: '/assets/cartas/especiales/robo.png' },
]

let cartasDisponibles = [...DECK];
let cartasJugadas = [];
let jugadores = [
    [],
    [],
    [],
    []
];
let juegaUsuario = true;

const contadorCartas = document.getElementById('contadorCartas');

function mezclarMazo() {
    for (let i = cartasDisponibles.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [cartasDisponibles[i], cartasDisponibles[j]] = [cartasDisponibles[j], cartasDisponibles[i]];
    }
}

function repartirCartas() {
    for (let i = 0; i < 7; i++) {
        for (let j = 0; j < 4; j++) {
            jugadores[j].push(cartasDisponibles.pop());
        }
    }
}

function sacarCarta(){
    jugadores[0].push(cartasDisponibles.pop());
    juegaUsuario = false;
    setTimeout(() => {
        juegaJugador2()
    }, 1500);
}

function sacarCartaRival(index){
    jugadores[index].push(cartasDisponibles.pop());
}

function mostrarCartas() {
    contadorCartas.innerHTML = cartasDisponibles.length
    const manoJugadorUno = document.getElementById('manoJugadorUno')
    const manoJugadorDos = document.getElementById('manoJugadorDos')
    const manoJugadorTres = document.getElementById('manoJugadorTres')
    const manoJugadorCuatro = document.getElementById('manoJugadorCuatro')
    manoJugadorUno.innerHTML = '';
    manoJugadorDos.innerHTML = '';
    manoJugadorTres.innerHTML = '';
    manoJugadorCuatro.innerHTML = '';

    for(let i = 0; i < 4; i++){
        jugadores[i].forEach((carta, index) => {
            const cartaDiv = document.createElement('div');
            cartaDiv.classList.add('card');
            if(i === 0){
                cartaDiv.style.left = `${3.25 * index}em`;
            } else {
                cartaDiv.style.left = `${2.2 * index}em`;
            }
            cartaDiv.onclick = () => jugarCarta(carta);
            if(i === 0){
                cartaDiv.classList.add('cardJugador');
                cartaDiv.innerHTML = `<img src="${carta.imagen}">`;
                manoJugadorUno.appendChild(cartaDiv);
            } else if(i === 1) {
                cartaDiv.innerHTML = '<img src="/assets/carta_trasera.png">';
                manoJugadorDos.appendChild(cartaDiv);
            } else if(i === 2) {
                cartaDiv.innerHTML = '<img src="/assets/carta_trasera.png">';
                manoJugadorTres.appendChild(cartaDiv);
            } else if(i === 3) {
                cartaDiv.innerHTML = '<img src="/assets/carta_trasera.png">';
                manoJugadorCuatro.appendChild(cartaDiv);
            }
        });
    }
}

// CARTAS ESPECIALES

const masTres = (index) => {
    if(cartasDisponibles.length >= 3){
        jugadores[index].push(cartasDisponibles.pop());
        jugadores[index].push(cartasDisponibles.pop());
        jugadores[index].push(cartasDisponibles.pop());
        mostrarCartas();
    } else {
        revisarCantidadCartas()
    }
}

const cambioTurno = (index) => {
    if(index === 0){
        juegaUsuario = true;
    } else if (index === 1){
        setTimeout(() => {
            juegaJugador2();
        }, 1500);
    } else if (index === 2){
        setTimeout(() => {
            juegaJugador3();
        }, 1500);
    } else if (index === 3){
        setTimeout(() => {
            juegaJugador4();
        }, 1500);
    }
}

const bomba = (index) => {
    if (cartasDisponibles.length >= 3) {   
        jugadores[index].push(cartasDisponibles.pop());
        jugadores[index].push(cartasDisponibles.pop());
        jugadores[index].push(cartasDisponibles.pop());
        mostrarCartas();
    }
    const cartaBomba = jugadores[index].findIndex( cartaJug => cartaJug.numero === 13);
    jugadores[index].splice(cartaBomba, 1);
    mostrarCartas();
    revisarCantidadCartas()
}

const cambiarColor = () => {
    const cambiarColorContainer = document.getElementById('cambioColor')
    cambiarColorContainer.classList.remove('cambioColorEscondido')
}

const elegirColor = (color) => {
    cartasJugadas[cartasJugadas.length - 1].color = color;
    cartasJugadas[cartasJugadas.length - 1].numero = -1;

    const cambiarColorContainer = document.getElementById('cambioColor')
    cambiarColorContainer.classList.add('cambioColorEscondido')

    const cartaDescartada = document.getElementById('cartaDescartada')
    if (color === 'amarillo'){   
        cartaDescartada.innerHTML = `<img src="/assets/cartas/especiales/fondo_amarillo.png">`;
    } else if (color === 'naranja'){   
        cartaDescartada.innerHTML = `<img src="/assets/cartas/especiales/fondo_naranja.png">`;
    } else if (color === 'rojo'){   
        cartaDescartada.innerHTML = `<img src="/assets/cartas/especiales/fondo_rojo.png">`;
    } else if (color === 'negro'){   
        cartaDescartada.innerHTML = `<img src="/assets/cartas/especiales/fondo_negro.png">`;
    }

    setTimeout(() => {
        juegaJugador2()
    }, 1500);
}

const cambiarColorRival = (index) => {
    cartasJugadas[cartasJugadas.length - 1].numero = -1;
    const cartasAmarillas = jugadores[index].filter( carta => carta.color === 'amarillo').length;
    const cartasNaranjas = jugadores[index].filter( carta => carta.color === 'naranja').length;
    const cartasRojas = jugadores[index].filter( carta => carta.color === 'rojo').length;
    const cartasNegras = jugadores[index].filter( carta => carta.color === 'negro').length;
    const cartaDescartada = document.getElementById('cartaDescartada')
    
    if( cartasAmarillas > cartasNaranjas && cartasAmarillas > cartasRojas && cartasAmarillas > cartasNegras ){
        cartasJugadas[cartasJugadas.length - 1].color = 'amarillo';
        cartaDescartada.innerHTML = `<img src="/assets/cartas/especiales/fondo_amarillo.png">`;
    } else if ( cartasNaranjas > cartasAmarillas && cartasNaranjas > cartasRojas && cartasNaranjas > cartasNegras ){
        cartasJugadas[cartasJugadas.length - 1].color = 'naranja';
        cartaDescartada.innerHTML = `<img src="/assets/cartas/especiales/fondo_naranja.png">`;
    } else if ( cartasRojas > cartasAmarillas && cartasRojas > cartasNaranjas && cartasRojas > cartasNegras ){
        cartasJugadas[cartasJugadas.length - 1].color = 'rojo';
        cartaDescartada.innerHTML = `<img src="/assets/cartas/especiales/fondo_rojo.png">`;
    } else{
        cartasJugadas[cartasJugadas.length - 1].color = 'negro';
        cartaDescartada.innerHTML = `<img src="/assets/cartas/especiales/fondo_negro.png">`;
    }
}

const masSeis = (index) => {
    if(cartasDisponibles.length >= 6){
        jugadores[index].push(cartasDisponibles.pop());
        jugadores[index].push(cartasDisponibles.pop());
        jugadores[index].push(cartasDisponibles.pop());
        jugadores[index].push(cartasDisponibles.pop());
        jugadores[index].push(cartasDisponibles.pop());
        jugadores[index].push(cartasDisponibles.pop());
        mostrarCartas();
    }
    revisarCantidadCartas()
}

const cambioColorMasSeis = (index, indexRival) => {
    if( index === 0 ){
        cambiarColor()
    } else {
        cambiarColorRival(index)
    }
    masSeis(indexRival)
}

const robo = (index, indexRival) => {
    const indexEspecial = jugadores[indexRival].findIndex( carta => carta.color === 'especial');
    if(indexEspecial === -1){
        return;
    }
    const cartaEspecial = jugadores[indexRival][indexEspecial]
    jugadores[index].push(cartaEspecial)
    jugadores[indexRival].splice(indexEspecial, 1)
    mostrarCartas();
}

const joker = (index) => {
    if(jugadores[index].length <= 2){
        return;
    }
    const randomIndex = Math.floor(Math.random() * (jugadores[index].length - 1));
    jugadores[index].splice(randomIndex, 1);
    const randomIndex2 = Math.floor(Math.random() * (jugadores[index].length - 1));
    jugadores[index].splice(randomIndex2, 1);
    mostrarCartas();
}

// JUGAR

const jugar = () => {
    if(jugadores[0].length < 1 && jugadores[1].length < 1 && jugadores[2].length < 1 && jugadores[3].length < 1){
        mezclarMazo();
        let carta;
        let bandera = false;
        cartasDisponibles.forEach((card, index) => {
            if(card.color !== 'especial' && !bandera){
                carta = card;
                cartasDisponibles.splice(index, 1);
                bandera = true;
            }
        });
        const discard_pile = document.getElementById('discard_pile')
        const cartaDiv = document.createElement('div');
        cartaDiv.classList.add('card');
        cartaDiv.classList.add('top-card');
        cartaDiv.id = 'cartaDescartada'
        cartaDiv.innerHTML = `<img src="${carta.imagen}">`;
        discard_pile.appendChild(cartaDiv);
        cartasJugadas.push(carta);
        repartirCartas();
    } else {
        if(juegaUsuario && cartasJugadas.length > 0){
            revisarCantidadCartas()
            sacarCarta()
        }
    }
    mostrarCartas();
}

const actualizarUsuario = (jugador) => {
    const baseDatos = JSON.parse(localStorage.getItem('usuarios'))
    const indexUsuario = baseDatos.findIndex( usuario => usuario.id === parseInt(id) )
    const usuario = baseDatos[indexUsuario]

    usuario.partidasJugadas = usuario.partidasJugadas + 1
    if(jugador === 0){
        usuario.partidasPerdidas = usuario.partidasPerdidas + 1
        usuario.experiencia = usuario.experiencia + 1000
    } else if(jugador === 1){
        usuario.partidasGanadas = usuario.partidasGanadas + 1
        usuario.experiencia = usuario.experiencia + 2000
    }

    baseDatos[indexUsuario] = usuario
    localStorage.setItem('usuarios', JSON.stringify(baseDatos))
}

const terminarJuego = (index) => {
    actualizarUsuario(index)
    const gameoverContainer = document.getElementById('gameover');
    const gameoverSpan = document.getElementById('ganadorJuego');
    gameoverContainer.classList.remove('gameoverEscondido');
    if(index === 0){
        gameoverSpan.innerHTML = '¡Felicidades, ganaste!'
    } else if(index === 1){
        gameoverSpan.innerHTML = '¡Gano el Jugador Dos!'
    } else if(index === 2){
        gameoverSpan.innerHTML = '¡Gano el Jugador Tres!'
    } else if(index === 3){
        gameoverSpan.innerHTML = '¡Gano el Jugador Cuatro!'
    } else if(index === -1){
        gameoverSpan.innerHTML = 'Hubo un empate!'
    }
}

const revisarCantidadCartas = () => {
    if(cartasDisponibles.length !== 0){
        return;
    }

    const draw_pile = document.getElementById('draw_pile');
    draw_pile.style.opacity = 0;

    let jugadorConMenosCartas = 0;

    if(jugadores[0].length < jugadores[1].length && jugadores[0].length < jugadores[2].length && jugadores[0].length < jugadores[3].length){
        jugadorConMenosCartas = 0;
    } else if(jugadores[1].length < jugadores[0].length && jugadores[1].length < jugadores[2].length && jugadores[1].length < jugadores[3].length){
        jugadorConMenosCartas = 1;
    } else if(jugadores[2].length < jugadores[0].length && jugadores[2].length < jugadores[1].length && jugadores[2].length < jugadores[3].length){
        jugadorConMenosCartas = 2;
    } else if(jugadores[3].length < jugadores[0].length && jugadores[3].length < jugadores[1].length && jugadores[3].length < jugadores[2].length){
        jugadorConMenosCartas = 3;
    } else{
        jugadorConMenosCartas = -1;
    }

    setTimeout(() => {
        terminarJuego(jugadorConMenosCartas)
    }, 1500);
}

const juegaJugador2 = () => {
    const ultimaCartaJugada = cartasJugadas[cartasJugadas.length - 1]
    let yaJugo = false;
    let cambiaTurno = false;

    jugadores[1].forEach( (cartaRival, index) => {
        if(yaJugo){
            return;
        }

        if(ultimaCartaJugada.color !== cartaRival.color && ultimaCartaJugada.numero !== cartaRival.numero && cartaRival.color !== 'especial' && ultimaCartaJugada.color !== 'especial'){
            return;
        }

        const cartaDescartada = document.getElementById('cartaDescartada')
        cartaDescartada.innerHTML = `<img src="${cartaRival.imagen}">`;
        cartasJugadas.push(cartaRival);
        jugadores[1].splice(index, 1);
        yaJugo = true;
        if(yaJugo){
            if(cartaRival.numero === 10){
                setTimeout(() => {
                    masTres(2)
                }, 500);
            } else if(cartaRival.numero === 11){
                setTimeout(() => {
                    cambiarColorRival(1)
                }, 500);
            } else if(cartaRival.numero === 12){
                setTimeout(() => {
                    cambioColorMasSeis(1, 2)
                }, 500);
            } else if(cartaRival.numero === 13){
                setTimeout(() => {
                    bomba(1)
                }, 500);
            } else if(cartaRival.numero === 14){
                cambiaTurno = true;
                setTimeout(() => {
                    cambioTurno(1)
                }, 500);
            } else if(cartaRival.numero === 15){
                setTimeout(() => {
                    joker(1)
                }, 500);
            } else if(cartaRival.numero === 16){
                setTimeout(() => {
                    robo(1, 2)
                }, 500);
            }
        }
    })

    if(!yaJugo){
        sacarCartaRival(1)
    }

    mostrarCartas();
    
    if(jugadores[1].length === 0){
        setTimeout(() => {
            terminarJuego(1)
        }, 1500);
    }

    if(!cambiaTurno){
        setTimeout(() => {
            revisarCantidadCartas()
            juegaJugador3()
        }, 1500);
    }

}

const juegaJugador3 = () => {
    const ultimaCartaJugada = cartasJugadas[cartasJugadas.length - 1]
    let yaJugo = false;
    let cambiaTurno = false;

    jugadores[2].forEach( (cartaRival, index) => {
        if(yaJugo){
            return;
        }

        if(ultimaCartaJugada.color !== cartaRival.color && ultimaCartaJugada.numero !== cartaRival.numero && cartaRival.color !== 'especial' && ultimaCartaJugada.color !== 'especial'){
            return;
        }

        const cartaDescartada = document.getElementById('cartaDescartada')
        cartaDescartada.innerHTML = `<img src="${cartaRival.imagen}">`;
        cartasJugadas.push(cartaRival);
        jugadores[2].splice(index, 1);
        yaJugo = true;
        if(yaJugo){
            if(cartaRival.numero === 10){
                setTimeout(() => {
                    masTres(3)
                }, 500);
            } else if(cartaRival.numero === 11){
                setTimeout(() => {
                    cambiarColorRival(2)
                }, 500);
            } else if(cartaRival.numero === 12){
                setTimeout(() => {
                    cambioColorMasSeis(2, 3)
                }, 500);
            } else if(cartaRival.numero === 13){
                setTimeout(() => {
                    bomba(2)
                }, 500);
            } else if(cartaRival.numero === 14){
                cambiaTurno = true;
                setTimeout(() => {
                    cambioTurno(2)
                }, 500);
            } else if(cartaRival.numero === 15){
                setTimeout(() => {
                    joker(2)
                }, 500);
            } else if(cartaRival.numero === 16){
                setTimeout(() => {
                    robo(2, 3)
                }, 500);
            }
        }
    })

    if(!yaJugo){
        sacarCartaRival(2)
    }

    mostrarCartas();
    
    if(jugadores[2].length === 0){
        setTimeout(() => {
            terminarJuego(2)
        }, 1500);
    }

    if(!cambiaTurno){
        setTimeout(() => {
            revisarCantidadCartas()
            juegaJugador4()
        }, 1500);
    }

    revisarCantidadCartas()
}

const juegaJugador4 = () => {
    const ultimaCartaJugada = cartasJugadas[cartasJugadas.length - 1]
    let yaJugo = false;
    let cambiaTurno = false;

    jugadores[3].forEach( (cartaRival, index) => {
        if(yaJugo){
            return;
        }

        if(ultimaCartaJugada.color !== cartaRival.color && ultimaCartaJugada.numero !== cartaRival.numero && cartaRival.color !== 'especial' && ultimaCartaJugada.color !== 'especial'){
            return;
        }

        const cartaDescartada = document.getElementById('cartaDescartada')
        cartaDescartada.innerHTML = `<img src="${cartaRival.imagen}">`;
        cartasJugadas.push(cartaRival);
        jugadores[3].splice(index, 1);
        yaJugo = true;
        if(yaJugo){
            if(cartaRival.numero === 10){
                setTimeout(() => {
                    masTres(0)
                }, 500);
            } else if(cartaRival.numero === 11){
                setTimeout(() => {
                    cambiarColorRival(3)
                }, 500);
            } else if(cartaRival.numero === 12){
                setTimeout(() => {
                    cambioColorMasSeis(3, 0)
                }, 500);
            } else if(cartaRival.numero === 13){
                setTimeout(() => {
                    bomba(3)
                }, 500);
            } else if(cartaRival.numero === 14){
                cambiaTurno = true;
                setTimeout(() => {
                    cambioTurno(3)
                }, 500);
            } else if(cartaRival.numero === 15){
                setTimeout(() => {
                    joker(3)
                }, 500);
            } else if(cartaRival.numero === 16){
                setTimeout(() => {
                    robo(3, 0)
                }, 500);
            }
        }
    })

    if(!yaJugo){
        sacarCartaRival(3)
    }

    mostrarCartas();
    
    if(jugadores[3].length === 0){
        setTimeout(() => {
            terminarJuego(3)
        }, 1500);
    }

    if(!cambiaTurno){
        juegaUsuario = true;
    }

    revisarCantidadCartas()
}

const jugarCarta = (carta) => {
    if(!juegaUsuario){
        return;
    }

    let cambiaTurno = false;
    let cambioColor = false;
    const discard_pile = document.getElementById('discard_pile')
    const ultimaCartaJugada = cartasJugadas[cartasJugadas.length - 1]
    if(ultimaCartaJugada.color !== carta.color && ultimaCartaJugada.numero !== carta.numero && carta.color !== 'especial' && ultimaCartaJugada.color !== 'especial'){
        return;
    }

    juegaUsuario = false;
    const cartaDescartada = document.getElementById('cartaDescartada')
    cartaDescartada.innerHTML = `<img src="${carta.imagen}">`;

    if(cartasJugadas.length >= 10){
        const pilaDiv = document.createElement('div');
        pilaDiv.classList.add('card');
        pilaDiv.classList.add('pile');
        discard_pile.appendChild(pilaDiv);
    }

    cartasJugadas.push(carta);
    const cartaJugada = jugadores[0].findIndex( cartaJug => cartaJug === carta);
    jugadores[0].splice(cartaJugada, 1);
    mostrarCartas();

    if(carta.numero === 10){
        setTimeout(() => {
            masTres(1)
        }, 500);
    } else if(carta.numero === 11){
        cambioColor = true;
        setTimeout(() => {
            cambiarColor()
        }, 500);
    } else if(carta.numero === 12){
        cambioColor = true;
        setTimeout(() => {
            cambioColorMasSeis(0, 1)
        }, 500);
    } else if(carta.numero === 13){
        setTimeout(() => {
            bomba(0)
        }, 500);
    } else if(carta.numero === 14){
        cambiaTurno = true;
        setTimeout(() => {
            cambioTurno(0)
        }, 500);
    } else if(carta.numero === 15){
        setTimeout(() => {
            joker(0)
        }, 500);
    } else if(carta.numero === 16){
        setTimeout(() => {
            robo(0, 1)
        }, 500);
    }

    if(jugadores[0].length === 0){
        setTimeout(() => {
            terminarJuego(0)
        }, 1500);
    }

    if(cambiaTurno || cambioColor ){
        return
    }

    setTimeout(() => {
        revisarCantidadCartas()
        juegaJugador2()
    }, 1500);
}