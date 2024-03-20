grammar CodeFile;

// Importa las reglas del lexer que se usarán en este parser
import LexerRules;

// La regla de inicio de la gramática
start: INSERT CODE '{' content '}';

// La regla 'content' representa el contenido dentro de las llaves
content: expresiones*;

// La regla 'expresiones' representa las diferentes formas de expresiones
expresiones:
            declaraciones
            |
            asignaciones
            |
            imprimir
            |
            condiciones
            ;

// La regla 'declaraciones' representa declaraciones de variables
declaraciones:
            tipo ID SEMI                                                    #declaracion
            |
            tipo ID '=' expr SEMI	                              #declaracionasignacion
            ;

// La regla 'asignaciones' representa las asignaciones de valores a variables
asignaciones: ID '=' expr SEMI
;

// La regla 'imprimir' representa la instrucción para imprimir mensajes
imprimir: 'MostrarMensaje(' expr ')' SEMI;

condiciones: IF '('condicion ')' '{'expresiones*'}' (otherwise)?;
otherwise: ELSE '{' expresiones* '}';
condicion: 
expr op=(MAYORQUE | MENORQUE| MAYORIGUAL | MENORIGUAL| DOBLEIGUAL|NEGACION)expr
| VERDADERO;



// La regla 'tipo' representa los diferentes tipos de datos que pueden tener las variables
tipo:
    'margit'
    |
    'radahn'
    |
    'godrick'
    ;

// La regla 'expr' representa las expresiones matemáticas y valores
expr: expr op=('*' | '/') expr # MulDiv
| expr op=('+' | '-') expr #AddSub
| INT #int
| ID #id 
| STRING #string
| '(' expr ')' #parens
;

IF: 'condition';
ELSE: 'otherwise';
STRING: '"' (~["])* '"';
MAYORQUE: '>';
MENORQUE: '<';
MAYORIGUAL: '>=';
MENORIGUAL: '<=';
DOBLEIGUAL: '==';
NEGACION: '!=';
VERDADERO: 'verdad';
