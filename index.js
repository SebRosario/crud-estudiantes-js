import GestorEstudiantes from './Modules/GestorEstudiantes.js';

const gestor = new GestorEstudiantes();

function mostrarMenu() {
    console.log("\n--- Menú de Gestión de Estudiantes ---");
    console.log("1. Agregar Estudiante");
    console.log("2. Listar Estudiantes");
    console.log("3. Actualizar Estudiante");
    console.log("4. Eliminar Estudiante");
    console.log("5. Salir");
}

function ejecutarOpcion(opcion) {
    switch (opcion) {
        case '1':
            const nombre = prompt("Ingrese el nombre del estudiante:");
            const edad = prompt("Ingrese la edad del estudiante:");
            const nivel = prompt("Ingrese el nivel del estudiante:");
            gestor.agregarEstudiante(nombre, edad, nivel);
            break;
        case '2':
            gestor.listarEstudiantes();
            break;
        case '3':
            const idActualizar = prompt("Ingrese el ID del estudiante a actualizar:");
            const nuevoNombre = prompt("Ingrese el nuevo nombre:");
            const nuevaEdad = prompt("Ingrese la nueva edad:");
            const nuevoNivel = prompt("Ingrese el nuevo nivel:");
            gestor.actualizarEstudiante(idActualizar, nuevoNombre, nuevaEdad, nuevoNivel);
            break;
        case '4':
            const idEliminar = prompt("Ingrese el ID del estudiante a eliminar:");
            gestor.eliminarEstudiante(idEliminar);
            break;
        case '5':
            console.log("Saliendo del programa...");
            process.exit();
        default:
            console.log("Opción no válida. Intente de nuevo.");
    }
}

function iniciar() {
    let opcion;
    do {
        mostrarMenu();
        opcion = prompt("Seleccione una opción:");
        ejecutarOpcion(opcion);
    } while (opcion !== '5');
}

iniciar();