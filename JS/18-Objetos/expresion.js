const re = /ab+c/;
/*
This RegEx above matches the character a, followed by one or more instances
 of the character b, followed by the character c.
*/

//RegExp Objects
	/*We can write a regular expression string and pass it as an argument 
	to the RegExp constructor:
	*/
const re = new RegExp('ab+c');

//Flags
	/*	
	To create a RegExp object, we use this syntax:
	To create a regular expression literal, we use this syntax:
		pattern/flags	
	*/
	new RegExp(pattern[, flags])
	/*
	flags can have any combination of the following values:
	    g: global match.
	    i: ignore case.
	    m: multiline. Treats beginning (^) and end ($) characters as working over multiple lines.
	    u: unicode. Treat pattern as a sequence of unicode code points.
	    y: sticky. Matches only from the index indicated by the lastIndex 
	    	property of this regular expression in the target string.

	*/
	// Test whether 'learn' is contained at the very beginning of a string

	//Character Classes
		/*
		Predefined: These consist of a backslash character (\) followed by a letter.
		. 	The period matches any single character, (e.g., a newline).
		\d 	A single digit character (i.e., [0-9]).
		\D 	A single non-digit character (i.e., [^0-9]).
		\w 	A single alphanumeric word character, including the underscore 
			(i.e., [A-Za-z0-9_]).
		\W 	A single non-word character (i.e., [^A-Za-z0-9_]).
		\s 	A single whitespace character. This includes space (), tab (\t), 
			form feed, line feed, and other Unicode spaces.
		\S 	A single non-whitespace character (i.e., [^\w]).
		*/
	//Character Sets
		/*
			[a-d] == [abcd] will match any one character from the set {a, b, c, d}.
			[^abcd]: Matches anything other than the enclosed characters. 
					 This is equivalent to [^a-d]. 
		*/
	//Boundaries
		/*
			^ 	Matches beginning of input
			$ 	Matches end of input
			\b 	A zero-width word boundary, such as between a letter and a space.
			\B 	Matches a zero-width non-word boundary, such as between two 
				letters or between two spaces.
		*/
	//Quantifiers
		/*
			a*: Matches the preceding item a, 0 or more times.
			a+: Matches the preceding item a, 1 or more times.
			a?: Matches the preceding item a, 0 or 1 time.
			a{n}: Here n is a positive integer. Matches exactly n occurrences of 
				  the preceding item a.
			a{n, }: Here n is a positive integer. Matches at least n occurrences 
					of the preceding item a.
			a{n, m}: Here n and m are positive integers. Matches at least n and at 
					 most m occurrences of the preceding item a.
		*/

	//Assertions
		/*
			a(?=b): Matches a only if a is followed by b.
			a(?!b): Matches a only if a is not followed by b.
		*/

//The "test" Method (BUSCA COINCIDENCIAS)
/*The test() method executes a search for a match between a regular expression 
  and a specified string. Returns true or false.*/
var re = /^learn/;
var str1 = 'learn regular expressions';
var str2 = 'write regular expressions';

console.log(re.test(str1));
console.log(re.test(str2));

//The exec Method
	/*The exec() method executes a search for a match in a specified string. 
	  Returns a result array or null.
	*/

var re = /quick\s(brown).+?(jumps)/ig;
var str = 'The Quick Brown Fox Jumps Over The Lazy Dog.';
var res = re.exec(str);

console.log(res);
console.log();

// The result object contains following information:
// 1. [0] is the full string of characters matched
// 2. [1], ...[n] is the parenthesized substring matches, if any. The number of possible parenthesized substrings is unlimited.
// 3. index is the 0-based index of the match in the string.
// 4. input is the original string.

console.log('string of characters matched = ' + res[0]);
console.log('first parenthesized substring match = ' + res[1]);
console.log('second parenthesized substring match = ' + res[2]);
console.log('index of the match = ' + res.index);
console.log('original string = ' + res.input);

//Match
	/*
	The match() method retrieves the matches when matching a string 
	against a regular expression.
	*/


