#ABOUTME
SELECT name, picture_id FROM aboutme;

#PICTURE
SELECT picture, type FROM pictures WHERE id = '{wanted}';
#specivic project
SELECT picture_id FROM picturestoprojects WHERE project_id = "{wanted}"; 


#PROJECT
#All
SELECT name, description,coverpicture_id as coverpicture FROM projects;
#All ids
SELECT id FROM projects;
#Prev
SELECT name, description, coverpicture_id as coverpicture, myRating FROM projects WHERE id = '{wanted}';
#Prev Fav
SELECT SELECT name, description, coverpicture_id AS coverpicture ORDER BY myRating LIMIT '{size}';
#File
SELECT file FROM projects WHERE id = '{wanted}';
#Project
SELECT name, description, coverpicture_id as coverpicture, myRating FROM projects WHERE id = '{wanted}';

#Tags 
#from project
SELECT tag_name AS tag FROM tagstoprojects WHERE project_id = "1";
#All used
SELECT tag_name AS TAG, Count(*) AS entries FROM tagstoprojects GROUP BY tag_name ORDER BY entries DESC;
#grouped
SELECT project_id, tag_name FROM tagstoprojects ORDER BY project_id;
#fav
SELECT ttp.project_id, ttp.tag_name FROM tagstoprojects ttp JOIN projects p WHERE p.id = ttp.project_id AND p.id in (1,2,3,4,5,6) ORDER BY p.myRating;

#Source File
SELECT file FROM sourcecodefile WHERE project_id=1;
#All
SELECT project_id, file FROM sourcecodefile ORDER BY project_id;
#Fav
SELECT p.id, scf.file FROM sourcecodefile scf JOIN projects p WHERE p.id = scf.project_id AND p.id in (1,2,3,4,5,6,7,8,9) ORDER BY p.myRating;

#Search
SELECT p.id
FROM
(
	SELECT project_id
	FROM tagstoprojects 
	GROUP BY project_id
	HAVING 
		MAX(CASE WHEN tag_name='HTML' 	THEN cast(project_id AS UNSIGNED) END IS NOT NULL) = '1'
) d
JOIN projects p
WHERE
	d.project_id = p.id AND
    p.name LIKE '%TEST%';

#only name
SELECT id FROM projects p WHERE name LIKE '%TEST%';    


#Knowledge
SELECT name, points FROM knowledge;
#Hobbies
SELECT name FROM hobbies;
#attributes
SELECT name FROM personalattributes;