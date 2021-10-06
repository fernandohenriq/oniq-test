# OniQ Test

### Avaliação
Primeiramente muito obrigado por fazer este teste, ele é necessário para avaliar as boas práticas de desenvolvimento e modelagem em problemas simples.

Iremos avaliar a qualidade da entrega, design do código também os parâmetros abaixo.

### Importante
- Arquitetura/Design interno da aplicação
- Clareza e organização do código
- Interface gráfica bem elaborada
- Estrutura e organização do CSS
- Componentes HTML
- Testes (Opcional)
- Utilizar webpack para minificar e agrupar os arquivos css e js (opcional)

Caso se sinta limitado(a) pelo tamanho do projeto, fique a vontade para extender um pouco os requisitos.
Adicione um arquivo README.txt com os procedimentos para executar os testes e a aplicação.
￼Pedimos que trabalhe sozinho e não divulgue o resultado na internet.
O resultado pode ser entregue via repositório do Gitlab com a sua conta ou pelo Github, de forma privada.

Boa sorte!

----------------------

## Desafio

A empresa de telefonia OniQ, especializada em chamadas de longa distância nacional, vai colocar um novo produto no mercado chamado FaleMais.

Normalmente um cliente OniQ pode fazer uma chamada de uma cidade para outra pagando uma tarifa fixa por minuto, com o preço sendo prédefinido em uma lista com os códigos DDDs de origem e destino:

| Origem  | Destino  | $/min  |
| :-----: | :------: | :----: |
| 011 | 016 | 1.90 |
| 016 | 011 | 2.90 | 
| 011 | 017 | 1.70 | 
| 017 | 011 | 2.70 | 
| 011 | 018 | 0.90 | 
| 018 | 011 | 1.90 | 

Com o novo produto FaleMais da OniQ o cliente adquire um plano e pode falar de graça até um determinado tempo (em minutos) e só paga os minutos excedentes. Os minutos excedentes tem um acrescimo de 10% sobre a tarifa normal do minuto. Os planos são FaleMais 30 (30 minutos), FaleMais 60 (60 minutos) e FaleMais 120 (120 minutos).

A OniQ, preocupada com a transparência junto aos seus clientes, quer disponibilizar uma página na web onde o cliente pode calcular o valor da ligação. Ali, o cliente pode escolher os códigos das cidades de origem e destino, o tempo da ligação em minutos e escolher qual o plano FaleMais. O sistema deve mostrar dois valores: (1) o valor da ligação com o plano e (2) sem o plano. O custo inicial de aquisição do plano deve ser desconsiderado para este
￼problema.

#### Exemplo de Valores: ####

| Origem  | Destino  | Tempo  | Plano FaleMais | Com FaleMais | Sem FaleMais |
| ----- | ------ | ---- | ---- | :----: | :----: |
| 011 | 016 | 20 | FaleMais 30 | `$ 0,00` | `$ 38,00` |
| 011 | 017 | 80 | FaleMais 60 | `$ 37,40` | `$ 136,00` | 
| 018 | 011 | 200 | FaleMais 120 | `$ 167,20` | `$ 380,00` | 
| 018 | 017 | 100 | FaleMais 30 | `-` | `-` | 

Por fim, a OniQ quer saber quais informações os clientes estão calculando. Para isso deve se implementar um log de todos os cálculos realizados no site e uma tela para listar esses cálculos contedo todas as informações mais a data que foi realizado o cálculo. *Sugestão: Utilizar o firebase para armazenamento das informações.*

#### Exemplo do Histórico: ####

| Data/Hora | Origem  | Destino  | Tempo  | Plano FaleMais | Com FaleMais | Sem FaleMais |
| --------- | ----- | ------ | ---- | ---- | :----: | :----: |
| 10/07/2018 11:35:29 | 011 | 016 | 20 | FaleMais 30 | $ 0,00 | $ 38,00 |
| 10/07/2018 13:50:10 | 011 | 017 | 80 | FaleMais 60 | $ 37,40 | $ 136,00 | 
| 11/07/2018 15:01:35 | 018 | 011 | 200 | FaleMais 120 | $ 167,20 | $ 380,00 | 
| 11/07/2018 16:48:12 | 018 | 017 | 100 | FaleMais 30 | - | - | 
