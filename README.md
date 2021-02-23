<p align="center">
  App backend escrito em nestjs para encurtar url's.
</p>

## Descrição

[API](https://documenter.getpostman.com/view/5671604/TWDZJc4tt)

## Instalação

1. Execute o comando do npm na pasta do projeto:
```bash
$ npm install
```
2. Execute o comando do docker na pasta do projeto, esse comando subirá um container docker os dados de acesso estão no arquivo docker-compose.yml
```bash
$ docker-compose up -d
```
3. Altere o nome do arquivo .env.example para .env que se encontra na raiz do projeto, após renomear o arquivo incluir as credenciais do seu banco de dados.

## Rodando o arquivo
$ npm run start:dev