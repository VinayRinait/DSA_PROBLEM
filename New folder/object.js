let obj = {
  name: "dharmesh",
  lastName: "Yadav",
};

Object.freeze(obj);

obj.av = "yess";
console.log(Object.entries(obj));

// uneval(obj)
console.log(obj);
console.log(undefined * 10);

let newObj = JSON.parse(JSON.stringify(obj));
console.log(newObj);
