const div = (x, y) => {
    const dividendo = x / y;
    const resto = x % y;

    return `Dividendo: ${dividendo.toFixed(2)} \nResto: ${resto}`
}

console.log(div(10, 3));
