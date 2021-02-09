class rope {
    constructor(bodyA,pointB) {
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.004,
            length: 20
        }
        this.pointB = pointB;
        this.RoPe = Constraint.create(options);
        World.add(world, this.RoPe);
    }
    fly() {
        this.RoPe.bodyA = null;
    }

    display(){
        if(this.RoPe.bodyA) {
        var pointA = this.RoPe.bodyA.position;
        var pointB = this.pointB;
        strokeWeight(4);
        line(pointA.x, pointA.y, pointB.x, pointB.y);
        }
    }
}