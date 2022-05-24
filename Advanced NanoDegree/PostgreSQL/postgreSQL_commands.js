/*
		in terminal 


Common psql commands
open psql: psql -U postgres
connect to a database: \c <database_name>
create a new database: create database <database_name>
get out of psql: \q


// meta commands and they dont need ; 
// \c ==> connect to db		 \q ==> quit psql   	\l ==> list all DBs  	\dt ==> display tables


return to the db after quitting: psql my_new_db          === psql postgres && \c name_of_database

*/

/*

CREATE TABLE [IF NOT EXISTS] <table_name> (
	id SERIAL PRIMARY KEY,    ===> special postgres type for uniques, auto incrementing 
	name VARCHAR(100),
	desctription text,
	id integer,
	sighting date, 
	region_id REFERENCES regions(id),
 column2_name column2_datatype
);


display tables: \dt

*/

/*
	-HL CRUD



-FIXME	CREATE:
	INSERT INTO <table_name> (columns) VALUES (v1, v2 ,.. )

-FIXME	READ:
SELECT * FROM <table_name> 

-FIXME	UPDATE:
UPDATE <table_name> SET <column_wanna_change> = <updated_value> WHERE id= .. 

-FIXME	DELETE:
	DELETE FROM <table_name> WHERE id=..



*/

/*
	-HL SQL filters

		WHERE 
		LIMIT 
		BETWEEN
		LIKE
		IS NULL
		IS NOT NULL


		SELECT * FROM plants LIMIT 5;

		SELECT name FROM plants WHERE sighting_date BETWEEN '2021-01-01' AND '2021-01-31';

		SELECT name,description FROM plants WHERE name LIKE '%lion%';

		SELECT name,id FROM plants WHERE sighting_date IS NULL;       <== this will return records where there's no sighting_date
*/

/*
	-HL COUNT 

	SELECT COUNT(*) FROM plants WHERE sighting_date BETWEEN '2021-01-04' AND '2021-01-10';
*/

/*
	-HL Relating Tables with Foreign Keys

	ALTER TABLE plants ADD FOREIGN KEY(region_id) REFERENCES region(id);

	


	EXAMPLE:___

	CREATE TABLE users ( id SERIAL PRIMARY KEY, name VARCHAR, email VARCHAR);


	CREATE TABLE animals ( id SERIAL PRIMARY KEY, region_id REFERENCES regions(id), user_id REFERENCES users(id), individuals integer, sighting_date date, description text);
*/
