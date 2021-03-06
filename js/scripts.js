$(document).ready(function(){
  //Global Variables
  var temporaryScore = 0;
  var temporaryPlayer;
  var rollTotal = 0;
  var hold = true;
  var win = true;
  //var temporaryRollTotal = 0;


  var comRollLoop = function(player1, player2){
    rollTotal = 0;
    alert("comRollLoop called");

    do{
      hold = true;
      temporaryScore = rollDice();
      alert(temporaryScore);

      rollTotal += temporaryScore;

      if(temporaryScore === 1 ){
        rollTotal = 0;
        hold = false;
        break;
      }else if(player2.skills === "safe" || player2.skills === "competitive" || player2.skills === "ambitious"){
        choosePersonality(player1, player2);
      }else{
        hold = confirm("Do you want to conitinue?");
      }
    } while(hold)

    alert("Roll Total:" + rollTotal);
    return rollTotal;
  }
  //Roll Loop Function
  var playerRollLoop = function(){
    rollTotal = 0;
        alert("playerRollLoop called");

    do{
      hold = true;
      temporaryScore = rollDice();
      alert(temporaryScore);

      rollTotal += temporaryScore;

      if(temporaryScore === 1 ){
        rollTotal = 0;
        hold = false;
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
    this.skills = "";
  }

  // //Computer function
  // function Robot(name, skills){
  //   this.name = name;
  //   this.totalScore = 0;
  //
  // }


//////Sole Game
  $("#playByOne").click(function(){
      $("#start-menu").hide();
      $("#entry-form").show();
      $("#player2").hide();

      $("form#nameInput").submit(function(event) {
        var namePlayer1 = $("#name1").val();
        var namePlayer2 = $("#name2").val();
        var nameComputer = $("#compName").val();
        var computerSkill = $("input:radio[name=personality]:checked").val();
        alert(computerSkill);
        var playTo = parseInt($("#playTo").val());
        alert(playTo);

        var player1 = new Player(namePlayer1);
        var player2 = new Player(nameComputer);
        player2.skills = computerSkill;
        alert(player2.skills);
        playGame(player1, player2, playTo);
        event.preventDefault();
      });
  });

//Multi Player Game
  $("#playByTwo").click(function(){
    $("#start-menu").hide();
    $("#entry-form").show();
    $("#computerName").hide();
    $("#personalities").hide();

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


//////////Computer Personality

  var safe = function(player1, player2) {
    if(  5 < rollTotal){
      hold = false;
      alert("Computer chose Hold");
    }
  }

  var competitive = function(player1, player2) {
    if(player1.totalScore <= (rollTotal + player2.totalScore)){
      hold = false;
      alert("Computer chose Hold");
    }
  }

  var ambitious = function(player1, player2) {
    if(  10 < rollTotal){
      hold = false;
      alert("Computer chose Hold");
    }
  }

  var choosePersonality = function(player1, player2){
    switch (player2.skills){
      case "safe":
        safe(player1, player2);
        break;
      case "competitive":
        competitive(player1, player2);
        break;
      case "ambitious":
        ambitious(player1, player2);
        break;
      default:
        return false;
    }
  }


///////////////////////


  //Roll Dice Function
  function rollDice(){
    return 1 + Math.floor(Math.random() * 6);
  }

//play game function
  var playGame = function(player1, player2, playTo){
      do {
        //player1
        alert(player1.name + ", your turn.");
        player1.totalScore += playerRollLoop();
        alert(player1.name + "'s total score: " + player1.totalScore );
        if(player1.totalScore >= playTo){
          win = false;
          alert(player1.name + " win!!");
          break;
        }

        //player2
        alert(player2.name + ", your turn.");
        player2.totalScore += comRollLoop(player1, player2);
        alert(player2.name + "'s total score: " + player2.totalScore );
        if(player2.totalScore >= playTo){
          win = false;
          alert(player2.name + " win!!");
          break;
        }
      }while(player1.totalScore < playTo  && player2.totalScore < playTo);

  };







});
