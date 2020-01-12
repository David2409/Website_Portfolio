package at.schaefer.david.rest;

import javax.ws.rs.GET;
import javax.ws.rs.Path;
import javax.ws.rs.PathParam;
import javax.ws.rs.core.Response;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.sql.Statement;
import java.util.logging.Level;
import java.util.logging.Logger;

@Path("/projects")
public class Projects {

    protected static final Logger LOGGER = Logger.getLogger(Projects.class.getName());

    @GET
    @Path("")
    public Response AllProjekts() {
        try{
            Statement statment = Globals.database.createStatement();
            ResultSet result = statment.executeQuery("SELECT id FROM projects;");
            return Response.status(200).entity(Globals.QueryToJSON(result)).build();
        } catch (Exception e) {
            LOGGER.log(Level.WARNING, "", e);
        }
        return Response.status(500).entity("").build();
    }

    @GET
    @Path("/{param}")
    public Response SpecificProjekt(@PathParam("param") String msg){
        return Response.status(200).entity(("Projekt: " + msg)).build();
    }

    @GET
    @Path("/{name}/prev")
    public Response SpecificProjektPreview(@PathParam("name") String name){
        return Response.status(200).entity("Projekt Preview: " + name).build();
    }
}
