// Generated from ./grammar/CodeC.g4 by ANTLR 4.13.1
// jshint ignore: start
import antlr4 from 'antlr4';


const serializedATN = [4,0,38,290,6,-1,2,0,7,0,2,1,7,1,2,2,7,2,2,3,7,3,2,
4,7,4,2,5,7,5,2,6,7,6,2,7,7,7,2,8,7,8,2,9,7,9,2,10,7,10,2,11,7,11,2,12,7,
12,2,13,7,13,2,14,7,14,2,15,7,15,2,16,7,16,2,17,7,17,2,18,7,18,2,19,7,19,
2,20,7,20,2,21,7,21,2,22,7,22,2,23,7,23,2,24,7,24,2,25,7,25,2,26,7,26,2,
27,7,27,2,28,7,28,2,29,7,29,2,30,7,30,2,31,7,31,2,32,7,32,2,33,7,33,2,34,
7,34,2,35,7,35,2,36,7,36,2,37,7,37,1,0,1,0,1,0,1,1,1,1,1,1,1,2,1,2,1,2,1,
3,1,3,1,3,1,4,1,4,1,4,1,5,1,5,1,5,1,6,1,6,1,6,1,7,1,7,1,7,1,7,1,8,1,8,1,
8,1,8,1,8,1,8,1,9,1,9,1,9,1,9,1,9,1,10,1,10,1,10,1,10,1,10,1,10,1,10,1,10,
1,10,1,11,1,11,1,11,1,11,1,11,1,12,1,12,1,12,1,12,1,12,1,12,1,12,1,13,1,
13,1,13,1,13,1,13,1,13,1,14,1,14,1,15,1,15,1,16,1,16,1,17,1,17,1,18,1,18,
1,19,1,19,1,20,1,20,1,21,1,21,1,22,1,22,1,23,1,23,1,24,1,24,1,25,1,25,1,
25,1,25,1,25,1,25,1,25,1,26,1,26,1,26,1,27,1,27,1,27,1,27,1,27,1,28,1,28,
1,28,1,28,1,28,3,28,183,8,28,1,29,1,29,1,29,1,29,1,29,1,29,1,29,1,29,1,29,
1,29,1,29,1,29,1,29,1,29,1,29,1,29,1,29,1,29,1,29,1,29,1,29,1,29,1,29,1,
29,1,29,1,29,1,29,1,29,3,29,213,8,29,1,30,1,30,5,30,217,8,30,10,30,12,30,
220,9,30,1,30,1,30,1,31,3,31,225,8,31,1,31,4,31,228,8,31,11,31,12,31,229,
1,32,4,32,233,8,32,11,32,12,32,234,1,32,5,32,238,8,32,10,32,12,32,241,9,
32,1,33,3,33,244,8,33,1,33,4,33,247,8,33,11,33,12,33,248,1,33,1,33,4,33,
253,8,33,11,33,12,33,254,1,34,1,34,1,35,4,35,260,8,35,11,35,12,35,261,1,
35,1,35,1,36,1,36,1,36,1,36,5,36,270,8,36,10,36,12,36,273,9,36,1,36,1,36,
1,37,1,37,1,37,1,37,5,37,281,8,37,10,37,12,37,284,9,37,1,37,1,37,1,37,1,
37,1,37,1,282,0,38,1,1,3,2,5,3,7,4,9,5,11,6,13,7,15,8,17,9,19,10,21,11,23,
12,25,13,27,14,29,15,31,16,33,17,35,18,37,19,39,20,41,21,43,22,45,23,47,
24,49,25,51,26,53,27,55,28,57,29,59,30,61,31,63,32,65,33,67,34,69,35,71,
36,73,37,75,38,1,0,8,2,0,60,60,62,62,1,0,34,34,1,0,48,57,2,0,65,90,97,122,
3,0,48,57,65,90,97,122,1,0,46,46,3,0,9,10,13,13,32,32,2,0,10,10,13,13,309,
0,1,1,0,0,0,0,3,1,0,0,0,0,5,1,0,0,0,0,7,1,0,0,0,0,9,1,0,0,0,0,11,1,0,0,0,
0,13,1,0,0,0,0,15,1,0,0,0,0,17,1,0,0,0,0,19,1,0,0,0,0,21,1,0,0,0,0,23,1,
0,0,0,0,25,1,0,0,0,0,27,1,0,0,0,0,29,1,0,0,0,0,31,1,0,0,0,0,33,1,0,0,0,0,
35,1,0,0,0,0,37,1,0,0,0,0,39,1,0,0,0,0,41,1,0,0,0,0,43,1,0,0,0,0,45,1,0,
0,0,0,47,1,0,0,0,0,49,1,0,0,0,0,51,1,0,0,0,0,53,1,0,0,0,0,55,1,0,0,0,0,57,
1,0,0,0,0,59,1,0,0,0,0,61,1,0,0,0,0,63,1,0,0,0,0,65,1,0,0,0,0,67,1,0,0,0,
0,69,1,0,0,0,0,71,1,0,0,0,0,73,1,0,0,0,0,75,1,0,0,0,1,77,1,0,0,0,3,80,1,
0,0,0,5,83,1,0,0,0,7,86,1,0,0,0,9,89,1,0,0,0,11,92,1,0,0,0,13,95,1,0,0,0,
15,98,1,0,0,0,17,102,1,0,0,0,19,108,1,0,0,0,21,113,1,0,0,0,23,122,1,0,0,
0,25,127,1,0,0,0,27,134,1,0,0,0,29,140,1,0,0,0,31,142,1,0,0,0,33,144,1,0,
0,0,35,146,1,0,0,0,37,148,1,0,0,0,39,150,1,0,0,0,41,152,1,0,0,0,43,154,1,
0,0,0,45,156,1,0,0,0,47,158,1,0,0,0,49,160,1,0,0,0,51,162,1,0,0,0,53,169,
1,0,0,0,55,172,1,0,0,0,57,182,1,0,0,0,59,212,1,0,0,0,61,214,1,0,0,0,63,224,
1,0,0,0,65,232,1,0,0,0,67,243,1,0,0,0,69,256,1,0,0,0,71,259,1,0,0,0,73,265,
1,0,0,0,75,276,1,0,0,0,77,78,5,43,0,0,78,79,5,61,0,0,79,2,1,0,0,0,80,81,
5,45,0,0,81,82,5,61,0,0,82,4,1,0,0,0,83,84,5,42,0,0,84,85,5,61,0,0,85,6,
1,0,0,0,86,87,5,47,0,0,87,88,5,61,0,0,88,8,1,0,0,0,89,90,5,37,0,0,90,91,
5,61,0,0,91,10,1,0,0,0,92,93,5,43,0,0,93,94,5,43,0,0,94,12,1,0,0,0,95,96,
5,45,0,0,96,97,5,45,0,0,97,14,1,0,0,0,98,99,5,105,0,0,99,100,5,110,0,0,100,
101,5,116,0,0,101,16,1,0,0,0,102,103,5,102,0,0,103,104,5,108,0,0,104,105,
5,111,0,0,105,106,5,97,0,0,106,107,5,116,0,0,107,18,1,0,0,0,108,109,5,99,
0,0,109,110,5,104,0,0,110,111,5,97,0,0,111,112,5,114,0,0,112,20,1,0,0,0,
113,114,5,91,0,0,114,115,5,97,0,0,115,116,5,45,0,0,116,117,5,122,0,0,117,
118,5,65,0,0,118,119,5,45,0,0,119,120,5,90,0,0,120,121,5,93,0,0,121,22,1,
0,0,0,122,123,5,118,0,0,123,124,5,111,0,0,124,125,5,105,0,0,125,126,5,100,
0,0,126,24,1,0,0,0,127,128,5,109,0,0,128,129,5,97,0,0,129,130,5,105,0,0,
130,131,5,110,0,0,131,132,5,40,0,0,132,133,5,41,0,0,133,26,1,0,0,0,134,135,
5,119,0,0,135,136,5,104,0,0,136,137,5,105,0,0,137,138,5,108,0,0,138,139,
5,101,0,0,139,28,1,0,0,0,140,141,5,37,0,0,141,30,1,0,0,0,142,143,5,44,0,
0,143,32,1,0,0,0,144,145,5,40,0,0,145,34,1,0,0,0,146,147,5,41,0,0,147,36,
1,0,0,0,148,149,5,123,0,0,149,38,1,0,0,0,150,151,5,125,0,0,151,40,1,0,0,
0,152,153,5,61,0,0,153,42,1,0,0,0,154,155,5,42,0,0,155,44,1,0,0,0,156,157,
5,47,0,0,157,46,1,0,0,0,158,159,5,43,0,0,159,48,1,0,0,0,160,161,5,45,0,0,
161,50,1,0,0,0,162,163,5,112,0,0,163,164,5,114,0,0,164,165,5,105,0,0,165,
166,5,110,0,0,166,167,5,116,0,0,167,168,5,102,0,0,168,52,1,0,0,0,169,170,
5,105,0,0,170,171,5,102,0,0,171,54,1,0,0,0,172,173,5,101,0,0,173,174,5,108,
0,0,174,175,5,115,0,0,175,176,5,101,0,0,176,56,1,0,0,0,177,183,7,0,0,0,178,
179,5,60,0,0,179,183,5,61,0,0,180,181,5,62,0,0,181,183,5,61,0,0,182,177,
1,0,0,0,182,178,1,0,0,0,182,180,1,0,0,0,183,58,1,0,0,0,184,185,5,61,0,0,
185,213,5,61,0,0,186,187,5,33,0,0,187,213,5,61,0,0,188,189,5,116,0,0,189,
190,5,114,0,0,190,191,5,117,0,0,191,213,5,101,0,0,192,193,5,102,0,0,193,
194,5,97,0,0,194,195,5,108,0,0,195,196,5,115,0,0,196,213,5,101,0,0,197,198,
5,38,0,0,198,213,5,38,0,0,199,200,5,124,0,0,200,213,5,124,0,0,201,202,5,
33,0,0,202,203,5,116,0,0,203,204,5,114,0,0,204,205,5,117,0,0,205,213,5,101,
0,0,206,207,5,33,0,0,207,208,5,102,0,0,208,209,5,97,0,0,209,210,5,108,0,
0,210,211,5,115,0,0,211,213,5,101,0,0,212,184,1,0,0,0,212,186,1,0,0,0,212,
188,1,0,0,0,212,192,1,0,0,0,212,197,1,0,0,0,212,199,1,0,0,0,212,201,1,0,
0,0,212,206,1,0,0,0,213,60,1,0,0,0,214,218,5,34,0,0,215,217,8,1,0,0,216,
215,1,0,0,0,217,220,1,0,0,0,218,216,1,0,0,0,218,219,1,0,0,0,219,221,1,0,
0,0,220,218,1,0,0,0,221,222,5,34,0,0,222,62,1,0,0,0,223,225,5,45,0,0,224,
223,1,0,0,0,224,225,1,0,0,0,225,227,1,0,0,0,226,228,7,2,0,0,227,226,1,0,
0,0,228,229,1,0,0,0,229,227,1,0,0,0,229,230,1,0,0,0,230,64,1,0,0,0,231,233,
7,3,0,0,232,231,1,0,0,0,233,234,1,0,0,0,234,232,1,0,0,0,234,235,1,0,0,0,
235,239,1,0,0,0,236,238,7,4,0,0,237,236,1,0,0,0,238,241,1,0,0,0,239,237,
1,0,0,0,239,240,1,0,0,0,240,66,1,0,0,0,241,239,1,0,0,0,242,244,5,45,0,0,
243,242,1,0,0,0,243,244,1,0,0,0,244,246,1,0,0,0,245,247,7,2,0,0,246,245,
1,0,0,0,247,248,1,0,0,0,248,246,1,0,0,0,248,249,1,0,0,0,249,250,1,0,0,0,
250,252,7,5,0,0,251,253,7,2,0,0,252,251,1,0,0,0,253,254,1,0,0,0,254,252,
1,0,0,0,254,255,1,0,0,0,255,68,1,0,0,0,256,257,5,59,0,0,257,70,1,0,0,0,258,
260,7,6,0,0,259,258,1,0,0,0,260,261,1,0,0,0,261,259,1,0,0,0,261,262,1,0,
0,0,262,263,1,0,0,0,263,264,6,35,0,0,264,72,1,0,0,0,265,266,5,47,0,0,266,
267,5,47,0,0,267,271,1,0,0,0,268,270,8,7,0,0,269,268,1,0,0,0,270,273,1,0,
0,0,271,269,1,0,0,0,271,272,1,0,0,0,272,274,1,0,0,0,273,271,1,0,0,0,274,
275,6,36,0,0,275,74,1,0,0,0,276,277,5,47,0,0,277,278,5,42,0,0,278,282,1,
0,0,0,279,281,9,0,0,0,280,279,1,0,0,0,281,284,1,0,0,0,282,283,1,0,0,0,282,
280,1,0,0,0,283,285,1,0,0,0,284,282,1,0,0,0,285,286,5,42,0,0,286,287,5,47,
0,0,287,288,1,0,0,0,288,289,6,37,0,0,289,76,1,0,0,0,14,0,182,212,218,224,
229,234,239,243,248,254,261,271,282,1,6,0,0];


const atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

const decisionsToDFA = atn.decisionToState.map( (ds, index) => new antlr4.dfa.DFA(ds, index) );

export default class CodeCLexer extends antlr4.Lexer {

    static grammarFileName = "CodeC.g4";
    static channelNames = [ "DEFAULT_TOKEN_CHANNEL", "HIDDEN" ];
	static modeNames = [ "DEFAULT_MODE" ];
	static literalNames = [ null, "'+='", "'-='", "'*='", "'/='", "'%='", "'++'", 
                         "'--'", "'int'", "'float'", "'char'", "'[a-zA-Z]'", 
                         "'void'", "'main()'", "'while'", "'%'", "','", 
                         "'('", "')'", "'{'", "'}'", "'='", "'*'", "'/'", 
                         "'+'", "'-'", "'printf'", "'if'", "'else'", null, 
                         null, null, null, null, null, "';'" ];
	static symbolicNames = [ null, null, null, null, null, null, null, null, 
                          null, null, null, "CHAR", "INSERT", "CODE", "WHILE", 
                          "RES", "COMA", "APARENTESIS", "CPARENTESIS", "ALLAVE", 
                          "CLLAVE", "EQUALS", "MUL", "DIV", "ADD", "SUB", 
                          "PRINT", "IF", "ELSE", "COND_MAT", "COND_LOG", 
                          "STRING", "INT", "ID", "FLOAT", "SEMI", "WS", 
                          "LINE_COMMENT", "BLOCK_COMMENT" ];
	static ruleNames = [ "T__0", "T__1", "T__2", "T__3", "T__4", "T__5", "T__6", 
                      "T__7", "T__8", "T__9", "CHAR", "INSERT", "CODE", 
                      "WHILE", "RES", "COMA", "APARENTESIS", "CPARENTESIS", 
                      "ALLAVE", "CLLAVE", "EQUALS", "MUL", "DIV", "ADD", 
                      "SUB", "PRINT", "IF", "ELSE", "COND_MAT", "COND_LOG", 
                      "STRING", "INT", "ID", "FLOAT", "SEMI", "WS", "LINE_COMMENT", 
                      "BLOCK_COMMENT" ];

