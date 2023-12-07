//base de datos local de preguntas
const bd_juego = [
    {
        id:0,
        pregunta:"¿Cual de estas es una Big Bets 24?",
        op0:"MUNDIAL FUTBOL 2024",
        op1:"REBEL MOON",
        op2:"DUNE 2",
        op3: "RAPIDOS Y FURIOSOS 11",
        correcta:"1"
    },
    {
        id:2,
        pregunta:"¿KACANG va a tener nueva imagen?",
        op0:"Verdadero",
        op1:"Falso",
        correcta:"0"
    },
    {
        id:3,
        pregunta:"Switch planea tener una nueva combinación la cual es…",
        op0:"Sabritas Switch sabor Doritos Incógnita",
        op1:"Ruffles Switch sabor Churrumais",
        op2:"Churrumais Switch sabor Fritos Chorizo",
        op3:"Todavía es un misterio…",
        correcta:"3"
    },
    {
        id:4,
        pregunta:"Switch tiene planeado tener nuevos integrantes los cuales son…",
        op0:"Churrumais y Paketaxo",
        op1:"Paketaxo y Xferas",
        op2:"Xferas y Churrumais",
        op3:"Tostitos y Xferas",
        correcta:"2"
    },
    {
        id:5,
        pregunta:"Gamesa va a participar en deportes y se llamará…",
        op0:"Gamesa Sports – Defensores de la Galleta",
        op1:"Deportes Gamesa – Gamesa Champions",
        op2:"Gamesports – Defensores de Gamesa",
        op3:"Gamesa Championship – Galletas para los defensores",
        correcta:"0"
    },
    {
        id:6,
        pregunta:"Churrumais Flamas cambiará de nombre:",
        op0:"FLAMIN HOT",
        op1:"FLAMAS HOT",
        correcta:"0"
    },
    {
        id: 7,
        pregunta: "Este es el nombre de una próxima Promoción!",
        op0: "Valió cacahuate",
        op1: "Valió Cheetos",
        op2: "Valió Ruffles",
        op3: "Valió Galleta",
        correcta: "1"
    }
]

// Arreglo para guardar las respuestas elegidas
let respuestas = [];
// Cantidad de respuestas correctas
let cantiCorrectas = 0;
// Pregunta actual que debe ser cargada
let numPregunta = 0;

/// Función para cargar una pregunta en el DOM
function cargarPreguntaEnDOM(pregunta) {
    const contenedor = document.createElement("div");
    contenedor.className = "contenedor-pregunta";
    contenedor.id = pregunta.id;
    const h2 = document.createElement("h2");
    h2.textContent = pregunta.id + 1 + " - " + pregunta.pregunta;
    contenedor.appendChild(h2);
    const opciones = document.createElement("div");

    if (pregunta.id === 2) { // Para la pregunta "¿KACANG va a tener nueva imagen?"
        const label1 = crearLabel(0, pregunta.op0, pregunta.id);
        const label2 = crearLabel(1, pregunta.op1, pregunta.id);
        opciones.appendChild(label1);
        opciones.appendChild(label2);
    }else if (pregunta.id === 0 || pregunta.id === 4 || pregunta.id === 1 || pregunta.id === 5) { // Para la pregunta "Switch tiene planeado tener nuevos integrantes los cuales son…"
        const label1 = crearLabel(0, pregunta.op0, pregunta.id);
        const label2 = crearLabel(1, pregunta.op1, pregunta.id);
        const label3 = crearLabel(2, pregunta.op2, pregunta.id);
        const label4 = crearLabel(3, pregunta.op3, pregunta.id);
        opciones.appendChild(label1);
        opciones.appendChild(label2);
        opciones.appendChild(label3);
        opciones.appendChild(label4);
    }
    else if (pregunta.id === 6) { // Para la pregunta "Churrumais Flamas cambiará de nombre:"
        const label1 = crearLabel(0, pregunta.op0, pregunta.id);
        const label2 = crearLabel(1, pregunta.op1, pregunta.id);
        opciones.appendChild(label1);
        opciones.appendChild(label2);
    } else if (pregunta.id === 3) { // Para la pregunta "Switch planea tener una nueva combinación la cual es…"
        const label1 = crearLabel(0, pregunta.op0, pregunta.id);
        const label2 = crearLabel(1, pregunta.op1, pregunta.id);
        const label3 = crearLabel(2, pregunta.op2, pregunta.id);
        const label4 = crearLabel(3, pregunta.op3, pregunta.id);
        opciones.appendChild(label1);
        opciones.appendChild(label2);
        opciones.appendChild(label3);
        opciones.appendChild(label4);
    }  else if (pregunta.id === 7) { // Para la pregunta "Este es el nombre de una próxima Promoción!"
        const label1 = crearLabel(0, pregunta.op0, pregunta.id);
        const label2 = crearLabel(1, pregunta.op1, pregunta.id);
        const label3 = crearLabel(2, pregunta.op2, pregunta.id);
        const label4 = crearLabel(3, pregunta.op3, pregunta.id);
        opciones.appendChild(label1);
        opciones.appendChild(label2);
        opciones.appendChild(label3);
        opciones.appendChild(label4);
    }else {
        // Crear etiquetas de opciones dinámicamente (para el resto de preguntas)
        for (let i = 0; i < Object.keys(pregunta).length - 4; i++) {
            const label = crearLabel(i, pregunta[`op${i}`], pregunta.id);
            opciones.appendChild(label);
        }
    }

    // Agregar opciones al contenedor principal
    contenedor.appendChild(opciones);
    document.getElementById("juego").appendChild(contenedor);
}

