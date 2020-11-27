class Base {
    constructor(x, y, w, h) {
        var options = {
            restitution: 0.8,
            friction: 1,
            density: 1.2,
            isStatic: true
        }
        this.body = Bodies.rectangle(x, y, w, h, options)
        this.width = w;
        this.height = h;
        World.add(world, this.body);
    }
    display() {
        var pos = this.body.position;
        var angle = this.body.angle;
        push();
        strokeWeight(0);
        fill("brown");
        rotate(angle);
        rectMode(CENTER);
        rect(pos.x, pos.y, this.width, this.height);
        pop();
    }
}