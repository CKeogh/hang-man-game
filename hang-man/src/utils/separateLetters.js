exports.separateLetters = word => {
  const wordArr = word.split("");
  const obj = wordArr.reduce((acc, curr) => {
    // acc[curr] = "hidden";
    acc.push({ letter: curr.toUpperCase(), hidden: true });
    return acc;
  }, []);
  return obj;
};

exports.separateLetters("hello");
