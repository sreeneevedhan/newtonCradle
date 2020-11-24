class Rope {

    constructor(bodyA,pointB){
        var options={
        length:200,
        stiffness:0.04,
        bodyA:bodyA,
        pointB:pointB
        }
      
        
    this.pointB=pointB;
        this.chain= Constraint.create(options);
        World.add(world,this.chain);
    }
    display(){
    var pointA=this.chain.bodyA.position;
    var pointB=this.pointB;
    strokeWeight(4);
        line (pointA.x,pointA.y,pointB.x,pointB.y);
    }
    
    
    
    
    }