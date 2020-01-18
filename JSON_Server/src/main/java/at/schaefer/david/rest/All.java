package at.schaefer.david.rest;

import templates.DTOProject;

import javax.ws.rs.GET;
import javax.ws.rs.Path;
import javax.ws.rs.PathParam;
import javax.ws.rs.core.MediaType;
import javax.ws.rs.core.Response;

import java.sql.ResultSet;
import java.sql.Statement;
import java.util.logging.Level;
import java.util.logging.Logger;

@Path("/all")
public class All {

    protected static final Logger LOGGER = Logger.getLogger(All.class.getName());

    /*
    @GET
    @PathParam("")
    public DTOProject[] GetAll(){
        LOGGER.log(Level.INFO,"Got HTTP-Request");
        Statement statement;
        try{
            statement = Globals.database.createStatement();
            ResultSet result = AboutMe.GetAboutMe(statement);
            result.next();
            result = statement.executeQuery("");
            statement.close();
        }
        catch (Exception e) {
            LOGGER.log(Level.WARNING, "", e );
        }
    }
    */
}
