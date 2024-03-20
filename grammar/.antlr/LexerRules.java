// Generated from c://Users//saule//Desktop//Codigo_Editor//grammar//LexerRules.g4 by ANTLR 4.13.1
import org.antlr.v4.runtime.Lexer;
import org.antlr.v4.runtime.CharStream;
import org.antlr.v4.runtime.Token;
import org.antlr.v4.runtime.TokenStream;
import org.antlr.v4.runtime.*;
import org.antlr.v4.runtime.atn.*;
import org.antlr.v4.runtime.dfa.DFA;
import org.antlr.v4.runtime.misc.*;

@SuppressWarnings({"all", "warnings", "unchecked", "unused", "cast", "CheckReturnValue", "this-escape"})
public class LexerRules extends Lexer {
	static { RuntimeMetaData.checkVersion("4.13.1", RuntimeMetaData.VERSION); }

	protected static final DFA[] _decisionToDFA;
	protected static final PredictionContextCache _sharedContextCache =
		new PredictionContextCache();
	public static final int
		INSERT=1, INT=2, CODE=3, ID=4, SEMI=5, MUL=6, DIV=7, ADD=8, SUB=9, WS=10;
	public static String[] channelNames = {
		"DEFAULT_TOKEN_CHANNEL", "HIDDEN"
	};

	public static String[] modeNames = {
		"DEFAULT_MODE"
	};

	private static String[] makeRuleNames() {
		return new String[] {
			"INSERT", "INT", "CODE", "ID", "SEMI", "MUL", "DIV", "ADD", "SUB", "WS"
		};
	}
	public static final String[] ruleNames = makeRuleNames();

