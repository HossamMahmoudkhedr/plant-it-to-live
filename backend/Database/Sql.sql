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
id int  primary key,
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
admin_id int,
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
select * from plants;
select * from admins ;
select * from users;
drop table googlesessions
ALTER TABLE plants AUTO_INCREMENT = 1;
INSERT INTO plants (
    common_name, scientific_name, watering, fertilizer, sunlight, pruning, img,
    water_amount, fertilizer_amount, sun_per_day, soil_salinty, appropriate_season, admin_id
) VALUES
('Orange', 'Citrus sinensis', 'Water deeply every 1-2 weeks, ensuring the soil is well-drained to prevent root rot. Increase watering frequency during dry spells.', 
'Use a balanced fertilizer (such as 10-10-10) monthly during the growing season. In winter, reduce feeding frequency.', 
'Requires full sun for optimal growth and fruit production.', 
'Prune annually to remove dead or diseased branches and to shape the tree. Best done in late winter or early spring.', 
null,
'20-30 gallons per week, depending on the age of the tree and weather conditions.', 
'1-2 lbs of a balanced fertilizer per month during the growing season.', 
'6-8 hours of direct sunlight daily.', 
'Moderate salinity tolerance. Prefers slightly acidic to neutral soil (pH 6-7).', 
'Spring and Summer are ideal for growth and fruiting.', 
1),

('Tomato', 'Solanum lycopersicum', 'Keep soil consistently moist but not waterlogged. Water at the base of the plant to avoid wetting the foliage.', 
'Fertilize every 2 weeks with a balanced fertilizer. Increase phosphorus content for better fruiting once flowers appear.', 
'Requires full sun for best yield and flavor.', 
'Prune suckers (small shoots between the main stem and branches) and lower leaves to improve air circulation and reduce disease risk.', 
null,
'1-2 inches of water per week, depending on weather conditions. More water may be needed during hot, dry periods.', 
'1-2 lbs of a balanced fertilizer every 2 weeks. Use a fertilizer higher in phosphorus (e.g., 5-10-5) when plants start flowering.', 
'6-8 hours of direct sunlight daily.', 
'Moderate salinity tolerance. Prefers slightly acidic soil (pH 6-6.8).', 
'Spring and Summer are ideal for planting and growth.', 
1),

('Corn', 'Zea mays', 'Water weekly, especially during dry spells and critical growth stages like tasseling and ear development.', 
'Use a high-nitrogen fertilizer at planting and then side-dress with nitrogen during the growing season.', 
'Requires full sun for optimal growth and kernel development.', 
'Corn does not require pruning. Ensure proper spacing to allow good air circulation.', 
null,
'1-1.5 inches of water per week, especially during critical growth stages.', 
'2-3 lbs of a high-nitrogen fertilizer per month during the growing season.', 
'6-8 hours of direct sunlight daily.', 
'Low salinity tolerance. Prefers well-drained, fertile soil with a pH of 6-6.8.', 
'Spring and Summer are ideal for planting and growth.', 
1),

('Mint', 'Mentha', 'Water regularly to keep soil moist but not waterlogged. Mint prefers consistently moist soil.', 
'Use a balanced fertilizer monthly during the growing season. Avoid over-fertilizing as it can reduce the essential oil concentration.', 
'Prefers partial to full sun but can tolerate some shade. Too much sun can cause wilting.', 
'Prune frequently to control growth and encourage bushiness. Cut back to the ground at the end of the growing season.', 
null,
'1-2 inches of water per week, ensuring the soil remains consistently moist.', 
'1 lb of a balanced fertilizer per month during the growing season.', 
'4-6 hours of direct sunlight daily.', 
'Low salinity tolerance. Prefers moist, rich, well-drained soil with a pH of 6-7.', 
'Spring, Summer, and Fall are ideal for growth.', 
1),

('Potato', 'Solanum tuberosum', 'Water deeply once a week, ensuring the soil is evenly moist but not waterlogged.', 
'Fertilize at planting with a balanced fertilizer and then again midseason with a high-potassium fertilizer to promote tuber development.', 
'Requires full sun for best growth and tuber production.', 
'Potatoes do not require pruning. Hilling (mounding soil around the base of the plants) is important to protect tubers from sunlight.', 
null,
'1-2 inches of water per week, depending on soil conditions and weather.', 
'2-3 lbs of a balanced fertilizer at planting and again midseason. Use a fertilizer higher in potassium (e.g., 5-10-10) during tuber formation.', 
'6-8 hours of direct sunlight daily.', 
'Moderate salinity tolerance. Prefers well-drained, fertile soil with a pH of 5.5-6.5.', 
'Spring and Summer are ideal for planting and growth.', 
1);
ALTER TABLE user_plant DROP PRIMARY KEY;
ALTER TABLE user_plant MODIFY COLUMN id INT AUTO_INCREMENT PRIMARY KEY;
select * from user_plant;
alter table Suggested_plants 
add column  approved bit default 0; 
select * from Suggested_plants;
select * from plants;


ALTER TABLE Suggested_plants
ADD COLUMN plant_id INT NULL;
ALTER TABLE Suggested_plants
ADD CONSTRAINT unique_plant_id UNIQUE (plant_id);
ALTER TABLE Suggested_plants
ADD CONSTRAINT fk_plant
FOREIGN KEY (plant_id) REFERENCES plants(id)
