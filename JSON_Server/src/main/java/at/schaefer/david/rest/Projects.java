package at.schaefer.david.rest;

import com.sun.org.apache.bcel.internal.generic.Select;
import templates.DTOProject;
import templates.DTOProjectPrev;

import javax.ws.rs.GET;
import javax.ws.rs.Path;
import javax.ws.rs.PathParam;
import javax.ws.rs.Produces;
import javax.ws.rs.core.MediaType;
import java.sql.*;
import java.util.ArrayList;
import java.util.List;
import java.util.logging.Level;
import java.util.logging.Logger;

@Path("/projects")
public class Projects {

    protected static final Logger LOGGER = Logger.getLogger(Projects.class.getName());

    @GET
    @Path("")
    public List<DTOProject> AllProjects() {
        LOGGER.log(Level.INFO,"Got HTTP-Request");
        List<DTOProject> projects = new ArrayList<DTOProject>();
        try{
            Statement statement = Globals.database.createStatement();
            Statement statementTags = Globals.database.createStatement();
            Statement statementCode = Globals.database.createStatement();
            ResultSet result = statement.executeQuery("SELECT id, name, description,coverpicture_id as coverpicture FROM projects;");
            ResultSet resultTags = statementTags.executeQuery("SELECT project_id, tag_name FROM tagstoprojects ORDER BY project_id;");
            ResultSet resultCode = statementCode.executeQuery("SELECT project_id, file FROM sourcecodefile ORDER BY project_id;");
            resultTags.next();
            resultCode.next();
            while(result.next()){
                DTOProject project = new DTOProject();
                project.id = result.getInt(1);
                project.name = result.getString(2);
                project.description = result.getString(3);
                project.coverpicture = result.getInt(4);
                project.tags = new ArrayList<String>();
                int id = result.getInt(1);
                try{
                    do {
                        if(resultTags.getInt(1) == id){
                            project.tags.add(resultTags.getString(2));
                        } else{
                            break;
                        }
                    } while(resultTags.next());
                } catch (Exception e) { }

                project.sourcecode = new ArrayList<String>();
                try{
                    do {
                        if(resultCode.getInt(1) == id){
                            project.sourcecode.add(Globals.TextToHTML(resultCode.getString(2)));
                        } else{
                            break;
                        }
                    } while(resultCode.next());
                } catch (Exception e) { }
                projects.add(project);
            }
            statementCode.close();
            statementTags.close();
            statement.close();
        } catch (Exception e) {
            LOGGER.log(Level.WARNING, "", e);
        }
        return projects;
    }

    @GET
    @Path("/{id}")
    public DTOProject SpecificProject(@PathParam("id") int id){
        LOGGER.log(Level.INFO,"Got HTTP-Request for id:" + id);
        DTOProject project = new DTOProject();
        try{
            Statement statement = Globals.database.createStatement();
            Statement statementTags = Globals.database.createStatement();
            Statement statementCode = Globals.database.createStatement();
            ResultSet result = statement.executeQuery("SELECT id, name, description, coverpicture_id as coverpicture FROM projects WHERE id=" + id + ";");
            ResultSet resultTags = statementTags.executeQuery("SELECT tag_name FROM tagstoprojects WHERE project_id=" + id + ";");
            ResultSet resultCode = statementCode.executeQuery("SELECT file FROM sourcecodefile WHERE project_id=" + id + ";");
            if(result.next()){
                project.id = result.getInt(1);
                project.name = result.getString(2);
                project.description = result.getString(3);
                project.coverpicture = result.getInt(4);
                project.tags = new ArrayList<String>();
                while(resultTags.next()){
                    project.tags.add(resultTags.getString(1));
                }

                project.sourcecode = new ArrayList<String>();
                while(resultCode.next()) {
                    project.sourcecode.add(Globals.TextToHTML(resultCode.getString(1)));
                }
            }
            statementCode.close();
            statementTags.close();
            statement.close();
        }catch (SQLSyntaxErrorException e){
            LOGGER.log(Level.WARNING, "", e);
        }catch (Exception e) {
            LOGGER.log(Level.WARNING, "", e);
        }
        return project;
    }


