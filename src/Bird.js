class Bird extends BaseClass {
  constructor(x,y){
    super(x,y,50,50);
    this.image = loadImage("sprites/bird.png");
    this.smokeimage = loadImage("sprites/smoke.png")
    this.trayectory = []
  }

  display() {
    super.display();

    if (this.body.velocity.x > 10 && this.body.position.x > 200) {
      var pos = [this.body.position.x, this.body.position.y]
      this.trayectory.push(pos);
    }

    for (var i = 0; i < this.trayectory.length; i++) {
      image(this.smokeimage, this.trayectory[i][0], this.trayectory[i][1])
    }
  }
}
