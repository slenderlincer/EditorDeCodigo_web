// Generated from ./grammar/CodeC.g4 by ANTLR 4.13.1
// jshint ignore: start
import antlr4 from 'antlr4';
import CodeCVisitor from './CodeCVisitor.js';

const serializedATN = [4,1,38,170,2,0,7,0,2,1,7,1,2,2,7,2,2,3,7,3,2,4,7,
4,2,5,7,5,2,6,7,6,2,7,7,7,2,8,7,8,2,9,7,9,2,10,7,10,2,11,7,11,2,12,7,12,
1,0,1,0,1,0,1,0,1,0,1,0,1,1,5,1,34,8,1,10,1,12,1,37,9,1,1,2,1,2,1,2,1,2,
1,2,3,2,44,8,2,1,3,1,3,1,3,1,3,1,3,1,3,1,3,1,3,1,3,1,3,3,3,56,8,3,1,4,1,
4,1,4,1,4,1,4,1,4,1,4,1,4,3,4,66,8,4,1,4,1,4,1,4,1,4,3,4,72,8,4,1,4,3,4,
75,8,4,1,5,1,5,1,5,1,5,1,5,1,5,1,6,1,6,1,7,1,7,1,7,1,7,1,7,1,7,1,7,1,7,1,
7,1,7,1,7,3,7,96,8,7,1,7,1,7,1,7,1,7,1,7,1,7,1,7,1,7,1,7,1,7,1,7,1,7,1,7,
1,7,1,7,5,7,113,8,7,10,7,12,7,116,9,7,1,8,1,8,5,8,120,8,8,10,8,12,8,123,
9,8,1,8,3,8,126,8,8,1,9,1,9,1,9,1,9,1,9,1,9,5,9,134,8,9,10,9,12,9,137,9,
9,1,9,1,9,1,10,1,10,1,10,1,11,1,11,1,11,5,11,147,8,11,10,11,12,11,150,9,
11,1,11,1,11,1,12,1,12,1,12,1,12,3,12,158,8,12,1,12,1,12,1,12,5,12,163,8,
12,10,12,12,12,166,9,12,1,12,1,12,1,12,1,35,1,14,13,0,2,4,6,8,10,12,14,16,
18,20,22,24,0,6,1,0,1,5,1,0,6,7,1,0,8,10,1,0,29,30,1,0,22,23,1,0,24,25,183,
0,26,1,0,0,0,2,35,1,0,0,0,4,43,1,0,0,0,6,55,1,0,0,0,8,74,1,0,0,0,10,76,1,
0,0,0,12,82,1,0,0,0,14,95,1,0,0,0,16,117,1,0,0,0,18,127,1,0,0,0,20,140,1,
0,0,0,22,143,1,0,0,0,24,153,1,0,0,0,26,27,5,12,0,0,27,28,5,13,0,0,28,29,
5,19,0,0,29,30,3,2,1,0,30,31,5,20,0,0,31,1,1,0,0,0,32,34,3,4,2,0,33,32,1,
0,0,0,34,37,1,0,0,0,35,36,1,0,0,0,35,33,1,0,0,0,36,3,1,0,0,0,37,35,1,0,0,
0,38,44,3,6,3,0,39,44,3,8,4,0,40,44,3,10,5,0,41,44,3,16,8,0,42,44,3,24,12,
0,43,38,1,0,0,0,43,39,1,0,0,0,43,40,1,0,0,0,43,41,1,0,0,0,43,42,1,0,0,0,
44,5,1,0,0,0,45,46,3,12,6,0,46,47,5,33,0,0,47,48,5,35,0,0,48,56,1,0,0,0,
49,50,3,12,6,0,50,51,5,33,0,0,51,52,5,21,0,0,52,53,3,14,7,0,53,54,5,35,0,
0,54,56,1,0,0,0,55,45,1,0,0,0,55,49,1,0,0,0,56,7,1,0,0,0,57,58,5,33,0,0,
58,59,5,21,0,0,59,60,3,14,7,0,60,61,5,35,0,0,61,75,1,0,0,0,62,63,5,33,0,
0,63,65,7,0,0,0,64,66,3,14,7,0,65,64,1,0,0,0,65,66,1,0,0,0,66,67,1,0,0,0,
67,75,5,35,0,0,68,69,5,33,0,0,69,71,7,1,0,0,70,72,3,14,7,0,71,70,1,0,0,0,
71,72,1,0,0,0,72,73,1,0,0,0,73,75,5,35,0,0,74,57,1,0,0,0,74,62,1,0,0,0,74,
68,1,0,0,0,75,9,1,0,0,0,76,77,5,26,0,0,77,78,5,17,0,0,78,79,3,14,7,0,79,
80,5,18,0,0,80,81,5,35,0,0,81,11,1,0,0,0,82,83,7,2,0,0,83,13,1,0,0,0,84,
85,6,7,-1,0,85,96,7,3,0,0,86,96,5,32,0,0,87,96,5,33,0,0,88,96,5,31,0,0,89,
96,5,34,0,0,90,96,5,11,0,0,91,92,5,17,0,0,92,93,3,14,7,0,93,94,5,18,0,0,
94,96,1,0,0,0,95,84,1,0,0,0,95,86,1,0,0,0,95,87,1,0,0,0,95,88,1,0,0,0,95,
89,1,0,0,0,95,90,1,0,0,0,95,91,1,0,0,0,96,114,1,0,0,0,97,98,10,12,0,0,98,
99,7,4,0,0,99,113,3,14,7,13,100,101,10,11,0,0,101,102,7,5,0,0,102,113,3,
14,7,12,103,104,10,10,0,0,104,105,5,15,0,0,105,113,3,14,7,11,106,107,10,
9,0,0,107,108,5,16,0,0,108,113,3,14,7,10,109,110,10,7,0,0,110,111,7,3,0,
0,111,113,3,14,7,8,112,97,1,0,0,0,112,100,1,0,0,0,112,103,1,0,0,0,112,106,
1,0,0,0,112,109,1,0,0,0,113,116,1,0,0,0,114,112,1,0,0,0,114,115,1,0,0,0,
115,15,1,0,0,0,116,114,1,0,0,0,117,121,3,18,9,0,118,120,3,20,10,0,119,118,
1,0,0,0,120,123,1,0,0,0,121,119,1,0,0,0,121,122,1,0,0,0,122,125,1,0,0,0,
123,121,1,0,0,0,124,126,3,22,11,0,125,124,1,0,0,0,125,126,1,0,0,0,126,17,
1,0,0,0,127,128,5,27,0,0,128,129,5,17,0,0,129,130,3,14,7,0,130,131,5,18,
0,0,131,135,5,19,0,0,132,134,3,4,2,0,133,132,1,0,0,0,134,137,1,0,0,0,135,
133,1,0,0,0,135,136,1,0,0,0,136,138,1,0,0,0,137,135,1,0,0,0,138,139,5,20,
0,0,139,19,1,0,0,0,140,141,5,28,0,0,141,142,3,18,9,0,142,21,1,0,0,0,143,
144,5,28,0,0,144,148,5,19,0,0,145,147,3,4,2,0,146,145,1,0,0,0,147,150,1,
0,0,0,148,146,1,0,0,0,148,149,1,0,0,0,149,151,1,0,0,0,150,148,1,0,0,0,151,
152,5,20,0,0,152,23,1,0,0,0,153,154,5,14,0,0,154,157,5,17,0,0,155,158,3,
8,4,0,156,158,3,14,7,0,157,155,1,0,0,0,157,156,1,0,0,0,158,159,1,0,0,0,159,
160,5,18,0,0,160,164,5,19,0,0,161,163,3,4,2,0,162,161,1,0,0,0,163,166,1,
0,0,0,164,162,1,0,0,0,164,165,1,0,0,0,165,167,1,0,0,0,166,164,1,0,0,0,167,
168,5,20,0,0,168,25,1,0,0,0,15,35,43,55,65,71,74,95,112,114,121,125,135,
148,157,164];


const atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

const decisionsToDFA = atn.decisionToState.map( (ds, index) => new antlr4.dfa.DFA(ds, index) );

const sharedContextCache = new antlr4.atn.PredictionContextCache();

export default class CodeCParser extends antlr4.Parser {

    static grammarFileName = "CodeC.g4";
    static literalNames = [ null, "'+='", "'-='", "'*='", "'/='", "'%='", 
                            "'++'", "'--'", "'int'", "'float'", "'char'", 
                            "'[a-zA-Z]'", "'void'", "'main()'", "'while'", 
                            "'%'", "','", "'('", "')'", "'{'", "'}'", "'='", 
                            "'*'", "'/'", "'+'", "'-'", "'printf'", "'if'", 
                            "'else'", null, null, null, null, null, null, 
                            "';'" ];
    static symbolicNames = [ null, null, null, null, null, null, null, null, 
                             null, null, null, "CHAR", "INSERT", "CODE", 
                             "WHILE", "RES", "COMA", "APARENTESIS", "CPARENTESIS", 
                             "ALLAVE", "CLLAVE", "EQUALS", "MUL", "DIV", 
                             "ADD", "SUB", "PRINT", "IF", "ELSE", "COND_MAT", 
                             "COND_LOG", "STRING", "INT", "ID", "FLOAT", 
                             "SEMI", "WS", "LINE_COMMENT", "BLOCK_COMMENT" ];
    static ruleNames = [ "start", "content", "expresiones", "declaraciones", 
                         "assignament", "imprimir", "tipo", "expr", "ordencondicional", 
                         "condicional", "condicional_elseif", "condicional_else", 
                         "while" ];

    constructor(input) {
        super(input);
        this._interp = new antlr4.atn.ParserATNSimulator(this, atn, decisionsToDFA, sharedContextCache);
        this.ruleNames = CodeCParser.ruleNames;
        this.literalNames = CodeCParser.literalNames;
        this.symbolicNames = CodeCParser.symbolicNames;
    }

    sempred(localctx, ruleIndex, predIndex) {
    	switch(ruleIndex) {
    	case 7:
    	    		return this.expr_sempred(localctx, predIndex);
        default:
            throw "No predicate with index:" + ruleIndex;
       }
    }

    expr_sempred(localctx, predIndex) {
    	switch(predIndex) {
    		case 0:
    			return this.precpred(this._ctx, 12);
    		case 1:
    			return this.precpred(this._ctx, 11);
    		case 2:
    			return this.precpred(this._ctx, 10);
    		case 3:
    			return this.precpred(this._ctx, 9);
    		case 4:
    			return this.precpred(this._ctx, 7);
    		default:
    			throw "No predicate with index:" + predIndex;
    	}
    };




