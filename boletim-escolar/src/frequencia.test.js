import { percentualPresenca, reprovadoPorFalta } from "./frequencia";

describe("Frequência Escolar", () => {
  test("deve calcular 90% de presença quando houver 4 faltas em 40 aulas", () => {
    // Arrange
    const aulasDadas = 40;
    const faltas = 4;

    // Act
    const resultado = percentualPresenca(aulasDadas, faltas);

    // Assert
    expect(resultado).toBe(90);
  });

  test("deve calcular 100% de presença quando não houver faltas", () => {
    // Arrange
    const aulasDadas = 40;
    const faltas = 0;

    // Act
    const resultado = percentualPresenca(aulasDadas, faltas);

    // Assert
    expect(resultado).toBe(100);
  });

  test("deve considerar aprovado por falta quem tiver 90% de presença", () => {
    // Arrange
    const aulasDadas = 40;
    const faltas = 4;

    // Act
    const resultado = reprovadoPorFalta(aulasDadas, faltas);

    // Assert
    expect(resultado).toBe(false);
  });

  test("deve reprovar por falta quem tiver 70% de presença", () => {
    // Arrange
    const aulasDadas = 40;
    const faltas = 12;

    // Act
    const resultado = reprovadoPorFalta(aulasDadas, faltas);

    // Assert
    expect(resultado).toBe(true);
  });

  test("deve considerar aprovado por falta quem tiver exatamente 75% de presença", () => {
    // Arrange
    const aulasDadas = 40;
    const faltas = 10;

    // Act
    const resultado = reprovadoPorFalta(aulasDadas, faltas);

    // Assert
    expect(resultado).toBe(false);
  });
});
