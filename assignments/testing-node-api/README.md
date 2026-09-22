# 📘 Assignment: Testando uma API Node.js

## 🎯 Objetivo

Aprenda a criar testes automatizados para uma API Express usando o módulo nativo `node:test` e `node:assert`. Você irá verificar respostas HTTP, dados JSON, códigos de status e comportamentos de erro sem depender de ferramentas externas.

## 📝 Tarefas

### 🛠️ Executar e entender os testes existentes

#### Descrição

Instale as dependências e execute a suíte inicial com `npm test`. Leia os testes e a implementação para identificar o que já está sendo verificado e como cada teste organiza preparação, ação e verificação.

#### Requisitos

A suíte deve:

- Ser executada com o comando `npm test`.
- Usar `node:test` e `node:assert/strict`.
- Verificar que `GET /health` retorna o status `200` e o JSON `{ "status": "ok" }`.
- Fazer as requisições diretamente ao servidor em memória, sem iniciar uma porta HTTP real.

### 🛠️ Testar a criação de tarefas

#### Descrição

Adicione testes para o endpoint `POST /tasks`, cobrindo tanto o caminho de sucesso quanto uma entrada inválida.

#### Requisitos

Os testes concluídos devem:

- Enviar uma requisição `POST /tasks` com um título válido.
- Verificar o status `201` e as propriedades `title` e `completed` da tarefa criada.
- Verificar que uma tarefa sem `title` retorna o status `400`.
- Usar asserções que falhem quando o comportamento esperado for alterado.

### 🛠️ Cobrir atualização e remoção

#### Descrição

Complete a cobertura dos endpoints de atualização e remoção. Use uma tarefa criada durante o teste ou uma identificação conhecida, evitando depender da ordem em que outros testes foram executados.

#### Requisitos

A suíte deve:

- Verificar que `PATCH /tasks/:id` altera `completed` para `true`.
- Verificar que atualizar uma tarefa inexistente retorna `404`.
- Verificar que `DELETE /tasks/:id` retorna `204`.
- Verificar que tentar remover a mesma tarefa novamente retorna `404`.

### 🛠️ Melhorar a organização dos testes

#### Descrição

Revise os testes para que sejam independentes, legíveis e fáceis de manter. Organize casos relacionados em grupos e elimine dependências acidentais entre execuções.

#### Requisitos

O programa concluído deve:

- Usar `test()` e, quando fizer sentido, `describe()` para nomear claramente os cenários.
- Criar os dados necessários dentro de cada teste ou em uma preparação explícita.
- Conter pelo menos um caso de sucesso e um caso de erro para cada grupo de rotas testado.
- Passar completamente quando executado com `npm test`.

Exemplo de execução esperada:

```text
> npm test

... passing tests ...

# pass 7
# fail 0
```
