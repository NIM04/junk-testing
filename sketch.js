let lvl1;
let lvl2;
let lvl3;
let lvl4;
let lvl5;
let lvl6;
//etc until 14

let state = 0;

function setup(){

rectMode(CENTER);
createCanvas(windowWidth, windowHeight);

drawLevelButtons();



}// end setup

function draw(){

background(51, 102, 153);


if(state == 0){

    // draw menu

    if(lvl1.mouse.pressing()){
        state = 1;
        console.log("Button 1 is working")
    }
}

}// end draw

function drawLevelButtons(){

lvl1 = new Sprite((1/4) * windowWidth, (1/6) * windowHeight, (1/6) * windowWidth, (1/8) * windowHeight, 'n');
lvl1.text = "Level 1";

lvl2 = new Sprite((2/4) * windowWidth, (1/6) * windowHeight, (1/6) * windowWidth, (1/8) * windowHeight, 'n');
lvl2.text = "Level 2";

lvl3 = new Sprite((3/4) * windowWidth, (1/6) * windowHeight, (1/6) * windowWidth, (1/8) * windowHeight, 'n');
lvl3.text = "Level 3";

//tbc

}