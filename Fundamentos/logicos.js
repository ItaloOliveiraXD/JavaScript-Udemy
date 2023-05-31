function compras(trabalho1, trabalho2) {
    const compraSorvete = trabalho1 || trabalho2;
    const compraTv50 = trabalho1 && trabalho2;
    // const compraTv32 = !!(trabalho1 ^ trabalho2); operação bitwise xor
    const compraTv32 = trabalho1 != trabalho2;
    const manterSaudavel = !compraSorvete; // operador unário.

    return { compraSorvete, compraTv50, compraTv32, manterSaudavel };
}

console.log('01)', compras(true, true));
console.log('02)', compras(true, false));
console.log('03)', compras(false, true));
console.log('04)', compras(false, false));