	start() {
	    let localctx = new StartContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 0, CodeCParser.RULE_start);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 26;
	        this.match(CodeCParser.INSERT);
	        this.state = 27;
	        this.match(CodeCParser.CODE);
	        this.state = 28;
	        this.match(CodeCParser.ALLAVE);
	        this.state = 29;
	        this.content();
	        this.state = 30;
	        this.match(CodeCParser.CLLAVE);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	content() {
	    let localctx = new ContentContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 2, CodeCParser.RULE_content);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 35;
	        this._errHandler.sync(this);
	        var _alt = this._interp.adaptivePredict(this._input,0,this._ctx)
	        while(_alt!=1 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
	            if(_alt===1+1) {
	                this.state = 32;
	                this.expresiones(); 
	            }
	            this.state = 37;
	            this._errHandler.sync(this);
	            _alt = this._interp.adaptivePredict(this._input,0,this._ctx);
	        }

	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	expresiones() {
	    let localctx = new ExpresionesContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 4, CodeCParser.RULE_expresiones);
	    try {
	        this.state = 43;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 8:
	        case 9:
	        case 10:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 38;
	            this.declaraciones();
	            break;
	        case 33:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 39;
	            this.assignament();
	            break;
	        case 26:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 40;
	            this.imprimir();
	            break;
	        case 27:
	            this.enterOuterAlt(localctx, 4);
	            this.state = 41;
	            this.ordencondicional();
	            break;
	        case 14:
	            this.enterOuterAlt(localctx, 5);
	            this.state = 42;
	            this.while_();
	            break;
	        default:
	            throw new antlr4.error.NoViableAltException(this);
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	declaraciones() {
	    let localctx = new DeclaracionesContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 6, CodeCParser.RULE_declaraciones);
	    try {
	        this.state = 55;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,2,this._ctx);
	        switch(la_) {
	        case 1:
	            localctx = new DeclaracionContext(this, localctx);
	            this.enterOuterAlt(localctx, 1);
	            this.state = 45;
	            this.tipo();
	            this.state = 46;
	            this.match(CodeCParser.ID);
	            this.state = 47;
	            this.match(CodeCParser.SEMI);
	            break;

	        case 2:
	            localctx = new DeclaracionasignacionContext(this, localctx);
	            this.enterOuterAlt(localctx, 2);
	            this.state = 49;
	            this.tipo();
	            this.state = 50;
	            this.match(CodeCParser.ID);
	            this.state = 51;
	            this.match(CodeCParser.EQUALS);
	            this.state = 52;
	            this.expr(0);
	            this.state = 53;
	            this.match(CodeCParser.SEMI);
	            break;

	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	assignament() {
	    let localctx = new AssignamentContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 8, CodeCParser.RULE_assignament);
	    var _la = 0;
	    try {
	        this.state = 74;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,5,this._ctx);
	        switch(la_) {
	        case 1:
	            localctx = new AsignacionesContext(this, localctx);
	            this.enterOuterAlt(localctx, 1);
	            this.state = 57;
	            this.match(CodeCParser.ID);
	            this.state = 58;
	            this.match(CodeCParser.EQUALS);
	            this.state = 59;
	            this.expr(0);
	            this.state = 60;
	            this.match(CodeCParser.SEMI);
	            break;

	        case 2:
	            localctx = new AsignaContext(this, localctx);
	            this.enterOuterAlt(localctx, 2);
	            this.state = 62;
	            this.match(CodeCParser.ID);
	            this.state = 63;
	            localctx.com = this._input.LT(1);
	            _la = this._input.LA(1);
	            if(!((((_la) & ~0x1f) === 0 && ((1 << _la) & 62) !== 0))) {
	                localctx.com = this._errHandler.recoverInline(this);
	            }
	            else {
	            	this._errHandler.reportMatch(this);
	                this.consume();
	            }
	            this.state = 65;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(((((_la - 11)) & ~0x1f) === 0 && ((1 << (_la - 11)) & 16515137) !== 0)) {
	                this.state = 64;
	                this.expr(0);
	            }

	            this.state = 67;
	            this.match(CodeCParser.SEMI);
	            break;

	        case 3:
	            localctx = new IncrementoContext(this, localctx);
	            this.enterOuterAlt(localctx, 3);
	            this.state = 68;
	            this.match(CodeCParser.ID);
	            this.state = 69;
	            localctx.com = this._input.LT(1);
	            _la = this._input.LA(1);
	            if(!(_la===6 || _la===7)) {
	                localctx.com = this._errHandler.recoverInline(this);
	            }
	            else {
	            	this._errHandler.reportMatch(this);
	                this.consume();
	            }
	            this.state = 71;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(((((_la - 11)) & ~0x1f) === 0 && ((1 << (_la - 11)) & 16515137) !== 0)) {
	                this.state = 70;
	                this.expr(0);
	            }

	            this.state = 73;
	            this.match(CodeCParser.SEMI);
	            break;

	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	imprimir() {
	    let localctx = new ImprimirContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 10, CodeCParser.RULE_imprimir);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 76;
	        this.match(CodeCParser.PRINT);
	        this.state = 77;
	        this.match(CodeCParser.APARENTESIS);
	        this.state = 78;
	        this.expr(0);
	        this.state = 79;
	        this.match(CodeCParser.CPARENTESIS);
	        this.state = 80;
	        this.match(CodeCParser.SEMI);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	tipo() {
	    let localctx = new TipoContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 12, CodeCParser.RULE_tipo);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 82;
	        _la = this._input.LA(1);
	        if(!((((_la) & ~0x1f) === 0 && ((1 << _la) & 1792) !== 0))) {
	        this._errHandler.recoverInline(this);
	        }
	        else {
	        	this._errHandler.reportMatch(this);
	            this.consume();
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}


	expr(_p) {
		if(_p===undefined) {
		    _p = 0;
		}
	    const _parentctx = this._ctx;
	    const _parentState = this.state;
	    let localctx = new ExprContext(this, this._ctx, _parentState);
	    let _prevctx = localctx;
	    const _startState = 14;
	    this.enterRecursionRule(localctx, 14, CodeCParser.RULE_expr, _p);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 95;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 29:
	        case 30:
	            localctx = new ConditionContext(this, localctx);
	            this._ctx = localctx;
	            _prevctx = localctx;

	            this.state = 85;
	            localctx.operator = this._input.LT(1);
	            _la = this._input.LA(1);
	            if(!(_la===29 || _la===30)) {
	                localctx.operator = this._errHandler.recoverInline(this);
	            }
	            else {
	            	this._errHandler.reportMatch(this);
	                this.consume();
	            }
	            break;
	        case 32:
	            localctx = new IntContext(this, localctx);
	            this._ctx = localctx;
	            _prevctx = localctx;
	            this.state = 86;
	            this.match(CodeCParser.INT);
	            break;
	        case 33:
	            localctx = new IdContext(this, localctx);
	            this._ctx = localctx;
	            _prevctx = localctx;
	            this.state = 87;
	            this.match(CodeCParser.ID);
	            break;
	        case 31:
	            localctx = new StringContext(this, localctx);
	            this._ctx = localctx;
	            _prevctx = localctx;
	            this.state = 88;
	            this.match(CodeCParser.STRING);
	            break;
	        case 34:
	            localctx = new FloatContext(this, localctx);
	            this._ctx = localctx;
	            _prevctx = localctx;
	            this.state = 89;
	            this.match(CodeCParser.FLOAT);
	            break;
	        case 11:
	            localctx = new CharContext(this, localctx);
	            this._ctx = localctx;
	            _prevctx = localctx;
	            this.state = 90;
	            this.match(CodeCParser.CHAR);
	            break;
	        case 17:
	            localctx = new ParensContext(this, localctx);
	            this._ctx = localctx;
	            _prevctx = localctx;
	            this.state = 91;
	            this.match(CodeCParser.APARENTESIS);
	            this.state = 92;
	            this.expr(0);
	            this.state = 93;
	            this.match(CodeCParser.CPARENTESIS);
	            break;
	        default:
	            throw new antlr4.error.NoViableAltException(this);
	        }
	        this._ctx.stop = this._input.LT(-1);
	        this.state = 114;
	        this._errHandler.sync(this);
	        var _alt = this._interp.adaptivePredict(this._input,8,this._ctx)
	        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
	            if(_alt===1) {
	                if(this._parseListeners!==null) {
	                    this.triggerExitRuleEvent();
	                }
	                _prevctx = localctx;
	                this.state = 112;
	                this._errHandler.sync(this);
	                var la_ = this._interp.adaptivePredict(this._input,7,this._ctx);
	                switch(la_) {
	                case 1:
	                    localctx = new MulDivContext(this, new ExprContext(this, _parentctx, _parentState));
	                    this.pushNewRecursionContext(localctx, _startState, CodeCParser.RULE_expr);
	                    this.state = 97;
	                    if (!( this.precpred(this._ctx, 12))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 12)");
	                    }
	                    this.state = 98;
	                    localctx.op = this._input.LT(1);
	                    _la = this._input.LA(1);
	                    if(!(_la===22 || _la===23)) {
	                        localctx.op = this._errHandler.recoverInline(this);
	                    }
	                    else {
	                    	this._errHandler.reportMatch(this);
	                        this.consume();
	                    }
	                    this.state = 99;
	                    this.expr(13);
	                    break;

	                case 2:
	                    localctx = new AddSubContext(this, new ExprContext(this, _parentctx, _parentState));
	                    this.pushNewRecursionContext(localctx, _startState, CodeCParser.RULE_expr);
	                    this.state = 100;
	                    if (!( this.precpred(this._ctx, 11))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 11)");
	                    }
	                    this.state = 101;
	                    localctx.op = this._input.LT(1);
	                    _la = this._input.LA(1);
	                    if(!(_la===24 || _la===25)) {
	                        localctx.op = this._errHandler.recoverInline(this);
	                    }
	                    else {
	                    	this._errHandler.reportMatch(this);
	                        this.consume();
	                    }
	                    this.state = 102;
	                    this.expr(12);
	                    break;

	                case 3:
	                    localctx = new ResiduoContext(this, new ExprContext(this, _parentctx, _parentState));
	                    this.pushNewRecursionContext(localctx, _startState, CodeCParser.RULE_expr);
	                    this.state = 103;
	                    if (!( this.precpred(this._ctx, 10))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 10)");
	                    }
	                    this.state = 104;
	                    this.match(CodeCParser.RES);
	                    this.state = 105;
	                    this.expr(11);
	                    break;

	                case 4:
	                    localctx = new StringAnidContext(this, new ExprContext(this, _parentctx, _parentState));
	                    this.pushNewRecursionContext(localctx, _startState, CodeCParser.RULE_expr);
	                    this.state = 106;
	                    if (!( this.precpred(this._ctx, 9))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 9)");
	                    }
	                    this.state = 107;
	                    this.match(CodeCParser.COMA);
	                    this.state = 108;
	                    this.expr(10);
	                    break;

	                case 5:
	                    localctx = new ConditionContext(this, new ExprContext(this, _parentctx, _parentState));
	                    this.pushNewRecursionContext(localctx, _startState, CodeCParser.RULE_expr);
	                    this.state = 109;
	                    if (!( this.precpred(this._ctx, 7))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 7)");
	                    }
	                    this.state = 110;
	                    localctx.operator = this._input.LT(1);
	                    _la = this._input.LA(1);
	                    if(!(_la===29 || _la===30)) {
	                        localctx.operator = this._errHandler.recoverInline(this);
	                    }
	                    else {
	                    	this._errHandler.reportMatch(this);
	                        this.consume();
	                    }
	                    this.state = 111;
	                    this.expr(8);
	                    break;

	                } 
	            }
	            this.state = 116;
	            this._errHandler.sync(this);
	            _alt = this._interp.adaptivePredict(this._input,8,this._ctx);
	        }

	    } catch( error) {
	        if(error instanceof antlr4.error.RecognitionException) {
		        localctx.exception = error;
		        this._errHandler.reportError(this, error);
		        this._errHandler.recover(this, error);
		    } else {
		    	throw error;
		    }
	    } finally {
	        this.unrollRecursionContexts(_parentctx)
	    }
	    return localctx;
	}



	ordencondicional() {
	    let localctx = new OrdencondicionalContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 16, CodeCParser.RULE_ordencondicional);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 117;
	        this.condicional();
	        this.state = 121;
	        this._errHandler.sync(this);
	        var _alt = this._interp.adaptivePredict(this._input,9,this._ctx)
	        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
	            if(_alt===1) {
	                this.state = 118;
	                this.condicional_elseif(); 
	            }
	            this.state = 123;
	            this._errHandler.sync(this);
	            _alt = this._interp.adaptivePredict(this._input,9,this._ctx);
	        }

	        this.state = 125;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===28) {
	            this.state = 124;
	            this.condicional_else();
	        }

	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	condicional() {
	    let localctx = new CondicionalContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 18, CodeCParser.RULE_condicional);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 127;
	        this.match(CodeCParser.IF);
	        this.state = 128;
	        this.match(CodeCParser.APARENTESIS);
	        this.state = 129;
	        this.expr(0);
	        this.state = 130;
	        this.match(CodeCParser.CPARENTESIS);
	        this.state = 131;
	        this.match(CodeCParser.ALLAVE);
	        this.state = 135;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(((((_la - 8)) & ~0x1f) === 0 && ((1 << (_la - 8)) & 34340935) !== 0)) {
	            this.state = 132;
	            this.expresiones();
	            this.state = 137;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 138;
	        this.match(CodeCParser.CLLAVE);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	condicional_elseif() {
	    let localctx = new Condicional_elseifContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 20, CodeCParser.RULE_condicional_elseif);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 140;
	        this.match(CodeCParser.ELSE);
	        this.state = 141;
	        this.condicional();
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	condicional_else() {
	    let localctx = new Condicional_elseContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 22, CodeCParser.RULE_condicional_else);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 143;
	        this.match(CodeCParser.ELSE);
	        this.state = 144;
	        this.match(CodeCParser.ALLAVE);
	        this.state = 148;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(((((_la - 8)) & ~0x1f) === 0 && ((1 << (_la - 8)) & 34340935) !== 0)) {
	            this.state = 145;
	            this.expresiones();
	            this.state = 150;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 151;
	        this.match(CodeCParser.CLLAVE);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	while_() {
	    let localctx = new WhileContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 24, CodeCParser.RULE_while);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 153;
	        this.match(CodeCParser.WHILE);
	        this.state = 154;
	        this.match(CodeCParser.APARENTESIS);
	        this.state = 157;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,13,this._ctx);
	        switch(la_) {
	        case 1:
	            this.state = 155;
	            this.assignament();
	            break;

	        case 2:
	            this.state = 156;
	            this.expr(0);
	            break;

	        }
	        this.state = 159;
	        this.match(CodeCParser.CPARENTESIS);
	        this.state = 160;
	        this.match(CodeCParser.ALLAVE);
	        this.state = 164;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(((((_la - 8)) & ~0x1f) === 0 && ((1 << (_la - 8)) & 34340935) !== 0)) {
	            this.state = 161;
	            this.expresiones();
	            this.state = 166;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 167;
	        this.match(CodeCParser.CLLAVE);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}


}