	private static String[] makeLiteralNames() {
		return new String[] {
			null, "'iniciar'", null, "'codigo'", null, "';'", "'*'", "'/'", "'+'", 
			"'-'"
		};
	}
	private static final String[] _LITERAL_NAMES = makeLiteralNames();
	private static String[] makeSymbolicNames() {
		return new String[] {
			null, "INSERT", "INT", "CODE", "ID", "SEMI", "MUL", "DIV", "ADD", "SUB", 
			"WS"
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


	public LexerRules(CharStream input) {
		super(input);
		_interp = new LexerATNSimulator(this,_ATN,_decisionToDFA,_sharedContextCache);
	}

	@Override
	public String getGrammarFileName() { return "LexerRules.g4"; }

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
		"\u0004\u0000\n?\u0006\uffff\uffff\u0002\u0000\u0007\u0000\u0002\u0001"+
		"\u0007\u0001\u0002\u0002\u0007\u0002\u0002\u0003\u0007\u0003\u0002\u0004"+
		"\u0007\u0004\u0002\u0005\u0007\u0005\u0002\u0006\u0007\u0006\u0002\u0007"+
		"\u0007\u0007\u0002\b\u0007\b\u0002\t\u0007\t\u0001\u0000\u0001\u0000\u0001"+
		"\u0000\u0001\u0000\u0001\u0000\u0001\u0000\u0001\u0000\u0001\u0000\u0001"+
		"\u0001\u0004\u0001\u001f\b\u0001\u000b\u0001\f\u0001 \u0001\u0002\u0001"+
		"\u0002\u0001\u0002\u0001\u0002\u0001\u0002\u0001\u0002\u0001\u0002\u0001"+
		"\u0003\u0004\u0003+\b\u0003\u000b\u0003\f\u0003,\u0001\u0004\u0001\u0004"+
		"\u0001\u0005\u0001\u0005\u0001\u0006\u0001\u0006\u0001\u0007\u0001\u0007"+
		"\u0001\b\u0001\b\u0001\t\u0004\t:\b\t\u000b\t\f\t;\u0001\t\u0001\t\u0000"+
		"\u0000\n\u0001\u0001\u0003\u0002\u0005\u0003\u0007\u0004\t\u0005\u000b"+
		"\u0006\r\u0007\u000f\b\u0011\t\u0013\n\u0001\u0000\u0003\u0001\u00000"+
		"9\u0002\u0000AZaz\u0003\u0000\t\n\r\r  A\u0000\u0001\u0001\u0000\u0000"+
		"\u0000\u0000\u0003\u0001\u0000\u0000\u0000\u0000\u0005\u0001\u0000\u0000"+
		"\u0000\u0000\u0007\u0001\u0000\u0000\u0000\u0000\t\u0001\u0000\u0000\u0000"+
		"\u0000\u000b\u0001\u0000\u0000\u0000\u0000\r\u0001\u0000\u0000\u0000\u0000"+
		"\u000f\u0001\u0000\u0000\u0000\u0000\u0011\u0001\u0000\u0000\u0000\u0000"+
		"\u0013\u0001\u0000\u0000\u0000\u0001\u0015\u0001\u0000\u0000\u0000\u0003"+
		"\u001e\u0001\u0000\u0000\u0000\u0005\"\u0001\u0000\u0000\u0000\u0007*"+
		"\u0001\u0000\u0000\u0000\t.\u0001\u0000\u0000\u0000\u000b0\u0001\u0000"+
		"\u0000\u0000\r2\u0001\u0000\u0000\u0000\u000f4\u0001\u0000\u0000\u0000"+
		"\u00116\u0001\u0000\u0000\u0000\u00139\u0001\u0000\u0000\u0000\u0015\u0016"+
		"\u0005i\u0000\u0000\u0016\u0017\u0005n\u0000\u0000\u0017\u0018\u0005i"+
		"\u0000\u0000\u0018\u0019\u0005c\u0000\u0000\u0019\u001a\u0005i\u0000\u0000"+
		"\u001a\u001b\u0005a\u0000\u0000\u001b\u001c\u0005r\u0000\u0000\u001c\u0002"+
		"\u0001\u0000\u0000\u0000\u001d\u001f\u0007\u0000\u0000\u0000\u001e\u001d"+
		"\u0001\u0000\u0000\u0000\u001f \u0001\u0000\u0000\u0000 \u001e\u0001\u0000"+
		"\u0000\u0000 !\u0001\u0000\u0000\u0000!\u0004\u0001\u0000\u0000\u0000"+
		"\"#\u0005c\u0000\u0000#$\u0005o\u0000\u0000$%\u0005d\u0000\u0000%&\u0005"+
		"i\u0000\u0000&\'\u0005g\u0000\u0000\'(\u0005o\u0000\u0000(\u0006\u0001"+
		"\u0000\u0000\u0000)+\u0007\u0001\u0000\u0000*)\u0001\u0000\u0000\u0000"+
		"+,\u0001\u0000\u0000\u0000,*\u0001\u0000\u0000\u0000,-\u0001\u0000\u0000"+
		"\u0000-\b\u0001\u0000\u0000\u0000./\u0005;\u0000\u0000/\n\u0001\u0000"+
		"\u0000\u000001\u0005*\u0000\u00001\f\u0001\u0000\u0000\u000023\u0005/"+
		"\u0000\u00003\u000e\u0001\u0000\u0000\u000045\u0005+\u0000\u00005\u0010"+
		"\u0001\u0000\u0000\u000067\u0005-\u0000\u00007\u0012\u0001\u0000\u0000"+
		"\u00008:\u0007\u0002\u0000\u000098\u0001\u0000\u0000\u0000:;\u0001\u0000"+
		"\u0000\u0000;9\u0001\u0000\u0000\u0000;<\u0001\u0000\u0000\u0000<=\u0001"+
		"\u0000\u0000\u0000=>\u0006\t\u0000\u0000>\u0014\u0001\u0000\u0000\u0000"+
		"\u0004\u0000 ,;\u0001\u0006\u0000\u0000";
	public static final ATN _ATN =
		new ATNDeserializer().deserialize(_serializedATN.toCharArray());
	static {
		_decisionToDFA = new DFA[_ATN.getNumberOfDecisions()];
		for (int i = 0; i < _ATN.getNumberOfDecisions(); i++) {
			_decisionToDFA[i] = new DFA(_ATN.getDecisionState(i), i);
		}
	}
}