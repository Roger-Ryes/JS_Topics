/*A Regular Expression, or RegEx, is a pattern used to 
  match character combinations in a string.*/

//REGULAR EXPRESSION PATTERNS
	/*Regular Expression Literal
		A regular expression literal is a RegEx pattern encosed
		within forward slashes:*/
		const re = /ab+c/;
		/*This RegEx above matches the character a, followed 
		  by one or more instances of the character b, followed 
		  by the character c.*/

    /*RegExp Objects
		We can write a regular expression string and pass it as 
		an argument to the RegExp constructor:
		*/
		const re = new RegExp('ab+c');

//FLAGS
	//To create a RegExp object, we use this syntax:

	new RegExp(pattern[, flags])
	/*
	To create a regular expression literal, we use this syntax:
		/pattern/flags

	If specified, flags can have any combination of the following values:
	    g: global match.
	    i: ignore case.
	    m: multiline. Treats beginning (^) and end ($) characters 
	       s working over multiple lines.
	    u: unicode. Treat pattern as a sequence of unicode code 
	       points.
	    y: sticky. Matches only from the index indicated by the
	       lastIndex property of this regular expression in the 
	       target string.
	*/

//SPECIAL CHARACTERS IN REGULAR EXPRESSIONS
	/*
    Character Classes
    Character Sets
    Alteration
    Boundaries
    Grouping and back references
    Quantifiers
    Assertions

	//Character Classes
		This is not a class in the traditional sense, but rather 
		a term that refers to a set of one or more characters 
		that can be used to match a single character from some 
		input string.
		- Enclosed within square brackets:
			Exm. [a-f] will matchesh any lowercase a through f character.
		- Predefined: 
			use backslash character (\) followed by a letter. exam
Character 	Matches
	. 		The period matches any single character, except line 
			terminators (e.g., a newline).
	\d 		A single digit character (i.e., [0-9]).
	\D 		A single non-digit character (i.e., [^0-9]).
	\w 		A single alphanumeric word character, including the 
			underscore (i.e., [A-Za-z0-9_]).
	\W 		A single non-word character (i.e., [^A-Za-z0-9_]).
	\s 		. This includes space (), 
			tab (\t), form feed, line feed, and other Unicode 
			spaces.
	\S 		A single non-whitespace character (i.e., [^\w]).

	//CHARACTER SETS
	 - The character set [abcd] will match any one character from 
	   the set {a, b, c, d}. This is equivalent to [a-d].
	 - The character set [^abcd]: Matches anything other than the 
	   enclosed characters. This is equivalent to [^a-d].

	//ALTERATION
		We use the | symbol to match one thing or the other. 
		For example, a|b matches either a or b.

	//BOUNDARIES
Character 	Matches
	^ 		Matches beginning of input. 
	$ 		Matches end of input. 
	\b 		A zero-width word boundary, such as between a letter 
			and a space.
	\B 		Matches a zero-width non-word boundary, such as 
			between two letters or between two spaces.

	//GROUPING AND BACK REFERENCES
		(a): Matches a and remembers the match. These are called 
			 capturing groups.
		(?:a): Matches a but does not remember the match. These 
			   are called non-capturing groups.
		\n: Here n is a positive integer. A back reference to the 
			last substring matching the n parenthetical in the 
			regular expression.

	//QUANTIFIERS
		a*: Matches the preceding item a, 0 or more times.
		a+: Matches the preceding item a, 1 or more times.
		a?: Matches the preceding item a, 0 or 1 time.
		a{n}: Here n is a positive integer. Matches exactly n 
			  occurrences of the preceding item a.
		a{n, }: Here n is a positive integer. Matches at least n 
				occurrences of the preceding item a.
		a{n, m}: Here n and m are positive integers. Matches at 
				 least n and at most m occurrences of the 
				 preceding item a.

	//ASSERTIONS
		a(?=b): Matches a only if a is followed by b.
		a(?!b): Matches a only if a is not followed by b.

	//WORKING WITH REGULAR EXPRESSIONS
		Regular expressions are used with the RegExp methods:
	*///    - test
	var re = /^learn/;
	var str1 = 'learn regular expressions';
	var str2 = 'write regular expressions';

	console.log(re.test(str1));
	console.log(re.test(str2));
		/*OUTPUT
		TRUE
		FALSE
		*/

	//exec
		// Match 'quick brown' followed by 'jumps', ignoring characters in between
		// Remember 'brown' and 'jumps'
		// Ignore case

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
	
	//	and with the String methods:
	
	//match
		/*The match() method retrieves the matches when matching a
		  string against a regular expression.*/
		var re = /see (chapter \d+(\.\d)*)/i;
		var str = 'For more information on regular expressions, see Chapter 3.4.5.1 and CHAPTER 2.3';
		console.log(str.match(re));

	//search
		/*The search() method executes a search for a match 
		between a regular expression and this String object.*/
		const re = /learn/;
		const str1 = 'Today, we\'ll learn about regular expressions.';
		const str2 = 'Tomorrow, we\'ll write regular expressions '
		            + 'and learn some complex expressions.';
		const str3 = 'We\'re all done now!';

		console.log(str1);
		console.log('A search for', re, 'returns', str1.search(re), '\n');
		console.log(str2);
		console.log('A search for', re, 'returns', str2.search(re), '\n');
		console.log(str3);
		console.log('A search for', re, 'returns', str3.search(re));

	//	    - split
		/*The split() method splits a String object into an array 
		of strings by separating the string into substrings.*/
		const name = 'Julia Roberts';
		const res = name.split(' ');

		console.log('The split array:', res);
		console.log('First Name:', res[0]);
		console.log('Last Name:', res[1]); 

	//	    - replace
		/*The replace(pattern, replacement) method returns a new 
		string where some (or all) occurrences of a matched  "pattern"
		have been replaced with a "replacement" substring. 
			pattern: This value can be a string or a RegExp object 
					 to match against the calling string.
			replacement: This value can be a substring to replace the 
						 match with, or it can be a function to invoke 
						 that generates the replacement substring.
		*/
		const re = /RegExp/;
		const myString = 'We\'re learning about RegExps.';
		const replacementString = 'Regular Expression';

		console.log(myString);
		console.log(myString.replace(re, replacementString));


