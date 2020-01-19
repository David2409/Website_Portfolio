use websiteportfolio;

INSERT INTO pictures(picture, type) VALUES (LOAD_FILE('C:/Users/divad/Documents/temp/Content_Website/aboutme/me.jpg'), "jpg");
SELECT @last_picture_id := LAST_INSERT_ID( );
INSERT INTO aboutme (name, picture_id, description) VALUES ('David Schaefer',@last_picture_id,'In the folling paragraphs I would like to tell you something about me. I was born in Vienna on the 10 December 2002. I am currently attending the 3 class of the HTL WIEN WEST.');
INSERT INTO tags VALUES ('AI'), ('JAVA'), ('CSharp'), ('TYPESCRIPT'), ('JAVASCRIPT'), ('MYSQL'), ('HTML'), ('CSS'), ('JERSEY'), ('Python'), ('WPF'), ('Servlets'), ('UNITY'),('SOCKETS');

INSERT INTO pictures(picture, type) VALUES (LOAD_FILE('C:/Users/divad/Documents/temp/Content_Website/projects/T-Rex-Game/p.jpg'), "jpg");
SELECT @last_picture_id := LAST_INSERT_ID( );
INSERT INTO projects (name, description, coverpicture_id, file, myRating) VALUES ('T-Rex Game AI', 'In this project I wanted to create an AI that could learn to play the T-Rex Game (also known as the ”google offline game”) with a little bit of an inefficient overwork methode. In this project I used the basics of Computer learning to achieve my goal. First I have created a basic Neuronal Network and written a “overwork” methode for it (which is to change random variables). I also gave access to these variables in the UI. Second I created the actual game and implemented the Neuronal Network into it. When I now the Neuronal Network which I programmed was not very good from the code structuer because I was just learning about the consept of classes. I have also used the libary "Live Charts" in this project', @last_picture_id, LOAD_FILE('C:/Users/divad/Documents/temp/Content_Website/T-Rex-Game/Code.zip'), '4');
SELECT @last_project_id := LAST_INSERT_ID( );
INSERT INTO tagstoprojects (project_id, tag_name) VALUES (@last_project_id, 'CSharp'), (@last_project_id, 'AI'), (@last_project_id, 'WPF');
INSERT INTO sourcecodefile (file, project_id) VALUES (LOAD_FILE('C:/Users/divad/Documents/temp/Content_Website/projects/T-Rex-Game/advancedOverworker.cs'), @last_project_id);
INSERT INTO sourcecodefile (file, project_id) VALUES (LOAD_FILE('C:/Users/divad/Documents/temp/Content_Website/projects/T-Rex-Game/Data.cs'), @last_project_id);
INSERT INTO sourcecodefile (file, project_id) VALUES (LOAD_FILE('C:/Users/divad/Documents/temp/Content_Website/projects/T-Rex-Game/Game.cs'), @last_project_id);
INSERT INTO sourcecodefile (file, project_id) VALUES (LOAD_FILE('C:/Users/divad/Documents/temp/Content_Website/projects/T-Rex-Game/Generation.cs'), @last_project_id);
INSERT INTO sourcecodefile (file, project_id) VALUES (LOAD_FILE('C:/Users/divad/Documents/temp/Content_Website/projects/T-Rex-Game/MainNetwork.cs'), @last_project_id);
INSERT INTO sourcecodefile (file, project_id) VALUES (LOAD_FILE('C:/Users/divad/Documents/temp/Content_Website/projects/T-Rex-Game/MainWindow.xaml.cs'), @last_project_id);
INSERT INTO sourcecodefile (file, project_id) VALUES (LOAD_FILE('C:/Users/divad/Documents/temp/Content_Website/projects/T-Rex-Game/Managment.cs'), @last_project_id);
INSERT INTO sourcecodefile (file, project_id) VALUES (LOAD_FILE('C:/Users/divad/Documents/temp/Content_Website/projects/T-Rex-Game/NetworkOverworker.cs'), @last_project_id);
INSERT INTO sourcecodefile (file, project_id) VALUES (LOAD_FILE('C:/Users/divad/Documents/temp/Content_Website/projects/T-Rex-Game/NetworkData.cs'), @last_project_id);
INSERT INTO sourcecodefile (file, project_id) VALUES (LOAD_FILE('C:/Users/divad/Documents/temp/Content_Website/projects/T-Rex-Game/Operations.cs'), @last_project_id);
INSERT INTO sourcecodefile (file, project_id) VALUES (LOAD_FILE('C:/Users/divad/Documents/temp/Content_Website/projects/T-Rex-Game/Player.cs'), @last_project_id);
INSERT INTO sourcecodefile (file, project_id) VALUES (LOAD_FILE('C:/Users/divad/Documents/temp/Content_Website/projects/T-Rex-Game/Save.cs'), @last_project_id);