CodeCParser.EOF = antlr4.Token.EOF;
CodeCParser.T__0 = 1;
CodeCParser.T__1 = 2;
CodeCParser.T__2 = 3;
CodeCParser.T__3 = 4;
CodeCParser.T__4 = 5;
CodeCParser.T__5 = 6;
CodeCParser.T__6 = 7;
CodeCParser.T__7 = 8;
CodeCParser.T__8 = 9;
CodeCParser.T__9 = 10;
CodeCParser.CHAR = 11;
CodeCParser.INSERT = 12;
CodeCParser.CODE = 13;
CodeCParser.WHILE = 14;
CodeCParser.RES = 15;
CodeCParser.COMA = 16;
CodeCParser.APARENTESIS = 17;
CodeCParser.CPARENTESIS = 18;
CodeCParser.ALLAVE = 19;
CodeCParser.CLLAVE = 20;
CodeCParser.EQUALS = 21;
CodeCParser.MUL = 22;
CodeCParser.DIV = 23;
CodeCParser.ADD = 24;
CodeCParser.SUB = 25;
CodeCParser.PRINT = 26;
CodeCParser.IF = 27;
CodeCParser.ELSE = 28;
CodeCParser.COND_MAT = 29;
CodeCParser.COND_LOG = 30;
CodeCParser.STRING = 31;
CodeCParser.INT = 32;
CodeCParser.ID = 33;
CodeCParser.FLOAT = 34;
CodeCParser.SEMI = 35;
CodeCParser.WS = 36;
CodeCParser.LINE_COMMENT = 37;
CodeCParser.BLOCK_COMMENT = 38;

