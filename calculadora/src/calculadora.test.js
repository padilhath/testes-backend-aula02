import {
  dividir,
  ehpar,
  multiplicar,
  somar,
  subtrair,
  potencia,
  porcentagem,
  mediaDeTres,
} from "./calculadora";

describe("Operações matemáticas", () => {
  test("Deve somar dois números positivos", () => {
    // Arrange
    const a = 2;
    const b = 3;

    // Act
    const resultado = somar(a, b);

    // Assert
    expect(resultado).toBe(5);
  });

  test("Deve somar dois números negativos", () => {
    // Arrange
    const a = -2;
    const b = -3;

    // Act
    const resultado = somar(a, b);

    // Assert
    expect(resultado).toBe(-5);
  });

  test("Deve subtrair dois números", () => {
    // Arrange
    const a = 5;
    const b = 3;

    //Act
    const resultado = subtrair(a, b);

    // Assert
    expect(resultado).toBe(2);
  });

  test("Deve multiplicar dois números", () => {
    // Arrange
    const a = 5;
    const b = 3;

    //Act
    const resultado = multiplicar(a, b);

    // Assert
    expect(resultado).toBe(15);
  });

  test("Deve dividir dois números", () => {
    // Arrange
    const a = 10;
    const b = 2;

    //Act
    const resultado = dividir(a, b);

    // Assert
    expect(resultado).toBe(5);
  });

  test("Deve retornar null ao dividir por zero", () => {
    // Arrange
    const a = 10;
    const b = 0;

    // Act
    const resultado = dividir(a, b);

    // Assert
    expect(resultado).toBe(null);
  });

  test("Números somar numeros decimais", () => {
    // Arrange
    const a = 0.1;
    const b = 0.2;

    //Act
    const resultado = somar(a, b);

    // Assert
    expect(resultado).toBe(0.3);
  });

  test("Número par deve retornar true", () => {
    //Arrange
    const a = 4;

    //Act
    const resultado = ehpar(a);

    //Assert
    expect(resultado).toBe(true);
  });

  test("Número ímpar deve retornar false", () => {
    //Arrange
    const a = 7;

    //Act
    const resultado = ehpar(a);

    //Assert
    expect(resultado).toBe(false);
  });

  test("Deve calcular a potência", () => {
    // Arrange
    const base = 2;
    const expoente = 3;

    // Act
    const resultado = potencia(base, expoente);

    // Assert
    expect(resultado).toBe(8);
  });

  test("Deve calcular a porcentagem", () => {
    // Arrange
    const valor = 200;
    const percentual = 10;

    // Act
    const resultado = porcentagem(valor, percentual);

    // Assert
    expect(resultado).toBe(20);
  });

  test("Deve calcular a média de três números", () => {
    // Arrange
    const a = 6;
    const b = 7;
    const c = 8;

    // Act
    const resultado = mediaDeTres(a, b, c);

    // Assert
    expect(resultado).toBe(7);
  });
});
