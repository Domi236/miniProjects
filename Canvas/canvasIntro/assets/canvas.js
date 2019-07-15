var canvas = document.querySelector('canvas');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

var c = canvas.getContext('2d'); // you can draw something like square, circles etc.

c.fillStyle = "rgba(255, 0, 0, 0.5)";
c.fillRect(100, 100, 100, 100); //c.fillRect(x, y, width, height); (takes 4 values)
c.fillStyle = "rgba(0, 0, 255, 0.5)";
c.fillRect(400, 100, 100, 100);
c.fillStyle = "rgba(0, 255, 0, 0.5)";
c.fillRect(300, 300, 100, 100);

// Line
c.beginPath();
c.moveTo(50, 300); // c.moveTo(x, y); 
c.lineTo(300, 100);
c.lineTo(400, 300);
c.strokeStyle = "#fa34a3";
c.stroke();

// ARC /Circle
c.beginPath();
c.arc(300, 300, 30, 0, Math.PI * 2, false); 
//c.arc(x: Int, y: Int, r: Int, startAngle: Float, endAngle: Float, drawCounterClockwise: Bool (false)); 
c.strokeStyle = 'blue';
c.stroke();

for (var i = 0; i < 30; i++) {
    var x = Math.random() * window.innerWidth;
    var y = Math.random() * window.innerHeight;
    var red =  Math.floor(Math.random() * 255);
    var blue =  Math.floor(Math.random() * 255);
    var green =  Math.floor(Math.random() * 255);
    var opacity =  (Math.random() * 10) / 10;
    c.beginPath();
    c.arc(x, y, 30, 0, Math.PI * 2, true); 
    // c.fillStyle = "rgba("+ red + ", " + blue + ", " + green + ", " + opacity + ")";
    c.strokeStyle = "rgba("+ red + ", " + blue + ", " + green + ", " + opacity + ")";
    c.fillStyle = "rgba("+ red + ", " + blue + ", " + green + ", " + opacity + ")";
    c.stroke();
    c.fill();
}
