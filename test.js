// importar la función sum del archivo app.js
const {  sum, fromDollarToYen, fromEuroToDollar, fromYenToPound } = require('./app.js');

// comienza tu primera prueba
test('adds 14 + 9 to equal 23', () => {
    //dentro de la prueba llamamos a nuestra función sum con 2 números
    let total = sum(14, 9);

    // esperamos que la suma de esos 2 números sea 23
    expect(total).toBe(23);
});

test('137 Dollars should be equal to 14601.916666666668', () => {
    //dentro de la prueba llamamos a nuestra función fromDollarToYen con 137 dolares
    let resultado = fromDollarToYen(137);

    // esperamos que el resultado en Yenes sea 14601.916666666668
    expect(resultado).toBe(14601.916666666668);
});

test('137 Euros should be 164.4', () => {
    //dentro de la prueba llamamos a nuestra función fromEuroToDollar con 137 euros
    let resultado1 = fromEuroToDollar(137);

    // esperamos que el resultado en Dolares sea 164.4
    expect(resultado1).toBe(164.4);
});

test('137 Yen should be 0.8569194683346364', () => {
    //dentro de la prueba llamamos a nuestra función fromYenToPound con 137 Yenes
    let resultado2 = fromYenToPound (137);

    // esperamos que el resultado en Libras Esterlinas sea 0.8569194683346364
    expect(resultado2).toBe(0.8569194683346364);
});