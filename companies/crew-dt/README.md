# crew-be
## Installation
```sh
cd crew
cp .env_example .env 
```
please enter your API_TOKEN and DB_URL in .env file

```sh
npm i
npm start
```

## Docker
```sh
cd setup
docker-compose up -d
```

## Tools

I decided to use an express+apollo server (https://www.apollographql.com/docs/apollo-server/api/express-middleware) because of the ease of implementing it and using extra express middlewares like helmet

axios as http client

mongodb as database

## Usage
I have attached a posttman collection in `setup/crew.postman_collection.json`

- import league
- find one league
- find many leagues
- find one team
- find many teams
- find one player
- find many players
- find one coach
- find many coaches
- find many players by league code