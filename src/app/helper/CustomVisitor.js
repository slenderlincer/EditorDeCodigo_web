import CodeFileVisitor from "../../grammar/CodeFileVisitor.js";
import CodeFileParser from "../../grammar/CodeFileParser.js";

export default class CustomVisitor extends CodeFileVisitor {
	constructor() {
		super();
		this.variables = {
			"margit": [],
			"radahn": [],
			"godrick": []
		};
		this.errors = [];
		this.prints = [];
	}

	getPrints(){
		const prints = []
		const impresiones= this.prints;
		impresiones.forEach(print => {
			const printf = `${print}`
			prints.push(printf)
		});
		return prints.join('\n');
	}

	// Método para verificar si hay errores durante el análisis.
	contErrores(){
		return this.errors.length > 0;
	}
	
	// Obtener las variables y sus valores definidos
	getVariables(){
		const variables = this.variables;
		const result = [];
		for (const variable in variables) {
			if (variables.hasOwnProperty(variable)) {
				const variableArray = variables[variable];
				variableArray.forEach(item => {
					const variableStr = `${variable} id = ${item.id} value = ${item.value}`;
					result.push(variableStr);
				});
			}
		}
		return result.join('\n'); // Unir los resultados en una sola cadena separada por saltos de línea
	}
	
	// Método para obtener los errores encontrados durante el análisis.
	getError(){
		const errores = ['Se han encontrado errores durante el análisis']
		const errors = this.errors;
		errors.forEach(error => {
			const erroresDe = `${error}`
			errores.push(erroresDe)
		});
		return errores.join('\n');
	}
	
	// Visit a parse tree produced by CodeFileParser#start.
	visitStart(ctx) {
		this.visitChildren(ctx);
		if (this.errors.length > 0) {
		  this.errorEncountered = true; // Marcar que se ha encontrado un error
		  console.log("Se han encontrado errores durante el análisis.");
		  return this.getError();
		}
		console.log(this.getVariables());
		return [this.getPrints()];
	}
	
	// Visit a parse tree produced by CodeFileParser#content.
	visitContent(ctx) {
		return this.visitChildren(ctx);
	}

	// Visit a parse tree produced by CodeFileParser#declaracion.
	visitDeclaracion(ctx) {
    const tipo = ctx.tipo().getText();
	const id = ctx.ID().getText();

		
		let is_variable_defined = this.variableExist(id);
		if (!is_variable_defined){
			this.variables[tipo].push({"id":id, "value": undefined});
		} else {
			this.errors.push(`La declaracion de "${id}" está repetida`);
		}
		
		return [tipo, id];
	}
	
	// Visit a parse tree produced by CodeFileParser#declaracionasignacion.
	visitDeclaracionasignacion(ctx) {
		const tipo = ctx.tipo().getText();
		const id = ctx.ID().getText();
		const valor = this.visit(ctx.expr());
	
		let is_variable_defined = this.variableExist(id);
		if (!is_variable_defined) {
			this.variables[tipo].push({ "id": id, "value": valor });
		} else {
			this.errors.push(`La variable "${id}" ya está definida`);
		}
	
		return [tipo, id, valor];
	  }
	
	// Visit a parse tree produced by CodeFileParser#asignaciones.
	visitAsignaciones(ctx) {
		const id = ctx.ID().getText();
		const valor = parseInt(ctx.expr().getText()); 
		
		let is_variable_defined = this.variableExist(id);
		if (is_variable_defined) {
			// Buscar y actualizar el valor de la variable
			for (let key in this.variables) {
				const variable = this.variables[key].find(variable => variable.id === id);
				if (variable) {
					variable.value = valor;
					break;
				}
			}
		} else {
			this.errors.push(`La variable "${id}" no está definida`);
		}
		return [id, valor];
	}

	// Visit a parse tree produced by CodeFileParser#imprimir.
	visitImprimir(ctx) {
			const valor = this.visit(ctx.expr()); 
			if (ctx.expr().ID) {
				const id = ctx.expr().ID().getText();
				if(!this.variableExist(id)){
				return;
				}
			}
			this.prints.push(valor);
			return this.visitChildren(ctx);
	}

