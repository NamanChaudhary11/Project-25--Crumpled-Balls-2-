class Dustbin {
    constructor(x,y,width,height) {
      var options = 
      {
          'isStatic': true
      }
      this.body = Bodies.rectangle(x,y,width,height,options);
      this.image=loadImage("dustbingreen.png");
      this.width = width;
      this.height = height;
      World.add(world, this.body);
    }
    display(){
	  var pos =this.body.position;
	  
      imageMode(CENTER);
      image(this.image,680,521,115,145);
    }
  }
