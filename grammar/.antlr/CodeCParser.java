// Generated from c://Users//saule//Desktop//Codigo_Editor//grammar//CodeC.g4 by ANTLR 4.13.1
import org.antlr.v4.runtime.atn.*;
import org.antlr.v4.runtime.dfa.DFA;
import org.antlr.v4.runtime.*;
import org.antlr.v4.runtime.misc.*;
import org.antlr.v4.runtime.tree.*;
import java.util.List;
import java.util.Iterator;
import java.util.ArrayList;

@SuppressWarnings({"all", "warnings", "unchecked", "unused", "cast", "CheckReturnValue"})
public class CodeCParser extends Parser {
	static { RuntimeMetaData.checkVersion("4.13.1", RuntimeMetaData.VERSION); }

	protected static final DFA[] _decisionToDFA;
	protected static final PredictionContextCache _sharedContextCache =
		new PredictionContextCache();
	public static final int
		T__0=1, T__1=2, T__2=3, T__3=4, T__4=5, T__5=6, T__6=7, T__7=8, T__8=9, 
		T__9=10, CHAR=11, INSERT=12, CODE=13, WHILE=14, RES=15, COMA=16, APARENTESIS=17, 
		CPARENTESIS=18, ALLAVE=19, CLLAVE=20, EQUALS=21, MUL=22, DIV=23, ADD=24, 
		SUB=25, PRINT=26, IF=27, ELSE=28, COND_MAT=29, COND_LOG=30, STRING=31, 
		INT=32, ID=33, FLOAT=34, SEMI=35, WS=36, LINE_COMMENT=37, BLOCK_COMMENT=38;
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
			null, "'+='", "'-='", "'*='", "'/='", "'%='", "'++'", "'--'", "'int'", 
			"'float'", "'char'", "'[a-zA-Z]'", "'void'", "'main()'", "'while'", "'%'", 
			"','", "'('", "')'", "'{'", "'}'", "'='", "'*'", "'/'", "'+'", "'-'", 
			"'printf'", "'if'", "'else'", null, null, null, null, null, null, "';'"
		};
	}
	private static final String[] _LITERAL_NAMES = makeLiteralNames();
	private static String[] makeSymbolicNames() {
		return new String[] {
			null, null, null, null, null, null, null, null, null, null, null, "CHAR", 
			"INSERT", "CODE", "WHILE", "RES", "COMA", "APARENTESIS", "CPARENTESIS", 
			"ALLAVE", "CLLAVE", "EQUALS", "MUL", "DIV", "ADD", "SUB", "PRINT", "IF", 
			"ELSE", "COND_MAT", "COND_LOG", "STRING", "INT", "ID", "FLOAT", "SEMI", 
			"WS", "LINE_COMMENT", "BLOCK_COMMENT"
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
	public String getGrammarFileName() { return "CodeC.g4"; }

	@Override
	public String[] getRuleNames() { return ruleNames; }

	@Override
	public String getSerializedATN() { return _serializedATN; }

	@Override
	public ATN getATN() { return _ATN; }

	public CodeCParser(TokenStream input) {
		super(input);
		_interp = new ParserATNSimulator(this,_ATN,_decisionToDFA,_sharedContextCache);
	}

	@SuppressWarnings("CheckReturnValue")
	public static class StartContext extends ParserRuleContext {
		public TerminalNode INSERT() { return getToken(CodeCParser.INSERT, 0); }
		public TerminalNode CODE() { return getToken(CodeCParser.CODE, 0); }
		public TerminalNode ALLAVE() { return getToken(CodeCParser.ALLAVE, 0); }
		public ContentContext content() {
			return getRuleContext(ContentContext.class,0);
		}
		public TerminalNode CLLAVE() { return getToken(CodeCParser.CLLAVE, 0); }
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
		public TerminalNode ID() { return getToken(CodeCParser.ID, 0); }
		public TerminalNode SEMI() { return getToken(CodeCParser.SEMI, 0); }
		public DeclaracionContext(DeclaracionesContext ctx) { copyFrom(ctx); }
	}
	@SuppressWarnings("CheckReturnValue")
	public static class DeclaracionasignacionContext extends DeclaracionesContext {
		public TipoContext tipo() {
			return getRuleContext(TipoContext.class,0);
		}
		public TerminalNode ID() { return getToken(CodeCParser.ID, 0); }
		public TerminalNode EQUALS() { return getToken(CodeCParser.EQUALS, 0); }
		public ExprContext expr() {
			return getRuleContext(ExprContext.class,0);
		}
		public TerminalNode SEMI() { return getToken(CodeCParser.SEMI, 0); }
		public DeclaracionasignacionContext(DeclaracionesContext ctx) { copyFrom(ctx); }
	}

	public final DeclaracionesContext declaraciones() throws RecognitionException {
		DeclaracionesContext _localctx = new DeclaracionesContext(_ctx, getState());
		enterRule(_localctx, 6, RULE_declaraciones);
		try {
			setState(55);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,2,_ctx) ) {
			case 1:
				_localctx = new DeclaracionContext(_localctx);
				enterOuterAlt(_localctx, 1);
				{
				setState(45);
				tipo();
				setState(46);
				match(ID);
				setState(47);
				match(SEMI);
				}
				break;
			case 2:
				_localctx = new DeclaracionasignacionContext(_localctx);
				enterOuterAlt(_localctx, 2);
				{
				setState(49);
				tipo();
				setState(50);
				match(ID);
				setState(51);
				match(EQUALS);
				setState(52);
				expr(0);
				setState(53);
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
		public TerminalNode ID() { return getToken(CodeCParser.ID, 0); }
		public TerminalNode SEMI() { return getToken(CodeCParser.SEMI, 0); }
		public ExprContext expr() {
			return getRuleContext(ExprContext.class,0);
		}
		public AsignaContext(AssignamentContext ctx) { copyFrom(ctx); }
	}
	@SuppressWarnings("CheckReturnValue")
	public static class IncrementoContext extends AssignamentContext {
		public Token com;
		public TerminalNode ID() { return getToken(CodeCParser.ID, 0); }
		public TerminalNode SEMI() { return getToken(CodeCParser.SEMI, 0); }
		public ExprContext expr() {
			return getRuleContext(ExprContext.class,0);
		}
		public IncrementoContext(AssignamentContext ctx) { copyFrom(ctx); }
	}
	@SuppressWarnings("CheckReturnValue")
	public static class AsignacionesContext extends AssignamentContext {
		public TerminalNode ID() { return getToken(CodeCParser.ID, 0); }
		public TerminalNode EQUALS() { return getToken(CodeCParser.EQUALS, 0); }
		public ExprContext expr() {
			return getRuleContext(ExprContext.class,0);
		}
		public TerminalNode SEMI() { return getToken(CodeCParser.SEMI, 0); }
		public AsignacionesContext(AssignamentContext ctx) { copyFrom(ctx); }
	}

	public final AssignamentContext assignament() throws RecognitionException {
		AssignamentContext _localctx = new AssignamentContext(_ctx, getState());
		enterRule(_localctx, 8, RULE_assignament);
		int _la;
		try {
			setState(74);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,5,_ctx) ) {
			case 1:
				_localctx = new AsignacionesContext(_localctx);
				enterOuterAlt(_localctx, 1);
				{
				setState(57);
				match(ID);
				setState(58);
				match(EQUALS);
				setState(59);
				expr(0);
				setState(60);
				match(SEMI);
				}
				break;
			case 2:
				_localctx = new AsignaContext(_localctx);
				enterOuterAlt(_localctx, 2);
				{
				setState(62);
				match(ID);
				setState(63);
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
				setState(65);
				_errHandler.sync(this);
				_la = _input.LA(1);
				if ((((_la) & ~0x3f) == 0 && ((1L << _la) & 33823000576L) != 0)) {
					{
					setState(64);
					expr(0);
					}
				}

				setState(67);
				match(SEMI);
				}
				break;
			case 3:
				_localctx = new IncrementoContext(_localctx);
				enterOuterAlt(_localctx, 3);
				{
				setState(68);
				match(ID);
				setState(69);
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
				setState(71);
				_errHandler.sync(this);
				_la = _input.LA(1);
				if ((((_la) & ~0x3f) == 0 && ((1L << _la) & 33823000576L) != 0)) {
					{
					setState(70);
					expr(0);
					}
				}

				setState(73);
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
		public TerminalNode PRINT() { return getToken(CodeCParser.PRINT, 0); }
		public TerminalNode APARENTESIS() { return getToken(CodeCParser.APARENTESIS, 0); }
		public ExprContext expr() {
			return getRuleContext(ExprContext.class,0);
		}
		public TerminalNode CPARENTESIS() { return getToken(CodeCParser.CPARENTESIS, 0); }
		public TerminalNode SEMI() { return getToken(CodeCParser.SEMI, 0); }
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
			setState(76);
			match(PRINT);
			setState(77);
			match(APARENTESIS);
			setState(78);
			expr(0);
			setState(79);
			match(CPARENTESIS);
			setState(80);
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
			setState(82);
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
	public static class ResiduoContext extends ExprContext {
		public List<ExprContext> expr() {
			return getRuleContexts(ExprContext.class);
		}
		public ExprContext expr(int i) {
			return getRuleContext(ExprContext.class,i);
		}
		public TerminalNode RES() { return getToken(CodeCParser.RES, 0); }
		public ResiduoContext(ExprContext ctx) { copyFrom(ctx); }
	}
	@SuppressWarnings("CheckReturnValue")
	public static class ConditionContext extends ExprContext {
		public Token operator;
		public TerminalNode COND_LOG() { return getToken(CodeCParser.COND_LOG, 0); }
		public TerminalNode COND_MAT() { return getToken(CodeCParser.COND_MAT, 0); }
		public List<ExprContext> expr() {
			return getRuleContexts(ExprContext.class);
		}
		public ExprContext expr(int i) {
			return getRuleContext(ExprContext.class,i);
		}
		public ConditionContext(ExprContext ctx) { copyFrom(ctx); }
	}
	@SuppressWarnings("CheckReturnValue")
	public static class ParensContext extends ExprContext {
		public TerminalNode APARENTESIS() { return getToken(CodeCParser.APARENTESIS, 0); }
		public ExprContext expr() {
			return getRuleContext(ExprContext.class,0);
		}
		public TerminalNode CPARENTESIS() { return getToken(CodeCParser.CPARENTESIS, 0); }
		public ParensContext(ExprContext ctx) { copyFrom(ctx); }
	}
	@SuppressWarnings("CheckReturnValue")
	public static class StringContext extends ExprContext {
		public TerminalNode STRING() { return getToken(CodeCParser.STRING, 0); }
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
		public TerminalNode MUL() { return getToken(CodeCParser.MUL, 0); }
		public TerminalNode DIV() { return getToken(CodeCParser.DIV, 0); }
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
		public TerminalNode ADD() { return getToken(CodeCParser.ADD, 0); }
		public TerminalNode SUB() { return getToken(CodeCParser.SUB, 0); }
		public AddSubContext(ExprContext ctx) { copyFrom(ctx); }
	}
	@SuppressWarnings("CheckReturnValue")
	public static class CharContext extends ExprContext {
		public TerminalNode CHAR() { return getToken(CodeCParser.CHAR, 0); }
		public CharContext(ExprContext ctx) { copyFrom(ctx); }
	}
	@SuppressWarnings("CheckReturnValue")
	public static class IdContext extends ExprContext {
		public TerminalNode ID() { return getToken(CodeCParser.ID, 0); }
		public IdContext(ExprContext ctx) { copyFrom(ctx); }
	}
	@SuppressWarnings("CheckReturnValue")
	public static class FloatContext extends ExprContext {
		public TerminalNode FLOAT() { return getToken(CodeCParser.FLOAT, 0); }
		public FloatContext(ExprContext ctx) { copyFrom(ctx); }
	}
	@SuppressWarnings("CheckReturnValue")
	public static class IntContext extends ExprContext {
		public TerminalNode INT() { return getToken(CodeCParser.INT, 0); }
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
		public TerminalNode COMA() { return getToken(CodeCParser.COMA, 0); }
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
			setState(95);
			_errHandler.sync(this);
			switch (_input.LA(1)) {
			case COND_MAT:
			case COND_LOG:
				{
				_localctx = new ConditionContext(_localctx);
				_ctx = _localctx;
				_prevctx = _localctx;

				setState(85);
				((ConditionContext)_localctx).operator = _input.LT(1);
				_la = _input.LA(1);
				if ( !(_la==COND_MAT || _la==COND_LOG) ) {
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
				setState(86);
				match(INT);
				}
				break;
			case ID:
				{
				_localctx = new IdContext(_localctx);
				_ctx = _localctx;
				_prevctx = _localctx;
				setState(87);
				match(ID);
				}
				break;
			case STRING:
				{
				_localctx = new StringContext(_localctx);
				_ctx = _localctx;
				_prevctx = _localctx;
				setState(88);
				match(STRING);
				}
				break;
			case FLOAT:
				{
				_localctx = new FloatContext(_localctx);
				_ctx = _localctx;
				_prevctx = _localctx;
				setState(89);
				match(FLOAT);
				}
				break;
			case CHAR:
				{
				_localctx = new CharContext(_localctx);
				_ctx = _localctx;
				_prevctx = _localctx;
				setState(90);
				match(CHAR);
				}
				break;
			case APARENTESIS:
				{
				_localctx = new ParensContext(_localctx);
				_ctx = _localctx;
				_prevctx = _localctx;
				setState(91);
				match(APARENTESIS);
				setState(92);
				expr(0);
				setState(93);
				match(CPARENTESIS);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
			_ctx.stop = _input.LT(-1);
			setState(114);
			_errHandler.sync(this);
			_alt = getInterpreter().adaptivePredict(_input,8,_ctx);
			while ( _alt!=2 && _alt!=org.antlr.v4.runtime.atn.ATN.INVALID_ALT_NUMBER ) {
				if ( _alt==1 ) {
					if ( _parseListeners!=null ) triggerExitRuleEvent();
					_prevctx = _localctx;
					{
					setState(112);
					_errHandler.sync(this);
					switch ( getInterpreter().adaptivePredict(_input,7,_ctx) ) {
					case 1:
						{
						_localctx = new MulDivContext(new ExprContext(_parentctx, _parentState));
						pushNewRecursionContext(_localctx, _startState, RULE_expr);
						setState(97);
						if (!(precpred(_ctx, 12))) throw new FailedPredicateException(this, "precpred(_ctx, 12)");
						setState(98);
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
						setState(99);
						expr(13);
						}
						break;
					case 2:
						{
						_localctx = new AddSubContext(new ExprContext(_parentctx, _parentState));
						pushNewRecursionContext(_localctx, _startState, RULE_expr);
						setState(100);
						if (!(precpred(_ctx, 11))) throw new FailedPredicateException(this, "precpred(_ctx, 11)");
						setState(101);
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
						setState(102);
						expr(12);
						}
						break;
					case 3:
						{
						_localctx = new ResiduoContext(new ExprContext(_parentctx, _parentState));
						pushNewRecursionContext(_localctx, _startState, RULE_expr);
						setState(103);
						if (!(precpred(_ctx, 10))) throw new FailedPredicateException(this, "precpred(_ctx, 10)");
						setState(104);
						match(RES);
						setState(105);
						expr(11);
						}
						break;
					case 4:
						{
						_localctx = new StringAnidContext(new ExprContext(_parentctx, _parentState));
						pushNewRecursionContext(_localctx, _startState, RULE_expr);
						setState(106);
						if (!(precpred(_ctx, 9))) throw new FailedPredicateException(this, "precpred(_ctx, 9)");
						setState(107);
						match(COMA);
						setState(108);
						expr(10);
						}
						break;
					case 5:
						{
						_localctx = new ConditionContext(new ExprContext(_parentctx, _parentState));
						pushNewRecursionContext(_localctx, _startState, RULE_expr);
						setState(109);
						if (!(precpred(_ctx, 7))) throw new FailedPredicateException(this, "precpred(_ctx, 7)");
						setState(110);
						((ConditionContext)_localctx).operator = _input.LT(1);
						_la = _input.LA(1);
						if ( !(_la==COND_MAT || _la==COND_LOG) ) {
							((ConditionContext)_localctx).operator = (Token)_errHandler.recoverInline(this);
						}
						else {
							if ( _input.LA(1)==Token.EOF ) matchedEOF = true;
							_errHandler.reportMatch(this);
							consume();
						}
						setState(111);
						expr(8);
						}
						break;
					}
					} 
				}
				setState(116);
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
			setState(117);
			condicional();
			setState(121);
			_errHandler.sync(this);
			_alt = getInterpreter().adaptivePredict(_input,9,_ctx);
			while ( _alt!=2 && _alt!=org.antlr.v4.runtime.atn.ATN.INVALID_ALT_NUMBER ) {
				if ( _alt==1 ) {
					{
					{
					setState(118);
					condicional_elseif();
					}
					} 
				}
				setState(123);
				_errHandler.sync(this);
				_alt = getInterpreter().adaptivePredict(_input,9,_ctx);
			}
			setState(125);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==ELSE) {
				{
				setState(124);
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
		public TerminalNode IF() { return getToken(CodeCParser.IF, 0); }
		public TerminalNode APARENTESIS() { return getToken(CodeCParser.APARENTESIS, 0); }
		public ExprContext expr() {
			return getRuleContext(ExprContext.class,0);
		}
		public TerminalNode CPARENTESIS() { return getToken(CodeCParser.CPARENTESIS, 0); }
		public TerminalNode ALLAVE() { return getToken(CodeCParser.ALLAVE, 0); }
		public TerminalNode CLLAVE() { return getToken(CodeCParser.CLLAVE, 0); }
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
			setState(127);
			match(IF);
			setState(128);
			match(APARENTESIS);
			setState(129);
			expr(0);
			setState(130);
			match(CPARENTESIS);
			setState(131);
			match(ALLAVE);
			setState(135);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while ((((_la) & ~0x3f) == 0 && ((1L << _la) & 8791279360L) != 0)) {
				{
				{
				setState(132);
				expresiones();
				}
				}
				setState(137);
				_errHandler.sync(this);
				_la = _input.LA(1);
			}
			setState(138);
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
		public TerminalNode ELSE() { return getToken(CodeCParser.ELSE, 0); }
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
			setState(140);
			match(ELSE);
			setState(141);
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
		public TerminalNode ELSE() { return getToken(CodeCParser.ELSE, 0); }
		public TerminalNode ALLAVE() { return getToken(CodeCParser.ALLAVE, 0); }
		public TerminalNode CLLAVE() { return getToken(CodeCParser.CLLAVE, 0); }
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
			setState(143);
			match(ELSE);
			setState(144);
			match(ALLAVE);
			setState(148);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while ((((_la) & ~0x3f) == 0 && ((1L << _la) & 8791279360L) != 0)) {
				{
				{
				setState(145);
				expresiones();
				}
				}
				setState(150);
				_errHandler.sync(this);
				_la = _input.LA(1);
			}
			setState(151);
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
		public TerminalNode WHILE() { return getToken(CodeCParser.WHILE, 0); }
		public TerminalNode APARENTESIS() { return getToken(CodeCParser.APARENTESIS, 0); }
		public TerminalNode CPARENTESIS() { return getToken(CodeCParser.CPARENTESIS, 0); }
		public TerminalNode ALLAVE() { return getToken(CodeCParser.ALLAVE, 0); }
		public TerminalNode CLLAVE() { return getToken(CodeCParser.CLLAVE, 0); }
		public AssignamentContext assignament() {
			return getRuleContext(AssignamentContext.class,0);
		}
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
			setState(153);
			match(WHILE);
			setState(154);
			match(APARENTESIS);
			setState(157);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,13,_ctx) ) {
			case 1:
				{
				setState(155);
				assignament();
				}
				break;
			case 2:
				{
				setState(156);
				expr(0);
				}
				break;
			}
			setState(159);
			match(CPARENTESIS);
			setState(160);
			match(ALLAVE);
			setState(164);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while ((((_la) & ~0x3f) == 0 && ((1L << _la) & 8791279360L) != 0)) {
				{
				{
				setState(161);
				expresiones();
				}
				}
				setState(166);
				_errHandler.sync(this);
				_la = _input.LA(1);
			}
			setState(167);
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
			return precpred(_ctx, 12);
		case 1:
			return precpred(_ctx, 11);
		case 2:
			return precpred(_ctx, 10);
		case 3:
			return precpred(_ctx, 9);
		case 4:
			return precpred(_ctx, 7);
		}
		return true;
	}

	public static final String _serializedATN =
		"\u0004\u0001&\u00aa\u0002\u0000\u0007\u0000\u0002\u0001\u0007\u0001\u0002"+
		"\u0002\u0007\u0002\u0002\u0003\u0007\u0003\u0002\u0004\u0007\u0004\u0002"+
		"\u0005\u0007\u0005\u0002\u0006\u0007\u0006\u0002\u0007\u0007\u0007\u0002"+
		"\b\u0007\b\u0002\t\u0007\t\u0002\n\u0007\n\u0002\u000b\u0007\u000b\u0002"+
		"\f\u0007\f\u0001\u0000\u0001\u0000\u0001\u0000\u0001\u0000\u0001\u0000"+
		"\u0001\u0000\u0001\u0001\u0005\u0001\"\b\u0001\n\u0001\f\u0001%\t\u0001"+
		"\u0001\u0002\u0001\u0002\u0001\u0002\u0001\u0002\u0001\u0002\u0003\u0002"+
		",\b\u0002\u0001\u0003\u0001\u0003\u0001\u0003\u0001\u0003\u0001\u0003"+
		"\u0001\u0003\u0001\u0003\u0001\u0003\u0001\u0003\u0001\u0003\u0003\u0003"+
		"8\b\u0003\u0001\u0004\u0001\u0004\u0001\u0004\u0001\u0004\u0001\u0004"+
		"\u0001\u0004\u0001\u0004\u0001\u0004\u0003\u0004B\b\u0004\u0001\u0004"+
		"\u0001\u0004\u0001\u0004\u0001\u0004\u0003\u0004H\b\u0004\u0001\u0004"+
		"\u0003\u0004K\b\u0004\u0001\u0005\u0001\u0005\u0001\u0005\u0001\u0005"+
		"\u0001\u0005\u0001\u0005\u0001\u0006\u0001\u0006\u0001\u0007\u0001\u0007"+
		"\u0001\u0007\u0001\u0007\u0001\u0007\u0001\u0007\u0001\u0007\u0001\u0007"+
		"\u0001\u0007\u0001\u0007\u0001\u0007\u0003\u0007`\b\u0007\u0001\u0007"+
		"\u0001\u0007\u0001\u0007\u0001\u0007\u0001\u0007\u0001\u0007\u0001\u0007"+
		"\u0001\u0007\u0001\u0007\u0001\u0007\u0001\u0007\u0001\u0007\u0001\u0007"+
		"\u0001\u0007\u0001\u0007\u0005\u0007q\b\u0007\n\u0007\f\u0007t\t\u0007"+
		"\u0001\b\u0001\b\u0005\bx\b\b\n\b\f\b{\t\b\u0001\b\u0003\b~\b\b\u0001"+
		"\t\u0001\t\u0001\t\u0001\t\u0001\t\u0001\t\u0005\t\u0086\b\t\n\t\f\t\u0089"+
		"\t\t\u0001\t\u0001\t\u0001\n\u0001\n\u0001\n\u0001\u000b\u0001\u000b\u0001"+
		"\u000b\u0005\u000b\u0093\b\u000b\n\u000b\f\u000b\u0096\t\u000b\u0001\u000b"+
		"\u0001\u000b\u0001\f\u0001\f\u0001\f\u0001\f\u0003\f\u009e\b\f\u0001\f"+
		"\u0001\f\u0001\f\u0005\f\u00a3\b\f\n\f\f\f\u00a6\t\f\u0001\f\u0001\f\u0001"+
		"\f\u0001#\u0001\u000e\r\u0000\u0002\u0004\u0006\b\n\f\u000e\u0010\u0012"+
		"\u0014\u0016\u0018\u0000\u0006\u0001\u0000\u0001\u0005\u0001\u0000\u0006"+
		"\u0007\u0001\u0000\b\n\u0001\u0000\u001d\u001e\u0001\u0000\u0016\u0017"+
		"\u0001\u0000\u0018\u0019\u00b7\u0000\u001a\u0001\u0000\u0000\u0000\u0002"+
		"#\u0001\u0000\u0000\u0000\u0004+\u0001\u0000\u0000\u0000\u00067\u0001"+
		"\u0000\u0000\u0000\bJ\u0001\u0000\u0000\u0000\nL\u0001\u0000\u0000\u0000"+
		"\fR\u0001\u0000\u0000\u0000\u000e_\u0001\u0000\u0000\u0000\u0010u\u0001"+
		"\u0000\u0000\u0000\u0012\u007f\u0001\u0000\u0000\u0000\u0014\u008c\u0001"+
		"\u0000\u0000\u0000\u0016\u008f\u0001\u0000\u0000\u0000\u0018\u0099\u0001"+
		"\u0000\u0000\u0000\u001a\u001b\u0005\f\u0000\u0000\u001b\u001c\u0005\r"+
		"\u0000\u0000\u001c\u001d\u0005\u0013\u0000\u0000\u001d\u001e\u0003\u0002"+
		"\u0001\u0000\u001e\u001f\u0005\u0014\u0000\u0000\u001f\u0001\u0001\u0000"+
		"\u0000\u0000 \"\u0003\u0004\u0002\u0000! \u0001\u0000\u0000\u0000\"%\u0001"+
		"\u0000\u0000\u0000#$\u0001\u0000\u0000\u0000#!\u0001\u0000\u0000\u0000"+
		"$\u0003\u0001\u0000\u0000\u0000%#\u0001\u0000\u0000\u0000&,\u0003\u0006"+
		"\u0003\u0000\',\u0003\b\u0004\u0000(,\u0003\n\u0005\u0000),\u0003\u0010"+
		"\b\u0000*,\u0003\u0018\f\u0000+&\u0001\u0000\u0000\u0000+\'\u0001\u0000"+
		"\u0000\u0000+(\u0001\u0000\u0000\u0000+)\u0001\u0000\u0000\u0000+*\u0001"+
		"\u0000\u0000\u0000,\u0005\u0001\u0000\u0000\u0000-.\u0003\f\u0006\u0000"+
		"./\u0005!\u0000\u0000/0\u0005#\u0000\u000008\u0001\u0000\u0000\u00001"+
		"2\u0003\f\u0006\u000023\u0005!\u0000\u000034\u0005\u0015\u0000\u00004"+
		"5\u0003\u000e\u0007\u000056\u0005#\u0000\u000068\u0001\u0000\u0000\u0000"+
		"7-\u0001\u0000\u0000\u000071\u0001\u0000\u0000\u00008\u0007\u0001\u0000"+
		"\u0000\u00009:\u0005!\u0000\u0000:;\u0005\u0015\u0000\u0000;<\u0003\u000e"+
		"\u0007\u0000<=\u0005#\u0000\u0000=K\u0001\u0000\u0000\u0000>?\u0005!\u0000"+
		"\u0000?A\u0007\u0000\u0000\u0000@B\u0003\u000e\u0007\u0000A@\u0001\u0000"+
		"\u0000\u0000AB\u0001\u0000\u0000\u0000BC\u0001\u0000\u0000\u0000CK\u0005"+
		"#\u0000\u0000DE\u0005!\u0000\u0000EG\u0007\u0001\u0000\u0000FH\u0003\u000e"+
		"\u0007\u0000GF\u0001\u0000\u0000\u0000GH\u0001\u0000\u0000\u0000HI\u0001"+
		"\u0000\u0000\u0000IK\u0005#\u0000\u0000J9\u0001\u0000\u0000\u0000J>\u0001"+
		"\u0000\u0000\u0000JD\u0001\u0000\u0000\u0000K\t\u0001\u0000\u0000\u0000"+
		"LM\u0005\u001a\u0000\u0000MN\u0005\u0011\u0000\u0000NO\u0003\u000e\u0007"+
		"\u0000OP\u0005\u0012\u0000\u0000PQ\u0005#\u0000\u0000Q\u000b\u0001\u0000"+
		"\u0000\u0000RS\u0007\u0002\u0000\u0000S\r\u0001\u0000\u0000\u0000TU\u0006"+
		"\u0007\uffff\uffff\u0000U`\u0007\u0003\u0000\u0000V`\u0005 \u0000\u0000"+
		"W`\u0005!\u0000\u0000X`\u0005\u001f\u0000\u0000Y`\u0005\"\u0000\u0000"+
		"Z`\u0005\u000b\u0000\u0000[\\\u0005\u0011\u0000\u0000\\]\u0003\u000e\u0007"+
		"\u0000]^\u0005\u0012\u0000\u0000^`\u0001\u0000\u0000\u0000_T\u0001\u0000"+
		"\u0000\u0000_V\u0001\u0000\u0000\u0000_W\u0001\u0000\u0000\u0000_X\u0001"+
		"\u0000\u0000\u0000_Y\u0001\u0000\u0000\u0000_Z\u0001\u0000\u0000\u0000"+
		"_[\u0001\u0000\u0000\u0000`r\u0001\u0000\u0000\u0000ab\n\f\u0000\u0000"+
		"bc\u0007\u0004\u0000\u0000cq\u0003\u000e\u0007\rde\n\u000b\u0000\u0000"+
		"ef\u0007\u0005\u0000\u0000fq\u0003\u000e\u0007\fgh\n\n\u0000\u0000hi\u0005"+
		"\u000f\u0000\u0000iq\u0003\u000e\u0007\u000bjk\n\t\u0000\u0000kl\u0005"+
		"\u0010\u0000\u0000lq\u0003\u000e\u0007\nmn\n\u0007\u0000\u0000no\u0007"+
		"\u0003\u0000\u0000oq\u0003\u000e\u0007\bpa\u0001\u0000\u0000\u0000pd\u0001"+
		"\u0000\u0000\u0000pg\u0001\u0000\u0000\u0000pj\u0001\u0000\u0000\u0000"+
		"pm\u0001\u0000\u0000\u0000qt\u0001\u0000\u0000\u0000rp\u0001\u0000\u0000"+
		"\u0000rs\u0001\u0000\u0000\u0000s\u000f\u0001\u0000\u0000\u0000tr\u0001"+
		"\u0000\u0000\u0000uy\u0003\u0012\t\u0000vx\u0003\u0014\n\u0000wv\u0001"+
		"\u0000\u0000\u0000x{\u0001\u0000\u0000\u0000yw\u0001\u0000\u0000\u0000"+
		"yz\u0001\u0000\u0000\u0000z}\u0001\u0000\u0000\u0000{y\u0001\u0000\u0000"+
		"\u0000|~\u0003\u0016\u000b\u0000}|\u0001\u0000\u0000\u0000}~\u0001\u0000"+
		"\u0000\u0000~\u0011\u0001\u0000\u0000\u0000\u007f\u0080\u0005\u001b\u0000"+
		"\u0000\u0080\u0081\u0005\u0011\u0000\u0000\u0081\u0082\u0003\u000e\u0007"+
		"\u0000\u0082\u0083\u0005\u0012\u0000\u0000\u0083\u0087\u0005\u0013\u0000"+
		"\u0000\u0084\u0086\u0003\u0004\u0002\u0000\u0085\u0084\u0001\u0000\u0000"+
		"\u0000\u0086\u0089\u0001\u0000\u0000\u0000\u0087\u0085\u0001\u0000\u0000"+
		"\u0000\u0087\u0088\u0001\u0000\u0000\u0000\u0088\u008a\u0001\u0000\u0000"+
		"\u0000\u0089\u0087\u0001\u0000\u0000\u0000\u008a\u008b\u0005\u0014\u0000"+
		"\u0000\u008b\u0013\u0001\u0000\u0000\u0000\u008c\u008d\u0005\u001c\u0000"+
		"\u0000\u008d\u008e\u0003\u0012\t\u0000\u008e\u0015\u0001\u0000\u0000\u0000"+
		"\u008f\u0090\u0005\u001c\u0000\u0000\u0090\u0094\u0005\u0013\u0000\u0000"+
		"\u0091\u0093\u0003\u0004\u0002\u0000\u0092\u0091\u0001\u0000\u0000\u0000"+
		"\u0093\u0096\u0001\u0000\u0000\u0000\u0094\u0092\u0001\u0000\u0000\u0000"+
		"\u0094\u0095\u0001\u0000\u0000\u0000\u0095\u0097\u0001\u0000\u0000\u0000"+
		"\u0096\u0094\u0001\u0000\u0000\u0000\u0097\u0098\u0005\u0014\u0000\u0000"+
		"\u0098\u0017\u0001\u0000\u0000\u0000\u0099\u009a\u0005\u000e\u0000\u0000"+
		"\u009a\u009d\u0005\u0011\u0000\u0000\u009b\u009e\u0003\b\u0004\u0000\u009c"+
		"\u009e\u0003\u000e\u0007\u0000\u009d\u009b\u0001\u0000\u0000\u0000\u009d"+
		"\u009c\u0001\u0000\u0000\u0000\u009e\u009f\u0001\u0000\u0000\u0000\u009f"+
		"\u00a0\u0005\u0012\u0000\u0000\u00a0\u00a4\u0005\u0013\u0000\u0000\u00a1"+
		"\u00a3\u0003\u0004\u0002\u0000\u00a2\u00a1\u0001\u0000\u0000\u0000\u00a3"+
		"\u00a6\u0001\u0000\u0000\u0000\u00a4\u00a2\u0001\u0000\u0000\u0000\u00a4"+
		"\u00a5\u0001\u0000\u0000\u0000\u00a5\u00a7\u0001\u0000\u0000\u0000\u00a6"+
		"\u00a4\u0001\u0000\u0000\u0000\u00a7\u00a8\u0005\u0014\u0000\u0000\u00a8"+
		"\u0019\u0001\u0000\u0000\u0000\u000f#+7AGJ_pry}\u0087\u0094\u009d\u00a4";
	public static final ATN _ATN =
		new ATNDeserializer().deserialize(_serializedATN.toCharArray());
	static {
		_decisionToDFA = new DFA[_ATN.getNumberOfDecisions()];
		for (int i = 0; i < _ATN.getNumberOfDecisions(); i++) {
			_decisionToDFA[i] = new DFA(_ATN.getDecisionState(i), i);
		}
	}
}