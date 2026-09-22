# 📘 Assignment: Task Tracker API

## 🎯 Objective

Construa uma API REST com Node.js e Express para cadastrar e acompanhar tarefas. Ao concluir a atividade, você deverá saber criar rotas, trabalhar com JSON, validar dados recebidos e escolher códigos de status HTTP adequados.

## 📝 Tasks

### 🛠️ Criar o servidor Express

#### Descrição

Configure o projeto e crie um servidor Express que responda a uma rota de verificação. Use o arquivo inicial como ponto de partida e instale as dependências com `npm install`.

#### Requisitos

O programa concluído deve:

- Iniciar um servidor Express na porta `3000` ou em uma porta definida pela variável de ambiente `PORT`.
- Responder `GET /health` com o status `200` e um JSON semelhante a `{ "status": "ok" }`.
- Usar `express.json()` para interpretar requisições com corpo JSON.

### 🛠️ Listar e criar tarefas

#### Descrição

Adicione armazenamento em memória para tarefas e implemente as rotas que permitem consultar a lista e cadastrar uma nova tarefa.

#### Requisitos

O programa concluído deve:

- Responder `GET /tasks` com todas as tarefas em um array JSON.
- Responder `POST /tasks` aceitando um objeto com a propriedade `title`.
- Criar um identificador numérico único e definir `completed` como `false` para novas tarefas.
- Retornar a tarefa criada com o status `201`.
- Retornar o status `400` e uma mensagem de erro quando `title` estiver ausente ou vazio.

Exemplo de requisição:

```json
{
  "title": "Estudar rotas do Express"
}
```

Exemplo de resposta:

```json
{
  "id": 1,
  "title": "Estudar rotas do Express",
  "completed": false
}
```

### 🛠️ Atualizar o status de uma tarefa

#### Descrição

Implemente uma rota para marcar uma tarefa como concluída ou pendente. O valor deve ser enviado no corpo da requisição.

#### Requisitos

O programa concluído deve:

- Responder `PATCH /tasks/:id` usando o identificador da URL.
- Aceitar um corpo no formato `{ "completed": true }` ou `{ "completed": false }`.
- Retornar a tarefa atualizada com o status `200`.
- Retornar o status `400` quando `completed` não for um booleano.
- Retornar o status `404` quando a tarefa não existir.

### 🛠️ Remover tarefas e tratar erros

#### Descrição

Complete a API implementando a remoção de tarefas e um middleware simples para tratar rotas inexistentes.

#### Requisitos

O programa concluído deve:

- Responder `DELETE /tasks/:id` removendo a tarefa indicada.
- Retornar o status `204` quando a remoção for concluída, sem enviar conteúdo no corpo.
- Retornar o status `404` quando a tarefa não existir.
- Retornar o status `404` e um JSON com uma mensagem de erro para rotas não implementadas.
- Manter os dados apenas em memória; não é necessário usar banco de dados.

Para testar a API, use o navegador para `GET /health` e `GET /tasks`, ou uma ferramenta como `curl`, Insomnia ou Postman para os demais métodos.
