// Name       : Dawoon Jung
// Assignment : Make a Game
// Course     : CS099
// Spring 2021


let explosion = []
const NUMBER_PARTICLES = 50;

var position
{
    x_position = 400
    y_position = 300
}

let BACKGROUND = 'background'
let BACKGROUND_SOUND

let gImages = []

function preload()
{
    gImages[BACKGROUND] = loadImage('media/background.jpg');
    BACKGROUND_SOUND = loadSound('media/background_sound.wav');
}

function setup()
{
    createCanvas( 800, 600 );

    BACKGROUND_SOUND.loop()

    paddle2 = new Paddle2(width-100,y_position);
    paddle1 = new Paddle1(100,y_position);
    ball1 = new Ball1(x_position,y_position);
    ball2 = new Ball2(x_position,y_position);

    for(let i = 0; i < NUMBER_PARTICLES; ++i)
    {
        explosion.push(new Vec2_particle(x_position, y_position));
    }
}




let current_page = 0;

function draw()
{
    
    background( gImages[BACKGROUND] );
    
    switch(current_page)
    { 
        case 0:
            {
                textSize(50)
                text('number: '+explosion.length, width/2-110, 50)
                for(let particle of explosion)
                {
                    particle.update();
                    particle.draw();
                }

            for(let i = explosion.length - 1; i >= 0; --i )
            {
                
                let particle = explosion[i];
                if(particle.position.x > width || particle.position.x <0 || 
                    particle.position.y > height || particle.position.y < 0)
                    {
                        explosion.splice( i, 1);
                    }
            }
            push();
            strokeWeight(4);
            rectMode(CENTER);
            //starting game button
            rect(width/7+20,height -150,200,100,5);
            //producer button
            rect(width/7+270,height -150,200,100,5);
            //how to play button
            rect(width/7+520,height -150,200,100,5);
            textSize(30);
            text("starting game",width/7-80,height -140);
            text("producer",width/7+210,height -140);
            text("How to play",width/7+440,height -140);
            textAlign(BOLD)
            textSize(60)
            text("bounce Ball",width/3-30,height/2)
            pop();
            }break;
        case 1:
            {
                push();
                //home button
                rectMode(CENTER);
                strokeWeight(4);
                rect(width-60,60,100,100,5);
                fill("black");
                triangle(width-60,20,width-90,60,width-30,60);
                rect(width-60,75,50,30);
                pop();
                push();
                strokeWeight(4);
                rectMode(CENTER);
                //easy mode button
                rect(width/4,height -150,300,100,5);
                //hard mode button
                rect(width-220,height -150,300,100,5);
                textSize(40);
                text("easy mode",width/4-100,height -145);
                text("hard mode",width-320,height -145);
                pop();
            }break;
        case 2:
            {
                push();
                textSize(40);
                text("made by Dawoon Jung",width/5+50, height/2);
                rectMode(CENTER);
                //home button
                strokeWeight(4);
                rect(width-60,60,100,100,5);
                rectMode(CENTER);
                fill("black")
                triangle(width-60,20,width-90,60,width-30,60);
                rect(width-60,75,50,30);
                pop();
                push();
                translate(width/1.5,height/1.3);
                stroke(0);
                strokeWeight(5);
                fill("yellow");
                beginShape();
                for(let b = 0; b <TWO_PI; b+= 0.1)
                {
                    let r = noise(b) * 200;
                    let x = r*cos(b);
                    let y = r*sin(b);
                    vertex(x,y);
                }
                endShape(CLOSE);
                pop();
            }break;
        case 3:
            {
                push();
                //home button
                rectMode(CENTER);
                strokeWeight(4);
                rect(width-60,60,100,100,5);
                fill("black");
                triangle(width-60,20,width-90,60,width-30,60);
                rect(width-60,75,50,30);
                pop();
                textSize(40);
                text("this game is bouncing ball game",20,height/5);
                text("this game need 2 player",20,height/5+40);
                text("player 1 can move by pushing 'w', 's' key.",20,height/5+80);
                text("player 2 can move by pushing",20,height/5+120);
                text("'UP_ARROW' , 'DOWN_ARROW' key",20,height/5+160);
                text("you have to stop the ball",20,height/5+200);
                text("from entering the net",20,height/5+240);
                //noise part
                push();
                translate(width/1.5,height/1.3);
                stroke(0);
                strokeWeight(5);
                fill("yellow");
                beginShape();
                for(let a = 0; a <TWO_PI; a+= 0.01)
                {
                    let r = noise(a) * 200;
                    let x = r*cos(a);
                    let y = r*sin(a);
                    vertex(x,y);
                }
                endShape(CLOSE);
                pop();
            }break;
        case 10:
            //easy mode game
            {
                push();
                strokeWeight(20);
                line(0,0,0,height/2-80);
                line(0,height,0,height/2+80);
                line(0,0,width,0);
                line(0,height,width,height);
                line(width,0,width,height/2-80);
                line(width,height,width,height/2+80);
                //back button
                rectMode(CENTER);
                strokeWeight(4);
                rect(width-60,60,100,100,5);
                textSize(30)
                text("back",width-85,55)
                text("button",width-105,80)
                paddle2.update();
                paddle2.draw();
                paddle1.update();
                paddle1.draw();
                ball1.draw();
                ball1.update();
                ball1.bounce1(paddle1,paddle2);
                strokeWeight(0.5);
                line(width/2,0,width/2,height);
                pop();
                if(ball1.x - 20 < 0 && ball1.y -20 > height/2 -80 && ball1.y + 20 <height/2 +80)
                    {
                        current_page = 20;
                    }
                if(ball1.x + 20 > width && ball1.y -20 > height/2 -80 && ball1.y + 20 <height/2 +80)
                    {
                        current_page = 21;
                    }
            }break;
            case 11:
                //hard mode game
                {
                push();
                strokeWeight(20);
                line(0,0,0,height/2-80);
                line(0,height,0,height/2+80);
                line(0,0,width,0);
                line(0,height,width,height);
                line(width,0,width,height/2-80);
                line(width,height,width,height/2+80);
                rectMode(CENTER);
                strokeWeight(0);
                pop();
                //back button
                push();
                rectMode(CENTER);
                strokeWeight(4);
                rect(width-60,60,100,100,5);
                textSize(30);
                text("back",width-85,55);
                text("button",width-105,80);
                strokeWeight(0.5);
                line(width/2,0,width/2,height);
                pop();
                push();
                strokeWeight(4);
                paddle2.update();
                paddle2.draw();
                paddle1.update();
                paddle1.draw();
                ball2.draw();
                ball2.update();
                ball2.bounce1(paddle1,paddle2);
                pop();
                if(ball2.x - 20 < 0 && ball2.y -20 > height/2 -80 && ball2.y + 20 <height/2 +80)
                    {
                        current_page = 20;
                    }
                if(ball2.x + 20 > width && ball2.y -20 > height/2 -80 && ball2.y + 20 <height/2 +80)
                    {
                        current_page = 21;
                    }
                }break;
            case 20:
                {
                    textSize(70);
                    text("player 2 win!!",width/3 - 50, height/3+50);
                    text("any key push",width/3 - 50, height/3+90);
                }break;
            case 21:
                {
                    textSize(70);
                    text("player 1 win!!",width/3 - 50, height/3+50);
                    text("any key push",width/3 - 50, height/3+90);
                }break;
    }
    
}

