// Name       : Dawoon Jung
// Assignment : Make a Game
// Course     : CS099
// Spring 2021

class Vec2_particle
{
    constructor(start_x, start_y)
    {
        this.position =new vec2(start_x, start_y);
        this.velocity = new vec2(1,0);
        const speed = random(2,10);
        const direction = random(TWO_PI);
        this.velocity.setLength(speed);
        this.velocity.setAngle(direction);
    }



    update()
    {
        this.position.addTo(this.velocity);
    }

    draw()
    {
        let r = random(0,255);
        let g = random(0,255);
        let b = random(0,255);
        push();
        fill(r,g,b);
        circle(this.position.x, this.position.y, 20);
        pop();
    }
}