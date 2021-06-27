// Name       : Dawoon Jung
// Assignment : Make a Game
// Course     : CS099
// Spring 2021

let x_rate = 5;
let y_rate = 10;

class Ball1
{
    constructor(x,y)
    {
        this.x = x;
        this.y = y;
        
    }
        
    update() {
        this.x += x_rate;
        this.y += y_rate;
        if(this.x -20 <0 || this.x +20 > width)
        {
          x_rate *= -1;
        }
        if(this.y -20 <0 || this.y +20 > height)
        {
          y_rate *= -1;
        }
        
        
      }

    draw()
    {
        let r = random(255);
        let g = random(255);
        let b = random(255);
        push();
        fill(r,g,b);
        circle(this.x,this.y,40);
        pop();
    }

    bounce1(Paddle1,paddle2)
    {
      //paddle1_right side
      if(this.y >Paddle1.y - 40
        && this.y < Paddle1.y + 40
        && this.x - 20 <= Paddle1.x + 15
        && this.x + 20 > Paddle1.x +15
        && x_rate < 0)
        {
          x_rate *= -1;
        }
        //paddle1_left side
        if(this.y >Paddle1.y - 40
        && this.y < Paddle1.y + 40
        && this.x + 20 > Paddle1.x - 15
        && this.x - 20 < Paddle1.x - 15
        && x_rate > 0)
        {
          x_rate *= -1;
        }
        //paddle1_up side
        if(this.x >Paddle1.x-15
          &&this.x < Paddle1.x+15
          &&this.y +20 >= Paddle1.y-40
          &&this.y -20 < Paddle1.y +40
          && y_rate >0)
          {
            y_rate *= -1;
          }
        //paddle1_bottom_side
        if(this.x >Paddle1.x-15
          &&this.x < Paddle1.x+15
          &&this.y -20 <=Paddle1.y+40
          &&this.y +20 > Paddle1.y -40
          && y_rate <0)
          {
            y_rate *= -1;
          }

        //paddle2_left side
        if(this.y >paddle2.y - 40
          && this.y < paddle2.y + 40
          && this.x + 20 > paddle2.x - 15
          && this.x - 20 < paddle2.x - 15
          && x_rate > 0)
          {
            x_rate *= -1;
          }
          //paddle2_right side
          if(this.y >paddle2.y - 40
            && this.y < paddle2.y + 40
            && this.x - 20 <= paddle2.x + 15
            && this.x + 20 > paddle2.x +15
            && x_rate < 0)
            {
              x_rate *= -1;
            }
            //paddle2_up side
          if(this.x >paddle2.x-15
            &&this.x < paddle2.x+15
            &&this.y +20 >= paddle2.y-40
            &&this.y -20 < paddle2.y +40
            && y_rate >0)
            {
              y_rate *= -1;
            }
          //paddle2_bottom_side
          if(this.x >paddle2.x-15
            &&this.x < paddle2.x+15
            &&this.y -20 <=paddle2.y+40
            &&this.y +20 > paddle2.y -40
            && y_rate <0)
            {
              y_rate *= -1;
            }

        
    }
}

