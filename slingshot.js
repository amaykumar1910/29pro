class Slingshot{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB:pointB,
            stiffness : 0.04,
            lenght:20
        }
        this.pointB = pointB
        this.sling = constraint.create(options);
        World.add(world, this.sling); 
    }
    fly(){
        this.sling.bodyA = null;
    }
    diaplay(){
        if(this.sling.bodyA){
            var pointA = this.sling.bodyA.position;
            var pointB = this.pointB;

            strokeWeight(4);
            fill("red");
        line(positionA.x,pointA.fly,pointB.x,pointB.y);    
        }
    }
}