$(function() {

  var turn = true;
  var winPos = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [2,5,8],
    [1,4,7],
    [0,3,6],
    [0,4,8],
    [2,4,6]
  ]

  $("td").click(function(){
    if (turn == true){
      $(this).addClass("X").html("<span>X</span>");
      $("h2").html("It is O's turn");
      turn = false;
    } else if (turn == false) {
      $(this).addClass("O").html("<span>O</span>");
      $("h2").html("It is X's turn");
      turn = true;
    }
  });



















});