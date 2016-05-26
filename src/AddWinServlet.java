import javax.servlet.ServletContext;
import javax.servlet.ServletException;
import javax.servlet.http.*;


import com.google.appengine.api.users.User;
import com.google.appengine.api.users.UserService;
import com.google.appengine.api.users.UserServiceFactory;
import com.google.appengine.api.utils.SystemProperty;

import java.io.IOException;
import java.sql.*;



public class AddWinServlet extends HttpServlet {
    public void doGet(HttpServletRequest req, HttpServletResponse resp) throws IOException, ServletException {

        //printWriter out = response.getWriter();
        try {
            UserService userService = UserServiceFactory.getUserService();
            User user = userService.getCurrentUser();


            ServletContext context = getServletContext();
            String url = context.getAttribute("url").toString();

            Connection conn = DriverManager.getConnection(url, "root", "bluesclues");

            System.out.println("connection works user = '" +  user + "'");
            ResultSet rs = conn.createStatement().executeQuery(
                    "SELECT * FROM Leaderboards WHERE Player='" + user + "';"
            );

            if(rs.next()){
                conn.createStatement().executeUpdate(
                        "UPDATE Leaderboards SET Wins = Wins + 1 WHERE Player='" + user + "';"
                );

            }else{
                conn.createStatement().executeUpdate(
                        "INSERT INTO Leaderboards VALUES ('" + user + "', 1);"
                );
            }

            conn.close();
        } catch (Exception e) {
            e.printStackTrace();

            resp.sendRedirect("/home.jsp");
//            return;

        }

//        resp.sendRedirect("/home.jsp");
    }
}
