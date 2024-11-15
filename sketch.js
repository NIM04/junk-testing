let playButton;
let signUp;
let signIn;
let settings;
let leaderboard;
let menuBg;
let backButton;

// level menu variables
let lvl1;
let lvl2;
let lvl3;
let lvl4;
let lvl5;
let lvl6;
//etc until 14

// use scene for the home buttons, use state for the levels, use gameState while the game is ongoing
let state = 0;
let scene = 0;
let gameState;

function setup(){

createCanvas(windowWidth, windowHeight);

  
if(scene == 0){


  playButton = createButton("Play");
  playButton.mousePressed(findLevel);
  
  signUp = createButton("Sign Up");
  signUp.mousePressed(collapseSignUp);
  
  signIn = createButton("Sign In");
  signIn.mousePressed(collapseSignIn);
  
  settings = createButton("Settings");
  settings.mousePressed(collapseSettings);

  backButton = createButton("Back");
  backButton.mousePressed(back)
  
  leaderboard = createButton("Leaderboard");
  leaderboard.mousePressed(leaderboardDisplay);

  
  buttonsCust();

}// end home screen

//drawLevelButtons();
//lvl1 = createButton("Level 1");
//lvl1.position(100, 100);

else if(scene == 1){

  //LEVELS DISPLAY, ETC

}// end levels screen


}// end setup

function draw(){

background(7, 7, 110);

homeButtonSwitch();
gameLevelDraw();

strokeWeight = 0;
    fill(0, 0, 255);
    rect(0, windowHeight - 30, windowWidth, 30);
    rect(0, 0, windowWidth, 30);
    rect(windowWidth - 30, 0, 30, windowHeight);
    rect(0, 0, 30, windowHeight);

if(scene == 0){

    // draw menu
    textSize(50);
    fill(51, 102, 204);
    text("Pac - Man, remade.", width/3, 150); 


    // if(lvl1.mousePressed){
    //     state = 1;
    //     console.log("Button 1 is working")
    // }
}

}// end draw


function homeButtonSwitch(){
  switch(scene){
      
    case 0:
      
      console.log("Home screen (scene 0) is functioning.");
      break;
      
    case 1:
      
      console.log("Scene 1 is functioning.");
      break;
      
    case 2:
      
      console.log("Scene 2 is functioning.");
      break;

    case 3:
      
      console.log("Scene 3 is functioning.");
      break;

    case 4:
      
      console.log("Scene 4 is functioning.");
      break;
      
    case 5:
      
      console.log("Scene 5 is functioning.");
      break;
      
  }// end switch statement

}// end homeButtonSwitch


// the home button functions
function findLevel(){
  
    scene = 1;
    // switch to scene 1 when play button is pressed, but level will vary depending on who is playing/ if they logged in
    
    fill(153, 204, 255);
    rect(300, 300, width/1.5, height/ 2);
    
  }
  
  function collapseSignUp(){
    
    scene = 2;
  
  }
  
  function collapseSignIn(){
    
    scene = 3;

  }

  function back(){

    scene = scene - 1;
  }
  
  function collapseSettings(){
    
    scene = 4;

  }

  function leaderboardDisplay(){
    
    scene = 5;

  }


function buttonsCust(){
  
    playButton.position(width/2, height/3);
    playButton.style("background-color", "#ffff99");
    playButton.style("padding", "40px 50px");
    playButton.style("border-radius", "50px");
    
    signIn.position(width/ 2 + 200 , (2*height)/3);
    signIn.style("background-color", "#ffff99");
    signIn.style("padding", "20px 50px")
  
    signUp.position(width/3, (2*height)/3);
    signUp.style("background-color", "#ffff99");
    signUp.style("padding", "20px 50px")
    
    settings.position(100, 100);
    settings.style("background-color", "#ffff99");
    settings.style("padding", "20px 50px");

    backButton.position(20, 10);
    backButton.style("background-color", "#ffff99");
    backButton.style("padding", "10px 30px");
    backButton.style("border-radius", "5px");
    
    leaderboard.position((width - (150 + leaderboard.width)) , 100);
    leaderboard.style("background-color", "#ffff99");
    leaderboard.style("padding", "20px 50px");
    
  }// end buttonsCust

  function gameLevelDraw(){

    
  }// end gameLevelDraw