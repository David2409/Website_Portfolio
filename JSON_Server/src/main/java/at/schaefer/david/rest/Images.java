package at.schaefer.david.rest;

import javax.ws.rs.GET;
import javax.ws.rs.Path;
import javax.ws.rs.PathParam;
import javax.ws.rs.core.MediaType;
import javax.ws.rs.core.Response;
import java.sql.Blob;
import java.sql.ResultSet;
import java.sql.Statement;
import java.util.logging.Level;
import java.util.logging.Logger;

@Path("image")
public class Images {

    protected static final Logger LOGGER = Logger.getLogger(Images.class.getName());

    @GET
    @Path("/{id}")
    public Response GetImage(@PathParam("id") int id){
        LOGGER.log(Level.INFO,"Got HTTP-Request for /image/" + id);
        try{
            Statement statment = Globals.database.createStatement();
            ResultSet result = statment.executeQuery("SELECT picture, type FROM pictures WHERE id = '" + id + "';");
            if(result.next()){
                Blob blob = result.getBlob(1);
                String type = result.getString(2);
                statment.close();
                return Response.status(200).entity(blob.getBinaryStream()).type("image/"+type).build();
            }
            statment.close();
            return Response.status(400).type(MediaType.TEXT_PLAIN).entity("").build();
        } catch (Exception e) {
            LOGGER.log(Level.WARNING, "", e);
        }
        return Response.status(500).type(MediaType.TEXT_PLAIN).entity("").build();
    }
}
