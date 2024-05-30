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
COND_LOG		: ('=='|'!='|'true'|'false'|'!true'|'!false');
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