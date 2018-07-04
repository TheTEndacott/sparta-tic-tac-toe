$(function() {

  var turn = true;
  var board = [];
  // var zero = $('td[data-num="0"]');
  // var one = $('td[data-num="1"]');
  // var two = $('td[data-num="2"]');
  // var three = $('td[data-num="3"]');
  // var four = $('td[data-num="4"]');
  // var five = $('td[data-num="5"]');
  // var six = $('td[data-num="6"]');
  // var seven = $('td[data-num="7"]');
  // var eight = $('td[data-num="8"]');


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
      alert("Winner!")
    }else if (board[3] == "X" && board[4] == "X" && board[5] == "X" || board[3] == "O" && board[4] == "O" && board[5] == "O" ) {
      alert("Winner!")
    }else if (board[6] == "X" && board[7] == "X" && board[8] == "X" || board[6] == "O" && board[7] == "O" && board[8] == "O" ){
      alert("Winner!")
    }else if (board[2] == "X" && board[5] == "X" && board[8] == "X" || board[2] == "O" && board[5] == "O" && board[8] == "O" ){
      alert("Winner!")
    }else if (board[1] == "X" && board[4] == "X" && board[7] == "X" || board[1] == "O" && board[4] == "O" && board[7] == "O" ){
      alert("Winner!")
    }else if (board[0] == "X" && board[3] == "X" && board[6] == "X" || board[0] == "O" && board[3] == "O" && board[6] == "O" ){
      alert("Winner!")
    }else if (board[0] == "X" && board[4] == "X" && board[8] == "X" || board[0] == "O" && board[4] == "O" && board[8] == "O" ){
      alert("Winner!")
    }else if (board[2] == "X" && board[4] == "X" && board[6] == "X" || board[2] == "O" && board[4] == "O" && board[6] == "O" ){
      alert("Winner!")
    }
  }

  $("#reset").click(function(){
    $("td").removeClass("X").html("");
    $("td").removeClass("O").html("");
    $("h2").html("It is X's playerTurn");
  });


});