function mousePressed()
{
    switch(current_page)
    {
        case 0:
            {
                for(let i = 0; i < NUMBER_PARTICLES; ++i)
                {
                    explosion.push(new Vec2_particle(mouseX, mouseY));
                }
                //starting game button
                if(mouseX >width/7 -80 && mouseX < width/7 +120 & mouseY > height -200 && mouseY < height -100)
                {
                    current_page = first_screen;    
                }
                //producer button
                if(mouseX >width/7+170 && mouseX < width/7 +370 & mouseY > height -200 && mouseY < height -100)
                {
                    current_page = producer_screen;
                }
                //how to play button
                if(mouseX >width/7+420 && mouseX < width/7 +620 & mouseY > height -200 && mouseY < height -100)
                {
                    current_page = play_screen;
                }
            }break;
            case 1:
                {
                    //home button
                    if(mouseX >width -110 && mouseX <width -10 && mouseY > 10 && mouseY < 110)
                    {
                        current_page = 0;
                    }
                    //easy mode button
                    if(mouseX >width/4 -150 && mouseX < width/4 +150 & mouseY > height -200 && mouseY < height -100)
                    {
                        current_page = easy_mode_screen;
                    }
                    //hard mode button
                    if(mouseX >width -370 && mouseX < width -70 & mouseY > height -200 && mouseY < height -100)
                    {
                        current_page = hard_mode_screen;
                    }
                }break;
            case 2:
                {
                    //home button
                    if(mouseX >width -110 && mouseX <width -10 && mouseY > 10 && mouseY < 110)
                    {
                        current_page = 0;
                    }
                }break;
            case 3:
                {
                    //home button
                    if(mouseX >width -110 && mouseX <width -10 && mouseY > 10 && mouseY < 110)
                    {
                        current_page = 0;
                    }
                }break;
            case 10:
                {
                    //back button
                    if(mouseX >width -110 && mouseX <width -10 && mouseY > 10 && mouseY < 110)
                    {
                        current_page = 1;
                        
                    }
                    
                }break;
            case 11:
                {
                    //back button
                    if(mouseX >width -110 && mouseX <width -10 && mouseY > 10 && mouseY < 110)
                    {
                        current_page = 1;
                       
                    }  
                }break;
    }
}

function keyPressed()
{
  switch(current_page)
  {
    case 20:
      {
        current_page = 0;
        setup();
    
      }
    case 21:
    {
        current_page = 0;
        setup();
        
    }
  }

}
