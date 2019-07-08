const MovingObject = require("./moving_object.js");
const Util = require("./utils.js"); // (childclass, parentclass)

function Asteroid(options) {
    this.pos = options.pos;
    this.vel = options.vel;
    this.radius = options.RADIUS;
    this.color = options.COLOR;
};

Util.inherits(Asteroid, MovingObject);

module.exports = Asteroid;

 