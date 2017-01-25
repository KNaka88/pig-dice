$(document).ready(function(){
  //Global Variables
  var temporaryScore = 0;
  var temporaryPlayer;
  var rollTotal = 0;
  var hold = true;
  var win = true;



  //Roll Loop Function
  var rollLoop = function(){
    rollTotal = 0;

    do{
      temporaryScore = rollDice();
      alert(temporaryScore);

      rollTotal += temporaryScore;

      if(temporaryScore === 1 ){
        rollTotal = 0;
        hold = !hold;
        break;
      }else{
        hold = confirm("Do you want to conitinue?");
      }
    } while(hold)

    alert("Roll Total:" + rollTotal);
    return rollTotal;
  }
  //////


  //Constructor
  function Player(name){
    this.name = name;
    this.totalScore = 0;
  }

  //Computer function
  function Robot(Player, skills){
    this.Player = Player;
    this.skills = skills;
  }


//////
  $("#playByOne").click(function(){
      $("#start-menu").hide();
      $("#entry-form").show();
      $("#player2").hide();

      $("form#nameInput").submit(function(event) {
        var namePlayer1 = $("#name1").val();
        var namePlayer2 = $("#name2").val();
        var nameComputer = $("#compName").val();
        var playTo = parseInt($("#playTo").val());
        alert(playTo);

        var player1 = new Player(namePlayer1);
        var player2 = new Player(namePlayer2);

        playGame(player1, player2, playTo);
        event.preventDefault();
      });
  });

  $("#playByTwo").click(function(){
    $("#start-menu").hide();
    $("#entry-form").show();
    $("#computerName").hide();

    $("form#nameInput").submit(function(event) {
      var namePlayer1 = $("#name1").val();
      var namePlayer2 = $("#name2").val();
      var nameComputer = $("#compName").val();
      var playTo = parseInt($("#playTo").val());
      alert(playTo);

      var player1 = new Player(namePlayer1);
      var player2 = new Player(namePlayer2);

      playGame(player1, player2, playTo);
      event.preventDefault();
    });
  });



  //Roll Dice Function
  function rollDice(){
    return 1 + Math.floor(Math.random() * 6);
  }

//play game function
  var playGame = function(player1, player2, playTo){
      do {
        //player1
        alert(player1.name + ", your turn.");
        player1.totalScore += rollLoop();
        alert(player1.name + "'s total score: " + player1.totalScore );
        if(player1.totalScore >= playTo){
          win = false;
          alert(player1.name + " win!!");
          break;
        }

        //player2
        alert(player2.name + ", your turn.");
        player2.totalScore += rollLoop();
        alert(player2.name + "'s total score: " + player2.totalScore );
        if(player2.totalScore >= playTo){
          win = false;
          alert(player2.name + " win!!");
          break;
        }
      }while(player1.totalScore < playTo  && player2.totalScore < playTo);

  };

event.preventDefault();


  //User Interface Logics




});
