// Generated from ./grammar/CodeFile.g4 by ANTLR 4.13.1
// jshint ignore: start
import antlr4 from 'antlr4';
import CodeFileVisitor from './CodeFileVisitor.js';

const serializedATN = [4,1,51,168,2,0,7,0,2,1,7,1,2,2,7,2,2,3,7,3,2,4,7,
4,2,5,7,5,2,6,7,6,2,7,7,7,2,8,7,8,2,9,7,9,2,10,7,10,2,11,7,11,2,12,7,12,
1,0,1,0,1,0,1,0,1,0,1,0,1,1,5,1,34,8,1,10,1,12,1,37,9,1,1,2,1,2,1,2,1,2,
1,2,3,2,44,8,2,1,3,1,3,1,3,1,3,3,3,50,8,3,1,3,1,3,1,4,1,4,1,4,1,4,1,4,1,
4,1,4,1,4,3,4,62,8,4,1,4,1,4,1,4,1,4,3,4,68,8,4,1,4,3,4,71,8,4,1,5,1,5,1,
5,1,5,1,5,1,5,1,6,1,6,1,7,1,7,1,7,1,7,1,7,1,7,1,7,1,7,1,7,1,7,1,7,1,7,1,
7,1,7,1,7,1,7,3,7,97,8,7,1,7,1,7,1,7,1,7,1,7,1,7,1,7,1,7,1,7,1,7,1,7,1,7,
1,7,1,7,1,7,5,7,114,8,7,10,7,12,7,117,9,7,1,8,1,8,5,8,121,8,8,10,8,12,8,
124,9,8,1,8,3,8,127,8,8,1,9,1,9,1,9,1,9,1,9,1,9,5,9,135,8,9,10,9,12,9,138,
9,9,1,9,1,9,1,10,1,10,1,10,1,11,1,11,1,11,5,11,148,8,11,10,11,12,11,151,
9,11,1,11,1,11,1,12,1,12,1,12,1,12,1,12,1,12,5,12,161,8,12,10,12,12,12,164,
9,12,1,12,1,12,1,12,1,35,1,14,13,0,2,4,6,8,10,12,14,16,18,20,22,24,0,7,1,
0,1,5,1,0,6,7,1,0,8,10,1,0,35,36,1,0,11,14,1,0,15,22,2,0,25,25,33,34,183,
0,26,1,0,0,0,2,35,1,0,0,0,4,43,1,0,0,0,6,45,1,0,0,0,8,70,1,0,0,0,10,72,1,
0,0,0,12,78,1,0,0,0,14,96,1,0,0,0,16,118,1,0,0,0,18,128,1,0,0,0,20,141,1,
0,0,0,22,144,1,0,0,0,24,154,1,0,0,0,26,27,5,23,0,0,27,28,5,24,0,0,28,29,
5,30,0,0,29,30,3,2,1,0,30,31,5,31,0,0,31,1,1,0,0,0,32,34,3,4,2,0,33,32,1,
0,0,0,34,37,1,0,0,0,35,36,1,0,0,0,35,33,1,0,0,0,36,3,1,0,0,0,37,35,1,0,0,
0,38,44,3,6,3,0,39,44,3,8,4,0,40,44,3,10,5,0,41,44,3,16,8,0,42,44,3,24,12,
0,43,38,1,0,0,0,43,39,1,0,0,0,43,40,1,0,0,0,43,41,1,0,0,0,43,42,1,0,0,0,
44,5,1,0,0,0,45,46,3,12,6,0,46,49,5,45,0,0,47,48,5,32,0,0,48,50,3,14,7,0,
49,47,1,0,0,0,49,50,1,0,0,0,50,51,1,0,0,0,51,52,5,48,0,0,52,7,1,0,0,0,53,
54,5,45,0,0,54,55,5,32,0,0,55,56,3,14,7,0,56,57,5,48,0,0,57,71,1,0,0,0,58,
59,5,45,0,0,59,61,7,0,0,0,60,62,3,14,7,0,61,60,1,0,0,0,61,62,1,0,0,0,62,
63,1,0,0,0,63,71,5,48,0,0,64,65,5,45,0,0,65,67,7,1,0,0,66,68,3,14,7,0,67,
66,1,0,0,0,67,68,1,0,0,0,68,69,1,0,0,0,69,71,5,48,0,0,70,53,1,0,0,0,70,58,
1,0,0,0,70,64,1,0,0,0,71,9,1,0,0,0,72,73,5,37,0,0,73,74,5,28,0,0,74,75,3,
14,7,0,75,76,5,29,0,0,76,77,5,48,0,0,77,11,1,0,0,0,78,79,7,2,0,0,79,13,1,
0,0,0,80,81,6,7,-1,0,81,82,5,28,0,0,82,83,3,14,7,0,83,84,5,29,0,0,84,97,
1,0,0,0,85,86,5,27,0,0,86,97,3,14,7,11,87,88,7,3,0,0,88,97,3,14,7,10,89,
97,7,4,0,0,90,97,7,5,0,0,91,97,5,44,0,0,92,97,5,45,0,0,93,97,5,43,0,0,94,
97,5,46,0,0,95,97,5,47,0,0,96,80,1,0,0,0,96,85,1,0,0,0,96,87,1,0,0,0,96,
89,1,0,0,0,96,90,1,0,0,0,96,91,1,0,0,0,96,92,1,0,0,0,96,93,1,0,0,0,96,94,
1,0,0,0,96,95,1,0,0,0,97,115,1,0,0,0,98,99,10,14,0,0,99,100,7,6,0,0,100,
114,3,14,7,15,101,102,10,13,0,0,102,103,7,3,0,0,103,114,3,14,7,14,104,105,
10,12,0,0,105,106,5,26,0,0,106,114,3,14,7,13,107,108,10,7,0,0,108,109,7,
4,0,0,109,114,3,14,7,8,110,111,10,6,0,0,111,112,7,5,0,0,112,114,3,14,7,7,
113,98,1,0,0,0,113,101,1,0,0,0,113,104,1,0,0,0,113,107,1,0,0,0,113,110,1,
0,0,0,114,117,1,0,0,0,115,113,1,0,0,0,115,116,1,0,0,0,116,15,1,0,0,0,117,
115,1,0,0,0,118,122,3,18,9,0,119,121,3,20,10,0,120,119,1,0,0,0,121,124,1,
0,0,0,122,120,1,0,0,0,122,123,1,0,0,0,123,126,1,0,0,0,124,122,1,0,0,0,125,
127,3,22,11,0,126,125,1,0,0,0,126,127,1,0,0,0,127,17,1,0,0,0,128,129,5,38,
0,0,129,130,5,28,0,0,130,131,3,14,7,0,131,132,5,29,0,0,132,136,5,30,0,0,
133,135,3,4,2,0,134,133,1,0,0,0,135,138,1,0,0,0,136,134,1,0,0,0,136,137,
1,0,0,0,137,139,1,0,0,0,138,136,1,0,0,0,139,140,5,31,0,0,140,19,1,0,0,0,
141,142,5,39,0,0,142,143,3,18,9,0,143,21,1,0,0,0,144,145,5,39,0,0,145,149,
5,30,0,0,146,148,3,4,2,0,147,146,1,0,0,0,148,151,1,0,0,0,149,147,1,0,0,0,
149,150,1,0,0,0,150,152,1,0,0,0,151,149,1,0,0,0,152,153,5,31,0,0,153,23,
1,0,0,0,154,155,5,40,0,0,155,156,5,28,0,0,156,157,3,14,7,0,157,158,5,29,
0,0,158,162,5,30,0,0,159,161,3,4,2,0,160,159,1,0,0,0,161,164,1,0,0,0,162,
160,1,0,0,0,162,163,1,0,0,0,163,165,1,0,0,0,164,162,1,0,0,0,165,166,5,31,
0,0,166,25,1,0,0,0,14,35,43,49,61,67,70,96,113,115,122,126,136,149,162];


const atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

const decisionsToDFA = atn.decisionToState.map( (ds, index) => new antlr4.dfa.DFA(ds, index) );

const sharedContextCache = new antlr4.atn.PredictionContextCache();

export default class CodeFileParser extends antlr4.Parser {

    static grammarFileName = "CodeFile.g4";
    static literalNames = [ null, "'+='", "'-='", "'*='", "'/='", "'%='", 
                            "'--'", "'++'", "'margit'", "'radahn'", "'godrick'", 
                            "'<'", "'>'", "'<='", "'>='", "'=='", "'!='", 
                            "'&&'", "'||'", "'true'", "'false'", "'!true'", 
                            "'!false'", "'iniciar'", "'codigo'", "'%'", 
                            "','", "'!'", "'('", "')'", "'{'", "'}'", "'='", 
                            "'*'", "'/'", "'+'", "'-'", "'MostrarMensaje'", 
                            "'verificar'", "'contrario'", "'repetir'", null, 
                            null, null, null, null, null, null, "';'" ];
    static symbolicNames = [ null, null, null, null, null, null, null, null, 
                             null, null, null, null, null, null, null, null, 
                             null, null, null, null, null, null, null, "INSERT", 
                             "CODE", "MOD", "COMA", "NEGAN", "APARENTESIS", 
                             "CPARENTESIS", "ALLAVE", "CLLAVE", "EQUALS", 
                             "MUL", "DIV", "ADD", "SUB", "PRINT", "IF", 
                             "ELSE", "WHILE", "COND_MAT", "COND_LOG", "STRING", 
                             "INT", "ID", "FLOAT", "CHAR", "SEMI", "LINE_COMMENT", 
                             "BLOCK_COMMENT", "WS" ];
    static ruleNames = [ "start", "content", "expresiones", "declaraciones", 
                         "assignament", "imprimir", "tipo", "expr", "ordencondicional", 
                         "condicional", "condicional_elseif", "condicional_else", 
                         "while" ];

