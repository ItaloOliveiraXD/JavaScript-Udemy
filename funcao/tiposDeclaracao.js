console.log(soma(3, 5)); // so consigo fazer isso com function declaration

// function declaration
function soma(x, y) {
    return x + y;
}

// function expression
const sub = function (x, y) {
    return x - y;
}
console.log(sub(5, 2));

// named function espression
const mult = function mult(x, y) {
    return x * y;
}
console.log(mult(3, 5));