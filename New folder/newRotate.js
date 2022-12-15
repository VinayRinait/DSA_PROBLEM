let array = [1, 2, 3, 4, 5, 6],
  k = -2;
k = k % array.length;
if (k < 0) {
  k += array.length;
}
const reverse = (array, i, j) => {
  while (i < j) {
    [array[i], array[j]] = [array[j], array[i]];
    i++, j--;
  }
};

reverse(array, 0, array.length - (k + 1));
reverse(array, array.length - k, array.length - 1);
reverse(array, 0, array.length - 1);
console.log(...array)
