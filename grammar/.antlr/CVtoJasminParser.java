// Generated from c://Users//saule//Desktop//Codigo_Editor//grammar//CVtoJasmin.g4 by ANTLR 4.13.1
import org.antlr.v4.runtime.atn.*;
import org.antlr.v4.runtime.dfa.DFA;
import org.antlr.v4.runtime.*;
import org.antlr.v4.runtime.misc.*;
import org.antlr.v4.runtime.tree.*;
import java.util.List;
import java.util.Iterator;
import java.util.ArrayList;

@SuppressWarnings({"all", "warnings", "unchecked", "unused", "cast", "CheckReturnValue"})
public class CVtoJasminParser extends Parser {
	static { RuntimeMetaData.checkVersion("4.13.1", RuntimeMetaData.VERSION); }

	protected static final DFA[] _decisionToDFA;
	protected static final PredictionContextCache _sharedContextCache =
		new PredictionContextCache();
	public static final int
		T__0=1, T__1=2, T__2=3, T__3=4, T__4=5, T__5=6, T__6=7, T__7=8, T__8=9, 
		T__9=10, T__10=11, T__11=12, T__12=13, T__13=14, T__14=15, T__15=16, T__16=17, 
		T__17=18, T__18=19, T__19=20, INSERT=21, CODE=22, MOD=23, COMA=24, NEGAN=25, 
		APARENTESIS=26, CPARENTESIS=27, ALLAVE=28, CLLAVE=29, EQUALS=30, MUL=31, 
		DIV=32, ADD=33, SUB=34, PRINT=35, IF=36, ELSE=37, WHILE=38, COND_MAT=39, 
		COND_LOG=40, STRING=41, INT=42, ID=43, FLOAT=44, CHAR=45, SEMI=46, LINE_COMMENT=47, 
		BLOCK_COMMENT=48, WS=49;
	public static final int
		RULE_start = 0, RULE_content = 1, RULE_expresiones = 2, RULE_declaraciones = 3, 
		RULE_assignament = 4, RULE_imprimir = 5, RULE_tipo = 6, RULE_expr = 7, 
		RULE_ordencondicional = 8, RULE_condicional = 9, RULE_condicional_elseif = 10, 
		RULE_condicional_else = 11, RULE_while = 12;
	private static String[] makeRuleNames() {
		return new String[] {
			"start", "content", "expresiones", "declaraciones", "assignament", "imprimir", 
			"tipo", "expr", "ordencondicional", "condicional", "condicional_elseif", 
			"condicional_else", "while"
		};
	}
	public static final String[] ruleNames = makeRuleNames();

