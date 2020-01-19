package at.schaefer.david.rest;

import templates.DTOKnow;
import templates.DTOKnowledge;
import templates.DTOProjectPrev;

import javax.ws.rs.GET;
import javax.ws.rs.Path;
import java.sql.ResultSet;
import java.sql.SQLSyntaxErrorException;
import java.sql.Statement;
import java.util.ArrayList;
import java.util.logging.Level;
import java.util.logging.Logger;

@Path("/knowledge")
public class Knowledge {

    protected static final Logger LOGGER = Logger.getLogger(Knowledge.class.getName());

    @GET
    @Path("")
    public DTOKnowledge GetKnowledge(){
        LOGGER.log(Level.INFO,"Got HTTP-Request");
        DTOKnowledge knowledge = new DTOKnowledge();
        try{
            Statement statement = Globals.database.createStatement();
            ResultSet result = statement.executeQuery( "SELECT name, points FROM knowledge;");
            knowledge.knowledge = new ArrayList<DTOKnow>();
            while(result.next()){
                DTOKnow know = new DTOKnow();
                know.name = result.getString(1);
                know.value = result.getInt(2);
                knowledge.knowledge.add(know);
            }
            result = statement.executeQuery("SELECT name FROM hobbies;");
            knowledge.hobbies = new ArrayList<String>();
            while(result.next()){
                knowledge.hobbies.add(result.getString(1));
            }
            knowledge.attributes = new ArrayList<String>();
            result = statement.executeQuery("SELECT name FROM personalattributes;");
            while(result.next()){
                knowledge.attributes.add(result.getString(1));
            }
            statement.close();
        }catch (SQLSyntaxErrorException e){
            e.printStackTrace();
        }catch (Exception e) {
            e.printStackTrace();
            LOGGER.log(Level.WARNING, "", e);
        }
        return knowledge;
    }
}
