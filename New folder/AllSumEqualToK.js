let array = [2, 3, 4, 5, 6];
let sum = 2;
let n = array.length;
let dp = Array(n + 1).fill(-1);
for (let i = 0; i < dp.length; i++) {
  dp[i] = Array(sum + 1).fill(-1);
}

for (let i = 0; i <= n; i++) {
  for (let j = 0; j <= sum; j++) {
    if (i == 0) dp[i][j] = 0;
    if (j == 0) dp[i][j] = 1;
  }
}
for (let i = 1; i <= n; i++) {
  for (let j = 1; j <= sum; j++) {
    if (array[i - 1] <= j) {
      dp[i][j] = dp[i - 1][j - array[i - 1]] + dp[i - 1][j];
    } else dp[i][j] = dp[i - 1][j];
  }
}

console.log(dp[n][sum]);