// Función para crear una etiqueta de opción
function crearLabel(num, txtOpcion, preguntaId) {
    const label = document.createElement("label");
    label.id = `l${preguntaId}${num}`;
    const input = document.createElement("input");
    input.setAttribute("type", "radio");
    input.name = `p${preguntaId}`;
    input.setAttribute("onclick", `seleccionar(${preguntaId},${num})`);
    const span = document.createElement("span");
    const correccion = document.createElement("span");
    correccion.id = `p${preguntaId}${num}`;
    span.textContent = txtOpcion;
    label.appendChild(input);
    label.appendChild(span);
    label.appendChild(correccion);

    return label;
}

// Cargar todas las preguntas en el DOM
function cargarTodasLasPreguntas() {
    bd_juego.forEach((pregunta) => {
        cargarPreguntaEnDOM(pregunta);
    });
}

// Función para seleccionar una respuesta
function seleccionar(pos, opElegida) {
    respuestas[pos] = opElegida;
}

// Botón de corregir
let corregir = document.getElementById("corregir");
corregir.onclick = function () {
    // Recorrer el arreglo de respuestas y comparar
    for (let i = 0; i < bd_juego.length; i++) {
        const pregunta = bd_juego[i];
        if (pregunta.correcta == respuestas[i]) { // Respuesta correcta
            cantiCorrectas++;
            let idCorreccion = `p${i}${pregunta.correcta}`;
            document.getElementById(i).className = "contenedor-pregunta correcta";
            document.getElementById(idCorreccion).innerHTML = "&check;";
            document.getElementById(idCorreccion).className = "acierto";
        } else { // Respuesta incorrecta
            let id = `p${i}${respuestas[i]}`;
            let idCorreccion = `p${i}${pregunta.correcta}`;
            document.getElementById(i).className = "contenedor-pregunta incorrecta";
            document.getElementById(id).innerHTML = "&#x2715;";
            document.getElementById(id).className = "no-acierto";
            document.getElementById(idCorreccion).innerHTML = "&check;";
            document.getElementById(idCorreccion).className = "acierto";
        }
    }

    // Deshabilitar todos los inputs
    let inputs = document.getElementsByTagName("input");
    for (let i = 0; i < inputs.length; i++) {
        inputs[i].disabled = true;
    }

    // Scroll hacia arriba
    window.scrollTo(0, 0);
    // Mostrar la cantidad de respuestas correctas e incorrectas
    let resultado = document.createElement("h2");
    resultado.className = "resultado";
    resultado.textContent = `${cantiCorrectas} CORRECTAS - ${bd_juego.length - cantiCorrectas} INCORRECTAS`;
    document.getElementById("juego").appendChild(resultado);
};

// Llamar a la función para cargar todas las preguntas al cargar la página
window.onload = function () {
    cargarTodasLasPreguntas();
};