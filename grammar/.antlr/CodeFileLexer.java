// Generated from c://Users//saule//Desktop//Codigo_Editor//grammar//CodeFile.g4 by ANTLR 4.13.1
import org.antlr.v4.runtime.Lexer;
import org.antlr.v4.runtime.CharStream;
import org.antlr.v4.runtime.Token;
import org.antlr.v4.runtime.TokenStream;
import org.antlr.v4.runtime.*;
import org.antlr.v4.runtime.atn.*;
import org.antlr.v4.runtime.dfa.DFA;
import org.antlr.v4.runtime.misc.*;

@SuppressWarnings({"all", "warnings", "unchecked", "unused", "cast", "CheckReturnValue", "this-escape"})
public class CodeFileLexer extends Lexer {
	static { RuntimeMetaData.checkVersion("4.13.1", RuntimeMetaData.VERSION); }

	protected static final DFA[] _decisionToDFA;
	protected static final PredictionContextCache _sharedContextCache =
		new PredictionContextCache();
	public static final int
		T__0=1, T__1=2, T__2=3, T__3=4, T__4=5, T__5=6, T__6=7, T__7=8, T__8=9, 
		IF=10, ELSE=11, STRING=12, MAYORQUE=13, MENORQUE=14, MAYORIGUAL=15, MENORIGUAL=16, 
		DOBLEIGUAL=17, NEGACION=18, INSERT=19, INT=20, CODE=21, ID=22, SEMI=23, 
		MUL=24, DIV=25, ADD=26, SUB=27, WS=28;
	public static String[] channelNames = {
		"DEFAULT_TOKEN_CHANNEL", "HIDDEN"
	};

	public static String[] modeNames = {
		"DEFAULT_MODE"
	};

	private static String[] makeRuleNames() {
		return new String[] {
			"T__0", "T__1", "T__2", "T__3", "T__4", "T__5", "T__6", "T__7", "T__8", 
			"IF", "ELSE", "STRING", "MAYORQUE", "MENORQUE", "MAYORIGUAL", "MENORIGUAL", 
			"DOBLEIGUAL", "NEGACION", "INSERT", "INT", "CODE", "ID", "SEMI", "MUL", 
			"DIV", "ADD", "SUB", "WS"
		};
	}
	public static final String[] ruleNames = makeRuleNames();

