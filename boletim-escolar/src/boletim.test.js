import {
  calcularMedia,
  situacao,
  estaAprovado,
  maiorNota,
  quantidadeAcimaDe,
} from "./boletim";

describe("Boletim Escolar", () => {
  test("deve calcular a média de duas notas", () => {
    // Arrange
    const notas = [5, 6];
    const esperado = 5.5;

    // Act
    const resultado = calcularMedia(notas);

    // Assert
    expect(resultado).toBe(esperado);
  });

  test("deve considerar aprovado quem tem média 7", () => {
    // Arrange
    const media = 7;
    const esperado = "Aprovado";

    // Act
    const resultado = situacao(media);

    // Assert
    expect(resultado).toBe(esperado);
  });

  test("deve considerar reprovado quem tem média 4.9", () => {
    // Arrange
    const media = 4.9;
    const esperado = "Reprovado";

    // Act
    const resultado = situacao(media);

    // Assert
    expect(resultado).toBe(esperado);
  });

  test("deve retornar false quando a média é menor que 7", () => {
    // Arrange
    const media = 6;
    const esperado = false;

    // Act
    const resultado = estaAprovado(media);

    // Assert
    expect(resultado).toBe(esperado);
  });

  test("deve contar notas maiores ou iguais ao corte", () => {
    // Arrange
    const notas = [4, 7, 8.5, 6.9];
    const corte = 7;
    const esperado = 2;

    // Act
    const resultado = quantidadeAcimaDe(notas, corte);

    // Assert
    expect(resultado).toBe(esperado);
  });

  test("deve retornar a maior nota", () => {
    // Arrange
    const notas = [6, 9.5, 8];
    const esperado = 9.5;

    // Act
    const resultado = maiorNota(notas);

    // Assert
    expect(resultado).toBe(esperado);
  });

  test("deve retornar true quando a média é suficiente para aprovação", () => {
    // Arrange
    const media = 8;
    const esperado = true;

    // Act
    const resultado = estaAprovado(media);

    // Assert
    expect(resultado).toBe(esperado);
  });
});
