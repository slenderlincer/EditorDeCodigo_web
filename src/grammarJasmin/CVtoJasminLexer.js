// Generated from ./grammar/CVtoJasmin.g4 by ANTLR 4.13.1
// jshint ignore: start
import antlr4 from 'antlr4';


const serializedATN = [4,0,49,372,6,-1,2,0,7,0,2,1,7,1,2,2,7,2,2,3,7,3,2,
4,7,4,2,5,7,5,2,6,7,6,2,7,7,7,2,8,7,8,2,9,7,9,2,10,7,10,2,11,7,11,2,12,7,
12,2,13,7,13,2,14,7,14,2,15,7,15,2,16,7,16,2,17,7,17,2,18,7,18,2,19,7,19,
2,20,7,20,2,21,7,21,2,22,7,22,2,23,7,23,2,24,7,24,2,25,7,25,2,26,7,26,2,
27,7,27,2,28,7,28,2,29,7,29,2,30,7,30,2,31,7,31,2,32,7,32,2,33,7,33,2,34,
7,34,2,35,7,35,2,36,7,36,2,37,7,37,2,38,7,38,2,39,7,39,2,40,7,40,2,41,7,
41,2,42,7,42,2,43,7,43,2,44,7,44,2,45,7,45,2,46,7,46,2,47,7,47,2,48,7,48,
1,0,1,0,1,0,1,1,1,1,1,1,1,2,1,2,1,2,1,3,1,3,1,3,1,4,1,4,1,4,1,5,1,5,1,5,
1,6,1,6,1,6,1,7,1,7,1,7,1,7,1,7,1,7,1,7,1,8,1,8,1,8,1,8,1,8,1,8,1,8,1,9,
1,9,1,9,1,9,1,9,1,9,1,9,1,9,1,10,1,10,1,11,1,11,1,12,1,12,1,12,1,13,1,13,
1,13,1,14,1,14,1,14,1,15,1,15,1,15,1,16,1,16,1,16,1,16,1,16,1,17,1,17,1,
17,1,17,1,17,1,17,1,18,1,18,1,18,1,19,1,19,1,19,1,20,1,20,1,20,1,20,1,20,
1,20,1,20,1,20,1,21,1,21,1,21,1,21,1,21,1,21,1,21,1,22,1,22,1,23,1,23,1,
24,1,24,1,25,1,25,1,26,1,26,1,27,1,27,1,28,1,28,1,29,1,29,1,30,1,30,1,31,
1,31,1,32,1,32,1,33,1,33,1,34,1,34,1,34,1,34,1,34,1,34,1,34,1,34,1,34,1,
34,1,34,1,34,1,34,1,34,1,34,1,35,1,35,1,35,1,35,1,35,1,35,1,35,1,35,1,35,
1,35,1,36,1,36,1,36,1,36,1,36,1,36,1,36,1,36,1,36,1,36,1,37,1,37,1,37,1,
37,1,37,1,37,1,37,1,37,1,38,1,38,1,38,1,38,1,38,3,38,263,8,38,1,39,1,39,
1,39,1,39,1,39,1,39,1,39,1,39,1,39,1,39,1,39,1,39,1,39,1,39,1,39,1,39,1,
39,1,39,1,39,1,39,1,39,1,39,1,39,1,39,3,39,289,8,39,1,40,1,40,5,40,293,8,
40,10,40,12,40,296,9,40,1,40,1,40,1,41,3,41,301,8,41,1,41,4,41,304,8,41,
11,41,12,41,305,1,42,4,42,309,8,42,11,42,12,42,310,1,42,5,42,314,8,42,10,
42,12,42,317,9,42,1,43,3,43,320,8,43,1,43,4,43,323,8,43,11,43,12,43,324,
1,43,1,43,4,43,329,8,43,11,43,12,43,330,1,44,1,44,3,44,335,8,44,1,44,1,44,
1,45,1,45,1,46,1,46,1,46,1,46,5,46,345,8,46,10,46,12,46,348,9,46,1,46,1,
46,1,47,1,47,1,47,1,47,5,47,356,8,47,10,47,12,47,359,9,47,1,47,1,47,1,47,
1,47,1,47,1,48,4,48,367,8,48,11,48,12,48,368,1,48,1,48,1,357,0,49,1,1,3,
2,5,3,7,4,9,5,11,6,13,7,15,8,17,9,19,10,21,11,23,12,25,13,27,14,29,15,31,
16,33,17,35,18,37,19,39,20,41,21,43,22,45,23,47,24,49,25,51,26,53,27,55,
28,57,29,59,30,61,31,63,32,65,33,67,34,69,35,71,36,73,37,75,38,77,39,79,
40,81,41,83,42,85,43,87,44,89,45,91,46,93,47,95,48,97,49,1,0,8,2,0,60,60,
62,62,1,0,34,34,1,0,48,57,2,0,65,90,97,122,4,0,48,57,65,90,95,95,97,122,
1,0,46,46,2,0,10,10,13,13,3,0,9,10,13,13,32,32,390,0,1,1,0,0,0,0,3,1,0,0,
0,0,5,1,0,0,0,0,7,1,0,0,0,0,9,1,0,0,0,0,11,1,0,0,0,0,13,1,0,0,0,0,15,1,0,
0,0,0,17,1,0,0,0,0,19,1,0,0,0,0,21,1,0,0,0,0,23,1,0,0,0,0,25,1,0,0,0,0,27,
1,0,0,0,0,29,1,0,0,0,0,31,1,0,0,0,0,33,1,0,0,0,0,35,1,0,0,0,0,37,1,0,0,0,
0,39,1,0,0,0,0,41,1,0,0,0,0,43,1,0,0,0,0,45,1,0,0,0,0,47,1,0,0,0,0,49,1,
0,0,0,0,51,1,0,0,0,0,53,1,0,0,0,0,55,1,0,0,0,0,57,1,0,0,0,0,59,1,0,0,0,0,
61,1,0,0,0,0,63,1,0,0,0,0,65,1,0,0,0,0,67,1,0,0,0,0,69,1,0,0,0,0,71,1,0,
0,0,0,73,1,0,0,0,0,75,1,0,0,0,0,77,1,0,0,0,0,79,1,0,0,0,0,81,1,0,0,0,0,83,
1,0,0,0,0,85,1,0,0,0,0,87,1,0,0,0,0,89,1,0,0,0,0,91,1,0,0,0,0,93,1,0,0,0,
0,95,1,0,0,0,0,97,1,0,0,0,1,99,1,0,0,0,3,102,1,0,0,0,5,105,1,0,0,0,7,108,
1,0,0,0,9,111,1,0,0,0,11,114,1,0,0,0,13,117,1,0,0,0,15,120,1,0,0,0,17,127,
1,0,0,0,19,134,1,0,0,0,21,142,1,0,0,0,23,144,1,0,0,0,25,146,1,0,0,0,27,149,
1,0,0,0,29,152,1,0,0,0,31,155,1,0,0,0,33,158,1,0,0,0,35,163,1,0,0,0,37,169,
1,0,0,0,39,172,1,0,0,0,41,175,1,0,0,0,43,183,1,0,0,0,45,190,1,0,0,0,47,192,
1,0,0,0,49,194,1,0,0,0,51,196,1,0,0,0,53,198,1,0,0,0,55,200,1,0,0,0,57,202,
1,0,0,0,59,204,1,0,0,0,61,206,1,0,0,0,63,208,1,0,0,0,65,210,1,0,0,0,67,212,
1,0,0,0,69,214,1,0,0,0,71,229,1,0,0,0,73,239,1,0,0,0,75,249,1,0,0,0,77,262,
1,0,0,0,79,288,1,0,0,0,81,290,1,0,0,0,83,300,1,0,0,0,85,308,1,0,0,0,87,319,
1,0,0,0,89,332,1,0,0,0,91,338,1,0,0,0,93,340,1,0,0,0,95,351,1,0,0,0,97,366,
1,0,0,0,99,100,5,43,0,0,100,101,5,61,0,0,101,2,1,0,0,0,102,103,5,45,0,0,
103,104,5,61,0,0,104,4,1,0,0,0,105,106,5,42,0,0,106,107,5,61,0,0,107,6,1,
0,0,0,108,109,5,47,0,0,109,110,5,61,0,0,110,8,1,0,0,0,111,112,5,37,0,0,112,
113,5,61,0,0,113,10,1,0,0,0,114,115,5,45,0,0,115,116,5,45,0,0,116,12,1,0,
0,0,117,118,5,43,0,0,118,119,5,43,0,0,119,14,1,0,0,0,120,121,5,109,0,0,121,
122,5,97,0,0,122,123,5,114,0,0,123,124,5,103,0,0,124,125,5,105,0,0,125,126,
5,116,0,0,126,16,1,0,0,0,127,128,5,114,0,0,128,129,5,97,0,0,129,130,5,100,
0,0,130,131,5,97,0,0,131,132,5,104,0,0,132,133,5,110,0,0,133,18,1,0,0,0,
134,135,5,103,0,0,135,136,5,111,0,0,136,137,5,100,0,0,137,138,5,114,0,0,
138,139,5,105,0,0,139,140,5,99,0,0,140,141,5,107,0,0,141,20,1,0,0,0,142,
143,5,60,0,0,143,22,1,0,0,0,144,145,5,62,0,0,145,24,1,0,0,0,146,147,5,60,
0,0,147,148,5,61,0,0,148,26,1,0,0,0,149,150,5,62,0,0,150,151,5,61,0,0,151,
28,1,0,0,0,152,153,5,61,0,0,153,154,5,61,0,0,154,30,1,0,0,0,155,156,5,33,
0,0,156,157,5,61,0,0,157,32,1,0,0,0,158,159,5,116,0,0,159,160,5,114,0,0,
160,161,5,117,0,0,161,162,5,101,0,0,162,34,1,0,0,0,163,164,5,102,0,0,164,
165,5,97,0,0,165,166,5,108,0,0,166,167,5,115,0,0,167,168,5,101,0,0,168,36,
1,0,0,0,169,170,5,38,0,0,170,171,5,38,0,0,171,38,1,0,0,0,172,173,5,124,0,
0,173,174,5,124,0,0,174,40,1,0,0,0,175,176,5,105,0,0,176,177,5,110,0,0,177,
178,5,105,0,0,178,179,5,99,0,0,179,180,5,105,0,0,180,181,5,97,0,0,181,182,
5,114,0,0,182,42,1,0,0,0,183,184,5,99,0,0,184,185,5,111,0,0,185,186,5,100,
0,0,186,187,5,105,0,0,187,188,5,103,0,0,188,189,5,111,0,0,189,44,1,0,0,0,
190,191,5,37,0,0,191,46,1,0,0,0,192,193,5,44,0,0,193,48,1,0,0,0,194,195,
5,33,0,0,195,50,1,0,0,0,196,197,5,40,0,0,197,52,1,0,0,0,198,199,5,41,0,0,
199,54,1,0,0,0,200,201,5,123,0,0,201,56,1,0,0,0,202,203,5,125,0,0,203,58,
1,0,0,0,204,205,5,61,0,0,205,60,1,0,0,0,206,207,5,42,0,0,207,62,1,0,0,0,
208,209,5,47,0,0,209,64,1,0,0,0,210,211,5,43,0,0,211,66,1,0,0,0,212,213,
5,45,0,0,213,68,1,0,0,0,214,215,5,77,0,0,215,216,5,111,0,0,216,217,5,115,
0,0,217,218,5,116,0,0,218,219,5,114,0,0,219,220,5,97,0,0,220,221,5,114,0,
0,221,222,5,77,0,0,222,223,5,101,0,0,223,224,5,110,0,0,224,225,5,115,0,0,
225,226,5,97,0,0,226,227,5,106,0,0,227,228,5,101,0,0,228,70,1,0,0,0,229,
230,5,118,0,0,230,231,5,101,0,0,231,232,5,114,0,0,232,233,5,105,0,0,233,
234,5,102,0,0,234,235,5,105,0,0,235,236,5,99,0,0,236,237,5,97,0,0,237,238,
5,114,0,0,238,72,1,0,0,0,239,240,5,99,0,0,240,241,5,111,0,0,241,242,5,110,
0,0,242,243,5,116,0,0,243,244,5,114,0,0,244,245,5,97,0,0,245,246,5,114,0,
0,246,247,5,105,0,0,247,248,5,111,0,0,248,74,1,0,0,0,249,250,5,114,0,0,250,
251,5,101,0,0,251,252,5,112,0,0,252,253,5,101,0,0,253,254,5,116,0,0,254,
255,5,105,0,0,255,256,5,114,0,0,256,76,1,0,0,0,257,263,7,0,0,0,258,259,5,
60,0,0,259,263,5,61,0,0,260,261,5,62,0,0,261,263,5,61,0,0,262,257,1,0,0,
0,262,258,1,0,0,0,262,260,1,0,0,0,263,78,1,0,0,0,264,265,5,61,0,0,265,289,
5,61,0,0,266,267,5,33,0,0,267,289,5,61,0,0,268,269,5,116,0,0,269,270,5,114,
0,0,270,271,5,117,0,0,271,289,5,101,0,0,272,273,5,102,0,0,273,274,5,97,0,
0,274,275,5,108,0,0,275,276,5,115,0,0,276,289,5,101,0,0,277,278,5,33,0,0,
278,279,5,116,0,0,279,280,5,114,0,0,280,281,5,117,0,0,281,289,5,101,0,0,
282,283,5,33,0,0,283,284,5,102,0,0,284,285,5,97,0,0,285,286,5,108,0,0,286,
287,5,115,0,0,287,289,5,101,0,0,288,264,1,0,0,0,288,266,1,0,0,0,288,268,
1,0,0,0,288,272,1,0,0,0,288,277,1,0,0,0,288,282,1,0,0,0,289,80,1,0,0,0,290,
294,5,34,0,0,291,293,8,1,0,0,292,291,1,0,0,0,293,296,1,0,0,0,294,292,1,0,
0,0,294,295,1,0,0,0,295,297,1,0,0,0,296,294,1,0,0,0,297,298,5,34,0,0,298,
82,1,0,0,0,299,301,5,45,0,0,300,299,1,0,0,0,300,301,1,0,0,0,301,303,1,0,
0,0,302,304,7,2,0,0,303,302,1,0,0,0,304,305,1,0,0,0,305,303,1,0,0,0,305,
306,1,0,0,0,306,84,1,0,0,0,307,309,7,3,0,0,308,307,1,0,0,0,309,310,1,0,0,
0,310,308,1,0,0,0,310,311,1,0,0,0,311,315,1,0,0,0,312,314,7,4,0,0,313,312,
1,0,0,0,314,317,1,0,0,0,315,313,1,0,0,0,315,316,1,0,0,0,316,86,1,0,0,0,317,
315,1,0,0,0,318,320,5,45,0,0,319,318,1,0,0,0,319,320,1,0,0,0,320,322,1,0,
0,0,321,323,7,2,0,0,322,321,1,0,0,0,323,324,1,0,0,0,324,322,1,0,0,0,324,
325,1,0,0,0,325,326,1,0,0,0,326,328,7,5,0,0,327,329,7,2,0,0,328,327,1,0,
0,0,329,330,1,0,0,0,330,328,1,0,0,0,330,331,1,0,0,0,331,88,1,0,0,0,332,334,
5,34,0,0,333,335,7,3,0,0,334,333,1,0,0,0,334,335,1,0,0,0,335,336,1,0,0,0,
336,337,5,34,0,0,337,90,1,0,0,0,338,339,5,59,0,0,339,92,1,0,0,0,340,341,
5,47,0,0,341,342,5,47,0,0,342,346,1,0,0,0,343,345,8,6,0,0,344,343,1,0,0,
0,345,348,1,0,0,0,346,344,1,0,0,0,346,347,1,0,0,0,347,349,1,0,0,0,348,346,
1,0,0,0,349,350,6,46,0,0,350,94,1,0,0,0,351,352,5,47,0,0,352,353,5,42,0,
0,353,357,1,0,0,0,354,356,9,0,0,0,355,354,1,0,0,0,356,359,1,0,0,0,357,358,
1,0,0,0,357,355,1,0,0,0,358,360,1,0,0,0,359,357,1,0,0,0,360,361,5,42,0,0,
361,362,5,47,0,0,362,363,1,0,0,0,363,364,6,47,0,0,364,96,1,0,0,0,365,367,
7,7,0,0,366,365,1,0,0,0,367,368,1,0,0,0,368,366,1,0,0,0,368,369,1,0,0,0,
369,370,1,0,0,0,370,371,6,48,0,0,371,98,1,0,0,0,15,0,262,288,294,300,305,
310,315,319,324,330,334,346,357,368,1,6,0,0];


const atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

const decisionsToDFA = atn.decisionToState.map( (ds, index) => new antlr4.dfa.DFA(ds, index) );

export default class CVtoJasminLexer extends antlr4.Lexer {

    static grammarFileName = "CVtoJasmin.g4";
    static channelNames = [ "DEFAULT_TOKEN_CHANNEL", "HIDDEN" ];
	static modeNames = [ "DEFAULT_MODE" ];
	static literalNames = [ null, "'+='", "'-='", "'*='", "'/='", "'%='", "'--'", 
                         "'++'", "'margit'", "'radahn'", "'godrick'", "'<'", 
                         "'>'", "'<='", "'>='", "'=='", "'!='", "'true'", 
                         "'false'", "'&&'", "'||'", "'iniciar'", "'codigo'", 
                         "'%'", "','", "'!'", "'('", "')'", "'{'", "'}'", 
                         "'='", "'*'", "'/'", "'+'", "'-'", "'MostrarMensaje'", 
                         "'verificar'", "'contrario'", "'repetir'", null, 
                         null, null, null, null, null, null, "';'" ];
	static symbolicNames = [ null, null, null, null, null, null, null, null, 
                          null, null, null, null, null, null, null, null, 
                          null, null, null, null, null, "INSERT", "CODE", 
                          "MOD", "COMA", "NEGAN", "APARENTESIS", "CPARENTESIS", 
                          "ALLAVE", "CLLAVE", "EQUALS", "MUL", "DIV", "ADD", 
                          "SUB", "PRINT", "IF", "ELSE", "WHILE", "COND_MAT", 
                          "COND_LOG", "STRING", "INT", "ID", "FLOAT", "CHAR", 
                          "SEMI", "LINE_COMMENT", "BLOCK_COMMENT", "WS" ];
	static ruleNames = [ "T__0", "T__1", "T__2", "T__3", "T__4", "T__5", "T__6", 
                      "T__7", "T__8", "T__9", "T__10", "T__11", "T__12", 
                      "T__13", "T__14", "T__15", "T__16", "T__17", "T__18", 
                      "T__19", "INSERT", "CODE", "MOD", "COMA", "NEGAN", 
                      "APARENTESIS", "CPARENTESIS", "ALLAVE", "CLLAVE", 
                      "EQUALS", "MUL", "DIV", "ADD", "SUB", "PRINT", "IF", 
                      "ELSE", "WHILE", "COND_MAT", "COND_LOG", "STRING", 
                      "INT", "ID", "FLOAT", "CHAR", "SEMI", "LINE_COMMENT", 
                      "BLOCK_COMMENT", "WS" ];

