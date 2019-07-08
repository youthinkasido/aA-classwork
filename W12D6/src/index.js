const MovingObject = require("./moving_object.js");
const Asteroid = require("./asteroid.js");
const Util = require("./utils.js");

window.MovingObject = MovingObject;
window.Asteroid = Asteroid;
window.Util = Util;
// window.MovingObject.move = move;
// window.
console.log('webpack works yo');

//document refers to index.html
//if page is loaded, run callback function -- find the specified tag
document.addEventListener('DOMContentLoaded', (event) => {
    const doc = document.getElementById('game-canvas'); // looks in html doc grabs game-canvas tag
      
    const mo = new MovingObject(
        { pos: [400, 300], vel: [1, 1], radius: 25, color: "#00FF00" } 
    );
    const lo = new MovingObject(
        { pos: [200, 200], vel: [1, 1], radius: 25, color: "gray" }
    );
    const asteroid = new Asteroid(
        { pos: [150, 150], vel: [5, 5], RADIUS: 35, COLOR: "brown" }
    );
        
    window.mo = mo;
    window.asteroid = asteroid;
    window.lo = lo;

    let ctx = doc.getContext('2d'); // set context equal to canvas element in html
        // draws circle when page loads, ctx expects options hash
       
       
        const animateCallback = () => { // is this what we're going to be using to render animation?
            ctx.clearRect(0, 0, 800, 600);
            mo.draw(ctx); 
            mo.move(ctx);

            asteroid.draw(ctx);
            asteroid.move(ctx);
            console.log('whatever feels right')
            requestAnimationFrame(animateCallback);
        };

    requestAnimationFrame(animateCallback);
    // requestAnimationFrame(animateCallback.bind(_, ctx)); same thang?
});

// move
// draw
// rect

// element.addEventListener("click", function () { alert("Hello World!"); });