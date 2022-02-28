const tutorials = [
  'what does the this keyword mean?',
  'What is the Constructor OO pattern?',
  'implementing Blockchain Web API',
  'The Test Driven Development Workflow',
  'What is NaN and how Can we Check for it',
  'What is the difference between stopPropagation and preventDefault?',
  'Immutable State and Pure Functions',
  'what is the difference between == and ===?',
  'what is the difference between event capturing and bubbling?',
  'what is JSONP?'
];

function titleCased() {
  const newTutorials = tutorials.map(word => {
  const splitWords = word.split(" ");
  const stitched = splitWords.map(word2 => {
    const fixedWord = word2.substring(0,1).toUpperCase() + word2.substring(1);
    return fixedWord
  })
  return stitched.join(" ")})
  return newTutorials
}