import antlr4 from "antlr4";
import CodeFileLexer from '../../grammar/CodeFileLexer.js';
import CodeFileParser from '../../grammar/CodeFileParser.js';
import CustomVisitorCVtoC from "../helper/CustomVisitorCVtoC.js";

export const traductorCVtoC = (input) => {
    const chars = new antlr4.InputStream(input); // Crea una secuencia de caracteres a partir del código de entrada
    const lexer = new CodeFileLexer(chars); // Crea un Lexer personalizado para el código de entrada
    const tokens = new antlr4.CommonTokenStream(lexer); // Crea un flujo de tokens a partir del Lexer
    const parser = new CodeFileParser(tokens); // Crea un parser para el flujo de tokens
    parser.buildParseTrees = true

    const visitor = new CustomVisitorCVtoC();
    const tree = parser.start();

    const resTraductor = visitor.visitStart(tree);
    
    return resTraductor;
}