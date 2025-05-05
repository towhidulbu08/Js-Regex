// using text method:
//Returns a Boolean value that indicates whether or not a pattern exists in a searched string.

// @param string — String on which to perform the search.
// text method is case sensitive.
let sentence = "The dog chased the cat";

let regex = /Dog/;
let result = regex.test(sentence);

//console.log(result);

//Match literal strings:

let waldoIsHiding = "Waldo is hiding in this text!";

let waldoRegex = /waldo/;

let result2 = waldoRegex.test(waldoIsHiding);

//console.log(result2);

//Match a literal string with different possibilities:

// The | operator is used to match either the string "dog" or the string "cat" or the string "turtle".
// The test() method returns true if the string contains any of these words, and false otherwise.

let petString = "James has a pet cat, a pet dog, and a pet turtle.";
let petRegex = /dog|cat|turtle|fish|tiger/;

let result3 = petRegex.test(petString);
//console.log(result3);

//Ignore case while matching:

// A flag is a special character that modifies the behavior of a regular expression. Flags are added to the end of the regex pattern, after the closing delimiter (usually a forward slash).

// The i flag is used to perform a case-insensitive match. This means that the regex will match "dog", "Dog", "DOG", etc.

let myString = "freeCodeCamp";
let myRegex = /freecodecamp/i;
//console.log(myRegex.test(myString));

//Extract Matches
// The match() method is used to search a string for a match against a regular expression and returns an array of the matches found. If no matches are found, it returns null.

// The match() method is useful for extracting specific parts of a string that match a certain pattern defined by a regular expression.

// The match() method is called on a string and takes a regular expression as an argument. It returns an array of matches or null if no matches are found.

let extractStr = "Extract the word 'coding' from this string.";

let codingRegex = /coding/;
let result4 = extractStr.match(codingRegex);

//console.log(result4);//output: ["coding"]

//Find More than the first match

// The g flag is used to perform a global search, meaning it will find all matches in the string, not just the first one.
// The match() method will return an array of all matches found in the string.
// If no matches are found, it returns null.

// The g flag is useful when you want to find all occurrences of a pattern in a string, rather than just the first one.

let twinkleStar = "Twinkle, twinkle, little star! How I wonder what you are!";
let starRegex = /twinkle/gi;

//console.log(twinkleStar.match(starRegex)); /// ["Twinkle", "twinkle"]

//Match anything with wildcard period

// The dot (.) is a special character in regular expressions that matches any single character except for line terminators (like newline characters).
// It is often used as a wildcard to represent any character in a pattern.
// The dot can be used in combination with other characters to create more complex patterns.
// For example, the regex /h.t/ would match "hat", "hit", "hot", etc., where the dot represents any character between "h" and "t".

let humStr = "I'll hum hut hu9 hu& hat a song!";
let hugStr = "Bear hub";

let huRegex = /hu./g; //matches any character after "hu"

//console.log(humStr.match(huRegex)); //output: ["hum","hut","hu9","hu&"]
//console.log(hugStr.match(huRegex)); //output: ["hub"]

let exampleStr = "Let's have  funny bun fun  with regular expressions!";

let unRegex = /.un/g;

console.log(exampleStr.match(unRegex));
console.log(unRegex.test(exampleStr));

//Match a single character with multiple possibilities:

// The square brackets [] are used to create a character class, which allows you to specify a set of characters that can match at that position in the string.
// The character class can contain individual characters, ranges of characters, or a combination of both.
// For example, the regex /[aeiou]/ would match any vowel (a, e, i, o, or u) in a string.
// The regex /[a-z]/ would match any lowercase letter from a to z. The regex /[0-9]/ would match any digit from 0 to 9.
// The regex /[a-zA-Z]/ would match any letter, regardless of case.
// The regex /[aeiou0-9]/ would match any vowel or digit.
// The regex /[a-zA-Z0-9]/ would match any alphanumeric character (letter or digit).
// The regex /[^aeiou]/ would match any character that is not a vowel (the caret ^ inside the brackets negates the character class).
// The regex /[aeiou]{2}/ would match any two consecutive vowels (e.g., "aa", "ee", "oo").

let bgRegex = /b[aiu]g/; //matches "big", "bag", "bug"
