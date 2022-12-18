const playerColors = ["blue", "red", "orange", "yellow", "green", "purple"];
//misc 
var ctx = document.getElementById("canvas").getContext("2d");
var playerColor = randomFromArray(playerColors);
//player name should be equal to the result of createName()
var playerName = createName();
var bulletArray = [];
var playerId;

//get the mouse position
var mouseX = 0,
mouseY = 0;
document.body.addEventListener("mousemove", function(e) {
mouseX = e.clientX;
mouseY = e.clientY;
canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    canvasWidth = canvas.width;
    canvasHeight = canvas.height;

});

var x = 150;
var y = 150;
velY = 0;
velX = 0;
friction = 0.8;
speed = 1.5;
var userID;

function randomFromArray(array) {
  return array[Math.floor(Math.random() * array.length)];
}

function getKeyString(x, y) {
  return '${x},${y}';
}

function createName() {
    const prefix = randomFromArray([
      "COOL",
      "SUPER",
      "HIP",
      "SMUG",
      "COOL",
      "SILKY",
      "GOOD",
      "SAFE",
      "DEAR",
      "DAMP",
      "WARM",
      "RICH",
      "LONG",
      "DARK",
      "SOFT",
      "BUFF",
      "DOPE",
    ]);
    const animal = randomFromArray([
      "BEAR",
      "DOG",
      "CAT",
      "FOX",
      "LAMB",
      "LION",
      "BOAR",
      "GOAT",
      "VOLE",
      "SEAL",
      "PUMA",
      "MULE",
      "BULL",
      "BIRD",
      "BUG",
    ]);
    return `${prefix} ${animal}`;
    
    
  }
  



  

  function mainLoop(){
    playerId = user
    playerRef = firebase.database().ref(`players/${playerId}`);
    //define user
    var user = firebase.auth().currentUser;

    
    requestAnimationFrame(mainLoop, 1000 / 60);
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    velY *= friction;
    y += velY;
    velX *= friction;
    x += velX;


    if (keys[87]) {
        if (velY > -speed) {
            velY--;
        }
    }
    if (keys[83]) {
        if (velY < speed) {
            velY++;
        }
    }
    if (keys[68]) {
        if (velX < speed) {
            velX++;
        }
    }
    if (keys[65]) {
        if (velX > -speed) {
            velX--;
        }
    }
   


    // Define the player ID and the new X and Y values

newX = x.toFixed(1);
newY = y.toFixed(1);
var database = firebase.database();



    


    



    
//q: how would I draw all the players in the game?
//a: I would use a for loop to iterate through the players object and draw each player


    //draw the player
    ctx.fillStyle = "black";
    ctx.beginPath();
    ctx.arc(x, y, 25, 0, 2 * Math.PI);
    ctx.fill();
    ctx.fillStyle = "white";
//player fill code
    
    ctx.fillStyle = playerColor;
    ctx.beginPath();
    ctx.arc(x, y, 20, 0, 2 * Math.PI);
    ctx.fill();



var angle = Math.atan2(mouseY - y, mouseX - x);

//(TURRET CODE)
    ctx.translate(x, y);
    ctx.rotate(angle);
//draw the turret
    ctx.fillStyle = "black";
    ctx.beginPath();
    ctx.rect(23, -3,40, 12);
    ctx.fill();
//reset the rotation and translation
ctx.rotate(-angle);
ctx.translate(-x, -y);
//barrel code
ctx.translate(x, y);
ctx.rotate(angle);
//draw the rectangle for the barrel
ctx.fillStyle = playerColor;
ctx.beginPath();
ctx.rect(25, 0, 35, 6);
ctx.fill();
//reset the rotation and translation
ctx.rotate(-angle);
ctx.translate(-x, -y);
//(END OF TURRET CODE)

//get the name of the player and display it above the player
ctx.font = "20px Arial";
ctx.fillStyle = "white";
ctx.fillText(playerName, x - 55, y - 30);





}


//main game loop? 
(function () {

    let playerId;
    let playerRef;
    let playerElements = {};
    let players = {};


    //function handleMovement(xChange=0, yChange=0) {
        //const newX = x + xChange;
        //const newY = y + yChange;
        //collision detection
        //if(true){
            //move to next space???
           // players[playerId].x = newX;
           // players[playerId].y = newY;
           // playerRef.set(players[playerId]);
       // }
    //}


    function initGame() {
        //on w key, fire handle movement 
        //document.body.addEventListener("keydown", function(e) {
           // if(e.keyCode === 87) {
               // handleMovement(0, -1);
           // }
            //if(e.keyCode === 83) {
                //handleMovement(0, 1);
         //   }
            //if(e.keyCode === 65) {
              //  handleMovement(-1, 0);
         //   }
           // if(e.keyCode === 68) {
                //handleMovement(1, 0);
           // }
       // });
        const allPlayersRef = firebase.database().ref(`players`);
        const allBlocksRef = firebase.database().ref(`blocks`);
        
        allPlayersRef.on("value", (snapshot) => {
            //RUNS WHENEVER A CHANGE HAPPENS TO THE PLAYERS
            players = snapshot.val() || {};
            Object.keys(players).forEach((key) =>{
                const characterState = players[key];
                //let el = playerElements[key]; ??? what is this for?

            })
        });

        allPlayersRef.on("child_added", (snapshot) => {
            //RUNS WHENEVER A PLAYER IS ADDED
            //get new player data object
            const addedPlayer = snapshot.val()
            //add new player to players object
            players[addedPlayer.id] = addedPlayer;
             mainLoop();
            
            console.log(players);
            //playerElements[addedPlayer.id] = playerElement; ???? HOW DO I DO THIS 




            

            
            if(addedPlayer.id === playerId) {
                //if this is you, do this 
                //z index latER??? 
            }

        });

        console.log("game started");
        
   
    }

    

   //update the player's position in firebase
firebase.auth().onAuthStateChanged((user) => {
    
    var database = firebase.database();
    console.log(user);
    //get the user's id

    console.log(user.uid);
    //store the user's id in variable
    var userID = user.uid;


    setInterval(function(){
        //get the user ID from the variable, and store new X and Y values in firebase under the user ID
database.ref('players/' + userID).update({
    
    x: newX,
    y: newY,
    
});

    }, 1);

    
    
  
    if(user) {
      playerId = user.uid;
      playerRef = firebase.database().ref(`players/${playerId}`);
      const name = createName();
  
      //SEND THIS TO FIREBASE
      playerRef.set({
        id: playerId,
        name: playerName,
        color: playerColor,
        x: x,
        y: y,
        score: 0,
      });
  
      playerRef.onDisconnect().remove();
  
      //START GAME   
      initGame();
    } else {
      //user is not signed in
    }
  });
  
  firebase.auth().signInAnonymously().catch((error) => {
    var errorCode = error.code;
    var errorMessage = error.message;
    console.log(errorCode, errorMessage);
  });

})();


