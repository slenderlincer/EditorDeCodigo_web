// Generated from ./grammar/CodeFile.g4 by ANTLR 4.13.1
// jshint ignore: start
import antlr4 from 'antlr4';
import CodeFileVisitor from './CodeFileVisitor.js';

const serializedATN = [4,1,20,85,2,0,7,0,2,1,7,1,2,2,7,2,2,3,7,3,2,4,7,4,
2,5,7,5,2,6,7,6,2,7,7,7,2,8,7,8,1,0,1,0,1,0,1,0,1,0,1,0,1,1,5,1,26,8,1,10,
1,12,1,29,9,1,1,2,1,2,1,2,3,2,34,8,2,1,3,1,3,1,3,1,3,1,3,1,3,1,3,1,3,1,3,
1,3,3,3,46,8,3,1,4,1,4,1,4,1,4,1,4,1,5,1,5,1,5,1,5,1,5,1,6,1,6,1,6,3,6,61,
8,6,1,7,1,7,1,8,1,8,1,8,1,8,1,8,1,8,1,8,3,8,72,8,8,1,8,1,8,1,8,1,8,1,8,1,
8,5,8,80,8,8,10,8,12,8,83,9,8,1,8,0,1,16,9,0,2,4,6,8,10,12,14,16,0,3,1,0,
6,8,1,0,10,11,1,0,12,13,85,0,18,1,0,0,0,2,27,1,0,0,0,4,33,1,0,0,0,6,45,1,
0,0,0,8,47,1,0,0,0,10,52,1,0,0,0,12,60,1,0,0,0,14,62,1,0,0,0,16,71,1,0,0,
0,18,19,5,15,0,0,19,20,5,17,0,0,20,21,5,1,0,0,21,22,3,2,1,0,22,23,5,2,0,
0,23,1,1,0,0,0,24,26,3,4,2,0,25,24,1,0,0,0,26,29,1,0,0,0,27,25,1,0,0,0,27,
28,1,0,0,0,28,3,1,0,0,0,29,27,1,0,0,0,30,34,3,6,3,0,31,34,3,8,4,0,32,34,
3,10,5,0,33,30,1,0,0,0,33,31,1,0,0,0,33,32,1,0,0,0,34,5,1,0,0,0,35,36,3,
14,7,0,36,37,5,18,0,0,37,38,5,19,0,0,38,46,1,0,0,0,39,40,3,14,7,0,40,41,
5,18,0,0,41,42,5,3,0,0,42,43,3,16,8,0,43,44,5,19,0,0,44,46,1,0,0,0,45,35,
1,0,0,0,45,39,1,0,0,0,46,7,1,0,0,0,47,48,5,18,0,0,48,49,5,3,0,0,49,50,3,
16,8,0,50,51,5,19,0,0,51,9,1,0,0,0,52,53,5,4,0,0,53,54,3,12,6,0,54,55,5,
5,0,0,55,56,5,19,0,0,56,11,1,0,0,0,57,61,5,14,0,0,58,61,3,16,8,0,59,61,5,
18,0,0,60,57,1,0,0,0,60,58,1,0,0,0,60,59,1,0,0,0,61,13,1,0,0,0,62,63,7,0,
0,0,63,15,1,0,0,0,64,65,6,8,-1,0,65,72,5,16,0,0,66,72,5,18,0,0,67,68,5,9,
0,0,68,69,3,16,8,0,69,70,5,5,0,0,70,72,1,0,0,0,71,64,1,0,0,0,71,66,1,0,0,
0,71,67,1,0,0,0,72,81,1,0,0,0,73,74,10,5,0,0,74,75,7,1,0,0,75,80,3,16,8,
6,76,77,10,4,0,0,77,78,7,2,0,0,78,80,3,16,8,5,79,73,1,0,0,0,79,76,1,0,0,
0,80,83,1,0,0,0,81,79,1,0,0,0,81,82,1,0,0,0,82,17,1,0,0,0,83,81,1,0,0,0,
7,27,33,45,60,71,79,81];


const atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

const decisionsToDFA = atn.decisionToState.map( (ds, index) => new antlr4.dfa.DFA(ds, index) );

const sharedContextCache = new antlr4.atn.PredictionContextCache();

export default class CodeFileParser extends antlr4.Parser {

