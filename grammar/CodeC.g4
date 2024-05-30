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
ID com=('+='|'-='|'*='|'/='|'%=') expr? SEMI  #asigna 
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