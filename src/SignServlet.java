
import java.io.IOException;
import java.sql.Connection;
import java.sql.DriverManager;
import java.util.logging.*;
import javax.servlet.RequestDispatcher;
import javax.servlet.ServletContext;
import javax.servlet.ServletException;
import javax.servlet.http.*;

import com.google.appengine.api.users.User;
import com.google.appengine.api.users.UserService;
import com.google.appengine.api.users.UserServiceFactory;

import com.google.appengine.api.utils.SystemProperty;



@SuppressWarnings("serial")
public class SignServlet extends HttpServlet {
    private static final Logger log = Logger.getLogger(SignServlet.class.getName());

    public void doGet(HttpServletRequest req,
                      HttpServletResponse resp)
            throws IOException, ServletException {



        UserService userService = UserServiceFactory.getUserService();
        User currentUser = userService.getCurrentUser();

        String url = null;
        String dbdriver = null;
        ServletContext context = req.getSession().getServletContext();

        try {
            if (SystemProperty.environment.value() ==
                    SystemProperty.Environment.Value.Production) {
                // Load the class that provides the new "jdbc:google:mysql://" prefix.
                Class.forName("com.mysql.jdbc.GoogleDriver");
                url = "jdbc:google:mysql://jd-tictactoe:tictactoedb/tictactoedb";
                dbdriver = "com.mysql.jdbc.GoogleDriver";
            } else {
                // Local MySQL instance to use during development.
                Class.forName("com.mysql.jdbc.Driver");
                url = "jdbc:mysql://173.194.104.174:3306/tictactoedb";
                dbdriver = "com.mysql.jdbc.Driver";
            }

            context.setAttribute("dbdriver", dbdriver);
            context.setAttribute("url", url);

        } catch (Exception e) {
            e.printStackTrace();
            return;
        }

        if(currentUser == null)
            resp.sendRedirect(userService.createLoginURL("/home.jsp"));
        else {
            context.setAttribute("currentUser", currentUser);
            resp.sendRedirect("/home.jsp");
        }
        //resp.setContentType("text/html");

        //RequestDispatcher jsp = req.getRequestDispatcher("/home.jsp");
        //jsp.forward(req, resp);
    }
}
