grammar CVtoJasmin;

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
            tipo ID  (EQUALS expr)? SEMI                                         #declaracion
            ;

// La regla 'asignaciones' representa las asignaciones de valores a variables
assignament: ID EQUALS expr SEMI  #asignaciones
|
ID com=('+='|'-='|'*='|'/='|'%=') expr? SEMI  #asigna
|
ID com=('--'|'++') expr? SEMI  #incremento 
;

// La regla 'imprimir' representa la instrucción para imprimir mensajes
imprimir: PRINT APARENTESIS expr  CPARENTESIS SEMI;

// La regla 'tipo' representa los diferentes tipos de datos que pueden tener las variables
tipo: ('margit' | 'radahn' |'godrick'); 

// La regla 'expr' representa las expresiones matemáticas y valores
expr: APARENTESIS expr CPARENTESIS #parens
    | expr op=(MUL | DIV | MOD) expr # MulDiv
    | expr op=(ADD | SUB) expr #AddSub  
    | op=('+'|'-') expr #SignNumber
    | operator=('<'|'>'|'<='|'>='|'=='|'!='|'true'|'false') #condition
    | expr operator=('<'|'>'|'<='|'>='|'=='|'!='|'true'|'false') expr #condition
    | expr operator=('&&'|'||') expr                            #logicCondition
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
MOD: '%';
COMA: ',';
NEGAN: '!';