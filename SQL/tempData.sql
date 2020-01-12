use websiteportfolio;

INSERT INTO pictures(picture) VALUES (LOAD_FILE('E:/images/cat.jpg'));
SELECT @last_picture_id := LAST_INSERT_ID( );
INSERT INTO aboutme (name, picture_id) VALUES ('David Schaefer',@last_picture_id);
INSERT INTO tags VALUES ('AI'), ('JAVA'), ('C#'), ('TYPESCRIPT'), ('JAVASCRIPT'), ('MYSQL'), ('HTML');
INSERT INTO projects (name, description, file, myRating) VALUES ('Test Project', 'This is a project which a created to test the database and rest api', LOAD_FILE('E:/images/owl.jpeg'), '10');
SELECT @last_project_id := LAST_INSERT_ID( );
INSERT INTO tagstoprojects (project_id, tag_name) VALUES (@last_project_id, 'AI'), (@last_project_id, 'C#'), (@last_project_id, 'HTML');
INSERT INTO picturestoprojects (picture_id, project_id) VALUES (@last_picture_id, @last_project_id);