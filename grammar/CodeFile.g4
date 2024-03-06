grammar CodeFile;
import LexerRules;

start: INSERT CODE '{' content '}';

content: expresiones*;

expresiones:
            declaraciones
            |
            asignaciones
            |
            imprimir
            ;

declaraciones:
            tipo ID SEMI                                          #declaracion
            |
            tipo ID '=' expr SEMI	                              #declaracionasignacion
            ;

asignaciones: ID '=' expr SEMI
;

imprimir: 'printf(' mensaje ')' SEMI
;

mensaje: 
      TEXTO
      |expr
      |ID;

tipo:
    'margit'
    |
    'radahn'
    |
    'godrick'
    ;

expr: expr op=('*' | '/') expr # MulDiv
| expr op=('+' | '-') expr #AddSub
| INT #int
| ID #id 
| '(' expr ')' #parens
;

MUL: '*';
DIV: '/';
ADD: '+';
SUB: '-';
TEXTO: '"' (~["])* '"';