import antlr4 from "antlr4";
import CodeFileLexer from "../../grammar/CodeFileLexer.js";
import CodeFileParser from "../../grammar/CodeFileParser.js";
import CustomVisitor from "../helper/CustomVisitor.js";
import CustomErrorListener from "../helper/CustomErrorListener.js"; // Importa tu error listener personalizado

export const analizar = (input) => {
  const chars = new antlr4.InputStream(input);
  const lexer = new CodeFileLexer(chars); // Utiliza tu Lexer personalizado
  const tokens = new antlr4.CommonTokenStream(lexer);
  const parser = new CodeFileParser(tokens);

  const errorListener = {
    syntaxError(recognizer, offendingSymbol, line, column, msg, e){
      const parts = msg.split(':');
      if(parts.length > 1){
        const tokenError = parts[parts.length - 1].trim();
        const mensajeError = `Error lexico en linea ${line}:${column} - Token no valido en el codigo ${tokenError}`
        customErrorListener.ErrorsListener.push(mensajeError);
        return customErrorListener.ErrorsListener;
      }
    }
  };
  
 //Remueve los lexer de error por defecto
  lexer.removeErrorListeners();
  lexer.addErrorListener(errorListener)
  // Remueve los listeners de error por defecto
  parser.removeErrorListeners();

  // Añade tu error listener personalizado
  const customErrorListener = new CustomErrorListener();
  parser.addErrorListener(customErrorListener);

  parser.buildParseTrees = true;
  const tree = parser.start();

  // Verifica si hay errores después del análisis
  if (customErrorListener.hasErrors()) {
    return customErrorListener.getErrorSintaxis();
  }

  

  const customVisitor = new CustomVisitor();
  const resultado = customVisitor.visitStart(tree);

  // Verifica si hay errores después del análisis
  if (customVisitor.contErrores()) {
    return customVisitor.getError();
  }

  return resultado;
};
