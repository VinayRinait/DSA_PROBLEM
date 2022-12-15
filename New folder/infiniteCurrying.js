let fun = (a) => {
  return (b) => {
    if (b) return fun(a + b);
    return a;
  };
};

console.log(fun(1)(2)(3)());
