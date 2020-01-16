package at.schaefer.david.rest;

import java.sql.ResultSet;
import java.sql.ResultSetMetaData;
import java.sql.SQLException;
import java.sql.Statement;

public class JSONConverter {


    public static String QueryToJSON(ResultSet input, boolean showName) throws SQLException {
        ResultSetMetaData metadata = input.getMetaData();
        String[] names = new String[metadata.getColumnCount()];
        if(showName){
            for(int i = 0; i < names.length; i++) {
                names[i] = metadata.getColumnLabel(i + 1);
            }
        }

        String erg = "[";
        boolean add = false;
        while(input.next()){
            if(add){
                erg += ",";
            }else{
                add = true;
            }
            if(showName){
                erg += "{";
            }
            for(int i = 0; i < names.length; i++){
                if(showName) {
                    erg += "\"" + names[i] + "\":";
                }
                erg += "\"" + input.getString(i+1) + "\"";
                if(i != names.length-1){
                    erg += ",";
                }
            }
            if(showName){
                erg += "}";
            }
        }
        erg += "]";
        return erg;
    }

    public static String RowToJSON(ResultSet input, boolean close) throws SQLException {
        ResultSetMetaData metadata = input.getMetaData();
        String[] names = new String[metadata.getColumnCount()];
        for(int i = 0; i < names.length; i++) {
            names[i] = metadata.getColumnLabel(i + 1);
        }

        String erg = "{";
        for(int i = 0; i < names.length; i++){
            erg +=  "\"" + names[i] + "\":\"" + input.getString(i+1) + "\"";
            if(i != names.length-1){
                erg += ",";
            }
        }
        if(close){
            erg += "}";
        }
        return erg;
    }

    public static String AddToOpenJSON(String to, String that, String name, boolean close){
        to += ",\"" + name + "\":" + that;
        if(close){
            to += "}";
        }
        return to;
    }
}
