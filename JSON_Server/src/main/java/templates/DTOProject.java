package templates;

import at.schaefer.david.rest.Globals;
import at.schaefer.david.rest.JSONConverter;

import java.io.BufferedReader;
import java.io.InputStreamReader;
import java.sql.Blob;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.sql.Statement;
import java.util.List;
import java.util.logging.Level;

public class DTOProject {

    public int id;
    public String name;
    public String description;
    public int coverpicture;
    public List<String> tags;
    public List<String> sourcecode;
}
