class Block {
    constructor(x, y, w, h, c) {
        var options = {
            restitution: 0.04,
            friction: 0,
            density: 0
        }
        this.body = Bodies.rectangle(x, y, w, h, options)
        this.width = w;
        this.height = h;
        this.color = c;
        World.add(world, this.body);
    }
    display() {

        var pos = this.body.position;
        var angle = this.body.angle;

        push();
        fill(this.color);
        rotate(angle);
        rectMode(CENTER)
        rect(pos.x, pos.y, this.width, this.height);
        pop();

    }
}
