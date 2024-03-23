Create database plant_it_to_live_DB;
use plant_it_to_live_DB;

create table admins
(
	id int auto_increment primary key,
	Name Varchar(150) not null,
	Email varchar(250) not null ,
	Password varchar(1000) not null,
	Access_Key varchar(50) not null,
    created_at timestamp,
    updated_at timestamp
);
create table users
(
	id int auto_increment primary key,
	Name Varchar(150) not null,
	Email varchar(250) not null ,
	Password varchar(1000) not null,
	Phone varchar(20),
    B_Date timestamp ,
    Gender  BIT,
    picture varchar(300),
	created_at timestamp,
    updated_at timestamp
);
drop table users
select *from users
