import CodeFileVisitor from "../../grammar/CodeFileVisitor.js";
import CodeFileParser from "../../grammar/CodeFileParser.js";
const codeFile = new CodeFileParser;

export default class CustomVisitor extends CodeFileVisitor {
  constructor() {
	super();
    this.variables = {
			"margit": [],
			"radahn": [],
			"godrick": []
		};
	this.errors = [];
	}

	contErrores(){
		return this.errors.length > 0;
	}
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
		  
	//obtener los errores guardados en this.errors
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
		  return this.getError();;
		}
		return console.log(this.getVariables());
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
		// Verificar si el mensaje es un TEXTO o una expresión
		if (ctx.mensaje().TEXTO() !== null) {
			// Si es un TEXTO, obtenemos el texto entre comillas
			const mensajeTexto = ctx.mensaje().getText().slice(1, -1); // Eliminar las comillas
			console.log(mensajeTexto);
		} else {
			// Si es una expresión, visitamos la expresión y obtenemos su valor
			const nombreVariable = ctx.mensaje().getText(); // Obtener el nombre de la variable
			if (this.variableExist(nombreVariable)) {
				const valorExpresion = this.visit(ctx.mensaje().expr());
				console.log(valorExpresion);
			} else {
				this.errors.push(`Error: la variable "${nombreVariable}" no está definida.`);
				return;
			}
		}
		return this.visitChildren(ctx);
	}
	

	// // Visit a parse tree produced by CodeFileParser#declaracion_invalida.
	// visitDeclaracion_invalida(ctx) {
    // const tipo = ctx.tipo().getText();
	// 	const id = ctx.id.text;
	// 	this.errors.push(`El ID "${id}" contiene caracteres invalidos`);

	// 	return [tipo, id];
	// }

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
	let valor = null;

    // Verificar si ctx.expr() no es nulo antes de intentar obtener su texto
    if (ctx.expr() !== null) {
        valor = parseInt(ctx.expr().getText());
    } else {
        // Manejar el caso en que no haya una expresión válida
        // Por ejemplo, si la asignación es solo un ID sin valor
        this.errors.push(`No se proporcionó un valor válido para la asignación de ${id}`);
    }

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

// Visit a parse tree produced by CodeFileParser#tipo.
visitTipo(ctx) {
	return this.visitChildren(ctx);
}

visitInt(ctx) {
	// INT
	return parseInt(ctx.INT().getText());
}

visitId(ctx) {
	    // ID
		let id = ctx.ID().getText();
		if (this.variableExist(id)) {
			// Buscar el valor asociado al identificador en la estructura de datos `variables`
			for (let key in this.variables) {
				const variable = this.variables[key].find(variable => variable.id === id);
				if (variable) {
					// Si se encuentra el valor, retornarlo
					return variable.value;
				}
			}
		}
		// Si no se encuentra el valor, retornar un valor predeterminado (en este caso, 0)
		return 0;
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


  variableExist(variable_name){
		let isVariableDefined = false;
		for(let key in this.variables){
			if (isVariableDefined){
				break;
			} else {
				isVariableDefined = !!(this.variables[key].find(variable => variable.id === variable_name));
			}
		}
		return isVariableDefined;
	}
}
