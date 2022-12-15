function countPossiblePairs(n, m) {
    var count = 0;
    for (var x = 0; x * x <= n; x++)
        if ((n - x * 2) * 2 + x == m)
            count++;

    console.log(count);
}