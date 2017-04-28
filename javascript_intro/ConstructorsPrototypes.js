function Cat(name, owner) {
  this.name = name;
  this.owner = owner;
}

Cat.prototype.cuteStatement = function () {
  return `${this.owner} loves ${this.name}`;
};

Cat.prototype.meow = function () {
  return `meow~`;
};

let cat2 = new Cat('Summi', 'Pap');
let cat1 = new Cat('kat', 'bob1');

console.log(cat1.cuteStatement());
console.log(cat2.cuteStatement());
console.log(cat1.meow());
console.log(cat2.meow());

Cat.prototype.cuteStatement = function () {
  return `Everyone loves ${this.name}`;
};

cat1.meow = function () {
  return `MEOW!`;
};

console.log(cat1.cuteStatement());
console.log(cat1.meow());
console.log(cat2.cuteStatement());
console.log(cat2.meow());
