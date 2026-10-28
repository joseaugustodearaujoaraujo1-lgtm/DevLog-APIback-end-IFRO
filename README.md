# 🗂️ DevLog API (IFRO)

> API REST de projetos com **CRUD completo em Node.js e Express**, usando um **array em memória** como banco de dados. Exercício de back-end do curso técnico no IFRO.

![Node.js](https://img.shields.io/badge/Node.js-339933?style=flat-square&logo=nodedotjs&logoColor=white)
![Express](https://img.shields.io/badge/Express-000000?style=flat-square&logo=express&logoColor=white)

## O que demonstra

CRUD sem banco, só com métodos de array: `.find()`, `.findIndex()` e `.splice()`, com códigos HTTP coerentes (`201`, `404`, `500`) e validação de campos.

## Rotas (porta 3001)

| Método | Rota | Função |
|---|---|---|
| `POST` | `/api/v1/projects` | cria projeto (`nome`, `descricao`) |
| `GET` | `/api/v1/projects` | lista todos |
| `GET` | `/api/v1/projects/:id` | busca por id |
| `PATCH` | `/api/v1/projects/:id` | atualiza campos |
| `DELETE` | `/api/v1/projects/:id` | remove |

## Como rodar

```bash
git clone https://github.com/joseaugustodearaujoaraujo1-lgtm/DevLog-APIback-end-IFRO.git
cd DevLog-APIback-end-IFRO
npm install
node server.js
```

```bash
curl -X POST http://localhost:3001/api/v1/projects \
  -H "Content-Type: application/json" \
  -d '{"nome":"Meu projeto","descricao":"Primeiro registro"}'
```

## Observação

Os dados **somem ao reiniciar**: é proposital, para praticar a lógica do CRUD antes de usar um banco real (próximos passos em [Crud1-noSql](https://github.com/joseaugustodearaujoaraujo1-lgtm/Crud1-noSql) e [Autenticacao-JWT-backend-SQL](https://github.com/joseaugustodearaujoaraujo1-lgtm/Autenticacao-JWT-backend-SQL)).
