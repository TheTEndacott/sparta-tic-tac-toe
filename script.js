$(function() {

  var turn = true;
  var board = [];
  var tbl = $("table");


  $("td").click(function(){
    if (turn == true){
      $(this).addClass("X").html("X");
      $("h2").html("It is O's turn");
      $("td").each(boardFiller);
      turn = false;
    } else if (turn == false) {
      $(this).addClass("O").html("O");
      $("h2").html("It is X's turn");
      $("td").each(boardFiller);
      turn = true;
    }
  });

  function boardFiller(index, block){
    board[index] = $(this).html();
    checkWin()
  }

  function checkWin(){
    if (board[0] == "X" && board[1] == "X" && board[2] == "X" || board[0] == "O" && board[1] == "O" && board[2] == "O") {
      $("table").html("<h1>WINNER WINNER CHICKEN DINNER</h1>").css("color", "green");
    }else if (board[3] == "X" && board[4] == "X" && board[5] == "X" || board[3] == "O" && board[4] == "O" && board[5] == "O" ) {
      $("table").html("<h1>WINNER WINNER CHICKEN DINNER</h1>").css("color", "green");
    }else if (board[6] == "X" && board[7] == "X" && board[8] == "X" || board[6] == "O" && board[7] == "O" && board[8] == "O" ){
      $("table").html("<h1>WINNER WINNER CHICKEN DINNER</h1>").css("color", "green");
    }else if (board[2] == "X" && board[5] == "X" && board[8] == "X" || board[2] == "O" && board[5] == "O" && board[8] == "O" ){
      $("table").html("<h1>WINNER WINNER CHICKEN DINNER</h1>").css("color", "green");
    }else if (board[1] == "X" && board[4] == "X" && board[7] == "X" || board[1] == "O" && board[4] == "O" && board[7] == "O" ){
      $("table").html("<h1>WINNER WINNER CHICKEN DINNER</h1>").css("color", "green");
    }else if (board[0] == "X" && board[3] == "X" && board[6] == "X" || board[0] == "O" && board[3] == "O" && board[6] == "O" ){
      $("table").html("<h1>WINNER WINNER CHICKEN DINNER</h1>").css("color", "green");
    }else if (board[0] == "X" && board[4] == "X" && board[8] == "X" || board[0] == "O" && board[4] == "O" && board[8] == "O" ){
      $("table").html("<h1>WINNER WINNER CHICKEN DINNER</h1>").css("color", "green");
    }else if (board[2] == "X" && board[4] == "X" && board[6] == "X" || board[2] == "O" && board[4] == "O" && board[6] == "O" ){
      $("table").html("<h1>WINNER WINNER CHICKEN DINNER</h1>").css("color", "green");
    }
  }

  $("#reset").click(function(){
    location.reload();
  });


});