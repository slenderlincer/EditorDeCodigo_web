import antlr4 from "antlr4";
import CVtoJasminLexer from "../../grammarJasmin/CVtoJasminLexer.js";
import CVtoJasminParser from '../../grammarJasmin/CVtoJasminParser.js';
import CustomVisitorCVtoJasmin from "../helper/CustomVisitorCVtoJasmin.js";

export const traductorCVtoJasmin = (input) => {
    const chars = new antlr4.InputStream(input); // Crea una secuencia de caracteres a partir del código de entrada
    const lexer = new CVtoJasminLexer(chars); // Crea un Lexer personalizado para el código de entrada
    const tokens = new antlr4.CommonTokenStream(lexer); // Crea un flujo de tokens a partir del Lexer
    const parser = new CVtoJasminParser(tokens); // Crea un parser para el flujo de tokens
    parser.buildParseTrees = true

    const visitor = new CustomVisitorCVtoJasmin();
    const tree = parser.start();

    const resJasmin = visitor.visitStart(tree);
    
    return resJasmin;
}
