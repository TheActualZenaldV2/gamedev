 function changeSever() {
      //relocate to new server
      window.location.href = "https://theactualzenaldv2.github.io/gamedev/public2/finalProject/1v1.html";

    }
    let walls = [];

    gameStart = false;
function changeColor() {
  console.log("wiggles doesnt feel like making this work rn")
}

    
    let playerColor = "black";
    // Initialize Firebase (replace with your own config)
    const firebaseConfig = {
  apiKey: "AIzaSyCqcATbqZWCGL2bYsUlcE4AVPDjh0Ihpf8",
  authDomain: "multiplayerdemo-ee607.firebaseapp.com",
  databaseURL: "https://multiplayerdemo-ee607-default-rtdb.firebaseio.com",
  projectId: "multiplayerdemo-ee607",
  storageBucket: "multiplayerdemo-ee607.appspot.com",
  messagingSenderId: "568627344570",
  appId: "1:568627344570:web:0d0bd1ae88cae0d64fbe83",
  measurementId: "G-0J3QLW800P"
};

firebase.initializeApp(firebaseConfig);





//get the mouse position
var mouseX = 0,
mouseY = 0;

document.body.addEventListener("mousemove", function(e) {
mouseX = e.clientX;
mouseY = e.clientY;

let userId = null;




});

var timer = 0;

setInterval(function() {
  timer++;
}, 1000);


    // Get a reference to the canvas and canvas ctx
    var canvas = document.getElementById("myCanvas");
    var ctx = canvas.getContext("2d");
    var allPlayersRef = firebase.database().ref("players");

    // Get a reference to the players database
    var playersRef = firebase.database().ref("players");
    //set canvas height to window height
    canvas.height = window.innerHeight;
    //set canvas width to window width
    canvas.width = window.innerWidth;

    // Set up listeners to draw and remove players as they are added or removed from the database
    playersRef.on("child_added", function(snapshot) {
      var player = snapshot.val();
      drawPlayer(player.x, player.y, snapshot.key);
    });
    playersRef.on("child_removed", function(snapshot) {
  var player = snapshot.val();
  clearPlayer(player.x, player.y, snapshot.key);

});
allPlayersRef.on("value", function(snapshot) {
  // Clear the canvas
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  // Get the players object
  var players = snapshot.val();

  // Loop through the players object and draw each player
  for (var key in players) {
    var player = players[key];
    var name = document.getElementById("name").value;
    if(name.value == ""){
    
    name = "I'm too dumb to give myself a name"
  }

    drawPlayer(player.x, player.y, key, player.angle, player.Name, player.health);
  }


});

function clearPlayers() {
  // Get a list of all players in the database
  playersRef.once("value", function(snapshot) {
    snapshot.forEach(function(childSnapshot) {
      var key = childSnapshot.key;
      var player = childSnapshot.val();

      // If the player is not the current user, delete them from the screen and the database
      if (key !== userId) {
        // Delete the player from the screen
        ctx.clearRect(player.x - 10, player.y - 10, 20, 20);

        // Delete the player from the database
        playersRef.child(key).remove();
      }
    });
  });
}

function spectate() { 
  document.getElementById("myCanvas").style.display = "block";
    document.getElementById("menuHolder").style.display = "none";
    //disable body overflow
    document.body.style.overflow = "hidden";

   
  // Disable movement
  document.body.removeEventListener("mousemove", function(e) {
    mouseX = e.clientX;
    mouseY = e.clientY;
  });

  // Set up listeners to draw and remove players as they are added or removed from the database
  playersRef.on("child_added", function(snapshot) {
    var player = snapshot.val();
    drawPlayer(player.x, player.y, snapshot.key);
  });
  playersRef.on("child_removed", function(snapshot) {
    var player = snapshot.val();
    clearPlayer(player.x, player.y, snapshot.key);
  });

}


