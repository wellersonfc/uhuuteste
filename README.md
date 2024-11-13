# API Project

## Requisitos
- Node.js
- Docker

## Instalação

1. Clone o repositório.
2. Renomeie o arquivo `.env.example` para `.env` e ajuste as variáveis de ambiente.

## Rodando o Projeto Localmente

1. Execute o comando `docker-compose up --build` para iniciar o backend e o MySQL.

## Documentação da API
A documentação da API está disponível em [http://localhost:3000/docs](http://localhost:3000/docs).

## Justificativa das Escolhas
- **Express**: Simplicidade e popularidade para APIs REST.
- **TypeORM**: ORM robusto com TypeScript para integrar com MySQL.
- **Swagger**: Documentação clara para APIs REST.
- **Docker**: Facilita a execução e a configuração do ambiente.

## Comandos Úteis

- `npm run build`: Compila o TypeScript.
- `npm start`: Inicia o servidor (para desenvolvimento local fora do Docker).
