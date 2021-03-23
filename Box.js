class Box {
    constructor(x,y){
        this.bodie=Bodies.circle(x,y,20,{density:2,restitution:1})
        World.add(world,this.bodie)
    }
    display(){
        push();
        translate(this.bodie.position.x,this.bodie.position.y)
        angleMode(RADIANS)
        rotate(this.bodie.angle);
        ellipseMode(CENTER);
        ellipse(0,0,40,40);
        pop();
    }
}