function addPlayer() {
  drawMap();
  var name = document.getElementById("name").value;
 

  if(name.length > 15){
    name = "🤡🤡🤡🤡🤡";
}

if(name == ""){
    
    name = "I'm too dumb to give myself a name"
  }
  document.getElementById("myCanvas").style.display = "block";
    document.getElementById("menuHolder").style.display = "none";
    //disable body overflow
    document.body.style.overflow = "hidden";
    var spawn = Math.floor(Math.random() * 4);
var spawnX, spawnY;
if (spawn == 0) {
  spawnX = window.innerWidth / 2.5;
  spawnY = window.innerHeight / 3;
  console.log("spawned at 0");
} else if (spawn == 1) {
  spawnX = (window.innerWidth / 5) * 3;
  spawnY = window.innerHeight / 3;
  console.log("spawned at 1");
} else if (spawn == 2) {
  spawnX = window.innerWidth / 2.5;
  spawnY = (window.innerHeight / 4.5) * 3;
  console.log("spawned at 2");
} else if (spawn == 3) {
  spawnX = (window.innerWidth / 5) * 3;
  spawnY = (window.innerHeight / 4.5) * 3;
  console.log("spawned at 3 ");
}


  gameStart = true;
  

  var x = spawnX;
   var y = spawnY;

  // Generate a unique ID for the new player
  var newPlayerRef = playersRef.push();
    userId = newPlayerRef.key;

  const playerRef = firebase.database().ref(`players/${userId}`);
  playerRef.onDisconnect().remove();

   // Add the new player to the database
   firebase.database().ref(`players/${userId}`).set({
      x: x,
      y: y,
      Name: name,
      health: 100,
      velX: 0,
      velY: 0,
      mouseAngleX: mouseX,
      mouseAngleY: mouseY,
    });

    

  //clear console
  console.clear();
  
  
  console.log("Welcome to the game! Your player ID is: " + userId + " Your UserName Is: " + name);

  
}

let lastShot = Date.now();

canvas.addEventListener("click", function(event) {
  var currentTime = Date.now();
  var timeSinceLastShot = currentTime - lastShot;

  if (timeSinceLastShot > 1000) {
    var playerRef = playersRef.child(userId);
    playerRef.once("value", function(snapshot) {
      var player = snapshot.val();
      var x = player.x;

var y = player.y;

      

      // Call the shoot function with the desired x and y values as arguments
      shoot(x, y);
      
      lastShot = Date.now();
    });
  }
});
function shoot(x, y) {
  var playerRef = playersRef.child(userId);
  
 

  // Get the mouse position at the time of the click
  var mouseX = event.clientX;
  var mouseY = event.clientY;
  
  // Calculate the angle between the bullet's starting position and the mouse position
  var angle = Math.atan2(mouseY - y, mouseX - x).toFixed(3);
  
  // Create a new bullet object with the starting position, angle, and timestamp
  var bullet = {
    x: x,
    y: y,
    angle: angle,
    timestamp: Date.now()
  };
  
  // Add the bullet to the "bullets" child node in the current player's node in the database
  playerRef.child("bullets").push(bullet);
}



// Set up a timer to update the positions of the bullets at a regular interval
setInterval(updateBulletPositions, 20); // 60 FPS

function updateBulletPositions() {
    var playersRef = firebase.database().ref("players");
    playersRef.once("value", function(snapshot) {
        snapshot.forEach(function(playerSnapshot) {
            var bulletsRef = playerSnapshot.ref.child("bullets");
            bulletsRef.once("value", function(bulletSnapshot) {
                bulletSnapshot.forEach(function(childSnapshot) {
                    var bullet = childSnapshot.val();
                    var timestamp = new Date().getTime();
                    var bulletAge = timestamp - bullet.timestamp;
                    var velocity = 0.5; 
                    var velocityX = velocity * Math.cos(bullet.angle);
                    var velocityY = velocity * Math.sin(bullet.angle);
                    bullet.x = bullet.x + velocityX * bulletAge.toFixed(3);
                    bullet.y = bullet.y + velocityY * bulletAge.toFixed(3);
                    bullet.timestamp = timestamp;
                    bulletsRef.child(childSnapshot.key).update(bullet);
                    if(bulletAge > 3000) {
                        bulletsRef.child(childSnapshot.key).remove();
                    } else if(bullet.x > canvas.width || bullet.y > canvas.height || bullet.x < 0 || bullet.y < 0) {
                        bulletsRef.child(childSnapshot.key).remove();
                    } else {
                        for (let i = 0; i < walls.length; i++) {
  const wall = walls[i];
  if (bullet.x > wall.x && bullet.x < wall.x + wall.width && bullet.y > wall.y && bullet.y < wall.y + wall.height) {
    
    bulletsRef.child(childSnapshot.key).remove();
    
    break;
  }
}
                    }

  });
            });
        });
    });
}

