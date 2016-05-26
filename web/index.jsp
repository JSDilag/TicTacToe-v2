<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
<%@ page contentType="text/html;charset=UTF-8" language="java" %>

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
      $('#tic').addClass('animated slideInRight');
      $('#tac').addClass('animated slideInLeft');
      $('#toe').addClass('animated slideInRight');
    });

  </script>



</head>
<body>


<h1 id="tic">Tic</h1>
<h1 id="tac">Tac</h1>
<h1 id="toe">Toe</h1>

<!--<a href="/home">Play</a>-->

<div id="buttonDiv">
  <form action="/home">
    <button id="playButton"><b>Play</b></button>
  </form>
</div>

<br/>


</body>
</html>
