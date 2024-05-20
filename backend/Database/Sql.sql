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
create table plants(
id int auto_increment primary key,
common_name varchar(250),
scientific_name varchar(250),
watering text,
fertilizer text,
sunlight text,
pruning text ,
img varchar(500),
water_amount varchar(500),
fertilizer_amount varchar(500),
sun_per_day varchar(500),
soil_salinty varchar(500),
appropriate_season varchar(150),
admin_id int not null,
foreign key (admin_id)
references admins(id)
);
create table user_plant
(
id int primary key,
user_id int not null,
plant_id int  not null,
foreign key (user_id)
references users(id),
foreign key (plant_id)
references plants(id)
);
create table Suggested_plants(
id int auto_increment primary key,
common_name varchar(250),
scientific_name varchar(250),
watering text,
fertilizer text,
sunlight text,
pruning text ,
img varchar(500),
water_amount varchar(500),
fertilizer_amount varchar(500),
sun_per_day varchar(500),
soil_salinty varchar(500),
appropriate_season varchar(150),
admin_id int ,
user_id int not null,
foreign key (admin_id)
references admins(id),
foreign key (user_id)
references users(id)
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
select * from admins ;
select * from users;
drop table googlesessions
ALTER TABLE users AUTO_INCREMENT = 1;
