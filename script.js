const palindrome = function (word) {
  let len = word.length;
  let start = word.substring(0, Math.floor(len / 2)).toLowerCase();
  let end = word.substring(len - Math.floor(len / 2)).toLowerCase();
  // console.log(start, end);
  let flip = end.split("").reverse().join("");
  // console.log(flip);
  return start === flip;
};

function checkPalindrome() {
  const word = document.getElementById("word").value;
  const result = palindrome(word) ? "is a palindrome." : "is not a palindrome.";
  document.getElementById("result").textContent = `"${word}" ${result}`;
}

// console.log(palindrome("radar"));
// console.log(palindrome("antna"));
// console.log(palindrome("window"));
