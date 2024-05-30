import CodeFileVisitor from "../../grammar/CodeFileVisitor.js";
import CodeFileParser from "../../grammar/CodeFileParser.js";

export default class CustomVisitor extends CodeFileVisitor {
	constructor() {
		super();
		this.variables = {
			"margit": [],
			"radahn": [],
			"godrick": [],
		};

		this.errors = [];
		this.prints = [];
		this.tiempoMaximo = 500;
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
	
		typeValue(type, value){
			let isValid = false;
			switch (type) {
				case "margit":
					isValid = /(^[0-9]+$)|(^-[0-9]+$)/.test(value);
					break;
	
				case "godrick":
					isValid = /(^[0-9]*\.[0-9]+$)|(^-[0-9]*\.[0-9]+$)/.test(value);
					break;
	
				case "radahn":
					isValid = /^[a-zA-Z]$/.test(value);
					break;
				default:
					this.errors.push(`El tipo de dato "${type}" no existe`);
					break;
			}
			
			return isValid;
		}
	
		getVariableType(variable_name){
			let variable_type = undefined;
	
			for(let key in this.variables){
				for(let variable of this.variables[key]){
					if (variable.id == variable_name){
						variable_type = key;
						break;
					}
				}
	
				if(variable_type){
					break;
				} 
			}
	
			return variable_type;
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

		if(this.getVariables().length > 0){
			console.log(this.getVariables());
		}

		
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
		let valor = undefined;

		// Verificar si hay una expresión asociada a la declaración
		if (ctx.expr()) {
			// Si hay una expresión, visitarla y obtener su valor
			valor = this.visit(ctx.expr());
	
			// Verificar si el tipo de valor es compatible con el tipo de dato
			if(this.typeValue(tipo, valor)){

				// Si el tipo de valor es compatible, agregar la variable con su valor al objeto variables
				this.variables[tipo].push({"id":id, "value": valor});
			} else {
				// Si el tipo de valor no es compatible, agregar un error
				this.errors.push(`No se puede asignar el valor "${valor}" al tipo de dato "${tipo}"`);
				return null; // O cualquier otro manejo de error que necesites
			}
		} else {
			// Si no hay expresión, la variable se declara pero no se inicializa
			this.variables[tipo].push({"id":id, "value": undefined});
		}
	
		// Devolver tipo, id y valor
		return [tipo, id, valor];
	}
	
	// Visit a parse tree produced by CodeFileParser#asignaciones.
	visitAsignaciones(ctx) {
		let id = ctx.ID().getText();
		let valor = this.visit(ctx.expr());
		let tipo = this.getVariableType(id);

		if(tipo){
			if(this.typeValue(tipo, valor)){

				let variable = this.variables[tipo].find(variable => variable.id === id);
				variable.value = valor;
			} else {
				this.errors.push(`No se puede asignar el valor "${valor}" al tipo de dato "${tipo}"`);
			}
		} else {
			this.errors.push(`La variable "${id}" no esta definida`);
		}

		return [id, valor];
	}

// Visit a parse tree produced by CompiladorParser#asigna.
visitAsigna(ctx) {
    console.log('visit asignacion');
    const variableName = ctx.ID().getText(); // Obtener el nombre de la variable


    // Obtener el tipo de la variable
    const tipo = this.getVariableType(variableName);
    if (!tipo) {
        this.errors.push(`La variable "${variableName}" no está definida`);
        return null;
    }

    // Obtener el valor actual de la variable desde el array correspondiente en this.variables
    let variableArray = this.variables[tipo];
    let variable = variableArray.find(v => v.id === variableName);
    let valorActual = variable ? variable.value : undefined;

    console.log(valorActual);

    let valor1 = this.visit(ctx.expr()); // Obtener el valor de la asignación compuesta
    const operador = ctx.com.text;

    console.log(valor1);
    console.log(operador);

    // Aplicar la operación correspondiente
    switch (operador) {
        case '+=':
            valorActual += valor1;
            break;
        case '-=':
            valorActual -= valor1;
            break;
        case '*=':
            valorActual *= valor1;
            break;
        case '/=':
            valorActual /= valor1;
			break;
		case '%=':
			valorActual %= valor1;
            break;
        default:
            console.log(`Operador de asignación desconocido: ${operador}`);
            return null;
    }

    // Almacenar el resultado de la operación en la memoria
    if (variable) {
        variable.value = valorActual;
    } else {
        this.errors.push(`La variable "${variableName}" no está definida`);
        return null;
    }

    console.log(`La variable '${variableName}' ha sido actualizada a: ${valorActual}`);

    return null;
}

visitIncremento(ctx) {
    console.log('Incrementooooo');
    const variableName = ctx.ID().getText();

    // Obtener el tipo de la variable
    const tipo = this.getVariableType(variableName);
    if (!tipo) {
        this.errors.push(`La variable "${variableName}" no está definida`);
        return null;
    }

    // Obtener el valor actual de la variable desde el array correspondiente en this.variables
    let variableArray = this.variables[tipo];
    let variable = variableArray.find(v => v.id === variableName);
    let valorActual = variable ? variable.value : undefined;

    console.log(variableName);
    console.log(valorActual);

    const operadorI = ctx.com.text;

    console.log(operadorI);

    if (operadorI === '++') {
        valorActual++;
    } else if (operadorI === '--') {
        valorActual--;
    } else {
        console.log(`Operador de incremento desconocido: ${operadorI}`);
        return null;
    }

    // Almacenar el nuevo valor en la memoria
    if (variable) {
        variable.value = valorActual;
    } else {
        this.errors.push(`La variable "${variableName}" no está definida`);
        return null;
    }

    console.log(`La variable '${variableName}' ha sido ${operadorI === '++' ? 'incrementada' : 'decrementada'} a: ${valorActual}`);

    return null;
}

	// Visit a parse tree produced by CodeFileParser#imprimir.
	visitImprimir(ctx) {
        let mensaje = this.visit(ctx.expr());// Obtener el texto del mensaje a imprimir 
        let newMensaje = this.prints.push(mensaje)
		return newMensaje;
    }

	visitOrdencondicional(ctx) {
		console.log('orden condicional')
		const ifTrue = this.visit(ctx.condicional());
	
		if (!ifTrue) {
			const elifs = ctx.condicional_elseif();
			let elifTrue = false;
			for (let i = 0; i < elifs.length; i++){
				elifTrue = this.visit(elifs[i]);
				if (elifTrue) break;
			}
			
			if (!elifTrue && ctx.condicional_else()) {
				this.visit(ctx.condicional_else());
			}
		}
	
		return null;
	}
	
	visitCondicional_elseif(ctx) {
		console.log('else if')
		return this.visit(ctx.condicional());
	}
	
	visitCondicional_else(ctx) {
		console.log('else')
		this.visit(ctx.expresiones());
		return null;
	}
	
	visitCondicional(ctx) {
		console.log('condicional')
		if (!ctx.expr()) return false;
		let resCondicion = this.visit(ctx.expr());
		
		if (resCondicion) {
			this.visit(ctx.expresiones());
		}
		
		return resCondicion;
	}
	
	// Visit a parse tree produced by LanguageParser#condition.
	visitCondition(ctx) {

		let [leftExpr, rightExpr] = this.visit(ctx.expr());
		let operator = ctx.operator.text;

		switch (operator) {
			case '>':
				return leftExpr > rightExpr;
			case '<':
				return leftExpr < rightExpr;
			
			case '>=':
				return leftExpr >= rightExpr;

			case '<=':
				return leftExpr <= rightExpr;

			case '||':
				return leftExpr || rightExpr;

			case '&&':
				return leftExpr && rightExpr;

			case '==':
				return leftExpr == rightExpr;
			
			case '!=':
				return leftExpr != rightExpr;
			
			case 'true':
				return true;
			case 'false':
				return false;
			case '!true':
				return false;
			case '!false':
				return true;
			default:
				return false;
		}
	}

	// Visit a parse tree produced by CodeFileParser#conditionANDOR.
	visitConditionANDOR(ctx) {
		let [leftExpr, rightExpr] = this.visit(ctx.expr());
		let operator = ctx.operator.text;
		switch(operator){
			case '||':
				return leftExpr || rightExpr;
			case '&&':
				return leftExpr && rightExpr;
		}
	}
	  

	  	
	// Visit a parse tree produced by CodeFileParser#while.
	visitWhile(ctx) {
		console.log("visitando un while")
		if(!ctx.expr()) return false;
		let condicion = this.visit(ctx.expr());
		let time = performance.now()
		while(condicion){
			this.visit(ctx.expresiones());
			condicion = this.visit(ctx.expr());
			if(performance.now() - time > this.tiempoMaximo){
				this.errors.push("Error: Ciclo infinito detectado");
				return;
			}
		}

		return condicion
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
		return Number(ctx.INT().getText());	
	}

	
	// Visit a parse tree produced by CodeFileParser#string.
	visitString(ctx) {
		let stringWithQuotes = ctx.STRING().getText(); // Obtener el texto completo del token STRING, incluyendo las comillas
		// Eliminar las comillas dobles al inicio y al final del texto
		return stringWithQuotes.substring(1, stringWithQuotes.length - 1);
	}
	// Visit a parse tree produced by CodeFileParser#StringAnid.
	visitStringAnid(ctx) {
		let result = "";
		for (let i = 0; i < ctx.expr().length; i++) {
			result += this.visit(ctx.expr(i));
			if (i < ctx.expr().length - 1) {
				result += " ";
			}
		}
		return result;
	}

	// Visit a parse tree produced by CodeFileParser#SignNumber.
	visitSignNumber(ctx) {
		let sign = ctx.op.text;
		let number =  this.visit(ctx.expr());
		return Number(`${sign}${number}`);
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

	// Visit a parse tree produced by CodeFileParser#char.
	visitChar(ctx) {
		return ctx.CHAR().getText();
	}
  

	visitMulDiv(ctx) {
		// expr op=('*'|'/') expr
		let left = this.visit(ctx.expr(0)); // obtener el valor de la subexpresión izquierda
		let right = this.visit(ctx.expr(1)); // obtener el valor de la subexpresión derecha
		let operator = ctx.op.type;
		if (operator === CodeFileParser.MUL) {
			return left * right;
		}

		if(operator === CodeFileParser.DIV){
			return left / right;
		}

		if(operator === CodeFileParser.MOD){
			return left % right;
		}
	}
	
	visitAddSub(ctx) {
		// expr op=('+'|'-') expr
		let left = this.visit(ctx.expr(0)); //obtener el valor de la subexpresión izquierda
		let right = this.visit(ctx.expr(1)); //obtener el valor de la subexpresión derecha
		if (ctx.op.type === CodeFileParser.ADD) return left + right;
		return left - right;
	}
	
	visitParens(ctx) {
		// '(' expr ')'
		let res = this.visit(ctx.expr())
		return res;
	}

	// Visit a parse tree produced by CodeFileParser#negacionExpr.
	visitNegacionExpr(ctx) {
		return false;
	}
}