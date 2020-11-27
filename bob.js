class Bob{
    constructor(x,y,radius){
        var options = {
            isStatic:false,
            'restitution':0.9,
            'friction':0.5,
            'density':0.9
        }
        this.body = Bodies.circle(x,y,radius,options);
       // this.image= loadImage("paper.png");
        //this.width= width;
        this.radius=radius;
        World.add(world,this.body);
      
     
    }
    //Changed here -> EllipseMode, Ellipse Params
    display (){
        var pos=this.body.position;
        var angle = this.body.angle;
        push();
        translate(pos.x,pos.y); 
        rotate(angle);
        ellipseMode(RADIUS);
        fill("black");
        ellipse(0,0, 45,45);        
        pop();
    }
};
