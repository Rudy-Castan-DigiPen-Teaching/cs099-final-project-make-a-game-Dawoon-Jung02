1. Shapes

-You can simply see three square buttons on the game page.
When you enter the starting game, you can see buttons that allow you to select easy mode and hard mode.
In each mode, the game starts.

2. colors

- I set the value of the ball's r,g,b to random, making the ball color keep changing.

3. variables

- I put the value of x and y in the ball and paddle as a variable.

- And the x-coordinates and y-coordinates of objects using class are represented using 'var'

4. Conditional Statements

- Using Conditional Statements, we added the ability to move on to the next page.
Within the terms of the if statement, the x-position range of the mouse and the y-position range are determined.

- A conditional statement was used to change the direction of the ball when it came into contact with the ball.
1) When the ball's x-coordinate minus its radius is less than or greater than the x-axis width at the center of the paddle.
2) When the ball's y-coordinate enters the paddle's y-coordinate
3) When the ball's x_rate or y_rate is greater than or less than zero

- When you're inside a specific x,y coordinate within a specific page, you click the mouse to act as a 'home button'.

5. Loops

- It was used to indicate the sound of the game.

6. Functions

- It used switch and case functions to create new pages.

- They used noise and vertex to create strange shapes.

- In my game, click the mouse and you'll see 50 balls scatter.
Here I used a number of 'for' functions.

- I used 'function mousePressed' which allows me to click the mouse in a certain range and go to the next page.

- I used 'function keypressed' as a feature that allows me to return to the home screen at the end of the game.

7. Classes

- i have classes 'Vec' , 'Vec2_particle', 'Paddle2',  'Paddle1', 'Ball2', 'Ball1'
class ball is a class of balls in easy mode and hard mode, respectively, in different settings.
A class paddle is a class to indicate a paddle that can bounce a ball.
To allow the ball to bounce when the paddle is in contact with the ball, a function called bounce is added to the ball class.
Class vec is used to calculate ball movement.
The class vec_particle was used to express the ball.

8. Arrays

- On the first screen of my game, you can see the ball spread out when you click the mouse.
At this time, the variable extension was taken and Array was used.
