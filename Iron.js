class Iron{
	constructor(x,y,r){
		var options = {
			'restitution':0.8,
			'friction':3,
			'density':30,

	}
	this.body = Bodies.rectangle(x, y, 50, 50, options);
    this.width = 50;
    this.height = 60;
    World.add(world, this.body);
  };
  display(){
    var pos =this.body.position;
    var angle = this.body.angle;
    push();
    translate(pos.x, pos.y);
    rotate(angle);
    rectMode(CENTER);
    strokeWeight(4);
    stroke("blue")
    fill(255);
    rect(0, 0, this.width, this.height);
    pop();
  }
};