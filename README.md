# Projeto em Back End em NodeJs com banco de dados MongoDB
💻 Projeto
Desafio deste projeto que se resume em uma aplicação de uma webagenda, onde o usuario tem como a finalidade inserir dados como:
```
  - Nome
  - Sobrenome
  - Data de Nascimento
  - Email
  - Endereço
  - Telefone
 ```

Todo Projeto em Back End Foi criado com o Node, onde foram feitas algumas Rotas para Usuarios e Contatos:
```
  - Rota 1 - Retorna Lista de Usuarios
  - Rota 2 - Retorna Lista de Contatos
  - Rota 3 - Cria uma rota de sessão exclusiva para autenticação
 ```
 
# Começando...

Par Inicio do projeto, foram instalada as seguintes Dependencias:
```
  - npm install CORS
  - npm install bcryptjs
  - npm install dotenv
  - npm install express
  - npm install jsonwebtoken
  - npm install mongoose
  - npm install nodemon
  - npm install sucrase
 ```
 
## Iniciando o projeto

### Execute o projeto com:
```
	npm run dev
	# ou
	yarn dev
```

Para rodar a API em rede Abra http://localhost:5000 em seu browser para ver o resultado.
Esta é a rota inicial backende, para acessar as demais rotas basta ultilizar os seguintes caminhos.

```
   - Necessario o auxilio do Insomnia par abrir a API, sera nescessario logar com o usuario para que as demais rotas sejam liberadas.
   -As rotas jas estao com criptografias onde foi ultilizado a dependencia do "bcryptjs" para realizar este procedimento, a senha 
tambem esta sendo convertida em token via JWT (jsonwebtoken).

   - Com o insominia aberto, sera necessario criar uma request do tipo POST para que seja gerado o token.
   - Para iniciar a sessão necessario colocar o seguinte endeteço: "http://localhost:5000/sessions" em seguida informar como na imagem o email e o password.
   - Email: "email": "web@teste.com",
   - Senha: "password": "123456"
```

  <img src="https://uploaddeimagens.com.br/images/003/909/982/full/01.png?1655803540">
  
  ```
   - Em seguida sera gerado o TOKEN do usuario, este token devera ser inserido na Bearer, para que seja possivel o usuario manipular as rotas.
  ```
  
  <img src="https://uploaddeimagens.com.br/images/003/909/983/full/02.png?1655803557">
 
 ```
   - Ao inserir o Tokent o usuario poderar navegar pelas seguintes rotaas:
   - http://localhost:5000/sessions
   - http://localhost:5000/users - Retorna o usuario
   - http://localhost:5000/users/ID_DO_USUSARIO/contatos - Onde seja mostrado a lista de contatos deste usuario.
```

  O Projeto foi entregue rodaando na plataforma do Heorku (https://www.heroku.com/) 

   - Link da API: https://web-agenda.herokuapp.com/ 
	

```
   - Este projeto pode rodar em rede local com auxilio do nodemon e sucrase 
   - Para funcionamento do node no Heroku utilizei a denpencia DOTENV para criar variaveis de ambientes, por questão de segurança não e boas praticas não é recomendavel passar a informação de conexão com o banco de dados MongoDb. 
   - Para rodar no Heroku, inserir na plataforma as variaveis de ambientes necessarias para conxeão junto ao banco de dados, que se encontra na plataforma do MongoDb. 
```
	
<img src="https://uploaddeimagens.com.br/images/003/909/984/full/03.png?1655804591"> 

```
   - Projeto rodando em ambiente de desenvolvimento.
```	


<img src="https://uploaddeimagens.com.br/images/003/909/985/full/04.png?1655804859"> 
	
```
   - Link do projeto Front End rodando no netlify: https://webagenda.netlify.app/ 
   - Observação o projeto em Front End encontra-se neste repositorio: https://github.com/ffernandescs/frontend-web-agenda-
````






