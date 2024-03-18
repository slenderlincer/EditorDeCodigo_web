lexer grammar LexerRules;

INSERT: 'iniciar';
INT: [0-9]+;
CODE: 'codigo';
ID: [a-zA-Z]+;	
STRING: '"' (~["])* '"';	
SEMI: ';';
MUL: '*';
DIV: '/';
ADD: '+';
SUB: '-';
IF: 'if';
ELSE: 'else';
MAYORQUE: '>';
MENORQUE: '<';
MAYORIGUAL: '>=';
MENORIGUAL: '<=';
DOBLEIGUAL: '==';
NEGACION: '!=';
WS: [ \t\r\n]+ -> skip; // Permitir espacios en blanco, tabulaciones y caracteres de nueva línea