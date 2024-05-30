// Generated from ./grammar/CVtoJasmin.g4 by ANTLR 4.13.1
// jshint ignore: start
import antlr4 from 'antlr4';
import CVtoJasminVisitor from './CVtoJasminVisitor.js';

const serializedATN = [4,1,49,162,2,0,7,0,2,1,7,1,2,2,7,2,2,3,7,3,2,4,7,
4,2,5,7,5,2,6,7,6,2,7,7,7,2,8,7,8,2,9,7,9,2,10,7,10,2,11,7,11,2,12,7,12,
1,0,1,0,1,0,1,0,1,0,1,0,1,1,5,1,34,8,1,10,1,12,1,37,9,1,1,2,1,2,1,2,1,2,
1,2,3,2,44,8,2,1,3,1,3,1,3,1,3,3,3,50,8,3,1,3,1,3,1,4,1,4,1,4,1,4,1,4,1,
4,1,4,1,4,3,4,62,8,4,1,4,1,4,1,4,1,4,3,4,68,8,4,1,4,3,4,71,8,4,1,5,1,5,1,
5,1,5,1,5,1,5,1,6,1,6,1,7,1,7,1,7,1,7,1,7,1,7,1,7,1,7,1,7,1,7,1,7,1,7,1,
7,3,7,94,8,7,1,7,1,7,1,7,1,7,1,7,1,7,1,7,1,7,1,7,1,7,1,7,1,7,5,7,108,8,7,
10,7,12,7,111,9,7,1,8,1,8,5,8,115,8,8,10,8,12,8,118,9,8,1,8,3,8,121,8,8,
1,9,1,9,1,9,1,9,1,9,1,9,5,9,129,8,9,10,9,12,9,132,9,9,1,9,1,9,1,10,1,10,
1,10,1,11,1,11,1,11,5,11,142,8,11,10,11,12,11,145,9,11,1,11,1,11,1,12,1,
12,1,12,1,12,1,12,1,12,5,12,155,8,12,10,12,12,12,158,9,12,1,12,1,12,1,12,
1,35,1,14,13,0,2,4,6,8,10,12,14,16,18,20,22,24,0,7,1,0,1,5,1,0,6,7,1,0,8,
10,1,0,33,34,1,0,11,18,2,0,23,23,31,32,1,0,19,20,174,0,26,1,0,0,0,2,35,1,
0,0,0,4,43,1,0,0,0,6,45,1,0,0,0,8,70,1,0,0,0,10,72,1,0,0,0,12,78,1,0,0,0,
14,93,1,0,0,0,16,112,1,0,0,0,18,122,1,0,0,0,20,135,1,0,0,0,22,138,1,0,0,
0,24,148,1,0,0,0,26,27,5,21,0,0,27,28,5,22,0,0,28,29,5,28,0,0,29,30,3,2,
1,0,30,31,5,29,0,0,31,1,1,0,0,0,32,34,3,4,2,0,33,32,1,0,0,0,34,37,1,0,0,
0,35,36,1,0,0,0,35,33,1,0,0,0,36,3,1,0,0,0,37,35,1,0,0,0,38,44,3,6,3,0,39,
44,3,8,4,0,40,44,3,10,5,0,41,44,3,16,8,0,42,44,3,24,12,0,43,38,1,0,0,0,43,
39,1,0,0,0,43,40,1,0,0,0,43,41,1,0,0,0,43,42,1,0,0,0,44,5,1,0,0,0,45,46,
3,12,6,0,46,49,5,43,0,0,47,48,5,30,0,0,48,50,3,14,7,0,49,47,1,0,0,0,49,50,
1,0,0,0,50,51,1,0,0,0,51,52,5,46,0,0,52,7,1,0,0,0,53,54,5,43,0,0,54,55,5,
30,0,0,55,56,3,14,7,0,56,57,5,46,0,0,57,71,1,0,0,0,58,59,5,43,0,0,59,61,
7,0,0,0,60,62,3,14,7,0,61,60,1,0,0,0,61,62,1,0,0,0,62,63,1,0,0,0,63,71,5,
46,0,0,64,65,5,43,0,0,65,67,7,1,0,0,66,68,3,14,7,0,67,66,1,0,0,0,67,68,1,
0,0,0,68,69,1,0,0,0,69,71,5,46,0,0,70,53,1,0,0,0,70,58,1,0,0,0,70,64,1,0,
0,0,71,9,1,0,0,0,72,73,5,35,0,0,73,74,5,26,0,0,74,75,3,14,7,0,75,76,5,27,
0,0,76,77,5,46,0,0,77,11,1,0,0,0,78,79,7,2,0,0,79,13,1,0,0,0,80,81,6,7,-1,
0,81,82,5,26,0,0,82,83,3,14,7,0,83,84,5,27,0,0,84,94,1,0,0,0,85,86,7,3,0,
0,86,94,3,14,7,9,87,94,7,4,0,0,88,94,5,42,0,0,89,94,5,43,0,0,90,94,5,41,
0,0,91,94,5,44,0,0,92,94,5,45,0,0,93,80,1,0,0,0,93,85,1,0,0,0,93,87,1,0,
0,0,93,88,1,0,0,0,93,89,1,0,0,0,93,90,1,0,0,0,93,91,1,0,0,0,93,92,1,0,0,
0,94,109,1,0,0,0,95,96,10,11,0,0,96,97,7,5,0,0,97,108,3,14,7,12,98,99,10,
10,0,0,99,100,7,3,0,0,100,108,3,14,7,11,101,102,10,7,0,0,102,103,7,4,0,0,
103,108,3,14,7,8,104,105,10,6,0,0,105,106,7,6,0,0,106,108,3,14,7,7,107,95,
1,0,0,0,107,98,1,0,0,0,107,101,1,0,0,0,107,104,1,0,0,0,108,111,1,0,0,0,109,
107,1,0,0,0,109,110,1,0,0,0,110,15,1,0,0,0,111,109,1,0,0,0,112,116,3,18,
9,0,113,115,3,20,10,0,114,113,1,0,0,0,115,118,1,0,0,0,116,114,1,0,0,0,116,
117,1,0,0,0,117,120,1,0,0,0,118,116,1,0,0,0,119,121,3,22,11,0,120,119,1,
0,0,0,120,121,1,0,0,0,121,17,1,0,0,0,122,123,5,36,0,0,123,124,5,26,0,0,124,
125,3,14,7,0,125,126,5,27,0,0,126,130,5,28,0,0,127,129,3,4,2,0,128,127,1,
0,0,0,129,132,1,0,0,0,130,128,1,0,0,0,130,131,1,0,0,0,131,133,1,0,0,0,132,
130,1,0,0,0,133,134,5,29,0,0,134,19,1,0,0,0,135,136,5,37,0,0,136,137,3,18,
9,0,137,21,1,0,0,0,138,139,5,37,0,0,139,143,5,28,0,0,140,142,3,4,2,0,141,
140,1,0,0,0,142,145,1,0,0,0,143,141,1,0,0,0,143,144,1,0,0,0,144,146,1,0,
0,0,145,143,1,0,0,0,146,147,5,29,0,0,147,23,1,0,0,0,148,149,5,38,0,0,149,
150,5,26,0,0,150,151,3,14,7,0,151,152,5,27,0,0,152,156,5,28,0,0,153,155,
3,4,2,0,154,153,1,0,0,0,155,158,1,0,0,0,156,154,1,0,0,0,156,157,1,0,0,0,
157,159,1,0,0,0,158,156,1,0,0,0,159,160,5,29,0,0,160,25,1,0,0,0,14,35,43,
49,61,67,70,93,107,109,116,120,130,143,156];


const atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

const decisionsToDFA = atn.decisionToState.map( (ds, index) => new antlr4.dfa.DFA(ds, index) );

const sharedContextCache = new antlr4.atn.PredictionContextCache();

export default class CVtoJasminParser extends antlr4.Parser {

    static grammarFileName = "CVtoJasmin.g4";
    static literalNames = [ null, "'+='", "'-='", "'*='", "'/='", "'%='", 
                            "'--'", "'++'", "'margit'", "'radahn'", "'godrick'", 
                            "'<'", "'>'", "'<='", "'>='", "'=='", "'!='", 
                            "'true'", "'false'", "'&&'", "'||'", "'iniciar'", 
                            "'codigo'", "'%'", "','", "'!'", "'('", "')'", 
                            "'{'", "'}'", "'='", "'*'", "'/'", "'+'", "'-'", 
                            "'MostrarMensaje'", "'verificar'", "'contrario'", 
                            "'repetir'", null, null, null, null, null, null, 
                            null, "';'" ];
    static symbolicNames = [ null, null, null, null, null, null, null, null, 
                             null, null, null, null, null, null, null, null, 
                             null, null, null, null, null, "INSERT", "CODE", 
                             "MOD", "COMA", "NEGAN", "APARENTESIS", "CPARENTESIS", 
                             "ALLAVE", "CLLAVE", "EQUALS", "MUL", "DIV", 
                             "ADD", "SUB", "PRINT", "IF", "ELSE", "WHILE", 
                             "COND_MAT", "COND_LOG", "STRING", "INT", "ID", 
                             "FLOAT", "CHAR", "SEMI", "LINE_COMMENT", "BLOCK_COMMENT", 
                             "WS" ];
    static ruleNames = [ "start", "content", "expresiones", "declaraciones", 
                         "assignament", "imprimir", "tipo", "expr", "ordencondicional", 
                         "condicional", "condicional_elseif", "condicional_else", 
                         "while" ];