function drawPlayer(x, y, key, angle, name, health) {
  
  if(gameStart == true) {

  // Only allow the user to move their own player
  if (key === userId) {
    // Update the canvas at 60fps
    
    
    // Calculate the angle between the mouse and the player
    var angle = Math.atan2(mouseY - y, mouseX - x).toFixed(4);
    //send the angle to the database
    playersRef.child(userId).update({
      angle: angle,
    });
  }

  // Clear the previous position of the player
  ctx.clearRect(x - 10, y - 10, 20, 20);

  // Draw a circle at the specified position with a different color for the user's player
  ctx.beginPath();
  if (key === userId) {
    // Draw the player
    ctx.fillStyle = "green";
    ctx.beginPath();
    ctx.arc(x, y, 25, 0, 2 * Math.PI);
    ctx.fill();
    ctx.fillStyle = "white";
    // Player fill code
    ctx.fillStyle = "blue"
    ctx.beginPath();
    ctx.arc(x, y, 20, 0, 2 * Math.PI);
    ctx.fill();
  } else {
     // Draw the player
    ctx.fillStyle = "red";
    ctx.beginPath();
    ctx.arc(x, y, 25, 0, 2 * Math.PI);
    ctx.fill();
    ctx.fillStyle = "white";
    // Player fill code
    ctx.fillStyle = "blue"
    ctx.beginPath();
    ctx.arc(x, y, 20, 0, 2 * Math.PI);
    ctx.fill();
  }
  ctx.fill();

  // Use the player's angle from the database to draw the turret
  ctx.translate(x, y);
  ctx.rotate(angle);
  // Draw the turret
  ctx.fillStyle = key === userId ? "green" : "red";
  ctx.beginPath();
  ctx.rect(23, -3, 40, 12);
  ctx.fill();
  // Reset the rotation and translation
  ctx.rotate(-angle);
  ctx.translate(-x, -y);
  // Barrel code
  ctx.translate(x, y);
  ctx.rotate(angle);
  // Draw the rectangle for the barrel
  ctx.fillStyle = "blue";
  ctx.beginPath();
  ctx.rect(25, 0, 35, 6);
  ctx.fill();
  // Reset the rotation and translation
  ctx.rotate(-angle);
  ctx.translate(-x, -y);
  ctx.fill();


  // Get the name of the player and display it above
  ctx.font = "20px Arial";
  ctx.zIndex = 1;
  ctx.textAlign = "center";  // center the text
  ctx.fillStyle = "white";
  ctx.fillText(name, x, y - 30);  // update the x position to be the center of the player
  // Calculate the width of the health bar based on the player's remaining health
var healthBarWidth = (health / 100) * 50;

let prevX = x;
let prevY = y;

if (x === undefined || isNaN(x)) {
    x = prevX;
}
if (y === undefined || isNaN(y)) {
    y = prevY;
}

// Draw a gray background for the health bar
ctx.fillStyle = "gray";
ctx.fillRect(x - 25, y + 50, 50, 10);

// Set the color of the health bar based on the player's health
if (health > 60) {
  ctx.fillStyle = "green";
} else if (health > 35) {
  ctx.fillStyle = "orange";
} else {
  ctx.fillStyle = "red";
}

// Draw the health bar
ctx.fillRect(x - 25, y + 50, healthBarWidth, 10);

  // Listen for changes to the players child node in the database
firebase.database().ref("players").on("child_added", function(playerSnapshot) {
  // Get a reference to the "bullets" child node in the current player's node
  var bulletsRef = playerSnapshot.ref.child("bullets");
  // Listen for changes to the bullets child node in the current player's node
  bulletsRef.on("child_added", function(bulletSnapshot) {
    var bullet = bulletSnapshot.val();
    // Draw the bullet on the canvas
    ctx.beginPath();
    ctx.arc(bullet.x, bullet.y, 5, 0, 2 * Math.PI);
    ctx.fillStyle = "black";
    ctx.fill();
  });
});
drawMap();

// Draw the gray background
ctx.fillStyle = "black";
ctx.fillRect(0, 0, canvas.width / 10, 50);

// Draw the X and Y positions of the bullet
ctx.fillStyle = "white";
ctx.font = "20px Arial";
//if (x === undefined) {
//ctx.fillText("X: " + prevX + " Y: " + y, canvas.width - canvas.width/25, 30);
//}  else {
//ctx.fillText("X: " + x + " Y: " + y, canvas.width/25, 30);
//}
ctx.fillText("Score:" + timer, canvas.width/25, 30)

// Draw the gray background
ctx.fillStyle = "black";
ctx.fillRect(canvas.width - canvas.width / 10, canvas.height - 50, canvas.width / 4, 50);

// Draw the text for the server information
ctx.fillStyle = "white";
ctx.font = "20px Arial";
ctx.fillText("Server:", canvas.width - canvas.width / 21, canvas.height - 30);
//note: fuck you david 
var server = "US-WEST FFA"
ctx.fillText(server, canvas.width - canvas.width / 21 , canvas.height - 10);







//var spawnX = 550;
//var spawnY = 600;
//draw black rectagle around spawnX
//ctx.fillStyle = "black";
//ctx.fillRect(spawnX - 25, spawnY - 25, 50, 50);
//draw white rectagle around spawnX
//ctx.fillStyle = "white";
//ctx.fillRect(spawnX - 20, spawnY - 20, 40, 40);


  // Store the player's key in the canvas element so we can use it to delete the player later
  var canvasElement = document.getElementById("myCanvas");
  canvasElement.setAttribute("data-player-key", key);
}


}









