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
		IF=10, ELSE=11, STRING=12, MAYORQUE=13, MENORQUE=14, MAYORIGUAL=15, MENORIGUAL=16, 
		DOBLEIGUAL=17, NEGACION=18, VERDADERO=19, FALSE=20, INSERT=21, INT=22, 
		CODE=23, ID=24, SEMI=25, MUL=26, DIV=27, ADD=28, SUB=29, WS=30;
	public static final int
		RULE_start = 0, RULE_content = 1, RULE_expresiones = 2, RULE_declaraciones = 3, 
		RULE_asignaciones = 4, RULE_imprimir = 5, RULE_ordenCondicion = 6, RULE_condition_if = 7, 
		RULE_otherwiseWithCondition = 8, RULE_otherwise = 9, RULE_condicion = 10, 
		RULE_tipo = 11, RULE_expr = 12;
	private static String[] makeRuleNames() {
		return new String[] {
			"start", "content", "expresiones", "declaraciones", "asignaciones", "imprimir", 
			"ordenCondicion", "condition_if", "otherwiseWithCondition", "otherwise", 
			"condicion", "tipo", "expr"
		};
	}
	public static final String[] ruleNames = makeRuleNames();

	private static String[] makeLiteralNames() {
		return new String[] {
			null, "'{'", "'}'", "'='", "'MostrarMensaje('", "')'", "'('", "'margit'", 
			"'radahn'", "'godrick'", "'if'", "'else'", null, "'>'", "'<'", "'>='", 
			"'<='", "'=='", "'!='", "'true'", "'false'", "'iniciar'", null, "'codigo'", 
			null, "';'", "'*'", "'/'", "'+'", "'-'"
		};
	}
	private static final String[] _LITERAL_NAMES = makeLiteralNames();
	private static String[] makeSymbolicNames() {
		return new String[] {
			null, null, null, null, null, null, null, null, null, null, "IF", "ELSE", 
			"STRING", "MAYORQUE", "MENORQUE", "MAYORIGUAL", "MENORIGUAL", "DOBLEIGUAL", 
			"NEGACION", "VERDADERO", "FALSE", "INSERT", "INT", "CODE", "ID", "SEMI", 
			"MUL", "DIV", "ADD", "SUB", "WS"
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
			setState(26);
			match(INSERT);
			setState(27);
			match(CODE);
			setState(28);
			match(T__0);
			setState(29);
			content();
			setState(30);
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
			setState(35);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while ((((_la) & ~0x3f) == 0 && ((1L << _la) & 16779152L) != 0)) {
				{
				{
				setState(32);
				expresiones();
				}
				}
				setState(37);
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
		public OrdenCondicionContext ordenCondicion() {
			return getRuleContext(OrdenCondicionContext.class,0);
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
			setState(42);
			_errHandler.sync(this);
			switch (_input.LA(1)) {
			case T__6:
			case T__7:
			case T__8:
				enterOuterAlt(_localctx, 1);
				{
				setState(38);
				declaraciones();
				}
				break;
			case ID:
				enterOuterAlt(_localctx, 2);
				{
				setState(39);
				asignaciones();
				}
				break;
			case T__3:
				enterOuterAlt(_localctx, 3);
				{
				setState(40);
				imprimir();
				}
				break;
			case IF:
				enterOuterAlt(_localctx, 4);
				{
				setState(41);
				ordenCondicion();
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
			setState(54);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,2,_ctx) ) {
			case 1:
				_localctx = new DeclaracionContext(_localctx);
				enterOuterAlt(_localctx, 1);
				{
				setState(44);
				tipo();
				setState(45);
				match(ID);
				setState(46);
				match(SEMI);
				}
				break;
			case 2:
				_localctx = new DeclaracionasignacionContext(_localctx);
				enterOuterAlt(_localctx, 2);
				{
				setState(48);
				tipo();
				setState(49);
				match(ID);
				setState(50);
				match(T__2);
				setState(51);
				expr(0);
				setState(52);
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
			setState(56);
			match(ID);
			setState(57);
			match(T__2);
			setState(58);
			expr(0);
			setState(59);
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
		public ExprContext expr() {
			return getRuleContext(ExprContext.class,0);
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
			setState(61);
			match(T__3);
			setState(62);
			expr(0);
			setState(63);
			match(T__4);
			setState(64);
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
	public static class OrdenCondicionContext extends ParserRuleContext {
		public Condition_ifContext condition_if() {
			return getRuleContext(Condition_ifContext.class,0);
		}
		public List<OtherwiseWithConditionContext> otherwiseWithCondition() {
			return getRuleContexts(OtherwiseWithConditionContext.class);
		}
		public OtherwiseWithConditionContext otherwiseWithCondition(int i) {
			return getRuleContext(OtherwiseWithConditionContext.class,i);
		}
		public OtherwiseContext otherwise() {
			return getRuleContext(OtherwiseContext.class,0);
		}
		public OrdenCondicionContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_ordenCondicion; }
	}

	public final OrdenCondicionContext ordenCondicion() throws RecognitionException {
		OrdenCondicionContext _localctx = new OrdenCondicionContext(_ctx, getState());
		enterRule(_localctx, 12, RULE_ordenCondicion);
		int _la;
		try {
			int _alt;
			enterOuterAlt(_localctx, 1);
			{
			setState(66);
			condition_if();
			setState(70);
			_errHandler.sync(this);
			_alt = getInterpreter().adaptivePredict(_input,3,_ctx);
			while ( _alt!=2 && _alt!=org.antlr.v4.runtime.atn.ATN.INVALID_ALT_NUMBER ) {
				if ( _alt==1 ) {
					{
					{
					setState(67);
					otherwiseWithCondition();
					}
					} 
				}
				setState(72);
				_errHandler.sync(this);
				_alt = getInterpreter().adaptivePredict(_input,3,_ctx);
			}
			setState(74);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==ELSE) {
				{
				setState(73);
				otherwise();
				}
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
	public static class Condition_ifContext extends ParserRuleContext {
		public TerminalNode IF() { return getToken(CodeFileParser.IF, 0); }
		public CondicionContext condicion() {
			return getRuleContext(CondicionContext.class,0);
		}
		public List<ExpresionesContext> expresiones() {
			return getRuleContexts(ExpresionesContext.class);
		}
		public ExpresionesContext expresiones(int i) {
			return getRuleContext(ExpresionesContext.class,i);
		}
		public Condition_ifContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_condition_if; }
	}

	public final Condition_ifContext condition_if() throws RecognitionException {
		Condition_ifContext _localctx = new Condition_ifContext(_ctx, getState());
		enterRule(_localctx, 14, RULE_condition_if);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(76);
			match(IF);
			setState(77);
			match(T__5);
			setState(78);
			condicion();
			setState(79);
			match(T__4);
			setState(80);
			match(T__0);
			setState(84);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while ((((_la) & ~0x3f) == 0 && ((1L << _la) & 16779152L) != 0)) {
				{
				{
				setState(81);
				expresiones();
				}
				}
				setState(86);
				_errHandler.sync(this);
				_la = _input.LA(1);
			}
			setState(87);
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
	public static class OtherwiseWithConditionContext extends ParserRuleContext {
		public TerminalNode ELSE() { return getToken(CodeFileParser.ELSE, 0); }
		public Condition_ifContext condition_if() {
			return getRuleContext(Condition_ifContext.class,0);
		}
		public OtherwiseWithConditionContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_otherwiseWithCondition; }
	}

	public final OtherwiseWithConditionContext otherwiseWithCondition() throws RecognitionException {
		OtherwiseWithConditionContext _localctx = new OtherwiseWithConditionContext(_ctx, getState());
		enterRule(_localctx, 16, RULE_otherwiseWithCondition);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(89);
			match(ELSE);
			setState(90);
			condition_if();
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
	public static class OtherwiseContext extends ParserRuleContext {
		public TerminalNode ELSE() { return getToken(CodeFileParser.ELSE, 0); }
		public List<ExpresionesContext> expresiones() {
			return getRuleContexts(ExpresionesContext.class);
		}
		public ExpresionesContext expresiones(int i) {
			return getRuleContext(ExpresionesContext.class,i);
		}
		public OtherwiseContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_otherwise; }
	}

	public final OtherwiseContext otherwise() throws RecognitionException {
		OtherwiseContext _localctx = new OtherwiseContext(_ctx, getState());
		enterRule(_localctx, 18, RULE_otherwise);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(92);
			match(ELSE);
			setState(93);
			match(T__0);
			setState(97);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while ((((_la) & ~0x3f) == 0 && ((1L << _la) & 16779152L) != 0)) {
				{
				{
				setState(94);
				expresiones();
				}
				}
				setState(99);
				_errHandler.sync(this);
				_la = _input.LA(1);
			}
			setState(100);
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
	public static class CondicionContext extends ParserRuleContext {
		public Token op;
		public List<ExprContext> expr() {
			return getRuleContexts(ExprContext.class);
		}
		public ExprContext expr(int i) {
			return getRuleContext(ExprContext.class,i);
		}
		public TerminalNode MAYORQUE() { return getToken(CodeFileParser.MAYORQUE, 0); }
		public TerminalNode MENORQUE() { return getToken(CodeFileParser.MENORQUE, 0); }
		public TerminalNode MAYORIGUAL() { return getToken(CodeFileParser.MAYORIGUAL, 0); }
		public TerminalNode MENORIGUAL() { return getToken(CodeFileParser.MENORIGUAL, 0); }
		public TerminalNode DOBLEIGUAL() { return getToken(CodeFileParser.DOBLEIGUAL, 0); }
		public TerminalNode NEGACION() { return getToken(CodeFileParser.NEGACION, 0); }
		public CondicionContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_condicion; }
	}

	public final CondicionContext condicion() throws RecognitionException {
		CondicionContext _localctx = new CondicionContext(_ctx, getState());
		enterRule(_localctx, 20, RULE_condicion);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(102);
			expr(0);
			setState(103);
			((CondicionContext)_localctx).op = _input.LT(1);
			_la = _input.LA(1);
			if ( !((((_la) & ~0x3f) == 0 && ((1L << _la) & 516096L) != 0)) ) {
				((CondicionContext)_localctx).op = (Token)_errHandler.recoverInline(this);
			}
			else {
				if ( _input.LA(1)==Token.EOF ) matchedEOF = true;
				_errHandler.reportMatch(this);
				consume();
			}
			setState(104);
			expr(0);
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
		enterRule(_localctx, 22, RULE_tipo);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(106);
			_la = _input.LA(1);
			if ( !((((_la) & ~0x3f) == 0 && ((1L << _la) & 896L) != 0)) ) {
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
	public static class StringContext extends ExprContext {
		public TerminalNode STRING() { return getToken(CodeFileParser.STRING, 0); }
		public StringContext(ExprContext ctx) { copyFrom(ctx); }
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
		int _startState = 24;
		enterRecursionRule(_localctx, 24, RULE_expr, _p);
		int _la;
		try {
			int _alt;
			enterOuterAlt(_localctx, 1);
			{
			setState(116);
			_errHandler.sync(this);
			switch (_input.LA(1)) {
			case INT:
				{
				_localctx = new IntContext(_localctx);
				_ctx = _localctx;
				_prevctx = _localctx;

				setState(109);
				match(INT);
				}
				break;
			case ID:
				{
				_localctx = new IdContext(_localctx);
				_ctx = _localctx;
				_prevctx = _localctx;
				setState(110);
				match(ID);
				}
				break;
			case STRING:
				{
				_localctx = new StringContext(_localctx);
				_ctx = _localctx;
				_prevctx = _localctx;
				setState(111);
				match(STRING);
				}
				break;
			case T__5:
				{
				_localctx = new ParensContext(_localctx);
				_ctx = _localctx;
				_prevctx = _localctx;
				setState(112);
				match(T__5);
				setState(113);
				expr(0);
				setState(114);
				match(T__4);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
			_ctx.stop = _input.LT(-1);
			setState(126);
			_errHandler.sync(this);
			_alt = getInterpreter().adaptivePredict(_input,9,_ctx);
			while ( _alt!=2 && _alt!=org.antlr.v4.runtime.atn.ATN.INVALID_ALT_NUMBER ) {
				if ( _alt==1 ) {
					if ( _parseListeners!=null ) triggerExitRuleEvent();
					_prevctx = _localctx;
					{
					setState(124);
					_errHandler.sync(this);
					switch ( getInterpreter().adaptivePredict(_input,8,_ctx) ) {
					case 1:
						{
						_localctx = new MulDivContext(new ExprContext(_parentctx, _parentState));
						pushNewRecursionContext(_localctx, _startState, RULE_expr);
						setState(118);
						if (!(precpred(_ctx, 6))) throw new FailedPredicateException(this, "precpred(_ctx, 6)");
						setState(119);
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
						setState(120);
						expr(7);
						}
						break;
					case 2:
						{
						_localctx = new AddSubContext(new ExprContext(_parentctx, _parentState));
						pushNewRecursionContext(_localctx, _startState, RULE_expr);
						setState(121);
						if (!(precpred(_ctx, 5))) throw new FailedPredicateException(this, "precpred(_ctx, 5)");
						setState(122);
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
						setState(123);
						expr(6);
						}
						break;
					}
					} 
				}
				setState(128);
				_errHandler.sync(this);
				_alt = getInterpreter().adaptivePredict(_input,9,_ctx);
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
		case 12:
			return expr_sempred((ExprContext)_localctx, predIndex);
		}
		return true;
	}
	private boolean expr_sempred(ExprContext _localctx, int predIndex) {
		switch (predIndex) {
		case 0:
			return precpred(_ctx, 6);
		case 1:
			return precpred(_ctx, 5);
		}
		return true;
	}

	public static final String _serializedATN =
		"\u0004\u0001\u001e\u0082\u0002\u0000\u0007\u0000\u0002\u0001\u0007\u0001"+
		"\u0002\u0002\u0007\u0002\u0002\u0003\u0007\u0003\u0002\u0004\u0007\u0004"+
		"\u0002\u0005\u0007\u0005\u0002\u0006\u0007\u0006\u0002\u0007\u0007\u0007"+
		"\u0002\b\u0007\b\u0002\t\u0007\t\u0002\n\u0007\n\u0002\u000b\u0007\u000b"+
		"\u0002\f\u0007\f\u0001\u0000\u0001\u0000\u0001\u0000\u0001\u0000\u0001"+
		"\u0000\u0001\u0000\u0001\u0001\u0005\u0001\"\b\u0001\n\u0001\f\u0001%"+
		"\t\u0001\u0001\u0002\u0001\u0002\u0001\u0002\u0001\u0002\u0003\u0002+"+
		"\b\u0002\u0001\u0003\u0001\u0003\u0001\u0003\u0001\u0003\u0001\u0003\u0001"+
		"\u0003\u0001\u0003\u0001\u0003\u0001\u0003\u0001\u0003\u0003\u00037\b"+
		"\u0003\u0001\u0004\u0001\u0004\u0001\u0004\u0001\u0004\u0001\u0004\u0001"+
		"\u0005\u0001\u0005\u0001\u0005\u0001\u0005\u0001\u0005\u0001\u0006\u0001"+
		"\u0006\u0005\u0006E\b\u0006\n\u0006\f\u0006H\t\u0006\u0001\u0006\u0003"+
		"\u0006K\b\u0006\u0001\u0007\u0001\u0007\u0001\u0007\u0001\u0007\u0001"+
		"\u0007\u0001\u0007\u0005\u0007S\b\u0007\n\u0007\f\u0007V\t\u0007\u0001"+
		"\u0007\u0001\u0007\u0001\b\u0001\b\u0001\b\u0001\t\u0001\t\u0001\t\u0005"+
		"\t`\b\t\n\t\f\tc\t\t\u0001\t\u0001\t\u0001\n\u0001\n\u0001\n\u0001\n\u0001"+
		"\u000b\u0001\u000b\u0001\f\u0001\f\u0001\f\u0001\f\u0001\f\u0001\f\u0001"+
		"\f\u0001\f\u0003\fu\b\f\u0001\f\u0001\f\u0001\f\u0001\f\u0001\f\u0001"+
		"\f\u0005\f}\b\f\n\f\f\f\u0080\t\f\u0001\f\u0000\u0001\u0018\r\u0000\u0002"+
		"\u0004\u0006\b\n\f\u000e\u0010\u0012\u0014\u0016\u0018\u0000\u0004\u0001"+
		"\u0000\r\u0012\u0001\u0000\u0007\t\u0001\u0000\u001a\u001b\u0001\u0000"+
		"\u001c\u001d\u0082\u0000\u001a\u0001\u0000\u0000\u0000\u0002#\u0001\u0000"+
		"\u0000\u0000\u0004*\u0001\u0000\u0000\u0000\u00066\u0001\u0000\u0000\u0000"+
		"\b8\u0001\u0000\u0000\u0000\n=\u0001\u0000\u0000\u0000\fB\u0001\u0000"+
		"\u0000\u0000\u000eL\u0001\u0000\u0000\u0000\u0010Y\u0001\u0000\u0000\u0000"+
		"\u0012\\\u0001\u0000\u0000\u0000\u0014f\u0001\u0000\u0000\u0000\u0016"+
		"j\u0001\u0000\u0000\u0000\u0018t\u0001\u0000\u0000\u0000\u001a\u001b\u0005"+
		"\u0015\u0000\u0000\u001b\u001c\u0005\u0017\u0000\u0000\u001c\u001d\u0005"+
		"\u0001\u0000\u0000\u001d\u001e\u0003\u0002\u0001\u0000\u001e\u001f\u0005"+
		"\u0002\u0000\u0000\u001f\u0001\u0001\u0000\u0000\u0000 \"\u0003\u0004"+
		"\u0002\u0000! \u0001\u0000\u0000\u0000\"%\u0001\u0000\u0000\u0000#!\u0001"+
		"\u0000\u0000\u0000#$\u0001\u0000\u0000\u0000$\u0003\u0001\u0000\u0000"+
		"\u0000%#\u0001\u0000\u0000\u0000&+\u0003\u0006\u0003\u0000\'+\u0003\b"+
		"\u0004\u0000(+\u0003\n\u0005\u0000)+\u0003\f\u0006\u0000*&\u0001\u0000"+
		"\u0000\u0000*\'\u0001\u0000\u0000\u0000*(\u0001\u0000\u0000\u0000*)\u0001"+
		"\u0000\u0000\u0000+\u0005\u0001\u0000\u0000\u0000,-\u0003\u0016\u000b"+
		"\u0000-.\u0005\u0018\u0000\u0000./\u0005\u0019\u0000\u0000/7\u0001\u0000"+
		"\u0000\u000001\u0003\u0016\u000b\u000012\u0005\u0018\u0000\u000023\u0005"+
		"\u0003\u0000\u000034\u0003\u0018\f\u000045\u0005\u0019\u0000\u000057\u0001"+
		"\u0000\u0000\u00006,\u0001\u0000\u0000\u000060\u0001\u0000\u0000\u0000"+
		"7\u0007\u0001\u0000\u0000\u000089\u0005\u0018\u0000\u00009:\u0005\u0003"+
		"\u0000\u0000:;\u0003\u0018\f\u0000;<\u0005\u0019\u0000\u0000<\t\u0001"+
		"\u0000\u0000\u0000=>\u0005\u0004\u0000\u0000>?\u0003\u0018\f\u0000?@\u0005"+
		"\u0005\u0000\u0000@A\u0005\u0019\u0000\u0000A\u000b\u0001\u0000\u0000"+
		"\u0000BF\u0003\u000e\u0007\u0000CE\u0003\u0010\b\u0000DC\u0001\u0000\u0000"+
		"\u0000EH\u0001\u0000\u0000\u0000FD\u0001\u0000\u0000\u0000FG\u0001\u0000"+
		"\u0000\u0000GJ\u0001\u0000\u0000\u0000HF\u0001\u0000\u0000\u0000IK\u0003"+
		"\u0012\t\u0000JI\u0001\u0000\u0000\u0000JK\u0001\u0000\u0000\u0000K\r"+
		"\u0001\u0000\u0000\u0000LM\u0005\n\u0000\u0000MN\u0005\u0006\u0000\u0000"+
		"NO\u0003\u0014\n\u0000OP\u0005\u0005\u0000\u0000PT\u0005\u0001\u0000\u0000"+
		"QS\u0003\u0004\u0002\u0000RQ\u0001\u0000\u0000\u0000SV\u0001\u0000\u0000"+
		"\u0000TR\u0001\u0000\u0000\u0000TU\u0001\u0000\u0000\u0000UW\u0001\u0000"+
		"\u0000\u0000VT\u0001\u0000\u0000\u0000WX\u0005\u0002\u0000\u0000X\u000f"+
		"\u0001\u0000\u0000\u0000YZ\u0005\u000b\u0000\u0000Z[\u0003\u000e\u0007"+
		"\u0000[\u0011\u0001\u0000\u0000\u0000\\]\u0005\u000b\u0000\u0000]a\u0005"+
		"\u0001\u0000\u0000^`\u0003\u0004\u0002\u0000_^\u0001\u0000\u0000\u0000"+
		"`c\u0001\u0000\u0000\u0000a_\u0001\u0000\u0000\u0000ab\u0001\u0000\u0000"+
		"\u0000bd\u0001\u0000\u0000\u0000ca\u0001\u0000\u0000\u0000de\u0005\u0002"+
		"\u0000\u0000e\u0013\u0001\u0000\u0000\u0000fg\u0003\u0018\f\u0000gh\u0007"+
		"\u0000\u0000\u0000hi\u0003\u0018\f\u0000i\u0015\u0001\u0000\u0000\u0000"+
		"jk\u0007\u0001\u0000\u0000k\u0017\u0001\u0000\u0000\u0000lm\u0006\f\uffff"+
		"\uffff\u0000mu\u0005\u0016\u0000\u0000nu\u0005\u0018\u0000\u0000ou\u0005"+
		"\f\u0000\u0000pq\u0005\u0006\u0000\u0000qr\u0003\u0018\f\u0000rs\u0005"+
		"\u0005\u0000\u0000su\u0001\u0000\u0000\u0000tl\u0001\u0000\u0000\u0000"+
		"tn\u0001\u0000\u0000\u0000to\u0001\u0000\u0000\u0000tp\u0001\u0000\u0000"+
		"\u0000u~\u0001\u0000\u0000\u0000vw\n\u0006\u0000\u0000wx\u0007\u0002\u0000"+
		"\u0000x}\u0003\u0018\f\u0007yz\n\u0005\u0000\u0000z{\u0007\u0003\u0000"+
		"\u0000{}\u0003\u0018\f\u0006|v\u0001\u0000\u0000\u0000|y\u0001\u0000\u0000"+
		"\u0000}\u0080\u0001\u0000\u0000\u0000~|\u0001\u0000\u0000\u0000~\u007f"+
		"\u0001\u0000\u0000\u0000\u007f\u0019\u0001\u0000\u0000\u0000\u0080~\u0001"+
		"\u0000\u0000\u0000\n#*6FJTat|~";
	public static final ATN _ATN =
		new ATNDeserializer().deserialize(_serializedATN.toCharArray());
	static {
		_decisionToDFA = new DFA[_ATN.getNumberOfDecisions()];
		for (int i = 0; i < _ATN.getNumberOfDecisions(); i++) {
			_decisionToDFA[i] = new DFA(_ATN.getDecisionState(i), i);
		}
	}
}