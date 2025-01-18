# API PetShop 🐶🐱

Esta é uma API desenvolvida para gerenciar informações de pet shops e pets. Com ela, é possível realizar operações básicas de CRUD em pets e cadastrar pet shops. A API foi desenvolvida utilizando **TypeScript**, **Node.js** e **Express**.

---

## Recursos Disponíveis

### 🏦 PetShop
- **GET**: Recuperar informações sobre os pets do petshop.
- **POST**: Adicionar um novo pet shop.

### 🐕 Pets
- **GET**: Recuperar informações sobre um pet.
- **POST**: Adicionar um novo pet.
- **PATCH**: Atualizar informações parciais de um pet.
- **PUT**: Substituir completamente as informações de um pet.
- **DELETE**: Remover um pet.

---

## Tecnologias Utilizadas

- **TypeScript**
- **Node.js**
- **Express**

---

## Como Usar

### Pré-requisitos
- Node.js instalado na sua máquina.

### Passos para rodar o projeto
1. Clone este repositório:
   ```bash
   git clone https://github.com/seu-usuario/api-petshop.git
   ```
2. Acesse o diretório do projeto:
   ```bash
   cd api-petshop
   ```
3. Instale as dependências:
   ```bash
   npm install
   ```
4. Inicie o servidor:
   ```bash
   npm start
   ```

A aplicação estará disponível em: `http://localhost:5000`.

---

## Estrutura de Rotas

### Rotas de PetShop
- **GET** `/petshop`: Lista todos os pet shops.
- **POST** `/petshop`: Adiciona um novo pet shop.

### Rotas de Pets
- **GET** `/pets`: Lista todos os pets.
- **POST** `/pets`: Adiciona um novo pet.
- **PATCH** `/pets/:id`: Atualiza parcialmente um pet (ex.: alterar apenas o nome).
- **PUT** `/pets/:id`: Substitui as informações de um pet por completo.
- **DELETE** `/pets/:id`: Remove um pet.

---