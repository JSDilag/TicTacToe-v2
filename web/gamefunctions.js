var t1;
var t2;
var t3;
var t4;
var t5;
var t6;
var t7;
var t8;
var t9;

var theresAWinner = false;
//var notify = document.getElementById("notify");

var playersTurnFirst;
playersTurnFirst = false;
var computersShape;
var playersShape;
var tilesUsed = 0;

$(document).ready(function() {


    
    var not = document.getElementById("notify");

    $('#tic1').click(function () {
        if(t1 == null){
        $(this).css('background-image', 'url(stylesheet/' + playersShape + '.png)');
        t1 = playersShape;
        checkWin();
        
        tilesUsed = tilesUsed + 1;
        computersTurn();
        
        }
    });
     $('#tic2').click(function () {
         if(t2 == null){
         $(this).css('background-image', 'url(stylesheet/' + playersShape + '.png)');
         t2 = playersShape;
         checkWin();
         
         tilesUsed = tilesUsed + 1;
         computersTurn();
         }
     });
     $('#tic3').click(function () {
         if(t3 == null){
         $(this).css('background-image', 'url(stylesheet/' + playersShape + '.png)');
         t3 = playersShape;
         checkWin();
         
         tilesUsed = tilesUsed + 1;
         computersTurn();
         }
     });
     $('#tic4').click(function () {
         if(t4 == null){
         $(this).css('background-image', 'url(stylesheet/' + playersShape + '.png)');
         t4 = playersShape;
         checkWin();
         
         tilesUsed = tilesUsed + 1;
         computersTurn();
         }
     });
     $('#tic5').click(function () {
         if(t5 == null){
         $(this).css('background-image', 'url(stylesheet/' + playersShape + '.png)');
         t5 = playersShape;
         checkWin();
         
         tilesUsed = tilesUsed + 1;
         computersTurn();
         }
     });
     $('#tic6').click(function () {
         if(t6 == null){
         $(this).css('background-image', 'url(stylesheet/' + playersShape + '.png)');
         t6 = playersShape;
         checkWin();
         
         tilesUsed = tilesUsed + 1;
         computersTurn();
         }
     });
     $('#tic7').click(function () {
         if(t7 == null){
         $(this).css('background-image', 'url(stylesheet/' + playersShape + '.png)');
         t7 = playersShape;
        checkWin();
         
         tilesUsed = tilesUsed + 1;
         computersTurn();
         }
     });
     $('#tic8').click(function () {
         if(t8 == null){
         $(this).css('background-image', 'url(stylesheet/' + playersShape + '.png)');
         t8 = playersShape;
             
         checkWin();
         tilesUsed = tilesUsed + 1;
         computersTurn();
         }
     });
     $('#tic9').click(function () {
         if(t9 == null){
         $(this).css('background-image', 'url(stylesheet/' + playersShape + '.png)');
         t9 = playersShape;
         checkWin();
         
         tilesUsed = tilesUsed + 1;
         computersTurn();
         }
     });


});


    function newGame(){

        delayGame();

        $('#tic1').css('background-image', 'none');
        $('#tic2').css('background-image', 'none');
        $('#tic3').css('background-image', 'none');
        $('#tic4').css('background-image', 'none');
        $('#tic5').css('background-image', 'none');
        $('#tic6').css('background-image', 'none');
        $('#tic7').css('background-image', 'none');
        $('#tic8').css('background-image', 'none');
        $('#tic9').css('background-image', 'none');

        t1 = t2 = t3 = t4 = t5 = t6 = t7 = t8 = t9 = null;

        tilesUsed = 0;
        theresAWinner = false;

        

    }

     function computersTurn(){
         var compTurnUsed = false;
         var not = document.getElementById("notify");
         var turndelay;
         if(!theresAWinner) {
             not.innerHTML = "...";
             turndelay = setTimeout(function() {
                 while (!compTurnUsed && tilesUsed < 9) {
                     var random = Math.floor(Math.random() * 9) + 1;
                     if (random == 1 && t1 == null) {
                         $('#tic1').css('background-image', 'url(stylesheet/' + computersShape + '.png)');
                         t1 = computersShape;
                         compTurnUsed = true;
                         not.innerHTML = "Your Turn!";
                     }
                     if (random == 2 && t2 == null) {
                         $('#tic2').css('background-image', 'url(stylesheet/' + computersShape + '.png)');
                         t2 = computersShape;
                         compTurnUsed = true;
                         not.innerHTML = "Your Turn!";
                     }
                     if (random == 3 && t3 == null) {
                         $('#tic3').css('background-image', 'url(stylesheet/' + computersShape + '.png)');
                         t3 = computersShape;
                         compTurnUsed = true;
                         not.innerHTML = "Your Turn!";
                     }
                     if (random == 4 && t4 == null) {
                         $('#tic4').css('background-image', 'url(stylesheet/' + computersShape + '.png)');
                         t4 = computersShape;
                         compTurnUsed = true;
                         not.innerHTML = "Your Turn!";
                     }
                     if (random == 5 && t5 == null) {
                         $('#tic5').css('background-image', 'url(stylesheet/' + computersShape + '.png)');
                         t5 = computersShape;
                         compTurnUsed = true;
                         not.innerHTML = "Your Turn!";
                     }
                     if (random == 6 && t6 == null) {
                         $('#tic6').css('background-image', 'url(stylesheet/' + computersShape + '.png)');
                         t6 = computersShape;
                         compTurnUsed = true;
                         not.innerHTML = "Your Turn!";
                     }
                     if (random == 7 && t7 == null) {
                         $('#tic7').css('background-image', 'url(stylesheet/' + computersShape + '.png)');
                         t7 = computersShape;
                         compTurnUsed = true;
                         not.innerHTML = "Your Turn!";
                     }
                     if (random == 8 && t8 == null) {
                         $('#tic8').css('background-image', 'url(stylesheet/' + computersShape + '.png)');
                         t8 = computersShape;
                         compTurnUsed = true;
                         not.innerHTML = "Your Turn!";
                     }
                     if (random == 9 && t9 == null) {
                         $('#tic9').css('background-image', 'url(stylesheet/' + computersShape + '.png)');
                         t9 = computersShape;
                         compTurnUsed = true;
                         not.innerHTML = "Your Turn!";
                     }

                 }
             }, 1500);
             tilesUsed = tilesUsed + 1;

             checkWin();
         }
     }



     function checkWin() {
         var not = document.getElementById("notify");
         if (t1 == t2 && t1 == t3 && t1 != null) {
             if (t1 == playersShape) {
                 addWin();
                 not.innerHTML = "You Win!";
             } else {
                 not.innerHTML = "Computer Wins!";
             }
             theresAWinner = true;
         }
     
         if(t4 == t5 && t4 == t6 && t4 != null){
             if(t4 == playersShape){
                 addWin();
                 document.getElementById("notify").innerHTML = "You Win!";
             }else{
                 document.getElementById("notify").innerHTML = "Computer Wins!";
             }
             theresAWinner = true;
         }
         if(t7 == t8 && t7 == t9 && t7 != null){
             if(t7 == playersShape){
                 addWin();
                 document.getElementById("notify").innerHTML = "You Win!";
             }else{
                 document.getElementById("notify").innerHTML = "Computer Wins!";
             }
             theresAWinner = true;
             
         }
         if(t1 == t4 && t7 == t1 && t1 != null){
             if(t1 == playersShape){
                 addWin();
                 document.getElementById("notify").innerHTML = "You Win!";
             }else{
                 document.getElementById("notify").innerHTML = "Computer Wins!";
             }
             theresAWinner = true;
             
         }
         if(t2 == t5 && t2 == t8 && t2 != null){
             if(t2 == playersShape){
                 addWin();
                 document.getElementById("notify").innerHTML = "You Win!";
             }else{
                 document.getElementById("notify").innerHTML = "Computer Wins!";
             }
             theresAWinner = true;
             
         }
         if(t3 == t6 && t3 == t9 && t3 != null){
             if(t3 == playersShape){
                 addWin();
                 document.getElementById("notify").innerHTML = "You Win!";
             }else{
                 document.getElementById("notify").innerHTML = "Computer Wins!";
             }
             theresAWinner = true;
             
         }
         if(t1 == t5 && t1 == t9 && t1 != null){
             if(t1 == playersShape){
                 addWin();
                 document.getElementById("notify").innerHTML = "You Win!";
             }else{
                 document.getElementById("notify").innerHTML = "Computer Wins!";
             }
             theresAWinner = true;
             
         }
         if(t3 == t5 && t3 == t7 && t3 != null){
             if(t3 == playersShape){
                 addWin();
                 document.getElementById("notify").innerHTML = "You Win!";
             }else{
                 document.getElementById("notify").innerHTML = "Computer Wins!";
             }
             theresAWinner = true;
             
         }
         if (tilesUsed >= 9 && !theresAWinner) {
             not.innerHTML = "It's A Draw!";
         }
     }


    function addWin(){
        var url = "/win";
        var req = new XMLHttpRequest();
        req.open("GET", url, true);
        req.send(null);

    }

    function delayGame(){
        $('#gameTable').css('visibility', 'hidden');
        var not = document.getElementById("notify");
        var cd1 = setTimeout(function() { not.innerHTML = "5..." ; }, 0);
        var cd2 = setTimeout(function() { not.innerHTML = "4..." ; }, 1000);
        var cd3 = setTimeout(function() { not.innerHTML = "3..." ; }, 2000);
        var cd4 = setTimeout(function() { not.innerHTML = "2..." ; }, 3000);
        var cd5 = setTimeout(function() { not.innerHTML = "1..." ; }, 4000);
        var cd6 = setTimeout(function() { $('#gameTable').css('visibility', 'visible'); }, 5000);
        var cd7 = setTimeout(function(){
        if(playersTurnFirst){
            playersTurnFirst = false;
            playersShape = 'o';
            computersShape = 'x';

            not.innerHTML = "Computer's Turn";
            computersTurn();
            
        }else{
            playersTurnFirst = true;
            playersShape = 'x';
            computersShape = 'o';
            not.innerHTML = "Your Turn!";

        }}, 5050);
    }
    



    


