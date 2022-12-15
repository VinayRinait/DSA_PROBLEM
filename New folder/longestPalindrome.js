var longestPalindrome = function (s) {
  let obj = {};
  for (let i = 0; i < s.length; i++) {
    if (obj[s[i]] == undefined) obj[s[i]] = 1;
    else obj[s[i]]++;
  }
  let count = 0;
  let res = 0;
  for (key in obj) {
    if (obj[key] > 1) {
      if (obj[key] % 2 == 0) count += obj[key];
      else if (obj[key] > 2 && obj[key] % 2 != 0) count += obj[key] - 1;
    }
    if (obj[key] == 1 || obj[key] % 2 !== 0) res++;
  }
  if (res != 0) return count + 1;
  if (count == 0) return res;
  else return count;
};

console.log(longestPalindrome("ccc"));
