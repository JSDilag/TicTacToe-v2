<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/sql" prefix="sql"%>
<!DOCTYPE html>
<html>
<head>
    <title>Tic Tac Toe</title>
    <link rel="stylesheet" href="stylesheet/main.css">
    <link rel="stylesheet" href="stylesheet/animate.css">
    <link href='https://fonts.googleapis.com/css?family=Dosis:400,500,600' rel='stylesheet' type='text/css'>
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.12.4/jquery.min.js"></script>

    <script>
        $(document).ready(function(){
            $('#leaderboardstitle').addClass('animated bounceInDown');
            $('#leaderboardsTable').addClass('animated bounceInDown');
            $('#playButton').addClass('animated bounceInDown');
        });

    </script>


</head>
<body>


<h1 id="leaderboardstitle">Leaderboards</h1>


<sql:setDataSource var="tttdb" driver = "${applicationScope['dbdriver']}" url="${applicationScope['url']}"
                   user="root" password="bluesclues"/>

<sql:query dataSource="${tttdb}" var="result">
    SELECT * FROM Leaderboards ORDER BY Wins DESC;
</sql:query>

<table id="leaderboardsTable">
    <tr>
        <th style="width:75%;">Player</th>
        <th style="width: 25%;">Wins</th>
    </tr>
    <c:forEach var="row" items="${result.rows}">
        <tr>
            <td><c:out value="${row.Player}"/></td>
            <td><c:out value="${row.Wins}"/></td>
        </tr>
    </c:forEach>
</table>
<div style="text-align: center;">
    <form action="/home.jsp">
        <button id="playButton" style="height: 70px;">Play More?</button>
    </form>
</div>
</br>


<br/>


</body>
</html>
