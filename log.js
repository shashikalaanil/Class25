class Log{
    constructor(x,y,height,angle){
        var options={
            restitution:0.5,
            friction:0.5,
            density:0.5
        }
        //create a physics rect
        this.body=Bodies.rectangle(x,y,20,height,options);
        Matter.Body.setAngle(this.body,angle);
        World.add(world,this.body);

        //make width and height as this.width and this.height to refer in display
        this.width=20;
        this.height=height;
    }
    display(){
        rectMode(CENTER);
        fill(255);
        push();
        translate(this.body.position.x, this.body.position.y)
        rotate(this.body.angle);    
        rect(0,0, this.width,this.height );
        pop();
    }
}