

test('Esta prueba no debe de fallar', () => {
    // 1. Inicializacion
    const message1 = 'Hola Mundo';

    // 2.Estimulo
    const message2 = message1.trim();

    // 3.Observar el comportamiento...esperado
    expect(message1).toBe(message2);
})