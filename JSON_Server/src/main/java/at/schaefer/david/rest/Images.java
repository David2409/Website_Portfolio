package at.schaefer.david.rest;

import javax.imageio.ImageIO;
import javax.ws.rs.GET;
import javax.ws.rs.Path;
import javax.ws.rs.PathParam;
import javax.ws.rs.core.Response;
import java.awt.image.BufferedImage;
import java.io.ByteArrayOutputStream;
import java.sql.Blob;
import java.sql.ResultSet;
import java.sql.Statement;
import java.util.logging.Level;
import java.util.logging.Logger;

@Path("image")
public class Images {

    protected static final Logger LOGGER = Logger.getLogger(Projects.class.getName());

    @GET
    @Path("/{id}")
    public Response GetImage(@PathParam("id") int id){
        try{
            Statement statment = Globals.database.createStatement();
            ResultSet result = statment.executeQuery("SELECT picture FROM pictures WHERE id = '" + id + "';");
            if(result.next()){
                Blob blob = result.getBlob(1);
                BufferedImage image = ImageIO.read(blob.getBinaryStream());
                ByteArrayOutputStream outputStream = new ByteArrayOutputStream();
                ImageIO.write(image, "jpg", outputStream);
                return Response.status(200).entity(outputStream.toByteArray()).build();
            }
            return Response.status(400).entity("").build();
        } catch (Exception e) {
            LOGGER.log(Level.WARNING, "", e);
        }
        return Response.status(500).entity("").build();
    }
}
