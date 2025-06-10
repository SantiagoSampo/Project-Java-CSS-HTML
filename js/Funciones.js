//Sebastian Luciardi (274754);Santiago Sampo (322388)

let sistema = new Sistema();

window.addEventListener("load", inicio);

function inicio() {
    let cargarDatosRespuesta = confirm("¿Quiere cargar datos?");

    if (cargarDatosRespuesta) {
        cargarDatos();
    }

    asignarColoresTemas();
    mostrar("DescripGral");

    document.getElementById("InfoGeneral").addEventListener("click", function(event) {
        event.preventDefault();
        terminarPartida(); 
        verIntrod(); 
    });

    document.getElementById("GestionTemas").addEventListener("click", function(event) {
        event.preventDefault();
        terminarPartida();
        verNosotros(); 
    });

    document.getElementById("Ajugar").addEventListener("click", verF);
    document.getElementById("botonAltaTema").addEventListener("click", agregarTema);
    document.getElementById("BAyuda").addEventListener("click", ayuda);
    document.getElementById("BTer").addEventListener("click", terminar);
    document.getElementById("botonJugar").addEventListener("click", iniciarJuego);
    document.getElementById("OrdenCreciente").addEventListener("change", ordenarPreguntasPorTema);
    document.getElementById("OrdenDecreciente").addEventListener("change", ordenarPreguntasPorTema);
    document.getElementById("botonJugar").addEventListener("click", function() {
        let pregunta = mostrarPreg();
        if (pregunta) {
            crearBotones(pregunta);
        }
    });
    document.getElementById("BSig").addEventListener("click", function() {
        let pregunta = mostrarPreg();
        if (pregunta) {
            crearBotones(pregunta);
        }
    });
    document.getElementById("IdFormulario2").addEventListener("submit", function(event) {
        event.preventDefault();
        agregarPregunta();
    });

    actualizarContadorTemas(sistema.darLista().length);
    cargarLista1();
    cargarCombo();
    cargarLista2();
    totalPreguntas();
    actualizarTemasSinPreguntas();
    ordenarPreguntasPorTema();
    seleccionarTema();
}


window.onload = function(){
    document.getElementById("Juego").style.display = "none";
    document.getElementById("Puntaje").style.display = "none";
    document.getElementById("Preg").style.display = "none";
    document.getElementById("botonesResp").style.display = "none";
    document.getElementById("botonesFinal").style.display = "none";
    document.getElementById("botonJugar").addEventListener("click", function() {
        iniciarJuego();
    });
}


function cargarDatos() {
    for (let x of preguntas) {
        if (!sistema.Trepe(x.tema.nombre)) {
            let tema2 = new Tema(x.tema.nombre, x.tema.descripcion);
            sistema.agregarTemas(tema2);
        }
    }
    for (let p of preguntas) {
        let pregunta = new Pregunta(p.tema, p.nivel, p.texto, p.respuestaCorrecta, p.respuestasIncorrectas);
        sistema.agregarPreguntas1(pregunta);
    }
    asignarColoresTemas();
    totalPreguntas();
    actualizarTemasSinPreguntas();
    ordenarPreguntasPorTema();
}

function ocultarTodasSecciones() {
    var secciones = document.getElementsByClassName("seccion");
    for (var i = 0; i < secciones.length; i++) {
        secciones[i].style.display = "none";
    }
}

function mostrar(id) {
    ocultarTodasSecciones();
    document.getElementById(id).style.display = "block";
}

function verIntrod() {
    mostrar("DescripGral");
}

function verNosotros() {
    mostrar("Gest");
}

function verF() {
    mostrar("jugar");
}

let temaColores = {};

function asignarColoresTemas() {
    let temas = sistema.darTemas();
    for (let i = 0; i < temas.length; i++) {
        if (!temaColores[temas[i].nombre]) {
            temaColores[temas[i].nombre] = generarColor(i, temas.length);
        }
    }
}

function agregarTema() {
    let formulario = document.getElementById("IdFormulario1");
    if (formulario.reportValidity()) {
        let nombre = document.getElementById("NombreTema").value;
        let descripcion = document.getElementById("DescripcionTema").value;
        let tema = sistema.darTemas();
        for (let t of tema) {
            if (t.nombre.toLowerCase() == nombre.toLowerCase()) {
                alert("El tema ya existe");
                return;
            }
        }
        let unTema = new Tema(nombre, descripcion);
        sistema.agregarTemas(unTema);
        let temas = sistema.darTemas();
        let nuevoTema = temas[temas.length - 1];
        temaColores[nuevoTema.nombre] = generarColor(temas.length - 1, temas.length);
        cargarLista1();
        formulario.reset(); 
        actualizarContadorTemas(sistema.darLista().length); 
        cargarCombo();
        actualizarTemasSinPreguntas();
        ordenarPreguntasPorTema();
        seleccionarTema();
    }
}

