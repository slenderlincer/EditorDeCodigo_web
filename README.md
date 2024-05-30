# CODEVERSE

## **ANTLR**

### **¿QUE ES ANTLR?**

ANTLR (ANother Tool for Language Recognition) es un generador de analizadores léxicos, sintácticos y semánticos. ANTLR 4 es una versión específica de ANTLR que es muy popular para la creación de parsers y analizadores para diversos lenguajes de programación y sistemas de procesamiento de lenguaje natural.

ANTLR 4 utiliza gramáticas de entrada para generar código fuente que puede analizar y reconocer estructuras de lenguajes definidos por el usuario. Es ampliamente utilizado en la industria de desarrollo de software para tareas como análisis de código, compilación de lenguajes de programación, interpretación de scripts y procesamiento de lenguaje natural, entre otros.


[https://www.antlr.org/](https://www.antlr.org/)
___

### **MI GRAMATICA**

En esta gramática se definen las reglas para un lenguaje de programación. Comienza con la palabra clave "iniciar código", seguida de un bloque entre llaves donde se pueden escribir diversas expresiones. Estas expresiones abarcan desde declaraciones de variables hasta estructuras condicionales como if-else y bucles while. Cada tipo de expresión tiene su propia regla, como la declaración de variables, asignación de valores, impresión de mensajes o definición de condiciones. Además, se especifican los tipos de datos que pueden tener las variables en este lenguaje.
___

#### CodeFile.g4
```ANTLR
grammar CodeFile;

import lexerRulesCV;

// La regla de inicio de la gramática
start: INSERT CODE ALLAVE content CLLAVE; 

// La regla 'content' representa el contenido dentro de las llaves
content: expresiones*?;

// La regla 'expresiones' representa las diferentes formas de expresiones:
expresiones:
            declaraciones
            |
            assignament
            |
            imprimir
            |
            ordencondicional
            |
            while
            ;

// La regla 'declaraciones' representa declaraciones de variables
declaraciones:
            tipo ID SEMI                                                    #declaracion
            |
            tipo ID EQUALS expr SEMI	                                    #declaracionasignacion
            ;

// La regla 'asignaciones' representa las asignaciones de valores a variables
assignament: ID EQUALS expr SEMI  #asignaciones
|
ID com=('+='|'-='|'*='|'/=') expr? SEMI  #asigna
|
ID com=('--'|'++') expr? SEMI  #incremento 
;

// La regla 'imprimir' representa la instrucción para imprimir mensajes
imprimir: PRINT APARENTESIS expr  CPARENTESIS SEMI;

// La regla 'tipo' representa los diferentes tipos de datos que pueden tener las variables
tipo: ('margit' | 'radahn' |'godrick'); 

// La regla 'expr' representa las expresiones matemáticas y valores
expr: APARENTESIS expr CPARENTESIS #parens
    | expr op=('*' | '/') expr # MulDiv
    | expr op=('+' | '-') expr #AddSub
    | expr COMA expr #StringAnid
    | expr RES expr #residuo
    | NEGAN expr #negacionExpr  
    | op=('+'|'-') expr #SignNumber
    | operator=('<'|'>'|'<='|'>=') #condition
    | operator=('=='|'!='|'&&'|'||'|'true'|'false'| '!true'|'!false')  #condition
    | expr operator=('<'|'>'|'<='|'>=') expr #condition
    | expr operator=('=='|'!='|'&&'|'||'|'true'|'false'| '!true'|'!false') expr #condition  
    | INT #int
    | ID #id 
    | STRING #string
    | FLOAT #float
    | CHAR #char 
;

// La regla 'condition_if' representa una estructura if-else-if-else
ordencondicional: condicional condicional_elseif* condicional_else?;
condicional: IF APARENTESIS expr  CPARENTESIS ALLAVE expresiones* CLLAVE;
condicional_elseif: ELSE condicional;
condicional_else: ELSE ALLAVE expresiones* CLLAVE;

while: WHILE APARENTESIS (expr) CPARENTESIS ALLAVE expresiones* CLLAVE; 

INSERT: 'iniciar';
CODE: 'codigo'; 
RES: '%'; 
COMA: ',';
NEGAN: '!';
```
___

#### LexerRulesCV.g4
```ANTLR
lexer grammar lexerRulesCV;

APARENTESIS: '(';
CPARENTESIS: ')';
ALLAVE: '{';
CLLAVE: '}';
EQUALS: '=';
MUL: '*';
DIV: '/';
ADD: '+';
SUB: '-';
PRINT: 'MostrarMensaje';
IF: 'verificar';
ELSE: 'contrario';
WHILE: 'repetir';
COND_MAT		: ('<'|'>'|'<='|'>='); 
COND_LOG		: ('=='|'!='|'true'|'false'|'&&'|'||'|'!true'|'!false');
STRING: '"' (~["])* '"';
INT: '-'?[0-9]+; 
ID: [a-zA-Z]+[_a-zA-Z0-9]*; 
FLOAT: '-'?[0-9]+[.][0-9]+;	
CHAR: '"'[a-zA-Z]?'"';  
SEMI: ';';
// Comentarios de una sola línea
LINE_COMMENT: '//' ~[\r\n]* -> skip;
// Comentarios de múltiples líneas
BLOCK_COMMENT: '/*' .*? '*/' -> skip;
WS: [ \t\r\n]+ -> skip; // Permitir espacios en blanco, tabulaciones y caracteres de nueva línea
```

### PALABRAS RESERVADAS

En la gramatica definida se especifican las palabras reservadas que se podran usar para declarar variables, en donde:

* margit sera de tipo int
* godrick sera de tipo float
* radahn sera de tipo char

### FUNCIONALIDADES DE CODEVERSE

Las funcionalidades de codeverse son demasiadas desde declarar una variables hasta traducir codigo C al lenguaje de codeverse implementando reglas gramaticales para una estricta traduccion de lenguaje, tambien permite usar el if-else y el ciclo while asi como el printf para mostrar los resultados de cada expresion en pantalla.

___
### INICIAR EL CODIGO
Para empezar a programar en codeverse se tiene que seguir la estructura del codigo en la gramatica. Para esto se requiere ingresar el siguiente codigo y dentro de las llaves ingresar las distintas funcionalidades que permite la gramatica.

``` C
iniciar codigo{
    //Ingresar el codigo que deseas programar
}
```

### DECLARACION DE VARIABLES
Para la declarar una variable en CodeVerse, es importante seguir la sintaxis que indica en la gramatica; se debe ingresar primero el tipo de variable que se desea declarar, por ejemplo si se requiere declarar una variable:

* Tipo de dato Int
    - `margit numero1;`

* Tipo de dato Float
    - `godrick numero2;`

* Tipo de dato char
    - `radahn letra;`


La variable ya esta declarada pero al ser una simple declaracion de variable sin asignacion de valor, CodeVerse le asigna un valor por defecto "undefined".

##### DECLARACION DE VARIABLES

declarando una variable en CodeVerse:
![declaracionDeVariables](/public/img/DeclaraciónDeVariables.png)

##### DECLARACION Y ASIGNACION DE VALOR A VARIABLES
Para la declaracion y asignacion de valor a una variable en la misma linea se sigue casi la misma sintaxis solo que agregando un "=" y el "valor" que se le quiere asignar dependiendo del tipo de variable que se esta declarando.

Directamente de CodeVerse:
![declaracionAsignacion](/public/img/declaraciónAsignacion.png)

##### ASIGNACION DE VALOR A VARIABLES
Asignar un valor a una variable antes declarada pero sin valor.
![Asignacion](/public/img/Asignacion.png)


##### LOGICA PARA LA DECLARACION DE VARIABLES
```javascript
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
```
__

### OPERACIONES ARITMETICAS
En CodeVerse se pueden realizar multiples operaciones aritemticas como lo haria una calculadora, pero tambien permite operaciones aritmeticas con variables.

##### RESTA
Resta con variables.
![Resta](/public/img/Resta.png)

##### SUMA
Suma con variables.
![Suma](/public/img/Suma.png)

##### MULTIPLICACION
Multiplicacion con variables.
![Multiplicacion](/public/img/Multiplicacion.png)

##### DIVISION
Division con variables.
![Division](/public/img/Division.png)

##### RESIDUO
Residuo con variables
![Residuo](/public/img/Residuo.png)

##### OPERACIONES ARITMETICAS COMPLEJAS
Operaciones aritmeticas complejas.
![operacionesComplejas](/public/img/operacionesComplejas.png)

##### LOGICA PARA LAS OPERACIONES ARITMETICAS
```JavaScript
	visitMulDiv(ctx) {
		// expr op=('*'|'/') expr
		let left = this.visit(ctx.expr(0)); // obtener el valor de la subexpresión izquierda
		let right = this.visit(ctx.expr(1)); // obtener el valor de la subexpresión derecha
		if (ctx.op.type === CodeFileParser.MUL) return left * right;
		return left / right; 
	}
	
	visitAddSub(ctx) {
		// expr op=('+'|'-') expr
		let left = this.visit(ctx.expr(0)); //obtener el valor de la subexpresión izquierda
		let right = this.visit(ctx.expr(1)); //obtener el valor de la subexpresión derecha
		if (ctx.op.type === CodeFileParser.ADD) return left + right;
		return left - right;
	}

	visitResiduo(ctx) {
		let [firstExpr, secondExpr] = this.visit(ctx.expr());

		const residuo = firstExpr % secondExpr;
		console.log(residuo)
		return residuo
	}

```
___

### IMPRESION DE RESULTADOS
Para imprimir un mensaje en CodeVerse como lo haria un printf en C, se necesita seguir la sintaxis de la gramatica definida.

`imprimir: PRINT APARENTESIS expr  CPARENTESIS SEMI;`

donde "PRINT" es "MostrarMensaje" y "expr" son las expresiones que se pueden imprimir.

##### MOSTRAR RESULTADOS DE DIFERENTES EXPRESIONES
Imprimiendo mensaje en CodeVerse
![MostrarMensaje](/public/img/MostrarMensaje.png)

##### LOGICA PARA IMPRIMIR EXPRESIONES
```JavaScript
	visitImprimir(ctx) {
        let mensaje = this.visit(ctx.expr());// Obtener el texto del mensaje a imprimir 
        let newMensaje = this.prints.push(mensaje)
		return newMensaje;
    }
```
___

### USO DE CONDICIONALES IF-ELSE
CodeVerse permite el uso de condicionales if-else, if-else if-else; con multiples condiciones. Para utilizar el condicional "if" en CodeVerse se requiere seguir la sintaxis de la gramatica, donde:

* Para "if" es "verificar"
* Para "else" es "contrario"
* Para "else if" es "contrario verificar"

Estructura:
```C
//iniciar el codigo
iniciar codigo{

	//Estructura if-else if-else
	verificar(condicion){

	}contrario verificar(condicion){

	}contrario{

	}
}
```
##### CONDICIONAL IF-ELSE IF ELSE
![if-elseif-else](/public/img/if-else%20if-else.png)

##### PRUEBA COMPLEJA PARA CONDICIONALES
Para esta prueba de condicional se utilizaron mas operadores de condicionales que se pueden utilizar en la gramatica.

```ANTLR4
COND_MAT		: ('<'|'>'|'<='|'>='); 
COND_LOG		: ('=='|'!='|'true'|'false'|'&&'|'||'|'!true'|'!false');
```
![condicionalComleja](/public/img/condicionalCompleja.png)
##### LOGICA PARA EL MANEJO DE CONDICIONALES
```JavaScript
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
		let [firstExpr, secondExpr] = this.visit(ctx.expr());
		let operator = ctx.operator.text;

		switch (operator) {
			case '>':

				return firstExpr > secondExpr;
			case '<':
				return firstExpr < secondExpr;
			
			case '>=':
				return firstExpr >= secondExpr;

			case '<=':
				return firstExpr <= secondExpr;

			case '||':
				return firstExpr || secondExpr;

			case '&&':
				return  firstExpr && secondExpr;

			case '==':
				return firstExpr == secondExpr;
			
			case '!=':
				return firstExpr != secondExpr;
			
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
```
___

### CICLO WHILE
En CodeVerse se puede utilizar el ciclo while asi como en el lenguaje de programacion de C. Para usar el ciclo while en CodeVerse se necesita seguir la sintaxis que marca la gramatica la cual es:

```ANTLR
while: WHILE APARENTESIS (expr) CPARENTESIS ALLAVE expresiones* CLLAVE; 
```

donde "WHILE" es "repetir", "expr" es la condicion que puede aceptar un ciclo while y "expresiones" son las multiples expresiones que puede ejecutar el ciclo.

Estructura.
```C
iniciar codigo{

	//iniciar el ciclo
	repetir(condicion){
		//expresiones
	}
}
```
##### PRUEBA COMPLEJA PARA EL MANEJO DE WHILE
Codigo ingresado.

```C
iniciar codigo{
margit edad = 25;
margit sueldo = 30000;

verificar((edad>=18)&&(edad<=65)){
MostrarMensaje("Eres un adulto en edad laboral.\n");
verificar(sueldo>50000){
MostrarMensaje("Tienes un sueldo alto.\n");
}
contrario verificar((sueldo>=30000)&&(sueldo<=50000)){
MostrarMensaje("Tienes un sueldo medio.\n");
}
contrario {
MostrarMensaje("Tienes un sueldo bajo.\n");
}
}
contrario verificar(edad<18){
MostrarMensaje("Eres menor de edad.\n");
}
contrario {
MostrarMensaje("Eres jubilado.\n");
}

//Ciclo while
margit numero = 1;
repetir (((numero%2!=0)||(numero%3!=0))&&(numero<100)){
verificar(numero%5==0){
MostrarMensaje(numero,"es divisible por 5 y no por 2 ni por 3.\n");
}
numero ++;
}
}
```

![PruebaWhile](/public/img/PruebaWhile.png)

##### LOGICA IMPLEMENTADA PARA MANEJAR EL CICLO WHILE EN CODEVERSE
```JavaScript
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
```
___

### TRADUCTOR DE CODIGO C A CODEVERSE
CodeVerse implementa la traduccion de codigo para realizar tus pruebas mucho mas rapido ya que esta basado en el lenguaje de programacion C, asi que tiene la funcion de leer archivos de texto de lenguaje C y traducirlo a CodeVerse.

Para implementar este traductor de codigo C a CodeVerse se creo una gramatica similar a CodeVerse pero con la sintaxis de C, y desde sus visitas retornar la traduccion de cada palabra traducida a CodeVerse.

Ejemplo:

Entrada
```C
void main()
{
    int numero = 15;


    if (numero > 10)
    {
        printf("El numero es mayor que 10.\n");
    }


    if (numero % 2 == 0)
    {
        printf("El numero es par.\n");
    }
    else
    {
        printf("El numero es impar.\n");
    }


    if (numero < 10)
    {
        printf("El numero es menor que 10.\n");
    }
    else if ((numero >= 10) && (numero < 20))
    {
        printf("El numero esta entre 10 y 20.\n");
    }
    else if ((numero >= 20) && (numero < 30))
    {
        printf("El numero esta entre 20 y 30.\n");
    }
    else
    {
        printf("El numero es mayor o igual a 30.\n");
    }


    if (numero < 5)
    {
        printf("El numero es menor que 5.\n");
    }
    else if ((numero >= 5) && (numero < 10))
    {
        printf("El numero esta entre 5 y 10.\n");
    }
    else
    {
        printf("El numero es mayor o igual a 10.\n");
    }


    int i = 0;
    while (i < 5)
    {
        int j = 0;
        while (j < 5)
        {
            if (i + j < 5)
            {
                printf("* ");
            }
            else
            {
                printf("  ");
            }
            j++;
        }
        printf("\n");
        i++;
    }
}

```

Salida
```C
iniciar codigo {
    margit numero = 15;
    
    verificar(numero > 10) {
        MostrarMensaje("El numero es mayor que 10.\n");
    }
    
    verificar(numero % 2 == 0) {
        MostrarMensaje("El numero es par.\n");
    }
    contrario {
        MostrarMensaje("El numero es impar.\n");
    }
    
    verificar(numero < 10) {
        MostrarMensaje("El numero es menor que 10.\n");
    }
    contrario verificar((numero >= 10) && (numero < 20)) {
        MostrarMensaje("El numero esta entre 10 y 20.\n");
    }
    contrario verificar((numero >= 20) && (numero < 30)) {
        MostrarMensaje("El numero esta entre 20 y 30.\n");
    }
    contrario {
        MostrarMensaje("El numero es mayor o igual a 30.\n");
    }
    
    verificar(numero < 5) {
        MostrarMensaje("El numero es menor que 5.\n");
    }
    contrario verificar((numero >= 5) && (numero < 10)) {
        MostrarMensaje("El numero esta entre 5 y 10.\n");
    }
    contrario {
        MostrarMensaje("El numero es mayor o igual a 10.\n");
    }
    
    margit i = 0;
    repetir (i < 5) {
        margit j = 0;
        repetir (j < 5) {
            verificar(i + j < 5) {
                MostrarMensaje("* ");
            }
            contrario {
                MostrarMensaje("  ");
            }
            j++;
        }
        MostrarMensaje("\n");
        i++;
    }
}
```

##### PRUEBA COMPLEJA DE TRADUCCION
![TraduccionC-CodeVerse](/public/img/TraduccionC-CodeVerse.png)


##### LOGICA IMPLEMENTADA Y GRAMATICA
Gramatica implementada para C
```ANTLR
grammar CodeC;

import lexerC;

// La regla de inicio de la gramática
start: INSERT CODE ALLAVE content CLLAVE; 

// La regla 'content' representa el contenido dentro de las llaves
content: expresiones*?;

// La regla 'expresiones' representa las diferentes formas de expresiones:
expresiones:
            declaraciones
            |
            assignament 
            |
            imprimir
            |
            ordencondicional
            |
            while
            ;

// La regla 'declaraciones' representa declaraciones de variables
declaraciones:
            tipo ID SEMI                                                    #declaracion
            |
            tipo ID EQUALS expr SEMI	                                    #declaracionasignacion
            ;

// La regla 'asignaciones' representa las asignaciones de valores a variables
assignament: ID EQUALS expr SEMI  #asignaciones
|
ID com=('+='|'-='|'*='|'/=') expr? SEMI  #asigna
|
ID com=('++'|'--') expr? SEMI  #incremento
;

// La regla 'imprimir' representa la instrucción para imprimir mensajes
imprimir: PRINT APARENTESIS expr CPARENTESIS SEMI;

// La regla 'tipo' representa los diferentes tipos de datos que pueden tener las variables
tipo: ('int' | 'float' |'char');

// La regla 'expr' representa las expresiones matemáticas y valores
expr: expr op=('*' | '/') expr # MulDiv
| expr op=('+' | '-') expr #AddSub
| expr RES expr #residuo
| expr COMA expr #StringAnid
| operator=(COND_LOG|COND_MAT)  #condition
| expr operator=(COND_LOG|COND_MAT) expr #condition
| INT #int
| ID #id 
| STRING #string
| FLOAT #float
| CHAR #char 
| APARENTESIS expr CPARENTESIS #parens
;

// La regla 'condition_if' representa una estructura if-else-if-else
ordencondicional: condicional condicional_elseif* condicional_else?;
condicional: IF APARENTESIS expr  CPARENTESIS ALLAVE expresiones* CLLAVE;
condicional_elseif: ELSE condicional;
condicional_else: ELSE ALLAVE expresiones* CLLAVE;

while: WHILE APARENTESIS (assignament | expr) CPARENTESIS ALLAVE expresiones* CLLAVE; 

CHAR: '[a-zA-Z]';
INSERT: 'void';
CODE: 'main()';
WHILE: 'while'; 
RES: '%'; 
COMA: ',';
```

lexers:
```ANTLR
lexer grammar lexerC;

APARENTESIS: '(';
CPARENTESIS: ')';
ALLAVE: '{';
CLLAVE: '}';
EQUALS: '=';
MUL: '*';
DIV: '/';
ADD: '+';
SUB: '-';
PRINT: 'printf';
IF: 'if';
ELSE: 'else';
WHILE: 'while';
COND_MAT		: ('<'|'>'|'<='|'>='); 
COND_LOG		: ('=='|'!='|'true'|'false'|'&&'|'||'| '!true'| '!false');
STRING: '"' (~["])* '"';
INT: '-'?[0-9]+;
ID: [a-zA-Z]+[a-zA-Z0-9]*;
FLOAT: '-'?[0-9]+[.][0-9]+;	
SEMI: ';';
WS: [ \t\r\n]+ -> skip; // Permitir espacios en blanco, tabulaciones y caracteres de nueva línea
```

#### LOGICA IMPLEMENTADA EN VISITAS

```JavaScript
import CodeCVisitor from "../../grammarC/CodeCVisitor.js"
import CodeCParser from "../../grammarC/CodeCParser.js"

export default class CustomVisitorC extends CodeCVisitor{
	constructor() {
		super();
		this.codigoTraducido = "";
	}

	translateType(type) {
		switch (type) {
			case "int":
				return "margit";
			case "float":
				return "godrick";
			case "char":
				return "radahn";
			default:
				return "";
		}
	}

	ifelse(){
		let state = this.codigoTraducido
		let len = this.codigoTraducido.length
		return "verificar" ==  state[len-4] + state[len-3] + state[len-2] + state[len-1]
	}

	// Visit a parse tree produced by CodeCParser#start.
	visitStart(ctx) {
		this.codigoTraducido += "iniciar codigo{";
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
        const tipo = ctx.tipo().getText();
        const id = ctx.ID().getText(); // Obtenemos el ID directamente ya que sabemos que está presente
        this.codigoTraducido += `\n${this.translateType(tipo)} ${id};`;
    }
```

Esta es una parte del visitor generado para manejar la traduccion de codigo C a codigo Codeverse.
___

### TRADUCTOR DE CODIGO CODEVERSE A C
CodeVerse tambien tiene la funcionalidad de traducir del mismo lenguaje CodeVerse a lenguaje C, para esta funcionalidad se utilizo la misma gramatica de CodeVerse pero se creo otra gramatica para manejar la traduccion de CodeVerse a C.

Ejemplo:

Entrada
```C
margit edad = 25;
margit sueldo = 30000;

verificar((edad >= 18) && (edad <= 65)) {
    MostrarMensaje("Eres un adulto en edad laboral.\n");
    
    verificar(sueldo > 50000) {
        MostrarMensaje("Tienes un sueldo alto.\n");
    } contrario verificar((sueldo >= 30000) && (sueldo <= 50000)) {
        MostrarMensaje("Tienes un sueldo medio.\n");
    } contrario {
        MostrarMensaje("Tienes un sueldo bajo.\n");
    }
} contrario verificar(edad < 18) {
    MostrarMensaje("Eres menor de edad.\n");
} contrario {
    MostrarMensaje("Eres jubilado.\n");
}

margit numero = 1;

repetir (((numero % 2 != 0) || (numero % 3 != 0)) && (numero < 100)) {
    verificar(numero % 5 == 0) {
        MostrarMensaje(numero, " es divisible por 5 y no por 2 ni por 3.\n");
    }
    numero++;
}
```

Salida
```C
void main() {
    int edad = 25;
    int sueldo = 30000;

    if ((edad >= 18) && (edad <= 65)) {
        printf("Eres un adulto en edad laboral.\n");

        if (sueldo > 50000) {
            printf("Tienes un sueldo alto.\n");
        } else if ((sueldo >= 30000) && (sueldo <= 50000)) {
            printf("Tienes un sueldo medio.\n");
        } else {
            printf("Tienes un sueldo bajo.\n");
        }
    } else if (edad < 18) {
        printf("Eres menor de edad.\n");
    } else {
        printf("Eres jubilado.\n");
    }

    int numero = 1;

    while (((numero % 2 != 0) || (numero % 3 != 0)) && (numero < 100)) {
        if (numero % 5 == 0) {
            printf("%d es divisible por 5 y no por 2 ni por 3.\n", numero);
        }
        numero++;
    }
}
```

##### PRUEBA COMPLEJA DE TRADUCCION 
![Codeverse-a-C](/public/img/CodeVerse-a-C.png)

##### LOGICA IMPLEMENTADA EN EL VISITOR

```JavaScript
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
}
```

Esta visita representa una parte del nuevo visitor generado para la traduccion de codigo CodeVerse a lenguaje C
___ 

### MANEJO DE ERRORES GRAMATICALES Y LEXICOS
CodeVerse maneja errores de sintaxis y lexicos y los muestra en su propia terminal, indicando la linea en donde se produce el error.

Para la implementacion de estos errores se realizo un archivo .js para acceder a estos errores desde la consola y reflejarlos en la terminal de CodeVerse.

##### ERRORES DE SINTAXIS

![error-declaracion](/public/img/error-declaracion.png)

![error-lexico](/public/img/Errorlexico.png)

##### LOGICA IMPLEMENTADA

CustomErrorListener.js, para manejar los errores de sintaxis.
```JavaScript
// Importación del ErrorListener de ANTLR4
import { ErrorListener } from 'antlr4';

// Definición de la clase CustomErrorListener que extiende ErrorListener
export default class CustomErrorListener extends ErrorListener {
  constructor() {
    super();
    // Inicialización de un arreglo para almacenar los errores
    this.ErrorsListener = [];
  }

  // Método para manejar errores sintácticos
  syntaxError(recognizer, offendingSymbol, line, column, msg, e) {
    // Construcción de un mensaje de error y almacenamiento en el arreglo de errores
    this.ErrorsListener.push(`\nError: Error en la línea ${line}:${column} - ${msg}`);
    // Llamada al método para obtener los errores de sintaxis
    this.getErrorSintaxis();
    return;
  }

  // Método para obtener los errores de sintaxis
  getErrorSintaxis() {
    // Inicialización de un arreglo para almacenar los mensajes de error de sintaxis
    const erroresSintaxis = ["Se encontraron errores durante el análisis. Deteniendo el análisis."]
    const errors = this.ErrorsListener;
    // Iteración sobre los errores almacenados para agregarlos al arreglo de errores de sintaxis
    errors.forEach(error => {
      const errores = `${error}`
      erroresSintaxis.push(errores)
    });
    // Retorna los errores de sintaxis como una cadena de texto
    return erroresSintaxis.join('\n')
  }

  // Método para verificar si hay errores
  hasErrors() {
    // Retorna true si hay errores, de lo contrario retorna false
    return this.ErrorsListener.length > 0;
  }
};
```
___