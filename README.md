# Aplicação React & Nest

Este repositório contém uma aplicação web que utiliza as tecnologias React e Nest. O foco principal deste projeto é fazer o deployment utilizando docker.

## Aplicação React

A aplicação React é uma interface de usuário que permite a criação e edição de usuários. Ela fornece uma experiência amigável e responsiva para gerenciar informações de usuários.

## Aplicação Nest

A aplicação Nest é uma API que disponibiliza endpoints para manipular dados de usuários. Ela é a parte do servidor que permite a criação, leitura, atualização e exclusão de registros de usuário.

## Como Usar

### Aplicação Nest

1. Certifique-se de ter o Nest CLI instalado. Caso contrário, você pode instalá-lo globalmente com o seguinte comando:

   ```bash
   npm install -g @nestjs/cli
   ```

2. Navegue até o diretório `backend/`:

   ```bash
   cd backend
   ```

3. Instale as dependências do projeto:

   ```bash
   npm install
   ```

4. Inicie a aplicação Nest:

   ```bash
   npm run start
   ```

A aplicação Nest estará disponível em `http://localhost:3000`.

### Aplicação React

1. Navegue até o diretório `frontend/`:

   ```bash
   cd frontend
   ```

2. Instale as dependências do projeto:

   ```bash
   yarn install
   ```

3. Inicie a aplicação React:

   ```bash
   yarn dev
   ```

A aplicação React estará disponível em `http://localhost:5173`.

Certifique-se de que as duas aplicações estejam em execução simultaneamente para aproveitar ao máximo a funcionalidade completa desta aplicação.


## Estrutura do Projeto

A estrutura do projeto é a seguinte:

- `frontend/`: Contém o código-fonte da aplicação React.
- `backend/`: Contém o código-fonte da aplicação Nest.

## Contribuições

Contribuições são bem-vindas! Sinta-se à vontade para criar problemas, solicitações de pull ou propor melhorias para as aplicações React e Nest.

## Licença

Este projeto está licenciado sob a [Licença MIT](LICENSE).

---

Você pode adaptar esse texto conforme necessário, incluindo detalhes adicionais sobre as aplicações React e Nest, como funcionalidades específicas, fluxo de trabalho e assim por diante.
