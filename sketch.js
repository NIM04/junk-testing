//global variables:

// home
let playButton;
let signUp;
let signIn;
let settings;
let leaderboard;
let menuBg;
let backButton;

// level menu variables
let lvl1, lvl2, lvl3, lvl4, lvl5, lvl6, lvl7, lvl8, lvl9, lvl10, lvl11, lvl12, lvl13, lvl14, lvl15;
//etc until 14

// use scene for the home buttons, use state for the levels, use gameState while the game is ongoing
let state = 0;
let scene = 0;
let gameState;



//setup & draw
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
else if(scene == 1){

}// end levels choice

// else if(scene == 1){
//   findLevel();
// }// end levels screen


}// end setup




function draw(){

background(7, 7, 110);

//homeButtonSwitch();

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

    playButton.show();
    signUp.show();
    signIn.show();
    settings.show();
    leaderboard.show(); 

    // if(lvl1.mousePressed){
    //     state = 1;
    //     console.log("Button 1 is working")
    // } replicated as case

}
else if(scene == 1){ //activate level screen
  
  playButton.remove();
  leaderboard.remove();
  signIn.remove();
  signUp.remove();

  findLevel();
}//end find levels
else if(scene == 2){//signUp screen

  playButton.remove();
  leaderboard.remove();
  signIn.remove();
  signUp.remove();

  collapseSignUp();

}//end signup

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


  // function gameLevelDraw(){
  // }// end gameLevelDraw