function agregarPregunta() {
    let formulario = document.getElementById("IdFormulario2");
    if (formulario.reportValidity()) {
        let temaNombre = document.getElementById("TemaAlta").options[document.getElementById("TemaAlta").selectedIndex].text;
        let nivel = document.getElementById("NivelAlta").value;
        let textoPreg = document.getElementById("TextoPreg").value;
        let respuestaCorr = document.getElementById("RespuestaCorr").value;
        let respuestaIncorr = document.getElementById("RespuestaIncorr").value.split(",");
        
        for (let r of respuestaIncorr){
            if (r == respuestaCorr){
                alert("La respuesta correcta no puede estar entre las respuestas incorrectas");
                return;
            }
        }
        let preguntas = sistema.preguntastabla();
        for (let p of preguntas){
                if (p.textopreg == textoPreg){
                    alert("La pregunta ya existe");
                    return;
                }
        }

        let tema = null;
        let temas = sistema.darTemas();
        for (let i = 0; i < temas.length; i++) {
        if (temas[i].nombre === temaNombre) {
        tema = temas[i];
        break; 
        }
    }
   
        let unaPreg = new Pregunta(tema, nivel, textoPreg, respuestaCorr, respuestaIncorr);
        sistema.agregarPreguntas1(unaPreg); 
        formulario.reset();
        ordenarPreguntasPorTema(); 
        cargarLista2();
        totalPreguntas()
        actualizarTemasSinPreguntas();
        ordenarPreguntasPorTema();
        seleccionarTema();
    }
}

function actualizarPromedioPreguntas() {
    let promedio = sistema.preguntastabla().length / sistema.darTemas().length;
    if (promedio>0) {
        document.getElementById("promedioPreguntas").innerHTML = "Promedio de preguntas por tema (cantidad total de preguntas/cantidad total de temas): " + promedio.toFixed(2);
    }else{
        document.getElementById("promedioPreguntas").innerHTML = "Promedio de preguntas por tema (cantidad total de preguntas/cantidad total de temas): sin datos";
    
    }
    
}

function cargarLista1() {
    let lista = document.getElementById("IdListaTemas");
    lista.innerHTML = ""; 
    let datos = sistema.darLista();

    if (datos.length === 0) {
        let nodo = document.createElement("li");
        let nodoT = document.createTextNode("sin datos");
        nodo.appendChild(nodoT);
        lista.appendChild(nodo);
    } else {
        for (let t of datos) {
            let nodo = document.createElement("li");
            let nodoT = document.createTextNode(`${t.nombre}: ${t.descripcion}`);
            nodo.appendChild(nodoT);
            lista.appendChild(nodo);
        }
    }
    actualizarPromedioPreguntas();
}

function cargarLista2() {
    let tabla = document.getElementById("IdTablaPreguntas");
    tabla.innerHTML = "";

    let coloresAsignados = {};
    for (let i = 0; i < sistema.preguntastabla().length; i++) {
        let pregunta = sistema.preguntastabla()[i];
        let tema = pregunta.tema.nombre; 

        if (!coloresAsignados[tema]) {
            coloresAsignados[tema] = temaColores[tema];
        }

        let fila = tabla.insertRow();
        let colorTema = coloresAsignados[tema];

        let atributos = [tema, pregunta.nivel, pregunta.textopreg, pregunta.respcorr, pregunta.respincorr];
        for (let j = 0; j < atributos.length; j++) {
            let celda = fila.insertCell();
            celda.innerHTML = atributos[j];
            celda.style.backgroundColor = colorTema;
            celda.style.zIndex= 1;
        }
    }
}


function cargarCombo() {
    let combo = document.getElementById("TemaAlta");
    combo.innerHTML = "";
    let datos = sistema.darTemas();
    for (let i of datos){
        let nodo = document.createElement("option");
        let nodoT = document.createTextNode(i.nombre);
        combo.appendChild(nodo);
        nodo.appendChild(nodoT);
    }
}

function actualizarContadorTemas(cont) {
    document.getElementById("ContadorTema").innerHTML = `Lista de temas (total de temas: ${cont})`;
}


