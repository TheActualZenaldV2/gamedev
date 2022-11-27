//* flag guessing game 
    
    //*global variables
    var startTime = Date.now();

var interval = setInterval(function() {
    var elapsedTime = Date.now() - startTime;
    document.getElementById("timer").innerHTML = (elapsedTime / 1000).toFixed(1);
}, 1);



    
    
    let score = 0;
    let tries = 0;
    let guess = document.getElementById("guess");
    
    
    //* make a clock to keep track of time 
    //* make clock update every 0.1 seconds 
    
    
    
    //* make a fucntion to end game if score is 12 
  
    
    
    
    
    
    
    function generateImage(){
        document.getElementById("flag").src = "https://c4.wallpaperflare.com/wallpaper/1000/716/63/4k-canadian-flag-maple-leaf-national-flag-wallpaper-preview.jpg"
        document.getElementById("flag").style.display = "block";
       
   
    flagName = "canada";
    document.getElementById("imageNumber").innerHTML = "Image number: " + imageNumber;
    console.log("answer is:  " + flagName );
   
    storeNumber1 = "1";
    //* store the storeNumber in myArray
    myArray.push(storeNumber1);
    hint = "this country is canada"
        
    
    }
    
    
    //* GLOBAL VARIABLES AND CODE TO RUN ON PAGE LOAD
    
    
        
    //* make a function to add number to the array 
    function addNumberToArray(){
        let number = Math.floor(Math.random() * 49) + 1;
        myArray.push(number);
    }
    
    
        
    function endGame(){

let time = document.getElementById("timer").innerHTML


let maxScore = 30;
clearInterval(timer);
document.getElementById("endGame").innerHTML = "You win! Your score is " + score + " out of " + maxScore + ". " + " You took " + time + " seconds to complete the game. Refresh the page to play again.";
document.getElementById("list").style.display = "none";
document.getElementById("nextButton").style.display = "none";
document.getElementById("guessButton").style.display = "none";

document.getElementById("endGame").style.display = "block";
document.getElementById("endGameButton").style.display = "none";
document.getElementById("flag").style.display = "none";
document.getElementById("timer").style.display = "none";
document.getElementById("timerHolder").style.display = "none";





}
    
    
const myArray = [];
    


function isStored(number) {
  for (var i = 0; i < myArray.length; i++) {
    if (myArray[i] == number) {
      return true;
    }
  }

  return false;
}

function getNumber() {
  while (true) {
    const num = getRand();
    
    if (!isStored(num)) {
      myArray.push(num);
      return num;
    }
  }
}

