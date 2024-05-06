Create database plant_it_to_live_DB;
use plant_it_to_live_DB;

create table admins
(
	id int auto_increment primary key,
	name Varchar(150) not null,
	email varchar(250) not null ,
	password varchar(1000) not null,
	access_Key varchar(50) not null,
    created_at timestamp,
    updated_at timestamp
);
create table users
(
	id int auto_increment primary key,
	name Varchar(150) ,
	email varchar(250) ,
	password varchar(1000) ,
	phone varchar(20),
    b_date timestamp ,
    gender  BIT,
    picture varchar(300),
    google_id varchar(150),
    activated bool default false,
	created_at timestamp,
    updated_at timestamp
);
alter table users add column activated bool default false;
#drop table users;
use plant_it_to_live_DB;
#alter table users add column password_reset_token varchar(500);
select *from users;
select *from password_reset_tokens;
create table googlesessions(
 google_id varchar(150),
token varchar(150),
created_at timestamp
);
select * from googlesessions
drop table googlesessions
ALTER TABLE users AUTO_INCREMENT = 1;