    constructor(input) {
        super(input);
        this._interp = new antlr4.atn.ParserATNSimulator(this, atn, decisionsToDFA, sharedContextCache);
        this.ruleNames = CodeFileParser.ruleNames;
        this.literalNames = CodeFileParser.literalNames;
        this.symbolicNames = CodeFileParser.symbolicNames;
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
    			return this.precpred(this._ctx, 14);
    		case 1:
    			return this.precpred(this._ctx, 13);
    		case 2:
    			return this.precpred(this._ctx, 12);
    		case 3:
    			return this.precpred(this._ctx, 7);
    		case 4:
    			return this.precpred(this._ctx, 6);
    		default:
    			throw "No predicate with index:" + predIndex;
    	}
    };




	start() {
	    let localctx = new StartContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 0, CodeFileParser.RULE_start);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 26;
	        this.match(CodeFileParser.INSERT);
	        this.state = 27;
	        this.match(CodeFileParser.CODE);
	        this.state = 28;
	        this.match(CodeFileParser.ALLAVE);
	        this.state = 29;
	        this.content();
	        this.state = 30;
	        this.match(CodeFileParser.CLLAVE);
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
	    this.enterRule(localctx, 2, CodeFileParser.RULE_content);
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
	    this.enterRule(localctx, 4, CodeFileParser.RULE_expresiones);
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
	        case 45:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 39;
	            this.assignament();
	            break;
	        case 37:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 40;
	            this.imprimir();
	            break;
	        case 38:
	            this.enterOuterAlt(localctx, 4);
	            this.state = 41;
	            this.ordencondicional();
	            break;
	        case 40:
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
	    this.enterRule(localctx, 6, CodeFileParser.RULE_declaraciones);
	    var _la = 0;
	    try {
	        localctx = new DeclaracionContext(this, localctx);
	        this.enterOuterAlt(localctx, 1);
	        this.state = 45;
	        this.tipo();
	        this.state = 46;
	        this.match(CodeFileParser.ID);
	        this.state = 49;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===32) {
	            this.state = 47;
	            this.match(CodeFileParser.EQUALS);
	            this.state = 48;
	            this.expr(0);
	        }

	        this.state = 51;
	        this.match(CodeFileParser.SEMI);
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
	    this.enterRule(localctx, 8, CodeFileParser.RULE_assignament);
	    var _la = 0;
	    try {
	        this.state = 70;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,5,this._ctx);
	        switch(la_) {
	        case 1:
	            localctx = new AsignacionesContext(this, localctx);
	            this.enterOuterAlt(localctx, 1);
	            this.state = 53;
	            this.match(CodeFileParser.ID);
	            this.state = 54;
	            this.match(CodeFileParser.EQUALS);
	            this.state = 55;
	            this.expr(0);
	            this.state = 56;
	            this.match(CodeFileParser.SEMI);
	            break;

	        case 2:
	            localctx = new AsignaContext(this, localctx);
	            this.enterOuterAlt(localctx, 2);
	            this.state = 58;
	            this.match(CodeFileParser.ID);
	            this.state = 59;
	            localctx.com = this._input.LT(1);
	            _la = this._input.LA(1);
	            if(!((((_la) & ~0x1f) === 0 && ((1 << _la) & 62) !== 0))) {
	                localctx.com = this._errHandler.recoverInline(this);
	            }
	            else {
	            	this._errHandler.reportMatch(this);
	                this.consume();
	            }
	            this.state = 61;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if((((_la) & ~0x1f) === 0 && ((1 << _la) & 411039744) !== 0) || ((((_la - 35)) & ~0x1f) === 0 && ((1 << (_la - 35)) & 7939) !== 0)) {
	                this.state = 60;
	                this.expr(0);
	            }

	            this.state = 63;
	            this.match(CodeFileParser.SEMI);
	            break;

	        case 3:
	            localctx = new IncrementoContext(this, localctx);
	            this.enterOuterAlt(localctx, 3);
	            this.state = 64;
	            this.match(CodeFileParser.ID);
	            this.state = 65;
	            localctx.com = this._input.LT(1);
	            _la = this._input.LA(1);
	            if(!(_la===6 || _la===7)) {
	                localctx.com = this._errHandler.recoverInline(this);
	            }
	            else {
	            	this._errHandler.reportMatch(this);
	                this.consume();
	            }
	            this.state = 67;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if((((_la) & ~0x1f) === 0 && ((1 << _la) & 411039744) !== 0) || ((((_la - 35)) & ~0x1f) === 0 && ((1 << (_la - 35)) & 7939) !== 0)) {
	                this.state = 66;
	                this.expr(0);
	            }

	            this.state = 69;
	            this.match(CodeFileParser.SEMI);
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
	    this.enterRule(localctx, 10, CodeFileParser.RULE_imprimir);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 72;
	        this.match(CodeFileParser.PRINT);
	        this.state = 73;
	        this.match(CodeFileParser.APARENTESIS);
	        this.state = 74;
	        this.expr(0);
	        this.state = 75;
	        this.match(CodeFileParser.CPARENTESIS);
	        this.state = 76;
	        this.match(CodeFileParser.SEMI);
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
	    this.enterRule(localctx, 12, CodeFileParser.RULE_tipo);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 78;
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
	    this.enterRecursionRule(localctx, 14, CodeFileParser.RULE_expr, _p);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 96;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 28:
	            localctx = new ParensContext(this, localctx);
	            this._ctx = localctx;
	            _prevctx = localctx;

	            this.state = 81;
	            this.match(CodeFileParser.APARENTESIS);
	            this.state = 82;
	            this.expr(0);
	            this.state = 83;
	            this.match(CodeFileParser.CPARENTESIS);
	            break;
	        case 27:
	            localctx = new NegacionExprContext(this, localctx);
	            this._ctx = localctx;
	            _prevctx = localctx;
	            this.state = 85;
	            this.match(CodeFileParser.NEGAN);
	            this.state = 86;
	            this.expr(11);
	            break;
	        case 35:
	        case 36:
	            localctx = new SignNumberContext(this, localctx);
	            this._ctx = localctx;
	            _prevctx = localctx;
	            this.state = 87;
	            localctx.op = this._input.LT(1);
	            _la = this._input.LA(1);
	            if(!(_la===35 || _la===36)) {
	                localctx.op = this._errHandler.recoverInline(this);
	            }
	            else {
	            	this._errHandler.reportMatch(this);
	                this.consume();
	            }
	            this.state = 88;
	            this.expr(10);
	            break;
	        case 11:
	        case 12:
	        case 13:
	        case 14:
	            localctx = new ConditionContext(this, localctx);
	            this._ctx = localctx;
	            _prevctx = localctx;
	            this.state = 89;
	            localctx.operator = this._input.LT(1);
	            _la = this._input.LA(1);
	            if(!((((_la) & ~0x1f) === 0 && ((1 << _la) & 30720) !== 0))) {
	                localctx.operator = this._errHandler.recoverInline(this);
	            }
	            else {
	            	this._errHandler.reportMatch(this);
	                this.consume();
	            }
	            break;
	        case 15:
	        case 16:
	        case 17:
	        case 18:
	        case 19:
	        case 20:
	        case 21:
	        case 22:
	            localctx = new ConditionContext(this, localctx);
	            this._ctx = localctx;
	            _prevctx = localctx;
	            this.state = 90;
	            localctx.operator = this._input.LT(1);
	            _la = this._input.LA(1);
	            if(!((((_la) & ~0x1f) === 0 && ((1 << _la) & 8355840) !== 0))) {
	                localctx.operator = this._errHandler.recoverInline(this);
	            }
	            else {
	            	this._errHandler.reportMatch(this);
	                this.consume();
	            }
	            break;
	        case 44:
	            localctx = new IntContext(this, localctx);
	            this._ctx = localctx;
	            _prevctx = localctx;
	            this.state = 91;
	            this.match(CodeFileParser.INT);
	            break;
	        case 45:
	            localctx = new IdContext(this, localctx);
	            this._ctx = localctx;
	            _prevctx = localctx;
	            this.state = 92;
	            this.match(CodeFileParser.ID);
	            break;
	        case 43:
	            localctx = new StringContext(this, localctx);
	            this._ctx = localctx;
	            _prevctx = localctx;
	            this.state = 93;
	            this.match(CodeFileParser.STRING);
	            break;
	        case 46:
	            localctx = new FloatContext(this, localctx);
	            this._ctx = localctx;
	            _prevctx = localctx;
	            this.state = 94;
	            this.match(CodeFileParser.FLOAT);
	            break;
	        case 47:
	            localctx = new CharContext(this, localctx);
	            this._ctx = localctx;
	            _prevctx = localctx;
	            this.state = 95;
	            this.match(CodeFileParser.CHAR);
	            break;
	        default:
	            throw new antlr4.error.NoViableAltException(this);
	        }
	        this._ctx.stop = this._input.LT(-1);
	        this.state = 115;
	        this._errHandler.sync(this);
	        var _alt = this._interp.adaptivePredict(this._input,8,this._ctx)
	        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
	            if(_alt===1) {
	                if(this._parseListeners!==null) {
	                    this.triggerExitRuleEvent();
	                }
	                _prevctx = localctx;
	                this.state = 113;
	                this._errHandler.sync(this);
	                var la_ = this._interp.adaptivePredict(this._input,7,this._ctx);
	                switch(la_) {
	                case 1:
	                    localctx = new MulDivContext(this, new ExprContext(this, _parentctx, _parentState));
	                    this.pushNewRecursionContext(localctx, _startState, CodeFileParser.RULE_expr);
	                    this.state = 98;
	                    if (!( this.precpred(this._ctx, 14))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 14)");
	                    }
	                    this.state = 99;
	                    localctx.op = this._input.LT(1);
	                    _la = this._input.LA(1);
	                    if(!(((((_la - 25)) & ~0x1f) === 0 && ((1 << (_la - 25)) & 769) !== 0))) {
	                        localctx.op = this._errHandler.recoverInline(this);
	                    }
	                    else {
	                    	this._errHandler.reportMatch(this);
	                        this.consume();
	                    }
	                    this.state = 100;
	                    this.expr(15);
	                    break;

	                case 2:
	                    localctx = new AddSubContext(this, new ExprContext(this, _parentctx, _parentState));
	                    this.pushNewRecursionContext(localctx, _startState, CodeFileParser.RULE_expr);
	                    this.state = 101;
	                    if (!( this.precpred(this._ctx, 13))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 13)");
	                    }
	                    this.state = 102;
	                    localctx.op = this._input.LT(1);
	                    _la = this._input.LA(1);
	                    if(!(_la===35 || _la===36)) {
	                        localctx.op = this._errHandler.recoverInline(this);
	                    }
	                    else {
	                    	this._errHandler.reportMatch(this);
	                        this.consume();
	                    }
	                    this.state = 103;
	                    this.expr(14);
	                    break;

	                case 3:
	                    localctx = new StringAnidContext(this, new ExprContext(this, _parentctx, _parentState));
	                    this.pushNewRecursionContext(localctx, _startState, CodeFileParser.RULE_expr);
	                    this.state = 104;
	                    if (!( this.precpred(this._ctx, 12))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 12)");
	                    }
	                    this.state = 105;
	                    this.match(CodeFileParser.COMA);
	                    this.state = 106;
	                    this.expr(13);
	                    break;

	                case 4:
	                    localctx = new ConditionContext(this, new ExprContext(this, _parentctx, _parentState));
	                    this.pushNewRecursionContext(localctx, _startState, CodeFileParser.RULE_expr);
	                    this.state = 107;
	                    if (!( this.precpred(this._ctx, 7))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 7)");
	                    }
	                    this.state = 108;
	                    localctx.operator = this._input.LT(1);
	                    _la = this._input.LA(1);
	                    if(!((((_la) & ~0x1f) === 0 && ((1 << _la) & 30720) !== 0))) {
	                        localctx.operator = this._errHandler.recoverInline(this);
	                    }
	                    else {
	                    	this._errHandler.reportMatch(this);
	                        this.consume();
	                    }
	                    this.state = 109;
	                    this.expr(8);
	                    break;

	                case 5:
	                    localctx = new ConditionContext(this, new ExprContext(this, _parentctx, _parentState));
	                    this.pushNewRecursionContext(localctx, _startState, CodeFileParser.RULE_expr);
	                    this.state = 110;
	                    if (!( this.precpred(this._ctx, 6))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 6)");
	                    }
	                    this.state = 111;
	                    localctx.operator = this._input.LT(1);
	                    _la = this._input.LA(1);
	                    if(!((((_la) & ~0x1f) === 0 && ((1 << _la) & 8355840) !== 0))) {
	                        localctx.operator = this._errHandler.recoverInline(this);
	                    }
	                    else {
	                    	this._errHandler.reportMatch(this);
	                        this.consume();
	                    }
	                    this.state = 112;
	                    this.expr(7);
	                    break;

	                } 
	            }
	            this.state = 117;
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
	    this.enterRule(localctx, 16, CodeFileParser.RULE_ordencondicional);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 118;
	        this.condicional();
	        this.state = 122;
	        this._errHandler.sync(this);
	        var _alt = this._interp.adaptivePredict(this._input,9,this._ctx)
	        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
	            if(_alt===1) {
	                this.state = 119;
	                this.condicional_elseif(); 
	            }
	            this.state = 124;
	            this._errHandler.sync(this);
	            _alt = this._interp.adaptivePredict(this._input,9,this._ctx);
	        }

	        this.state = 126;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===39) {
	            this.state = 125;
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
	    this.enterRule(localctx, 18, CodeFileParser.RULE_condicional);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 128;
	        this.match(CodeFileParser.IF);
	        this.state = 129;
	        this.match(CodeFileParser.APARENTESIS);
	        this.state = 130;
	        this.expr(0);
	        this.state = 131;
	        this.match(CodeFileParser.CPARENTESIS);
	        this.state = 132;
	        this.match(CodeFileParser.ALLAVE);
	        this.state = 136;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while((((_la) & ~0x1f) === 0 && ((1 << _la) & 1792) !== 0) || ((((_la - 37)) & ~0x1f) === 0 && ((1 << (_la - 37)) & 267) !== 0)) {
	            this.state = 133;
	            this.expresiones();
	            this.state = 138;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 139;
	        this.match(CodeFileParser.CLLAVE);
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
	    this.enterRule(localctx, 20, CodeFileParser.RULE_condicional_elseif);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 141;
	        this.match(CodeFileParser.ELSE);
	        this.state = 142;
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
	    this.enterRule(localctx, 22, CodeFileParser.RULE_condicional_else);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 144;
	        this.match(CodeFileParser.ELSE);
	        this.state = 145;
	        this.match(CodeFileParser.ALLAVE);
	        this.state = 149;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while((((_la) & ~0x1f) === 0 && ((1 << _la) & 1792) !== 0) || ((((_la - 37)) & ~0x1f) === 0 && ((1 << (_la - 37)) & 267) !== 0)) {
	            this.state = 146;
	            this.expresiones();
	            this.state = 151;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 152;
	        this.match(CodeFileParser.CLLAVE);
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
	    this.enterRule(localctx, 24, CodeFileParser.RULE_while);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 154;
	        this.match(CodeFileParser.WHILE);
	        this.state = 155;
	        this.match(CodeFileParser.APARENTESIS);

	        this.state = 156;
	        this.expr(0);
	        this.state = 157;
	        this.match(CodeFileParser.CPARENTESIS);
	        this.state = 158;
	        this.match(CodeFileParser.ALLAVE);
	        this.state = 162;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while((((_la) & ~0x1f) === 0 && ((1 << _la) & 1792) !== 0) || ((((_la - 37)) & ~0x1f) === 0 && ((1 << (_la - 37)) & 267) !== 0)) {
	            this.state = 159;
	            this.expresiones();
	            this.state = 164;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 165;
	        this.match(CodeFileParser.CLLAVE);
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

CodeFileParser.EOF = antlr4.Token.EOF;
CodeFileParser.T__0 = 1;
CodeFileParser.T__1 = 2;
CodeFileParser.T__2 = 3;
CodeFileParser.T__3 = 4;
CodeFileParser.T__4 = 5;
CodeFileParser.T__5 = 6;
CodeFileParser.T__6 = 7;
CodeFileParser.T__7 = 8;
CodeFileParser.T__8 = 9;
CodeFileParser.T__9 = 10;
CodeFileParser.T__10 = 11;
CodeFileParser.T__11 = 12;
CodeFileParser.T__12 = 13;
CodeFileParser.T__13 = 14;
CodeFileParser.T__14 = 15;
CodeFileParser.T__15 = 16;
CodeFileParser.T__16 = 17;
CodeFileParser.T__17 = 18;
CodeFileParser.T__18 = 19;
CodeFileParser.T__19 = 20;
CodeFileParser.T__20 = 21;
CodeFileParser.T__21 = 22;
CodeFileParser.INSERT = 23;
CodeFileParser.CODE = 24;
CodeFileParser.MOD = 25;
CodeFileParser.COMA = 26;
CodeFileParser.NEGAN = 27;
CodeFileParser.APARENTESIS = 28;
CodeFileParser.CPARENTESIS = 29;
CodeFileParser.ALLAVE = 30;
CodeFileParser.CLLAVE = 31;
CodeFileParser.EQUALS = 32;
CodeFileParser.MUL = 33;
CodeFileParser.DIV = 34;
CodeFileParser.ADD = 35;
CodeFileParser.SUB = 36;
CodeFileParser.PRINT = 37;
CodeFileParser.IF = 38;
CodeFileParser.ELSE = 39;
CodeFileParser.WHILE = 40;
CodeFileParser.COND_MAT = 41;
CodeFileParser.COND_LOG = 42;
CodeFileParser.STRING = 43;
CodeFileParser.INT = 44;
CodeFileParser.ID = 45;
CodeFileParser.FLOAT = 46;
CodeFileParser.CHAR = 47;
CodeFileParser.SEMI = 48;
CodeFileParser.LINE_COMMENT = 49;
CodeFileParser.BLOCK_COMMENT = 50;
CodeFileParser.WS = 51;

CodeFileParser.RULE_start = 0;
CodeFileParser.RULE_content = 1;
CodeFileParser.RULE_expresiones = 2;
CodeFileParser.RULE_declaraciones = 3;
CodeFileParser.RULE_assignament = 4;
CodeFileParser.RULE_imprimir = 5;
CodeFileParser.RULE_tipo = 6;
CodeFileParser.RULE_expr = 7;
CodeFileParser.RULE_ordencondicional = 8;
CodeFileParser.RULE_condicional = 9;
CodeFileParser.RULE_condicional_elseif = 10;
CodeFileParser.RULE_condicional_else = 11;
CodeFileParser.RULE_while = 12;

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
        this.ruleIndex = CodeFileParser.RULE_start;
    }

	INSERT() {
	    return this.getToken(CodeFileParser.INSERT, 0);
	};

	CODE() {
	    return this.getToken(CodeFileParser.CODE, 0);
	};

	ALLAVE() {
	    return this.getToken(CodeFileParser.ALLAVE, 0);
	};

	content() {
	    return this.getTypedRuleContext(ContentContext,0);
	};

	CLLAVE() {
	    return this.getToken(CodeFileParser.CLLAVE, 0);
	};

	accept(visitor) {
	    if ( visitor instanceof CodeFileVisitor ) {
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
        this.ruleIndex = CodeFileParser.RULE_content;
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
	    if ( visitor instanceof CodeFileVisitor ) {
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
        this.ruleIndex = CodeFileParser.RULE_expresiones;
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
	    if ( visitor instanceof CodeFileVisitor ) {
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
        this.ruleIndex = CodeFileParser.RULE_declaraciones;
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
	    return this.getToken(CodeFileParser.ID, 0);
	};

	SEMI() {
	    return this.getToken(CodeFileParser.SEMI, 0);
	};

	EQUALS() {
	    return this.getToken(CodeFileParser.EQUALS, 0);
	};

	expr() {
	    return this.getTypedRuleContext(ExprContext,0);
	};

	accept(visitor) {
	    if ( visitor instanceof CodeFileVisitor ) {
	        return visitor.visitDeclaracion(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

CodeFileParser.DeclaracionContext = DeclaracionContext;

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
        this.ruleIndex = CodeFileParser.RULE_assignament;
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
	    return this.getToken(CodeFileParser.ID, 0);
	};

	SEMI() {
	    return this.getToken(CodeFileParser.SEMI, 0);
	};

	expr() {
	    return this.getTypedRuleContext(ExprContext,0);
	};

	accept(visitor) {
	    if ( visitor instanceof CodeFileVisitor ) {
	        return visitor.visitAsigna(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

CodeFileParser.AsignaContext = AsignaContext;

class IncrementoContext extends AssignamentContext {

    constructor(parser, ctx) {
        super(parser);
        this.com = null;;
        super.copyFrom(ctx);
    }

	ID() {
	    return this.getToken(CodeFileParser.ID, 0);
	};

	SEMI() {
	    return this.getToken(CodeFileParser.SEMI, 0);
	};

	expr() {
	    return this.getTypedRuleContext(ExprContext,0);
	};

	accept(visitor) {
	    if ( visitor instanceof CodeFileVisitor ) {
	        return visitor.visitIncremento(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

CodeFileParser.IncrementoContext = IncrementoContext;

class AsignacionesContext extends AssignamentContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	ID() {
	    return this.getToken(CodeFileParser.ID, 0);
	};

	EQUALS() {
	    return this.getToken(CodeFileParser.EQUALS, 0);
	};

	expr() {
	    return this.getTypedRuleContext(ExprContext,0);
	};

	SEMI() {
	    return this.getToken(CodeFileParser.SEMI, 0);
	};

	accept(visitor) {
	    if ( visitor instanceof CodeFileVisitor ) {
	        return visitor.visitAsignaciones(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

CodeFileParser.AsignacionesContext = AsignacionesContext;

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
        this.ruleIndex = CodeFileParser.RULE_imprimir;
    }

	PRINT() {
	    return this.getToken(CodeFileParser.PRINT, 0);
	};

	APARENTESIS() {
	    return this.getToken(CodeFileParser.APARENTESIS, 0);
	};

	expr() {
	    return this.getTypedRuleContext(ExprContext,0);
	};

	CPARENTESIS() {
	    return this.getToken(CodeFileParser.CPARENTESIS, 0);
	};

	SEMI() {
	    return this.getToken(CodeFileParser.SEMI, 0);
	};

	accept(visitor) {
	    if ( visitor instanceof CodeFileVisitor ) {
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
        this.ruleIndex = CodeFileParser.RULE_tipo;
    }


	accept(visitor) {
	    if ( visitor instanceof CodeFileVisitor ) {
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
        this.ruleIndex = CodeFileParser.RULE_expr;
    }


	 
		copyFrom(ctx) {
			super.copyFrom(ctx);
		}

}


class ParensContext extends ExprContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	APARENTESIS() {
	    return this.getToken(CodeFileParser.APARENTESIS, 0);
	};

	expr() {
	    return this.getTypedRuleContext(ExprContext,0);
	};

	CPARENTESIS() {
	    return this.getToken(CodeFileParser.CPARENTESIS, 0);
	};

	accept(visitor) {
	    if ( visitor instanceof CodeFileVisitor ) {
	        return visitor.visitParens(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

CodeFileParser.ParensContext = ParensContext;

class ConditionContext extends ExprContext {

    constructor(parser, ctx) {
        super(parser);
        this.operator = null;;
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

	accept(visitor) {
	    if ( visitor instanceof CodeFileVisitor ) {
	        return visitor.visitCondition(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

CodeFileParser.ConditionContext = ConditionContext;

class SignNumberContext extends ExprContext {

    constructor(parser, ctx) {
        super(parser);
        this.op = null;;
        super.copyFrom(ctx);
    }

	expr() {
	    return this.getTypedRuleContext(ExprContext,0);
	};

	ADD() {
	    return this.getToken(CodeFileParser.ADD, 0);
	};

	SUB() {
	    return this.getToken(CodeFileParser.SUB, 0);
	};

	accept(visitor) {
	    if ( visitor instanceof CodeFileVisitor ) {
	        return visitor.visitSignNumber(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

CodeFileParser.SignNumberContext = SignNumberContext;

class StringContext extends ExprContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	STRING() {
	    return this.getToken(CodeFileParser.STRING, 0);
	};

	accept(visitor) {
	    if ( visitor instanceof CodeFileVisitor ) {
	        return visitor.visitString(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

CodeFileParser.StringContext = StringContext;

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
	    return this.getToken(CodeFileParser.MUL, 0);
	};

	DIV() {
	    return this.getToken(CodeFileParser.DIV, 0);
	};

	MOD() {
	    return this.getToken(CodeFileParser.MOD, 0);
	};

	accept(visitor) {
	    if ( visitor instanceof CodeFileVisitor ) {
	        return visitor.visitMulDiv(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

CodeFileParser.MulDivContext = MulDivContext;

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
	    return this.getToken(CodeFileParser.ADD, 0);
	};

	SUB() {
	    return this.getToken(CodeFileParser.SUB, 0);
	};

	accept(visitor) {
	    if ( visitor instanceof CodeFileVisitor ) {
	        return visitor.visitAddSub(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

CodeFileParser.AddSubContext = AddSubContext;

class CharContext extends ExprContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	CHAR() {
	    return this.getToken(CodeFileParser.CHAR, 0);
	};

	accept(visitor) {
	    if ( visitor instanceof CodeFileVisitor ) {
	        return visitor.visitChar(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

CodeFileParser.CharContext = CharContext;

class IdContext extends ExprContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	ID() {
	    return this.getToken(CodeFileParser.ID, 0);
	};

	accept(visitor) {
	    if ( visitor instanceof CodeFileVisitor ) {
	        return visitor.visitId(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

CodeFileParser.IdContext = IdContext;

class FloatContext extends ExprContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	FLOAT() {
	    return this.getToken(CodeFileParser.FLOAT, 0);
	};

	accept(visitor) {
	    if ( visitor instanceof CodeFileVisitor ) {
	        return visitor.visitFloat(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

CodeFileParser.FloatContext = FloatContext;

class NegacionExprContext extends ExprContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	NEGAN() {
	    return this.getToken(CodeFileParser.NEGAN, 0);
	};

	expr() {
	    return this.getTypedRuleContext(ExprContext,0);
	};

	accept(visitor) {
	    if ( visitor instanceof CodeFileVisitor ) {
	        return visitor.visitNegacionExpr(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

CodeFileParser.NegacionExprContext = NegacionExprContext;

class IntContext extends ExprContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	INT() {
	    return this.getToken(CodeFileParser.INT, 0);
	};

	accept(visitor) {
	    if ( visitor instanceof CodeFileVisitor ) {
	        return visitor.visitInt(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

CodeFileParser.IntContext = IntContext;

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
	    return this.getToken(CodeFileParser.COMA, 0);
	};

	accept(visitor) {
	    if ( visitor instanceof CodeFileVisitor ) {
	        return visitor.visitStringAnid(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

CodeFileParser.StringAnidContext = StringAnidContext;

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
        this.ruleIndex = CodeFileParser.RULE_ordencondicional;
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
	    if ( visitor instanceof CodeFileVisitor ) {
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
        this.ruleIndex = CodeFileParser.RULE_condicional;
    }

	IF() {
	    return this.getToken(CodeFileParser.IF, 0);
	};

	APARENTESIS() {
	    return this.getToken(CodeFileParser.APARENTESIS, 0);
	};

	expr() {
	    return this.getTypedRuleContext(ExprContext,0);
	};

	CPARENTESIS() {
	    return this.getToken(CodeFileParser.CPARENTESIS, 0);
	};

	ALLAVE() {
	    return this.getToken(CodeFileParser.ALLAVE, 0);
	};

	CLLAVE() {
	    return this.getToken(CodeFileParser.CLLAVE, 0);
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
	    if ( visitor instanceof CodeFileVisitor ) {
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
        this.ruleIndex = CodeFileParser.RULE_condicional_elseif;
    }

	ELSE() {
	    return this.getToken(CodeFileParser.ELSE, 0);
	};

	condicional() {
	    return this.getTypedRuleContext(CondicionalContext,0);
	};

	accept(visitor) {
	    if ( visitor instanceof CodeFileVisitor ) {
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
        this.ruleIndex = CodeFileParser.RULE_condicional_else;
    }

	ELSE() {
	    return this.getToken(CodeFileParser.ELSE, 0);
	};

	ALLAVE() {
	    return this.getToken(CodeFileParser.ALLAVE, 0);
	};

	CLLAVE() {
	    return this.getToken(CodeFileParser.CLLAVE, 0);
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
	    if ( visitor instanceof CodeFileVisitor ) {
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
        this.ruleIndex = CodeFileParser.RULE_while;
    }

	WHILE() {
	    return this.getToken(CodeFileParser.WHILE, 0);
	};

	APARENTESIS() {
	    return this.getToken(CodeFileParser.APARENTESIS, 0);
	};

	CPARENTESIS() {
	    return this.getToken(CodeFileParser.CPARENTESIS, 0);
	};

	ALLAVE() {
	    return this.getToken(CodeFileParser.ALLAVE, 0);
	};

	CLLAVE() {
	    return this.getToken(CodeFileParser.CLLAVE, 0);
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
	    if ( visitor instanceof CodeFileVisitor ) {
	        return visitor.visitWhile(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}




CodeFileParser.StartContext = StartContext; 
CodeFileParser.ContentContext = ContentContext; 
CodeFileParser.ExpresionesContext = ExpresionesContext; 
CodeFileParser.DeclaracionesContext = DeclaracionesContext; 
CodeFileParser.AssignamentContext = AssignamentContext; 
CodeFileParser.ImprimirContext = ImprimirContext; 
CodeFileParser.TipoContext = TipoContext; 
CodeFileParser.ExprContext = ExprContext; 
CodeFileParser.OrdencondicionalContext = OrdencondicionalContext; 
CodeFileParser.CondicionalContext = CondicionalContext; 
CodeFileParser.Condicional_elseifContext = Condicional_elseifContext; 
CodeFileParser.Condicional_elseContext = Condicional_elseContext; 
CodeFileParser.WhileContext = WhileContext; 
