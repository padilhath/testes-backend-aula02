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
