var detectCapitalUse = function (word) {
  let lowerCase = word.toLowerCase();

  const capitalized =
    lowerCase[0].toUpperCase() + lowerCase.split('').splice(1).join('');

  const testCondition =
    word === word.toLowerCase() ||
    word === word.toUpperCase() ||
    word === capitalized;

  return testCondition;
};