	private static String[] makeLiteralNames() {
		return new String[] {
			null, "'{'", "'}'", "'='", "'MostrarMensaje('", "')'", "'('", "'margit'", 
			"'radahn'", "'godrick'", "'condition'", "'otherwise'", null, "'>'", "'<'", 
			"'>='", "'<='", "'=='", "'!='", "'iniciar'", null, "'codigo'", null, 
			"';'", "'*'", "'/'", "'+'", "'-'"
		};
	}
	private static final String[] _LITERAL_NAMES = makeLiteralNames();
	private static String[] makeSymbolicNames() {
		return new String[] {
			null, null, null, null, null, null, null, null, null, null, "IF", "ELSE", 
			"STRING", "MAYORQUE", "MENORQUE", "MAYORIGUAL", "MENORIGUAL", "DOBLEIGUAL", 
			"NEGACION", "INSERT", "INT", "CODE", "ID", "SEMI", "MUL", "DIV", "ADD", 
			"SUB", "WS"
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


	public CodeFileLexer(CharStream input) {
		super(input);
		_interp = new LexerATNSimulator(this,_ATN,_decisionToDFA,_sharedContextCache);
	}

	@Override
	public String getGrammarFileName() { return "CodeFile.g4"; }

	@Override
	public String[] getRuleNames() { return ruleNames; }

	@Override
	public String getSerializedATN() { return _serializedATN; }

	@Override
	public String[] getChannelNames() { return channelNames; }

	@Override
	public String[] getModeNames() { return modeNames; }

	@Override
	public ATN getATN() { return _ATN; }

	public static final String _serializedATN =
		"\u0004\u0000\u001c\u00c0\u0006\uffff\uffff\u0002\u0000\u0007\u0000\u0002"+
		"\u0001\u0007\u0001\u0002\u0002\u0007\u0002\u0002\u0003\u0007\u0003\u0002"+
		"\u0004\u0007\u0004\u0002\u0005\u0007\u0005\u0002\u0006\u0007\u0006\u0002"+
		"\u0007\u0007\u0007\u0002\b\u0007\b\u0002\t\u0007\t\u0002\n\u0007\n\u0002"+
		"\u000b\u0007\u000b\u0002\f\u0007\f\u0002\r\u0007\r\u0002\u000e\u0007\u000e"+
		"\u0002\u000f\u0007\u000f\u0002\u0010\u0007\u0010\u0002\u0011\u0007\u0011"+
		"\u0002\u0012\u0007\u0012\u0002\u0013\u0007\u0013\u0002\u0014\u0007\u0014"+
		"\u0002\u0015\u0007\u0015\u0002\u0016\u0007\u0016\u0002\u0017\u0007\u0017"+
		"\u0002\u0018\u0007\u0018\u0002\u0019\u0007\u0019\u0002\u001a\u0007\u001a"+
		"\u0002\u001b\u0007\u001b\u0001\u0000\u0001\u0000\u0001\u0001\u0001\u0001"+
		"\u0001\u0002\u0001\u0002\u0001\u0003\u0001\u0003\u0001\u0003\u0001\u0003"+
		"\u0001\u0003\u0001\u0003\u0001\u0003\u0001\u0003\u0001\u0003\u0001\u0003"+
		"\u0001\u0003\u0001\u0003\u0001\u0003\u0001\u0003\u0001\u0003\u0001\u0003"+
		"\u0001\u0004\u0001\u0004\u0001\u0005\u0001\u0005\u0001\u0006\u0001\u0006"+
		"\u0001\u0006\u0001\u0006\u0001\u0006\u0001\u0006\u0001\u0006\u0001\u0007"+
		"\u0001\u0007\u0001\u0007\u0001\u0007\u0001\u0007\u0001\u0007\u0001\u0007"+
		"\u0001\b\u0001\b\u0001\b\u0001\b\u0001\b\u0001\b\u0001\b\u0001\b\u0001"+
		"\t\u0001\t\u0001\t\u0001\t\u0001\t\u0001\t\u0001\t\u0001\t\u0001\t\u0001"+
		"\t\u0001\n\u0001\n\u0001\n\u0001\n\u0001\n\u0001\n\u0001\n\u0001\n\u0001"+
		"\n\u0001\n\u0001\u000b\u0001\u000b\u0005\u000b\u0080\b\u000b\n\u000b\f"+
		"\u000b\u0083\t\u000b\u0001\u000b\u0001\u000b\u0001\f\u0001\f\u0001\r\u0001"+
		"\r\u0001\u000e\u0001\u000e\u0001\u000e\u0001\u000f\u0001\u000f\u0001\u000f"+
		"\u0001\u0010\u0001\u0010\u0001\u0010\u0001\u0011\u0001\u0011\u0001\u0011"+
		"\u0001\u0012\u0001\u0012\u0001\u0012\u0001\u0012\u0001\u0012\u0001\u0012"+
		"\u0001\u0012\u0001\u0012\u0001\u0013\u0004\u0013\u00a0\b\u0013\u000b\u0013"+
		"\f\u0013\u00a1\u0001\u0014\u0001\u0014\u0001\u0014\u0001\u0014\u0001\u0014"+
		"\u0001\u0014\u0001\u0014\u0001\u0015\u0004\u0015\u00ac\b\u0015\u000b\u0015"+
		"\f\u0015\u00ad\u0001\u0016\u0001\u0016\u0001\u0017\u0001\u0017\u0001\u0018"+
		"\u0001\u0018\u0001\u0019\u0001\u0019\u0001\u001a\u0001\u001a\u0001\u001b"+
		"\u0004\u001b\u00bb\b\u001b\u000b\u001b\f\u001b\u00bc\u0001\u001b\u0001"+
		"\u001b\u0000\u0000\u001c\u0001\u0001\u0003\u0002\u0005\u0003\u0007\u0004"+
		"\t\u0005\u000b\u0006\r\u0007\u000f\b\u0011\t\u0013\n\u0015\u000b\u0017"+
		"\f\u0019\r\u001b\u000e\u001d\u000f\u001f\u0010!\u0011#\u0012%\u0013\'"+
		"\u0014)\u0015+\u0016-\u0017/\u00181\u00193\u001a5\u001b7\u001c\u0001\u0000"+
		"\u0004\u0001\u0000\"\"\u0001\u000009\u0002\u0000AZaz\u0003\u0000\t\n\r"+
		"\r  \u00c3\u0000\u0001\u0001\u0000\u0000\u0000\u0000\u0003\u0001\u0000"+
		"\u0000\u0000\u0000\u0005\u0001\u0000\u0000\u0000\u0000\u0007\u0001\u0000"+
		"\u0000\u0000\u0000\t\u0001\u0000\u0000\u0000\u0000\u000b\u0001\u0000\u0000"+
		"\u0000\u0000\r\u0001\u0000\u0000\u0000\u0000\u000f\u0001\u0000\u0000\u0000"+
		"\u0000\u0011\u0001\u0000\u0000\u0000\u0000\u0013\u0001\u0000\u0000\u0000"+
		"\u0000\u0015\u0001\u0000\u0000\u0000\u0000\u0017\u0001\u0000\u0000\u0000"+
		"\u0000\u0019\u0001\u0000\u0000\u0000\u0000\u001b\u0001\u0000\u0000\u0000"+
		"\u0000\u001d\u0001\u0000\u0000\u0000\u0000\u001f\u0001\u0000\u0000\u0000"+
		"\u0000!\u0001\u0000\u0000\u0000\u0000#\u0001\u0000\u0000\u0000\u0000%"+
		"\u0001\u0000\u0000\u0000\u0000\'\u0001\u0000\u0000\u0000\u0000)\u0001"+
		"\u0000\u0000\u0000\u0000+\u0001\u0000\u0000\u0000\u0000-\u0001\u0000\u0000"+
		"\u0000\u0000/\u0001\u0000\u0000\u0000\u00001\u0001\u0000\u0000\u0000\u0000"+
		"3\u0001\u0000\u0000\u0000\u00005\u0001\u0000\u0000\u0000\u00007\u0001"+
		"\u0000\u0000\u0000\u00019\u0001\u0000\u0000\u0000\u0003;\u0001\u0000\u0000"+
		"\u0000\u0005=\u0001\u0000\u0000\u0000\u0007?\u0001\u0000\u0000\u0000\t"+
		"O\u0001\u0000\u0000\u0000\u000bQ\u0001\u0000\u0000\u0000\rS\u0001\u0000"+
		"\u0000\u0000\u000fZ\u0001\u0000\u0000\u0000\u0011a\u0001\u0000\u0000\u0000"+
		"\u0013i\u0001\u0000\u0000\u0000\u0015s\u0001\u0000\u0000\u0000\u0017}"+
		"\u0001\u0000\u0000\u0000\u0019\u0086\u0001\u0000\u0000\u0000\u001b\u0088"+
		"\u0001\u0000\u0000\u0000\u001d\u008a\u0001\u0000\u0000\u0000\u001f\u008d"+
		"\u0001\u0000\u0000\u0000!\u0090\u0001\u0000\u0000\u0000#\u0093\u0001\u0000"+
		"\u0000\u0000%\u0096\u0001\u0000\u0000\u0000\'\u009f\u0001\u0000\u0000"+
		"\u0000)\u00a3\u0001\u0000\u0000\u0000+\u00ab\u0001\u0000\u0000\u0000-"+
		"\u00af\u0001\u0000\u0000\u0000/\u00b1\u0001\u0000\u0000\u00001\u00b3\u0001"+
		"\u0000\u0000\u00003\u00b5\u0001\u0000\u0000\u00005\u00b7\u0001\u0000\u0000"+
		"\u00007\u00ba\u0001\u0000\u0000\u00009:\u0005{\u0000\u0000:\u0002\u0001"+
		"\u0000\u0000\u0000;<\u0005}\u0000\u0000<\u0004\u0001\u0000\u0000\u0000"+
		"=>\u0005=\u0000\u0000>\u0006\u0001\u0000\u0000\u0000?@\u0005M\u0000\u0000"+
		"@A\u0005o\u0000\u0000AB\u0005s\u0000\u0000BC\u0005t\u0000\u0000CD\u0005"+
		"r\u0000\u0000DE\u0005a\u0000\u0000EF\u0005r\u0000\u0000FG\u0005M\u0000"+
		"\u0000GH\u0005e\u0000\u0000HI\u0005n\u0000\u0000IJ\u0005s\u0000\u0000"+
		"JK\u0005a\u0000\u0000KL\u0005j\u0000\u0000LM\u0005e\u0000\u0000MN\u0005"+
		"(\u0000\u0000N\b\u0001\u0000\u0000\u0000OP\u0005)\u0000\u0000P\n\u0001"+
		"\u0000\u0000\u0000QR\u0005(\u0000\u0000R\f\u0001\u0000\u0000\u0000ST\u0005"+
		"m\u0000\u0000TU\u0005a\u0000\u0000UV\u0005r\u0000\u0000VW\u0005g\u0000"+
		"\u0000WX\u0005i\u0000\u0000XY\u0005t\u0000\u0000Y\u000e\u0001\u0000\u0000"+
		"\u0000Z[\u0005r\u0000\u0000[\\\u0005a\u0000\u0000\\]\u0005d\u0000\u0000"+
		"]^\u0005a\u0000\u0000^_\u0005h\u0000\u0000_`\u0005n\u0000\u0000`\u0010"+
		"\u0001\u0000\u0000\u0000ab\u0005g\u0000\u0000bc\u0005o\u0000\u0000cd\u0005"+
		"d\u0000\u0000de\u0005r\u0000\u0000ef\u0005i\u0000\u0000fg\u0005c\u0000"+
		"\u0000gh\u0005k\u0000\u0000h\u0012\u0001\u0000\u0000\u0000ij\u0005c\u0000"+
		"\u0000jk\u0005o\u0000\u0000kl\u0005n\u0000\u0000lm\u0005d\u0000\u0000"+
		"mn\u0005i\u0000\u0000no\u0005t\u0000\u0000op\u0005i\u0000\u0000pq\u0005"+
		"o\u0000\u0000qr\u0005n\u0000\u0000r\u0014\u0001\u0000\u0000\u0000st\u0005"+
		"o\u0000\u0000tu\u0005t\u0000\u0000uv\u0005h\u0000\u0000vw\u0005e\u0000"+
		"\u0000wx\u0005r\u0000\u0000xy\u0005w\u0000\u0000yz\u0005i\u0000\u0000"+
		"z{\u0005s\u0000\u0000{|\u0005e\u0000\u0000|\u0016\u0001\u0000\u0000\u0000"+
		"}\u0081\u0005\"\u0000\u0000~\u0080\b\u0000\u0000\u0000\u007f~\u0001\u0000"+
		"\u0000\u0000\u0080\u0083\u0001\u0000\u0000\u0000\u0081\u007f\u0001\u0000"+
		"\u0000\u0000\u0081\u0082\u0001\u0000\u0000\u0000\u0082\u0084\u0001\u0000"+
		"\u0000\u0000\u0083\u0081\u0001\u0000\u0000\u0000\u0084\u0085\u0005\"\u0000"+
		"\u0000\u0085\u0018\u0001\u0000\u0000\u0000\u0086\u0087\u0005>\u0000\u0000"+
		"\u0087\u001a\u0001\u0000\u0000\u0000\u0088\u0089\u0005<\u0000\u0000\u0089"+
		"\u001c\u0001\u0000\u0000\u0000\u008a\u008b\u0005>\u0000\u0000\u008b\u008c"+
		"\u0005=\u0000\u0000\u008c\u001e\u0001\u0000\u0000\u0000\u008d\u008e\u0005"+
		"<\u0000\u0000\u008e\u008f\u0005=\u0000\u0000\u008f \u0001\u0000\u0000"+
		"\u0000\u0090\u0091\u0005=\u0000\u0000\u0091\u0092\u0005=\u0000\u0000\u0092"+
		"\"\u0001\u0000\u0000\u0000\u0093\u0094\u0005!\u0000\u0000\u0094\u0095"+
		"\u0005=\u0000\u0000\u0095$\u0001\u0000\u0000\u0000\u0096\u0097\u0005i"+
		"\u0000\u0000\u0097\u0098\u0005n\u0000\u0000\u0098\u0099\u0005i\u0000\u0000"+
		"\u0099\u009a\u0005c\u0000\u0000\u009a\u009b\u0005i\u0000\u0000\u009b\u009c"+
		"\u0005a\u0000\u0000\u009c\u009d\u0005r\u0000\u0000\u009d&\u0001\u0000"+
		"\u0000\u0000\u009e\u00a0\u0007\u0001\u0000\u0000\u009f\u009e\u0001\u0000"+
		"\u0000\u0000\u00a0\u00a1\u0001\u0000\u0000\u0000\u00a1\u009f\u0001\u0000"+
		"\u0000\u0000\u00a1\u00a2\u0001\u0000\u0000\u0000\u00a2(\u0001\u0000\u0000"+
		"\u0000\u00a3\u00a4\u0005c\u0000\u0000\u00a4\u00a5\u0005o\u0000\u0000\u00a5"+
		"\u00a6\u0005d\u0000\u0000\u00a6\u00a7\u0005i\u0000\u0000\u00a7\u00a8\u0005"+
		"g\u0000\u0000\u00a8\u00a9\u0005o\u0000\u0000\u00a9*\u0001\u0000\u0000"+
		"\u0000\u00aa\u00ac\u0007\u0002\u0000\u0000\u00ab\u00aa\u0001\u0000\u0000"+
		"\u0000\u00ac\u00ad\u0001\u0000\u0000\u0000\u00ad\u00ab\u0001\u0000\u0000"+
		"\u0000\u00ad\u00ae\u0001\u0000\u0000\u0000\u00ae,\u0001\u0000\u0000\u0000"+
		"\u00af\u00b0\u0005;\u0000\u0000\u00b0.\u0001\u0000\u0000\u0000\u00b1\u00b2"+
		"\u0005*\u0000\u0000\u00b20\u0001\u0000\u0000\u0000\u00b3\u00b4\u0005/"+
		"\u0000\u0000\u00b42\u0001\u0000\u0000\u0000\u00b5\u00b6\u0005+\u0000\u0000"+
		"\u00b64\u0001\u0000\u0000\u0000\u00b7\u00b8\u0005-\u0000\u0000\u00b86"+
		"\u0001\u0000\u0000\u0000\u00b9\u00bb\u0007\u0003\u0000\u0000\u00ba\u00b9"+
		"\u0001\u0000\u0000\u0000\u00bb\u00bc\u0001\u0000\u0000\u0000\u00bc\u00ba"+
		"\u0001\u0000\u0000\u0000\u00bc\u00bd\u0001\u0000\u0000\u0000\u00bd\u00be"+
		"\u0001\u0000\u0000\u0000\u00be\u00bf\u0006\u001b\u0000\u0000\u00bf8\u0001"+
		"\u0000\u0000\u0000\u0005\u0000\u0081\u00a1\u00ad\u00bc\u0001\u0006\u0000"+
		"\u0000";
	public static final ATN _ATN =
		new ATNDeserializer().deserialize(_serializedATN.toCharArray());
	static {
		_decisionToDFA = new DFA[_ATN.getNumberOfDecisions()];
		for (int i = 0; i < _ATN.getNumberOfDecisions(); i++) {
			_decisionToDFA[i] = new DFA(_ATN.getDecisionState(i), i);
		}
	}
}