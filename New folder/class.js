class Extended {
  constructor(a, b,array) {
    this.name = a;
    this.lastname = b;
    this.array = []
  }
  getFullName() {
    return this.name + " " + this.lastname;
  }
  MyArray(arg){
      return this.array.push(arg)
  }
  print(){
      console.log(this.array + ' ');
  }
}
let x = new Extended("Dharmesh", "Yadda");
console.log(x.getFullName());

let my = x.MyArray('Dahrmesh')
x.print()