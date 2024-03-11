// Generated from c://Users//saule//Desktop//Codigo_Editor//grammar//CodeFile.g4 by ANTLR 4.13.1
import org.antlr.v4.runtime.atn.*;
import org.antlr.v4.runtime.dfa.DFA;
import org.antlr.v4.runtime.*;
import org.antlr.v4.runtime.misc.*;
import org.antlr.v4.runtime.tree.*;
import java.util.List;
import java.util.Iterator;
import java.util.ArrayList;

@SuppressWarnings({"all", "warnings", "unchecked", "unused", "cast", "CheckReturnValue"})
public class CodeFileParser extends Parser {
	static { RuntimeMetaData.checkVersion("4.13.1", RuntimeMetaData.VERSION); }

	protected static final DFA[] _decisionToDFA;
	protected static final PredictionContextCache _sharedContextCache =
		new PredictionContextCache();
	public static final int
		T__0=1, T__1=2, T__2=3, T__3=4, T__4=5, T__5=6, T__6=7, T__7=8, T__8=9, 
		INSERT=10, INT=11, CODE=12, ID=13, SEMI=14, MUL=15, DIV=16, ADD=17, SUB=18, 
		TEXTO=19, WS=20;
	public static final int
		RULE_start = 0, RULE_content = 1, RULE_expresiones = 2, RULE_declaraciones = 3, 
		RULE_asignaciones = 4, RULE_imprimir = 5, RULE_mensaje = 6, RULE_tipo = 7, 
		RULE_expr = 8;
	private static String[] makeRuleNames() {
		return new String[] {
			"start", "content", "expresiones", "declaraciones", "asignaciones", "imprimir", 
			"mensaje", "tipo", "expr"
		};
	}
	public static final String[] ruleNames = makeRuleNames();

	private static String[] makeLiteralNames() {
		return new String[] {
			null, "'{'", "'}'", "'='", "'MostrarMensaje('", "')'", "'margit'", "'radahn'", 
			"'godrick'", "'('", "'iniciar'", null, "'codigo'", null, "';'", "'*'", 
			"'/'", "'+'", "'-'"
		};
	}
	private static final String[] _LITERAL_NAMES = makeLiteralNames();
	private static String[] makeSymbolicNames() {
		return new String[] {
			null, null, null, null, null, null, null, null, null, null, "INSERT", 
			"INT", "CODE", "ID", "SEMI", "MUL", "DIV", "ADD", "SUB", "TEXTO", "WS"
		};
	}
	private static final String[] _SYMBOLIC_NAMES = makeSymbolicNames();
	public static final Vocabulary VOCABULARY = new VocabularyImpl(_LITERAL_NAMES, _SYMBOLIC_NAMES);

	/**
	 * @deprecated Use {@link #VOCABULARY} instead.
	 */
	@Deprecated
	public static final String[] tokenNames;
	static {
		tokenNames = new String[_SYMBOLIC_NAMES.length];
		for (int i = 0; i < tokenNames.length; i++) {
			tokenNames[i] = VOCABULARY.getLiteralName(i);
			if (tokenNames[i] == null) {
				tokenNames[i] = VOCABULARY.getSymbolicName(i);
			}

			if (tokenNames[i] == null) {
				tokenNames[i] = "<INVALID>";
			}
		}
	}

	@Override
	@Deprecated
	public String[] getTokenNames() {
		return tokenNames;
	}

	@Override

	public Vocabulary getVocabulary() {
		return VOCABULARY;
	}

	@Override
	public String getGrammarFileName() { return "CodeFile.g4"; }

	@Override
	public String[] getRuleNames() { return ruleNames; }

	@Override
	public String getSerializedATN() { return _serializedATN; }

	@Override
	public ATN getATN() { return _ATN; }

	public CodeFileParser(TokenStream input) {
		super(input);
		_interp = new ParserATNSimulator(this,_ATN,_decisionToDFA,_sharedContextCache);
	}

