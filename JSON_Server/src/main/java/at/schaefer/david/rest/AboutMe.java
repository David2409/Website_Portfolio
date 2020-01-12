package at.schaefer.david.rest;

import com.mysql.cj.x.protobuf.MysqlxNotice;

import javax.ws.rs.GET;
import javax.ws.rs.Path;
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
    public Response getMesg() throws SQLException {
        Statement statement;
        try{
             statement = Globals.database.createStatement();
             statement.execute("INSERT INTO aboutme (name, picture_id) VALUES ('David Schaefer','1');");
             statement.close();
             ResultSet result = statement.executeQuery("SELECT name, picture_id FROM aboutme;");
             if(result.next()) {
                 String respond = "{'name':'" + result.getString(1) + "','pictureID':'" + result.getString(2) + "'}";
                 return Response.status(200).entity(respond).build();
             }
             return Response.status(500).entity("No Database Entry").build();
        }
        catch (Exception e) {
            LOGGER.log(Level.WARNING, "", e );
            return Response.status(500).entity("").build();
        }
    }
}