function generarColor(pasos, pasostotales) {
    const amarillo = [255, 255, 0]; 
    const marron = [139, 69, 19]; 

    let r = Math.round(amarillo[0] + (marron[0] - amarillo[0]) * (pasos / pasostotales));
    let g = Math.round(amarillo[1] + (marron[1] - amarillo[1]) * (pasos / pasostotales));
    let b = Math.round(amarillo[2] + (marron[2] - amarillo[2]) * (pasos / pasostotales));
    let color= `rgb(${r},${g},${b})`;
    return color;
}

function totalPreguntas() {
    let total = sistema.preguntastabla().length;
    document.getElementById("TotalPreguntas").innerText = `Total de preguntas registradas: ${total} preguntas`;
}

function actualizarTemasSinPreguntas() {
    let temas = sistema.darTemas();
    let temasSinPreguntas = [];
    for (let i = 0; i < temas.length; i++) {
        let tienePreguntas = false;
        for (let j = 0; j < sistema.preguntastabla().length; j++) {
            if (sistema.preguntastabla()[j].tema.nombre === temas[i].nombre) {
                tienePreguntas = true;
                break;
            }
        }
        if (!tienePreguntas) {
            temasSinPreguntas.push(temas[i]);
        }
    }
    let lista = document.getElementById("TemassinPreguntas");
    lista.innerHTML = "";
    if (temasSinPreguntas.length === 0) {
        let nodo = document.createElement("li");
        let nodoT = document.createTextNode("Sin datos");
        nodo.appendChild(nodoT);
        lista.appendChild(nodo);
    } else {
        for (let t of temasSinPreguntas) {
            let nodo = document.createElement("li");
            let nodoT = document.createTextNode(`${t.nombre}: ${t.descripcion}`);
            nodo.appendChild(nodoT);
            lista.appendChild(nodo);
        }
    }
    actualizarPromedioPreguntas();
}

function ordenarPreguntasPorTema() {
    let ordenCreciente = document.getElementById("OrdenCreciente").checked;
    let ordenDecreciente = document.getElementById("OrdenDecreciente").checked;

    sistema.preguntastabla().sort((y, z) => {
        if (ordenCreciente) {
            if (y.tema.nombre.toLowerCase() < z.tema.nombre.toLowerCase()) return -1;
            if (y.tema.nombre.toLowerCase() > z.tema.nombre.toLowerCase()) return 1;
            return y.nivel - z.nivel;
        } else if (ordenDecreciente) {
            if (y.tema.nombre.toLowerCase() > z.tema.nombre.toLowerCase()) return -1;
            if (y.tema.nombre.toLowerCase() < z.tema.nombre.toLowerCase()) return 1;
            return y.nivel - z.nivel;
        }
    });

    cargarLista2();
}

function seleccionarTema() {
    let combo = document.getElementById("TemaElegir");
    combo.innerHTML = "";
    let temas = sistema.darTemas();
    let todasLasPreguntas = sistema.preguntastabla();

    for (let tema of temas){
        let tienePreguntas = false;
        for (let pregunta of todasLasPreguntas) {
            if (pregunta.tema.nombre === tema.nombre) {
                tienePreguntas = true;
                break;
            }
        }

        if (tienePreguntas) {
            let nodo = document.createElement("option");
            let nodoT = document.createTextNode(tema.nombre);
            nodo.appendChild(nodoT);
            combo.appendChild(nodo);
        }
    }
}
let pregAleat = null;
let preguntasFilt = [];
function mostrarPreg() {
    let temaEleg = document.getElementById("TemaElegir").value;
    let nivelEleg = parseInt(document.getElementById("NivelJuego").value);
    let preguntas = sistema.preguntastabla();
    if (preguntasFilt.length === 0) {
        for (let pregunta of preguntas) {
            if (pregunta.tema.nombre == temaEleg && pregunta.nivel == nivelEleg) {
                preguntasFilt.push(pregunta);
            }
        }
        if (preguntasFilt.length === 0) {
            document.getElementById("Preg").innerText = "No hay preguntas para mostrar con la configuración seleccionada" 
            document.getElementById("BSig").disabled = true;
            document.getElementById("botonesResp").style.display = "none";
            pregAleat = null;
            return null;
        }
    }
    let indic = Math.floor(Math.random() * preguntasFilt.length);
    pregAleat = preguntasFilt[indic];
    preguntasFilt.splice(indic, 1);
    let colorTema= temaColores[pregAleat.tema.nombre];
    let preg= document.getElementById("Preg");
    preg.innerText = pregAleat.textopreg;
    preg.style.backgroundColor = colorTema;
    preg.style.color = "black";
    if (preguntasFilt.length === 0) {
        document.getElementById("BSig").disabled = true;
    }else{
        document.getElementById("BSig").disabled = false;
    }

    return pregAleat;
}

