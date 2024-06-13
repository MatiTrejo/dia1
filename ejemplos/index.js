var contadorTurnos = 0; // Contador global para el número de turno

function generarTurno() {
    var nombre = document.getElementById("nombre").value;
    var apellido = document.getElementById("apellido").value;
    var dni = document.getElementById("dni").value;
    var fecha = document.getElementById("fecha").value;

    if (nombre === "" || apellido === "" || dni === "" || fecha === "") {
        alert("Por favor complete todos los campos.");
        return;
    }

    // Aumentar el contador de turnos
    contadorTurnos++;

    var turno = {
        nombre: nombre,
        apellido: apellido,
        dni: dni,
        fecha: fecha,
        numero: contadorTurnos // Usar el contador de turnos como número de turno
    };

    mostrarTurno(turno);
    actualizarTextBox(turno);

    // Limpiar los campos de texto después de generar el turno
    document.getElementById("nombre").value = "";
    document.getElementById("apellido").value = "";
    document.getElementById("dni").value = "";
    document.getElementById("fecha").value = "";
}

function mostrarTurno(turno) {
    var turnosDiv = document.getElementById("turnos");
    var nuevoTurno = document.createElement("div");
    nuevoTurno.classList.add("turno");
    nuevoTurno.innerHTML = `
        <p><strong>Turno :</strong> ${turno.numero}</p>
        <p><strong>Nombre:</strong> ${turno.nombre}</p>
        <p><strong>Apellido:</strong> ${turno.apellido}</p>
        <p><strong>DNI:</strong> ${turno.dni}</p>
        <p><strong>Fecha:</strong> ${turno.fecha}</p>
    `;
    turnosDiv.appendChild(nuevoTurno);
}

function actualizarTextBox(turno) {
    var textBox = document.getElementById("detalleTurno");
    textBox.value += `Turno : ${turno.numero}\n`;
    textBox.value += `Nombre: ${turno.nombre}\n`;
    textBox.value += `Apellido: ${turno.apellido}\n`;
    textBox.value += `DNI: ${turno.dni}\n`;
    textBox.value += `Fecha: ${turno.fecha}\n\n`;
}

