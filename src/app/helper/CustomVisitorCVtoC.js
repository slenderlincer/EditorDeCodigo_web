import CodeFileVisitor from "../../grammar/CodeFileVisitor.js";
import CodeFileParser from "../../grammar/CodeFileParser.js";

export default class CustomVisitorCtoCV extends CodeFileVisitor{
    constructor() {
		super();
		this.codigoTraducido = "";
	}

	translateType(type) {
		switch (type) {
			case "margit":
				return "int";
			case "godrick":
				return "float";
			case "radahn":
				return "char";
			default:
				return "";
		}
	}

	ifelse(){
		let state = this.codigoTraducido
		let len = this.codigoTraducido.length
		return "else" ==  state[len-4] + state[len-3] + state[len-2] + state[len-1]
	}

	// Visit a parse tree produced by CodeCParser#start.
	visitStart(ctx) {
		this.codigoTraducido += "void main(){";
		this.visit(ctx.content());
		this.codigoTraducido += "\n}";
		return this.codigoTraducido;
	}

	// Visit a parse tree produced by CodeCParser#content.
	visitContent(ctx) {
		return this.visitChildren(ctx);
	}

	visitExpresiones(ctx){
		console.log("expresiones");
		return this.visitChildren(ctx);
	}

	// Visit a parse tree produced by CodeCParser#declaracion.
    visitDeclaracion(ctx) {
        console.log('declarando');
        const tipo = ctx.tipo().getText();
        const id = ctx.ID().getText();
        let expr = '';

        if (ctx.expr()) {
            expr = ' = ' + ctx.expr().getText();
        }

        this.codigoTraducido += `\n${this.translateType(tipo)} ${id}${expr};`;
        return null;  // Importante: visitar debe devolver null para no propagar valores incorrectos
    }

	// Visit a parse tree produced by CodeCParser#asignaciones.
	visitAsignaciones(ctx) {
		 // Obtener el identificador y la expresión del contexto
		 const id = ctx.ID().getText();
		 const value = ctx.expr().getText();
	 
		 // Realizar la traducción según el lenguaje de destino (aquí se muestra un ejemplo para JavaScript)
		 this.codigoTraducido += `\n${id} = ${value};`;
	}

	// Visit a parse tree produced by CodeCParser#imprimir.
	visitImprimir(ctx) {
		let content = ctx.expr().getText();
		this.codigoTraducido += `\nprintf(${content});`;
		return ctx.getText();
	}

	// Visit a parse tree produced by CodeCParser#ordencondicional.
	visitOrdencondicional(ctx) {
		return this.visitChildren(ctx);
	}

	// Visit a parse tree produced by CodeCParser#condicional.
	visitCondicional(ctx) {
		let condicion = ctx.expr().getText();
		console.log(condicion)
		this.codigoTraducido += `${this.ifelse() ? " if" : "\nif"}(${condicion}){`;	
		this.visit(ctx.expresiones())
		this.codigoTraducido += `\n}`;	
		return
	}

	// Visit a parse tree produced by CodeCParser#condicional_elseif.
	visitCondicional_elseif(ctx) {
		this.codigoTraducido += `\nelse`;	
		this.visit(ctx.condicional());
		return
	}

	// Visit a parse tree produced by CodeCParser#condicional_else.
	visitCondicional_else(ctx) {
		this.codigoTraducido += `\nelse {`;
		this.visit(ctx.expresiones())
		this.codigoTraducido += `\n}`;
		return
	}
	// Visit a parse tree produced by CodeCParser#while.
	visitWhile(ctx) {
		console.log('yes')
		let condicion = ctx.expr().getText();
		this.codigoTraducido += `\nwhile (${condicion}){`;
		this.visit(ctx.expresiones());
		this.codigoTraducido += `\n}`
		return 
	}
	  
	// Visit a parse tree produced by CodeCParser#condition.
	visitExpr(ctx) {
		return this.visitChildren(ctx);;
	}

	visitAsigna(ctx) {
		const id = ctx.ID().getText();
		const valor = ctx.expr().getText();
		const operadorI =  ctx.com.text;

		this.codigoTraducido += `\n${id} ${operadorI} ${valor};`;

		return
		
	}
	
	// Visitar un árbol de análisis sintáctico producido por CompiladorParser#incremento.
	visitIncremento(ctx) {
		const id = ctx.ID().getText();
		const operadorI =  ctx.com.text;
		
		this.codigoTraducido += `\n${id} ${operadorI};`;
		return
	}
}
