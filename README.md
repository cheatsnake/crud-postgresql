# PostgreSQL CRUD app

Simple CRUD app for PosrgreSQL on Node.js. <br>
Created using pure [pg module](https://github.com/brianc/node-postgres)

## Usage 

1. Create a new database and configurate `.env` file
```
DB_USER=user
DB_PASSWORD=password
DB_HOST=localhost
DB_PORT=5432
DB_NAME=DatabaseName
```

2. Create tables using SQL scripts
```sql
CREATE TABLE person(
    id SERIAL PRIMARY KEY,
    name VARCHAR(64)
);
```
```sql
CREATE TABLE note(
    id SERIAL PRIMARY KEY,
    title VARCHAR(128),
    body VARCHAR(1024),
    person_id INTEGER,
    FOREIGN KEY (person_id) REFERENCES person (id)
);
```

3. Install packages, build app and launch server
```sh
npm install
```
```sh
npm run build
```
```sh
npm start
```
> By default servers is running on http://localhost:3000/
