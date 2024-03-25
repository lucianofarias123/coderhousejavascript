
const diasSemana = ['lunes', 'martes', 'miércoles', 'jueves', 'viernes'];
const turnos = ["7:00", "8:00", "9:00", "10:00", "11:00", "12:00", "13:00", "14:00", "15:00", "16:00"];

document.getElementById('turno-form').addEventListener('submit', function (event) {
    event.preventDefault();

    let diaIngresado = document.getElementById('dia').value.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "");
    let horarioIngresado = document.getElementById('horario').value.trim();

    if (!diasSemana.includes(diaIngresado)) {
        Swal.fire("Por favor, ingrese un día válido");
        return;
    }

    if (!turnos.includes(horarioIngresado)) {
        Swal.fire("Por favor, ingrese un horario válido, entre las 7:00hs y 16:00hs");
        return;
    }

    let turno = {
        dia: diaIngresado,
        horario: horarioIngresado
    };

    fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(turno)
    })
        .then(response => {
            if (!response.ok) {
                throw new Error('Error al registrar el turno');
            }
            return response.json();
        })
        .then(data => {
            Swal.fire("Turno registrado correctamente");
            mostrarTurnos();
            document.getElementById('turno-form').reset();
        })
        .catch(error => {
            console.error('Error:', error);
            Swal.fire("Ocurrió un error al registrar el turno");
        });
});

function mostrarTurnos() {
}