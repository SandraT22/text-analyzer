// Utility Logic

function noInputtedWord(word, text) {
  return text.trim().length === 0 || word.trim().length === 0;
}

// Business Logic

function wordCounter(text) {
  if (text.trim().length === 0) {
    return 0;
  }
  let wordCount = 0;
  const wordArray = text.split(' ');
  wordArray.forEach(function (element) {
    if (!Number(element)) {
      wordCount++;
    }
  });
  return wordCount;
}

function numberOfOccurrencesInText(word, text) {
  if (noInputtedWord(word, text)) {
    return 0;
  }
  const wordArray = text.split(' ');
  let wordCount = 0;
  wordArray.forEach(function (element) {
    if (element.toLowerCase().includes(word.toLowerCase())) {
      wordCount++;
    }
  });
  return wordCount;
}

function noPottyMouth(text) {
  let wordArray = text.split(' ');
  wordArray.forEach(function (element, index) {
    if (
      element.includes('loopdaloop') ||
      element.includes('zoinks') ||
      element.includes('muppeteer') ||
      element.includes('biffaroni')
    ) {
      wordArray[index] = 'awooga';
    }
  });
  return wordArray;
}

// UI Logic

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

// WIP solution:
// let str = "Hello";
// let substr = "el";
// str.replace(substr, '<b>' + substr + '</b>');
// https://stackoverflow.com/questions/29896907/bold-part-of-string

$(document).ready(function () {
  $('form#word-counter').submit(function (event) {
    event.preventDefault();
    const passage = $('#text-passage').val();
    const word = $('#word').val();
    const wordCount = wordCounter(passage);
    const occurrencesOfWord = numberOfOccurrencesInText(word, passage);
    $('#total-count').html(wordCount);
    $('#selected-count').html(occurrencesOfWord);
    $('#bolded-passage').html(boldPassage(word, passage));
  });
});
