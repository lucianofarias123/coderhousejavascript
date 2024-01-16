
const diasSemana = ['Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes'];

const turnos = ["7:00", "8:00", "9:00", "10:00", "11:00", "12:00", "13:00", "14:00", "15:00", "16:00"];


function sacarTurno() {
    let diaIngresado = prompt("Ingrese día de la semana deseado para su turno");
    if (diasSemana.includes(diaIngresado)) {
        alert("Día cargado correctamente");
    } else {
        alert("Por favor, ingrese un día válido");
        return;
    }
    let horarioIngresado = prompt("Ingrese el horario deseado, entre las 7:00hs y 16:00hs");

    if (turnos.includes(horarioIngresado)) {
        alert("Horario registrado correctamente");
        alert(`Has sacado un turno para el día ${diaIngresado} a las ${horarioIngresado}.`);
    } else {
        alert("Por favor, ingrese un horario válido, entre las 7:00hs y 16:00hs");
    }
}




sacarTurno();