    @GET
    @Path("/{id}/prev")
    @Produces(MediaType.APPLICATION_JSON)
    public DTOProjectPrev SpecificProjectPreview(@PathParam("id") String id){
        LOGGER.log(Level.INFO,"Got HTTP-Request for id:" + id);
        DTOProjectPrev projectPrev = new DTOProjectPrev();
        try{
            Statement statement = Globals.database.createStatement();
            ResultSet resultProject = statement.executeQuery( "SELECT name, description, coverpicture_id AS coverpicture FROM projects WHERE id = '" + id + "';");
            ResultSet resultTags = statement.executeQuery("SELECT tag_name AS tag FROM tagstoprojects WHERE project_id = '" + id + "';");
            if(resultProject.next()) {
                projectPrev.name = resultProject.getString(1);
                projectPrev.description = resultProject.getString(2);
                projectPrev.coverpicture = resultProject.getInt(3);
                projectPrev.tags = new ArrayList<String>();
                while(resultTags.next()){
                    projectPrev.tags.add(resultTags.getString(1));
                }
            }
            statement.close();
        }catch (SQLSyntaxErrorException e){
            e.printStackTrace();
        }catch (Exception e) {
            e.printStackTrace();
            LOGGER.log(Level.WARNING, "", e);
        }
        return projectPrev;
    }

    @GET
    @Path("/fav/{amount}")
    public List<DTOProject> FavoriteProjects(@PathParam("amount") int amount){
        List<DTOProject> projects = new ArrayList<DTOProject>();
        LOGGER.log(Level.INFO,"Got HTTP-Request for amount: " + amount);
        try{
            Statement statement = Globals.database.createStatement();
            ResultSet result = statement.executeQuery("SELECT id, name, description, coverpicture_id AS coverpicture FROM projects ORDER BY myRating LIMIT " + amount + ";");
            int pos = 0;
            String ids = "(";
            int[] lIds = new int[amount];
            while(result.next()){
                ids += result.getString(1) + ",";
                lIds[pos] = result.getInt(1);
                projects.add(new DTOProject());
                projects.get(pos).id = result.getInt(1);
                projects.get(pos).name = result.getString(2);
                projects.get(pos).description = result.getString(3);
                projects.get(pos).coverpicture = result.getInt(4);
                projects.get(pos).tags = new ArrayList<String>();
                projects.get(pos).sourcecode = new ArrayList<String>();
                pos++;
            }
            ids = ids.substring(0, ids.length()-1);
            ids += ")";

            result = statement.executeQuery("SELECT ttp.project_id, ttp.tag_name FROM tagstoprojects ttp JOIN projects p WHERE p.id = ttp.project_id AND p.id in " + ids + " ORDER BY p.myRating;");
            result.next();
            try {
                for(int i= 0; i < projects.size(); i++) {
                    do {
                        if (result.getInt(1) == lIds[i]) {
                            projects.get(i).tags.add(result.getString(2));
                        } else {
                            break;
                        }
                    } while (result.next());
                }
            } catch (Exception e) { }


            result = statement.executeQuery("SELECT p.id, scf.file FROM sourcecodefile scf JOIN projects p WHERE p.id = scf.project_id AND p.id in " + ids + " ORDER BY p.myRating;");
            result.next();
            try {
                for(int i= 0; i < projects.size(); i++) {
                    do {
                        if (result.getInt(1) == lIds[i]) {
                            projects.get(i).sourcecode.add(Globals.TextToHTML(result.getString(2)));
                        } else {
                            break;
                        }
                        pos++;
                    } while (result.next());
                }
            } catch (Exception e) { }
            statement.close();
        }catch (SQLSyntaxErrorException e){
            e.printStackTrace();
        }catch (Exception e) {
            e.printStackTrace();
            LOGGER.log(Level.WARNING, "", e);
        }
        return projects;
    }


    @GET
    @Path("search/{search}")
    public List<DTOProject> SearchProject(@PathParam("search") String search){
        LOGGER.log(Level.INFO,"Got HTTP-Request search(name, tag):(" + search + ")");
        List<DTOProject> projects = new ArrayList<DTOProject>();

        try{
            Statement statement = Globals.database.createStatement();
            ResultSet result = statement.executeQuery("SELECT id, name, description, coverpicture_id AS coverpicture FROM projects WHERE name LIKE '%" + search + "%' ORDER BY id;");
            int pos = 0;
            String ids = "(";
            List<Integer> lIds = new ArrayList<Integer>();
            while(result.next()){
                ids += result.getString(1) + ",";
                lIds.add(result.getInt(1));
                DTOProject project = new DTOProject();
                project.id = result.getInt(1);
                project.name = result.getString(2);
                project.description = result.getString(3);
                project.coverpicture = result.getInt(4);
                project.sourcecode = new ArrayList<String>();
                project.tags = new ArrayList<String>();
                projects.add(project);
                pos++;
            }
            ids = ids.substring(0, ids.length()-1);
            ids += ")";

            result = statement.executeQuery("SELECT ttp.project_id, ttp.tag_name FROM tagstoprojects ttp JOIN projects p WHERE p.id = ttp.project_id AND p.id in " + ids + " ORDER BY p.id;");
            result.next();
            try {
                for(int i= 0; i < projects.size(); i++) {
                    do {
                        if (result.getInt(1) == lIds.get(i)) {
                            projects.get(i).tags.add(result.getString(2));
                        } else {
                            break;
                        }
                    } while (result.next());
                }
            } catch (Exception e) { }


            result = statement.executeQuery("SELECT p.id, scf.file FROM sourcecodefile scf JOIN projects p WHERE p.id = scf.project_id AND p.id in " + ids + "ORDER BY p.id;");
            result.next();
            try {
                for(int i= 0; i < projects.size(); i++) {
                    do {
                        if (result.getInt(1) == lIds.get(i)) {
                            projects.get(i).sourcecode.add(Globals.TextToHTML(result.getString(2)));
                        } else {
                            break;
                        }
                        pos++;
                    } while (result.next());
                }
            } catch (Exception e) { }
            statement.close();
        }catch (SQLSyntaxErrorException e){
            e.printStackTrace();
        }catch (Exception e) {
            e.printStackTrace();
            LOGGER.log(Level.WARNING, "", e);
        }
        return projects;
    }