function checkCollisions() {
  if(gameStart == true) {
    

  // Get a reference to the current player's node in the database
  var playerRef = firebase.database().ref("players").child(userId);
  // Get the current player's data
  playerRef.once("value", function(playerSnapshot) {
    var player = playerSnapshot.val();
    // Get a reference to the players child node in the database
    var playersRef = firebase.database().ref("players");
    // Get the current list of players
    playersRef.once("value", function(snapshot) {
      snapshot.forEach(function(otherPlayerSnapshot) {
        var otherPlayer = otherPlayerSnapshot.val();
        // Skip the collision check if the other player is the current player
        if (otherPlayerSnapshot.key === userId) {
          return;
        }
        // Check for collisions with each bullet owned by the other player
        for (var bulletKey in otherPlayer.bullets) {
          var bullet = otherPlayer.bullets[bulletKey];
          // Skip the collision check if the bullet has already collided with a player
          if (bullet.collided) {
            continue;
          }
          // Calculate the distance between the player and the bullet
          var distance = Math.sqrt(Math.pow(player.x - bullet.x, 2) + Math.pow(player.y - bullet.y, 2));
          // If the distance is less than 50, a collision has occurred
          if (distance < 50) {
            // Decrement the player's health by 13
            player.health -= 25;

            // If the player's health is 0 or less, remove them from the database
            if (player.health <= 0) {
              location.reload();
              playersRef.child(playerSnapshot.key).remove();
            } else {
              // Update the player's health in the database
              playersRef.child(playerSnapshot.key).update({
                health: player.health
              });
            }
            // Set the collided flag for the bullet to true
            otherPlayer.bullets[bulletKey].collided = true;
            // Update the bullet in the database with the new collided flag
            playersRef.child(otherPlayerSnapshot.key).child("bullets").child(bulletKey).update({
              collided: true
            });
            break;
          }

          
        }
      });
    });
  });
}
}








