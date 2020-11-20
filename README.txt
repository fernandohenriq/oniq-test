# oniq-falemais
## Descrição
Uma calculadora que simula em tempo real o valor da ligação levando em consideração:
- Plano
- DDD de origem
- DDD de destino
- Minutos utilizados

Esta ferramenta tem o intuito de prover um relacionamento mais transparente com o cliente.

## Features
###### Cálculo automático
Ao mudar um valor do formulário, os campos são calculados e é renderizado um novo resultado do cálculo.

###### Geração de logs
Após realizar uma simulação de ligação é gerado um log com as informações da simulação e enviado para base de dados.

###### Autenticação
Para acessar rotas privadas o usuário deve ter realizado login com e-mail e senha.

###### Visualização dos logs
Para visualização dos logs o usuário deve estar autenticado. Os dados serão exibidos em tempo real, a cada simulação feita a tabela será preenchida automaticamente.

## Instalação
```
npm install
```
ou

```
yarn install
```
## Como usar
###### Calculadora
Acessando a rota ```/``` qualquer usuário poderá realizar uma simulação com a calculadora.

Ao selecionar um plano, é definido o valor máximo de minutos onde não será cobrado taxas. Excedendo este tempo, será calculado um valor por minuto predefinido dependendo do código de DDD de origem e destino.

###### Login
Acessando a rota ```/login``` é possível se autenticar através de um e-mail e senha através do Firebase Authentication.
Usuário teste: email@email.com / 123456

###### Admin/Logs
Em ```/admin``` é necessário que o usuário esteja autenticado. Na tabela de logs os dados serão exibidos em tempo real diretamente do Realtime Database Firebase a cada noma simulação.
