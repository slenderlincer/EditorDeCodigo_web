// Generated from c://Users//saule//Desktop//Codigo_Editor//grammar//lexerRulesCV.g4 by ANTLR 4.13.1
import org.antlr.v4.runtime.Lexer;
import org.antlr.v4.runtime.CharStream;
import org.antlr.v4.runtime.Token;
import org.antlr.v4.runtime.TokenStream;
import org.antlr.v4.runtime.*;
import org.antlr.v4.runtime.atn.*;
import org.antlr.v4.runtime.dfa.DFA;
import org.antlr.v4.runtime.misc.*;

@SuppressWarnings({"all", "warnings", "unchecked", "unused", "cast", "CheckReturnValue", "this-escape"})
public class lexerRulesCVLexer extends Lexer {
	static { RuntimeMetaData.checkVersion("4.13.1", RuntimeMetaData.VERSION); }

	protected static final DFA[] _decisionToDFA;
	protected static final PredictionContextCache _sharedContextCache =
		new PredictionContextCache();
	public static final int
		EQUALS=1, WHILE=2, SEMI=3, MUL=4, DIV=5, ADD=6, SUB=7, IF=8, ELSE=9, STRING=10, 
		COND_MAT=11, COND_LOG=12, WS=13;
	public static String[] channelNames = {
		"DEFAULT_TOKEN_CHANNEL", "HIDDEN"
	};

	public static String[] modeNames = {
		"DEFAULT_MODE"
	};

	private static String[] makeRuleNames() {
		return new String[] {
			"EQUALS", "WHILE", "SEMI", "MUL", "DIV", "ADD", "SUB", "IF", "ELSE", 
			"STRING", "COND_MAT", "COND_LOG", "WS"
		};
	}
	public static final String[] ruleNames = makeRuleNames();

