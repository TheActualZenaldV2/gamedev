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
speed = 1.0;
var userID;
var players = {};
var playersArray = [];

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
    const allPlayersRef = firebase.database().ref(`players`);
    userID = user.uid;
    
    requestAnimationFrame(mainLoop, 1000 / 60);
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    newX = x.toFixed(1);
newY = y.toFixed(1);
var database = firebase.database();


    

velY *= friction;
y += velY;
 velX *= friction;
x += velX;
//update firebase with the velX and velY values
database.ref('players/' + userID).update({
    
velX: velX.toFixed(1),
velY: velY.toFixed(1),
  
});



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
   // Declare an empty array to store the players
var playerArray = [];

for (var playerId in players) {
  var player = players[playerId];
  friction = 0.8;
  // Define player.x and y values to be what is in the database
  player.x = newX;
  player.y = newY;

  // Create a new object for each player and add it to the playerArray
  var playerObject = {
    id: playerId,
    x: player.x,
    y: player.y,
    color: player.color,
    name: player.name
  };
  playerArray.push(playerObject);

  // Draw the player
  ctx.fillStyle = "black";
  ctx.beginPath();
  ctx.arc(player.x, player.y, 25, 0, 2 * Math.PI);
  ctx.fill();
  ctx.fillStyle = "white";
  // Player fill code
  ctx.fillStyle = player.color;
  ctx.beginPath();
  ctx.arc(player.x, player.y, 20, 0, 2 * Math.PI);
  ctx.fill();

  // Calculate the angle between the mouse and the player
  var angle = Math.atan2(mouseY - player.y, mouseX - player.x);

  // (TURRET CODE)
  ctx.translate(player.x, player.y);
  ctx.rotate(angle);
  // Draw the turret
  ctx.fillStyle = "black";
  ctx.beginPath();
  ctx.rect(23, -3, 40, 12);
  ctx.fill();
  // Reset the rotation and translation
  ctx.rotate(-angle);
  ctx.translate(-player.x, -player.y);
  // Barrel code
  ctx.translate(player.x, player.y);
  ctx.rotate(angle);
  // Draw the rectangle for the barrel
  ctx.fillStyle = player.color;
  ctx.beginPath();
  ctx.rect(25, 0, 35, 6);
  ctx.fill();
  // Reset the rotation and translation
  ctx.rotate(-angle);
  ctx.translate(-player.x, -player.y);
  // (END OF TURRET CODE)

  // Get the name of the player and display it above
  ctx.font = "20px Arial";
  ctx.fillStyle = "white";
  ctx.fillText(player.name, player.x - 55, player.y - 30);
}


    // Define the player ID and the new X and Y values




 
}


//main game loop? 
(function () {

    let playerId;
    let playerRef;
    let playerElements = {};


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
        const database = firebase.database();
        
        allPlayersRef.on("value", (snapshot) => {
         console.log("players changed");
         
        
            //RUNS WHENEVER A CHANGE HAPPENS TO THE PLAYERS
            players = snapshot.val() || {};
            Object.keys(players).forEach((key) =>{
                const characterState = players[key];
                //let el = playerElements[key]; ??? what is this for?

            })
        });

        



        allPlayersRef.on("child_added", (snapshot) => {

            
                // Get the updated player data from the snapshot
                
                var players = snapshot.val();
                console.log(players);
                //draw all players
               mainLoop();
              

                

              
                
           
            
            //RUNS WHENEVER A PLAYER IS ADDED
            //get new player data object
            const addedPlayer = snapshot.val();
            //add new player to players array
            playersArray.push(addedPlayer);
          
            mainLoop();
          
            //playerElements[addedPlayer.id] = playerElement; ???? HOW DO I DO THIS 
          
            if (addedPlayer.id === playerId) {
              //if this is you, do this
              //z index latER???
            }
          });
          

        console.log("init success");
        
   
    }

    

firebase.auth().onAuthStateChanged((user) => {
    
    var database = firebase.database();
    console.log(user);
    //get the user's id

    console.log("User ID: " + user.uid);
    //store the user's id in variable
    var userID = user.uid;

//update the user's position every 1 millisecond
    setInterval(function(){
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
        velX: velX,
        velY: velY,
        score: 0,
      });
      //add player to the players array
        players[playerId] = {
            id: playerId,
            name: playerName,
            color: playerColor,
            x: x,
            y: y,
            score: 0,
        };
        console.log("Players:")
        console.log(players);
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

