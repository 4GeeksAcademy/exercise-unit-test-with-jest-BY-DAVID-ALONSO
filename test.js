const {sum} = require ('./app.js')

test("One euro should be 1.07 dollars", function() {
    // Importo la funcion desde app.js
    const { fromEuroToDollar } = require('./app.js');

    // Uso la función como debe ser usada
    const dollars = fromEuroToDollar(3.5);

    // Si 1 euro son 1.07 dólares, entonces 3.5 euros debe ser (3.5 * 1.07)
    const expected = 3.5 * 1.07;

    // Hago mi comparación (la prueba)
    expect(fromEuroToDollar(3.5)).toBe(3.745); // 1 euro son 1.07 dólares, entonces 3.5 euros deberían ser = (3.5 * 1.07)
})
test("One dollar should be 147,71 Yens", function() {
    // Importo la funcion desde app.js
    const { fromDollarToYen } = require('./app.js');

    // Uso la función como debe ser usada
    const yen = fromDollarToYen(3.5);

    
    const expected = 3.5 * 147.71;

    
    expect(fromDollarToYen(3.5)).toBe(511.91588785046724); // 1 euro son 1.07 dólares, entonces 3.5 euros deberían ser = (3.5 * 1.07)
})
test("One Yen should be 0.0053 Pounds", function() {

    const { fromYenToPound } = require('./app.js');

    const Pounds = fromYenToPound(3.5);

    const expected = 3.5 * 0.0053;

    expect(fromYenToPound(3.5)).toBe(0.019456869009584665); 
})
