// Generated from ./grammar/CodeFile.g4 by ANTLR 4.13.1
// jshint ignore: start
import antlr4 from 'antlr4';


const serializedATN = [4,0,51,389,6,-1,2,0,7,0,2,1,7,1,2,2,7,2,2,3,7,3,2,
4,7,4,2,5,7,5,2,6,7,6,2,7,7,7,2,8,7,8,2,9,7,9,2,10,7,10,2,11,7,11,2,12,7,
12,2,13,7,13,2,14,7,14,2,15,7,15,2,16,7,16,2,17,7,17,2,18,7,18,2,19,7,19,
2,20,7,20,2,21,7,21,2,22,7,22,2,23,7,23,2,24,7,24,2,25,7,25,2,26,7,26,2,
27,7,27,2,28,7,28,2,29,7,29,2,30,7,30,2,31,7,31,2,32,7,32,2,33,7,33,2,34,
7,34,2,35,7,35,2,36,7,36,2,37,7,37,2,38,7,38,2,39,7,39,2,40,7,40,2,41,7,
41,2,42,7,42,2,43,7,43,2,44,7,44,2,45,7,45,2,46,7,46,2,47,7,47,2,48,7,48,
2,49,7,49,2,50,7,50,1,0,1,0,1,0,1,1,1,1,1,1,1,2,1,2,1,2,1,3,1,3,1,3,1,4,
1,4,1,4,1,5,1,5,1,5,1,6,1,6,1,6,1,7,1,7,1,7,1,7,1,7,1,7,1,7,1,8,1,8,1,8,
1,8,1,8,1,8,1,8,1,9,1,9,1,9,1,9,1,9,1,9,1,9,1,9,1,10,1,10,1,11,1,11,1,12,
1,12,1,12,1,13,1,13,1,13,1,14,1,14,1,14,1,15,1,15,1,15,1,16,1,16,1,16,1,
17,1,17,1,17,1,18,1,18,1,18,1,18,1,18,1,19,1,19,1,19,1,19,1,19,1,19,1,20,
1,20,1,20,1,20,1,20,1,20,1,21,1,21,1,21,1,21,1,21,1,21,1,21,1,22,1,22,1,
22,1,22,1,22,1,22,1,22,1,22,1,23,1,23,1,23,1,23,1,23,1,23,1,23,1,24,1,24,
1,25,1,25,1,26,1,26,1,27,1,27,1,28,1,28,1,29,1,29,1,30,1,30,1,31,1,31,1,
32,1,32,1,33,1,33,1,34,1,34,1,35,1,35,1,36,1,36,1,36,1,36,1,36,1,36,1,36,
1,36,1,36,1,36,1,36,1,36,1,36,1,36,1,36,1,37,1,37,1,37,1,37,1,37,1,37,1,
37,1,37,1,37,1,37,1,38,1,38,1,38,1,38,1,38,1,38,1,38,1,38,1,38,1,38,1,39,
1,39,1,39,1,39,1,39,1,39,1,39,1,39,1,40,1,40,1,40,1,40,1,40,3,40,280,8,40,
1,41,1,41,1,41,1,41,1,41,1,41,1,41,1,41,1,41,1,41,1,41,1,41,1,41,1,41,1,
41,1,41,1,41,1,41,1,41,1,41,1,41,1,41,1,41,1,41,3,41,306,8,41,1,42,1,42,
5,42,310,8,42,10,42,12,42,313,9,42,1,42,1,42,1,43,3,43,318,8,43,1,43,4,43,
321,8,43,11,43,12,43,322,1,44,4,44,326,8,44,11,44,12,44,327,1,44,5,44,331,
8,44,10,44,12,44,334,9,44,1,45,3,45,337,8,45,1,45,4,45,340,8,45,11,45,12,
45,341,1,45,1,45,4,45,346,8,45,11,45,12,45,347,1,46,1,46,3,46,352,8,46,1,
46,1,46,1,47,1,47,1,48,1,48,1,48,1,48,5,48,362,8,48,10,48,12,48,365,9,48,
1,48,1,48,1,49,1,49,1,49,1,49,5,49,373,8,49,10,49,12,49,376,9,49,1,49,1,
49,1,49,1,49,1,49,1,50,4,50,384,8,50,11,50,12,50,385,1,50,1,50,1,374,0,51,
1,1,3,2,5,3,7,4,9,5,11,6,13,7,15,8,17,9,19,10,21,11,23,12,25,13,27,14,29,
15,31,16,33,17,35,18,37,19,39,20,41,21,43,22,45,23,47,24,49,25,51,26,53,
27,55,28,57,29,59,30,61,31,63,32,65,33,67,34,69,35,71,36,73,37,75,38,77,
39,79,40,81,41,83,42,85,43,87,44,89,45,91,46,93,47,95,48,97,49,99,50,101,
51,1,0,8,2,0,60,60,62,62,1,0,34,34,1,0,48,57,2,0,65,90,97,122,4,0,48,57,
65,90,95,95,97,122,1,0,46,46,2,0,10,10,13,13,3,0,9,10,13,13,32,32,407,0,
1,1,0,0,0,0,3,1,0,0,0,0,5,1,0,0,0,0,7,1,0,0,0,0,9,1,0,0,0,0,11,1,0,0,0,0,
13,1,0,0,0,0,15,1,0,0,0,0,17,1,0,0,0,0,19,1,0,0,0,0,21,1,0,0,0,0,23,1,0,
0,0,0,25,1,0,0,0,0,27,1,0,0,0,0,29,1,0,0,0,0,31,1,0,0,0,0,33,1,0,0,0,0,35,
1,0,0,0,0,37,1,0,0,0,0,39,1,0,0,0,0,41,1,0,0,0,0,43,1,0,0,0,0,45,1,0,0,0,
0,47,1,0,0,0,0,49,1,0,0,0,0,51,1,0,0,0,0,53,1,0,0,0,0,55,1,0,0,0,0,57,1,
0,0,0,0,59,1,0,0,0,0,61,1,0,0,0,0,63,1,0,0,0,0,65,1,0,0,0,0,67,1,0,0,0,0,
69,1,0,0,0,0,71,1,0,0,0,0,73,1,0,0,0,0,75,1,0,0,0,0,77,1,0,0,0,0,79,1,0,
0,0,0,81,1,0,0,0,0,83,1,0,0,0,0,85,1,0,0,0,0,87,1,0,0,0,0,89,1,0,0,0,0,91,
1,0,0,0,0,93,1,0,0,0,0,95,1,0,0,0,0,97,1,0,0,0,0,99,1,0,0,0,0,101,1,0,0,
0,1,103,1,0,0,0,3,106,1,0,0,0,5,109,1,0,0,0,7,112,1,0,0,0,9,115,1,0,0,0,
11,118,1,0,0,0,13,121,1,0,0,0,15,124,1,0,0,0,17,131,1,0,0,0,19,138,1,0,0,
0,21,146,1,0,0,0,23,148,1,0,0,0,25,150,1,0,0,0,27,153,1,0,0,0,29,156,1,0,
0,0,31,159,1,0,0,0,33,162,1,0,0,0,35,165,1,0,0,0,37,168,1,0,0,0,39,173,1,
0,0,0,41,179,1,0,0,0,43,185,1,0,0,0,45,192,1,0,0,0,47,200,1,0,0,0,49,207,
1,0,0,0,51,209,1,0,0,0,53,211,1,0,0,0,55,213,1,0,0,0,57,215,1,0,0,0,59,217,
1,0,0,0,61,219,1,0,0,0,63,221,1,0,0,0,65,223,1,0,0,0,67,225,1,0,0,0,69,227,
1,0,0,0,71,229,1,0,0,0,73,231,1,0,0,0,75,246,1,0,0,0,77,256,1,0,0,0,79,266,
1,0,0,0,81,279,1,0,0,0,83,305,1,0,0,0,85,307,1,0,0,0,87,317,1,0,0,0,89,325,
1,0,0,0,91,336,1,0,0,0,93,349,1,0,0,0,95,355,1,0,0,0,97,357,1,0,0,0,99,368,
1,0,0,0,101,383,1,0,0,0,103,104,5,43,0,0,104,105,5,61,0,0,105,2,1,0,0,0,
106,107,5,45,0,0,107,108,5,61,0,0,108,4,1,0,0,0,109,110,5,42,0,0,110,111,
5,61,0,0,111,6,1,0,0,0,112,113,5,47,0,0,113,114,5,61,0,0,114,8,1,0,0,0,115,
116,5,37,0,0,116,117,5,61,0,0,117,10,1,0,0,0,118,119,5,45,0,0,119,120,5,
45,0,0,120,12,1,0,0,0,121,122,5,43,0,0,122,123,5,43,0,0,123,14,1,0,0,0,124,
125,5,109,0,0,125,126,5,97,0,0,126,127,5,114,0,0,127,128,5,103,0,0,128,129,
5,105,0,0,129,130,5,116,0,0,130,16,1,0,0,0,131,132,5,114,0,0,132,133,5,97,
0,0,133,134,5,100,0,0,134,135,5,97,0,0,135,136,5,104,0,0,136,137,5,110,0,
0,137,18,1,0,0,0,138,139,5,103,0,0,139,140,5,111,0,0,140,141,5,100,0,0,141,
142,5,114,0,0,142,143,5,105,0,0,143,144,5,99,0,0,144,145,5,107,0,0,145,20,
1,0,0,0,146,147,5,60,0,0,147,22,1,0,0,0,148,149,5,62,0,0,149,24,1,0,0,0,
150,151,5,60,0,0,151,152,5,61,0,0,152,26,1,0,0,0,153,154,5,62,0,0,154,155,
5,61,0,0,155,28,1,0,0,0,156,157,5,61,0,0,157,158,5,61,0,0,158,30,1,0,0,0,
159,160,5,33,0,0,160,161,5,61,0,0,161,32,1,0,0,0,162,163,5,38,0,0,163,164,
5,38,0,0,164,34,1,0,0,0,165,166,5,124,0,0,166,167,5,124,0,0,167,36,1,0,0,
0,168,169,5,116,0,0,169,170,5,114,0,0,170,171,5,117,0,0,171,172,5,101,0,
0,172,38,1,0,0,0,173,174,5,102,0,0,174,175,5,97,0,0,175,176,5,108,0,0,176,
177,5,115,0,0,177,178,5,101,0,0,178,40,1,0,0,0,179,180,5,33,0,0,180,181,
5,116,0,0,181,182,5,114,0,0,182,183,5,117,0,0,183,184,5,101,0,0,184,42,1,
0,0,0,185,186,5,33,0,0,186,187,5,102,0,0,187,188,5,97,0,0,188,189,5,108,
0,0,189,190,5,115,0,0,190,191,5,101,0,0,191,44,1,0,0,0,192,193,5,105,0,0,
193,194,5,110,0,0,194,195,5,105,0,0,195,196,5,99,0,0,196,197,5,105,0,0,197,
198,5,97,0,0,198,199,5,114,0,0,199,46,1,0,0,0,200,201,5,99,0,0,201,202,5,
111,0,0,202,203,5,100,0,0,203,204,5,105,0,0,204,205,5,103,0,0,205,206,5,
111,0,0,206,48,1,0,0,0,207,208,5,37,0,0,208,50,1,0,0,0,209,210,5,44,0,0,
210,52,1,0,0,0,211,212,5,33,0,0,212,54,1,0,0,0,213,214,5,40,0,0,214,56,1,
0,0,0,215,216,5,41,0,0,216,58,1,0,0,0,217,218,5,123,0,0,218,60,1,0,0,0,219,
220,5,125,0,0,220,62,1,0,0,0,221,222,5,61,0,0,222,64,1,0,0,0,223,224,5,42,
0,0,224,66,1,0,0,0,225,226,5,47,0,0,226,68,1,0,0,0,227,228,5,43,0,0,228,
70,1,0,0,0,229,230,5,45,0,0,230,72,1,0,0,0,231,232,5,77,0,0,232,233,5,111,
0,0,233,234,5,115,0,0,234,235,5,116,0,0,235,236,5,114,0,0,236,237,5,97,0,
0,237,238,5,114,0,0,238,239,5,77,0,0,239,240,5,101,0,0,240,241,5,110,0,0,
241,242,5,115,0,0,242,243,5,97,0,0,243,244,5,106,0,0,244,245,5,101,0,0,245,
74,1,0,0,0,246,247,5,118,0,0,247,248,5,101,0,0,248,249,5,114,0,0,249,250,
5,105,0,0,250,251,5,102,0,0,251,252,5,105,0,0,252,253,5,99,0,0,253,254,5,
97,0,0,254,255,5,114,0,0,255,76,1,0,0,0,256,257,5,99,0,0,257,258,5,111,0,
0,258,259,5,110,0,0,259,260,5,116,0,0,260,261,5,114,0,0,261,262,5,97,0,0,
262,263,5,114,0,0,263,264,5,105,0,0,264,265,5,111,0,0,265,78,1,0,0,0,266,
267,5,114,0,0,267,268,5,101,0,0,268,269,5,112,0,0,269,270,5,101,0,0,270,
271,5,116,0,0,271,272,5,105,0,0,272,273,5,114,0,0,273,80,1,0,0,0,274,280,
7,0,0,0,275,276,5,60,0,0,276,280,5,61,0,0,277,278,5,62,0,0,278,280,5,61,
0,0,279,274,1,0,0,0,279,275,1,0,0,0,279,277,1,0,0,0,280,82,1,0,0,0,281,282,
5,61,0,0,282,306,5,61,0,0,283,284,5,33,0,0,284,306,5,61,0,0,285,286,5,116,
0,0,286,287,5,114,0,0,287,288,5,117,0,0,288,306,5,101,0,0,289,290,5,102,
0,0,290,291,5,97,0,0,291,292,5,108,0,0,292,293,5,115,0,0,293,306,5,101,0,
0,294,295,5,33,0,0,295,296,5,116,0,0,296,297,5,114,0,0,297,298,5,117,0,0,
298,306,5,101,0,0,299,300,5,33,0,0,300,301,5,102,0,0,301,302,5,97,0,0,302,
303,5,108,0,0,303,304,5,115,0,0,304,306,5,101,0,0,305,281,1,0,0,0,305,283,
1,0,0,0,305,285,1,0,0,0,305,289,1,0,0,0,305,294,1,0,0,0,305,299,1,0,0,0,
306,84,1,0,0,0,307,311,5,34,0,0,308,310,8,1,0,0,309,308,1,0,0,0,310,313,
1,0,0,0,311,309,1,0,0,0,311,312,1,0,0,0,312,314,1,0,0,0,313,311,1,0,0,0,
314,315,5,34,0,0,315,86,1,0,0,0,316,318,5,45,0,0,317,316,1,0,0,0,317,318,
1,0,0,0,318,320,1,0,0,0,319,321,7,2,0,0,320,319,1,0,0,0,321,322,1,0,0,0,
322,320,1,0,0,0,322,323,1,0,0,0,323,88,1,0,0,0,324,326,7,3,0,0,325,324,1,
0,0,0,326,327,1,0,0,0,327,325,1,0,0,0,327,328,1,0,0,0,328,332,1,0,0,0,329,
331,7,4,0,0,330,329,1,0,0,0,331,334,1,0,0,0,332,330,1,0,0,0,332,333,1,0,
0,0,333,90,1,0,0,0,334,332,1,0,0,0,335,337,5,45,0,0,336,335,1,0,0,0,336,
337,1,0,0,0,337,339,1,0,0,0,338,340,7,2,0,0,339,338,1,0,0,0,340,341,1,0,
0,0,341,339,1,0,0,0,341,342,1,0,0,0,342,343,1,0,0,0,343,345,7,5,0,0,344,
346,7,2,0,0,345,344,1,0,0,0,346,347,1,0,0,0,347,345,1,0,0,0,347,348,1,0,
0,0,348,92,1,0,0,0,349,351,5,34,0,0,350,352,7,3,0,0,351,350,1,0,0,0,351,
352,1,0,0,0,352,353,1,0,0,0,353,354,5,34,0,0,354,94,1,0,0,0,355,356,5,59,
0,0,356,96,1,0,0,0,357,358,5,47,0,0,358,359,5,47,0,0,359,363,1,0,0,0,360,
362,8,6,0,0,361,360,1,0,0,0,362,365,1,0,0,0,363,361,1,0,0,0,363,364,1,0,
0,0,364,366,1,0,0,0,365,363,1,0,0,0,366,367,6,48,0,0,367,98,1,0,0,0,368,
369,5,47,0,0,369,370,5,42,0,0,370,374,1,0,0,0,371,373,9,0,0,0,372,371,1,
0,0,0,373,376,1,0,0,0,374,375,1,0,0,0,374,372,1,0,0,0,375,377,1,0,0,0,376,
374,1,0,0,0,377,378,5,42,0,0,378,379,5,47,0,0,379,380,1,0,0,0,380,381,6,
49,0,0,381,100,1,0,0,0,382,384,7,7,0,0,383,382,1,0,0,0,384,385,1,0,0,0,385,
383,1,0,0,0,385,386,1,0,0,0,386,387,1,0,0,0,387,388,6,50,0,0,388,102,1,0,
0,0,15,0,279,305,311,317,322,327,332,336,341,347,351,363,374,385,1,6,0,0];


const atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

const decisionsToDFA = atn.decisionToState.map( (ds, index) => new antlr4.dfa.DFA(ds, index) );

export default class CodeFileLexer extends antlr4.Lexer {

    static grammarFileName = "CodeFile.g4";
    static channelNames = [ "DEFAULT_TOKEN_CHANNEL", "HIDDEN" ];
	static modeNames = [ "DEFAULT_MODE" ];
	static literalNames = [ null, "'+='", "'-='", "'*='", "'/='", "'%='", "'--'", 
                         "'++'", "'margit'", "'radahn'", "'godrick'", "'<'", 
                         "'>'", "'<='", "'>='", "'=='", "'!='", "'&&'", 
                         "'||'", "'true'", "'false'", "'!true'", "'!false'", 
                         "'iniciar'", "'codigo'", "'%'", "','", "'!'", "'('", 
                         "')'", "'{'", "'}'", "'='", "'*'", "'/'", "'+'", 
                         "'-'", "'MostrarMensaje'", "'verificar'", "'contrario'", 
                         "'repetir'", null, null, null, null, null, null, 
                         null, "';'" ];
	static symbolicNames = [ null, null, null, null, null, null, null, null, 
                          null, null, null, null, null, null, null, null, 
                          null, null, null, null, null, null, null, "INSERT", 
                          "CODE", "MOD", "COMA", "NEGAN", "APARENTESIS", 
                          "CPARENTESIS", "ALLAVE", "CLLAVE", "EQUALS", "MUL", 
                          "DIV", "ADD", "SUB", "PRINT", "IF", "ELSE", "WHILE", 
                          "COND_MAT", "COND_LOG", "STRING", "INT", "ID", 
                          "FLOAT", "CHAR", "SEMI", "LINE_COMMENT", "BLOCK_COMMENT", 
                          "WS" ];
	static ruleNames = [ "T__0", "T__1", "T__2", "T__3", "T__4", "T__5", "T__6", 
                      "T__7", "T__8", "T__9", "T__10", "T__11", "T__12", 
                      "T__13", "T__14", "T__15", "T__16", "T__17", "T__18", 
                      "T__19", "T__20", "T__21", "INSERT", "CODE", "MOD", 
                      "COMA", "NEGAN", "APARENTESIS", "CPARENTESIS", "ALLAVE", 
                      "CLLAVE", "EQUALS", "MUL", "DIV", "ADD", "SUB", "PRINT", 
                      "IF", "ELSE", "WHILE", "COND_MAT", "COND_LOG", "STRING", 
                      "INT", "ID", "FLOAT", "CHAR", "SEMI", "LINE_COMMENT", 
                      "BLOCK_COMMENT", "WS" ];

