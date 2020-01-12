package at.schaefer.david.rest;

import com.sun.jersey.api.core.ResourceConfig;

import java.sql.*;
import java.util.Map;

public class Globals{
    public static Connection database;

    public static void init(){
        try {
            Class.forName("com.mysql.cj.jdbc.Driver");
            database = DriverManager.getConnection("jdbc:mysql://localhost:3306/websiteportfolio?serverTimezone=UTC", "restService", "password");
        } catch (Exception e) {
            e.printStackTrace();
        }
    }

    public static String QueryToJSON(ResultSet input) throws SQLException {
        ResultSetMetaData metadata = input.getMetaData();
        String[] names = new String[metadata.getColumnCount()];
        for(int i = 0; i < names.length; i++) {
            names[i] = metadata.getColumnName(i + 1);
        }

        String erg = "[";
        while(input.next()){
            erg += "{";
            for(int i = 0; i < names.length; i++){
                erg +=  "\"" + names[0] + "\":\"" + input.getString(i+1) + "\"";
                if(i != names.length-1){
                    erg += ",";
                }
            }
            erg += "}";
        }
        erg += "]";
        return erg;
    }
}
