import antlr4 from "antlr4"; // Importa la biblioteca antlr4
import CodeFileLexer from "../../grammar/CodeFileLexer.js"; // Importa el Lexer generado por ANTLR4
import CodeFileParser from "../../grammar/CodeFileParser.js"; // Importa el Parser generado por ANTLR4
import CustomVisitor from "../helper/CustomVisitor.js"; // Importa el visitante personalizado
import CustomErrorListener from "../helper/CustomErrorListener.js"; // Importa el listener de errores personalizado

//Función para analizar el código de entrada.
export const analizar = (input) => {
  const chars = new antlr4.InputStream(input); // Crea una secuencia de caracteres a partir del código de entrada
  const lexer = new CodeFileLexer(chars); // Crea un Lexer personalizado para el código de entrada
  const tokens = new antlr4.CommonTokenStream(lexer); // Crea un flujo de tokens a partir del Lexer
  const parser = new CodeFileParser(tokens); // Crea un parser para el flujo de tokens
  const customErrorListener = new CustomErrorListener();

  //Objeto para manejar errores léxicos
  const errorListener = {
    syntaxError(recognizer, offendingSymbol, line, column, msg, e){
        const mensajeError = `\nError lexico: en linea ${line}:${column} - ${msg}`
        customErrorListener.ErrorsListener.push(mensajeError);
        return customErrorListener.ErrorsListener;
      }
    }
  
  lexer.removeErrorListeners();// Remueve los listeners de error por defecto del Lexer

  lexer.addErrorListener(errorListener); // Agrega los Errores del objeto que maneja errores lexicos

  parser.removeErrorListeners(); // Remueve los listeners de error por defecto del Parser

  parser.addErrorListener(customErrorListener);// Añade el listener de error personalizado al Parser

  parser.buildParseTrees = true; // Habilita la construcción de árboles de análisis
  const tree = parser.start(); // Comienza el análisis sintáctico desde el símbolo inicial


  // Verifica si hay errores léxicos o sintácticos
  if (customErrorListener.hasErrors()) {
    return customErrorListener.getErrorSintaxis(); // Retorna los errores encontrados
  }

  const customVisitor = new CustomVisitor(); // Crea un visitante personalizado
  const resultado = customVisitor.visitStart(tree); // Realiza la visita al árbol de análisis

  // Verifica si hay errores durante la visita al árbol
  if (customVisitor.contErrores()) {
    return customVisitor.getError(); // Retorna los errores encontrados durante la visita
  }

  return resultado; // Retorna el resultado del análisis
}