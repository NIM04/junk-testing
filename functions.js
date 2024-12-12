

//home/welcome screen:

function buttonsCust(){ //formats home screen
  
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

function collapseSignUp(){ // show background and 2 inputs
    
    scene = 2;

    let signUp = rect(200, 170, width/1.3, height/ 1.8);
    signUp.fill(153, 204, 255, 50);
  
}//end collapseSignUp

function collapseSignIn(){

    scene = 3;

}//end collapseSignIn

function collapseSettings(){//should have vol slider for now
    
    scene = 4;

}//end collapseSettings

function leaderboardDisplay(){ // this should link into a high score and login system database
    
    scene = 5;

}//end leaderboardDisplay

function back(){// back button
    scene -= 1;

    removeButtons();
    
    if(scene == 0){//make buttons reappear on home screen
        playButton.show();
        signIn.show();
        signUp.show()
        settings.show();
        leaderboard.show();
    }//end if

}//end back

function removeButtons(){//remove stubborn buttons

    if(scene != 1){//remove levels when not on levels screen
        // for(let i =1; i <= 15; i++){
        //     String(lvl + [i]).hide();
        // }//end for



    }// end if

}//end removeButtons




// levels screen:

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
  }// end findLevel