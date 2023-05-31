let a = 10;
global.b = 20;
this.c = 30;

// Nunca crie uma variável sem declarar let ou var!
d = 40

console.log(a);
console.log(global.b);
console.log(this.c);
console.log(global.d);

// module.exports é a mesma coisa que o this.
this.e = 'teste';
this.f = false;
this.g = 50

// module.exports = { e: 'teste', f: false, g: 50 }

console.log(module.exports);
console.log(this === global);
console.log(module.exports === this);