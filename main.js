//hi !!!! :DDDDD
var canvas=new fabric.Canvas("myCanvas");
//width height block
width=30;
height=30;
//x y for player
x=10;
y=10;
var player_object="";

function player_update(){
    fabric.Image.fromURL("player.png",function(img){
        player_object=img;
        player_object.scaleToWidth(150);
        player_object.scaleToHeight(140);
        player_object.set({
            top:y,left:x
        });
        canvas.add(player_object);
    });
        
}
function new_image(get_image){
    fabric.Image.fromURL(get_image,function(img){
        block_object=img;
        block_object.scaleToWidth(width);
        block_object.scaleToHeight(height);
        block_object.set({
            top:y,left:x
        });
        canvas.add(block_object);
    });
        
}
window.addEventListener("keydown",mykeydown);
function mykeydown(e){
    keypressed=e.keyCode;
    console.log (keypressed);
if (e.shiftKey == true && keypressed == "80"){
    console.log ("P and shift pressed together");
    width=width+10;
    height=height+10;
    document.getElementById("current_width").innerHTML=width;
    document.getElementById("current_height").innerHTML=height;
}
if (e.shiftKey == true && keypressed == "77"){
    console.log ("M and shift pressed together");
    width=width-10;
    height=height-10;
    document.getElementById("current_width").innerHTML=width;
    document.getElementById("current_height").innerHTML=height;
}
//ho ho ho
if (keypressed == "38"){
    up();
    console.log("up");
}
if (keypressed == "40"){
    down();
    console.log("down");
}
if (keypressed == "37"){
    left();
    console.log("left");
}
if (keypressed == "39"){
    right();
    console.log("right");
}
if(keypressed == "87"){
    console.log("w");
    new_image("wall.jpg");
}
if(keypressed == "71"){
    console.log("g");
    new_image("ground.png");
}
if(keypressed == "76"){
    console.log("l");
    new_image("light_green.png");
}
if(keypressed == "84"){
    console.log("t");
    new_image("trunk.jpg");
}
if(keypressed == "82"){
    console.log("r");
    new_image("roof.jpg");
}
if(keypressed == "89"){
    console.log("y");
    new_image("yellow_wall.png");
}
if(keypressed == "68"){
    console.log("d");
    new_image("dark_green.png");
}
if(keypressed == "85"){
    console.log("u");
    new_image("unique.png");
}
if(keypressed == "67"){
    console.log("c");
    new_image("cloud.jpg");
}
}

// ho ho ho
// merry christmas
// its not christmas
// 

function up(){
    if(y>=0){
        y = y-height;
        console.log("blockheight="+height);
        console.log("x="+x+",y="+y);
        canvas.remove(player_object);
        player_update();

    }
}
function down(){
    if(y<=(canvas.height-150)){
        y = y+height;
        console.log("blockheight="+height);
        console.log("x="+x+",y="+y);
        canvas.remove(player_object);
        player_update();

    }
}

function left(){
    if(x>=0){
        x = x-width;
        console.log("blockwidth="+width);
        console.log("x="+x+",y="+y);
        canvas.remove(player_object);
        player_update();

    }
}

function right(){
    if(x<=(canvas.width-150)){
        x = x+width;
        console.log("blockwidth="+width);
        console.log("x="+x+",y="+y);
        canvas.remove(player_object);
        player_update();

    }
}