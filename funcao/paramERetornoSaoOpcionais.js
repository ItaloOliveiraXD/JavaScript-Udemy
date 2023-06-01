// Não utilize esse metodo nos seus algoritimos.
function area(largura, altura) {
    const area = largura * altura;
    if (area > 20) {
        console.log(`Valor acima do permitido ${area}m²`);
    } else {
        return area;
    }
}

console.log(area(2, 3)); // Passando os parametros corretos.
console.log(area(2));   // Passando apenas 1 parametro.
console.log(area());    // Sem passar parametro.
console.log(area(2, 5, 6, 15, 20 )); // Passando uma quantidade maior de parametros.
console.log(area(5, 5)); // Passando parametro que retorna valos acida me 20.