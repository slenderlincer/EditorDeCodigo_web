lexer grammar LexerRules;

INSERT: 'iniciar';
INT: [0-9]+;
CODE: 'codigo';
ID: [a-zA-Z]+;		
SEMI: ';';
WS: [ \t\r\n]+ -> skip; // Permitir espacios en blanco, tabulaciones y caracteres de nueva línea
