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
		T__9=10, T__10=11, T__11=12, T__12=13, T__13=14, T__14=15, T__15=16, T__16=17, 
		T__17=18, T__18=19, T__19=20, T__20=21, T__21=22, INSERT=23, CODE=24, 
		MOD=25, COMA=26, NEGAN=27, APARENTESIS=28, CPARENTESIS=29, ALLAVE=30, 
		CLLAVE=31, EQUALS=32, MUL=33, DIV=34, ADD=35, SUB=36, PRINT=37, IF=38, 
		ELSE=39, WHILE=40, COND_MAT=41, COND_LOG=42, STRING=43, INT=44, ID=45, 
		FLOAT=46, CHAR=47, SEMI=48, LINE_COMMENT=49, BLOCK_COMMENT=50, WS=51;
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
			"'&&'", "'||'", "'true'", "'false'", "'!true'", "'!false'", "'iniciar'", 
			"'codigo'", "'%'", "','", "'!'", "'('", "')'", "'{'", "'}'", "'='", "'*'", 
			"'/'", "'+'", "'-'", "'MostrarMensaje'", "'verificar'", "'contrario'", 
			"'repetir'", null, null, null, null, null, null, null, "';'"
		};
	}
	private static final String[] _LITERAL_NAMES = makeLiteralNames();
	private static String[] makeSymbolicNames() {
		return new String[] {
			null, null, null, null, null, null, null, null, null, null, null, null, 
			null, null, null, null, null, null, null, null, null, null, null, "INSERT", 
			"CODE", "MOD", "COMA", "NEGAN", "APARENTESIS", "CPARENTESIS", "ALLAVE", 
			"CLLAVE", "EQUALS", "MUL", "DIV", "ADD", "SUB", "PRINT", "IF", "ELSE", 
			"WHILE", "COND_MAT", "COND_LOG", "STRING", "INT", "ID", "FLOAT", "CHAR", 
			"SEMI", "LINE_COMMENT", "BLOCK_COMMENT", "WS"
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
		public TerminalNode ALLAVE() { return getToken(CodeFileParser.ALLAVE, 0); }
		public ContentContext content() {
			return getRuleContext(ContentContext.class,0);
		}
		public TerminalNode CLLAVE() { return getToken(CodeFileParser.CLLAVE, 0); }
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
		public TerminalNode ID() { return getToken(CodeFileParser.ID, 0); }
		public TerminalNode SEMI() { return getToken(CodeFileParser.SEMI, 0); }
		public TerminalNode EQUALS() { return getToken(CodeFileParser.EQUALS, 0); }
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
		public TerminalNode ID() { return getToken(CodeFileParser.ID, 0); }
		public TerminalNode SEMI() { return getToken(CodeFileParser.SEMI, 0); }
		public ExprContext expr() {
			return getRuleContext(ExprContext.class,0);
		}
		public AsignaContext(AssignamentContext ctx) { copyFrom(ctx); }
	}
	@SuppressWarnings("CheckReturnValue")
	public static class IncrementoContext extends AssignamentContext {
		public Token com;
		public TerminalNode ID() { return getToken(CodeFileParser.ID, 0); }
		public TerminalNode SEMI() { return getToken(CodeFileParser.SEMI, 0); }
		public ExprContext expr() {
			return getRuleContext(ExprContext.class,0);
		}
		public IncrementoContext(AssignamentContext ctx) { copyFrom(ctx); }
	}
	@SuppressWarnings("CheckReturnValue")
	public static class AsignacionesContext extends AssignamentContext {
		public TerminalNode ID() { return getToken(CodeFileParser.ID, 0); }
		public TerminalNode EQUALS() { return getToken(CodeFileParser.EQUALS, 0); }
		public ExprContext expr() {
			return getRuleContext(ExprContext.class,0);
		}
		public TerminalNode SEMI() { return getToken(CodeFileParser.SEMI, 0); }
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
				if ((((_la) & ~0x3f) == 0 && ((1L << _la) & 272782373943296L) != 0)) {
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
				if ((((_la) & ~0x3f) == 0 && ((1L << _la) & 272782373943296L) != 0)) {
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
		public TerminalNode PRINT() { return getToken(CodeFileParser.PRINT, 0); }
		public TerminalNode APARENTESIS() { return getToken(CodeFileParser.APARENTESIS, 0); }
		public ExprContext expr() {
			return getRuleContext(ExprContext.class,0);
		}
		public TerminalNode CPARENTESIS() { return getToken(CodeFileParser.CPARENTESIS, 0); }
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
		public TerminalNode APARENTESIS() { return getToken(CodeFileParser.APARENTESIS, 0); }
		public ExprContext expr() {
			return getRuleContext(ExprContext.class,0);
		}
		public TerminalNode CPARENTESIS() { return getToken(CodeFileParser.CPARENTESIS, 0); }
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
		public TerminalNode ADD() { return getToken(CodeFileParser.ADD, 0); }
		public TerminalNode SUB() { return getToken(CodeFileParser.SUB, 0); }
		public SignNumberContext(ExprContext ctx) { copyFrom(ctx); }
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
		public TerminalNode MOD() { return getToken(CodeFileParser.MOD, 0); }
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
	public static class CharContext extends ExprContext {
		public TerminalNode CHAR() { return getToken(CodeFileParser.CHAR, 0); }
		public CharContext(ExprContext ctx) { copyFrom(ctx); }
	}
	@SuppressWarnings("CheckReturnValue")
	public static class IdContext extends ExprContext {
		public TerminalNode ID() { return getToken(CodeFileParser.ID, 0); }
		public IdContext(ExprContext ctx) { copyFrom(ctx); }
	}
	@SuppressWarnings("CheckReturnValue")
	public static class FloatContext extends ExprContext {
		public TerminalNode FLOAT() { return getToken(CodeFileParser.FLOAT, 0); }
		public FloatContext(ExprContext ctx) { copyFrom(ctx); }
	}
	@SuppressWarnings("CheckReturnValue")
	public static class NegacionExprContext extends ExprContext {
		public TerminalNode NEGAN() { return getToken(CodeFileParser.NEGAN, 0); }
		public ExprContext expr() {
			return getRuleContext(ExprContext.class,0);
		}
		public NegacionExprContext(ExprContext ctx) { copyFrom(ctx); }
	}
	@SuppressWarnings("CheckReturnValue")
	public static class IntContext extends ExprContext {
		public TerminalNode INT() { return getToken(CodeFileParser.INT, 0); }
		public IntContext(ExprContext ctx) { copyFrom(ctx); }
	}
	@SuppressWarnings("CheckReturnValue")
	public static class StringAnidContext extends ExprContext {
		public List<ExprContext> expr() {
			return getRuleContexts(ExprContext.class);
		}
		public ExprContext expr(int i) {
			return getRuleContext(ExprContext.class,i);
		}
		public TerminalNode COMA() { return getToken(CodeFileParser.COMA, 0); }
		public StringAnidContext(ExprContext ctx) { copyFrom(ctx); }
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
			setState(96);
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
			case NEGAN:
				{
				_localctx = new NegacionExprContext(_localctx);
				_ctx = _localctx;
				_prevctx = _localctx;
				setState(85);
				match(NEGAN);
				setState(86);
				expr(11);
				}
				break;
			case ADD:
			case SUB:
				{
				_localctx = new SignNumberContext(_localctx);
				_ctx = _localctx;
				_prevctx = _localctx;
				setState(87);
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
				setState(88);
				expr(10);
				}
				break;
			case T__10:
			case T__11:
			case T__12:
			case T__13:
				{
				_localctx = new ConditionContext(_localctx);
				_ctx = _localctx;
				_prevctx = _localctx;
				setState(89);
				((ConditionContext)_localctx).operator = _input.LT(1);
				_la = _input.LA(1);
				if ( !((((_la) & ~0x3f) == 0 && ((1L << _la) & 30720L) != 0)) ) {
					((ConditionContext)_localctx).operator = (Token)_errHandler.recoverInline(this);
				}
				else {
					if ( _input.LA(1)==Token.EOF ) matchedEOF = true;
					_errHandler.reportMatch(this);
					consume();
				}
				}
				break;
			case T__14:
			case T__15:
			case T__16:
			case T__17:
			case T__18:
			case T__19:
			case T__20:
			case T__21:
				{
				_localctx = new ConditionContext(_localctx);
				_ctx = _localctx;
				_prevctx = _localctx;
				setState(90);
				((ConditionContext)_localctx).operator = _input.LT(1);
				_la = _input.LA(1);
				if ( !((((_la) & ~0x3f) == 0 && ((1L << _la) & 8355840L) != 0)) ) {
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
				setState(91);
				match(INT);
				}
				break;
			case ID:
				{
				_localctx = new IdContext(_localctx);
				_ctx = _localctx;
				_prevctx = _localctx;
				setState(92);
				match(ID);
				}
				break;
			case STRING:
				{
				_localctx = new StringContext(_localctx);
				_ctx = _localctx;
				_prevctx = _localctx;
				setState(93);
				match(STRING);
				}
				break;
			case FLOAT:
				{
				_localctx = new FloatContext(_localctx);
				_ctx = _localctx;
				_prevctx = _localctx;
				setState(94);
				match(FLOAT);
				}
				break;
			case CHAR:
				{
				_localctx = new CharContext(_localctx);
				_ctx = _localctx;
				_prevctx = _localctx;
				setState(95);
				match(CHAR);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
			_ctx.stop = _input.LT(-1);
			setState(115);
			_errHandler.sync(this);
			_alt = getInterpreter().adaptivePredict(_input,8,_ctx);
			while ( _alt!=2 && _alt!=org.antlr.v4.runtime.atn.ATN.INVALID_ALT_NUMBER ) {
				if ( _alt==1 ) {
					if ( _parseListeners!=null ) triggerExitRuleEvent();
					_prevctx = _localctx;
					{
					setState(113);
					_errHandler.sync(this);
					switch ( getInterpreter().adaptivePredict(_input,7,_ctx) ) {
					case 1:
						{
						_localctx = new MulDivContext(new ExprContext(_parentctx, _parentState));
						pushNewRecursionContext(_localctx, _startState, RULE_expr);
						setState(98);
						if (!(precpred(_ctx, 14))) throw new FailedPredicateException(this, "precpred(_ctx, 14)");
						setState(99);
						((MulDivContext)_localctx).op = _input.LT(1);
						_la = _input.LA(1);
						if ( !((((_la) & ~0x3f) == 0 && ((1L << _la) & 25803358208L) != 0)) ) {
							((MulDivContext)_localctx).op = (Token)_errHandler.recoverInline(this);
						}
						else {
							if ( _input.LA(1)==Token.EOF ) matchedEOF = true;
							_errHandler.reportMatch(this);
							consume();
						}
						setState(100);
						expr(15);
						}
						break;
					case 2:
						{
						_localctx = new AddSubContext(new ExprContext(_parentctx, _parentState));
						pushNewRecursionContext(_localctx, _startState, RULE_expr);
						setState(101);
						if (!(precpred(_ctx, 13))) throw new FailedPredicateException(this, "precpred(_ctx, 13)");
						setState(102);
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
						setState(103);
						expr(14);
						}
						break;
					case 3:
						{
						_localctx = new StringAnidContext(new ExprContext(_parentctx, _parentState));
						pushNewRecursionContext(_localctx, _startState, RULE_expr);
						setState(104);
						if (!(precpred(_ctx, 12))) throw new FailedPredicateException(this, "precpred(_ctx, 12)");
						setState(105);
						match(COMA);
						setState(106);
						expr(13);
						}
						break;
					case 4:
						{
						_localctx = new ConditionContext(new ExprContext(_parentctx, _parentState));
						pushNewRecursionContext(_localctx, _startState, RULE_expr);
						setState(107);
						if (!(precpred(_ctx, 7))) throw new FailedPredicateException(this, "precpred(_ctx, 7)");
						setState(108);
						((ConditionContext)_localctx).operator = _input.LT(1);
						_la = _input.LA(1);
						if ( !((((_la) & ~0x3f) == 0 && ((1L << _la) & 30720L) != 0)) ) {
							((ConditionContext)_localctx).operator = (Token)_errHandler.recoverInline(this);
						}
						else {
							if ( _input.LA(1)==Token.EOF ) matchedEOF = true;
							_errHandler.reportMatch(this);
							consume();
						}
						setState(109);
						expr(8);
						}
						break;
					case 5:
						{
						_localctx = new ConditionContext(new ExprContext(_parentctx, _parentState));
						pushNewRecursionContext(_localctx, _startState, RULE_expr);
						setState(110);
						if (!(precpred(_ctx, 6))) throw new FailedPredicateException(this, "precpred(_ctx, 6)");
						setState(111);
						((ConditionContext)_localctx).operator = _input.LT(1);
						_la = _input.LA(1);
						if ( !((((_la) & ~0x3f) == 0 && ((1L << _la) & 8355840L) != 0)) ) {
							((ConditionContext)_localctx).operator = (Token)_errHandler.recoverInline(this);
						}
						else {
							if ( _input.LA(1)==Token.EOF ) matchedEOF = true;
							_errHandler.reportMatch(this);
							consume();
						}
						setState(112);
						expr(7);
						}
						break;
					}
					} 
				}
				setState(117);
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
			setState(118);
			condicional();
			setState(122);
			_errHandler.sync(this);
			_alt = getInterpreter().adaptivePredict(_input,9,_ctx);
			while ( _alt!=2 && _alt!=org.antlr.v4.runtime.atn.ATN.INVALID_ALT_NUMBER ) {
				if ( _alt==1 ) {
					{
					{
					setState(119);
					condicional_elseif();
					}
					} 
				}
				setState(124);
				_errHandler.sync(this);
				_alt = getInterpreter().adaptivePredict(_input,9,_ctx);
			}
			setState(126);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==ELSE) {
				{
				setState(125);
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
		public TerminalNode IF() { return getToken(CodeFileParser.IF, 0); }
		public TerminalNode APARENTESIS() { return getToken(CodeFileParser.APARENTESIS, 0); }
		public ExprContext expr() {
			return getRuleContext(ExprContext.class,0);
		}
		public TerminalNode CPARENTESIS() { return getToken(CodeFileParser.CPARENTESIS, 0); }
		public TerminalNode ALLAVE() { return getToken(CodeFileParser.ALLAVE, 0); }
		public TerminalNode CLLAVE() { return getToken(CodeFileParser.CLLAVE, 0); }
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
			setState(128);
			match(IF);
			setState(129);
			match(APARENTESIS);
			setState(130);
			expr(0);
			setState(131);
			match(CPARENTESIS);
			setState(132);
			match(ALLAVE);
			setState(136);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while ((((_la) & ~0x3f) == 0 && ((1L << _la) & 36696200578816L) != 0)) {
				{
				{
				setState(133);
				expresiones();
				}
				}
				setState(138);
				_errHandler.sync(this);
				_la = _input.LA(1);
			}
			setState(139);
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
		public TerminalNode ELSE() { return getToken(CodeFileParser.ELSE, 0); }
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
			setState(141);
			match(ELSE);
			setState(142);
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
		public TerminalNode ELSE() { return getToken(CodeFileParser.ELSE, 0); }
		public TerminalNode ALLAVE() { return getToken(CodeFileParser.ALLAVE, 0); }
		public TerminalNode CLLAVE() { return getToken(CodeFileParser.CLLAVE, 0); }
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
			setState(144);
			match(ELSE);
			setState(145);
			match(ALLAVE);
			setState(149);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while ((((_la) & ~0x3f) == 0 && ((1L << _la) & 36696200578816L) != 0)) {
				{
				{
				setState(146);
				expresiones();
				}
				}
				setState(151);
				_errHandler.sync(this);
				_la = _input.LA(1);
			}
			setState(152);
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
		public TerminalNode WHILE() { return getToken(CodeFileParser.WHILE, 0); }
		public TerminalNode APARENTESIS() { return getToken(CodeFileParser.APARENTESIS, 0); }
		public TerminalNode CPARENTESIS() { return getToken(CodeFileParser.CPARENTESIS, 0); }
		public TerminalNode ALLAVE() { return getToken(CodeFileParser.ALLAVE, 0); }
		public TerminalNode CLLAVE() { return getToken(CodeFileParser.CLLAVE, 0); }
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
			setState(154);
			match(WHILE);
			setState(155);
			match(APARENTESIS);
			{
			setState(156);
			expr(0);
			}
			setState(157);
			match(CPARENTESIS);
			setState(158);
			match(ALLAVE);
			setState(162);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while ((((_la) & ~0x3f) == 0 && ((1L << _la) & 36696200578816L) != 0)) {
				{
				{
				setState(159);
				expresiones();
				}
				}
				setState(164);
				_errHandler.sync(this);
				_la = _input.LA(1);
			}
			setState(165);
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
			return precpred(_ctx, 14);
		case 1:
			return precpred(_ctx, 13);
		case 2:
			return precpred(_ctx, 12);
		case 3:
			return precpred(_ctx, 7);
		case 4:
			return precpred(_ctx, 6);
		}
		return true;
	}

	public static final String _serializedATN =
		"\u0004\u00013\u00a8\u0002\u0000\u0007\u0000\u0002\u0001\u0007\u0001\u0002"+
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
		"\u0007\u0001\u0007\u0001\u0007\u0001\u0007\u0003\u0007a\b\u0007\u0001"+
		"\u0007\u0001\u0007\u0001\u0007\u0001\u0007\u0001\u0007\u0001\u0007\u0001"+
		"\u0007\u0001\u0007\u0001\u0007\u0001\u0007\u0001\u0007\u0001\u0007\u0001"+
		"\u0007\u0001\u0007\u0001\u0007\u0005\u0007r\b\u0007\n\u0007\f\u0007u\t"+
		"\u0007\u0001\b\u0001\b\u0005\by\b\b\n\b\f\b|\t\b\u0001\b\u0003\b\u007f"+
		"\b\b\u0001\t\u0001\t\u0001\t\u0001\t\u0001\t\u0001\t\u0005\t\u0087\b\t"+
		"\n\t\f\t\u008a\t\t\u0001\t\u0001\t\u0001\n\u0001\n\u0001\n\u0001\u000b"+
		"\u0001\u000b\u0001\u000b\u0005\u000b\u0094\b\u000b\n\u000b\f\u000b\u0097"+
		"\t\u000b\u0001\u000b\u0001\u000b\u0001\f\u0001\f\u0001\f\u0001\f\u0001"+
		"\f\u0001\f\u0005\f\u00a1\b\f\n\f\f\f\u00a4\t\f\u0001\f\u0001\f\u0001\f"+
		"\u0001#\u0001\u000e\r\u0000\u0002\u0004\u0006\b\n\f\u000e\u0010\u0012"+
		"\u0014\u0016\u0018\u0000\u0007\u0001\u0000\u0001\u0005\u0001\u0000\u0006"+
		"\u0007\u0001\u0000\b\n\u0001\u0000#$\u0001\u0000\u000b\u000e\u0001\u0000"+
		"\u000f\u0016\u0002\u0000\u0019\u0019!\"\u00b7\u0000\u001a\u0001\u0000"+
		"\u0000\u0000\u0002#\u0001\u0000\u0000\u0000\u0004+\u0001\u0000\u0000\u0000"+
		"\u0006-\u0001\u0000\u0000\u0000\bF\u0001\u0000\u0000\u0000\nH\u0001\u0000"+
		"\u0000\u0000\fN\u0001\u0000\u0000\u0000\u000e`\u0001\u0000\u0000\u0000"+
		"\u0010v\u0001\u0000\u0000\u0000\u0012\u0080\u0001\u0000\u0000\u0000\u0014"+
		"\u008d\u0001\u0000\u0000\u0000\u0016\u0090\u0001\u0000\u0000\u0000\u0018"+
		"\u009a\u0001\u0000\u0000\u0000\u001a\u001b\u0005\u0017\u0000\u0000\u001b"+
		"\u001c\u0005\u0018\u0000\u0000\u001c\u001d\u0005\u001e\u0000\u0000\u001d"+
		"\u001e\u0003\u0002\u0001\u0000\u001e\u001f\u0005\u001f\u0000\u0000\u001f"+
		"\u0001\u0001\u0000\u0000\u0000 \"\u0003\u0004\u0002\u0000! \u0001\u0000"+
		"\u0000\u0000\"%\u0001\u0000\u0000\u0000#$\u0001\u0000\u0000\u0000#!\u0001"+
		"\u0000\u0000\u0000$\u0003\u0001\u0000\u0000\u0000%#\u0001\u0000\u0000"+
		"\u0000&,\u0003\u0006\u0003\u0000\',\u0003\b\u0004\u0000(,\u0003\n\u0005"+
		"\u0000),\u0003\u0010\b\u0000*,\u0003\u0018\f\u0000+&\u0001\u0000\u0000"+
		"\u0000+\'\u0001\u0000\u0000\u0000+(\u0001\u0000\u0000\u0000+)\u0001\u0000"+
		"\u0000\u0000+*\u0001\u0000\u0000\u0000,\u0005\u0001\u0000\u0000\u0000"+
		"-.\u0003\f\u0006\u0000.1\u0005-\u0000\u0000/0\u0005 \u0000\u000002\u0003"+
		"\u000e\u0007\u00001/\u0001\u0000\u0000\u000012\u0001\u0000\u0000\u0000"+
		"23\u0001\u0000\u0000\u000034\u00050\u0000\u00004\u0007\u0001\u0000\u0000"+
		"\u000056\u0005-\u0000\u000067\u0005 \u0000\u000078\u0003\u000e\u0007\u0000"+
		"89\u00050\u0000\u00009G\u0001\u0000\u0000\u0000:;\u0005-\u0000\u0000;"+
		"=\u0007\u0000\u0000\u0000<>\u0003\u000e\u0007\u0000=<\u0001\u0000\u0000"+
		"\u0000=>\u0001\u0000\u0000\u0000>?\u0001\u0000\u0000\u0000?G\u00050\u0000"+
		"\u0000@A\u0005-\u0000\u0000AC\u0007\u0001\u0000\u0000BD\u0003\u000e\u0007"+
		"\u0000CB\u0001\u0000\u0000\u0000CD\u0001\u0000\u0000\u0000DE\u0001\u0000"+
		"\u0000\u0000EG\u00050\u0000\u0000F5\u0001\u0000\u0000\u0000F:\u0001\u0000"+
		"\u0000\u0000F@\u0001\u0000\u0000\u0000G\t\u0001\u0000\u0000\u0000HI\u0005"+
		"%\u0000\u0000IJ\u0005\u001c\u0000\u0000JK\u0003\u000e\u0007\u0000KL\u0005"+
		"\u001d\u0000\u0000LM\u00050\u0000\u0000M\u000b\u0001\u0000\u0000\u0000"+
		"NO\u0007\u0002\u0000\u0000O\r\u0001\u0000\u0000\u0000PQ\u0006\u0007\uffff"+
		"\uffff\u0000QR\u0005\u001c\u0000\u0000RS\u0003\u000e\u0007\u0000ST\u0005"+
		"\u001d\u0000\u0000Ta\u0001\u0000\u0000\u0000UV\u0005\u001b\u0000\u0000"+
		"Va\u0003\u000e\u0007\u000bWX\u0007\u0003\u0000\u0000Xa\u0003\u000e\u0007"+
		"\nYa\u0007\u0004\u0000\u0000Za\u0007\u0005\u0000\u0000[a\u0005,\u0000"+
		"\u0000\\a\u0005-\u0000\u0000]a\u0005+\u0000\u0000^a\u0005.\u0000\u0000"+
		"_a\u0005/\u0000\u0000`P\u0001\u0000\u0000\u0000`U\u0001\u0000\u0000\u0000"+
		"`W\u0001\u0000\u0000\u0000`Y\u0001\u0000\u0000\u0000`Z\u0001\u0000\u0000"+
		"\u0000`[\u0001\u0000\u0000\u0000`\\\u0001\u0000\u0000\u0000`]\u0001\u0000"+
		"\u0000\u0000`^\u0001\u0000\u0000\u0000`_\u0001\u0000\u0000\u0000as\u0001"+
		"\u0000\u0000\u0000bc\n\u000e\u0000\u0000cd\u0007\u0006\u0000\u0000dr\u0003"+
		"\u000e\u0007\u000fef\n\r\u0000\u0000fg\u0007\u0003\u0000\u0000gr\u0003"+
		"\u000e\u0007\u000ehi\n\f\u0000\u0000ij\u0005\u001a\u0000\u0000jr\u0003"+
		"\u000e\u0007\rkl\n\u0007\u0000\u0000lm\u0007\u0004\u0000\u0000mr\u0003"+
		"\u000e\u0007\bno\n\u0006\u0000\u0000op\u0007\u0005\u0000\u0000pr\u0003"+
		"\u000e\u0007\u0007qb\u0001\u0000\u0000\u0000qe\u0001\u0000\u0000\u0000"+
		"qh\u0001\u0000\u0000\u0000qk\u0001\u0000\u0000\u0000qn\u0001\u0000\u0000"+
		"\u0000ru\u0001\u0000\u0000\u0000sq\u0001\u0000\u0000\u0000st\u0001\u0000"+
		"\u0000\u0000t\u000f\u0001\u0000\u0000\u0000us\u0001\u0000\u0000\u0000"+
		"vz\u0003\u0012\t\u0000wy\u0003\u0014\n\u0000xw\u0001\u0000\u0000\u0000"+
		"y|\u0001\u0000\u0000\u0000zx\u0001\u0000\u0000\u0000z{\u0001\u0000\u0000"+
		"\u0000{~\u0001\u0000\u0000\u0000|z\u0001\u0000\u0000\u0000}\u007f\u0003"+
		"\u0016\u000b\u0000~}\u0001\u0000\u0000\u0000~\u007f\u0001\u0000\u0000"+
		"\u0000\u007f\u0011\u0001\u0000\u0000\u0000\u0080\u0081\u0005&\u0000\u0000"+
		"\u0081\u0082\u0005\u001c\u0000\u0000\u0082\u0083\u0003\u000e\u0007\u0000"+
		"\u0083\u0084\u0005\u001d\u0000\u0000\u0084\u0088\u0005\u001e\u0000\u0000"+
		"\u0085\u0087\u0003\u0004\u0002\u0000\u0086\u0085\u0001\u0000\u0000\u0000"+
		"\u0087\u008a\u0001\u0000\u0000\u0000\u0088\u0086\u0001\u0000\u0000\u0000"+
		"\u0088\u0089\u0001\u0000\u0000\u0000\u0089\u008b\u0001\u0000\u0000\u0000"+
		"\u008a\u0088\u0001\u0000\u0000\u0000\u008b\u008c\u0005\u001f\u0000\u0000"+
		"\u008c\u0013\u0001\u0000\u0000\u0000\u008d\u008e\u0005\'\u0000\u0000\u008e"+
		"\u008f\u0003\u0012\t\u0000\u008f\u0015\u0001\u0000\u0000\u0000\u0090\u0091"+
		"\u0005\'\u0000\u0000\u0091\u0095\u0005\u001e\u0000\u0000\u0092\u0094\u0003"+
		"\u0004\u0002\u0000\u0093\u0092\u0001\u0000\u0000\u0000\u0094\u0097\u0001"+
		"\u0000\u0000\u0000\u0095\u0093\u0001\u0000\u0000\u0000\u0095\u0096\u0001"+
		"\u0000\u0000\u0000\u0096\u0098\u0001\u0000\u0000\u0000\u0097\u0095\u0001"+
		"\u0000\u0000\u0000\u0098\u0099\u0005\u001f\u0000\u0000\u0099\u0017\u0001"+
		"\u0000\u0000\u0000\u009a\u009b\u0005(\u0000\u0000\u009b\u009c\u0005\u001c"+
		"\u0000\u0000\u009c\u009d\u0003\u000e\u0007\u0000\u009d\u009e\u0005\u001d"+
		"\u0000\u0000\u009e\u00a2\u0005\u001e\u0000\u0000\u009f\u00a1\u0003\u0004"+
		"\u0002\u0000\u00a0\u009f\u0001\u0000\u0000\u0000\u00a1\u00a4\u0001\u0000"+
		"\u0000\u0000\u00a2\u00a0\u0001\u0000\u0000\u0000\u00a2\u00a3\u0001\u0000"+
		"\u0000\u0000\u00a3\u00a5\u0001\u0000\u0000\u0000\u00a4\u00a2\u0001\u0000"+
		"\u0000\u0000\u00a5\u00a6\u0005\u001f\u0000\u0000\u00a6\u0019\u0001\u0000"+
		"\u0000\u0000\u000e#+1=CF`qsz~\u0088\u0095\u00a2";
	public static final ATN _ATN =
		new ATNDeserializer().deserialize(_serializedATN.toCharArray());
	static {
		_decisionToDFA = new DFA[_ATN.getNumberOfDecisions()];
		for (int i = 0; i < _ATN.getNumberOfDecisions(); i++) {
			_decisionToDFA[i] = new DFA(_ATN.getDecisionState(i), i);
		}
	}
}