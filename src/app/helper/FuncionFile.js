//Funcion para leerArchivo
export function readAndDisplayFile(file, callback) {
    const filereader = new FileReader(); // Crea una nueva instancia de FileReader.
    filereader.readAsText(file); // lee el contenido del archivo de texto

    // Funcion para obtener el contenido del fill y se la pasa un callback
    filereader.onload = function () {
        const data = filereader.result; // se obtiene el conetenido del archivo
        callback(data); // Llama a la devolución de llamada proporcionada con los datos.
    };
};
