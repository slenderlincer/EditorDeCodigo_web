lexer grammar LexerRules;

INSERT: 'iniciar';
INT: [0-9]+;
CODE: 'codigo';
ID: [a-zA-Z]+;		
SEMI: ';';
MUL: '*';
DIV: '/';
ADD: '+';
SUB: '-';
TEXTO: '"' (~["])* '"';
WS: [ \t\r\n]+ -> skip; // Permitir espacios en blanco, tabulaciones y caracteres de nueva línea