function getRand() {
    return Math.floor(Math.random() * 49);
}
    
    




    //* declaring function to change flag
    function changeFlag(){
        document.getElementById("nextButton").style.display = "none";
        
        document.getElementById("list").value = "Select Option";
        document.getElementById("list").focus();
        document.getElementById("guessButton").style.display = "inline-block";
        document.getElementById("list").disabled = false;
        document.getElementById("myDiv").innerHTML = ""; 
        document.getElementById("list").style.backgroundColor = "white";
        document.getElementById("list").style.color = "black";

        //* pause timer 
        clearInterval(timer);

        
    

      let total = score + tries;
      let maxScore = 30;
      

        if (total == maxScore){
            endGame();
        }
    
    
    
    

    
    
    
        
    
    
    let = randomNum = getNumber();
    console.log("Number is  :  " + randomNum);

                                                                


    let image0 = "https://upload.wikimedia.org/wikipedia/en/thumb/f/f3/Flag_of_Russia.svg/640px-Flag_of_Russia.svg.png"
	let image1 = "https://c4.wallpaperflare.com/wallpaper/1000/716/63/4k-canadian-flag-maple-leaf-national-flag-wallpaper-preview.jpg"
	let image2 = "https://upload.wikimedia.org/wikipedia/en/thumb/a/a4/Flag_of_the_United_States.svg/1200px-Flag_of_the_United_States.svg.png"
	let image3 = "https://cdn.britannica.com/73/2573-004-29818847/Flag-Mexico.jpg"
	let image4 = "https://upload.wikimedia.org/wikipedia/en/thumb/0/05/Flag_of_Brazil.svg/640px-Flag_of_Brazil.svg.png"
	let image5 = "https://cdn.britannica.com/82/682-004-F0B47FCB/Flag-France.jpg"
	let image6 = "https://upload.wikimedia.org/wikipedia/en/thumb/b/ba/Flag_of_Germany.svg/1200px-Flag_of_Germany.svg.png"
	let image7 = "https://www.countryflags.com/wp-content/uploads/italy-flag-png-large.png"
	let image8 = "https://upload.wikimedia.org/wikipedia/commons/thumb/8/89/Bandera_de_Espa%C3%B1a.svg/1200px-Bandera_de_Espa%C3%B1a.svg.png"
	let image9 = "https://upload.wikimedia.org/wikipedia/en/thumb/9/9e/Flag_of_Japan.svg/1200px-Flag_of_Japan.svg.png"
	let image10 = "https://cdn.pixabay.com/photo/2013/07/13/14/16/china-162389_960_720.png"
	let image11 = "https://cdn.britannica.com/27/4027-004-B57F84E9/Flag-Cambodia.jpg"
	let image12 = "https://upload.wikimedia.org/wikipedia/en/thumb/4/41/Flag_of_India.svg/1200px-Flag_of_India.svg.png"
	let image13 = "https://cdn.britannica.com/78/6078-004-77AF7322/Flag-Australia.jpg"
    let image14 = "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3e/Flag_of_New_Zealand.svg/800px-Flag_of_New_Zealand.svg.png"
    let image15 = "https://cdn.britannica.com/40/5340-004-B25ED5CF/Flag-Afghanistan.jpg"
    let image16 = "https://upload.wikimedia.org/wikipedia/commons/thumb/1/19/Flag_of_Andorra.svg/1200px-Flag_of_Andorra.svg.png"
    let image17 = "https://www.worldatlas.com/r/w1200/img/flag/ao-flag.jpg"
    let image18 = "https://upload.wikimedia.org/wikipedia/commons/thumb/8/89/Flag_of_Antigua_and_Barbuda.svg/800px-Flag_of_Antigua_and_Barbuda.svg.png"
    let image19 = "https://cdn.britannica.com/69/5869-004-7D75CD05/Flag-Argentina.jpg"
    let image20 = "https://cdn.britannica.com/11/4711-004-1504C169/Flag-Armenia.jpg"
    let image21 = "https://cdn.britannica.com/73/6073-004-B0B9EBEE/Flag-Austria.jpg"
    let image22 = "https://cdn.britannica.com/14/4714-004-959E7B43/Flag-Azerbaijan.jpg"
    let image23 = "https://cdn.britannica.com/06/5106-050-D11C8B55/Flag-of-The-Bahamas.jpg?w=400&h=235&c=crop"
    let image24 = "https://cdn.britannica.com/27/70827-050-8D001288/Bahraini-flag-2002.jpg"
    let image25 = "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f9/Flag_of_Bangladesh.svg/1200px-Flag_of_Bangladesh.svg.png"
    let image26 = "https://upload.wikimedia.org/wikipedia/commons/e/ef/Flag_of_Barbados.svg"
    let image27 = "https://cdn.britannica.com/01/6401-004-FAEACB4E/Flag-Belarus.jpg"
    let image28 = "https://cdn.britannica.com/08/6408-004-405E272F/Flag-Belgium.jpg"
    let image29 = "https://cdn.britannica.com/07/7207-004-A82842C0/Flag-Belize.jpg"
    let image30 = "https://upload.wikimedia.org/wikipedia/commons/0/0a/Flag_of_Benin.svg"
    let image31 = "https://koryogroup.com/uploads/blog/863/original-bhutan_flag.jpg?1580988380"
    let image32 = "https://cdn.britannica.com/54/6754-004-AE3C4294/Flag-Bolivia.jpg"
    let image33 = "https://cdn.britannica.com/02/6202-004-5E2B285D/Flag-Bosnia-and-Herzegovina.jpg"
    let image34 = "https://cdn.britannica.com/15/4215-004-F844A05D/Flag-Botswana.jpg"
    let image35 = "https://cdn.britannica.com/24/4024-004-246630D3/Flag-Brunei.jpg"
    let image36 = "https://www.crwflags.com/fotw/images/c/cv_1975.gif"
    let image37 = "https://cdn.britannica.com/42/5042-004-7FF4ACCA/Flag-Cameroon.jpg"
    let image38 = "https://cdn.britannica.com/80/7180-004-8AFA2B44/Flag-Central-African-Republic.jpg"
    let image39 = "https://cdn.britannica.com/46/5046-004-CA99DA45/Flag-Chad.jpg"
    let image40 = "https://cdn.britannica.com/85/7485-004-00B07230/Flag-Chile.jpg"
    let image41 = "https://cdn.britannica.com/68/7668-050-9304EBB7/Flag-Colombia.jpg?w=400&h=235&c=crop"
    let image42 = "https://cdn.britannica.com/40/7740-004-01894F47/Flag-Comoros.jpg"
    let image43 = "https://cdn.britannica.com/94/7194-004-5FA84A72/Flag-Democratic-Republic-of-the-Congo.jpg"
    let image44 = "https://cdn.britannica.com/25/7225-004-65F33B16/Flag-Costa-Rica.jpg"
    let image45 = "https://cdn.britannica.com/48/5048-004-EA370A21/Flag-Cote-dIvoire.jpg"
    let image46 = "https://cdn.britannica.com/06/6206-004-14730C28/Flag-Croatia.jpg"
    let image47 = "https://cdn.britannica.com/10/5110-004-38075E57/Flag-Cuba.jpg"
    let image48 = "https://cdn.britannica.com/83/7883-004-D09910C5/Flag-Cyprus.jpg"
    let image49 = "https://cdn.britannica.com/86/7886-004-323985BD/Flag-Czech-Republic.jpg"
    let image50 = " "
    let image51 = " "
    let image52 = " "
    let image53 = " "
    let image54 = " "
    let image55 = " "
    let image56 = " "
    let image57 = " "
    let image58 = " "
    let image59 = " "
    let image60 = " "



    
    
    let hint = document.getElementById("hint").innerHTML 
    
    
    if(randomNum == 0){
        document.getElementById("flag").src = image0;
    flagName = "russia";
    console.log("answer is:  " + flagName);
    previousNumber = "0";
    const storeNumber0 = "0";
    myArray.push(storeNumber0);
    }
    
    if(randomNum == 2){
    document.getElementById("flag").src = image2;
    imageNumber = 2;
    flagName = "usa";
    console.log("answer is:  " + flagName);
    previousNumber = "2";
    storeNumber2 = "2";
    myArray.push(storeNumber2);
    hint = "this country is usa"
     }

    if(randomNum == 3){
        document.getElementById("flag").src = image3;
    imageNumber = 3;
    flagName = "mexico";
    console.log("answer is:  " + flagName);
    previousNumber = "3";
    const storeNumber3 = "3";
    myArray.push(storeNumber3);
    hint = "this country is mexico"
}

    if(randomNum == 4){
        document.getElementById("flag").src = image4;
    imageNumber = 4;
    flagName = "brazil";
    console.log("answer is:  " + flagName);
    previousNumber = "4";
    const storeNumber4 = "4";
    myArray.push(storeNumber4);
    }

    if(randomNum == 5){
        document.getElementById("flag").src = image5;
    imageNumber = 5;
    flagName = "france";
    console.log("answer is:  " + flagName);
    previousNumber = "5";
    const storeNumber5 = "5";
    myArray.push(storeNumber5);
    }

    if(randomNum == 6){
        document.getElementById("flag").src = image6;
    imageNumber = 6;
    flagName = "germany";
    console.log("answer is:  " + flagName);
    previousNumber = "6";
    const storeNumber6 = "6";
    myArray.push(storeNumber6);
    }

    if(randomNum == 7){
        document.getElementById("flag").src = image7;
    imageNumber = 7;
    flagName = "italy";
    console.log("answer is:  " + flagName);
    previousNumber = "7";
    const storeNumber7 = "7";
    myArray.push(storeNumber7);
    }

    if(randomNum == 8){
        document.getElementById("flag").src = image8;
    imageNumber = 8;
    flagName  = "spain";
    console.log("answer is:  " + flagName);
    previousNumber = "8";
    const storeNumber8 = "8";
    myArray.push(storeNumber8);
    }

    if(randomNum == 9){
        document.getElementById("flag").src = image9;
    imageNumber = 9;
    flagName = "japan";
    console.log("answer is:  " + flagName);
    previousNumber = "9";
    const storeNumber9 = "9";
    myArray.push(storeNumber9);
    }

    if(randomNum == 10){
        document.getElementById("flag").src = image10;
    imageNumber = 10;
    flagName = "china";
    console.log("answer is:  " + flagName);
    previousNumber = "10";
    const storeNumber10 = "10";
    myArray.push(storeNumber10);
    }
   
    if(randomNum == 11){
        document.getElementById("flag").src = image11;
    imageNumber = 11;
    flagName = "cambodia";
    console.log("answer is:  " + flagName);
    previousNumber = "11";
    const storeNumber11 = "11";
    myArray.push(storeNumber11);
    }

    if(randomNum == 12){
        document.getElementById("flag").src = image12;
    imageNumber = 12;
    flagName = "india";
    console.log("answer is:  " + flagName);
    previousNumber = "12";
    const storeNumber12 = "12";
    myArray.push(storeNumber12);
    }

    if(randomNum == 13){
        document.getElementById("flag").src = image13;
    imageNumber = 13;
    flagName = "australia";
    console.log("answer is:  " + flagName);
    previousNumber = "13";
    const storeNumber13 = "13";
    myArray.push(storeNumber13);
    }

    if(randomNum == 14){
        document.getElementById("flag").src = image14;
    imageNumber = 14;
    flagName = "new zealand";
    console.log("answer is:  " + flagName);
    previousNumber = "13";
    const storeNumber14 = "14";
    myArray.push(storeNumber14);
    }
//* START OF ALPHABET FLAGS     
    if(randomNum == 15){
        document.getElementById("flag").src = image15;
    imageNumber = 15;
    flagName = "afganistan";
    console.log("answer is:  " + flagName);
    previousNumber = "14";
    const storeNumber15 = "15";
    myArray.push(storeNumber15);
    }

    if(randomNum == 16){
        document.getElementById("flag").src = image16;
    imageNumber = 16;
    flagName = "andorra";
    console.log("answer is:  " + flagName);
    previousNumber = "15";
    const storeNumber16 = "16";
    myArray.push(storeNumber16);
    }

    if(randomNum == 17){
        document.getElementById("flag").src = image17;
    imageNumber = 17;
    flagName = "angola";
    console.log("answer is:  " + flagName);
    previousNumber = "16";
    const storeNumber17 = "17";
    myArray.push(storeNumber17);
    }

    if(randomNum == 18){
        document.getElementById("flag").src = image18;
    imageNumber = 18;
    flagName = "antigua and barbuda";
    console.log("answer is:  " + flagName);
    previousNumber = "17";
    const storeNumber18 = "18";
    myArray.push(storeNumber18);
    }

    if(randomNum == 19){
        document.getElementById("flag").src = image19;
    imageNumber = 19;
    flagName = "argentina";
    console.log("answer is:  " + flagName);
    previousNumber = "18";
    const storeNumber19 = "19";
    myArray.push(storeNumber19);
    }

    if(randomNum == 20){
        document.getElementById("flag").src = image20;
    imageNumber = 20;
    flagName = "armenia";
    console.log("answer is:  " + flagName);
    previousNumber = "19";
    const storeNumber20 = "20";
    myArray.push(storeNumber20);
    }

    if(randomNum == 21){
        document.getElementById("flag").src = image21;
    imageNumber = 21;
    flagName = "austria";
    console.log("answer is:  " + flagName);
    previousNumber = "20";
    const storeNumber21 = "21";
    myArray.push(storeNumber21);
    }

    if(randomNum == 22){
        document.getElementById("flag").src = image22;
    imageNumber = 22;
    flagName = "azerbaijan";
    console.log("answer is:  " + flagName);
    previousNumber = "21";
    const storeNumber22 = "22";
    myArray.push(storeNumber22);
    }

    if(randomNum == 23){
        document.getElementById("flag").src = image23;
    imageNumber = 23;
    flagName = "bahamas";
    console.log("answer is:  " + flagName);
    previousNumber = "22";
    const storeNumber23 = "23";
    myArray.push(storeNumber23);
    }

    if(randomNum == 24){
        document.getElementById("flag").src = image24;
    imageNumber = 24;
    flagName = "bahrain";
    console.log("answer is:  " + flagName);
    previousNumber = "23";
    const storeNumber24 = "24";
    myArray.push(storeNumber24);
    }

    if(randomNum == 25){
        document.getElementById("flag").src = image25;
    imageNumber = 25;
    flagName = "bangladesh";
    console.log("answer is:  " + flagName);
    previousNumber = "24";
    const storeNumber25 = "25";
    myArray.push(storeNumber25);
    }

    if(randomNum == 26){
        document.getElementById("flag").src = image26;
    imageNumber = 26;
    flagName = "barbados";
    console.log("answer is:  " + flagName);
    previousNumber = "25";
    const storeNumber26 = "26";
    myArray.push(storeNumber26);
    }

    if(randomNum == 27){
        document.getElementById("flag").src = image27;
    imageNumber = 27;
    flagName = "belarus";
    console.log("answer is:  " + flagName);
    previousNumber = "26";
    const storeNumber27 = "27";
    myArray.push(storeNumber27);
    }

    if(randomNum == 28){
        document.getElementById("flag").src = image28;
    imageNumber = 28;
    flagName = "belgium";
    console.log("answer is:  " + flagName);
    previousNumber = "27";
    const storeNumber28 = "28";
    myArray.push(storeNumber28);
    }

    if(randomNum == 29){
        document.getElementById("flag").src = image29;
    imageNumber = 29;
    flagName = "belize";
    console.log("answer is:  " + flagName);
    previousNumber = "28";
    const storeNumber29 = "29";
    myArray.push(storeNumber29);
    }

    if(randomNum == 30){
        document.getElementById("flag").src = image30;
    imageNumber = 30;
    flagName = "benin";
    console.log("answer is:  " + flagName);
    previousNumber = "29";
    const storeNumber30 = "30";
    myArray.push(storeNumber30);
    }


    //* all above working 

    if(randomNum == 31){
        document.getElementById("flag").src = image31;
    imageNumber = 31;
    flagName = "bhutan";
    console.log("answer is:  " + flagName);
    previousNumber = "30";
    const storeNumber31 = "31";
    myArray.push(storeNumber31);
    }

    if(randomNum == 32){
        document.getElementById("flag").src = image32;
    imageNumber = 32;
    flagName = "bolivia";
    console.log("answer is:  " + flagName);
    previousNumber = "31";
    const storeNumber32 = "32";
    myArray.push(storeNumber32);
    }

    if(randomNum == 33){
        document.getElementById("flag").src = image33;
    imageNumber = 33;
    flagName = "bosnia and herzegovina";
    console.log("answer is:  " + flagName);
    previousNumber = "32";
    const storeNumber33 = "33";
    myArray.push(storeNumber33);
    }

    if(randomNum == 34){
        document.getElementById("flag").src = image34;
    imageNumber = 34;
    flagName = "botswana";
    console.log("answer is:  " + flagName);
    previousNumber = "33";
    const storeNumber34 = "34";
    myArray.push(storeNumber34);
    }

    if(randomNum == 35){
        document.getElementById("flag").src = image35;
    imageNumber = 35;
    flagName = "burnei";
    console.log("answer is:  " + flagName);
    previousNumber = "34";
    const storeNumber35 = "35";
    myArray.push(storeNumber35);
    }

    if(randomNum == 36){
        document.getElementById("flag").src = image36;
    imageNumber = 36;
    flagName = "cabo verde";
    console.log("answer is:  " + flagName);
    previousNumber = "35";
    const storeNumber36 = "36";
    myArray.push(storeNumber36);
    }

    if(randomNum == 37){
        document.getElementById("flag").src = image37;
    imageNumber = 37;
    flagName = "cameroon";
    console.log("answer is:  " + flagName);
    previousNumber = "36";
    const storeNumber37 = "37";
    myArray.push(storeNumber37);
    }

    if(randomNum == 38){
        document.getElementById("flag").src = image38;
    imageNumber = 38;
    flagName = "central african republic";
    console.log("answer is:  " + flagName);
    previousNumber = "37";
    const storeNumber38 = "38";
    myArray.push(storeNumber38);
    }

    if(randomNum == 39){
        document.getElementById("flag").src = image39;
    imageNumber = 39;
    flagName = "chad";
    console.log("answer is:  " + flagName);
    previousNumber = "38";
    const storeNumber39 = "39";
    myArray.push(storeNumber39);
    }

    if(randomNum == 40){
        document.getElementById("flag").src = image40;
    imageNumber = 40;
    flagName = "chile";
    console.log("answer is:  " + flagName);
    previousNumber = "39";
    const storeNumber40 = "40";
    myArray.push(storeNumber40);
    }

    if(randomNum == 41){
        document.getElementById("flag").src = image41;
    imageNumber = 41;
    flagName = "colombia";
    console.log("answer is:  " + flagName);
    previousNumber = "40";
    const storeNumber41 = "41";
    myArray.push(storeNumber41);
    }

    if(randomNum == 42){
        document.getElementById("flag").src = image42;
    imageNumber = 42;
    flagName = "comoros";
    console.log("answer is:  " + flagName);
    previousNumber = "41";
    const storeNumber42 = "42";
    myArray.push(storeNumber42);
    }

    if(randomNum == 43){
        document.getElementById("flag").src = image43;
    imageNumber = 43;
    flagName = "congo, democratic republic of the congo";
    console.log("answer is:  " + flagName);
    previousNumber = "42";
    const storeNumber43 = "43";
    myArray.push(storeNumber43);
    }

    if(randomNum == 44){
        document.getElementById("flag").src = image44;
    imageNumber = 44;
    flagName = "costa rica";
    console.log("answer is:  " + flagName);
    previousNumber = "43";
    const storeNumber44 = "44";
    myArray.push(storeNumber44);
    }
   
    if(randomNum == 45){
        document.getElementById("flag").src = image45;
    imageNumber = 45;
    flagName = "cote d'ivoire";
    console.log("answer is:  " + flagName);
    previousNumber = "44";
    const storeNumber45 = "45";
    myArray.push(storeNumber45);
    }

    if(randomNum == 46){
        document.getElementById("flag").src = image46;
    imageNumber = 46;
    flagName = "croatia";
    console.log("answer is:  " + flagName);
    previousNumber = "45";
    const storeNumber46 = "46";
    myArray.push(storeNumber46);
    }

    if(randomNum == 47){
        document.getElementById("flag").src = image47;
    imageNumber = 47;
    flagName = "cuba";
    console.log("answer is:  " + flagName);
    previousNumber = "46";
    const storeNumber47 = "47";
    myArray.push(storeNumber47);
    }

    if(randomNum == 48){
        document.getElementById("flag").src = image48;
    imageNumber = 48;
    flagName = "cyprus";
    console.log("answer is:  " + flagName);
    previousNumber = "47";
    const storeNumber48 = "48";
    myArray.push(storeNumber48);
    }

    if(randomNum == 49){
        document.getElementById("flag").src = image49;
    imageNumber = 49;
    flagName = "czec republic";
    console.log("answer is:  " + flagName);
    previousNumber = "48";
    const storeNumber49 = "49";
    myArray.push(storeNumber49);
    }

    if(randomNum == 50){
        document.getElementById("flag").src = image50;
    imageNumber = 50;
    flagName = "";
    console.log("answer is:  " + flagName);
    previousNumber = "49";
    const storeNumber50 = "50";
    myArray.push(storeNumber50);
    }

    














        
    
    
        
    }
    
    
    function showHint(){

        let hint = document.getElementById("hint");
    
    document.getElementById("hintHolder").innerHTML = hint
    document.getElementById("hintHolder").style.display = "block";
}   
   
    
    
    
    
    
    
    
       
    
    
    
    
    function getSelectValue() {
    selectedValue = document.getElementById("list").value.toLowerCase();
            console.log("country selected: " + selectedValue);
        }


        

    //* check if guess is correct 
    function myGuess() {
        
       
        
    
    
        if (selectedValue == flagName) {
            score++;
            document.getElementById("score").innerHTML = score;
            document.getElementById("tries").innerHTML = tries;
            document.getElementById("myDiv").innerHTML = "Correct!";
            
            document.getElementById("list").disabled = true;
            document.getElementById("list").style.color = "white";
            document.getElementById("guessButton").style.display = "none";
            document.getElementById("nextButton").style.display = "inline-block";
            document.getElementById("list").style.backgroundColor = "green"
            document.getElementById("hintHolder").style.display = "none";
            
            
        } else {
            tries++;
            document.getElementById("list").disabled = true;
            document.getElementById("score").innerHTML = score;
            document.getElementById("tries").innerHTML = tries;
            document.getElementById("myDiv").innerHTML = "Wrong!";
            document.getElementById("list").style.backgroundColor = "red";
            document.getElementById("guessButton").style.display = "none";
            document.getElementById("nextButton").style.display = "inline-block";
            document.getElementById("hintHolder").style.display = "none";
            
            
            
    
        }
    }
    
    
    
    
    
    
    
    
    
    
    
    //* display the score and tries
    function myScore() {
        document.getElementById("score").innerHTML = score;
        document.getElementById("tries").innerHTML = tries;
    }
    
    //* display the time
    function myTime() {
        document.getElementById("timer").innerHTML = time;
    }
    
    //* display the flag
    function myFlag() {
        document.getElementById("flag").innerHTML = flags;
    }
    
    
    
    
    
    
