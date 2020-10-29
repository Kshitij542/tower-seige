class Block{
    constructor(x, y, width, height, angle) {
        var options = {
          restitution : 0.7,
          friction : 0.6,
          isStatic : false,
        }
        this.body = Bodies.rectangle(x, y, width, height, options);
        this.width = width;
        this.height = height;
        World.add(world, this.body);
      }
     
 display(){
  //console.log(this.body.speed);
  if(this.body.speed < 3){
   super.display();
  }
  else{
    World.remove(world, this.body);
    push();
    this.Visiblity = this.Visiblity - 5;
    tint(255,this.Visiblity);
    image(this.image, this.body.position.x, this.body.position.y, 50, 50);
    pop();
  }
  
}

score(){
 if(this.Visiblity<0&&this.Visiblity>-1005)
 score++
}

};