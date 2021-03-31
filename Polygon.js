class Polygon{
    constructor(x,y){
        var options={
            isStatic:false,
            restitution:0,
            friction:1,
            density:1.5
          }
          this.radius=40;
          this.body=Bodies.rectangle(x,y,this.radius,this.radius,options);          
          this.image=loadImage("polygon.png")
          World.add(world,this.body);
          
    }
    display(){
        var pos=this.body.position;
        var angle=this.body.angle;
        push();
        translate(pos.x,pos.y) 
        rotate(angle);
        imageMode(CENTER);
        image(this.image,0,0,this.radius,this.radius);
        pop();
    }
} 