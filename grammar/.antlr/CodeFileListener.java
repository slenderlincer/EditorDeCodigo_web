// Generated from c://Users//saule//Desktop//Cascaron//grammar//CodeFile.g4 by ANTLR 4.13.1
import org.antlr.v4.runtime.tree.ParseTreeListener;

/**
 * This interface defines a complete listener for a parse tree produced by
 * {@link CodeFileParser}.
 */
public interface CodeFileListener extends ParseTreeListener {
	/**
	 * Enter a parse tree produced by {@link CodeFileParser#start}.
	 * @param ctx the parse tree
	 */
	void enterStart(CodeFileParser.StartContext ctx);
	/**
	 * Exit a parse tree produced by {@link CodeFileParser#start}.
	 * @param ctx the parse tree
	 */
	void exitStart(CodeFileParser.StartContext ctx);
}