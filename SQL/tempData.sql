use websiteportfolio;

INSERT INTO pictures(picture, type) VALUES (LOAD_FILE('/home/david/Downloads/owl.jpg'), "jpg");
SELECT @last_picture_id := LAST_INSERT_ID( );
INSERT INTO aboutme (name, picture_id) VALUES ('David Schaefer',@last_picture_id);
INSERT INTO tags VALUES ('AI'), ('JAVA'), ('C#'), ('TYPESCRIPT'), ('JAVASCRIPT'), ('MYSQL'), ('HTML');
INSERT INTO projects (name, description, coverpicture_id, file, myRating) VALUES ('Test Project', 'This is a project which a created to test the database and rest api', @last_picture_id, LOAD_FILE('/home/david/test.java'), '10');
SELECT @last_project_id := LAST_INSERT_ID( );
INSERT INTO sourcecodefile (file, project_id) VALUES (LOAD_FILE('/home/david/test.java'), @last_project_id);
SELECT @last_project_id := 2;
INSERT INTO tagstoprojects (project_id, tag_name) VALUES (@last_project_id, 'MYSQL'), (@last_project_id, 'TYPESCRIPT'), (@last_project_id, 'HTML');
INSERT INTO picturestoprojects (picture_id, project_id) VALUES (@last_picture_id, @last_project_id);
INSERT INTO hobbies VALUES ('swimming'), ('skiing'), ('playing Computer Games');
INSERT INTO knowledge VALUES ('BOOTSTRAP', '7'), ('JAVA', 9), ('HTML',7), ('MYSQL', 4);
INSERT INTO personalattributes VALUES ('CLEVER'), ('HARDWORKING');