	// Visit a parse tree produced by CodeFileParser#Condiciones.
	visitCondiciones(ctx) {
		// Obtener la única condición dentro de la regla condiciones
		let condicion = ctx.condicion();
		// Visitamos y evaluamos la condición
		let condicionCumplida = this.visitCondicion(condicion);

		// Verificar si la condición se cumple
		if (condicionCumplida) {
			// Si la condición se cumple, visitamos y ejecutamos las expresiones dentro del cuerpo del if
			let expresionesCondicion = ctx.expresiones();

			// Visitamos las expresiones dentro del cuerpo del if
			this.visit(expresionesCondicion);
		}else if(ctx.otherwise()){
			let expresionesElse = ctx.otherwise().expresiones();

			this.visit(expresionesElse)
		}
		return;
	}
	// Visit a parse tree produced by CodeFileParser#condicion.
visitCondicion(ctx) {
    // Si la expresión es directamente `true`
    if (ctx.VERDADERO) {
        return true;
    } else if (ctx.op) { // Si hay un operador
        // Acceder a la expresión izquierda de la condición
        let leftExpr = this.visit(ctx.expr(0));

        // Acceder al operador de comparación
        let operator = ctx.op.text;

        // Acceder a la expresión derecha de la condición
        let rightExpr = this.visit(ctx.expr(1));

        // Realizar la comparación según el operador
        switch (operator) {
            case '>':
                return leftExpr > rightExpr;
            case '<':
                return leftExpr < rightExpr;
            case '>=':
                return leftExpr >= rightExpr;
            case '<=':
                return leftExpr <= rightExpr;
            case '==':
                return leftExpr == rightExpr;
            case '!=':
                return leftExpr != rightExpr;
            default:
                throw new Error("Operador de comparación no válido: " + operator);
        }
    } else {
        throw new Error("Expresión de condición no válida");
    }
}
	
	// Visit a parse tree produced by CodeFileParser#else.
	visitElse(ctx) {
		return this.visitChildren(ctx);
	}

	// Visit a parse tree produced by CodeFileParser#tipo.
	visitTipo(ctx) {
		return this.visitChildren(ctx);
	}
	
	// Visit a parse tree produced by CodeFileParser#float.
	visitFloat(ctx) {
		return parseFloat(ctx.FLOAT().getText());
	}
	
	visitInt(ctx) {
		// INT
		return parseInt(ctx.INT().getText());
	}

	
	// Visit a parse tree produced by CodeFileParser#string.
	visitString(ctx) {
		let stringWithQuotes = ctx.STRING().getText(); // Obtener el texto completo del token STRING, incluyendo las comillas
		// Eliminar las comillas dobles al inicio y al final del texto
		return stringWithQuotes.substring(1, stringWithQuotes.length - 1);
	}

	visitId(ctx) {
		// ID
		let id = ctx.ID().getText();
		if (!this.variableExist(id)) {
			if (!this.errors.some(error => error.startsWith(`Error: La variable "${id}"`))) {
				this.errors.push(`Error: La variable "${id}" no está declarada`);
			}
			return; // Retornar un valor predeterminado
		} else {
			// Buscar el valor asociado al identificador en la estructura de datos `variables`
			for (let key in this.variables) {
				const variable = this.variables[key].find(variable => variable.id === id);
				if (variable) {
					// Si se encuentra el valor, retornarlo
					return variable.value;
				}
			}
		}
	}

	visitMulDiv(ctx) {
		// expr op=('*'|'/') expr
		let left = this.visit(ctx.expr(0)); // obtener el valor de la subexpresión izquierda
		let right = this.visit(ctx.expr(1)); // obtener el valor de la subexpresión derecha
		if (ctx.op.type === CodeFileParser.MUL) return left * right;
		return left / right; 
	}
	
	visitAddSub(ctx) {
		// expr op=('+'|'-') expr
		let left = this.visit(ctx.expr(0)); // obtener el valor de la subexpresión izquierda
		let right = this.visit(ctx.expr(1)); // obtener el valor de la subexpresión derecha
		if (ctx.op.type === CodeFileParser.ADD) return left + right;
		return left - right;
	}
	
	visitParens(ctx) {
		// '(' expr ')'
		return this.visit(ctx.expr()); // retornar valor de la expresión hija
	}
	
	// Método para verificar si una variable está definida en la estructura de variables.
	variableExist(variable_name){
		let isVariableDefined = false;
		for(let key in this.variables){  // Recorre las claves del objeto 'variables' para buscar la variable
			if (isVariableDefined){
				break;
			} else {
				 // Utiliza find() para buscar la variable dentro del arreglo asociado a la clave
				isVariableDefined = !!(this.variables[key].find(variable => variable.id === variable_name));
			}
		}
		return isVariableDefined;
	}
}