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
public class SignOutServlet extends HttpServlet {
    public void doGet(HttpServletRequest req, HttpServletResponse resp) throws IOException, ServletException{

        UserService userService = UserServiceFactory.getUserService();
        User currentUser = userService.getCurrentUser();

        if(currentUser != null)
            resp.sendRedirect(userService.createLogoutURL("/index.jsp"));
        else {
            resp.sendRedirect("/index.jsp");
        }
    }
}
