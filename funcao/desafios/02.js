function tipoDotriangulo(a = 0, b = 0, c = 0) {

    if (!a || !b || !c) {

        console.log('Lados do triângulo não foi informado!');
        if (!a) {

            console.log('Informe três lados');
        } else if (!b) {

            console.log('Falta dois lados');
        } else if (!c) {

            console.log('Falta um lado');
        }

    } else if (a === b && b === c) {
        console.log('Triângulo Equilátero!');
    } else if (a === b || b === c || a === c) {
        console.log('Triângulo Isósceles');
    } else {
        console.log("Triângulo Escaleno");
    }
}

tipoDotriangulo(2, 2, 2);
