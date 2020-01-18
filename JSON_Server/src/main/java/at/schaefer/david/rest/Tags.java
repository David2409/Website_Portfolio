package at.schaefer.david.rest;

import templates.DTOTag;
import templates.DTOTags;

import javax.ws.rs.GET;
import javax.ws.rs.Path;
import javax.ws.rs.core.MediaType;
import javax.ws.rs.core.Response;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.sql.Statement;
import java.util.ArrayList;
import java.util.logging.Level;
import java.util.logging.Logger;

@Path("/tags")
public class Tags {

    protected static final Logger LOGGER = Logger.getLogger(Tags.class.getName());

    @GET
    @Path("")
    public DTOTags GetAll() {
        DTOTags result = new DTOTags();
        LOGGER.log(Level.INFO,"Got HTTP-Request");
        try{
            Statement statement = Globals.database.createStatement();
            ResultSet resultSet = statement.executeQuery("SELECT tag_name AS tag, Count(*) AS entries FROM tagstoprojects GROUP BY tag_name ORDER BY entries DESC;");
            result.tags = new ArrayList<DTOTag>();
            while(resultSet.next()){
                DTOTag tag = new DTOTag();
                tag.name = resultSet.getString(1);
                tag.entries = resultSet.getInt(2);
                result.tags.add(tag);
            }
            statement.close();
            //return Response.status(200).type(MediaType.APPLICATION_JSON).entity(result).build();
        } catch (Exception e) {
            LOGGER.log(Level.WARNING, "", e);
        }
        return result;
    }
}
