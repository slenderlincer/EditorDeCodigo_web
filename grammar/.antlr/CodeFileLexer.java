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
		INSERT=10, INT=11, CODE=12, ID=13, SEMI=14, WS=15, MUL=16, DIV=17, ADD=18, 
		SUB=19, TEXTO=20;
	public static String[] channelNames = {
		"DEFAULT_TOKEN_CHANNEL", "HIDDEN"
	};

	public static String[] modeNames = {
		"DEFAULT_MODE"
	};

	private static String[] makeRuleNames() {
		return new String[] {
			"T__0", "T__1", "T__2", "T__3", "T__4", "T__5", "T__6", "T__7", "T__8", 
			"INSERT", "INT", "CODE", "ID", "SEMI", "WS", "MUL", "DIV", "ADD", "SUB", 
			"TEXTO"
		};
	}
	public static final String[] ruleNames = makeRuleNames();

	private static String[] makeLiteralNames() {
		return new String[] {
			null, "'{'", "'}'", "'='", "'printf('", "')'", "'margit'", "'radahn'", 
			"'godrick'", "'('", "'iniciar'", null, "'codigo'", null, "';'", null, 
			"'*'", "'/'", "'+'", "'-'"
		};
	}
	private static final String[] _LITERAL_NAMES = makeLiteralNames();
	private static String[] makeSymbolicNames() {
		return new String[] {
			null, null, null, null, null, null, null, null, null, null, "INSERT", 
			"INT", "CODE", "ID", "SEMI", "WS", "MUL", "DIV", "ADD", "SUB", "TEXTO"
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
		"\u0004\u0000\u0014\u0084\u0006\uffff\uffff\u0002\u0000\u0007\u0000\u0002"+
		"\u0001\u0007\u0001\u0002\u0002\u0007\u0002\u0002\u0003\u0007\u0003\u0002"+
		"\u0004\u0007\u0004\u0002\u0005\u0007\u0005\u0002\u0006\u0007\u0006\u0002"+
		"\u0007\u0007\u0007\u0002\b\u0007\b\u0002\t\u0007\t\u0002\n\u0007\n\u0002"+
		"\u000b\u0007\u000b\u0002\f\u0007\f\u0002\r\u0007\r\u0002\u000e\u0007\u000e"+
		"\u0002\u000f\u0007\u000f\u0002\u0010\u0007\u0010\u0002\u0011\u0007\u0011"+
		"\u0002\u0012\u0007\u0012\u0002\u0013\u0007\u0013\u0001\u0000\u0001\u0000"+
		"\u0001\u0001\u0001\u0001\u0001\u0002\u0001\u0002\u0001\u0003\u0001\u0003"+
		"\u0001\u0003\u0001\u0003\u0001\u0003\u0001\u0003\u0001\u0003\u0001\u0003"+
		"\u0001\u0004\u0001\u0004\u0001\u0005\u0001\u0005\u0001\u0005\u0001\u0005"+
		"\u0001\u0005\u0001\u0005\u0001\u0005\u0001\u0006\u0001\u0006\u0001\u0006"+
		"\u0001\u0006\u0001\u0006\u0001\u0006\u0001\u0006\u0001\u0007\u0001\u0007"+
		"\u0001\u0007\u0001\u0007\u0001\u0007\u0001\u0007\u0001\u0007\u0001\u0007"+
		"\u0001\b\u0001\b\u0001\t\u0001\t\u0001\t\u0001\t\u0001\t\u0001\t\u0001"+
		"\t\u0001\t\u0001\n\u0004\n[\b\n\u000b\n\f\n\\\u0001\u000b\u0001\u000b"+
		"\u0001\u000b\u0001\u000b\u0001\u000b\u0001\u000b\u0001\u000b\u0001\f\u0004"+
		"\fg\b\f\u000b\f\f\fh\u0001\r\u0001\r\u0001\u000e\u0004\u000en\b\u000e"+
		"\u000b\u000e\f\u000eo\u0001\u000e\u0001\u000e\u0001\u000f\u0001\u000f"+
		"\u0001\u0010\u0001\u0010\u0001\u0011\u0001\u0011\u0001\u0012\u0001\u0012"+
		"\u0001\u0013\u0001\u0013\u0005\u0013~\b\u0013\n\u0013\f\u0013\u0081\t"+
		"\u0013\u0001\u0013\u0001\u0013\u0000\u0000\u0014\u0001\u0001\u0003\u0002"+
		"\u0005\u0003\u0007\u0004\t\u0005\u000b\u0006\r\u0007\u000f\b\u0011\t\u0013"+
		"\n\u0015\u000b\u0017\f\u0019\r\u001b\u000e\u001d\u000f\u001f\u0010!\u0011"+
		"#\u0012%\u0013\'\u0014\u0001\u0000\u0004\u0001\u000009\u0002\u0000AZa"+
		"z\u0003\u0000\t\n\r\r  \u0001\u0000\"\"\u0087\u0000\u0001\u0001\u0000"+
		"\u0000\u0000\u0000\u0003\u0001\u0000\u0000\u0000\u0000\u0005\u0001\u0000"+
		"\u0000\u0000\u0000\u0007\u0001\u0000\u0000\u0000\u0000\t\u0001\u0000\u0000"+
		"\u0000\u0000\u000b\u0001\u0000\u0000\u0000\u0000\r\u0001\u0000\u0000\u0000"+
		"\u0000\u000f\u0001\u0000\u0000\u0000\u0000\u0011\u0001\u0000\u0000\u0000"+
		"\u0000\u0013\u0001\u0000\u0000\u0000\u0000\u0015\u0001\u0000\u0000\u0000"+
		"\u0000\u0017\u0001\u0000\u0000\u0000\u0000\u0019\u0001\u0000\u0000\u0000"+
		"\u0000\u001b\u0001\u0000\u0000\u0000\u0000\u001d\u0001\u0000\u0000\u0000"+
		"\u0000\u001f\u0001\u0000\u0000\u0000\u0000!\u0001\u0000\u0000\u0000\u0000"+
		"#\u0001\u0000\u0000\u0000\u0000%\u0001\u0000\u0000\u0000\u0000\'\u0001"+
		"\u0000\u0000\u0000\u0001)\u0001\u0000\u0000\u0000\u0003+\u0001\u0000\u0000"+
		"\u0000\u0005-\u0001\u0000\u0000\u0000\u0007/\u0001\u0000\u0000\u0000\t"+
		"7\u0001\u0000\u0000\u0000\u000b9\u0001\u0000\u0000\u0000\r@\u0001\u0000"+
		"\u0000\u0000\u000fG\u0001\u0000\u0000\u0000\u0011O\u0001\u0000\u0000\u0000"+
		"\u0013Q\u0001\u0000\u0000\u0000\u0015Z\u0001\u0000\u0000\u0000\u0017^"+
		"\u0001\u0000\u0000\u0000\u0019f\u0001\u0000\u0000\u0000\u001bj\u0001\u0000"+
		"\u0000\u0000\u001dm\u0001\u0000\u0000\u0000\u001fs\u0001\u0000\u0000\u0000"+
		"!u\u0001\u0000\u0000\u0000#w\u0001\u0000\u0000\u0000%y\u0001\u0000\u0000"+
		"\u0000\'{\u0001\u0000\u0000\u0000)*\u0005{\u0000\u0000*\u0002\u0001\u0000"+
		"\u0000\u0000+,\u0005}\u0000\u0000,\u0004\u0001\u0000\u0000\u0000-.\u0005"+
		"=\u0000\u0000.\u0006\u0001\u0000\u0000\u0000/0\u0005p\u0000\u000001\u0005"+
		"r\u0000\u000012\u0005i\u0000\u000023\u0005n\u0000\u000034\u0005t\u0000"+
		"\u000045\u0005f\u0000\u000056\u0005(\u0000\u00006\b\u0001\u0000\u0000"+
		"\u000078\u0005)\u0000\u00008\n\u0001\u0000\u0000\u00009:\u0005m\u0000"+
		"\u0000:;\u0005a\u0000\u0000;<\u0005r\u0000\u0000<=\u0005g\u0000\u0000"+
		"=>\u0005i\u0000\u0000>?\u0005t\u0000\u0000?\f\u0001\u0000\u0000\u0000"+
		"@A\u0005r\u0000\u0000AB\u0005a\u0000\u0000BC\u0005d\u0000\u0000CD\u0005"+
		"a\u0000\u0000DE\u0005h\u0000\u0000EF\u0005n\u0000\u0000F\u000e\u0001\u0000"+
		"\u0000\u0000GH\u0005g\u0000\u0000HI\u0005o\u0000\u0000IJ\u0005d\u0000"+
		"\u0000JK\u0005r\u0000\u0000KL\u0005i\u0000\u0000LM\u0005c\u0000\u0000"+
		"MN\u0005k\u0000\u0000N\u0010\u0001\u0000\u0000\u0000OP\u0005(\u0000\u0000"+
		"P\u0012\u0001\u0000\u0000\u0000QR\u0005i\u0000\u0000RS\u0005n\u0000\u0000"+
		"ST\u0005i\u0000\u0000TU\u0005c\u0000\u0000UV\u0005i\u0000\u0000VW\u0005"+
		"a\u0000\u0000WX\u0005r\u0000\u0000X\u0014\u0001\u0000\u0000\u0000Y[\u0007"+
		"\u0000\u0000\u0000ZY\u0001\u0000\u0000\u0000[\\\u0001\u0000\u0000\u0000"+
		"\\Z\u0001\u0000\u0000\u0000\\]\u0001\u0000\u0000\u0000]\u0016\u0001\u0000"+
		"\u0000\u0000^_\u0005c\u0000\u0000_`\u0005o\u0000\u0000`a\u0005d\u0000"+
		"\u0000ab\u0005i\u0000\u0000bc\u0005g\u0000\u0000cd\u0005o\u0000\u0000"+
		"d\u0018\u0001\u0000\u0000\u0000eg\u0007\u0001\u0000\u0000fe\u0001\u0000"+
		"\u0000\u0000gh\u0001\u0000\u0000\u0000hf\u0001\u0000\u0000\u0000hi\u0001"+
		"\u0000\u0000\u0000i\u001a\u0001\u0000\u0000\u0000jk\u0005;\u0000\u0000"+
		"k\u001c\u0001\u0000\u0000\u0000ln\u0007\u0002\u0000\u0000ml\u0001\u0000"+
		"\u0000\u0000no\u0001\u0000\u0000\u0000om\u0001\u0000\u0000\u0000op\u0001"+
		"\u0000\u0000\u0000pq\u0001\u0000\u0000\u0000qr\u0006\u000e\u0000\u0000"+
		"r\u001e\u0001\u0000\u0000\u0000st\u0005*\u0000\u0000t \u0001\u0000\u0000"+
		"\u0000uv\u0005/\u0000\u0000v\"\u0001\u0000\u0000\u0000wx\u0005+\u0000"+
		"\u0000x$\u0001\u0000\u0000\u0000yz\u0005-\u0000\u0000z&\u0001\u0000\u0000"+
		"\u0000{\u007f\u0005\"\u0000\u0000|~\b\u0003\u0000\u0000}|\u0001\u0000"+
		"\u0000\u0000~\u0081\u0001\u0000\u0000\u0000\u007f}\u0001\u0000\u0000\u0000"+
		"\u007f\u0080\u0001\u0000\u0000\u0000\u0080\u0082\u0001\u0000\u0000\u0000"+
		"\u0081\u007f\u0001\u0000\u0000\u0000\u0082\u0083\u0005\"\u0000\u0000\u0083"+
		"(\u0001\u0000\u0000\u0000\u0005\u0000\\ho\u007f\u0001\u0006\u0000\u0000";
	public static final ATN _ATN =
		new ATNDeserializer().deserialize(_serializedATN.toCharArray());
	static {
		_decisionToDFA = new DFA[_ATN.getNumberOfDecisions()];
		for (int i = 0; i < _ATN.getNumberOfDecisions(); i++) {
			_decisionToDFA[i] = new DFA(_ATN.getDecisionState(i), i);
		}
	}
}