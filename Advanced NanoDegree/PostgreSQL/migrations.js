/*
Migration - The record of a database schema change that also includes the logic to enact and rollback that change.



Install the global package 							npm install -g db-migrate
Install the package to the project 					yarn add db-migrate db-migrate-pg

*/

/*
db-migrate create books-table --sql-file

generates folder, files within for the corresponding table
*/

/*
create migration up
CREATE TABLE book(id SERIAL PRIMARY KEY,title text, auther varchar(255), total_pages integer, type varchar(10), summary varchar(30));


create migration down
DROP TABLE book;

*/

/*
Running `db-migrate up` in the terminal should create the table books.
*/
