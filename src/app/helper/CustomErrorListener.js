// Importación del ErrorListener de ANTLR4
import { ErrorListener } from 'antlr4';

// Definición de la clase CustomErrorListener que extiende ErrorListener
export default class CustomErrorListener extends ErrorListener {
  constructor() {
    super();
    // Inicialización de un arreglo para almacenar los errores
    this.ErrorsListener = [];
  }

  // Método para manejar errores sintácticos
  syntaxError(recognizer, offendingSymbol, line, column, msg, e) {
    // Construcción de un mensaje de error y almacenamiento en el arreglo de errores
    this.ErrorsListener.push(`\nError: Error en la línea ${line}:${column} - ${msg}`);
    // Llamada al método para obtener los errores de sintaxis
    this.getErrorSintaxis();
    return;
  }

  // Método para obtener los errores de sintaxis
  getErrorSintaxis() {
    // Inicialización de un arreglo para almacenar los mensajes de error de sintaxis
    const erroresSintaxis = ["Se encontraron errores durante el análisis. Deteniendo el análisis."]
    const errors = this.ErrorsListener;
    // Iteración sobre los errores almacenados para agregarlos al arreglo de errores de sintaxis
    errors.forEach(error => {
      const errores = `${error}`
      erroresSintaxis.push(errores)
    });
    // Retorna los errores de sintaxis como una cadena de texto
    return erroresSintaxis.join('\n')
  }

  // Método para verificar si hay errores
  hasErrors() {
    // Retorna true si hay errores, de lo contrario retorna false
    return this.ErrorsListener.length > 0;
  }
};