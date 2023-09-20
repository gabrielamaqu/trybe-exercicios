const removeItem = require ('./removeItem')

describe ('exercicio 1', () => {
    
    test('Verifica se a chamada removeItem([1, 2, 3, 4], 3) retorna o array esperado', () => {
        const inputArray =[1, 2, 3, 4];
        const itemToRemove = 3;
        const result = removeItem(inputArray, itemToRemove);
        expect(result).toEqual([1, 2, 4]);
    });

    test('Verifica se a chamada removeItem([1, 2, 3, 4], 3) não retorna o array [1, 2, 3, 4]', () => {
        const inputArray =[1, 2, 3, 4];
        const result = removeItem(inputArray);
        expect(result).toEqual([1, 2, 3, 4]);
    });

    test('Verifica se a chamada removeItem([1, 2, 3, 4], 5) retorna o array esperado.', () => {
    const inputArray = [1, 2, 3, 4];
    const addArray = 5;
    const result = removeItem(inputArray, addArray);
    expect(result).toEqual([1, 2, 3, 4], 5)
});
})

