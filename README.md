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

## Parte C — Relato de Bug

| Campo                                  | Sua resposta                                                                                                                                                      |
| -------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Caso que falhou**                    | CT-05 — `reprovadoPorFalta(40, 10)`                                                                                                                               |
| **Passos para reproduzir**             | Executar `npm test` com o código original e verificar o teste CT-05.                                                                                              |
| **Resultado esperado**                 | `false`, pois com 40 aulas e 10 faltas o aluno possui exatamente 75% de presença. Pela regra da escola, somente alunos com presença abaixo de 75% são reprovados. |
| **Resultado obtido (Received)**        | `true`                                                                                                                                                            |
| **Erro (o engano humano)**             | Foi utilizada a condição `<= 75`, que considera 75% como reprovação.                                                                                              |
| **Defeito (onde está no código)**      | Arquivo `src/frequencia.js`, na função `reprovadoPorFalta`, na condição `return presenca <= 75;`.                                                                 |
| **Falha (o que o usuário perceberia)** | Um aluno com exatamente 75% de presença seria reprovado por falta, mesmo estando dentro do limite permitido pela escola.                                          |
| **Correção proposta**                  | Alterar `return presenca <= 75;` para `return presenca < 75;`.                                                                                                    |

## Resultado testes calculadora

```text
> aula02@1.0.0 test
> jest

 PASS  src/calculadora.test.js
  Operações matemáticas
    √ Deve somar dois números positivos (1 ms)
    √ Deve somar dois números negativos (1 ms)
    √ Deve subtrair dois números
    √ Deve multiplicar dois números
    √ Deve dividir dois números
    √ Deve retornar null ao dividir por zero
    √ Números somar numeros decimais
    √ Número par deve retornar true
    √ Número ímpar deve retornar false (1 ms)
    √ Deve calcular a potência
    √ Deve calcular a porcentagem
    √ Deve calcular a média de três números (1 ms)

Test Suites: 1 passed, 1 total
Tests:       12 passed, 12 total
Snapshots:   0 total
Time:        0.798 s
Ran all test suites.
```

## Resultado testes boletim-escolar

```text
> boletim-escolar@1.0.0 test
> jest

PASS src/frequencia.test.js
Frequência Escolar
√ deve calcular 90% de presença quando houver 4 faltas em 40 aulas (4 ms)
√ deve calcular 100% de presença quando não houver faltas (1 ms)
√ deve considerar aprovado por falta quem tiver 90% de presença (1 ms)
√ deve reprovar por falta quem tiver 70% de presença
√ deve considerar aprovado por falta quem tiver exatamente 75% de presença (1 ms)

PASS src/boletim.test.js
Boletim Escolar
√ deve calcular a média de duas notas (1 ms)
√ deve considerar aprovado quem tem média 7 (1 ms)
√ deve considerar reprovado quem tem média 4.9 (1 ms)
√ deve retornar false quando a média é menor que 7
√ deve contar notas maiores ou iguais ao corte
√ deve retornar a maior nota (1 ms)
√ deve retornar true quando a média é suficiente para aprovação

Test Suites: 2 passed, 2 total
Tests: 12 passed, 12 total
Snapshots: 0 total
Time: 0.79 s, estimated 1 s
Ran all test suites.
```
