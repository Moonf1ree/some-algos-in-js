function isPalindrome(string) {
  string = string.toLowerCase().split("\n").join("").split(" ").join("");
  let x = [];

  for (let i = 0; i < string.length; i++) {
    if (string[i] !== " ") {
      x.push(string[i]);
    }
  }
  let reversedString = x.reverse().join("");
  return string === reversedString; //palindrome without regular expressions including all String staff
}
console.log(
  isPalindrome(`ann
a`)
);
