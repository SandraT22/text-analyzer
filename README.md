# APPLICATION NAME

_Author_:

## Summary

...

## Technologies

- ...

## Description

...

## Setup/Installation

...

## Known bugs

...

## License

...

## Testing Overview

### Describe: wordCounter()

Test: "It should return 1 if a passage has just one word."
Code:
`const text = "hello"; wordCounter(text);`
Expected Output: 1

Test: "It should return 2 if a passage has two words."
Code:
`const text = "hello there"; wordCounter(text);`
Expected Output: 2

Test: "It should return 0 for an empty string."
Code: `wordCounter("");`
Expected Output: 0

Test: "It should return 0 for a string that is only spaces."
Code: `wordCounter(" ");`
Expected Output: 0

Test: "It should not count numbers as words."
Code: `wordCounter("hi there 77 19");`
Expected Output: 2

### Describe: numberOfOccurrencesInText()

Test: "It should return 0 occurrences of a word for an empty string."
Code:
`const text = ""; const word = "red"; numberOfOccurrencesInText(word, text);`
Expected Output: 0

Test: "It should return 1 occurrence of a word when the word and the text are the same."
Code:
`const text = "red"; const word = "red";`
numberOfOccurrencesInText(word, text);
Expected Output: 1

Test: "It should return 0 occurrences of a word when the word and the text are different."
Code:
`const text = "red"; const word = "blue"; numberOfOccurrencesInText(word, text);`
Expected Output: 0

Test: "It should return the number of occurrences of a word."
Code:
`const text = "red blue red red red green"; const word = "red"; numberOfOccurrencesInText(word, text);`
Expected Output: 4

Test: "It should return a word match regardless of case."
Code:
`const text = "red RED Red green Green GREEN"; const word = "Red"; numberOfOccurrencesInText(word, text);`
Expected Output: 3

Test: "It should return a word match regardless of punctuation."
Code:
`const text = "Red! Red. I like red, green, and yellow."; const word = "Red"; numberOfOccurrencesInText(word, text);`
Expected Output: 3

Test: Bad words should appear
Code:` `
Expected Output:

Test: "If an empty string is passed in as a word, it should return 0."
Code:
`const word = ""; const text = "red RED Red!"; wordCounter(word, text);`
Expected Output: 0

Test: "If an empty string is passed in as a word, it should return 0."
Code:
`const word = ""; const text = "red RED Red!"; wordCounter(word, text);`
Expected Output: 0

```
function boldPassage(word, text) {
  if (noInputtedWord(word, text)) {
    return '';
  }
  let htmlString = '<p>';
  let string = "";
  let substr = "";
  let textArray = text.split(' ');
  textArray.forEach(function (element, index) {
    if (element.toLowerCase().includes(word.toLowerCase())) {
      substr = word;
      htmlString = htmlString.concat(element.substr(0, index) + '<b>' + substr + '</b>');
    } else {
      htmlString = htmlString.concat(element);
    }
    if (index !== textArray.length - 1) {
      htmlString = htmlString.concat(' ');
    }
  });
  return htmlString + '</p>';
}
```