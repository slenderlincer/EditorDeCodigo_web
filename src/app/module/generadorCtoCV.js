import antlr4 from "antlr4";
import CodeCLexer from "../../grammarC/CodeCLexer.js";
import CodeCParser from "../../grammarC/CodeCParser.js";
import CustomVisitorC from "../helper/CustomVisitorC.js";

export const traductorCtoCV = (input) => {
    const chars = new antlr4.InputStream(input); // Crea una secuencia de caracteres a partir del código de entrada
    const lexer = new CodeCLexer(chars); // Crea un Lexer personalizado para el código de entrada
    const tokens = new antlr4.CommonTokenStream(lexer); // Crea un flujo de tokens a partir del Lexer
    const parser = new CodeCParser(tokens); // Crea un parser para el flujo de tokens
    parser.buildParseTrees = true

    const visitor = new CustomVisitorC();

    const tree = parser.start();

    const result = visitor.visitStart(tree);
    
    return result;
}