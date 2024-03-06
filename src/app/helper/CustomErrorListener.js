import { ErrorListener} from 'antlr4';


export default class CustomErrorListener extends ErrorListener {
  constructor() {
    super();
    this.ErrorsListener = [];
  }


syntaxError(recognizer, offendingSymbol, line, column, msg, e) {
      this.ErrorsListener.push(`\nError: Error en la línea ${line}:${column} - ${msg}`);
      
      this.getErrorSintaxis();
      return;
  }

  getErrorSintaxis(){
    const erroresSintaxis = ["Se encontraron errores durante el análisis. Deteniendo el análisis."]
    const errors = this.ErrorsListener;
		errors.forEach(error => {
      const errores = `${error}`
      erroresSintaxis.push(errores)
    });
    return erroresSintaxis.join('\n')
  }

  // Método para verificar si hay errores
  hasErrors() {
    return this.ErrorsListener.length > 0;
  }
};






