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
// Comentarios de una sola línea
LINE_COMMENT: '//' ~[\r\n]* -> skip;
// Comentarios de múltiples líneas
BLOCK_COMMENT: '/*' .*? '*/' -> skip;