    constructor(input) {
        super(input)
        this._interp = new antlr4.atn.LexerATNSimulator(this, atn, decisionsToDFA, new antlr4.atn.PredictionContextCache());
    }
}

CodeCLexer.EOF = antlr4.Token.EOF;
CodeCLexer.T__0 = 1;
CodeCLexer.T__1 = 2;
CodeCLexer.T__2 = 3;
CodeCLexer.T__3 = 4;
CodeCLexer.T__4 = 5;
CodeCLexer.T__5 = 6;
CodeCLexer.T__6 = 7;
CodeCLexer.T__7 = 8;
CodeCLexer.T__8 = 9;
CodeCLexer.T__9 = 10;
CodeCLexer.CHAR = 11;
CodeCLexer.INSERT = 12;
CodeCLexer.CODE = 13;
CodeCLexer.WHILE = 14;
CodeCLexer.RES = 15;
CodeCLexer.COMA = 16;
CodeCLexer.APARENTESIS = 17;
CodeCLexer.CPARENTESIS = 18;
CodeCLexer.ALLAVE = 19;
CodeCLexer.CLLAVE = 20;
CodeCLexer.EQUALS = 21;
CodeCLexer.MUL = 22;
CodeCLexer.DIV = 23;
CodeCLexer.ADD = 24;
CodeCLexer.SUB = 25;
CodeCLexer.PRINT = 26;
CodeCLexer.IF = 27;
CodeCLexer.ELSE = 28;
CodeCLexer.COND_MAT = 29;
CodeCLexer.COND_LOG = 30;
CodeCLexer.STRING = 31;
CodeCLexer.INT = 32;
CodeCLexer.ID = 33;
CodeCLexer.FLOAT = 34;
CodeCLexer.SEMI = 35;
CodeCLexer.WS = 36;
CodeCLexer.LINE_COMMENT = 37;
CodeCLexer.BLOCK_COMMENT = 38;


