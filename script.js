// Challenge 1: Store the string "I am a" in one variable and store the other string "Kalvian" in other variable and concatenate both the string to get the output as "I am a Kalvain" using "+" operator.

var firstString = 'I am a';
var secondString = 'Kalvian';
var concatenatedString = firstString + ' ' + secondString;
console.log(concatenatedString);

// Challenge 2: Store the given string in a variable and print the same in console. String: If you fail, never give up because FAIL means "First Attempt In Learning".

var message =
  'If you fail, never give up because FAIL means "First Attempt In Learning".';
console.log(message);

// Challenge 3: Store a string in a variable and display the length of the string.

var text = 'Store this string in a variable';
var length = text.length;
console.log('Length of the string is: ' + length);

// Challenge 4: Store a string in a variable and convert it into uppercase.

var lowercaseText = 'convert me to uppercase';
var uppercaseText = lowercaseText.toUpperCase();
console.log(uppercaseText);

//Challenge 5: Store the string "I love programming" in a variable and replace the word programming with "JavaScript programming".

var originalString = 'I love programming';
var replacedString = originalString.replace(
  'programming',
  'JavaScript programming'
);
console.log(replacedString);

// Challenge 6: Store a string in variable and print the string in console 3 times using repeat method.

var repeatedString = 'Print me three times. ';
console.log(repeatedString.repeat(3));

//Challenge 7: Store the string as "I am a Kalvian" in a variable and convert the string into array and print the array in console.

var inputString = 'I am a Kalvian';
var stringArray = inputString.split(' ');
console.log(stringArray);

// Challenge 8: Store the given string "Time and Tide wait for none" in a variable and using indexOf method find the index of "Ti" and print the same in console.

var longString = 'Time and Tide wait for none';
var index = longString.indexOf('Ti');
console.log("Index of 'Ti' is: " + index);

// Challenge 9: Store the given string "When life gives you lemons make lemonade" in a variable and find whether it includes "lemon".

var lemonText = 'When life gives you lemons make lemonade';
var includesLemon = lemonText.includes('lemon');
console.log("Includes 'lemon': " + includesLemon);

// Challenge 10: Store the given string "You must be the change you wish to see in the world." in a variable and use slice to console log the word "change" and use substring method to console log the word "world".

var sampleText = 'You must be the change you wish to see in the world.';
var slicedWord = sampleText.slice(17, 23); // "change"
var subStringWord = sampleText.substring(46, 51); // "world"
console.log('Sliced: ' + slicedWord);
console.log('Substring: ' + subStringWord);
