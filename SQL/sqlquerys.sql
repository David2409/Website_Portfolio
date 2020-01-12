#ABOUTME
SELECT name, picture_id FROM aboutme;

#PICTURE
SELECT picture FROM pictures WHERE id = '{wanted}';

#PROJECT
#All ids
SELECT id FROM projects;
#Prev
SELECT name, description, myRating FROM projects WHERE id = '{wanted}';
#Prev Fav
SELECT name, description, myRating FROM projects ORDER BY myRating LIMIT '{size}';
#File
SELECT file FROM projects WHERE id = '{wanted}';

#Tags from project
SELECT tagstoprojects.tag_name FROM projects INNER JOIN tagstoprojects WHERE tagstoprojects.project_id = projects.id = "{wanted}";