INSERT INTO pictures(picture, type) VALUES (LOAD_FILE('C:/Users/divad/Documents/temp/Content_Website/projects/Python-Sanke/snake.png'), "png");
SELECT @last_picture_id := LAST_INSERT_ID( );
INSERT INTO projects (name, description, coverpicture_id, file, myRating) VALUES ('Python Snake', 'A project which I created in my first semester in the first year at a HTL. This project is  a  modified version of snake with a lot more different food to eat which give you specail effects respectively give you more points or change your movement speed.', @last_picture_id, LOAD_FILE('C:/Users/divad/Documents/temp/Content_Website/projects/snake.zip'), '8');
SELECT @last_project_id := LAST_INSERT_ID( );
INSERT INTO tagstoprojects (project_id, tag_name) VALUES (@last_project_id, 'Python');
INSERT INTO sourcecodefile (file, project_id) VALUES (LOAD_FILE('C:/Users/divad/Documents/temp/Content_Website/projects/Python-Sanke/snake.zip'), @last_project_id);


INSERT INTO pictures(picture, type) VALUES (LOAD_FILE('C:/Users/divad/Documents/temp/Content_Website/projects/Project-Website/p.jpg'), "jpg");
SELECT @last_picture_id := LAST_INSERT_ID( );
INSERT INTO projects (name, description, coverpicture_id, file, myRating) VALUES ('Portfolio Website', 'This is a project which I created for school. In this project we leared about the design projecesses. I decided to do it a bit more complicated and designed it so that I would have all the data in a database(In my case MySql) and then throw http-request get the data to my website and display them. For this I have written a rest-service in java with jersey. I also wanted to use Angular and Typescript in this project because they have have some tools which can really be in handy when I programmed this website.', @last_picture_id, LOAD_FILE('/home/david/test.java'), '9');
SELECT @last_project_id := LAST_INSERT_ID( );
INSERT INTO tagstoprojects (project_id, tag_name) VALUES (@last_project_id, 'HTML'), (@last_project_id, 'JAVA'), (@last_project_id, 'TYPESCRIPT'), (@last_project_id, 'JERSEY'), (@last_project_id, 'Servlets'), (@last_project_id, 'CSS'), (@last_project_id, 'MYSQL');
INSERT INTO sourcecodefile (file, project_id) VALUES (LOAD_FILE('C:/Users/divad/Documents/temp/Content_Website/projects/Project-Website/t.txt'), @last_project_id);


INSERT INTO pictures(picture, type) VALUES (LOAD_FILE('C:/Users/divad/Documents/temp/Content_Website/projects/chat-server/p.JPG'), "jpg");
SELECT @last_picture_id := LAST_INSERT_ID( );
INSERT INTO projects (name, description, coverpicture_id, file, myRating) VALUES ('Simple-Chat-Server', 'In this project I wanted to learn how to comunicate between to servers by using Java. I have done that by sending all the messages the server gets to all the connected Clients. He also writes all the messages into a logfile.', @last_picture_id, LOAD_FILE('C:/Users/divad/Documents/temp/Content_Website/projects/chat-server/Chatserver.zip'), '9');
SELECT @last_project_id := LAST_INSERT_ID( );
INSERT INTO tagstoprojects (project_id, tag_name) VALUES (@last_project_id, 'JAVA'), (@last_project_id, 'SOCKETS');
INSERT INTO sourcecodefile (file, project_id) VALUES (LOAD_FILE('C:/Users/divad/Documents/temp/Content_Website/projects/chat-server/Client.java'), @last_project_id);
INSERT INTO sourcecodefile (file, project_id) VALUES (LOAD_FILE('C:/Users/divad/Documents/temp/Content_Website/projects/chat-server/ClientThread.java'), @last_project_id);
INSERT INTO sourcecodefile (file, project_id) VALUES (LOAD_FILE('C:/Users/divad/Documents/temp/Content_Website/projects/chat-server/Command.java'), @last_project_id);
INSERT INTO sourcecodefile (file, project_id) VALUES (LOAD_FILE('C:/Users/divad/Documents/temp/Content_Website/projects/chat-server/Server.java'), @last_project_id);
INSERT INTO sourcecodefile (file, project_id) VALUES (LOAD_FILE('C:/Users/divad/Documents/temp/Content_Website/projects/chat-server/ServerThread.java'), @last_project_id);




INSERT INTO hobbies VALUES ('swimming'), ('skiing'), ('playing Computer Games');
INSERT INTO knowledge VALUES ('BOOTSTRAP', '7'), ('JAVA', 9), ('HTML', 8), ('MYSQL', 8), ('Angular', 7), ('JavaScript', 7), ('CSharp', 8), ('Python', 5), ('WPF', 4), ('Git-hub', 5), ('Designen', 3), ('Programming', 9);
INSERT INTO personalattributes VALUES ('ambitious'), ('helpfull'), ('homorus'), ('selfconfident'), ('adventurous'), ('endurance');
