//document.addEventListener('DOMContentLoaded', function () {
    
//    const form = document.querySelector('form');

//    if (form) {
//        form.addEventListener('submit', function (event) {
//            const fechaInput = document.getElementById('Fecha').value;
//            const hoy = new Date();
//            const fechaSeleccionada = new Date(fechaInput);

//            hoy.setHours(0, 0, 0, 0);

//            if (fechaSeleccionada < hoy) {
//                event.preventDefault();
//                alert("La fecha del evento no puede estar en el pasado.");
//            }
//        });
//    }
//});

document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('eventoForm');
    const mensajeError = document.createElement('p');
    mensajeError.classList.add('alert', 'alert-danger', 'mt-2');

    if (form) {
        form.addEventListener('submit', function (event) {
            const fechaInput = document.getElementById('Fecha');
            const hoy = new Date();

            const fechaSeleccionada = new Date(fechaInput.value);
            fechaSeleccionada.setUTCHours(0, 0, 0, 0);
            hoy.setUTCHours(0, 0, 0, 0);

            if (fechaSeleccionada < hoy) {
                event.preventDefault();
                mensajeError.textContent = 'La fecha del evento no puede ser una fecha menor a la actual.';
                fechaInput.parentNode.insertBefore(mensajeError, fechaInput.nextSibling);

                setTimeout(() => {
                    mensajeError.remove();
                }, 3500);
            } else {
                if (mensajeError.parentNode) {
                    mensajeError.parentNode.removeChild(mensajeError);
                }
            }
        });
    }
});