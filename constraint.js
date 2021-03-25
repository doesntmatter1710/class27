class String{
    constructor(bodyA,bodyB) {
 var options = {
     bodyA:bodyA,
     bodyB:bodyB,
     length:15,
     stiffness:0.05
 }
this.string = Constraint.create(options)
World.add(world,this.string)
    }
display() {
    var pointA=this.string.bodyA.position
    var pointB=this.string.bodyA.position
    strokeWeight(5)
    line(pointA.x,pointA.y,pointB.x,pointB.y)
}
}