    static grammarFileName = "CodeFile.g4";
    static literalNames = [ null, "'{'", "'}'", "'='", "'printf('", "')'", 
                            "'margit'", "'radahn'", "'godrick'", "'('", 
                            "'*'", "'/'", "'+'", "'-'", null, "'iniciar'", 
                            null, "'codigo'", null, "';'" ];
    static symbolicNames = [ null, null, null, null, null, null, null, null, 
                             null, null, "MUL", "DIV", "ADD", "SUB", "TEXTO", 
                             "INSERT", "INT", "CODE", "ID", "SEMI", "WS" ];
    static ruleNames = [ "start", "content", "expresiones", "declaraciones", 
                         "asignaciones", "imprimir", "mensaje", "tipo", 
                         "expr" ];

    constructor(input) {
        super(input);
        this._interp = new antlr4.atn.ParserATNSimulator(this, atn, decisionsToDFA, sharedContextCache);
        this.ruleNames = CodeFileParser.ruleNames;
        this.literalNames = CodeFileParser.literalNames;
        this.symbolicNames = CodeFileParser.symbolicNames;
    }

    sempred(localctx, ruleIndex, predIndex) {
    	switch(ruleIndex) {
    	case 8:
    	    		return this.expr_sempred(localctx, predIndex);
        default:
            throw "No predicate with index:" + ruleIndex;
       }
    }

    expr_sempred(localctx, predIndex) {
    	switch(predIndex) {
    		case 0:
    			return this.precpred(this._ctx, 5);
    		case 1:
    			return this.precpred(this._ctx, 4);
    		default:
    			throw "No predicate with index:" + predIndex;
    	}
    };




