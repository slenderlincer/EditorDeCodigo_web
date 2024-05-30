import CVtoJasminVisitor from "../../grammarJasmin/CVtoJasminVisitor.js";
import CVtoJasminParser from "../../grammarJasmin/CVtoJasminParser.js";

export default class CustomVisitorCVtoJasmin extends CVtoJasminVisitor {
	constructor() {
		super();
        this.stacks = 1
        this.locals = 0
		this.tiempoMaximo = 500;
        this.variables = {}
		this.jasmin = "";
        this.labelCounter = 0;
        this.errors = [];
	}

	// Método para verificar si una variable está definida en la estructura de variables.
	variableExist(variable_name){
        return !!this.variables[variable_name];
	}

    getVariableIndex(id){
        return this.variables[id] ? this.variables[id].index : -1;
    }

    getVariableValue(id){
        return this.variables[id].value;
    }

    declare(id, value){
        let is_variable_defined = this.variableExist(id);
        if(!is_variable_defined){
            if(value != undefined){
                this.variables[id] = {index: this.locals, value: value};
                this.jasmin += `\nistore ${this.locals}\n`
            }else{
                this.variables[id] = {
                    index: this.locals,
                    value: undefined
                };
            }

            this.locals++
        }

        return id;
    }

    generateLabel(label){
        return label + this.labelCounter++;
    }

	// Visit a parse tree produced by CodeFileParser#start.
	visitStart(ctx) {
        this.visit(ctx.content());
        this.jasmin += "\nreturn\n";
        this.jasmin += ".end method";

        let header = `.class public CodeVerse
.super java/lang/Object
.method public static main([Ljava/lang/String;)V
.limit stack ${this.stacks}
${this.locals ? `.limit locals ${this.locals}\n` : " "}`

        this.jasmin = header + this.jasmin;
        console.log(this.jasmin)
        return this.jasmin;
	}
	
	// Visit a parse tree produced by CodeFileParser#content.
	visitContent(ctx) {
		return this.visitChildren(ctx);
	}
	
	// Visit a parse tree produced by CodeFileParser#declaracion.
	visitDeclaracion(ctx) {	
        console.log('declarando')
		const tipo = ctx.tipo().getText();
        const id = ctx.ID().getText();
        const variable_pattern = /^[A-Za-z]([A-Za-za0-9-_]+)?/;
        const valor = ctx.expr() ? this.visit(ctx.expr()) : undefined;

        if(variable_pattern.test(id)){
            return this.declare(id, valor);
        }else{
            const tipo = ctx.tipo().getText();

            return [tipo, id];
        }
	}
	
	// Visit a parse tree produced by CodeFileParser#asignaciones.
	visitAsignaciones(ctx) {
        console.log('asignando')
        let valor = this.visit(ctx.expr());
		const id = ctx.ID().getText();
		const index = this.getVariableIndex(id);
        if(index > -1){
            this.variables[id].value = valor;
            this.jasmin += `\nistore ${index}\n\n`
        }     
	}

    visitAsigna(ctx) {
    console.log('visit asignacion');
    const variableName = ctx.ID().getText(); // Obtener el nombre de la variable

    if (!this.variableExist(variableName)) {
        this.errors.push(`La variable "${variableName}" no está definida`);
        return null;
    }

    const index = this.getVariableIndex(variableName);
    const operator = ctx.com.text; // Obtener el operador de asignación compuesta

    switch (operator) {
        case '+=':
            this.jasmin += `\niload ${index}`; // Cargar el valor actual de la variable en la pila
            this.visit(ctx.expr());
            this.jasmin += `\niadd`;            // Sumar los dos valores
            this.jasmin += `\nistore ${index}\n`; // Almacenar el resultado en la variable
            break;
        case '-=':
            this.jasmin += `\niload ${index}`; // Cargar el valor actual de la variable en la pila
            this.visit(ctx.expr());
            this.jasmin += `\nisub`;            // Restar los dos valores
            this.jasmin += `\nistore ${index}\n`; // Almacenar el resultado en la variable
            break;
        case '*=':
            this.jasmin += `\niload ${index}`; // Cargar el valor actual de la variable en la pila
            this.visit(ctx.expr());
            this.jasmin += `\nimul`;            // Multiplicar los dos valores
            this.jasmin += `\nistore ${index}\n`; // Almacenar el resultado en la variable
            break;
        case '/=':
            this.jasmin += `\niload ${index}`; // Cargar el valor actual de la variable en la pila
            this.visit(ctx.expr());
            this.jasmin += `\nidiv`;            // Dividir los dos valores
            this.jasmin += `\nistore ${index}\n`; // Almacenar el resultado en la variable
            break;
        case '%=':
            this.jasmin += `\niload ${index}`; // Cargar el valor actual de la variable en la pila
            this.visit(ctx.expr());
            this.jasmin += `\nirem`;            // Dividir los dos valores
            this.jasmin += `\nistore ${index}\n`; // Almacenar el resultado en la variable
            break;
        default:
            console.log(`Operador de asignación desconocido: ${operator}`);
            return null;
    }

    return null;
}

visitIncremento(ctx) {
    console.log('Incremento');
    const variableName = ctx.ID().getText();

    // Verificar si la variable está definida
    if (!this.variableExist(variableName)) {
        this.errors.push(`La variable "${variableName}" no está definida`);
        return null;
    }

    // Obtener el índice de la variable
    const variableIndex = this.variables[variableName].index;

    // Obtener el operador de incremento
    const operadorI = ctx.com.text;

    // Determinar la cantidad de incremento o decremento
    const incremento = operadorI == '++' ? 1 : -1;

    // Generar la instrucción iinc
    this.jasmin += `\niinc ${variableIndex} ${incremento}\n`;

    console.log(`La variable '${variableName}' ha sido ${operadorI === '++' ? 'incrementada' : 'decrementada'}`);

    return this.visitChildren(ctx);
}

