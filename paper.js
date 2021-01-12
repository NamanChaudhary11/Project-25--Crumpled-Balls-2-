class Paper{
    constructor(x,y){
       var options=
       {
       'isStatic':false,
       'restitution':0.1,
	     'friction':0.5,
	     'density':1.2
       }
    this.body = Bodies.rectangle(x,y,70,70,options);
    this.width=50;
    this.height=100;
    this.image=loadImage("paper.png");
    World.add(world, this.body);
}
  display(){
    var pos =this.body.position;
    push();
    translate(pos.x,pos.y);
    imageMode(CENTER);
    image(this.image,0,0,this.width,this.height);
    pop(); 
  }
}

    