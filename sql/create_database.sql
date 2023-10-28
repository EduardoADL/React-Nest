CREATE DATABASE db_users;

CREATE TABLE  IF  NOT  EXISTS usuarios (
  id serial PRIMARY KEY,
  nome VARCHAR(100)  NOT NULL,
  email VARCHAR(70)  NOT NULL,
  senha VARCHAR(255)   NOT NULL,
  created_at timestamp without time zone  NOT NULL  DEFAULT  now(),
  updated_at timestamp without time zone  NOT NULL  DEFAULT  now(),
  deleted_at timestamp without time zone
);