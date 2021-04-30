class Ball{
    constructor(x, y, radius) {
      var options = {
        'restitution':1,
        'friction':1,
        'density':2
      }
      this.body = Bodies.circle(x, y, radius, options);
      this.radius = radius;
      World.add(world, this.body);
    }
    display(){
      var pos = this.body.position;
      noStroke();
      ellipse(pos.x,pos.y+13,this.radius, this.radius)
    }
  };