var canvas = document.querySelector('canvas');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

var c = canvas.getContext('2d'); // you can draw something like square, circles etc.


function Circle(x, y, dx, dy, radius) {
    this.x = x;
    this.y = y;
    this.dx = dx;
    this.dy = dy;
    this.radius = radius;
    this.red = red;
    this.blue = blue;
    this.green = green;
    this.opacity = opacity;
    

    this.draw = function() {   
        c.beginPath();
        c.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false); 
        c.strokeStyle = "rgba("+ this.red + ", " + this.blue + ", " + this.green + ", " + this.opacity + ")";
        c.fillStyle = "rgba("+ this.red + ", " + this.blue + ", " + this.green + ", " + this.opacity + ")";
        c.stroke();
        c.fill();
    }
    this.update = function() {
        if (this.x + this.radius > innerWidth || this.x - this.radius < 0) {
            this.dx = -this.dx;
        }
    
        if (this.y + this.radius > innerHeight || this.y - this.radius < 0) {
            this.dy = -this.dy;
        }

        this.x += this.dx;
        this.y += this.dy;

        this.draw();
    }
}

var circleArray = [];

for (var i = 0; i < 100; i++) {
    var radius = 30;
    var x = Math.random() * (innerWidth - radius * 2) + radius;
    var y = Math.random() * (innerHeight - radius * 2)  + radius;
    var dx = (Math.random() - 0.5); //* 8; to move the circles faster
    var dy = (Math.random() - 0.5); //* 8;
    var x = Math.random() * window.innerWidth;
    var y = Math.random() * window.innerHeight;
    var red =  Math.floor(Math.random() * 255);
    var blue =  Math.floor(Math.random() * 255);
    var green =  Math.floor(Math.random() * 255);
    var opacity =  (Math.random() * 10) / 10;
    circleArray.push(new Circle(x, y, dx, dy, radius, red, blue, green, opacity));
}


function animate() {
    requestAnimationFrame(animate);
    c.clearRect(0, 0, innerWidth, innerHeight);
    for (var i = 0; i < circleArray.length; i++) {
        circleArray[i].update();
    }
}

animate();


cxt.moveTo(50 + x, 50 + y);
cxt.lineTo(100 + x, 50 + y);
cxt.lineTo(100 + x, 100 + y);
cxt.lineTo(50 + x, 100 + y);