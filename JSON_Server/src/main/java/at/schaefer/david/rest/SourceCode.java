package at.schaefer.david.rest;

import javax.ws.rs.GET;
import javax.ws.rs.Path;
import javax.ws.rs.PathParam;
import javax.ws.rs.Produces;
import javax.ws.rs.core.MediaType;
import javax.ws.rs.core.Response;
import java.sql.Blob;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.sql.Statement;
import java.util.logging.Level;
import java.util.logging.Logger;

@Path("/sourcecode")
public class SourceCode {

    protected static final Logger LOGGER = Logger.getLogger(SourceCode.class.getName());

    @GET
    @Path("/{id}")
    @Produces(MediaType.TEXT_PLAIN)
    public Response GetSourceCodeFile(@PathParam("id") String id){
        LOGGER.log(Level.INFO,"Got HTTP-Request for id " + id);
        try{
            Statement statement = Globals.database.createStatement();
            ResultSet result = statement.executeQuery("SELECT file FROM sourcecodefile WHERE id = '" + id + "';");
            if(result.next()){
                Blob blob = result.getBlob(1);
                statement.close();
                return Response.status(200).entity(blob.getBinaryStream()).build();
            }
            statement.close();
            return Response.status(400).entity("").build();
        } catch (Exception e) {
            LOGGER.log(Level.WARNING, "", e);
        }
        return Response.status(500).entity("").build();
    }

    @GET
    @Path("/download/{projectid}")
    public Response DownloadProject(@PathParam("projectid") String id){
        LOGGER.log(Level.INFO,"Got HTTP-Request for id " + id);
        try{
            Statement statement = Globals.database.createStatement();
            ResultSet result = statement.executeQuery("SELECT file FROM projects WHERE id='" + id + "';");
            if(result.next()){
                Blob blob = result.getBlob(1);
                statement.close();
                return Response.status(200).entity(blob.getBinaryStream()).type(MediaType.APPLICATION_OCTET_STREAM).header("content-disposition","attachment; filename = project" + id + ".zip").build();
            }
            statement.close();
            return Response.status(400).entity("").build();
        } catch (Exception e) {
            LOGGER.log(Level.WARNING, "", e);
        }
        return Response.status(500).entity("").build();
    }
}
