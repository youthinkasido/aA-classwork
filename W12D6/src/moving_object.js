function MovingObject(options) {
    this.pos = options.pos;
    this.vel = options.vel;
    this.radius = options.radius;
    this.color = options.color;
}

// const Circle = function(centerX, centerY, radius, color) {
//     this.centerX = centerX;
//     this.centerY = centerY;
//     this.radius = radius;
//     this.color = color;
// };

MovingObject.prototype.draw = function (ctx) { //does fillstyle come from '2d'
    let [x, y] = this.pos
    ctx.fillStyle = this.color;
    ctx.beginPath(); // draws a point at the arc 
    ctx.arc(
        x,
        y,
        this.radius,
        0,
        2 * Math.PI,
        false
    );
    ctx.fill();
};

MovingObject.prototype.move = function () { // distance between start and end
    let [x1, y1] = this.pos;
    let [x2, y2] = this.vel;
    // let dist = Math.sqrt((x1 - x2) ** 2 + (y1 - y2) ** 2)
    // Dist([x1, y1], [x2, y2]) = sqrt((x1 - x2) ** 2 + (y1 - y2) ** 2)
    this.pos = [(x1 + x2), (y1 + y2)]
    // this.draw(ctx)
};

// increment pos by the vel until x2,y2 is reached

// this is math, not JavaScript
// Dist([x_1, y_1], [x_2, y_2]) = sqrt((x_1 - x_2) ** 2 + (y_1 - y_2) ** 2)

// Norm([x_1, y_1]) = Dist([0, 0], [x_1, y_1]) // norm is the vectors norm, the velocity vector of this object, obj.vel = [3, 4] 
// 3 horizontal pixels and 4 vertical pixels per unit of time, overall spped is 5 px/unit of time

//ctx

// const mo = new MovingObject(
//     { pos: [30, 30], vel: [10, 10], radius: 5, color: "#00FF00" }
// );

// var x = {
//    pos: [30, 30],
//    vel: [10, 10], 
//    radius: 5, 
//    color: "#00FF00" 
// }

// const y = new Object(pos, vel, radius, color)

// const asteroid = new MovingObject(x);

module.exports = MovingObject;
// module.exports = {
//     MovingObject,
//     move: MovingObject.prototype.move
// }