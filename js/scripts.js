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


  //Player Object (get name from user input)
  var player1 = new Player("Calvin");
  var player2 = new Player("Koji");



  //Roll Dice Function
  function rollDice(){
    return 1 + Math.floor(Math.random() * 6);
  }





  //User Interface Logics

    // do{
    //   rollLoop();
    // } while(player1.totalScore <=10)


  do {
    //player1
    alert(player1.name + ", your turn.");
    player1.totalScore += rollLoop();
    alert(player1.name + "'s total score: " + player1.totalScore );
    if(player1.totalScore >= 20){
      win = false;
      alert(player1.name + " win!!");
      break;
    }

    //player2
    alert(player2.name + ", your turn.");
    player2.totalScore += rollLoop();
    alert(player2.name + "'s total score: " + player2.totalScore );
    if(player2.totalScore >= 20){
      win = false;
      alert(player2.name + " win!!");
      break;
    }
  }while(player1.totalScore < 20  && player2.totalScore < 20);


});