// Check for collisions every 1000 milliseconds
setInterval(checkCollisions, 20);

    function clearPlayer(x, y, key) {
      // Clear the canvas
      ctx.clearRect(0, 0, canvas.width, canvas.height);
  // Clear the area where the player was drawn
  ctx.clearRect(x - 10, y - 10, 20, 20);

  // Get the player's key from the database
  var playerKey = key;

  // Delete the player from the database
  playersRef.child(playerKey).remove();
}

// Set up an object to store the state of the keys
var keys = {};

// Add event listeners to update the keys object when a key is pressed or released
document.addEventListener("keydown", function(event) {
  keys[event.key] = true;
});
document.addEventListener("keyup", function(event) {
  keys[event.key] = false;
  velX = 0;
  velY = 0;
});

// Set up an object to store the state of the keys
var keys = {};

// Add event listeners to update the keys object when a key is pressed or released
document.addEventListener("keydown", function(event) {
  keys[event.key] = true;
});
document.addEventListener("keyup", function(event) {
  keys[event.key] = false;
});

function updatePlayer() {
  if(gameStart == true){
    // Get the player's current position and velocity
    var playerRef = playersRef.child(userId);
    playerRef.once("value", function(snapshot) {
      var player = snapshot.val();
      var prevX = player.x;
      var prevY = player.y;
      var prevVelX = player.velX;
      var prevVelY = player.velY;
      var x = prevX;
      var y = prevY;
      var velX = prevVelX;
      var velY = prevVelY;
      var friction = 0.8;
      var speed = 0.5
      
      // Update the player's velocity based on the keys that are being pressed
      if (keys["w"]) {
        velY--;
      }
      if (keys["a"]) {
        velX--;
      }
      if (keys["s"]) {
        velY++;
      }
      if (keys["d"]) {
        velX++;
      }

      // If no keys are being pressed, set the velocity to 0
      if (!keys["w"] && !keys["a"] && !keys["s"] && !keys["d"]) {
        velX = 0;
        velY = 0;
      }

      // Apply friction to the player's position
      x += velX * friction;
      y += velY * friction;

      if (Math.abs(velX) > speed) {
        velX = speed * Math.sign(velX);
      }
      if (Math.abs(velY) > speed) {
        velY = speed * Math.sign(velY);
      }

      // Check if the player's new X or Y is less than 50 or greater than the canvas width/height - 50
      if (x < 50) {
        x = 50;
      }
      else if (x > canvas.width - 50) {
        x = canvas.width - 50;
      }
      
      if (y < 50) {
        y = 50;
      }
      else if (y > canvas.height - 50) {
        y = canvas.height - 50;
      }
      
      var padding = 35;
for(let i = 0; i < walls.length; i++) {
    var wall = walls[i];
    if (x + velX > wall.x - padding && x + velX < wall.x + wall.width + padding &&
        y + velY > wall.y - padding && y + velY < wall.y + wall.height + padding) {
        if(velX !=0){
            x = prevX;
        }
        if(velY !=0){
            y = prevY;
        }
        velX =0;
        velY =0;
    }
}






      // Round the player's position to one decimal
      x = Math.round(x);
      y = Math.round(y);

      // Check if the player's position or velocity has changed
      if (x !== prevX || y !== prevY || velX !== prevVelX || velY !== prevVelY) {
        // Update the player's position and velocity in the database
        playerRef.update({
          x: x,
          y: y,
          velX: velX,
          velY: velY
        });
      }
    });
  }
}



function updateMouse() {

  if(gameStart == true){
  // Get the player's reference in the database
var playerRef = playersRef.child(userId);

// Update the player's mouse position in the database
playerRef.update({
  mouseAngleX: mouseX,
  mouseAngleY: mouseY
});

}
}

// Set up a timer to update the player's position and velocity every 50 milliseconds
setInterval(updatePlayer, 5);
setInterval(updateMouse, 40);
let wallsAdded = false;

