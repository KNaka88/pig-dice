function Player(name){
  this.name = name;
  this.totalScore = 0;
}

//Player Object (get name from user input)
var player1 = new Player("Calvin");
var player2 = new Player("Koji")

//global variables
var temporaryScore = 0;
var rollTotal = 0;
var hold = true;

function rollDice(){
  return 1 + Math.floor(Math.random() * 6);
}

do{
  temporaryScore = rollDice();
  alert(temporaryScore);

  rollTotal += temporaryScore;

  if(temporaryScore === 1){
    rollTotal = 0;
    hold = !hold;
  }
} while(hold)

alert("rollTotall:" + rollTotal);
