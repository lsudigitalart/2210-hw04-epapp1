
//Variables
var x = 200;
var y = 200;
var speed = 0.5



function setup(){
    createCanvas(500, 500);
    background(180,96, 145);
    frameRate(100);
}

// 
function draw(){
    noStroke();

    for(var x=200; x > 0; x){
        if(keyIsPressed){
            background(180,96, 145);
            if ((key == 'd') || (key == 'D')) {
                x++;
                x+= speed
            }
            else if ((key == 'a')|| (key == 'A')){
                x--;
            }
            else if ((key == 'w')|| (key == 'W')){
                y--;
            }
            else if ((key == 's')|| (key == 'S')){
                y++;
            }
        }
    
        //cat head
        beginShape();
        fill(1000)
        vertex(x+20, y+35)
        vertex(x+5, y+25);
        vertex(x+5, y+15);
        vertex(x+10, y);
        vertex(x+20, y+5);
        vertex(x+30, y+5);
        vertex(x+40, y);
        vertex(x+45, y+15);
        vertex(x+45, y+25);
        vertex(x+30, y+35)
        endShape();
        fill(0)
        rect(x+12, y+15, 5,3)
        rect(x+32, y+15, 5,3)
    

    }

    if(keyIsPressed){
        background(180,96, 145);
        if ((key == 'd') || (key == 'D')) {
            x++;
            x+= speed
        }
        else if ((key == 'a')|| (key == 'A')){
            x--;
        }
        else if ((key == 'w')|| (key == 'W')){
            y--;
        }
        else if ((key == 's')|| (key == 'S')){
            y++;
        }
    }

    //cat head
    beginShape();
    fill(1000)
    vertex(x+20, y+35)
    vertex(x+5, y+25);
    vertex(x+5, y+15);
    vertex(x+10, y);
    vertex(x+20, y+5);
    vertex(x+30, y+5);
    vertex(x+40, y);
    vertex(x+45, y+15);
    vertex(x+45, y+25);
    vertex(x+30, y+35)
    endShape();
    fill(0)
    rect(x+12, y+15, 5,3)
    rect(x+32, y+15, 5,3)
    endShape();


}