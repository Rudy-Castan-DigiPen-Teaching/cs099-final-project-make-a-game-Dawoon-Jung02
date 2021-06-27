// Name       : Dawoon Jung
// Assignment : Make a Game
// Course     : CS099
// Spring 2021

class Paddle1
{
    constructor(x , y)
    {
        this.x = x;
        this.y  = y;
    }

    update()
    {
        if(keyIsDown(87))
        {
            this.y -=10;
        }
        if(keyIsDown(83))
        {
            this.y +=10;
        }
    }

    draw()
    {
        push();
        fill("orange");
        rectMode(CENTER);
        rect(this.x , this.y ,30,80);
        pop();
    }

}