/*CREATE DATABASE chat;*/

USE chat;

CREATE TABLE messages (
  name varchar(20),
  roomname varchar(20),
  text varchar(140)
);

CREATE TABLE users (
  name varchar(20)
);

/* Create other tables and define schemas for them here! */




/*  Execute this file from the command line by typing:
 *    mysql -u root < server/schema.sql
 *  to create the database and the tables.*/

/*table for messages
    text, username, roomname
  table for users
    name, friends

*/

INSERT into messages
  (name, roomname, text)
  values ('devon', 'hackreactor', 'hello world');
