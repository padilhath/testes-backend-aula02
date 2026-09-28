# Nomes: Tiago Padilha, Vinicius Genaro

## Parte B — Plano de testes

| Caso  | Função            | Entrada             | Esperado    | Obtido      |
| ----- | ----------------- | ------------------- | ----------- | ----------- |
| CT-01 | calcularMedia     | [5, 6]              | 5.5         | 5.5         |
| CT-02 | situacao          | 7                   | "Aprovado"  | "Aprovado"  |
| CT-03 | situacao          | 4.9                 | "Reprovado" | "Reprovado" |
| CT-04 | estaAprovado      | 6                   | false       | false       |
| CT-05 | quantidadeAcimaDe | [4, 7, 8.5, 6.9], 7 | 2           | 2           |
| CT-06 | maiorNota         | [6, 9.5, 8]         | 9.5         | 9.5         |
| CT-07 | estaAprovado      | 8                   | true        | true        |