	@SuppressWarnings("CheckReturnValue")
	public static class StartContext extends ParserRuleContext {
		public TerminalNode INSERT() { return getToken(CodeFileParser.INSERT, 0); }
		public TerminalNode CODE() { return getToken(CodeFileParser.CODE, 0); }
		public ContentContext content() {
			return getRuleContext(ContentContext.class,0);
		}
		public StartContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_start; }
	}

	public final StartContext start() throws RecognitionException {
		StartContext _localctx = new StartContext(_ctx, getState());
		enterRule(_localctx, 0, RULE_start);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(18);
			match(INSERT);
			setState(19);
			match(CODE);
			setState(20);
			match(T__0);
			setState(21);
			content();
			setState(22);
			match(T__1);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class ContentContext extends ParserRuleContext {
		public List<ExpresionesContext> expresiones() {
			return getRuleContexts(ExpresionesContext.class);
		}
		public ExpresionesContext expresiones(int i) {
			return getRuleContext(ExpresionesContext.class,i);
		}
		public ContentContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_content; }
	}

	public final ContentContext content() throws RecognitionException {
		ContentContext _localctx = new ContentContext(_ctx, getState());
		enterRule(_localctx, 2, RULE_content);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(27);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while ((((_la) & ~0x3f) == 0 && ((1L << _la) & 8656L) != 0)) {
				{
				{
				setState(24);
				expresiones();
				}
				}
				setState(29);
				_errHandler.sync(this);
				_la = _input.LA(1);
			}
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class ExpresionesContext extends ParserRuleContext {
		public DeclaracionesContext declaraciones() {
			return getRuleContext(DeclaracionesContext.class,0);
		}
		public AsignacionesContext asignaciones() {
			return getRuleContext(AsignacionesContext.class,0);
		}
		public ImprimirContext imprimir() {
			return getRuleContext(ImprimirContext.class,0);
		}
		public ExpresionesContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_expresiones; }
	}

	public final ExpresionesContext expresiones() throws RecognitionException {
		ExpresionesContext _localctx = new ExpresionesContext(_ctx, getState());
		enterRule(_localctx, 4, RULE_expresiones);
		try {
			setState(33);
			_errHandler.sync(this);
			switch (_input.LA(1)) {
			case T__5:
			case T__6:
			case T__7:
				enterOuterAlt(_localctx, 1);
				{
				setState(30);
				declaraciones();
				}
				break;
			case ID:
				enterOuterAlt(_localctx, 2);
				{
				setState(31);
				asignaciones();
				}
				break;
			case T__3:
				enterOuterAlt(_localctx, 3);
				{
				setState(32);
				imprimir();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class DeclaracionesContext extends ParserRuleContext {
		public DeclaracionesContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_declaraciones; }
	 
		public DeclaracionesContext() { }
		public void copyFrom(DeclaracionesContext ctx) {
			super.copyFrom(ctx);
		}
	}
	@SuppressWarnings("CheckReturnValue")
	public static class DeclaracionContext extends DeclaracionesContext {
		public TipoContext tipo() {
			return getRuleContext(TipoContext.class,0);
		}
		public TerminalNode ID() { return getToken(CodeFileParser.ID, 0); }
		public TerminalNode SEMI() { return getToken(CodeFileParser.SEMI, 0); }
		public DeclaracionContext(DeclaracionesContext ctx) { copyFrom(ctx); }
	}
	@SuppressWarnings("CheckReturnValue")
	public static class DeclaracionasignacionContext extends DeclaracionesContext {
		public TipoContext tipo() {
			return getRuleContext(TipoContext.class,0);
		}
		public TerminalNode ID() { return getToken(CodeFileParser.ID, 0); }
		public ExprContext expr() {
			return getRuleContext(ExprContext.class,0);
		}
		public TerminalNode SEMI() { return getToken(CodeFileParser.SEMI, 0); }
		public DeclaracionasignacionContext(DeclaracionesContext ctx) { copyFrom(ctx); }
	}

	public final DeclaracionesContext declaraciones() throws RecognitionException {
		DeclaracionesContext _localctx = new DeclaracionesContext(_ctx, getState());
		enterRule(_localctx, 6, RULE_declaraciones);
		try {
			setState(45);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,2,_ctx) ) {
			case 1:
				_localctx = new DeclaracionContext(_localctx);
				enterOuterAlt(_localctx, 1);
				{
				setState(35);
				tipo();
				setState(36);
				match(ID);
				setState(37);
				match(SEMI);
				}
				break;
			case 2:
				_localctx = new DeclaracionasignacionContext(_localctx);
				enterOuterAlt(_localctx, 2);
				{
				setState(39);
				tipo();
				setState(40);
				match(ID);
				setState(41);
				match(T__2);
				setState(42);
				expr(0);
				setState(43);
				match(SEMI);
				}
				break;
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class AsignacionesContext extends ParserRuleContext {
		public TerminalNode ID() { return getToken(CodeFileParser.ID, 0); }
		public ExprContext expr() {
			return getRuleContext(ExprContext.class,0);
		}
		public TerminalNode SEMI() { return getToken(CodeFileParser.SEMI, 0); }
		public AsignacionesContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_asignaciones; }
	}

	public final AsignacionesContext asignaciones() throws RecognitionException {
		AsignacionesContext _localctx = new AsignacionesContext(_ctx, getState());
		enterRule(_localctx, 8, RULE_asignaciones);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(47);
			match(ID);
			setState(48);
			match(T__2);
			setState(49);
			expr(0);
			setState(50);
			match(SEMI);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class ImprimirContext extends ParserRuleContext {
		public MensajeContext mensaje() {
			return getRuleContext(MensajeContext.class,0);
		}
		public TerminalNode SEMI() { return getToken(CodeFileParser.SEMI, 0); }
		public ImprimirContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_imprimir; }
	}

	public final ImprimirContext imprimir() throws RecognitionException {
		ImprimirContext _localctx = new ImprimirContext(_ctx, getState());
		enterRule(_localctx, 10, RULE_imprimir);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(52);
			match(T__3);
			setState(53);
			mensaje();
			setState(54);
			match(T__4);
			setState(55);
			match(SEMI);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class MensajeContext extends ParserRuleContext {
		public TerminalNode TEXTO() { return getToken(CodeFileParser.TEXTO, 0); }
		public ExprContext expr() {
			return getRuleContext(ExprContext.class,0);
		}
		public TerminalNode ID() { return getToken(CodeFileParser.ID, 0); }
		public MensajeContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_mensaje; }
	}

	public final MensajeContext mensaje() throws RecognitionException {
		MensajeContext _localctx = new MensajeContext(_ctx, getState());
		enterRule(_localctx, 12, RULE_mensaje);
		try {
			setState(60);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,3,_ctx) ) {
			case 1:
				enterOuterAlt(_localctx, 1);
				{
				setState(57);
				match(TEXTO);
				}
				break;
			case 2:
				enterOuterAlt(_localctx, 2);
				{
				setState(58);
				expr(0);
				}
				break;
			case 3:
				enterOuterAlt(_localctx, 3);
				{
				setState(59);
				match(ID);
				}
				break;
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class TipoContext extends ParserRuleContext {
		public TipoContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_tipo; }
	}

	public final TipoContext tipo() throws RecognitionException {
		TipoContext _localctx = new TipoContext(_ctx, getState());
		enterRule(_localctx, 14, RULE_tipo);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(62);
			_la = _input.LA(1);
			if ( !((((_la) & ~0x3f) == 0 && ((1L << _la) & 448L) != 0)) ) {
			_errHandler.recoverInline(this);
			}
			else {
				if ( _input.LA(1)==Token.EOF ) matchedEOF = true;
				_errHandler.reportMatch(this);
				consume();
			}
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class ExprContext extends ParserRuleContext {
		public ExprContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_expr; }
	 
		public ExprContext() { }
		public void copyFrom(ExprContext ctx) {
			super.copyFrom(ctx);
		}
	}
	@SuppressWarnings("CheckReturnValue")
	public static class ParensContext extends ExprContext {
		public ExprContext expr() {
			return getRuleContext(ExprContext.class,0);
		}
		public ParensContext(ExprContext ctx) { copyFrom(ctx); }
	}
	@SuppressWarnings("CheckReturnValue")
	public static class MulDivContext extends ExprContext {
		public Token op;
		public List<ExprContext> expr() {
			return getRuleContexts(ExprContext.class);
		}
		public ExprContext expr(int i) {
			return getRuleContext(ExprContext.class,i);
		}
		public TerminalNode MUL() { return getToken(CodeFileParser.MUL, 0); }
		public TerminalNode DIV() { return getToken(CodeFileParser.DIV, 0); }
		public MulDivContext(ExprContext ctx) { copyFrom(ctx); }
	}
	@SuppressWarnings("CheckReturnValue")
	public static class AddSubContext extends ExprContext {
		public Token op;
		public List<ExprContext> expr() {
			return getRuleContexts(ExprContext.class);
		}
		public ExprContext expr(int i) {
			return getRuleContext(ExprContext.class,i);
		}
		public TerminalNode ADD() { return getToken(CodeFileParser.ADD, 0); }
		public TerminalNode SUB() { return getToken(CodeFileParser.SUB, 0); }
		public AddSubContext(ExprContext ctx) { copyFrom(ctx); }
	}
	@SuppressWarnings("CheckReturnValue")
	public static class IdContext extends ExprContext {
		public TerminalNode ID() { return getToken(CodeFileParser.ID, 0); }
		public IdContext(ExprContext ctx) { copyFrom(ctx); }
	}
	@SuppressWarnings("CheckReturnValue")
	public static class IntContext extends ExprContext {
		public TerminalNode INT() { return getToken(CodeFileParser.INT, 0); }
		public IntContext(ExprContext ctx) { copyFrom(ctx); }
	}

	public final ExprContext expr() throws RecognitionException {
		return expr(0);
	}

	private ExprContext expr(int _p) throws RecognitionException {
		ParserRuleContext _parentctx = _ctx;
		int _parentState = getState();
		ExprContext _localctx = new ExprContext(_ctx, _parentState);
		ExprContext _prevctx = _localctx;
		int _startState = 16;
		enterRecursionRule(_localctx, 16, RULE_expr, _p);
		int _la;
		try {
			int _alt;
			enterOuterAlt(_localctx, 1);
			{
			setState(71);
			_errHandler.sync(this);
			switch (_input.LA(1)) {
			case INT:
				{
				_localctx = new IntContext(_localctx);
				_ctx = _localctx;
				_prevctx = _localctx;

				setState(65);
				match(INT);
				}
				break;
			case ID:
				{
				_localctx = new IdContext(_localctx);
				_ctx = _localctx;
				_prevctx = _localctx;
				setState(66);
				match(ID);
				}
				break;
			case T__8:
				{
				_localctx = new ParensContext(_localctx);
				_ctx = _localctx;
				_prevctx = _localctx;
				setState(67);
				match(T__8);
				setState(68);
				expr(0);
				setState(69);
				match(T__4);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
			_ctx.stop = _input.LT(-1);
			setState(81);
			_errHandler.sync(this);
			_alt = getInterpreter().adaptivePredict(_input,6,_ctx);
			while ( _alt!=2 && _alt!=org.antlr.v4.runtime.atn.ATN.INVALID_ALT_NUMBER ) {
				if ( _alt==1 ) {
					if ( _parseListeners!=null ) triggerExitRuleEvent();
					_prevctx = _localctx;
					{
					setState(79);
					_errHandler.sync(this);
					switch ( getInterpreter().adaptivePredict(_input,5,_ctx) ) {
					case 1:
						{
						_localctx = new MulDivContext(new ExprContext(_parentctx, _parentState));
						pushNewRecursionContext(_localctx, _startState, RULE_expr);
						setState(73);
						if (!(precpred(_ctx, 5))) throw new FailedPredicateException(this, "precpred(_ctx, 5)");
						setState(74);
						((MulDivContext)_localctx).op = _input.LT(1);
						_la = _input.LA(1);
						if ( !(_la==MUL || _la==DIV) ) {
							((MulDivContext)_localctx).op = (Token)_errHandler.recoverInline(this);
						}
						else {
							if ( _input.LA(1)==Token.EOF ) matchedEOF = true;
							_errHandler.reportMatch(this);
							consume();
						}
						setState(75);
						expr(6);
						}
						break;
					case 2:
						{
						_localctx = new AddSubContext(new ExprContext(_parentctx, _parentState));
						pushNewRecursionContext(_localctx, _startState, RULE_expr);
						setState(76);
						if (!(precpred(_ctx, 4))) throw new FailedPredicateException(this, "precpred(_ctx, 4)");
						setState(77);
						((AddSubContext)_localctx).op = _input.LT(1);
						_la = _input.LA(1);
						if ( !(_la==ADD || _la==SUB) ) {
							((AddSubContext)_localctx).op = (Token)_errHandler.recoverInline(this);
						}
						else {
							if ( _input.LA(1)==Token.EOF ) matchedEOF = true;
							_errHandler.reportMatch(this);
							consume();
						}
						setState(78);
						expr(5);
						}
						break;
					}
					} 
				}
				setState(83);
				_errHandler.sync(this);
				_alt = getInterpreter().adaptivePredict(_input,6,_ctx);
			}
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			unrollRecursionContexts(_parentctx);
		}
		return _localctx;
	}

	public boolean sempred(RuleContext _localctx, int ruleIndex, int predIndex) {
		switch (ruleIndex) {
		case 8:
			return expr_sempred((ExprContext)_localctx, predIndex);
		}
		return true;
	}
	private boolean expr_sempred(ExprContext _localctx, int predIndex) {
		switch (predIndex) {
		case 0:
			return precpred(_ctx, 5);
		case 1:
			return precpred(_ctx, 4);
		}
		return true;
	}

	public static final String _serializedATN =
		"\u0004\u0001\u0014U\u0002\u0000\u0007\u0000\u0002\u0001\u0007\u0001\u0002"+
		"\u0002\u0007\u0002\u0002\u0003\u0007\u0003\u0002\u0004\u0007\u0004\u0002"+
		"\u0005\u0007\u0005\u0002\u0006\u0007\u0006\u0002\u0007\u0007\u0007\u0002"+
		"\b\u0007\b\u0001\u0000\u0001\u0000\u0001\u0000\u0001\u0000\u0001\u0000"+
		"\u0001\u0000\u0001\u0001\u0005\u0001\u001a\b\u0001\n\u0001\f\u0001\u001d"+
		"\t\u0001\u0001\u0002\u0001\u0002\u0001\u0002\u0003\u0002\"\b\u0002\u0001"+
		"\u0003\u0001\u0003\u0001\u0003\u0001\u0003\u0001\u0003\u0001\u0003\u0001"+
		"\u0003\u0001\u0003\u0001\u0003\u0001\u0003\u0003\u0003.\b\u0003\u0001"+
		"\u0004\u0001\u0004\u0001\u0004\u0001\u0004\u0001\u0004\u0001\u0005\u0001"+
		"\u0005\u0001\u0005\u0001\u0005\u0001\u0005\u0001\u0006\u0001\u0006\u0001"+
		"\u0006\u0003\u0006=\b\u0006\u0001\u0007\u0001\u0007\u0001\b\u0001\b\u0001"+
		"\b\u0001\b\u0001\b\u0001\b\u0001\b\u0003\bH\b\b\u0001\b\u0001\b\u0001"+
		"\b\u0001\b\u0001\b\u0001\b\u0005\bP\b\b\n\b\f\bS\t\b\u0001\b\u0000\u0001"+
		"\u0010\t\u0000\u0002\u0004\u0006\b\n\f\u000e\u0010\u0000\u0003\u0001\u0000"+
		"\u0006\b\u0001\u0000\u000f\u0010\u0001\u0000\u0011\u0012U\u0000\u0012"+
		"\u0001\u0000\u0000\u0000\u0002\u001b\u0001\u0000\u0000\u0000\u0004!\u0001"+
		"\u0000\u0000\u0000\u0006-\u0001\u0000\u0000\u0000\b/\u0001\u0000\u0000"+
		"\u0000\n4\u0001\u0000\u0000\u0000\f<\u0001\u0000\u0000\u0000\u000e>\u0001"+
		"\u0000\u0000\u0000\u0010G\u0001\u0000\u0000\u0000\u0012\u0013\u0005\n"+
		"\u0000\u0000\u0013\u0014\u0005\f\u0000\u0000\u0014\u0015\u0005\u0001\u0000"+
		"\u0000\u0015\u0016\u0003\u0002\u0001\u0000\u0016\u0017\u0005\u0002\u0000"+
		"\u0000\u0017\u0001\u0001\u0000\u0000\u0000\u0018\u001a\u0003\u0004\u0002"+
		"\u0000\u0019\u0018\u0001\u0000\u0000\u0000\u001a\u001d\u0001\u0000\u0000"+
		"\u0000\u001b\u0019\u0001\u0000\u0000\u0000\u001b\u001c\u0001\u0000\u0000"+
		"\u0000\u001c\u0003\u0001\u0000\u0000\u0000\u001d\u001b\u0001\u0000\u0000"+
		"\u0000\u001e\"\u0003\u0006\u0003\u0000\u001f\"\u0003\b\u0004\u0000 \""+
		"\u0003\n\u0005\u0000!\u001e\u0001\u0000\u0000\u0000!\u001f\u0001\u0000"+
		"\u0000\u0000! \u0001\u0000\u0000\u0000\"\u0005\u0001\u0000\u0000\u0000"+
		"#$\u0003\u000e\u0007\u0000$%\u0005\r\u0000\u0000%&\u0005\u000e\u0000\u0000"+
		"&.\u0001\u0000\u0000\u0000\'(\u0003\u000e\u0007\u0000()\u0005\r\u0000"+
		"\u0000)*\u0005\u0003\u0000\u0000*+\u0003\u0010\b\u0000+,\u0005\u000e\u0000"+
		"\u0000,.\u0001\u0000\u0000\u0000-#\u0001\u0000\u0000\u0000-\'\u0001\u0000"+
		"\u0000\u0000.\u0007\u0001\u0000\u0000\u0000/0\u0005\r\u0000\u000001\u0005"+
		"\u0003\u0000\u000012\u0003\u0010\b\u000023\u0005\u000e\u0000\u00003\t"+
		"\u0001\u0000\u0000\u000045\u0005\u0004\u0000\u000056\u0003\f\u0006\u0000"+
		"67\u0005\u0005\u0000\u000078\u0005\u000e\u0000\u00008\u000b\u0001\u0000"+
		"\u0000\u00009=\u0005\u0013\u0000\u0000:=\u0003\u0010\b\u0000;=\u0005\r"+
		"\u0000\u0000<9\u0001\u0000\u0000\u0000<:\u0001\u0000\u0000\u0000<;\u0001"+
		"\u0000\u0000\u0000=\r\u0001\u0000\u0000\u0000>?\u0007\u0000\u0000\u0000"+
		"?\u000f\u0001\u0000\u0000\u0000@A\u0006\b\uffff\uffff\u0000AH\u0005\u000b"+
		"\u0000\u0000BH\u0005\r\u0000\u0000CD\u0005\t\u0000\u0000DE\u0003\u0010"+
		"\b\u0000EF\u0005\u0005\u0000\u0000FH\u0001\u0000\u0000\u0000G@\u0001\u0000"+
		"\u0000\u0000GB\u0001\u0000\u0000\u0000GC\u0001\u0000\u0000\u0000HQ\u0001"+
		"\u0000\u0000\u0000IJ\n\u0005\u0000\u0000JK\u0007\u0001\u0000\u0000KP\u0003"+
		"\u0010\b\u0006LM\n\u0004\u0000\u0000MN\u0007\u0002\u0000\u0000NP\u0003"+
		"\u0010\b\u0005OI\u0001\u0000\u0000\u0000OL\u0001\u0000\u0000\u0000PS\u0001"+
		"\u0000\u0000\u0000QO\u0001\u0000\u0000\u0000QR\u0001\u0000\u0000\u0000"+
		"R\u0011\u0001\u0000\u0000\u0000SQ\u0001\u0000\u0000\u0000\u0007\u001b"+
		"!-<GOQ";
	public static final ATN _ATN =
		new ATNDeserializer().deserialize(_serializedATN.toCharArray());
	static {
		_decisionToDFA = new DFA[_ATN.getNumberOfDecisions()];
		for (int i = 0; i < _ATN.getNumberOfDecisions(); i++) {
			_decisionToDFA[i] = new DFA(_ATN.getDecisionState(i), i);
		}
	}
}