    constructor(input) {
        super(input);
        this._interp = new antlr4.atn.ParserATNSimulator(this, atn, decisionsToDFA, sharedContextCache);
        this.ruleNames = CVtoJasminParser.ruleNames;
        this.literalNames = CVtoJasminParser.literalNames;
        this.symbolicNames = CVtoJasminParser.symbolicNames;
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
    			return this.precpred(this._ctx, 11);
    		case 1:
    			return this.precpred(this._ctx, 10);
    		case 2:
    			return this.precpred(this._ctx, 7);
    		case 3:
    			return this.precpred(this._ctx, 6);
    		default:
    			throw "No predicate with index:" + predIndex;
    	}
    };




	start() {
	    let localctx = new StartContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 0, CVtoJasminParser.RULE_start);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 26;
	        this.match(CVtoJasminParser.INSERT);
	        this.state = 27;
	        this.match(CVtoJasminParser.CODE);
	        this.state = 28;
	        this.match(CVtoJasminParser.ALLAVE);
	        this.state = 29;
	        this.content();
	        this.state = 30;
	        this.match(CVtoJasminParser.CLLAVE);
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
	    this.enterRule(localctx, 2, CVtoJasminParser.RULE_content);
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
	    this.enterRule(localctx, 4, CVtoJasminParser.RULE_expresiones);
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
	        case 43:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 39;
	            this.assignament();
	            break;
	        case 35:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 40;
	            this.imprimir();
	            break;
	        case 36:
	            this.enterOuterAlt(localctx, 4);
	            this.state = 41;
	            this.ordencondicional();
	            break;
	        case 38:
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
	    this.enterRule(localctx, 6, CVtoJasminParser.RULE_declaraciones);
	    var _la = 0;
	    try {
	        localctx = new DeclaracionContext(this, localctx);
	        this.enterOuterAlt(localctx, 1);
	        this.state = 45;
	        this.tipo();
	        this.state = 46;
	        this.match(CVtoJasminParser.ID);
	        this.state = 49;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===30) {
	            this.state = 47;
	            this.match(CVtoJasminParser.EQUALS);
	            this.state = 48;
	            this.expr(0);
	        }

	        this.state = 51;
	        this.match(CVtoJasminParser.SEMI);
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
	    this.enterRule(localctx, 8, CVtoJasminParser.RULE_assignament);
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
	            this.match(CVtoJasminParser.ID);
	            this.state = 54;
	            this.match(CVtoJasminParser.EQUALS);
	            this.state = 55;
	            this.expr(0);
	            this.state = 56;
	            this.match(CVtoJasminParser.SEMI);
	            break;

	        case 2:
	            localctx = new AsignaContext(this, localctx);
	            this.enterOuterAlt(localctx, 2);
	            this.state = 58;
	            this.match(CVtoJasminParser.ID);
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
	            if((((_la) & ~0x1f) === 0 && ((1 << _la) & 67631104) !== 0) || ((((_la - 33)) & ~0x1f) === 0 && ((1 << (_la - 33)) & 7939) !== 0)) {
	                this.state = 60;
	                this.expr(0);
	            }

	            this.state = 63;
	            this.match(CVtoJasminParser.SEMI);
	            break;

	        case 3:
	            localctx = new IncrementoContext(this, localctx);
	            this.enterOuterAlt(localctx, 3);
	            this.state = 64;
	            this.match(CVtoJasminParser.ID);
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
	            if((((_la) & ~0x1f) === 0 && ((1 << _la) & 67631104) !== 0) || ((((_la - 33)) & ~0x1f) === 0 && ((1 << (_la - 33)) & 7939) !== 0)) {
	                this.state = 66;
	                this.expr(0);
	            }

	            this.state = 69;
	            this.match(CVtoJasminParser.SEMI);
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
	    this.enterRule(localctx, 10, CVtoJasminParser.RULE_imprimir);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 72;
	        this.match(CVtoJasminParser.PRINT);
	        this.state = 73;
	        this.match(CVtoJasminParser.APARENTESIS);
	        this.state = 74;
	        this.expr(0);
	        this.state = 75;
	        this.match(CVtoJasminParser.CPARENTESIS);
	        this.state = 76;
	        this.match(CVtoJasminParser.SEMI);
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
	    this.enterRule(localctx, 12, CVtoJasminParser.RULE_tipo);
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
	    this.enterRecursionRule(localctx, 14, CVtoJasminParser.RULE_expr, _p);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 93;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 26:
	            localctx = new ParensContext(this, localctx);
	            this._ctx = localctx;
	            _prevctx = localctx;

	            this.state = 81;
	            this.match(CVtoJasminParser.APARENTESIS);
	            this.state = 82;
	            this.expr(0);
	            this.state = 83;
	            this.match(CVtoJasminParser.CPARENTESIS);
	            break;
	        case 33:
	        case 34:
	            localctx = new SignNumberContext(this, localctx);
	            this._ctx = localctx;
	            _prevctx = localctx;
	            this.state = 85;
	            localctx.op = this._input.LT(1);
	            _la = this._input.LA(1);
	            if(!(_la===33 || _la===34)) {
	                localctx.op = this._errHandler.recoverInline(this);
	            }
	            else {
	            	this._errHandler.reportMatch(this);
	                this.consume();
	            }
	            this.state = 86;
	            this.expr(9);
	            break;
	        case 11:
	        case 12:
	        case 13:
	        case 14:
	        case 15:
	        case 16:
	        case 17:
	        case 18:
	            localctx = new ConditionContext(this, localctx);
	            this._ctx = localctx;
	            _prevctx = localctx;
	            this.state = 87;
	            localctx.operator = this._input.LT(1);
	            _la = this._input.LA(1);
	            if(!((((_la) & ~0x1f) === 0 && ((1 << _la) & 522240) !== 0))) {
	                localctx.operator = this._errHandler.recoverInline(this);
	            }
	            else {
	            	this._errHandler.reportMatch(this);
	                this.consume();
	            }
	            break;
	        case 42:
	            localctx = new IntContext(this, localctx);
	            this._ctx = localctx;
	            _prevctx = localctx;
	            this.state = 88;
	            this.match(CVtoJasminParser.INT);
	            break;
	        case 43:
	            localctx = new IdContext(this, localctx);
	            this._ctx = localctx;
	            _prevctx = localctx;
	            this.state = 89;
	            this.match(CVtoJasminParser.ID);
	            break;
	        case 41:
	            localctx = new StringContext(this, localctx);
	            this._ctx = localctx;
	            _prevctx = localctx;
	            this.state = 90;
	            this.match(CVtoJasminParser.STRING);
	            break;
	        case 44:
	            localctx = new FloatContext(this, localctx);
	            this._ctx = localctx;
	            _prevctx = localctx;
	            this.state = 91;
	            this.match(CVtoJasminParser.FLOAT);
	            break;
	        case 45:
	            localctx = new CharContext(this, localctx);
	            this._ctx = localctx;
	            _prevctx = localctx;
	            this.state = 92;
	            this.match(CVtoJasminParser.CHAR);
	            break;
	        default:
	            throw new antlr4.error.NoViableAltException(this);
	        }
	        this._ctx.stop = this._input.LT(-1);
	        this.state = 109;
	        this._errHandler.sync(this);
	        var _alt = this._interp.adaptivePredict(this._input,8,this._ctx)
	        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
	            if(_alt===1) {
	                if(this._parseListeners!==null) {
	                    this.triggerExitRuleEvent();
	                }
	                _prevctx = localctx;
	                this.state = 107;
	                this._errHandler.sync(this);
	                var la_ = this._interp.adaptivePredict(this._input,7,this._ctx);
	                switch(la_) {
	                case 1:
	                    localctx = new MulDivContext(this, new ExprContext(this, _parentctx, _parentState));
	                    this.pushNewRecursionContext(localctx, _startState, CVtoJasminParser.RULE_expr);
	                    this.state = 95;
	                    if (!( this.precpred(this._ctx, 11))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 11)");
	                    }
	                    this.state = 96;
	                    localctx.op = this._input.LT(1);
	                    _la = this._input.LA(1);
	                    if(!(((((_la - 23)) & ~0x1f) === 0 && ((1 << (_la - 23)) & 769) !== 0))) {
	                        localctx.op = this._errHandler.recoverInline(this);
	                    }
	                    else {
	                    	this._errHandler.reportMatch(this);
	                        this.consume();
	                    }
	                    this.state = 97;
	                    this.expr(12);
	                    break;

	                case 2:
	                    localctx = new AddSubContext(this, new ExprContext(this, _parentctx, _parentState));
	                    this.pushNewRecursionContext(localctx, _startState, CVtoJasminParser.RULE_expr);
	                    this.state = 98;
	                    if (!( this.precpred(this._ctx, 10))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 10)");
	                    }
	                    this.state = 99;
	                    localctx.op = this._input.LT(1);
	                    _la = this._input.LA(1);
	                    if(!(_la===33 || _la===34)) {
	                        localctx.op = this._errHandler.recoverInline(this);
	                    }
	                    else {
	                    	this._errHandler.reportMatch(this);
	                        this.consume();
	                    }
	                    this.state = 100;
	                    this.expr(11);
	                    break;

	                case 3:
	                    localctx = new ConditionContext(this, new ExprContext(this, _parentctx, _parentState));
	                    this.pushNewRecursionContext(localctx, _startState, CVtoJasminParser.RULE_expr);
	                    this.state = 101;
	                    if (!( this.precpred(this._ctx, 7))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 7)");
	                    }
	                    this.state = 102;
	                    localctx.operator = this._input.LT(1);
	                    _la = this._input.LA(1);
	                    if(!((((_la) & ~0x1f) === 0 && ((1 << _la) & 522240) !== 0))) {
	                        localctx.operator = this._errHandler.recoverInline(this);
	                    }
	                    else {
	                    	this._errHandler.reportMatch(this);
	                        this.consume();
	                    }
	                    this.state = 103;
	                    this.expr(8);
	                    break;

	                case 4:
	                    localctx = new LogicConditionContext(this, new ExprContext(this, _parentctx, _parentState));
	                    this.pushNewRecursionContext(localctx, _startState, CVtoJasminParser.RULE_expr);
	                    this.state = 104;
	                    if (!( this.precpred(this._ctx, 6))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 6)");
	                    }
	                    this.state = 105;
	                    localctx.operator = this._input.LT(1);
	                    _la = this._input.LA(1);
	                    if(!(_la===19 || _la===20)) {
	                        localctx.operator = this._errHandler.recoverInline(this);
	                    }
	                    else {
	                    	this._errHandler.reportMatch(this);
	                        this.consume();
	                    }
	                    this.state = 106;
	                    this.expr(7);
	                    break;

	                } 
	            }
	            this.state = 111;
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
	    this.enterRule(localctx, 16, CVtoJasminParser.RULE_ordencondicional);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 112;
	        this.condicional();
	        this.state = 116;
	        this._errHandler.sync(this);
	        var _alt = this._interp.adaptivePredict(this._input,9,this._ctx)
	        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
	            if(_alt===1) {
	                this.state = 113;
	                this.condicional_elseif(); 
	            }
	            this.state = 118;
	            this._errHandler.sync(this);
	            _alt = this._interp.adaptivePredict(this._input,9,this._ctx);
	        }

	        this.state = 120;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===37) {
	            this.state = 119;
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
	    this.enterRule(localctx, 18, CVtoJasminParser.RULE_condicional);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 122;
	        this.match(CVtoJasminParser.IF);
	        this.state = 123;
	        this.match(CVtoJasminParser.APARENTESIS);
	        this.state = 124;
	        this.expr(0);
	        this.state = 125;
	        this.match(CVtoJasminParser.CPARENTESIS);
	        this.state = 126;
	        this.match(CVtoJasminParser.ALLAVE);
	        this.state = 130;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while((((_la) & ~0x1f) === 0 && ((1 << _la) & 1792) !== 0) || ((((_la - 35)) & ~0x1f) === 0 && ((1 << (_la - 35)) & 267) !== 0)) {
	            this.state = 127;
	            this.expresiones();
	            this.state = 132;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 133;
	        this.match(CVtoJasminParser.CLLAVE);
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
	    this.enterRule(localctx, 20, CVtoJasminParser.RULE_condicional_elseif);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 135;
	        this.match(CVtoJasminParser.ELSE);
	        this.state = 136;
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
	    this.enterRule(localctx, 22, CVtoJasminParser.RULE_condicional_else);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 138;
	        this.match(CVtoJasminParser.ELSE);
	        this.state = 139;
	        this.match(CVtoJasminParser.ALLAVE);
	        this.state = 143;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while((((_la) & ~0x1f) === 0 && ((1 << _la) & 1792) !== 0) || ((((_la - 35)) & ~0x1f) === 0 && ((1 << (_la - 35)) & 267) !== 0)) {
	            this.state = 140;
	            this.expresiones();
	            this.state = 145;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 146;
	        this.match(CVtoJasminParser.CLLAVE);
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
	    this.enterRule(localctx, 24, CVtoJasminParser.RULE_while);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 148;
	        this.match(CVtoJasminParser.WHILE);
	        this.state = 149;
	        this.match(CVtoJasminParser.APARENTESIS);

	        this.state = 150;
	        this.expr(0);
	        this.state = 151;
	        this.match(CVtoJasminParser.CPARENTESIS);
	        this.state = 152;
	        this.match(CVtoJasminParser.ALLAVE);
	        this.state = 156;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while((((_la) & ~0x1f) === 0 && ((1 << _la) & 1792) !== 0) || ((((_la - 35)) & ~0x1f) === 0 && ((1 << (_la - 35)) & 267) !== 0)) {
	            this.state = 153;
	            this.expresiones();
	            this.state = 158;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 159;
	        this.match(CVtoJasminParser.CLLAVE);
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

CVtoJasminParser.EOF = antlr4.Token.EOF;
CVtoJasminParser.T__0 = 1;
CVtoJasminParser.T__1 = 2;
CVtoJasminParser.T__2 = 3;
CVtoJasminParser.T__3 = 4;
CVtoJasminParser.T__4 = 5;
CVtoJasminParser.T__5 = 6;
CVtoJasminParser.T__6 = 7;
CVtoJasminParser.T__7 = 8;
CVtoJasminParser.T__8 = 9;
CVtoJasminParser.T__9 = 10;
CVtoJasminParser.T__10 = 11;
CVtoJasminParser.T__11 = 12;
CVtoJasminParser.T__12 = 13;
CVtoJasminParser.T__13 = 14;
CVtoJasminParser.T__14 = 15;
CVtoJasminParser.T__15 = 16;
CVtoJasminParser.T__16 = 17;
CVtoJasminParser.T__17 = 18;
CVtoJasminParser.T__18 = 19;
CVtoJasminParser.T__19 = 20;
CVtoJasminParser.INSERT = 21;
CVtoJasminParser.CODE = 22;
CVtoJasminParser.MOD = 23;
CVtoJasminParser.COMA = 24;
CVtoJasminParser.NEGAN = 25;
CVtoJasminParser.APARENTESIS = 26;
CVtoJasminParser.CPARENTESIS = 27;
CVtoJasminParser.ALLAVE = 28;
CVtoJasminParser.CLLAVE = 29;
CVtoJasminParser.EQUALS = 30;
CVtoJasminParser.MUL = 31;
CVtoJasminParser.DIV = 32;
CVtoJasminParser.ADD = 33;
CVtoJasminParser.SUB = 34;
CVtoJasminParser.PRINT = 35;
CVtoJasminParser.IF = 36;
CVtoJasminParser.ELSE = 37;
CVtoJasminParser.WHILE = 38;
CVtoJasminParser.COND_MAT = 39;
CVtoJasminParser.COND_LOG = 40;
CVtoJasminParser.STRING = 41;
CVtoJasminParser.INT = 42;
CVtoJasminParser.ID = 43;
CVtoJasminParser.FLOAT = 44;
CVtoJasminParser.CHAR = 45;
CVtoJasminParser.SEMI = 46;
CVtoJasminParser.LINE_COMMENT = 47;
CVtoJasminParser.BLOCK_COMMENT = 48;
CVtoJasminParser.WS = 49;

CVtoJasminParser.RULE_start = 0;
CVtoJasminParser.RULE_content = 1;
CVtoJasminParser.RULE_expresiones = 2;
CVtoJasminParser.RULE_declaraciones = 3;
CVtoJasminParser.RULE_assignament = 4;
CVtoJasminParser.RULE_imprimir = 5;
CVtoJasminParser.RULE_tipo = 6;
CVtoJasminParser.RULE_expr = 7;
CVtoJasminParser.RULE_ordencondicional = 8;
CVtoJasminParser.RULE_condicional = 9;
CVtoJasminParser.RULE_condicional_elseif = 10;
CVtoJasminParser.RULE_condicional_else = 11;
CVtoJasminParser.RULE_while = 12;

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
        this.ruleIndex = CVtoJasminParser.RULE_start;
    }

	INSERT() {
	    return this.getToken(CVtoJasminParser.INSERT, 0);
	};

	CODE() {
	    return this.getToken(CVtoJasminParser.CODE, 0);
	};

	ALLAVE() {
	    return this.getToken(CVtoJasminParser.ALLAVE, 0);
	};

	content() {
	    return this.getTypedRuleContext(ContentContext,0);
	};

	CLLAVE() {
	    return this.getToken(CVtoJasminParser.CLLAVE, 0);
	};

	accept(visitor) {
	    if ( visitor instanceof CVtoJasminVisitor ) {
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
        this.ruleIndex = CVtoJasminParser.RULE_content;
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
	    if ( visitor instanceof CVtoJasminVisitor ) {
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
        this.ruleIndex = CVtoJasminParser.RULE_expresiones;
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
	    if ( visitor instanceof CVtoJasminVisitor ) {
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
        this.ruleIndex = CVtoJasminParser.RULE_declaraciones;
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
	    return this.getToken(CVtoJasminParser.ID, 0);
	};

	SEMI() {
	    return this.getToken(CVtoJasminParser.SEMI, 0);
	};

	EQUALS() {
	    return this.getToken(CVtoJasminParser.EQUALS, 0);
	};

	expr() {
	    return this.getTypedRuleContext(ExprContext,0);
	};

	accept(visitor) {
	    if ( visitor instanceof CVtoJasminVisitor ) {
	        return visitor.visitDeclaracion(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

CVtoJasminParser.DeclaracionContext = DeclaracionContext;

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
        this.ruleIndex = CVtoJasminParser.RULE_assignament;
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
	    return this.getToken(CVtoJasminParser.ID, 0);
	};

	SEMI() {
	    return this.getToken(CVtoJasminParser.SEMI, 0);
	};

	expr() {
	    return this.getTypedRuleContext(ExprContext,0);
	};

	accept(visitor) {
	    if ( visitor instanceof CVtoJasminVisitor ) {
	        return visitor.visitAsigna(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

CVtoJasminParser.AsignaContext = AsignaContext;

class IncrementoContext extends AssignamentContext {

    constructor(parser, ctx) {
        super(parser);
        this.com = null;;
        super.copyFrom(ctx);
    }

	ID() {
	    return this.getToken(CVtoJasminParser.ID, 0);
	};

	SEMI() {
	    return this.getToken(CVtoJasminParser.SEMI, 0);
	};

	expr() {
	    return this.getTypedRuleContext(ExprContext,0);
	};

	accept(visitor) {
	    if ( visitor instanceof CVtoJasminVisitor ) {
	        return visitor.visitIncremento(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

CVtoJasminParser.IncrementoContext = IncrementoContext;

class AsignacionesContext extends AssignamentContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	ID() {
	    return this.getToken(CVtoJasminParser.ID, 0);
	};

	EQUALS() {
	    return this.getToken(CVtoJasminParser.EQUALS, 0);
	};

	expr() {
	    return this.getTypedRuleContext(ExprContext,0);
	};

	SEMI() {
	    return this.getToken(CVtoJasminParser.SEMI, 0);
	};

	accept(visitor) {
	    if ( visitor instanceof CVtoJasminVisitor ) {
	        return visitor.visitAsignaciones(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

CVtoJasminParser.AsignacionesContext = AsignacionesContext;

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
        this.ruleIndex = CVtoJasminParser.RULE_imprimir;
    }

	PRINT() {
	    return this.getToken(CVtoJasminParser.PRINT, 0);
	};

	APARENTESIS() {
	    return this.getToken(CVtoJasminParser.APARENTESIS, 0);
	};

	expr() {
	    return this.getTypedRuleContext(ExprContext,0);
	};

	CPARENTESIS() {
	    return this.getToken(CVtoJasminParser.CPARENTESIS, 0);
	};

	SEMI() {
	    return this.getToken(CVtoJasminParser.SEMI, 0);
	};

	accept(visitor) {
	    if ( visitor instanceof CVtoJasminVisitor ) {
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
        this.ruleIndex = CVtoJasminParser.RULE_tipo;
    }


	accept(visitor) {
	    if ( visitor instanceof CVtoJasminVisitor ) {
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
        this.ruleIndex = CVtoJasminParser.RULE_expr;
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
	    return this.getToken(CVtoJasminParser.APARENTESIS, 0);
	};

	expr() {
	    return this.getTypedRuleContext(ExprContext,0);
	};

	CPARENTESIS() {
	    return this.getToken(CVtoJasminParser.CPARENTESIS, 0);
	};

	accept(visitor) {
	    if ( visitor instanceof CVtoJasminVisitor ) {
	        return visitor.visitParens(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

CVtoJasminParser.ParensContext = ParensContext;

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
	    if ( visitor instanceof CVtoJasminVisitor ) {
	        return visitor.visitCondition(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

CVtoJasminParser.ConditionContext = ConditionContext;

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
	    return this.getToken(CVtoJasminParser.ADD, 0);
	};

	SUB() {
	    return this.getToken(CVtoJasminParser.SUB, 0);
	};

	accept(visitor) {
	    if ( visitor instanceof CVtoJasminVisitor ) {
	        return visitor.visitSignNumber(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

CVtoJasminParser.SignNumberContext = SignNumberContext;

class StringContext extends ExprContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	STRING() {
	    return this.getToken(CVtoJasminParser.STRING, 0);
	};

	accept(visitor) {
	    if ( visitor instanceof CVtoJasminVisitor ) {
	        return visitor.visitString(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

CVtoJasminParser.StringContext = StringContext;

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
	    return this.getToken(CVtoJasminParser.MUL, 0);
	};

	DIV() {
	    return this.getToken(CVtoJasminParser.DIV, 0);
	};

	MOD() {
	    return this.getToken(CVtoJasminParser.MOD, 0);
	};

	accept(visitor) {
	    if ( visitor instanceof CVtoJasminVisitor ) {
	        return visitor.visitMulDiv(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

CVtoJasminParser.MulDivContext = MulDivContext;

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
	    return this.getToken(CVtoJasminParser.ADD, 0);
	};

	SUB() {
	    return this.getToken(CVtoJasminParser.SUB, 0);
	};

	accept(visitor) {
	    if ( visitor instanceof CVtoJasminVisitor ) {
	        return visitor.visitAddSub(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

CVtoJasminParser.AddSubContext = AddSubContext;

class LogicConditionContext extends ExprContext {

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
	    if ( visitor instanceof CVtoJasminVisitor ) {
	        return visitor.visitLogicCondition(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

CVtoJasminParser.LogicConditionContext = LogicConditionContext;

class CharContext extends ExprContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	CHAR() {
	    return this.getToken(CVtoJasminParser.CHAR, 0);
	};

	accept(visitor) {
	    if ( visitor instanceof CVtoJasminVisitor ) {
	        return visitor.visitChar(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

CVtoJasminParser.CharContext = CharContext;

class IdContext extends ExprContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	ID() {
	    return this.getToken(CVtoJasminParser.ID, 0);
	};

	accept(visitor) {
	    if ( visitor instanceof CVtoJasminVisitor ) {
	        return visitor.visitId(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

CVtoJasminParser.IdContext = IdContext;

class FloatContext extends ExprContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	FLOAT() {
	    return this.getToken(CVtoJasminParser.FLOAT, 0);
	};

	accept(visitor) {
	    if ( visitor instanceof CVtoJasminVisitor ) {
	        return visitor.visitFloat(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

CVtoJasminParser.FloatContext = FloatContext;

class IntContext extends ExprContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	INT() {
	    return this.getToken(CVtoJasminParser.INT, 0);
	};

	accept(visitor) {
	    if ( visitor instanceof CVtoJasminVisitor ) {
	        return visitor.visitInt(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

CVtoJasminParser.IntContext = IntContext;

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
        this.ruleIndex = CVtoJasminParser.RULE_ordencondicional;
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
	    if ( visitor instanceof CVtoJasminVisitor ) {
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
        this.ruleIndex = CVtoJasminParser.RULE_condicional;
    }

	IF() {
	    return this.getToken(CVtoJasminParser.IF, 0);
	};

	APARENTESIS() {
	    return this.getToken(CVtoJasminParser.APARENTESIS, 0);
	};

	expr() {
	    return this.getTypedRuleContext(ExprContext,0);
	};

	CPARENTESIS() {
	    return this.getToken(CVtoJasminParser.CPARENTESIS, 0);
	};

	ALLAVE() {
	    return this.getToken(CVtoJasminParser.ALLAVE, 0);
	};

	CLLAVE() {
	    return this.getToken(CVtoJasminParser.CLLAVE, 0);
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
	    if ( visitor instanceof CVtoJasminVisitor ) {
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
        this.ruleIndex = CVtoJasminParser.RULE_condicional_elseif;
    }

	ELSE() {
	    return this.getToken(CVtoJasminParser.ELSE, 0);
	};

	condicional() {
	    return this.getTypedRuleContext(CondicionalContext,0);
	};

	accept(visitor) {
	    if ( visitor instanceof CVtoJasminVisitor ) {
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
        this.ruleIndex = CVtoJasminParser.RULE_condicional_else;
    }

	ELSE() {
	    return this.getToken(CVtoJasminParser.ELSE, 0);
	};

	ALLAVE() {
	    return this.getToken(CVtoJasminParser.ALLAVE, 0);
	};

	CLLAVE() {
	    return this.getToken(CVtoJasminParser.CLLAVE, 0);
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
	    if ( visitor instanceof CVtoJasminVisitor ) {
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
        this.ruleIndex = CVtoJasminParser.RULE_while;
    }

	WHILE() {
	    return this.getToken(CVtoJasminParser.WHILE, 0);
	};

	APARENTESIS() {
	    return this.getToken(CVtoJasminParser.APARENTESIS, 0);
	};

	CPARENTESIS() {
	    return this.getToken(CVtoJasminParser.CPARENTESIS, 0);
	};

	ALLAVE() {
	    return this.getToken(CVtoJasminParser.ALLAVE, 0);
	};

	CLLAVE() {
	    return this.getToken(CVtoJasminParser.CLLAVE, 0);
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
	    if ( visitor instanceof CVtoJasminVisitor ) {
	        return visitor.visitWhile(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}




CVtoJasminParser.StartContext = StartContext; 
CVtoJasminParser.ContentContext = ContentContext; 
CVtoJasminParser.ExpresionesContext = ExpresionesContext; 
CVtoJasminParser.DeclaracionesContext = DeclaracionesContext; 
CVtoJasminParser.AssignamentContext = AssignamentContext; 
CVtoJasminParser.ImprimirContext = ImprimirContext; 
CVtoJasminParser.TipoContext = TipoContext; 
CVtoJasminParser.ExprContext = ExprContext; 
CVtoJasminParser.OrdencondicionalContext = OrdencondicionalContext; 
CVtoJasminParser.CondicionalContext = CondicionalContext; 
CVtoJasminParser.Condicional_elseifContext = Condicional_elseifContext; 
CVtoJasminParser.Condicional_elseContext = Condicional_elseContext; 
CVtoJasminParser.WhileContext = WhileContext; 
