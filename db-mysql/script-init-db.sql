use nodeappdb;

create table people(id int auto_increment, uuid varchar(255), name varchar(255), created_at DATE, primary key(id));

--- desc people;

insert into people (uuid, name, created_at) values ( 'ada080f7-1512-47bc-a2a6-60296d8c4d17','John Doe',now());

---- select * from people;