	private static String[] makeLiteralNames() {
		return new String[] {
			null, "'='", "'while'", "';'", "'*'", "'/'", "'+'", "'-'", "'if'", "'else'"
		};
	}
	private static final String[] _LITERAL_NAMES = makeLiteralNames();
	private static String[] makeSymbolicNames() {
		return new String[] {
			null, "EQUALS", "WHILE", "SEMI", "MUL", "DIV", "ADD", "SUB", "IF", "ELSE", 
			"STRING", "COND_MAT", "COND_LOG", "WS"
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


	public lexerRulesCVLexer(CharStream input) {
		super(input);
		_interp = new LexerATNSimulator(this,_ATN,_decisionToDFA,_sharedContextCache);
	}

	@Override
	public String getGrammarFileName() { return "lexerRulesCV.g4"; }

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
		"\u0004\u0000\r_\u0006\uffff\uffff\u0002\u0000\u0007\u0000\u0002\u0001"+
		"\u0007\u0001\u0002\u0002\u0007\u0002\u0002\u0003\u0007\u0003\u0002\u0004"+
		"\u0007\u0004\u0002\u0005\u0007\u0005\u0002\u0006\u0007\u0006\u0002\u0007"+
		"\u0007\u0007\u0002\b\u0007\b\u0002\t\u0007\t\u0002\n\u0007\n\u0002\u000b"+
		"\u0007\u000b\u0002\f\u0007\f\u0001\u0000\u0001\u0000\u0001\u0001\u0001"+
		"\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0002\u0001"+
		"\u0002\u0001\u0003\u0001\u0003\u0001\u0004\u0001\u0004\u0001\u0005\u0001"+
		"\u0005\u0001\u0006\u0001\u0006\u0001\u0007\u0001\u0007\u0001\u0007\u0001"+
		"\b\u0001\b\u0001\b\u0001\b\u0001\b\u0001\t\u0001\t\u0005\t8\b\t\n\t\f"+
		"\t;\t\t\u0001\t\u0001\t\u0001\n\u0001\n\u0001\n\u0001\n\u0001\n\u0003"+
		"\nD\b\n\u0001\u000b\u0001\u000b\u0001\u000b\u0001\u000b\u0001\u000b\u0001"+
		"\u000b\u0001\u000b\u0001\u000b\u0001\u000b\u0001\u000b\u0001\u000b\u0001"+
		"\u000b\u0001\u000b\u0001\u000b\u0001\u000b\u0001\u000b\u0001\u000b\u0003"+
		"\u000bW\b\u000b\u0001\f\u0004\fZ\b\f\u000b\f\f\f[\u0001\f\u0001\f\u0000"+
		"\u0000\r\u0001\u0001\u0003\u0002\u0005\u0003\u0007\u0004\t\u0005\u000b"+
		"\u0006\r\u0007\u000f\b\u0011\t\u0013\n\u0015\u000b\u0017\f\u0019\r\u0001"+
		"\u0000\u0003\u0001\u0000\"\"\u0002\u0000<<>>\u0003\u0000\t\n\r\r  g\u0000"+
		"\u0001\u0001\u0000\u0000\u0000\u0000\u0003\u0001\u0000\u0000\u0000\u0000"+
		"\u0005\u0001\u0000\u0000\u0000\u0000\u0007\u0001\u0000\u0000\u0000\u0000"+
		"\t\u0001\u0000\u0000\u0000\u0000\u000b\u0001\u0000\u0000\u0000\u0000\r"+
		"\u0001\u0000\u0000\u0000\u0000\u000f\u0001\u0000\u0000\u0000\u0000\u0011"+
		"\u0001\u0000\u0000\u0000\u0000\u0013\u0001\u0000\u0000\u0000\u0000\u0015"+
		"\u0001\u0000\u0000\u0000\u0000\u0017\u0001\u0000\u0000\u0000\u0000\u0019"+
		"\u0001\u0000\u0000\u0000\u0001\u001b\u0001\u0000\u0000\u0000\u0003\u001d"+
		"\u0001\u0000\u0000\u0000\u0005#\u0001\u0000\u0000\u0000\u0007%\u0001\u0000"+
		"\u0000\u0000\t\'\u0001\u0000\u0000\u0000\u000b)\u0001\u0000\u0000\u0000"+
		"\r+\u0001\u0000\u0000\u0000\u000f-\u0001\u0000\u0000\u0000\u00110\u0001"+
		"\u0000\u0000\u0000\u00135\u0001\u0000\u0000\u0000\u0015C\u0001\u0000\u0000"+
		"\u0000\u0017V\u0001\u0000\u0000\u0000\u0019Y\u0001\u0000\u0000\u0000\u001b"+
		"\u001c\u0005=\u0000\u0000\u001c\u0002\u0001\u0000\u0000\u0000\u001d\u001e"+
		"\u0005w\u0000\u0000\u001e\u001f\u0005h\u0000\u0000\u001f \u0005i\u0000"+
		"\u0000 !\u0005l\u0000\u0000!\"\u0005e\u0000\u0000\"\u0004\u0001\u0000"+
		"\u0000\u0000#$\u0005;\u0000\u0000$\u0006\u0001\u0000\u0000\u0000%&\u0005"+
		"*\u0000\u0000&\b\u0001\u0000\u0000\u0000\'(\u0005/\u0000\u0000(\n\u0001"+
		"\u0000\u0000\u0000)*\u0005+\u0000\u0000*\f\u0001\u0000\u0000\u0000+,\u0005"+
		"-\u0000\u0000,\u000e\u0001\u0000\u0000\u0000-.\u0005i\u0000\u0000./\u0005"+
		"f\u0000\u0000/\u0010\u0001\u0000\u0000\u000001\u0005e\u0000\u000012\u0005"+
		"l\u0000\u000023\u0005s\u0000\u000034\u0005e\u0000\u00004\u0012\u0001\u0000"+
		"\u0000\u000059\u0005\"\u0000\u000068\b\u0000\u0000\u000076\u0001\u0000"+
		"\u0000\u00008;\u0001\u0000\u0000\u000097\u0001\u0000\u0000\u00009:\u0001"+
		"\u0000\u0000\u0000:<\u0001\u0000\u0000\u0000;9\u0001\u0000\u0000\u0000"+
		"<=\u0005\"\u0000\u0000=\u0014\u0001\u0000\u0000\u0000>D\u0007\u0001\u0000"+
		"\u0000?@\u0005<\u0000\u0000@D\u0005=\u0000\u0000AB\u0005>\u0000\u0000"+
		"BD\u0005=\u0000\u0000C>\u0001\u0000\u0000\u0000C?\u0001\u0000\u0000\u0000"+
		"CA\u0001\u0000\u0000\u0000D\u0016\u0001\u0000\u0000\u0000EF\u0005=\u0000"+
		"\u0000FW\u0005=\u0000\u0000GH\u0005!\u0000\u0000HW\u0005=\u0000\u0000"+
		"IJ\u0005t\u0000\u0000JK\u0005r\u0000\u0000KL\u0005u\u0000\u0000LW\u0005"+
		"e\u0000\u0000MN\u0005f\u0000\u0000NO\u0005a\u0000\u0000OP\u0005l\u0000"+
		"\u0000PQ\u0005s\u0000\u0000QW\u0005e\u0000\u0000RS\u0005&\u0000\u0000"+
		"SW\u0005&\u0000\u0000TU\u0005|\u0000\u0000UW\u0005|\u0000\u0000VE\u0001"+
		"\u0000\u0000\u0000VG\u0001\u0000\u0000\u0000VI\u0001\u0000\u0000\u0000"+
		"VM\u0001\u0000\u0000\u0000VR\u0001\u0000\u0000\u0000VT\u0001\u0000\u0000"+
		"\u0000W\u0018\u0001\u0000\u0000\u0000XZ\u0007\u0002\u0000\u0000YX\u0001"+
		"\u0000\u0000\u0000Z[\u0001\u0000\u0000\u0000[Y\u0001\u0000\u0000\u0000"+
		"[\\\u0001\u0000\u0000\u0000\\]\u0001\u0000\u0000\u0000]^\u0006\f\u0000"+
		"\u0000^\u001a\u0001\u0000\u0000\u0000\u0005\u00009CV[\u0001\u0006\u0000"+
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