    constructor(input) {
        super(input)
        this._interp = new antlr4.atn.LexerATNSimulator(this, atn, decisionsToDFA, new antlr4.atn.PredictionContextCache());
    }
}

CodeFileLexer.EOF = antlr4.Token.EOF;
CodeFileLexer.T__0 = 1;
CodeFileLexer.T__1 = 2;
CodeFileLexer.T__2 = 3;
CodeFileLexer.T__3 = 4;
CodeFileLexer.T__4 = 5;
CodeFileLexer.T__5 = 6;
CodeFileLexer.T__6 = 7;
CodeFileLexer.T__7 = 8;
CodeFileLexer.T__8 = 9;
CodeFileLexer.T__9 = 10;
CodeFileLexer.T__10 = 11;
CodeFileLexer.T__11 = 12;
CodeFileLexer.T__12 = 13;
CodeFileLexer.T__13 = 14;
CodeFileLexer.T__14 = 15;
CodeFileLexer.T__15 = 16;
CodeFileLexer.T__16 = 17;
CodeFileLexer.T__17 = 18;
CodeFileLexer.T__18 = 19;
CodeFileLexer.T__19 = 20;
CodeFileLexer.T__20 = 21;
CodeFileLexer.T__21 = 22;
CodeFileLexer.INSERT = 23;
CodeFileLexer.CODE = 24;
CodeFileLexer.MOD = 25;
CodeFileLexer.COMA = 26;
CodeFileLexer.NEGAN = 27;
CodeFileLexer.APARENTESIS = 28;
CodeFileLexer.CPARENTESIS = 29;
CodeFileLexer.ALLAVE = 30;
CodeFileLexer.CLLAVE = 31;
CodeFileLexer.EQUALS = 32;
CodeFileLexer.MUL = 33;
CodeFileLexer.DIV = 34;
CodeFileLexer.ADD = 35;
CodeFileLexer.SUB = 36;
CodeFileLexer.PRINT = 37;
CodeFileLexer.IF = 38;
CodeFileLexer.ELSE = 39;
CodeFileLexer.WHILE = 40;
CodeFileLexer.COND_MAT = 41;
CodeFileLexer.COND_LOG = 42;
CodeFileLexer.STRING = 43;
CodeFileLexer.INT = 44;
CodeFileLexer.ID = 45;
CodeFileLexer.FLOAT = 46;
CodeFileLexer.CHAR = 47;
CodeFileLexer.SEMI = 48;
CodeFileLexer.LINE_COMMENT = 49;
CodeFileLexer.BLOCK_COMMENT = 50;
CodeFileLexer.WS = 51;



