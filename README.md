# Nome do Projeto
Registrar-despesas

## Descrição

Este é um projeto para criar uma conta e registrar suas depesas em Node.js.

## Instalação

1. Clone este repositório: `git clone git@github.com:Jhohan-P/Registrar-despesas.git`
2. Entre no diretório do projeto: `cd Registrar-despesas`
3. Instale as dependências: `npm install`
4. Execute o projeto: `nodemon ./src/index.js`

## Como Usar

Para usar a API, basta enviar solicitações HTTP para os endpoints disponíveis.

### Endpoints

Aqui estão os endpoints disponíveis na API:

- `GET /usuario`: Retorna os dados da conta cadastrada.
- `POST /usuario`:  Cria uma nova conta com base nos dados fornecidos no corpo da solicitação.
- `POST /login`:  faz login com os dados fornecidos no corpo da solicitação.
- `PUT /usuario`: Atualiza as informações do usuário de acordo com a conta que esta logada.
- `GET /categoria`: Retorna as categorias cadastrada no banco de dados.
- `GET /extrato`: Retorna os valores de entrada e saida.
- `GET /transacao`: Retorna todas as transacoes cadastrada na conta que esta logada.
- `GET /transacao?filtro[]=categoria quer voce quer procurar `: Retorna todas as transacoes cadastrada na conta que esta logada de acordo com o filtro.
- `POST /transacao`:  Cria uma nova transacao com base nos dados fornecidos no corpo da solicitação.
- `PUT /transacao/:id`:Atualiza a transacao com base no id informado.
- `DELETE /transacao/:id`: Remove uma transacao especificado com id.

Para usar a API, envie solicitações HTTP para esses endpoints usando um cliente HTTP, como o [Postman](https://www.postman.com/) ou o [cURL](https://curl.se/).

## Contribuindo

Aceitamos contribuições para este projeto! Para contribuir, siga estas etapas:

1. Fork este repositório
2. Crie uma branch com a sua feature: `git checkout -b minha-feature`
3. Faça commit das suas alterações: `git commit -m 'Minha nova feature'`
4. Faça push para a branch: `git push origin minha-feature`
5. Abra um Pull Request


## Contato

Se você tiver alguma dúvida ou sugestão sobre este projeto, sinta-se à vontade para entrar em contato comigo através do meu perfil no GitHub: [@Jhohan-P](https://github.com/Jhohan-P).
