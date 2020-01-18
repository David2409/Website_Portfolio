package at.schaefer.david.rest;

import com.mysql.cj.protocol.ResultsetRow;
import com.sun.jersey.api.core.ResourceConfig;

import javax.servlet.ServletContextEvent;
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

    public static String TextToHTML(String text){
        text = text.replaceAll("&", "&amp;");
        text = text.replaceAll("<", "&lt;");
        text = text.replaceAll(">", "&gt;");
        text = text.replaceAll("\"", "&quot;");
        text = text.replaceAll("\n","<br>");
        text = text.replaceAll("\t", "&emsp;");
        return text;
    }
}