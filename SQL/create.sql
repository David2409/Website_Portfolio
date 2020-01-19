#drop database websiteportfolio;
#create database websiteportfolio;
#use websiteportfolio;
use portfolio;

create table pictures(
	id BIGINT AUTO_INCREMENT PRIMARY KEY,
    picture MEDIUMBLOB NOT NULL,
    type VARCHAR(5) NOT NULL
);

create table aboutme(
	id SMALLINT AUTO_INCREMENT PRIMARY KEY,
	name VARCHAR(15) NOT NULL,
    picture_id BIGINT NOT NULL,
    description Text NOT NULL,
    FOREIGN KEY fk_picture_id(picture_id) REFERENCES pictures(id)
);

create table tags(
    name VARCHAR(30) PRIMARY KEY NOT NULL
);

create table projects(
	id BIGINT AUTO_INCREMENT PRIMARY KEY,
	name VARCHAR(25) NOT NULL,
    description TEXT NOT NULL,
    coverpicture_id BIGINT NOT NULL,
    file longblob NOT NULL,
    myRating SMALLINT NOT NULL,
    onlineSince DATETIME NOT NULL DEFAULT NOW(),
    FOREIGN KEY fk_overpicture_id(coverpicture_id) REFERENCES pictures(id)
);

create table sourcecodefile(
	id BIGINT AUTO_INCREMENT PRIMARY KEY,
    file BLOB NOT NULL,
    project_id BIGINT NOT NULL,
    FOREIGN KEY fk_project_id(project_id) REFERENCES projects(id)
);

create table picturestoprojects(
	picture_id BIGINT,
    project_id BIGINT,
    PRIMARY KEY(picture_id, project_id),
    FOREIGN KEY fk_picture_id(picture_id) REFERENCES pictures(id),
    FOREIGN KEY fk_project_id(project_id) REFERENCES projects(id)
);

create table tagstoprojects(
	tag_name VARCHAR(30),
    project_id BIGINT,
    PRIMARY KEY(tag_name, project_id),
    FOREIGN KEY fk_tag_name(tag_name) REFERENCES tags(name),
    FOREIGN KEY fk_project_id(project_id) REFERENCES projects(id)
);

create table knowledge(
    name VARCHAR(30) PRIMARY KEY,
    points SMALLINT NOT NULL
);

create table hobbies(
	name VARCHAR(30) PRIMARY KEY
);

create table personalattributes(
	name VARCHAR(30) PRIMARY KEY
)