	private static String[] makeLiteralNames() {
		return new String[] {
			null, "'+='", "'-='", "'*='", "'/='", "'%='", "'--'", "'++'", "'margit'", 
			"'radahn'", "'godrick'", "'<'", "'>'", "'<='", "'>='", "'=='", "'!='", 
			"'true'", "'false'", "'&&'", "'||'", "'iniciar'", "'codigo'", "'%'", 
			"','", "'!'", "'('", "')'", "'{'", "'}'", "'='", "'*'", "'/'", "'+'", 
			"'-'", "'MostrarMensaje'", "'verificar'", "'contrario'", "'repetir'", 
			null, null, null, null, null, null, null, "';'"
		};
	}
	private static final String[] _LITERAL_NAMES = makeLiteralNames();
	private static String[] makeSymbolicNames() {
		return new String[] {
			null, null, null, null, null, null, null, null, null, null, null, null, 
			null, null, null, null, null, null, null, null, null, "INSERT", "CODE", 
			"MOD", "COMA", "NEGAN", "APARENTESIS", "CPARENTESIS", "ALLAVE", "CLLAVE", 
			"EQUALS", "MUL", "DIV", "ADD", "SUB", "PRINT", "IF", "ELSE", "WHILE", 
			"COND_MAT", "COND_LOG", "STRING", "INT", "ID", "FLOAT", "CHAR", "SEMI", 
			"LINE_COMMENT", "BLOCK_COMMENT", "WS"
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
	public String getGrammarFileName() { return "CVtoJasmin.g4"; }

	@Override
	public String[] getRuleNames() { return ruleNames; }

	@Override
	public String getSerializedATN() { return _serializedATN; }

	@Override
	public ATN getATN() { return _ATN; }

	public CVtoJasminParser(TokenStream input) {
		super(input);
		_interp = new ParserATNSimulator(this,_ATN,_decisionToDFA,_sharedContextCache);
	}

	@SuppressWarnings("CheckReturnValue")
	public static class StartContext extends ParserRuleContext {
		public TerminalNode INSERT() { return getToken(CVtoJasminParser.INSERT, 0); }
		public TerminalNode CODE() { return getToken(CVtoJasminParser.CODE, 0); }
		public TerminalNode ALLAVE() { return getToken(CVtoJasminParser.ALLAVE, 0); }
		public ContentContext content() {
			return getRuleContext(ContentContext.class,0);
		}
		public TerminalNode CLLAVE() { return getToken(CVtoJasminParser.CLLAVE, 0); }
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
			match(ALLAVE);
			setState(29);
			content();
			setState(30);
			match(CLLAVE);
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
		try {
			int _alt;
			enterOuterAlt(_localctx, 1);
			{
			setState(35);
			_errHandler.sync(this);
			_alt = getInterpreter().adaptivePredict(_input,0,_ctx);
			while ( _alt!=1 && _alt!=org.antlr.v4.runtime.atn.ATN.INVALID_ALT_NUMBER ) {
				if ( _alt==1+1 ) {
					{
					{
					setState(32);
					expresiones();
					}
					} 
				}
				setState(37);
				_errHandler.sync(this);
				_alt = getInterpreter().adaptivePredict(_input,0,_ctx);
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
		public AssignamentContext assignament() {
			return getRuleContext(AssignamentContext.class,0);
		}
		public ImprimirContext imprimir() {
			return getRuleContext(ImprimirContext.class,0);
		}
		public OrdencondicionalContext ordencondicional() {
			return getRuleContext(OrdencondicionalContext.class,0);
		}
		public WhileContext while_() {
			return getRuleContext(WhileContext.class,0);
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
			setState(43);
			_errHandler.sync(this);
			switch (_input.LA(1)) {
			case T__7:
			case T__8:
			case T__9:
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
				assignament();
				}
				break;
			case PRINT:
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
				ordencondicional();
				}
				break;
			case WHILE:
				enterOuterAlt(_localctx, 5);
				{
				setState(42);
				while_();
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
		public TerminalNode ID() { return getToken(CVtoJasminParser.ID, 0); }
		public TerminalNode SEMI() { return getToken(CVtoJasminParser.SEMI, 0); }
		public TerminalNode EQUALS() { return getToken(CVtoJasminParser.EQUALS, 0); }
		public ExprContext expr() {
			return getRuleContext(ExprContext.class,0);
		}
		public DeclaracionContext(DeclaracionesContext ctx) { copyFrom(ctx); }
	}

	public final DeclaracionesContext declaraciones() throws RecognitionException {
		DeclaracionesContext _localctx = new DeclaracionesContext(_ctx, getState());
		enterRule(_localctx, 6, RULE_declaraciones);
		int _la;
		try {
			_localctx = new DeclaracionContext(_localctx);
			enterOuterAlt(_localctx, 1);
			{
			setState(45);
			tipo();
			setState(46);
			match(ID);
			setState(49);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==EQUALS) {
				{
				setState(47);
				match(EQUALS);
				setState(48);
				expr(0);
				}
			}

			setState(51);
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
	public static class AssignamentContext extends ParserRuleContext {
		public AssignamentContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_assignament; }
	 
		public AssignamentContext() { }
		public void copyFrom(AssignamentContext ctx) {
			super.copyFrom(ctx);
		}
	}
	@SuppressWarnings("CheckReturnValue")
	public static class AsignaContext extends AssignamentContext {
		public Token com;
		public TerminalNode ID() { return getToken(CVtoJasminParser.ID, 0); }
		public TerminalNode SEMI() { return getToken(CVtoJasminParser.SEMI, 0); }
		public ExprContext expr() {
			return getRuleContext(ExprContext.class,0);
		}
		public AsignaContext(AssignamentContext ctx) { copyFrom(ctx); }
	}
	@SuppressWarnings("CheckReturnValue")
	public static class IncrementoContext extends AssignamentContext {
		public Token com;
		public TerminalNode ID() { return getToken(CVtoJasminParser.ID, 0); }
		public TerminalNode SEMI() { return getToken(CVtoJasminParser.SEMI, 0); }
		public ExprContext expr() {
			return getRuleContext(ExprContext.class,0);
		}
		public IncrementoContext(AssignamentContext ctx) { copyFrom(ctx); }
	}
	@SuppressWarnings("CheckReturnValue")
	public static class AsignacionesContext extends AssignamentContext {
		public TerminalNode ID() { return getToken(CVtoJasminParser.ID, 0); }
		public TerminalNode EQUALS() { return getToken(CVtoJasminParser.EQUALS, 0); }
		public ExprContext expr() {
			return getRuleContext(ExprContext.class,0);
		}
		public TerminalNode SEMI() { return getToken(CVtoJasminParser.SEMI, 0); }
		public AsignacionesContext(AssignamentContext ctx) { copyFrom(ctx); }
	}

	public final AssignamentContext assignament() throws RecognitionException {
		AssignamentContext _localctx = new AssignamentContext(_ctx, getState());
		enterRule(_localctx, 8, RULE_assignament);
		int _la;
		try {
			setState(70);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,5,_ctx) ) {
			case 1:
				_localctx = new AsignacionesContext(_localctx);
				enterOuterAlt(_localctx, 1);
				{
				setState(53);
				match(ID);
				setState(54);
				match(EQUALS);
				setState(55);
				expr(0);
				setState(56);
				match(SEMI);
				}
				break;
			case 2:
				_localctx = new AsignaContext(_localctx);
				enterOuterAlt(_localctx, 2);
				{
				setState(58);
				match(ID);
				setState(59);
				((AsignaContext)_localctx).com = _input.LT(1);
				_la = _input.LA(1);
				if ( !((((_la) & ~0x3f) == 0 && ((1L << _la) & 62L) != 0)) ) {
					((AsignaContext)_localctx).com = (Token)_errHandler.recoverInline(this);
				}
				else {
					if ( _input.LA(1)==Token.EOF ) matchedEOF = true;
					_errHandler.reportMatch(this);
					consume();
				}
				setState(61);
				_errHandler.sync(this);
				_la = _input.LA(1);
				if ((((_la) & ~0x3f) == 0 && ((1L << _la) & 68195558356992L) != 0)) {
					{
					setState(60);
					expr(0);
					}
				}

				setState(63);
				match(SEMI);
				}
				break;
			case 3:
				_localctx = new IncrementoContext(_localctx);
				enterOuterAlt(_localctx, 3);
				{
				setState(64);
				match(ID);
				setState(65);
				((IncrementoContext)_localctx).com = _input.LT(1);
				_la = _input.LA(1);
				if ( !(_la==T__5 || _la==T__6) ) {
					((IncrementoContext)_localctx).com = (Token)_errHandler.recoverInline(this);
				}
				else {
					if ( _input.LA(1)==Token.EOF ) matchedEOF = true;
					_errHandler.reportMatch(this);
					consume();
				}
				setState(67);
				_errHandler.sync(this);
				_la = _input.LA(1);
				if ((((_la) & ~0x3f) == 0 && ((1L << _la) & 68195558356992L) != 0)) {
					{
					setState(66);
					expr(0);
					}
				}

				setState(69);
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
	public static class ImprimirContext extends ParserRuleContext {
		public TerminalNode PRINT() { return getToken(CVtoJasminParser.PRINT, 0); }
		public TerminalNode APARENTESIS() { return getToken(CVtoJasminParser.APARENTESIS, 0); }
		public ExprContext expr() {
			return getRuleContext(ExprContext.class,0);
		}
		public TerminalNode CPARENTESIS() { return getToken(CVtoJasminParser.CPARENTESIS, 0); }
		public TerminalNode SEMI() { return getToken(CVtoJasminParser.SEMI, 0); }
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
			setState(72);
			match(PRINT);
			setState(73);
			match(APARENTESIS);
			setState(74);
			expr(0);
			setState(75);
			match(CPARENTESIS);
			setState(76);
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
	public static class TipoContext extends ParserRuleContext {
		public TipoContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_tipo; }
	}

	public final TipoContext tipo() throws RecognitionException {
		TipoContext _localctx = new TipoContext(_ctx, getState());
		enterRule(_localctx, 12, RULE_tipo);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(78);
			_la = _input.LA(1);
			if ( !((((_la) & ~0x3f) == 0 && ((1L << _la) & 1792L) != 0)) ) {
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
		public TerminalNode APARENTESIS() { return getToken(CVtoJasminParser.APARENTESIS, 0); }
		public ExprContext expr() {
			return getRuleContext(ExprContext.class,0);
		}
		public TerminalNode CPARENTESIS() { return getToken(CVtoJasminParser.CPARENTESIS, 0); }
		public ParensContext(ExprContext ctx) { copyFrom(ctx); }
	}
	@SuppressWarnings("CheckReturnValue")
	public static class ConditionContext extends ExprContext {
		public Token operator;
		public List<ExprContext> expr() {
			return getRuleContexts(ExprContext.class);
		}
		public ExprContext expr(int i) {
			return getRuleContext(ExprContext.class,i);
		}
		public ConditionContext(ExprContext ctx) { copyFrom(ctx); }
	}
	@SuppressWarnings("CheckReturnValue")
	public static class SignNumberContext extends ExprContext {
		public Token op;
		public ExprContext expr() {
			return getRuleContext(ExprContext.class,0);
		}
		public TerminalNode ADD() { return getToken(CVtoJasminParser.ADD, 0); }
		public TerminalNode SUB() { return getToken(CVtoJasminParser.SUB, 0); }
		public SignNumberContext(ExprContext ctx) { copyFrom(ctx); }
	}
	@SuppressWarnings("CheckReturnValue")
	public static class StringContext extends ExprContext {
		public TerminalNode STRING() { return getToken(CVtoJasminParser.STRING, 0); }
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
		public TerminalNode MUL() { return getToken(CVtoJasminParser.MUL, 0); }
		public TerminalNode DIV() { return getToken(CVtoJasminParser.DIV, 0); }
		public TerminalNode MOD() { return getToken(CVtoJasminParser.MOD, 0); }
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
		public TerminalNode ADD() { return getToken(CVtoJasminParser.ADD, 0); }
		public TerminalNode SUB() { return getToken(CVtoJasminParser.SUB, 0); }
		public AddSubContext(ExprContext ctx) { copyFrom(ctx); }
	}
	@SuppressWarnings("CheckReturnValue")
	public static class LogicConditionContext extends ExprContext {
		public Token operator;
		public List<ExprContext> expr() {
			return getRuleContexts(ExprContext.class);
		}
		public ExprContext expr(int i) {
			return getRuleContext(ExprContext.class,i);
		}
		public LogicConditionContext(ExprContext ctx) { copyFrom(ctx); }
	}
	@SuppressWarnings("CheckReturnValue")
	public static class CharContext extends ExprContext {
		public TerminalNode CHAR() { return getToken(CVtoJasminParser.CHAR, 0); }
		public CharContext(ExprContext ctx) { copyFrom(ctx); }
	}
	@SuppressWarnings("CheckReturnValue")
	public static class IdContext extends ExprContext {
		public TerminalNode ID() { return getToken(CVtoJasminParser.ID, 0); }
		public IdContext(ExprContext ctx) { copyFrom(ctx); }
	}
	@SuppressWarnings("CheckReturnValue")
	public static class FloatContext extends ExprContext {
		public TerminalNode FLOAT() { return getToken(CVtoJasminParser.FLOAT, 0); }
		public FloatContext(ExprContext ctx) { copyFrom(ctx); }
	}
	@SuppressWarnings("CheckReturnValue")
	public static class IntContext extends ExprContext {
		public TerminalNode INT() { return getToken(CVtoJasminParser.INT, 0); }
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
		int _startState = 14;
		enterRecursionRule(_localctx, 14, RULE_expr, _p);
		int _la;
		try {
			int _alt;
			enterOuterAlt(_localctx, 1);
			{
			setState(93);
			_errHandler.sync(this);
			switch (_input.LA(1)) {
			case APARENTESIS:
				{
				_localctx = new ParensContext(_localctx);
				_ctx = _localctx;
				_prevctx = _localctx;

				setState(81);
				match(APARENTESIS);
				setState(82);
				expr(0);
				setState(83);
				match(CPARENTESIS);
				}
				break;
			case ADD:
			case SUB:
				{
				_localctx = new SignNumberContext(_localctx);
				_ctx = _localctx;
				_prevctx = _localctx;
				setState(85);
				((SignNumberContext)_localctx).op = _input.LT(1);
				_la = _input.LA(1);
				if ( !(_la==ADD || _la==SUB) ) {
					((SignNumberContext)_localctx).op = (Token)_errHandler.recoverInline(this);
				}
				else {
					if ( _input.LA(1)==Token.EOF ) matchedEOF = true;
					_errHandler.reportMatch(this);
					consume();
				}
				setState(86);
				expr(9);
				}
				break;
			case T__10:
			case T__11:
			case T__12:
			case T__13:
			case T__14:
			case T__15:
			case T__16:
			case T__17:
				{
				_localctx = new ConditionContext(_localctx);
				_ctx = _localctx;
				_prevctx = _localctx;
				setState(87);
				((ConditionContext)_localctx).operator = _input.LT(1);
				_la = _input.LA(1);
				if ( !((((_la) & ~0x3f) == 0 && ((1L << _la) & 522240L) != 0)) ) {
					((ConditionContext)_localctx).operator = (Token)_errHandler.recoverInline(this);
				}
				else {
					if ( _input.LA(1)==Token.EOF ) matchedEOF = true;
					_errHandler.reportMatch(this);
					consume();
				}
				}
				break;
			case INT:
				{
				_localctx = new IntContext(_localctx);
				_ctx = _localctx;
				_prevctx = _localctx;
				setState(88);
				match(INT);
				}
				break;
			case ID:
				{
				_localctx = new IdContext(_localctx);
				_ctx = _localctx;
				_prevctx = _localctx;
				setState(89);
				match(ID);
				}
				break;
			case STRING:
				{
				_localctx = new StringContext(_localctx);
				_ctx = _localctx;
				_prevctx = _localctx;
				setState(90);
				match(STRING);
				}
				break;
			case FLOAT:
				{
				_localctx = new FloatContext(_localctx);
				_ctx = _localctx;
				_prevctx = _localctx;
				setState(91);
				match(FLOAT);
				}
				break;
			case CHAR:
				{
				_localctx = new CharContext(_localctx);
				_ctx = _localctx;
				_prevctx = _localctx;
				setState(92);
				match(CHAR);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
			_ctx.stop = _input.LT(-1);
			setState(109);
			_errHandler.sync(this);
			_alt = getInterpreter().adaptivePredict(_input,8,_ctx);
			while ( _alt!=2 && _alt!=org.antlr.v4.runtime.atn.ATN.INVALID_ALT_NUMBER ) {
				if ( _alt==1 ) {
					if ( _parseListeners!=null ) triggerExitRuleEvent();
					_prevctx = _localctx;
					{
					setState(107);
					_errHandler.sync(this);
					switch ( getInterpreter().adaptivePredict(_input,7,_ctx) ) {
					case 1:
						{
						_localctx = new MulDivContext(new ExprContext(_parentctx, _parentState));
						pushNewRecursionContext(_localctx, _startState, RULE_expr);
						setState(95);
						if (!(precpred(_ctx, 11))) throw new FailedPredicateException(this, "precpred(_ctx, 11)");
						setState(96);
						((MulDivContext)_localctx).op = _input.LT(1);
						_la = _input.LA(1);
						if ( !((((_la) & ~0x3f) == 0 && ((1L << _la) & 6450839552L) != 0)) ) {
							((MulDivContext)_localctx).op = (Token)_errHandler.recoverInline(this);
						}
						else {
							if ( _input.LA(1)==Token.EOF ) matchedEOF = true;
							_errHandler.reportMatch(this);
							consume();
						}
						setState(97);
						expr(12);
						}
						break;
					case 2:
						{
						_localctx = new AddSubContext(new ExprContext(_parentctx, _parentState));
						pushNewRecursionContext(_localctx, _startState, RULE_expr);
						setState(98);
						if (!(precpred(_ctx, 10))) throw new FailedPredicateException(this, "precpred(_ctx, 10)");
						setState(99);
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
						setState(100);
						expr(11);
						}
						break;
					case 3:
						{
						_localctx = new ConditionContext(new ExprContext(_parentctx, _parentState));
						pushNewRecursionContext(_localctx, _startState, RULE_expr);
						setState(101);
						if (!(precpred(_ctx, 7))) throw new FailedPredicateException(this, "precpred(_ctx, 7)");
						setState(102);
						((ConditionContext)_localctx).operator = _input.LT(1);
						_la = _input.LA(1);
						if ( !((((_la) & ~0x3f) == 0 && ((1L << _la) & 522240L) != 0)) ) {
							((ConditionContext)_localctx).operator = (Token)_errHandler.recoverInline(this);
						}
						else {
							if ( _input.LA(1)==Token.EOF ) matchedEOF = true;
							_errHandler.reportMatch(this);
							consume();
						}
						setState(103);
						expr(8);
						}
						break;
					case 4:
						{
						_localctx = new LogicConditionContext(new ExprContext(_parentctx, _parentState));
						pushNewRecursionContext(_localctx, _startState, RULE_expr);
						setState(104);
						if (!(precpred(_ctx, 6))) throw new FailedPredicateException(this, "precpred(_ctx, 6)");
						setState(105);
						((LogicConditionContext)_localctx).operator = _input.LT(1);
						_la = _input.LA(1);
						if ( !(_la==T__18 || _la==T__19) ) {
							((LogicConditionContext)_localctx).operator = (Token)_errHandler.recoverInline(this);
						}
						else {
							if ( _input.LA(1)==Token.EOF ) matchedEOF = true;
							_errHandler.reportMatch(this);
							consume();
						}
						setState(106);
						expr(7);
						}
						break;
					}
					} 
				}
				setState(111);
				_errHandler.sync(this);
				_alt = getInterpreter().adaptivePredict(_input,8,_ctx);
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

	@SuppressWarnings("CheckReturnValue")
	public static class OrdencondicionalContext extends ParserRuleContext {
		public CondicionalContext condicional() {
			return getRuleContext(CondicionalContext.class,0);
		}
		public List<Condicional_elseifContext> condicional_elseif() {
			return getRuleContexts(Condicional_elseifContext.class);
		}
		public Condicional_elseifContext condicional_elseif(int i) {
			return getRuleContext(Condicional_elseifContext.class,i);
		}
		public Condicional_elseContext condicional_else() {
			return getRuleContext(Condicional_elseContext.class,0);
		}
		public OrdencondicionalContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_ordencondicional; }
	}

	public final OrdencondicionalContext ordencondicional() throws RecognitionException {
		OrdencondicionalContext _localctx = new OrdencondicionalContext(_ctx, getState());
		enterRule(_localctx, 16, RULE_ordencondicional);
		int _la;
		try {
			int _alt;
			enterOuterAlt(_localctx, 1);
			{
			setState(112);
			condicional();
			setState(116);
			_errHandler.sync(this);
			_alt = getInterpreter().adaptivePredict(_input,9,_ctx);
			while ( _alt!=2 && _alt!=org.antlr.v4.runtime.atn.ATN.INVALID_ALT_NUMBER ) {
				if ( _alt==1 ) {
					{
					{
					setState(113);
					condicional_elseif();
					}
					} 
				}
				setState(118);
				_errHandler.sync(this);
				_alt = getInterpreter().adaptivePredict(_input,9,_ctx);
			}
			setState(120);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==ELSE) {
				{
				setState(119);
				condicional_else();
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
	public static class CondicionalContext extends ParserRuleContext {
		public TerminalNode IF() { return getToken(CVtoJasminParser.IF, 0); }
		public TerminalNode APARENTESIS() { return getToken(CVtoJasminParser.APARENTESIS, 0); }
		public ExprContext expr() {
			return getRuleContext(ExprContext.class,0);
		}
		public TerminalNode CPARENTESIS() { return getToken(CVtoJasminParser.CPARENTESIS, 0); }
		public TerminalNode ALLAVE() { return getToken(CVtoJasminParser.ALLAVE, 0); }
		public TerminalNode CLLAVE() { return getToken(CVtoJasminParser.CLLAVE, 0); }
		public List<ExpresionesContext> expresiones() {
			return getRuleContexts(ExpresionesContext.class);
		}
		public ExpresionesContext expresiones(int i) {
			return getRuleContext(ExpresionesContext.class,i);
		}
		public CondicionalContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_condicional; }
	}

	public final CondicionalContext condicional() throws RecognitionException {
		CondicionalContext _localctx = new CondicionalContext(_ctx, getState());
		enterRule(_localctx, 18, RULE_condicional);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(122);
			match(IF);
			setState(123);
			match(APARENTESIS);
			setState(124);
			expr(0);
			setState(125);
			match(CPARENTESIS);
			setState(126);
			match(ALLAVE);
			setState(130);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while ((((_la) & ~0x3f) == 0 && ((1L << _la) & 9174050146048L) != 0)) {
				{
				{
				setState(127);
				expresiones();
				}
				}
				setState(132);
				_errHandler.sync(this);
				_la = _input.LA(1);
			}
			setState(133);
			match(CLLAVE);
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
	public static class Condicional_elseifContext extends ParserRuleContext {
		public TerminalNode ELSE() { return getToken(CVtoJasminParser.ELSE, 0); }
		public CondicionalContext condicional() {
			return getRuleContext(CondicionalContext.class,0);
		}
		public Condicional_elseifContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_condicional_elseif; }
	}

	public final Condicional_elseifContext condicional_elseif() throws RecognitionException {
		Condicional_elseifContext _localctx = new Condicional_elseifContext(_ctx, getState());
		enterRule(_localctx, 20, RULE_condicional_elseif);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(135);
			match(ELSE);
			setState(136);
			condicional();
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
	public static class Condicional_elseContext extends ParserRuleContext {
		public TerminalNode ELSE() { return getToken(CVtoJasminParser.ELSE, 0); }
		public TerminalNode ALLAVE() { return getToken(CVtoJasminParser.ALLAVE, 0); }
		public TerminalNode CLLAVE() { return getToken(CVtoJasminParser.CLLAVE, 0); }
		public List<ExpresionesContext> expresiones() {
			return getRuleContexts(ExpresionesContext.class);
		}
		public ExpresionesContext expresiones(int i) {
			return getRuleContext(ExpresionesContext.class,i);
		}
		public Condicional_elseContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_condicional_else; }
	}

	public final Condicional_elseContext condicional_else() throws RecognitionException {
		Condicional_elseContext _localctx = new Condicional_elseContext(_ctx, getState());
		enterRule(_localctx, 22, RULE_condicional_else);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(138);
			match(ELSE);
			setState(139);
			match(ALLAVE);
			setState(143);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while ((((_la) & ~0x3f) == 0 && ((1L << _la) & 9174050146048L) != 0)) {
				{
				{
				setState(140);
				expresiones();
				}
				}
				setState(145);
				_errHandler.sync(this);
				_la = _input.LA(1);
			}
			setState(146);
			match(CLLAVE);
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
	public static class WhileContext extends ParserRuleContext {
		public TerminalNode WHILE() { return getToken(CVtoJasminParser.WHILE, 0); }
		public TerminalNode APARENTESIS() { return getToken(CVtoJasminParser.APARENTESIS, 0); }
		public TerminalNode CPARENTESIS() { return getToken(CVtoJasminParser.CPARENTESIS, 0); }
		public TerminalNode ALLAVE() { return getToken(CVtoJasminParser.ALLAVE, 0); }
		public TerminalNode CLLAVE() { return getToken(CVtoJasminParser.CLLAVE, 0); }
		public ExprContext expr() {
			return getRuleContext(ExprContext.class,0);
		}
		public List<ExpresionesContext> expresiones() {
			return getRuleContexts(ExpresionesContext.class);
		}
		public ExpresionesContext expresiones(int i) {
			return getRuleContext(ExpresionesContext.class,i);
		}
		public WhileContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_while; }
	}

	public final WhileContext while_() throws RecognitionException {
		WhileContext _localctx = new WhileContext(_ctx, getState());
		enterRule(_localctx, 24, RULE_while);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(148);
			match(WHILE);
			setState(149);
			match(APARENTESIS);
			{
			setState(150);
			expr(0);
			}
			setState(151);
			match(CPARENTESIS);
			setState(152);
			match(ALLAVE);
			setState(156);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while ((((_la) & ~0x3f) == 0 && ((1L << _la) & 9174050146048L) != 0)) {
				{
				{
				setState(153);
				expresiones();
				}
				}
				setState(158);
				_errHandler.sync(this);
				_la = _input.LA(1);
			}
			setState(159);
			match(CLLAVE);
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

	public boolean sempred(RuleContext _localctx, int ruleIndex, int predIndex) {
		switch (ruleIndex) {
		case 7:
			return expr_sempred((ExprContext)_localctx, predIndex);
		}
		return true;
	}
	private boolean expr_sempred(ExprContext _localctx, int predIndex) {
		switch (predIndex) {
		case 0:
			return precpred(_ctx, 11);
		case 1:
			return precpred(_ctx, 10);
		case 2:
			return precpred(_ctx, 7);
		case 3:
			return precpred(_ctx, 6);
		}
		return true;
	}

	public static final String _serializedATN =
		"\u0004\u00011\u00a2\u0002\u0000\u0007\u0000\u0002\u0001\u0007\u0001\u0002"+
		"\u0002\u0007\u0002\u0002\u0003\u0007\u0003\u0002\u0004\u0007\u0004\u0002"+
		"\u0005\u0007\u0005\u0002\u0006\u0007\u0006\u0002\u0007\u0007\u0007\u0002"+
		"\b\u0007\b\u0002\t\u0007\t\u0002\n\u0007\n\u0002\u000b\u0007\u000b\u0002"+
		"\f\u0007\f\u0001\u0000\u0001\u0000\u0001\u0000\u0001\u0000\u0001\u0000"+
		"\u0001\u0000\u0001\u0001\u0005\u0001\"\b\u0001\n\u0001\f\u0001%\t\u0001"+
		"\u0001\u0002\u0001\u0002\u0001\u0002\u0001\u0002\u0001\u0002\u0003\u0002"+
		",\b\u0002\u0001\u0003\u0001\u0003\u0001\u0003\u0001\u0003\u0003\u0003"+
		"2\b\u0003\u0001\u0003\u0001\u0003\u0001\u0004\u0001\u0004\u0001\u0004"+
		"\u0001\u0004\u0001\u0004\u0001\u0004\u0001\u0004\u0001\u0004\u0003\u0004"+
		">\b\u0004\u0001\u0004\u0001\u0004\u0001\u0004\u0001\u0004\u0003\u0004"+
		"D\b\u0004\u0001\u0004\u0003\u0004G\b\u0004\u0001\u0005\u0001\u0005\u0001"+
		"\u0005\u0001\u0005\u0001\u0005\u0001\u0005\u0001\u0006\u0001\u0006\u0001"+
		"\u0007\u0001\u0007\u0001\u0007\u0001\u0007\u0001\u0007\u0001\u0007\u0001"+
		"\u0007\u0001\u0007\u0001\u0007\u0001\u0007\u0001\u0007\u0001\u0007\u0001"+
		"\u0007\u0003\u0007^\b\u0007\u0001\u0007\u0001\u0007\u0001\u0007\u0001"+
		"\u0007\u0001\u0007\u0001\u0007\u0001\u0007\u0001\u0007\u0001\u0007\u0001"+
		"\u0007\u0001\u0007\u0001\u0007\u0005\u0007l\b\u0007\n\u0007\f\u0007o\t"+
		"\u0007\u0001\b\u0001\b\u0005\bs\b\b\n\b\f\bv\t\b\u0001\b\u0003\by\b\b"+
		"\u0001\t\u0001\t\u0001\t\u0001\t\u0001\t\u0001\t\u0005\t\u0081\b\t\n\t"+
		"\f\t\u0084\t\t\u0001\t\u0001\t\u0001\n\u0001\n\u0001\n\u0001\u000b\u0001"+
		"\u000b\u0001\u000b\u0005\u000b\u008e\b\u000b\n\u000b\f\u000b\u0091\t\u000b"+
		"\u0001\u000b\u0001\u000b\u0001\f\u0001\f\u0001\f\u0001\f\u0001\f\u0001"+
		"\f\u0005\f\u009b\b\f\n\f\f\f\u009e\t\f\u0001\f\u0001\f\u0001\f\u0001#"+
		"\u0001\u000e\r\u0000\u0002\u0004\u0006\b\n\f\u000e\u0010\u0012\u0014\u0016"+
		"\u0018\u0000\u0007\u0001\u0000\u0001\u0005\u0001\u0000\u0006\u0007\u0001"+
		"\u0000\b\n\u0001\u0000!\"\u0001\u0000\u000b\u0012\u0002\u0000\u0017\u0017"+
		"\u001f \u0001\u0000\u0013\u0014\u00ae\u0000\u001a\u0001\u0000\u0000\u0000"+
		"\u0002#\u0001\u0000\u0000\u0000\u0004+\u0001\u0000\u0000\u0000\u0006-"+
		"\u0001\u0000\u0000\u0000\bF\u0001\u0000\u0000\u0000\nH\u0001\u0000\u0000"+
		"\u0000\fN\u0001\u0000\u0000\u0000\u000e]\u0001\u0000\u0000\u0000\u0010"+
		"p\u0001\u0000\u0000\u0000\u0012z\u0001\u0000\u0000\u0000\u0014\u0087\u0001"+
		"\u0000\u0000\u0000\u0016\u008a\u0001\u0000\u0000\u0000\u0018\u0094\u0001"+
		"\u0000\u0000\u0000\u001a\u001b\u0005\u0015\u0000\u0000\u001b\u001c\u0005"+
		"\u0016\u0000\u0000\u001c\u001d\u0005\u001c\u0000\u0000\u001d\u001e\u0003"+
		"\u0002\u0001\u0000\u001e\u001f\u0005\u001d\u0000\u0000\u001f\u0001\u0001"+
		"\u0000\u0000\u0000 \"\u0003\u0004\u0002\u0000! \u0001\u0000\u0000\u0000"+
		"\"%\u0001\u0000\u0000\u0000#$\u0001\u0000\u0000\u0000#!\u0001\u0000\u0000"+
		"\u0000$\u0003\u0001\u0000\u0000\u0000%#\u0001\u0000\u0000\u0000&,\u0003"+
		"\u0006\u0003\u0000\',\u0003\b\u0004\u0000(,\u0003\n\u0005\u0000),\u0003"+
		"\u0010\b\u0000*,\u0003\u0018\f\u0000+&\u0001\u0000\u0000\u0000+\'\u0001"+
		"\u0000\u0000\u0000+(\u0001\u0000\u0000\u0000+)\u0001\u0000\u0000\u0000"+
		"+*\u0001\u0000\u0000\u0000,\u0005\u0001\u0000\u0000\u0000-.\u0003\f\u0006"+
		"\u0000.1\u0005+\u0000\u0000/0\u0005\u001e\u0000\u000002\u0003\u000e\u0007"+
		"\u00001/\u0001\u0000\u0000\u000012\u0001\u0000\u0000\u000023\u0001\u0000"+
		"\u0000\u000034\u0005.\u0000\u00004\u0007\u0001\u0000\u0000\u000056\u0005"+
		"+\u0000\u000067\u0005\u001e\u0000\u000078\u0003\u000e\u0007\u000089\u0005"+
		".\u0000\u00009G\u0001\u0000\u0000\u0000:;\u0005+\u0000\u0000;=\u0007\u0000"+
		"\u0000\u0000<>\u0003\u000e\u0007\u0000=<\u0001\u0000\u0000\u0000=>\u0001"+
		"\u0000\u0000\u0000>?\u0001\u0000\u0000\u0000?G\u0005.\u0000\u0000@A\u0005"+
		"+\u0000\u0000AC\u0007\u0001\u0000\u0000BD\u0003\u000e\u0007\u0000CB\u0001"+
		"\u0000\u0000\u0000CD\u0001\u0000\u0000\u0000DE\u0001\u0000\u0000\u0000"+
		"EG\u0005.\u0000\u0000F5\u0001\u0000\u0000\u0000F:\u0001\u0000\u0000\u0000"+
		"F@\u0001\u0000\u0000\u0000G\t\u0001\u0000\u0000\u0000HI\u0005#\u0000\u0000"+
		"IJ\u0005\u001a\u0000\u0000JK\u0003\u000e\u0007\u0000KL\u0005\u001b\u0000"+
		"\u0000LM\u0005.\u0000\u0000M\u000b\u0001\u0000\u0000\u0000NO\u0007\u0002"+
		"\u0000\u0000O\r\u0001\u0000\u0000\u0000PQ\u0006\u0007\uffff\uffff\u0000"+
		"QR\u0005\u001a\u0000\u0000RS\u0003\u000e\u0007\u0000ST\u0005\u001b\u0000"+
		"\u0000T^\u0001\u0000\u0000\u0000UV\u0007\u0003\u0000\u0000V^\u0003\u000e"+
		"\u0007\tW^\u0007\u0004\u0000\u0000X^\u0005*\u0000\u0000Y^\u0005+\u0000"+
		"\u0000Z^\u0005)\u0000\u0000[^\u0005,\u0000\u0000\\^\u0005-\u0000\u0000"+
		"]P\u0001\u0000\u0000\u0000]U\u0001\u0000\u0000\u0000]W\u0001\u0000\u0000"+
		"\u0000]X\u0001\u0000\u0000\u0000]Y\u0001\u0000\u0000\u0000]Z\u0001\u0000"+
		"\u0000\u0000][\u0001\u0000\u0000\u0000]\\\u0001\u0000\u0000\u0000^m\u0001"+
		"\u0000\u0000\u0000_`\n\u000b\u0000\u0000`a\u0007\u0005\u0000\u0000al\u0003"+
		"\u000e\u0007\fbc\n\n\u0000\u0000cd\u0007\u0003\u0000\u0000dl\u0003\u000e"+
		"\u0007\u000bef\n\u0007\u0000\u0000fg\u0007\u0004\u0000\u0000gl\u0003\u000e"+
		"\u0007\bhi\n\u0006\u0000\u0000ij\u0007\u0006\u0000\u0000jl\u0003\u000e"+
		"\u0007\u0007k_\u0001\u0000\u0000\u0000kb\u0001\u0000\u0000\u0000ke\u0001"+
		"\u0000\u0000\u0000kh\u0001\u0000\u0000\u0000lo\u0001\u0000\u0000\u0000"+
		"mk\u0001\u0000\u0000\u0000mn\u0001\u0000\u0000\u0000n\u000f\u0001\u0000"+
		"\u0000\u0000om\u0001\u0000\u0000\u0000pt\u0003\u0012\t\u0000qs\u0003\u0014"+
		"\n\u0000rq\u0001\u0000\u0000\u0000sv\u0001\u0000\u0000\u0000tr\u0001\u0000"+
		"\u0000\u0000tu\u0001\u0000\u0000\u0000ux\u0001\u0000\u0000\u0000vt\u0001"+
		"\u0000\u0000\u0000wy\u0003\u0016\u000b\u0000xw\u0001\u0000\u0000\u0000"+
		"xy\u0001\u0000\u0000\u0000y\u0011\u0001\u0000\u0000\u0000z{\u0005$\u0000"+
		"\u0000{|\u0005\u001a\u0000\u0000|}\u0003\u000e\u0007\u0000}~\u0005\u001b"+
		"\u0000\u0000~\u0082\u0005\u001c\u0000\u0000\u007f\u0081\u0003\u0004\u0002"+
		"\u0000\u0080\u007f\u0001\u0000\u0000\u0000\u0081\u0084\u0001\u0000\u0000"+
		"\u0000\u0082\u0080\u0001\u0000\u0000\u0000\u0082\u0083\u0001\u0000\u0000"+
		"\u0000\u0083\u0085\u0001\u0000\u0000\u0000\u0084\u0082\u0001\u0000\u0000"+
		"\u0000\u0085\u0086\u0005\u001d\u0000\u0000\u0086\u0013\u0001\u0000\u0000"+
		"\u0000\u0087\u0088\u0005%\u0000\u0000\u0088\u0089\u0003\u0012\t\u0000"+
		"\u0089\u0015\u0001\u0000\u0000\u0000\u008a\u008b\u0005%\u0000\u0000\u008b"+
		"\u008f\u0005\u001c\u0000\u0000\u008c\u008e\u0003\u0004\u0002\u0000\u008d"+
		"\u008c\u0001\u0000\u0000\u0000\u008e\u0091\u0001\u0000\u0000\u0000\u008f"+
		"\u008d\u0001\u0000\u0000\u0000\u008f\u0090\u0001\u0000\u0000\u0000\u0090"+
		"\u0092\u0001\u0000\u0000\u0000\u0091\u008f\u0001\u0000\u0000\u0000\u0092"+
		"\u0093\u0005\u001d\u0000\u0000\u0093\u0017\u0001\u0000\u0000\u0000\u0094"+
		"\u0095\u0005&\u0000\u0000\u0095\u0096\u0005\u001a\u0000\u0000\u0096\u0097"+
		"\u0003\u000e\u0007\u0000\u0097\u0098\u0005\u001b\u0000\u0000\u0098\u009c"+
		"\u0005\u001c\u0000\u0000\u0099\u009b\u0003\u0004\u0002\u0000\u009a\u0099"+
		"\u0001\u0000\u0000\u0000\u009b\u009e\u0001\u0000\u0000\u0000\u009c\u009a"+
		"\u0001\u0000\u0000\u0000\u009c\u009d\u0001\u0000\u0000\u0000\u009d\u009f"+
		"\u0001\u0000\u0000\u0000\u009e\u009c\u0001\u0000\u0000\u0000\u009f\u00a0"+
		"\u0005\u001d\u0000\u0000\u00a0\u0019\u0001\u0000\u0000\u0000\u000e#+1"+
		"=CF]kmtx\u0082\u008f\u009c";
	public static final ATN _ATN =
		new ATNDeserializer().deserialize(_serializedATN.toCharArray());
	static {
		_decisionToDFA = new DFA[_ATN.getNumberOfDecisions()];
		for (int i = 0; i < _ATN.getNumberOfDecisions(); i++) {
			_decisionToDFA[i] = new DFA(_ATN.getDecisionState(i), i);
		}
	}
}