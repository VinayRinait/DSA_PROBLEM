//Write a JavaScript program to find the greatest
// common divisor (gcd) of two positive numbers.
var gcd = function(a, b) {
    if ( ! b) {
        return a;
    }

    return gcd(b, a % b);
};
console.log(gcd(2154, 458));