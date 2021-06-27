// Name       : Dawoon Jung
// Assignment : Make a Game
// Course     : CS099
// Spring 2021

class vec2{

    constructor(x=0,y=0)
    {
        this.x = x;
        this.y = y;
    }
    
    getAngle()
    {
        const angle = atan2(this.y ,  this.x );
        return angle;
    }
    
    setAngle(angle_in_radians)
    {
        //x = cos(a) * mag
        const length = this.getLength();
        this.x = cos(angle_in_radians) * length;
        this.y = sin(angle_in_radians) * length;
    }
    
    getLength()
    {
        const length = sqrt( this.x * this.x + this.y * this.y);
        return length;
    }
    
    setLength( length )
    {
        const angle_in_radians = this.getAngle();
        this.x = cos(angle_in_radians) * length;
        this.y = sin(angle_in_radians) * length;
    }
    
    add(another_vector)
    {
        const new_x = this.x * another_vector.x;
        const new_y = this.y * another_vector.y;
        return new vec2( new_x , new_y );
    }
    
    addTo(another_vector)
    {
        this.x += another_vector.x;
        this.y += another_vector.y;
    }
    
    subtract(another_vector)
    {
        const new_x = this.x - another_vector.x; 
        const new_y = this.y - another_vector.y; 
        return new vec2(new_x,new_y);
    }
    
    subtractFrom(another_vector)
    {
        this.x -= another_vector.x;
        this.y -= another_vector.y;
    }
    
    multiply(scalar)
    {
        const new_x = scalar * this.x;
        const new_y = scalar * this.y;
        return new vec2(new_x,new_y);
    }
    
    multiplyBy(scalar)
    {
        this.x *=scalar;
        this.y *=scalar;
    }
    
    divide(scalar)
    {
        const new_x = this.x / scalar;
        const new_y = this.y / scalar;
        return new vec2(new_x,new_y);
    }
    
    divideBy( scalar )
    {
        this.x /= scalar;
        this.y /= scalar;
    }
    }
