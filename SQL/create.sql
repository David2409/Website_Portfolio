drop database websiteportfolio;
create database WebsitePortfolio;
use WebsitePortfolio;

create table Pictures(
	id BIGINT AUTO_INCREMENT PRIMARY KEY,
    picture MEDIUMBLOB NOT NULL
);

create table AboutMe(
	id SMALLINT AUTO_INCREMENT PRIMARY KEY,
	name VARCHAR(15) NOT NULL,
    picture_id BIGINT NOT NULL,
    FOREIGN KEY fg_picture_id(picture_id) REFERENCES Pictures(id)
);

create table Tags(
    name VARCHAR(30) PRIMARY KEY NOT NULL
);

create table Projects(
	id BIGINT AUTO_INCREMENT PRIMARY KEY,
	name VARCHAR(25) NOT NULL,
    description TEXT NOT NULL,
    file longblob NOT NULL,
    myRating SMALLINT NOT NULL,
    onlineSince DATETIME NOT NULL DEFAULT NOW()
);

create table SourceCodeFile(
	id BIGINT AUTO_INCREMENT PRIMARY KEY,
    file BLOB NOT NULL,
    project_id BIGINT NOT NULL,
    FOREIGN KEY fk_project_id(project_id) REFERENCES Projects(id)
);

create table PicturesToProjects(
	picture_id BIGINT,
    project_id BIGINT,
    PRIMARY KEY(picture_id, project_id),
    FOREIGN KEY fk_picture_id(picture_id) REFERENCES Pictures(id),
    FOREIGN KEY fk_project_id(project_id) REFERENCES Projects(id)
);

create table TagsToProjects(
	tag_name VARCHAR(30),
    project_id BIGINT,
    PRIMARY KEY(tag_name, project_id),
    FOREIGN KEY fk_tag_name(tag_name) REFERENCES Tags(name),
    FOREIGN KEY fk_project_id(project_id) REFERENCES Projects(id)
);