    @GET
    @Path("search/{search}/{tags}")
    public List<DTOProject> SearchProject(@PathParam("search") String search, @PathParam("tags") String tags){
        LOGGER.log(Level.INFO,"Got HTTP-Request search(name, tag):(" + search + ")");
        List<DTOProject> projects = new ArrayList<DTOProject>();

        try{
            Statement statement = Globals.database.createStatement();
            ResultSet result = statement.executeQuery(GenerateSearchSQL(search, tags.split(",")));
            int pos = 0;
            String ids = "(";
            List<Integer> lIds = new ArrayList<Integer>();
            while(result.next()){
                ids += result.getString(1) + ",";
                lIds.add(result.getInt(1));
                DTOProject project = new DTOProject();
                project.id = result.getInt(1);
                project.name = result.getString(2);
                project.description = result.getString(3);
                project.coverpicture = result.getInt(4);
                project.sourcecode = new ArrayList<String>();
                project.tags = new ArrayList<String>();
                projects.add(project);
                pos++;
            }
            ids = ids.substring(0, ids.length()-1);
            ids += ")";

            result = statement.executeQuery("SELECT ttp.project_id, ttp.tag_name FROM tagstoprojects ttp JOIN projects p WHERE p.id = ttp.project_id AND p.id in " + ids + " ORDER BY p.id;");
            result.next();
            try {
                for(int i= 0; i < projects.size(); i++) {
                    do {
                        if (result.getInt(1) == lIds.get(i)) {
                            projects.get(i).tags.add(result.getString(2));
                        } else {
                            break;
                        }
                    } while (result.next());
                }
            } catch (Exception e) { }


            result = statement.executeQuery("SELECT p.id, scf.file FROM sourcecodefile scf JOIN projects p WHERE p.id = scf.project_id AND p.id in " + ids + "ORDER BY p.id;");
            result.next();
            try {
                for(int i= 0; i < projects.size(); i++) {
                    do {
                        if (result.getInt(1) == lIds.get(i)) {
                            projects.get(i).sourcecode.add(Globals.TextToHTML(result.getString(2)));
                        } else {
                            break;
                        }
                        pos++;
                    } while (result.next());
                }
            } catch (Exception e) { }
            statement.close();
        }catch (SQLSyntaxErrorException e){
            e.printStackTrace();
        }catch (Exception e) {
            e.printStackTrace();
            LOGGER.log(Level.WARNING, "", e);
        }
        return projects;
    }

    private String GenerateSearchSQL(String search, String[] tags){
        String query = "SELECT p.id, p.name, p.description, p.coverpicture_id AS coverpicture FROM(SELECT project_id FROM tagstoprojects GROUP BY project_id HAVING MAX(CASE WHEN tag_name='" + tags[0] + "' THEN cast(project_id AS UNSIGNED) END IS NOT NULL) = '1'";
        for (int i = 1; i < tags.length; i++) {
            query += "AND MAX(CASE WHEN tag_name='" + tags[i] + "' THEN cast(project_id AS UNSIGNED) END IS NOT NULL) = '1'";
        }
        return query + ") d JOIN projects p WHERE d.project_id = p.id AND p.name LIKE '%" + search + "%' ORDER BY d.project_id;";
    }

    /*
    public static void main(String[] args){
        Globals.init();
        Projects p = new Projects();
        p.SearchProject("test", "HTML");
    }
     */
}
