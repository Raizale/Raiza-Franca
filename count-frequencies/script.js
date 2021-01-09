
document.getElementById("countButton").onclick = function () {
  let typedText = document.getElementById("textInput").value;

  countLetters(typedText)
  countWords(typedText)


}


function countLetters(text) {
  const letterCounts = {};
  text = text.toLowerCase();
  text = text.replace(/[^a-z'\s]+/g, "");


  for (let i = 0; i < text.length; i++) {
    currentLetter = text[i];



    if (letterCounts[currentLetter] === undefined) {
      letterCounts[currentLetter] = 1;
    } else {
      letterCounts[currentLetter]++;

    }
  }

  for (let letter in letterCounts) {
    const span = document.createElement("span");
    const textContent = document.createTextNode('"' + letter + "\": " + letterCounts[letter] + ", ");
    span.appendChild(textContent);
    document.getElementById("lettersDiv").appendChild(span);


  }
}


function countWords(text) {
  const wordCounts = {};
  text = text.toLowerCase();
  text = text.replace(/[^a-z'\s]+/g, "");
  text = text.split(/\s/);

  console.log(text)

  for (let i = 0; i < text.length; i++) {
    currentword = text[i];



    if (wordCounts[currentword] === undefined) {
      wordCounts[currentword] = 1;
    } else {
      wordCounts[currentword]++;

    }
  }

  for (let word in wordCounts) {
    const span = document.createElement("span");
    const textContent = document.createTextNode('"' + word + "\": " + wordCounts[word] + ", ");
    span.appendChild(textContent);
    document.getElementById("wordsDiv").appendChild(span);


  }
}
