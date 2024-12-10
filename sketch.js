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
}
// else if(scene != 1){ //remove buttons that refuse to disappear, this doesn't work
//   lvl1.remove();
//   lvl2.remove();
//   lvl3.remove();
//   lvl4.remove();
//   lvl5.remove();
//   lvl6.remove();
//   lvl7.remove();
//   lvl8.remove();
//   lvl9.remove();
//   lvl10.remove();
//   lvl11.remove();
//   lvl12.remove();
//   lvl3.remove();
//   lvl14.remove();
//   lvl15.remove();
// }

// }// end draw 


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

/// }// end homeButtonSwitch


// the home button functions
function findLevel(){ //show levels on a plain background
  
    scene = 1;
    
    let menuBkg = rect(200, 170, width/1.3, height/ 1.8);
    menuBkg.fill(153, 204, 255, 50);

    lvl1 = createButton("Level 1");
    lvl1.position(250, height/4);
    lvl1.style("background-color", "#ffeb66");
    lvl1.style("padding", "20px 50px");
    lvl1.show = true;

    lvl2 = createButton("Level 2");
    lvl2.position(450, height/4);
    lvl2.style("background-color", "#ffeb66");
    lvl2.style("padding", "20px 50px");
    lvl2.show = true;

    lvl3 = createButton("Level 3");
    lvl3.position(650, height/4);
    lvl3.style("background-color", "#ffeb66");
    lvl3.style("padding", "20px 50px");
    lvl3.show = true;

    lvl4 = createButton("Level 4");
    lvl4.position(850, height/4);
    lvl4.style("background-color", "#ffeb66");
    lvl4.style("padding", "20px 50px");
    lvl4.show = true;

    lvl5 = createButton("Level 5");
    lvl5.position(1050, height/4);
    lvl5.style("background-color", "#ffeb66");
    lvl5.style("padding", "20px 50px");
    lvl5.show = true;
    
    lvl6 = createButton("Level 6");
    lvl6.position(250, height/2.5);
    lvl6.style("background-color", "#ffeb66");
    lvl6.style("padding", "20px 50px");
    lvl6.show = true;

    lvl7 = createButton("Level 7");
    lvl7.position(450, height/2.5);
    lvl7.style("background-color", "#ffeb66");
    lvl7.style("padding", "20px 50px");
    lvl7.show = true;

    lvl8 = createButton("Level 8");
    lvl8.position(650, height/2.5);
    lvl8.style("background-color", "#ffeb66");
    lvl8.style("padding", "20px 50px");
    lvl8.show = true;

    lvl9 = createButton("Level 9");
    lvl9.position(850, height/2.5);
    lvl9.style("background-color", "#ffeb66");
    lvl9.style("padding", "20px 50px");
    lvl9.show = true;

    lvl10 = createButton("Level 10");
    lvl10.position(1050, height/2.5);
    lvl10.style("background-color", "#ffeb66");
    lvl10.style("padding", "20px 50px");
    lvl10.show = true;

    lvl11 = createButton("Level 11");
    lvl11.position(250, height/1.8);
    lvl11.style("background-color", "#ffeb66");
    lvl11.style("padding", "20px 50px");
    lvl11.show = true;

    lvl12 = createButton("Level 12");
    lvl12.position(450, height/1.8);
    lvl12.style("background-color", "#ffeb66");
    lvl12.style("padding", "20px 50px");
    lvl12.show = true;

    lvl13 = createButton("Level 13");
    lvl13.position(650, height/1.8);
    lvl13.style("background-color", "#ffeb66");
    lvl13.style("padding", "20px 50px");
    lvl13.show = true;

    lvl14 = createButton("Level 14");
    lvl14.position(850, height/1.8);
    lvl14.style("background-color", "#ffeb66");
    lvl14.style("padding", "20px 50px");
    lvl14.show = true;

    lvl15 = createButton("Level 15");
    lvl15.position(1050, height/1.8);
    lvl15.style("background-color", "#ffeb66");
    lvl15.style("padding", "20px 50px");
    lvl15.show = true;
  }
  

  function collapseSignUp(){ // show background and 2 inputs
    
    scene = 2;

    let signUp = rect(200, 170, width/1.3, height/ 1.8);
    signUp.fill(255, 255, 153);
  
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

  // function gameLevelDraw(){
  // }// end gameLevelDraw
}