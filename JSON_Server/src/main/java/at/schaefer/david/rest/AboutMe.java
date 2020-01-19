package at.schaefer.david.rest;

import com.mysql.cj.x.protobuf.MysqlxNotice;
import templates.DTOAboutMe;

import javax.ws.rs.GET;
import javax.ws.rs.Path;
import javax.ws.rs.Produces;
import javax.ws.rs.core.MediaType;
import javax.ws.rs.core.Response;
import java.sql.DriverManager;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.sql.Statement;
import java.util.logging.Level;
import java.util.logging.Logger;

@Path("/aboutme")
public class AboutMe {

    protected static final Logger LOGGER = Logger.getLogger(AboutMe.class.getName());

    @GET
    @Path("")
    @Produces(MediaType.APPLICATION_JSON)
    public DTOAboutMe GetAboutMe() throws SQLException {
        LOGGER.log(Level.INFO,"Got HTTP-Request");
        DTOAboutMe aboutMe = new DTOAboutMe();
        try{
             Statement statement = Globals.database.createStatement();
             ResultSet result = statement.executeQuery("SELECT name, picture_id, description FROM aboutme;");
             if(result.next()) {
                 aboutMe.name = result.getString(1);
                 aboutMe.picture = result.getInt(2);
                 aboutMe.description = result.getString(3);
                 statement.close();
             }
             statement.close();
        }
        catch (Exception e) {
            LOGGER.log(Level.WARNING, "", e );
        }
        return aboutMe;
    }
}