function mezclar(array){
    for (let i = array.length - 1; i > 0; i--){
        let j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

function verificarRespuesta(boton, respuestaCorrecta) {
    let botones = document.getElementsByClassName("botonesDRespuesta");
    let sonidoBien= new Audio("./audio/bien.MP3");
    let sonidoMal= new Audio("./audio/mal.MP3");
    if (boton.innerText === respuestaCorrecta) {
        boton.style.backgroundColor = "green";
        puntaje += 10;
        for (let i = 0; i < botones.length; i++) {
            botones[i].disabled = true;
        }
        sonidoBien.play();
    } else {
        puntaje -= 1; 
        boton.style.backgroundColor = "red";
        boton.disabled = true;
        sonidoMal.play();
    }
    
    actualizarPuntaje();
}

let puntaje = 0;
function actualizarPuntaje(){
    document.getElementById("Puntaje").innerText = "Puntaje: " + puntaje;
    if (puntaje >= maximoPuntaje) {
        maximoPuntaje(puntaje);
    }
}

function crearBotones(pregunta) {
    let cont = document.getElementById("botonesResp");
    cont.innerHTML = ""; 
    let respuestas = [...pregunta.respincorr, pregunta.respcorr];
    respuestas = mezclar(respuestas);
    let colorTema = temaColores[pregunta.tema.nombre];
    for (let i = 0; i < respuestas.length; i++) {
        let boton = document.createElement("button");
        boton.innerText = respuestas[i];
        boton.classList.add("botonesDRespuesta");
        boton.style.backgroundColor = colorTema; 
        boton.style.color = "black";
        boton.addEventListener("click", function() {
            verificarRespuesta(boton, pregunta.respcorr);
        });
        cont.appendChild(boton);
    }
}

function ayuda() {
if(pregAleat){
    let respCorrecta = pregAleat.respcorr;
    let primerCarac = respCorrecta.charAt(0);
    return alert("La respuesta correcta comienza con la letra: " + primerCarac);
    }else{
    alert("No hay ayuda disponible ya que no hay pregunta.");
    }
}

function terminar() {
    alert("Juego terminado! Puntaje final: " + puntaje);
    maximoPuntaje(puntaje)
    puntaje = 0;
    document.getElementById("Juego").style.display = "none";
    document.getElementById("Puntaje").style.display = "none";
    document.getElementById("botonesResp").style.display = "none";
    document.getElementById("botonesFinal").style.display = "none";
    document.getElementById("botonJugar").style.visibility = "visible";
    document.getElementById("Preg").style.display = "none";
    document.getElementById("TemaElegir").disabled = false;
    document.getElementById("NivelJuego").disabled = false;
    preguntasFilt = [];
    actualizarPuntaje();
}

function iniciarJuego() {
    document.getElementById("Juego").style.display = "block";
    document.getElementById("Puntaje").style.display = "block";
    document.getElementById("Preg").style.display = "block";
    document.getElementById("botonesResp").style.display = "flex";
    document.getElementById("botonesFinal").style.display = "flex";
    document.getElementById("TemaElegir").disabled = true;
    document.getElementById("NivelJuego").disabled = true;
    document.getElementById("botonJugar").style.visibility= "hidden";
    preguntasFilt = []; 
    let pregunta = mostrarPreg();
    if (pregunta) {
        crearBotones(pregunta);
    }
}

let maximoPunt=0
function maximoPuntaje(nMaximo){
    if(nMaximo > maximoPunt){
    maximoPunt= nMaximo;
    document.getElementById("MaximoPuntaje").innerText = "Máximo puntaje obtenido por un jugador: " + maximoPunt ;
    }
}

function terminarPartida() {
    maximoPuntaje(puntaje)
    puntaje = 0;
    document.getElementById("Juego").style.display = "none";
    document.getElementById("Puntaje").style.display = "none";
    document.getElementById("botonesResp").style.display = "none";
    document.getElementById("botonesFinal").style.display = "none";
    document.getElementById("botonJugar").style.visibility = "visible";
    document.getElementById("Preg").style.display = "none";
    document.getElementById("TemaElegir").disabled = false;
    document.getElementById("NivelJuego").disabled = false;
    preguntasFilt = [];
    actualizarPuntaje();
}