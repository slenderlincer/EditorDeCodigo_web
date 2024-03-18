// Generated from ./grammar/CodeFile.g4 by ANTLR 4.13.1
// jshint ignore: start
import antlr4 from 'antlr4';
import CodeFileVisitor from './CodeFileVisitor.js';

const serializedATN = [4,1,28,115,2,0,7,0,2,1,7,1,2,2,7,2,2,3,7,3,2,4,7,
4,2,5,7,5,2,6,7,6,2,7,7,7,2,8,7,8,2,9,7,9,2,10,7,10,1,0,1,0,1,0,1,0,1,0,
1,0,1,1,5,1,30,8,1,10,1,12,1,33,9,1,1,2,1,2,1,2,1,2,3,2,39,8,2,1,3,1,3,1,
3,1,3,1,3,1,3,1,3,1,3,1,3,1,3,3,3,51,8,3,1,4,1,4,1,4,1,4,1,4,1,5,1,5,1,5,
1,5,1,5,1,6,1,6,1,6,1,6,1,6,1,6,5,6,69,8,6,10,6,12,6,72,9,6,1,6,1,6,3,6,
76,8,6,1,7,1,7,1,7,5,7,81,8,7,10,7,12,7,84,9,7,1,7,1,7,1,8,1,8,1,8,1,8,1,
9,1,9,1,10,1,10,1,10,1,10,1,10,1,10,1,10,1,10,3,10,102,8,10,1,10,1,10,1,
10,1,10,1,10,1,10,5,10,110,8,10,10,10,12,10,113,9,10,1,10,0,1,20,11,0,2,
4,6,8,10,12,14,16,18,20,0,4,1,0,13,18,1,0,7,9,1,0,24,25,1,0,26,27,116,0,
22,1,0,0,0,2,31,1,0,0,0,4,38,1,0,0,0,6,50,1,0,0,0,8,52,1,0,0,0,10,57,1,0,
0,0,12,62,1,0,0,0,14,77,1,0,0,0,16,87,1,0,0,0,18,91,1,0,0,0,20,101,1,0,0,
0,22,23,5,19,0,0,23,24,5,21,0,0,24,25,5,1,0,0,25,26,3,2,1,0,26,27,5,2,0,
0,27,1,1,0,0,0,28,30,3,4,2,0,29,28,1,0,0,0,30,33,1,0,0,0,31,29,1,0,0,0,31,
32,1,0,0,0,32,3,1,0,0,0,33,31,1,0,0,0,34,39,3,6,3,0,35,39,3,8,4,0,36,39,
3,10,5,0,37,39,3,12,6,0,38,34,1,0,0,0,38,35,1,0,0,0,38,36,1,0,0,0,38,37,
1,0,0,0,39,5,1,0,0,0,40,41,3,18,9,0,41,42,5,22,0,0,42,43,5,23,0,0,43,51,
1,0,0,0,44,45,3,18,9,0,45,46,5,22,0,0,46,47,5,3,0,0,47,48,3,20,10,0,48,49,
5,23,0,0,49,51,1,0,0,0,50,40,1,0,0,0,50,44,1,0,0,0,51,7,1,0,0,0,52,53,5,
22,0,0,53,54,5,3,0,0,54,55,3,20,10,0,55,56,5,23,0,0,56,9,1,0,0,0,57,58,5,
4,0,0,58,59,3,20,10,0,59,60,5,5,0,0,60,61,5,23,0,0,61,11,1,0,0,0,62,63,5,
10,0,0,63,64,5,6,0,0,64,65,3,16,8,0,65,66,5,5,0,0,66,70,5,1,0,0,67,69,3,
4,2,0,68,67,1,0,0,0,69,72,1,0,0,0,70,68,1,0,0,0,70,71,1,0,0,0,71,73,1,0,
0,0,72,70,1,0,0,0,73,75,5,2,0,0,74,76,3,14,7,0,75,74,1,0,0,0,75,76,1,0,0,
0,76,13,1,0,0,0,77,78,5,11,0,0,78,82,5,1,0,0,79,81,3,4,2,0,80,79,1,0,0,0,
81,84,1,0,0,0,82,80,1,0,0,0,82,83,1,0,0,0,83,85,1,0,0,0,84,82,1,0,0,0,85,
86,5,2,0,0,86,15,1,0,0,0,87,88,3,20,10,0,88,89,7,0,0,0,89,90,3,20,10,0,90,
17,1,0,0,0,91,92,7,1,0,0,92,19,1,0,0,0,93,94,6,10,-1,0,94,102,5,20,0,0,95,
102,5,22,0,0,96,102,5,12,0,0,97,98,5,6,0,0,98,99,3,20,10,0,99,100,5,5,0,
0,100,102,1,0,0,0,101,93,1,0,0,0,101,95,1,0,0,0,101,96,1,0,0,0,101,97,1,
0,0,0,102,111,1,0,0,0,103,104,10,6,0,0,104,105,7,2,0,0,105,110,3,20,10,7,
106,107,10,5,0,0,107,108,7,3,0,0,108,110,3,20,10,6,109,103,1,0,0,0,109,106,
1,0,0,0,110,113,1,0,0,0,111,109,1,0,0,0,111,112,1,0,0,0,112,21,1,0,0,0,113,
111,1,0,0,0,9,31,38,50,70,75,82,101,109,111];


const atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

const decisionsToDFA = atn.decisionToState.map( (ds, index) => new antlr4.dfa.DFA(ds, index) );

const sharedContextCache = new antlr4.atn.PredictionContextCache();

export default class CodeFileParser extends antlr4.Parser {

    static grammarFileName = "CodeFile.g4";
    static literalNames = [ null, "'{'", "'}'", "'='", "'MostrarMensaje('", 
                            "')'", "'('", "'margit'", "'radahn'", "'godrick'", 
                            "'condition'", "'otherwise'", null, "'>'", "'<'", 
                            "'>='", "'<='", "'=='", "'!='", "'iniciar'", 
                            null, "'codigo'", null, "';'", "'*'", "'/'", 
                            "'+'", "'-'" ];
    static symbolicNames = [ null, null, null, null, null, null, null, null, 
                             null, null, "IF", "ELSE", "STRING", "MAYORQUE", 
                             "MENORQUE", "MAYORIGUAL", "MENORIGUAL", "DOBLEIGUAL", 
                             "NEGACION", "INSERT", "INT", "CODE", "ID", 
                             "SEMI", "MUL", "DIV", "ADD", "SUB", "WS" ];
    static ruleNames = [ "start", "content", "expresiones", "declaraciones", 
                         "asignaciones", "imprimir", "condiciones", "otherwise", 
                         "condicion", "tipo", "expr" ];

    constructor(input) {
        super(input);
        this._interp = new antlr4.atn.ParserATNSimulator(this, atn, decisionsToDFA, sharedContextCache);
        this.ruleNames = CodeFileParser.ruleNames;
        this.literalNames = CodeFileParser.literalNames;
        this.symbolicNames = CodeFileParser.symbolicNames;
    }

    sempred(localctx, ruleIndex, predIndex) {
    	switch(ruleIndex) {
    	case 10:
    	    		return this.expr_sempred(localctx, predIndex);
        default:
            throw "No predicate with index:" + ruleIndex;
       }
    }

    expr_sempred(localctx, predIndex) {
    	switch(predIndex) {
    		case 0:
    			return this.precpred(this._ctx, 6);
    		case 1:
    			return this.precpred(this._ctx, 5);
    		default:
    			throw "No predicate with index:" + predIndex;
    	}
    };




