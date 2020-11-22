class Plinko {
constructor(x,y,r) {
    var options = {
      isStatic : true
    }
    this.r = r;
this.body = Bodies.circle(x,y,this.r,options);
this.color=color(random(0, 255), random(0, 255), random(0, 255));
World.add(world, this.body);
}
display() {
    var pos = this.body.position;
    push();
    translate(pos.x,pos.y);
    rotate(this.body.angle);
    fill("red");
  //  console.log("it's working")
    ellipseMode(CENTER);
    ellipse(0,0,this.r*2,this.r*2);
    console.log(this.body.position.y);
    pop();
}

}