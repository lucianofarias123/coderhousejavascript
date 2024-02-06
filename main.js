const diasSemana = ['lunes', 'martes', 'miercoles', 'jueves', 'viernes'];
const turnos = ["7:00", "8:00", "9:00", "10:00", "11:00", "12:00", "13:00", "14:00", "15:00", "16:00"];

document.getElementById('sacar-turno-btn').addEventListener('click', sacarTurno);
mostrarTurnos();

function sacarTurno() {
    let diaIngresado = prompt("Ingrese día de la semana deseado para su turno").toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "");
    if (!diasSemana.includes(diaIngresado)) {
        alert("Por favor, ingrese un día válido");
        return;
    }

    let horarioIngresado = prompt("Ingrese el horario deseado, entre las 7:00hs y 16:00hs");
    if (!turnos.includes(horarioIngresado)) {
        alert("Por favor, ingrese un horario válido, entre las 7:00hs y 16:00hs");
        return;
    }


    let turno = {
        dia: diaIngresado,
        horario: horarioIngresado
    };


    let turnosRegistrados = JSON.parse(localStorage.getItem('turnos')) || [];

    // Agregar nuevo turno
    turnosRegistrados.push(turno);

    // Para guardar en localstorage
    localStorage.setItem('turnos', JSON.stringify(turnosRegistrados));

    alert("Turno registrado correctamente");
    mostrarTurnos();
}

function mostrarTurnos() {
    let turnosRegistrados = JSON.parse(localStorage.getItem('turnos')) || [];
    let turnosHTML = "<h2>Turnos Registrados:</h2>";
    if (turnosRegistrados.length === 0) {
        turnosHTML += "<p>No hay turnos registrados.</p>";
    } else {
        turnosRegistrados.forEach(turno => {
            turnosHTML += `<p>Día: ${turno.dia}, Horario: ${turno.horario}</p>`;
        });
    }
    document.getElementById('turnos-lista').innerHTML = turnosHTML;
}