	// Visit a parse tree produced by CodeFileParser#imprimir.
	visitImprimir(ctx) {
        const valor_header = ctx.expr().getText();
        const valor = this.visit(ctx.expr());
        this.stacks ++;
        this.locals ++;

        if(valor == "swap"){
            this.jasmin += '\ninvokestatic java/lang/Integer/toString(I)Ljava/lang/String;'
            this.jasmin += '\ngetstatic java/lang/System/out Ljava/io/PrintStream;'
            this.jasmin += `\n${valor}`;
        }else if(typeof valor === 'number'){
            this.jasmin += '\ninvokestatic java/lang/Integer/toString(I)Ljava/lang/String;'
            this.jasmin += '\ngetstatic java/lang/System/out Ljava/io/PrintStream;'
            this.jasmin += `\nswap`;
        }else if(typeof valor === 'string'){
            this.jasmin += '\ngetstatic java/lang/System/out Ljava/io/PrintStream;'
            this.jasmin += `\nldc "${valor}"`
        }

        this.jasmin += '\ninvokevirtual java/io/PrintStream/println(Ljava/lang/String;)V\n'
    }

    visitOrdencondicional(ctx) {
		console.log('orden condicional')
		const finLabelIf = this.generateLabel("finLabelIf");

        let skipThreshold = 1;

        const condiciones = [];
        
        const [ifCondition, ifContent] = this.visit(ctx.condicional());
        condiciones.push({
            instruccion: ifCondition,
            content: ifContent,
        })

        if(ctx.condicional_elseif()){
            for(let elif of this.visit(ctx.condicional_elseif())){
                condiciones.push({
                    instruccion: elif[0],
                    content: elif[1],
                    label: this.generateLabel("elseIfLabel")
                });
            }
        }

        let dataElse = null;
        if(ctx.condicional_else()){
            skipThreshold++;
            let elseLabel = this.generateLabel("elseLabel");
            const elseContent = this.visit(ctx.condicional_else());
            condiciones.push({
                label: elseLabel,
            });

            dataElse = {
                label: elseLabel,
                content: elseContent,
            };
        }

        condiciones.push({
            label: finLabelIf,
        });

        for(let i = 0; i < condiciones.length - skipThreshold; i++){
            const condicion = condiciones[i];
            if(condicion.label){
                this.jasmin += `\n${condicion.label}:`
            }
            const instruccion = this.visit(condicion.instruccion);

            switch(instruccion.instruccionCondicion){
                case 'AND':
                    let repLabelAND = condiciones[i + 1].label;
                    for(let value of instruccion.condicionValor){
                        this.visit(value.condicionValor)
                        this.jasmin += `\n${value.instruccionCondicion} ${repLabelAND}`;
                    }
                    this.visit(condicion.content);
                    this.jasmin += `\ngoto ${finLabelIf}\n`;
                    break
                case 'OR':
                    let ORLabel1 = this.generateLabel("ORLabel1");
                    let ORLabel2 = this.generateLabel("ORLabel1");
                    let trueLabel = this.generateLabel("ifORTrue");
                    let repLabelOR = condiciones[i + 1].label;

                    this.jasmin += `\ngoto ${ORLabel1}\n`;
                    this.jasmin += `\n${trueLabel}:\n`;
                    this.visit(condicion.content);
                    this.jasmin += `\ngoto ${finLabelIf}\n`;
                    
                    this.jasmin += `\n${ORLabel1}:`
                    let isArray = Array.isArray(instruccion.condicionValor[0].condicionValor)
                    if(isArray){
                        this.visit(instruccion.condicionValor[0].condicionValor)
                    }else {
                        this.visit(instruccion.condicionValor[0].condicionValor.condicionValor);
                    }
                    this.jasmin += `\n${instruccion.condicionValor[0].instruccionCondicion} ${ORLabel2}`;
                    this.jasmin += `\ngoto ${trueLabel}\n`

                    this.jasmin += `\n${ORLabel2}: `;
                    this.visit(instruccion.condicionValor[1].condicionValor)
                    this.jasmin += `\n${instruccion.condicionValor[1].instruccionCondicion} ${repLabelOR}`
                    this.jasmin += `\ngoto ${trueLabel}\n`;
                    break

                default:
                    console.log('simple if');
                    this.visit(instruccion.condicionValor)
                    this.jasmin += `\n${instruccion.instruccionCondicion} ${condiciones[i + 1].label}`;
                    this.visit(condicion.content);
                    this.jasmin += `\ngoto ${finLabelIf}\n`;
                    break
            }
        }

        if(dataElse){
            this.jasmin += `\n${dataElse.label}:`;
            this.visit(dataElse.content);
        }
        this.jasmin += `\n${finLabelIf}:`

	}
	
