class Pig{
    constructor(x,y,width,height){
        var options={
            restitution:0.5,
            friction:0.5,
            density:0.5
        }
        //create a physics rect
        this.body=Bodies.rectangle(x,y,width,height,options);
        World.add(world,this.body);

        //make width and height as this.width and this.height to refer in display
        this.width=width;
        this.height=height;
    }
    display(){
        rectMode(CENTER);
        fill("red");
        push();
        translate(this.body.position.x, this.body.position.y)
        rotate(this.body.angle);    
        rect(0,0, this.width,this.height );
        pop();
    }
}