//EXAMPLE
const re = /(.).*\1/;

const str1 = 'wxyz';
const str2 = 'wxyzw';
const str3 = 'wxyzx';
const str4 = 'wxywz';

console.log('substring:', str1.match(re));
console.log('substring:', str2.match(re)[0]);
console.log('substring:', str3.match(re)[0]);
console.log('substring:', str4.match(re)[0]);

//OUTPUT 
/*
	substring: null
	substring: wxyzw
	substring: xyzx
	substring: wxyw
*/
/*
Let's break down the regular expression (.).*\1:
	1. (.) captures any character.
	2. .* stipulates that the captured character must followed by zero 
		or more occurrences of any character.
	3. \1 is a backreference to the first capture group in our 
		expression (i.e., (.)). It stipulates that the character 
		following whatever we matched in step 2 must match whatever 
		was captured inside the parentheses in step 1.
*/

/*
function regexVar(str) {
//  ^ => first item matches:
// () => stores matching value captured within
// [aeiou] => matches any of the characters in the brackets
// . => matches any character:
// + => for 1 or more occurrances (this ensures str length > 3)
// \1 => matches to previously stored match. 
    // \2 looks for matched item stored 2 instances ago 
    // \3 looks for matched item stored 3 ago, etc

//  $ ensures that matched item is at end of the sequence
*/


//EXAMPLE
var reg = /^([aeiou]).+\1$/; 
const strA = 'abeca';
const strB = 'bcsa';
const strC = 'ioucxio';
const strD = 'eiosce';
console.log('substring:', strA.match(reg));
console.log('substring:', strB.match(reg));
console.log('substring:', strC.match(reg));
console.log('substring:', strD.match(reg));