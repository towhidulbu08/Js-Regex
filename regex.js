//*Regex is a sequence of characters that forms a search pattern. It can be used for string searching algorithms, string manipulation, and data validation.
//*Match a single character with multiple possibilities:

let bgRegex = /b[aiu]g/; //matches "big", "bag", "bug"

let quoteSample =
  "Beware of bugs bag big better in the above code; I have only proved it correct, not tried it.";

let vowelRegex = /b[a-z]g/gi;

//console.log(quoteSample.match(vowelRegex));

//*Match letters of the alphabet:
// The regex /[a-zA-Z]/ matches any letter of the alphabet, regardless of case. It includes both lowercase (a-z) and uppercase (A-Z) letters.
// The regex /[A-Z]/ matches only uppercase letters, while /[a-z]/ matches only lowercase letters.
// The regex /[a-zA-Z0-9]/ matches any alphanumeric character (letter or digit).

let quoteSample2 = "The five boxing wizards jump quickly.";

let alphabetRegex = /[a-z]/gi; //matches any letter of the alphabet

// console.log(quoteSample2.match(alphabetRegex));

//*Match numbers and letters of the alphabet:

// The regex /[0-9]/ matches any digit from 0 to 9. It can be used to find numbers in a string.

// The regex /[0-9a-zA-Z]/ matches any alphanumeric character (letter or digit). It can be used to find letters and numbers in a string.

let quoteSample3 = "Blueberry 3.1415926535 pie is delicious.";
let myRegex = /[2-6h-s]/gi; //matches any letter or digit from 2 to 6 or h to s

// console.log(quoteSample3.match(myRegex));

//*Match Single Characters Not Specified:

// The regex /[^aeiou]/ matches any character that is not a vowel. It can be used to find consonants in a string.

// The regex /[^0-9]/ matches any character that is not a digit. It can be used to find non-numeric characters in a string.

// The regex /[^a-zA-Z]/ matches any character that is not a letter. It can be used to find non-alphabetic characters in a string.

//negated character sets:It means that the regex will match any character that is not in the specified set. For example, /[^aeiou]/ will match any character that is not a vowel.

let string = "3 blind mice.";

let regex = /[^0-9a-z]/gi;

console.log(string.match(regex));