function drawMap() {
    // Set the width and height of the rectangle
    var rectWidth = canvas.width * 0.4
    var rectHeight = canvas.height * 0.06
    var innerRecHeight = canvas.height * 0.035
    var innerRecWidth = canvas.width * 0.39;

    // Calculate the x and y position of the rectangle
    var rectX = canvas.width / 2 - rectWidth / 2;
    var rectY = canvas.height / 2 - rectHeight / 2;

    var innerRectX = canvas.width / 2 - innerRecWidth / 2;
    var innerRectY = canvas.height / 2 - innerRecHeight / 2;

    
    var rectWidth2 = canvas.width * 0.03;
    var rectHeight2 = canvas.height * 0.52;
    var innerRecHeight2 = canvas.height * 0.5;
    var innerRecWidth2 = canvas.width * 0.02;

    //put it horizontally in the middle
    var rectX2 = canvas.width/2 - rectWidth2/2;
    var rectY2 = canvas.height/2 - rectHeight2/2;

    var innerRectX2 = canvas.width/2 - innerRecWidth2/2;
    var innerRectY2 = canvas.height/2 - innerRecHeight2/2;


    var rectWidth3 = canvas.width * 0.1;
    var rectHeight3 = canvas.height
    var innerRecHeight3 = canvas.height * 0.97
    var innerRecWidth3 = canvas.width * 0.094

    //put it horizontally to the side 
    var rectX3 = canvas.width/10000 + canvas.width * 0.00009;
    var rectY3 = canvas.height/2 - rectHeight3/2;

    var innerRectX3 = canvas.width/10000 + canvas.width * 0.0001;
    var innerRectY3 = canvas.height/2 - innerRecHeight3/2;


    var rectWidth4 = canvas.width * 0.1;
    var rectHeight4 = canvas.height
    var innerRecHeight4 = canvas.height * 0.97
    var innerRecWidth4 = canvas.width * 0.094

    //put it horizontally to the side
    var rectX4 = canvas.width - canvas.width * 0.10;
    var rectY4 = canvas.height/2 - rectHeight4/2;

    var innerRectX4 = canvas.width - canvas.width * 0.094
    var innerRectY4 = canvas.height/2.025- innerRecHeight4/2;

    if(!wallsAdded) {
        console.log("adding walls");
    walls.push({x: rectX, y: rectY, width: rectWidth, height: rectHeight});
    walls.push({x: rectX2, y: rectY2, width: rectWidth2, height: rectHeight2});
    walls.push({x: rectX3, y: rectY3, width: rectWidth3, height: rectHeight3});
    walls.push({x: rectX4, y: rectY4, width: rectWidth4, height: rectHeight4});

    wallsAdded = true;
  }  
    // Draw the rectangle on the canvas
    ctx.fillRect(rectX2, rectY2, rectWidth2, rectHeight2);
    ctx.fillStyle = "black"; 
    ctx.fillRect(rectX2, rectY2, rectWidth2, rectHeight2); 
    ctx.fillStyle = "gray"
    ctx.fillRect(innerRectX2, innerRectY2, innerRecWidth2, innerRecHeight2);

    // Draw the rectangle on the canvas
    ctx.fillRect(rectX, rectY, rectWidth, rectHeight);
    ctx.fillStyle = "black";
    ctx.fillRect(rectX, rectY, rectWidth, rectHeight);
    ctx.fillStyle = "gray"
    ctx.fillRect(innerRectX, innerRectY, innerRecWidth, innerRecHeight);
    
    // Draw the rectangle on the canvas
ctx.fillRect(rectX3, rectY3, rectWidth3, rectHeight3);
ctx.fillStyle = "black";
ctx.fillRect(rectX3, rectY3, rectWidth3, rectHeight3);
ctx.fillStyle = "gray"
ctx.fillRect(innerRectX3, innerRectY3, innerRecWidth3, innerRecHeight3);

// Draw the rectangle on the canvas
ctx.fillRect(rectX4, rectY4, rectWidth4, rectHeight4);
ctx.fillStyle = "black"; 
ctx.fillRect(rectX4, rectY4, rectWidth4, rectHeight4); 
ctx.fillStyle = "gray"
ctx.fillRect(innerRectX4, innerRectY4, innerRecWidth4, innerRecHeight4);

}