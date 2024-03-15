E-commerce REST API

Este é um projeto de uma API REST para um sistema de e-commerce. Ele fornece endpoints para gerenciar produtos, usuários e pedidos.

## Endpoints

- **POST /api/auth/register**: Registra um novo usuário.
- **POST /api/auth/login**: Autentica um usuário e retorna um token de acesso.
- **GET /api/products**: Retorna todos os produtos disponíveis.
- **GET /api/products/:id**: Retorna um produto específico pelo ID.
- **POST /api/products**: Adiciona um novo produto.
- **PUT /api/products/:id**: Atualiza um produto existente.
- **DELETE /api/products/:id**: Remove um produto existente.
- **GET /api/orders**: Retorna todos os pedidos.
- **GET /api/orders/:id**: Retorna um pedido específico pelo ID.
- **POST /api/orders**: Cria um novo pedido.
- **PUT /api/orders/:id**: Atualiza um pedido existente.
- **DELETE /api/orders/:id**: Remove um pedido existente.


Certifique-se de incluir o token de acesso nos cabeçalhos das solicitações que exigem autenticação, no formato:
Authorization: Bearer <token>

Dependências
bcrypt: ^5.1.0
body-parser: ^1.20.2
express: ^4.18.2
jsonwebtoken: ^9.0.0
morgan: ^1.10.0
multer: ^1.4.5-lts.1
mysql: ^2.18.1

bcrypt: ^5.1.0
Descrição: bcrypt é uma biblioteca para hashing de senhas. Ela é usada para criptografar senhas antes de armazená-las em um banco de dados, aumentando a segurança.
Versão: ^5.1.0 indica que qualquer versão acima de 5.1.0 pode ser instalada, desde que não seja uma versão 6.0.0 ou superior, que pode introduzir mudanças incompatíveis.

body-parser: ^1.20.2
Descrição: body-parser é um middleware para o Express.js que analisa o corpo das solicitações HTTP e facilita o acesso aos dados enviados pelo cliente, como formulários ou JSON.
Versão: ^1.20.2 indica que qualquer versão acima de 1.20.2 pode ser instalada, desde que não seja uma versão 2.0.0 ou superior, que pode introduzir mudanças incompatíveis.

express: ^4.18.2
Descrição: express é um framework web para Node.js. Ele simplifica o processo de criação de aplicativos web e APIs, fornecendo uma variedade de recursos úteis, como roteamento, middleware e manipulação de solicitações e respostas HTTP.
Versão: ^4.18.2 indica que qualquer versão acima de 4.18.2 pode ser instalada, desde que não seja uma versão 5.0.0 ou superior, que pode introduzir mudanças incompatíveis.

jsonwebtoken: ^9.0.0
Descrição: jsonwebtoken é uma biblioteca para gerar e verificar tokens de autenticação JSON Web Token (JWT). Ele é comumente usado em sistemas de autenticação baseados em tokens para verificar a identidade do usuário em solicitações HTTP.
Versão: ^9.0.0 indica que qualquer versão acima de 9.0.0 pode ser instalada, desde que não seja uma versão 10.0.0 ou superior, que pode introduzir mudanças incompatíveis.

morgan: ^1.10.0
Descrição: morgan é um middleware de logger para o Express.js. Ele registra detalhes das solicitações HTTP, como o método, o caminho, o código de status e o tempo de resposta, facilitando o monitoramento e a depuração do aplicativo.
Versão: ^1.10.0 indica que qualquer versão acima de 1.10.0 pode ser instalada, desde que não seja uma versão 2.0.0 ou superior, que pode introduzir mudanças incompatíveis.

multer: ^1.4.5-lts.1
Descrição: multer é um middleware para o Express.js que facilita o upload de arquivos. Ele é usado para lidar com formulários de upload de arquivos, permitindo que os arquivos sejam recebidos do cliente e salvos no servidor.
Versão: ^1.4.5-lts.1 indica que qualquer versão acima de 1.4.5-lts.1 pode ser instalada, desde que não seja uma versão 2.0.0 ou superior, que pode introduzir mudanças incompatíveis.

mysql: ^2.18.1
Descrição: mysql é um driver para Node.js que permite conectar e interagir com bancos de dados MySQL. Ele fornece uma interface para executar consultas SQL e manipular dados no banco de dados.
Versão: ^2.18.1 indica que qualquer versão acima de 2.18.1 pode ser instalada, desde que não seja uma versão 3.0.0 ou superior, que pode introduzir mudanças incompatíveis.

Autor
Isaell

Licença
Este projeto é licenciado sob a Licença ISC.