	visitCondicional_elseif(ctx) {
		console.log('condicional_elseif')
		return this.visit(ctx.condicional());
	}
	
	visitCondicional_else(ctx) {
		console.log('condicional_else')
		return ctx.expresiones();
    }
	
	visitCondicional(ctx) {
        console.log('condicional');
        return [ctx.expr(), ctx.expresiones()];
	}
	
    visitCondition(ctx) {
        console.log("condicion");
        // Otros operadores relacionales
        let operator = ctx.operator.text;
        
        //this.visit(ctx.expr())
        switch (operator) {
            case ">":
                return {
                    condicionValor: ctx.expr(),
                    instruccionCondicion: "if_icmple"
                };
            case "<":
                return {
                    condicionValor: ctx.expr(),
                    instruccionCondicion: "if_icmpge"
                };
            case ">=":
                return {
                    condicionValor: ctx.expr(),
                    instruccionCondicion: "if_icmplt"
                };
            case "<=":
                return {
                    condicionValor: ctx.expr(),
                    instruccionCondicion: "if_icmpgt"
                };
            case "==":
                return {
                    condicionValor: ctx.expr(),
                    instruccionCondicion: "if_icmpne"
                };
            case "!=":
                return {
                    condicionValor: ctx.expr(),
                    instruccionCondicion: "if_icmpeq"
                };
            case 'true':
                this.jasmin += `\niconst_1`;
                return "ifeq";
            case 'false':
                this.jasmin += `\niconst_0`;
                return "ifeq";
            default:
                return false;
            }
    }
    
    // Visit a parse tree produced by CodeFileParser#conditionANDOR.
	visitLogicCondition(ctx) {
        console.log('condicion or and')
        let [leftExpr, rightExpr] = this.visit(ctx.expr());

        let operator = ctx.operator.text;
        switch(operator){
            case '||':
                return {
                    condicionValor: [leftExpr, rightExpr],
                    instruccionCondicion: "OR"
                };
            case '&&':
                return {
                    condicionValor: [leftExpr, rightExpr],
                    instruccionCondicion: "AND"
                };
            default:
                return false;
        }
    }

	// Visit a parse tree produced by CodeFileParser#while.
	visitWhile(ctx) {
		console.log("visitando un while")
        const whileStartLabel = this.generateLabel("whileStartLabel");
        const whileEndLabel = this.generateLabel("whileEndLabel");
        this.jasmin += `\n${whileStartLabel}:`;
        const instruccion = this.visit(ctx.expr());
        this.visit(instruccion.condicionValor);
        this.jasmin += `\n${instruccion.instruccionCondicion} ${whileEndLabel}`
        this.visit(ctx.expresiones())
        this.jasmin += `\ngoto ${whileStartLabel}`;
        this.jasmin += `\n${whileEndLabel}:`;
	}
	
	visitInt(ctx) {
		// INT
        let value;
        value = Number(ctx.getText());
        this.jasmin += `\nldc ${value}`;
		return value;
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
        const id = ctx.ID().getText();

        if(this.variableExist(id)){
            this.jasmin += `\niload ${this.variables[id].index}`;
            return this.variables[id].value;
        }
        return undefined;
	}
  

	visitMulDiv(ctx) {
        const variables = this.visitChildren(ctx);
        let operator = ctx.op.type;
        this.stacks ++;
        if(operator === CodeFileParser.MUL){
            this.jasmin += `\nimul`;
            return "swap";
        }
        
        if(operator === CodeFileParser.DIV){
            this.jasmin += `\nidiv`
            return "swap";
        }

        if(operator === CodeFileParser.MOD){
            this.jasmin += `\nirem`;
            return "swap";
        }
	}
	
	visitAddSub(ctx) {
        const variables = this.visitChildren(ctx);
        let operator = ctx.op.type;
        this.stacks += 2;

        if(operator === CodeFileParser.ADD){
            this.jasmin += `\niadd\n`;
            return "swap";
        }else{
            this.jasmin += `.\nisub\n`;
            return "swap";
        }
	}
	
	visitParens(ctx) {
		// '(' expr ')'
		let res = this.visit(ctx.expr())
		return res;
	}
}