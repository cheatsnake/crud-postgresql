CREATE TABLE person(
    id SERIAL PRIMARY KEY,
    name VARCHAR(64)
);

CREATE TABLE note(
    id SERIAL PRIMARY KEY,
    title VARCHAR(128),
    body VARCHAR(1024),
    person_id INTEGER,
    FOREIGN KEY (person_id) REFERENCES person (id)
);