    constructor(input) {
        super(input)
        this._interp = new antlr4.atn.LexerATNSimulator(this, atn, decisionsToDFA, new antlr4.atn.PredictionContextCache());
    }
}

CVtoJasminLexer.EOF = antlr4.Token.EOF;
CVtoJasminLexer.T__0 = 1;
CVtoJasminLexer.T__1 = 2;
CVtoJasminLexer.T__2 = 3;
CVtoJasminLexer.T__3 = 4;
CVtoJasminLexer.T__4 = 5;
CVtoJasminLexer.T__5 = 6;
CVtoJasminLexer.T__6 = 7;
CVtoJasminLexer.T__7 = 8;
CVtoJasminLexer.T__8 = 9;
CVtoJasminLexer.T__9 = 10;
CVtoJasminLexer.T__10 = 11;
CVtoJasminLexer.T__11 = 12;
CVtoJasminLexer.T__12 = 13;
CVtoJasminLexer.T__13 = 14;
CVtoJasminLexer.T__14 = 15;
CVtoJasminLexer.T__15 = 16;
CVtoJasminLexer.T__16 = 17;
CVtoJasminLexer.T__17 = 18;
CVtoJasminLexer.T__18 = 19;
CVtoJasminLexer.T__19 = 20;
CVtoJasminLexer.INSERT = 21;
CVtoJasminLexer.CODE = 22;
CVtoJasminLexer.MOD = 23;
CVtoJasminLexer.COMA = 24;
CVtoJasminLexer.NEGAN = 25;
CVtoJasminLexer.APARENTESIS = 26;
CVtoJasminLexer.CPARENTESIS = 27;
CVtoJasminLexer.ALLAVE = 28;
CVtoJasminLexer.CLLAVE = 29;
CVtoJasminLexer.EQUALS = 30;
CVtoJasminLexer.MUL = 31;
CVtoJasminLexer.DIV = 32;
CVtoJasminLexer.ADD = 33;
CVtoJasminLexer.SUB = 34;
CVtoJasminLexer.PRINT = 35;
CVtoJasminLexer.IF = 36;
CVtoJasminLexer.ELSE = 37;
CVtoJasminLexer.WHILE = 38;
CVtoJasminLexer.COND_MAT = 39;
CVtoJasminLexer.COND_LOG = 40;
CVtoJasminLexer.STRING = 41;
CVtoJasminLexer.INT = 42;
CVtoJasminLexer.ID = 43;
CVtoJasminLexer.FLOAT = 44;
CVtoJasminLexer.CHAR = 45;
CVtoJasminLexer.SEMI = 46;
CVtoJasminLexer.LINE_COMMENT = 47;
CVtoJasminLexer.BLOCK_COMMENT = 48;
CVtoJasminLexer.WS = 49;