	start() {
	    let localctx = new StartContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 0, CodeFileParser.RULE_start);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 18;
	        this.match(CodeFileParser.INSERT);
	        this.state = 19;
	        this.match(CodeFileParser.CODE);
	        this.state = 20;
	        this.match(CodeFileParser.T__0);
	        this.state = 21;
	        this.content();
	        this.state = 22;
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
	        this.state = 27;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while((((_la) & ~0x1f) === 0 && ((1 << _la) & 262608) !== 0)) {
	            this.state = 24;
	            this.expresiones();
	            this.state = 29;
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
	        this.state = 33;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 6:
	        case 7:
	        case 8:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 30;
	            this.declaraciones();
	            break;
	        case 18:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 31;
	            this.asignaciones();
	            break;
	        case 4:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 32;
	            this.imprimir();
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
	        this.state = 45;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,2,this._ctx);
	        switch(la_) {
	        case 1:
	            localctx = new DeclaracionContext(this, localctx);
	            this.enterOuterAlt(localctx, 1);
	            this.state = 35;
	            this.tipo();
	            this.state = 36;
	            this.match(CodeFileParser.ID);
	            this.state = 37;
	            this.match(CodeFileParser.SEMI);
	            break;

	        case 2:
	            localctx = new DeclaracionasignacionContext(this, localctx);
	            this.enterOuterAlt(localctx, 2);
	            this.state = 39;
	            this.tipo();
	            this.state = 40;
	            this.match(CodeFileParser.ID);
	            this.state = 41;
	            this.match(CodeFileParser.T__2);
	            this.state = 42;
	            this.expr(0);
	            this.state = 43;
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
	        this.state = 47;
	        this.match(CodeFileParser.ID);
	        this.state = 48;
	        this.match(CodeFileParser.T__2);
	        this.state = 49;
	        this.expr(0);
	        this.state = 50;
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
	        this.state = 52;
	        this.match(CodeFileParser.T__3);
	        this.state = 53;
	        this.mensaje();
	        this.state = 54;
	        this.match(CodeFileParser.T__4);
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



	mensaje() {
	    let localctx = new MensajeContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 12, CodeFileParser.RULE_mensaje);
	    try {
	        this.state = 60;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,3,this._ctx);
	        switch(la_) {
	        case 1:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 57;
	            this.match(CodeFileParser.TEXTO);
	            break;

	        case 2:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 58;
	            this.expr(0);
	            break;

	        case 3:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 59;
	            this.match(CodeFileParser.ID);
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



	tipo() {
	    let localctx = new TipoContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 14, CodeFileParser.RULE_tipo);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 62;
	        _la = this._input.LA(1);
	        if(!((((_la) & ~0x1f) === 0 && ((1 << _la) & 448) !== 0))) {
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
	    const _startState = 16;
	    this.enterRecursionRule(localctx, 16, CodeFileParser.RULE_expr, _p);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 71;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 16:
	            localctx = new IntContext(this, localctx);
	            this._ctx = localctx;
	            _prevctx = localctx;

	            this.state = 65;
	            this.match(CodeFileParser.INT);
	            break;
	        case 18:
	            localctx = new IdContext(this, localctx);
	            this._ctx = localctx;
	            _prevctx = localctx;
	            this.state = 66;
	            this.match(CodeFileParser.ID);
	            break;
	        case 9:
	            localctx = new ParensContext(this, localctx);
	            this._ctx = localctx;
	            _prevctx = localctx;
	            this.state = 67;
	            this.match(CodeFileParser.T__8);
	            this.state = 68;
	            this.expr(0);
	            this.state = 69;
	            this.match(CodeFileParser.T__4);
	            break;
	        default:
	            throw new antlr4.error.NoViableAltException(this);
	        }
	        this._ctx.stop = this._input.LT(-1);
	        this.state = 81;
	        this._errHandler.sync(this);
	        var _alt = this._interp.adaptivePredict(this._input,6,this._ctx)
	        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
	            if(_alt===1) {
	                if(this._parseListeners!==null) {
	                    this.triggerExitRuleEvent();
	                }
	                _prevctx = localctx;
	                this.state = 79;
	                this._errHandler.sync(this);
	                var la_ = this._interp.adaptivePredict(this._input,5,this._ctx);
	                switch(la_) {
	                case 1:
	                    localctx = new MulDivContext(this, new ExprContext(this, _parentctx, _parentState));
	                    this.pushNewRecursionContext(localctx, _startState, CodeFileParser.RULE_expr);
	                    this.state = 73;
	                    if (!( this.precpred(this._ctx, 5))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 5)");
	                    }
	                    this.state = 74;
	                    localctx.op = this._input.LT(1);
	                    _la = this._input.LA(1);
	                    if(!(_la===10 || _la===11)) {
	                        localctx.op = this._errHandler.recoverInline(this);
	                    }
	                    else {
	                    	this._errHandler.reportMatch(this);
	                        this.consume();
	                    }
	                    this.state = 75;
	                    this.expr(6);
	                    break;

	                case 2:
	                    localctx = new AddSubContext(this, new ExprContext(this, _parentctx, _parentState));
	                    this.pushNewRecursionContext(localctx, _startState, CodeFileParser.RULE_expr);
	                    this.state = 76;
	                    if (!( this.precpred(this._ctx, 4))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 4)");
	                    }
	                    this.state = 77;
	                    localctx.op = this._input.LT(1);
	                    _la = this._input.LA(1);
	                    if(!(_la===12 || _la===13)) {
	                        localctx.op = this._errHandler.recoverInline(this);
	                    }
	                    else {
	                    	this._errHandler.reportMatch(this);
	                        this.consume();
	                    }
	                    this.state = 78;
	                    this.expr(5);
	                    break;

	                } 
	            }
	            this.state = 83;
	            this._errHandler.sync(this);
	            _alt = this._interp.adaptivePredict(this._input,6,this._ctx);
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
CodeFileParser.MUL = 10;
CodeFileParser.DIV = 11;
CodeFileParser.ADD = 12;
CodeFileParser.SUB = 13;
CodeFileParser.TEXTO = 14;
CodeFileParser.INSERT = 15;
CodeFileParser.INT = 16;
CodeFileParser.CODE = 17;
CodeFileParser.ID = 18;
CodeFileParser.SEMI = 19;
CodeFileParser.WS = 20;

CodeFileParser.RULE_start = 0;
CodeFileParser.RULE_content = 1;
CodeFileParser.RULE_expresiones = 2;
CodeFileParser.RULE_declaraciones = 3;
CodeFileParser.RULE_asignaciones = 4;
CodeFileParser.RULE_imprimir = 5;
CodeFileParser.RULE_mensaje = 6;
CodeFileParser.RULE_tipo = 7;
CodeFileParser.RULE_expr = 8;

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

	mensaje() {
	    return this.getTypedRuleContext(MensajeContext,0);
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



class MensajeContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = CodeFileParser.RULE_mensaje;
    }

	TEXTO() {
	    return this.getToken(CodeFileParser.TEXTO, 0);
	};

	expr() {
	    return this.getTypedRuleContext(ExprContext,0);
	};

	ID() {
	    return this.getToken(CodeFileParser.ID, 0);
	};

	accept(visitor) {
	    if ( visitor instanceof CodeFileVisitor ) {
	        return visitor.visitMensaje(this);
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
CodeFileParser.MensajeContext = MensajeContext; 
CodeFileParser.TipoContext = TipoContext; 
CodeFileParser.ExprContext = ExprContext; 
