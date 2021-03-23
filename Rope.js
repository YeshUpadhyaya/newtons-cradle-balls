class Rope {
    constructor(a,b){
        var options={
            bodyA:a,
            pointB:b,
            length:150,
            stiffness:0.5
        }
        this.rope=Matter.Constraint.create(options)
        World.add(world,this.rope);
    }
    display(){
        var b1=this.rope.bodyA.position;
        var b2=this.rope.pointB;
        line(b1.x,b1.y,b2.x,b2.y);
    }
}