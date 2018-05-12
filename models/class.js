function myClass(name, grade, member) {
  this.name = name;
  this.grade = grade;
  this.member = member;
}

var a = new myClass("a", "b", "c");

console.log(a);
