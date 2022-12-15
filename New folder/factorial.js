var prod = factorial(10);
println(prod);

function factorial(n)
{
    if (n <= 1)
        return 1;

    return n * factorial(n - 1);
}