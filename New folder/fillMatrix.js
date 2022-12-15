function defaultMatrix(n, W) {
  var defaultValue = -1;
  var row = [];
  var matrix = [];
  for (var i = 0; i < W; i++) {
    row.push(defaultValue);
  }
  for (var i = 0; i < n; i++) {
    matrix.push(row);
  }
  return matrix;
}

console.log(defaultMatrix(2, 5));

let limit = 50;
let n = 3;
let weight = [60, 100, 120];
let value = [10, 20, 30];

function findit(limit, n, value, weight) {
  if (n == 0 || limit == 0) return 0;
  if (weight[n - 1] > limit) return findit(limit, n - 1, value, weight);
  else {
    return max(
      value[n - 1] + findit(limit - weight[n - 1], n - 1, value, weight),
      findit(limit, n - 1, value, weight)
    );
  }
}

function max(a, b) {
    return a > b ? a : b;
}





console.log(findit(50, 3, [10,20, 30],[60,100, 120]));