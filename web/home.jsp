<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
<%@ page contentType="text/html;charset=UTF-8" language="java" %>

<html>
<head>
    <title>Tic Tac Toe</title>

    <link rel="stylesheet" href="stylesheet/main.css">
    <link rel="stylesheet" href="stylesheet/animate.css">
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.12.4/jquery.min.js"></script>

    <script type="text/javascript" src="gamefunctions.js"></script>

</head>
<body>
<div id="homediv">
    <div id="navdiv">
        <div style="height: 35%; font-size: 60px;">
            Tic </br>
            &nbsp;&nbsp;&nbsp;&nbsp;Tac </br>
            Toe </br>
        </div>
        </br>

        <button id="navButton" onclick="newGame();">New Game</button>

        <form action="/leaderboards.jsp">
            <button id="navButton">Leaderboards</button>
        </form>
        <form action="/signout">
            <button id="navButton">Sign Out</button>
        </form>
    </div>
    <div id="tablediv">
        <table id="gameTable">
            <tr>
                <td id="tic1" style="border-left: 0; border-top: 0;"></td>
                <td id="tic2" style="border-top: 0;"></td>
                <td id="tic3" style="border-top: 0; border-right: 0;"></td>
            </tr>
            <tr><td id="tic4" style="border-left: 0;"></td>
                <td id="tic5"></td>
                <td id="tic6" style="border-right: 0;"></td>
            </tr>
            <tr><td id="tic7" style="border-left: 0; border-bottom: 0;"></td>
                <td id="tic8" style="border-bottom: 0;"></td>
                <td id="tic9" style="border-bottom: 0; border-right: 0;"></td>
            </tr>
        </table>

        <p id="notify">click New Game to start</p>


    </div>
</div>

</body>
</html>
