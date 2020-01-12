package at.schaefer.david.rest;

import javax.servlet.ServletContextEvent;
import javax.servlet.ServletContextListener;
import javax.servlet.annotation.WebListener;
import java.util.logging.Logger;

@WebListener
public class StartupListener implements ServletContextListener {

    protected static final Logger LOGGER = Logger.getLogger(StartupListener.class.getName());


    @Override
    public void contextInitialized(ServletContextEvent event) {
        Globals.init();
    }

    @Override
    public void contextDestroyed(ServletContextEvent event) {
        System.out.println("--------------------------------------------------------------------------------------------------------");
    }
}