CodeCParser.RULE_start = 0;
CodeCParser.RULE_content = 1;
CodeCParser.RULE_expresiones = 2;
CodeCParser.RULE_declaraciones = 3;
CodeCParser.RULE_assignament = 4;
CodeCParser.RULE_imprimir = 5;
CodeCParser.RULE_tipo = 6;
CodeCParser.RULE_expr = 7;
CodeCParser.RULE_ordencondicional = 8;
CodeCParser.RULE_condicional = 9;
CodeCParser.RULE_condicional_elseif = 10;
CodeCParser.RULE_condicional_else = 11;
CodeCParser.RULE_while = 12;

class StartContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = CodeCParser.RULE_start;
    }

	INSERT() {
	    return this.getToken(CodeCParser.INSERT, 0);
	};

	CODE() {
	    return this.getToken(CodeCParser.CODE, 0);
	};

	ALLAVE() {
	    return this.getToken(CodeCParser.ALLAVE, 0);
	};

	content() {
	    return this.getTypedRuleContext(ContentContext,0);
	};

	CLLAVE() {
	    return this.getToken(CodeCParser.CLLAVE, 0);
	};

	accept(visitor) {
	    if ( visitor instanceof CodeCVisitor ) {
	        return visitor.visitStart(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class ContentContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = CodeCParser.RULE_content;
    }

	expresiones = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(ExpresionesContext);
	    } else {
	        return this.getTypedRuleContext(ExpresionesContext,i);
	    }
	};

	accept(visitor) {
	    if ( visitor instanceof CodeCVisitor ) {
	        return visitor.visitContent(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class ExpresionesContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = CodeCParser.RULE_expresiones;
    }

	declaraciones() {
	    return this.getTypedRuleContext(DeclaracionesContext,0);
	};

	assignament() {
	    return this.getTypedRuleContext(AssignamentContext,0);
	};

	imprimir() {
	    return this.getTypedRuleContext(ImprimirContext,0);
	};

	ordencondicional() {
	    return this.getTypedRuleContext(OrdencondicionalContext,0);
	};

	while_() {
	    return this.getTypedRuleContext(WhileContext,0);
	};

	accept(visitor) {
	    if ( visitor instanceof CodeCVisitor ) {
	        return visitor.visitExpresiones(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class DeclaracionesContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = CodeCParser.RULE_declaraciones;
    }


	 
		copyFrom(ctx) {
			super.copyFrom(ctx);
		}

}


class DeclaracionContext extends DeclaracionesContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	tipo() {
	    return this.getTypedRuleContext(TipoContext,0);
	};

	ID() {
	    return this.getToken(CodeCParser.ID, 0);
	};

	SEMI() {
	    return this.getToken(CodeCParser.SEMI, 0);
	};

	accept(visitor) {
	    if ( visitor instanceof CodeCVisitor ) {
	        return visitor.visitDeclaracion(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

CodeCParser.DeclaracionContext = DeclaracionContext;

class DeclaracionasignacionContext extends DeclaracionesContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	tipo() {
	    return this.getTypedRuleContext(TipoContext,0);
	};

	ID() {
	    return this.getToken(CodeCParser.ID, 0);
	};

	EQUALS() {
	    return this.getToken(CodeCParser.EQUALS, 0);
	};

	expr() {
	    return this.getTypedRuleContext(ExprContext,0);
	};

	SEMI() {
	    return this.getToken(CodeCParser.SEMI, 0);
	};

	accept(visitor) {
	    if ( visitor instanceof CodeCVisitor ) {
	        return visitor.visitDeclaracionasignacion(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

CodeCParser.DeclaracionasignacionContext = DeclaracionasignacionContext;

class AssignamentContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = CodeCParser.RULE_assignament;
    }


	 
		copyFrom(ctx) {
			super.copyFrom(ctx);
		}

}


class AsignaContext extends AssignamentContext {

    constructor(parser, ctx) {
        super(parser);
        this.com = null;;
        super.copyFrom(ctx);
    }

	ID() {
	    return this.getToken(CodeCParser.ID, 0);
	};

	SEMI() {
	    return this.getToken(CodeCParser.SEMI, 0);
	};

	expr() {
	    return this.getTypedRuleContext(ExprContext,0);
	};

	accept(visitor) {
	    if ( visitor instanceof CodeCVisitor ) {
	        return visitor.visitAsigna(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

CodeCParser.AsignaContext = AsignaContext;

class IncrementoContext extends AssignamentContext {

    constructor(parser, ctx) {
        super(parser);
        this.com = null;;
        super.copyFrom(ctx);
    }

	ID() {
	    return this.getToken(CodeCParser.ID, 0);
	};

	SEMI() {
	    return this.getToken(CodeCParser.SEMI, 0);
	};

	expr() {
	    return this.getTypedRuleContext(ExprContext,0);
	};

	accept(visitor) {
	    if ( visitor instanceof CodeCVisitor ) {
	        return visitor.visitIncremento(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

CodeCParser.IncrementoContext = IncrementoContext;

class AsignacionesContext extends AssignamentContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	ID() {
	    return this.getToken(CodeCParser.ID, 0);
	};

	EQUALS() {
	    return this.getToken(CodeCParser.EQUALS, 0);
	};

	expr() {
	    return this.getTypedRuleContext(ExprContext,0);
	};

	SEMI() {
	    return this.getToken(CodeCParser.SEMI, 0);
	};

	accept(visitor) {
	    if ( visitor instanceof CodeCVisitor ) {
	        return visitor.visitAsignaciones(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

CodeCParser.AsignacionesContext = AsignacionesContext;

class ImprimirContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = CodeCParser.RULE_imprimir;
    }

	PRINT() {
	    return this.getToken(CodeCParser.PRINT, 0);
	};

	APARENTESIS() {
	    return this.getToken(CodeCParser.APARENTESIS, 0);
	};

	expr() {
	    return this.getTypedRuleContext(ExprContext,0);
	};

	CPARENTESIS() {
	    return this.getToken(CodeCParser.CPARENTESIS, 0);
	};

	SEMI() {
	    return this.getToken(CodeCParser.SEMI, 0);
	};

	accept(visitor) {
	    if ( visitor instanceof CodeCVisitor ) {
	        return visitor.visitImprimir(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class TipoContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = CodeCParser.RULE_tipo;
    }


	accept(visitor) {
	    if ( visitor instanceof CodeCVisitor ) {
	        return visitor.visitTipo(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class ExprContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = CodeCParser.RULE_expr;
    }


	 
		copyFrom(ctx) {
			super.copyFrom(ctx);
		}

}


class ResiduoContext extends ExprContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	expr = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(ExprContext);
	    } else {
	        return this.getTypedRuleContext(ExprContext,i);
	    }
	};

	RES() {
	    return this.getToken(CodeCParser.RES, 0);
	};

	accept(visitor) {
	    if ( visitor instanceof CodeCVisitor ) {
	        return visitor.visitResiduo(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

CodeCParser.ResiduoContext = ResiduoContext;

class ConditionContext extends ExprContext {

    constructor(parser, ctx) {
        super(parser);
        this.operator = null;;
        super.copyFrom(ctx);
    }

	COND_LOG() {
	    return this.getToken(CodeCParser.COND_LOG, 0);
	};

	COND_MAT() {
	    return this.getToken(CodeCParser.COND_MAT, 0);
	};

	expr = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(ExprContext);
	    } else {
	        return this.getTypedRuleContext(ExprContext,i);
	    }
	};

	accept(visitor) {
	    if ( visitor instanceof CodeCVisitor ) {
	        return visitor.visitCondition(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

CodeCParser.ConditionContext = ConditionContext;

class ParensContext extends ExprContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	APARENTESIS() {
	    return this.getToken(CodeCParser.APARENTESIS, 0);
	};

	expr() {
	    return this.getTypedRuleContext(ExprContext,0);
	};

	CPARENTESIS() {
	    return this.getToken(CodeCParser.CPARENTESIS, 0);
	};

	accept(visitor) {
	    if ( visitor instanceof CodeCVisitor ) {
	        return visitor.visitParens(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

CodeCParser.ParensContext = ParensContext;

class StringContext extends ExprContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	STRING() {
	    return this.getToken(CodeCParser.STRING, 0);
	};

	accept(visitor) {
	    if ( visitor instanceof CodeCVisitor ) {
	        return visitor.visitString(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

CodeCParser.StringContext = StringContext;

class MulDivContext extends ExprContext {

    constructor(parser, ctx) {
        super(parser);
        this.op = null;;
        super.copyFrom(ctx);
    }

	expr = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(ExprContext);
	    } else {
	        return this.getTypedRuleContext(ExprContext,i);
	    }
	};

	MUL() {
	    return this.getToken(CodeCParser.MUL, 0);
	};

	DIV() {
	    return this.getToken(CodeCParser.DIV, 0);
	};

	accept(visitor) {
	    if ( visitor instanceof CodeCVisitor ) {
	        return visitor.visitMulDiv(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

CodeCParser.MulDivContext = MulDivContext;

class AddSubContext extends ExprContext {

    constructor(parser, ctx) {
        super(parser);
        this.op = null;;
        super.copyFrom(ctx);
    }

	expr = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(ExprContext);
	    } else {
	        return this.getTypedRuleContext(ExprContext,i);
	    }
	};

	ADD() {
	    return this.getToken(CodeCParser.ADD, 0);
	};

	SUB() {
	    return this.getToken(CodeCParser.SUB, 0);
	};

	accept(visitor) {
	    if ( visitor instanceof CodeCVisitor ) {
	        return visitor.visitAddSub(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

CodeCParser.AddSubContext = AddSubContext;

class CharContext extends ExprContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	CHAR() {
	    return this.getToken(CodeCParser.CHAR, 0);
	};

	accept(visitor) {
	    if ( visitor instanceof CodeCVisitor ) {
	        return visitor.visitChar(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

CodeCParser.CharContext = CharContext;

class IdContext extends ExprContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	ID() {
	    return this.getToken(CodeCParser.ID, 0);
	};

	accept(visitor) {
	    if ( visitor instanceof CodeCVisitor ) {
	        return visitor.visitId(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

CodeCParser.IdContext = IdContext;

class FloatContext extends ExprContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	FLOAT() {
	    return this.getToken(CodeCParser.FLOAT, 0);
	};

	accept(visitor) {
	    if ( visitor instanceof CodeCVisitor ) {
	        return visitor.visitFloat(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

CodeCParser.FloatContext = FloatContext;

class IntContext extends ExprContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	INT() {
	    return this.getToken(CodeCParser.INT, 0);
	};

	accept(visitor) {
	    if ( visitor instanceof CodeCVisitor ) {
	        return visitor.visitInt(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

CodeCParser.IntContext = IntContext;

class StringAnidContext extends ExprContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	expr = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(ExprContext);
	    } else {
	        return this.getTypedRuleContext(ExprContext,i);
	    }
	};

	COMA() {
	    return this.getToken(CodeCParser.COMA, 0);
	};

	accept(visitor) {
	    if ( visitor instanceof CodeCVisitor ) {
	        return visitor.visitStringAnid(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

CodeCParser.StringAnidContext = StringAnidContext;

class OrdencondicionalContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = CodeCParser.RULE_ordencondicional;
    }

	condicional() {
	    return this.getTypedRuleContext(CondicionalContext,0);
	};

	condicional_elseif = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(Condicional_elseifContext);
	    } else {
	        return this.getTypedRuleContext(Condicional_elseifContext,i);
	    }
	};

	condicional_else() {
	    return this.getTypedRuleContext(Condicional_elseContext,0);
	};

	accept(visitor) {
	    if ( visitor instanceof CodeCVisitor ) {
	        return visitor.visitOrdencondicional(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class CondicionalContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = CodeCParser.RULE_condicional;
    }

	IF() {
	    return this.getToken(CodeCParser.IF, 0);
	};

	APARENTESIS() {
	    return this.getToken(CodeCParser.APARENTESIS, 0);
	};

	expr() {
	    return this.getTypedRuleContext(ExprContext,0);
	};

	CPARENTESIS() {
	    return this.getToken(CodeCParser.CPARENTESIS, 0);
	};

	ALLAVE() {
	    return this.getToken(CodeCParser.ALLAVE, 0);
	};

	CLLAVE() {
	    return this.getToken(CodeCParser.CLLAVE, 0);
	};

	expresiones = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(ExpresionesContext);
	    } else {
	        return this.getTypedRuleContext(ExpresionesContext,i);
	    }
	};

	accept(visitor) {
	    if ( visitor instanceof CodeCVisitor ) {
	        return visitor.visitCondicional(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class Condicional_elseifContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = CodeCParser.RULE_condicional_elseif;
    }

	ELSE() {
	    return this.getToken(CodeCParser.ELSE, 0);
	};

	condicional() {
	    return this.getTypedRuleContext(CondicionalContext,0);
	};

	accept(visitor) {
	    if ( visitor instanceof CodeCVisitor ) {
	        return visitor.visitCondicional_elseif(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class Condicional_elseContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = CodeCParser.RULE_condicional_else;
    }

	ELSE() {
	    return this.getToken(CodeCParser.ELSE, 0);
	};

	ALLAVE() {
	    return this.getToken(CodeCParser.ALLAVE, 0);
	};

	CLLAVE() {
	    return this.getToken(CodeCParser.CLLAVE, 0);
	};

	expresiones = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(ExpresionesContext);
	    } else {
	        return this.getTypedRuleContext(ExpresionesContext,i);
	    }
	};

	accept(visitor) {
	    if ( visitor instanceof CodeCVisitor ) {
	        return visitor.visitCondicional_else(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class WhileContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = CodeCParser.RULE_while;
    }

	WHILE() {
	    return this.getToken(CodeCParser.WHILE, 0);
	};

	APARENTESIS() {
	    return this.getToken(CodeCParser.APARENTESIS, 0);
	};

	CPARENTESIS() {
	    return this.getToken(CodeCParser.CPARENTESIS, 0);
	};

	ALLAVE() {
	    return this.getToken(CodeCParser.ALLAVE, 0);
	};

	CLLAVE() {
	    return this.getToken(CodeCParser.CLLAVE, 0);
	};

	assignament() {
	    return this.getTypedRuleContext(AssignamentContext,0);
	};

	expr() {
	    return this.getTypedRuleContext(ExprContext,0);
	};

	expresiones = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(ExpresionesContext);
	    } else {
	        return this.getTypedRuleContext(ExpresionesContext,i);
	    }
	};

	accept(visitor) {
	    if ( visitor instanceof CodeCVisitor ) {
	        return visitor.visitWhile(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}




CodeCParser.StartContext = StartContext; 
CodeCParser.ContentContext = ContentContext; 
CodeCParser.ExpresionesContext = ExpresionesContext; 
CodeCParser.DeclaracionesContext = DeclaracionesContext; 
CodeCParser.AssignamentContext = AssignamentContext; 
CodeCParser.ImprimirContext = ImprimirContext; 
CodeCParser.TipoContext = TipoContext; 
CodeCParser.ExprContext = ExprContext; 
CodeCParser.OrdencondicionalContext = OrdencondicionalContext; 
CodeCParser.CondicionalContext = CondicionalContext; 
CodeCParser.Condicional_elseifContext = Condicional_elseifContext; 
CodeCParser.Condicional_elseContext = Condicional_elseContext; 
CodeCParser.WhileContext = WhileContext; 