	start() {
	    let localctx = new StartContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 0, CodeFileParser.RULE_start);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 22;
	        this.match(CodeFileParser.INSERT);
	        this.state = 23;
	        this.match(CodeFileParser.CODE);
	        this.state = 24;
	        this.match(CodeFileParser.T__0);
	        this.state = 25;
	        this.content();
	        this.state = 26;
	        this.match(CodeFileParser.T__1);
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
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 31;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while((((_la) & ~0x1f) === 0 && ((1 << _la) & 4196240) !== 0)) {
	            this.state = 28;
	            this.expresiones();
	            this.state = 33;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
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
	        this.state = 38;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 7:
	        case 8:
	        case 9:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 34;
	            this.declaraciones();
	            break;
	        case 22:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 35;
	            this.asignaciones();
	            break;
	        case 4:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 36;
	            this.imprimir();
	            break;
	        case 10:
	            this.enterOuterAlt(localctx, 4);
	            this.state = 37;
	            this.condiciones();
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
	    try {
	        this.state = 50;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,2,this._ctx);
	        switch(la_) {
	        case 1:
	            localctx = new DeclaracionContext(this, localctx);
	            this.enterOuterAlt(localctx, 1);
	            this.state = 40;
	            this.tipo();
	            this.state = 41;
	            this.match(CodeFileParser.ID);
	            this.state = 42;
	            this.match(CodeFileParser.SEMI);
	            break;

	        case 2:
	            localctx = new DeclaracionasignacionContext(this, localctx);
	            this.enterOuterAlt(localctx, 2);
	            this.state = 44;
	            this.tipo();
	            this.state = 45;
	            this.match(CodeFileParser.ID);
	            this.state = 46;
	            this.match(CodeFileParser.T__2);
	            this.state = 47;
	            this.expr(0);
	            this.state = 48;
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



	asignaciones() {
	    let localctx = new AsignacionesContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 8, CodeFileParser.RULE_asignaciones);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 52;
	        this.match(CodeFileParser.ID);
	        this.state = 53;
	        this.match(CodeFileParser.T__2);
	        this.state = 54;
	        this.expr(0);
	        this.state = 55;
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



	imprimir() {
	    let localctx = new ImprimirContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 10, CodeFileParser.RULE_imprimir);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 57;
	        this.match(CodeFileParser.T__3);
	        this.state = 58;
	        this.expr(0);
	        this.state = 59;
	        this.match(CodeFileParser.T__4);
	        this.state = 60;
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



	condiciones() {
	    let localctx = new CondicionesContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 12, CodeFileParser.RULE_condiciones);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 62;
	        this.match(CodeFileParser.IF);
	        this.state = 63;
	        this.match(CodeFileParser.T__5);
	        this.state = 64;
	        this.condicion();
	        this.state = 65;
	        this.match(CodeFileParser.T__4);
	        this.state = 66;
	        this.match(CodeFileParser.T__0);
	        this.state = 70;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while((((_la) & ~0x1f) === 0 && ((1 << _la) & 4196240) !== 0)) {
	            this.state = 67;
	            this.expresiones();
	            this.state = 72;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 73;
	        this.match(CodeFileParser.T__1);
	        this.state = 75;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===11) {
	            this.state = 74;
	            this.otherwise();
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



	otherwise() {
	    let localctx = new OtherwiseContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 14, CodeFileParser.RULE_otherwise);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 77;
	        this.match(CodeFileParser.ELSE);
	        this.state = 78;
	        this.match(CodeFileParser.T__0);
	        this.state = 82;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while((((_la) & ~0x1f) === 0 && ((1 << _la) & 4196240) !== 0)) {
	            this.state = 79;
	            this.expresiones();
	            this.state = 84;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 85;
	        this.match(CodeFileParser.T__1);
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



	condicion() {
	    let localctx = new CondicionContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 16, CodeFileParser.RULE_condicion);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 87;
	        this.expr(0);
	        this.state = 88;
	        localctx.op = this._input.LT(1);
	        _la = this._input.LA(1);
	        if(!((((_la) & ~0x1f) === 0 && ((1 << _la) & 516096) !== 0))) {
	            localctx.op = this._errHandler.recoverInline(this);
	        }
	        else {
	        	this._errHandler.reportMatch(this);
	            this.consume();
	        }
	        this.state = 89;
	        this.expr(0);
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
	    this.enterRule(localctx, 18, CodeFileParser.RULE_tipo);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 91;
	        _la = this._input.LA(1);
	        if(!((((_la) & ~0x1f) === 0 && ((1 << _la) & 896) !== 0))) {
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
	    const _startState = 20;
	    this.enterRecursionRule(localctx, 20, CodeFileParser.RULE_expr, _p);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 101;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 20:
	            localctx = new IntContext(this, localctx);
	            this._ctx = localctx;
	            _prevctx = localctx;

	            this.state = 94;
	            this.match(CodeFileParser.INT);
	            break;
	        case 22:
	            localctx = new IdContext(this, localctx);
	            this._ctx = localctx;
	            _prevctx = localctx;
	            this.state = 95;
	            this.match(CodeFileParser.ID);
	            break;
	        case 12:
	            localctx = new StringContext(this, localctx);
	            this._ctx = localctx;
	            _prevctx = localctx;
	            this.state = 96;
	            this.match(CodeFileParser.STRING);
	            break;
	        case 6:
	            localctx = new ParensContext(this, localctx);
	            this._ctx = localctx;
	            _prevctx = localctx;
	            this.state = 97;
	            this.match(CodeFileParser.T__5);
	            this.state = 98;
	            this.expr(0);
	            this.state = 99;
	            this.match(CodeFileParser.T__4);
	            break;
	        default:
	            throw new antlr4.error.NoViableAltException(this);
	        }
	        this._ctx.stop = this._input.LT(-1);
	        this.state = 111;
	        this._errHandler.sync(this);
	        var _alt = this._interp.adaptivePredict(this._input,8,this._ctx)
	        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
	            if(_alt===1) {
	                if(this._parseListeners!==null) {
	                    this.triggerExitRuleEvent();
	                }
	                _prevctx = localctx;
	                this.state = 109;
	                this._errHandler.sync(this);
	                var la_ = this._interp.adaptivePredict(this._input,7,this._ctx);
	                switch(la_) {
	                case 1:
	                    localctx = new MulDivContext(this, new ExprContext(this, _parentctx, _parentState));
	                    this.pushNewRecursionContext(localctx, _startState, CodeFileParser.RULE_expr);
	                    this.state = 103;
	                    if (!( this.precpred(this._ctx, 6))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 6)");
	                    }
	                    this.state = 104;
	                    localctx.op = this._input.LT(1);
	                    _la = this._input.LA(1);
	                    if(!(_la===24 || _la===25)) {
	                        localctx.op = this._errHandler.recoverInline(this);
	                    }
	                    else {
	                    	this._errHandler.reportMatch(this);
	                        this.consume();
	                    }
	                    this.state = 105;
	                    this.expr(7);
	                    break;

	                case 2:
	                    localctx = new AddSubContext(this, new ExprContext(this, _parentctx, _parentState));
	                    this.pushNewRecursionContext(localctx, _startState, CodeFileParser.RULE_expr);
	                    this.state = 106;
	                    if (!( this.precpred(this._ctx, 5))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 5)");
	                    }
	                    this.state = 107;
	                    localctx.op = this._input.LT(1);
	                    _la = this._input.LA(1);
	                    if(!(_la===26 || _la===27)) {
	                        localctx.op = this._errHandler.recoverInline(this);
	                    }
	                    else {
	                    	this._errHandler.reportMatch(this);
	                        this.consume();
	                    }
	                    this.state = 108;
	                    this.expr(6);
	                    break;

	                } 
	            }
	            this.state = 113;
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
CodeFileParser.IF = 10;
CodeFileParser.ELSE = 11;
CodeFileParser.STRING = 12;
CodeFileParser.MAYORQUE = 13;
CodeFileParser.MENORQUE = 14;
CodeFileParser.MAYORIGUAL = 15;
CodeFileParser.MENORIGUAL = 16;
CodeFileParser.DOBLEIGUAL = 17;
CodeFileParser.NEGACION = 18;
CodeFileParser.INSERT = 19;
CodeFileParser.INT = 20;
CodeFileParser.CODE = 21;
CodeFileParser.ID = 22;
CodeFileParser.SEMI = 23;
CodeFileParser.MUL = 24;
CodeFileParser.DIV = 25;
CodeFileParser.ADD = 26;
CodeFileParser.SUB = 27;
CodeFileParser.WS = 28;

CodeFileParser.RULE_start = 0;
CodeFileParser.RULE_content = 1;
CodeFileParser.RULE_expresiones = 2;
CodeFileParser.RULE_declaraciones = 3;
CodeFileParser.RULE_asignaciones = 4;
CodeFileParser.RULE_imprimir = 5;
CodeFileParser.RULE_condiciones = 6;
CodeFileParser.RULE_otherwise = 7;
CodeFileParser.RULE_condicion = 8;
CodeFileParser.RULE_tipo = 9;
CodeFileParser.RULE_expr = 10;

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

	content() {
	    return this.getTypedRuleContext(ContentContext,0);
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

	asignaciones() {
	    return this.getTypedRuleContext(AsignacionesContext,0);
	};

	imprimir() {
	    return this.getTypedRuleContext(ImprimirContext,0);
	};

	condiciones() {
	    return this.getTypedRuleContext(CondicionesContext,0);
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

	accept(visitor) {
	    if ( visitor instanceof CodeFileVisitor ) {
	        return visitor.visitDeclaracion(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

CodeFileParser.DeclaracionContext = DeclaracionContext;

class DeclaracionasignacionContext extends DeclaracionesContext {

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

	expr() {
	    return this.getTypedRuleContext(ExprContext,0);
	};

	SEMI() {
	    return this.getToken(CodeFileParser.SEMI, 0);
	};

	accept(visitor) {
	    if ( visitor instanceof CodeFileVisitor ) {
	        return visitor.visitDeclaracionasignacion(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

CodeFileParser.DeclaracionasignacionContext = DeclaracionasignacionContext;

class AsignacionesContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = CodeFileParser.RULE_asignaciones;
    }

	ID() {
	    return this.getToken(CodeFileParser.ID, 0);
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

	expr() {
	    return this.getTypedRuleContext(ExprContext,0);
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



class CondicionesContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = CodeFileParser.RULE_condiciones;
    }

	IF() {
	    return this.getToken(CodeFileParser.IF, 0);
	};

	condicion() {
	    return this.getTypedRuleContext(CondicionContext,0);
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

	otherwise() {
	    return this.getTypedRuleContext(OtherwiseContext,0);
	};

	accept(visitor) {
	    if ( visitor instanceof CodeFileVisitor ) {
	        return visitor.visitCondiciones(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class OtherwiseContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = CodeFileParser.RULE_otherwise;
    }

	ELSE() {
	    return this.getToken(CodeFileParser.ELSE, 0);
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
	        return visitor.visitOtherwise(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class CondicionContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = CodeFileParser.RULE_condicion;
        this.op = null;
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

	MAYORQUE() {
	    return this.getToken(CodeFileParser.MAYORQUE, 0);
	};

	MENORQUE() {
	    return this.getToken(CodeFileParser.MENORQUE, 0);
	};

	MAYORIGUAL() {
	    return this.getToken(CodeFileParser.MAYORIGUAL, 0);
	};

	MENORIGUAL() {
	    return this.getToken(CodeFileParser.MENORIGUAL, 0);
	};

	DOBLEIGUAL() {
	    return this.getToken(CodeFileParser.DOBLEIGUAL, 0);
	};

	NEGACION() {
	    return this.getToken(CodeFileParser.NEGACION, 0);
	};

	accept(visitor) {
	    if ( visitor instanceof CodeFileVisitor ) {
	        return visitor.visitCondicion(this);
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

	expr() {
	    return this.getTypedRuleContext(ExprContext,0);
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


CodeFileParser.StartContext = StartContext; 
CodeFileParser.ContentContext = ContentContext; 
CodeFileParser.ExpresionesContext = ExpresionesContext; 
CodeFileParser.DeclaracionesContext = DeclaracionesContext; 
CodeFileParser.AsignacionesContext = AsignacionesContext; 
CodeFileParser.ImprimirContext = ImprimirContext; 
CodeFileParser.CondicionesContext = CondicionesContext; 
CodeFileParser.OtherwiseContext = OtherwiseContext; 
CodeFileParser.CondicionContext = CondicionContext; 
CodeFileParser.TipoContext = TipoContext; 
CodeFileParser.ExprContext = ExprContext; 
