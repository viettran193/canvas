console.log("123");
var canvas = document.querySelector("canvas");
console.log(canvas);
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
var c = canvas.getContext("2d");
// c.fillStyle = "rgba(255,0,0,0.5)";
// c.fillRect(100, 100, 100, 100);
// c.fillStyle = "rgba(0,255,0,0.5)";
// c.fillRect(200, 200, 100, 100);
// c.fillStyle = "rgba(0,0,255,0.5)";
// c.fillRect(300, 300, 100, 100);
// c.fillStyle = "rgba(255,255,0,0.5)";
// c.fillRect(400, 200, 100, 100);
// c.fillStyle = "rgba(255,0,255,0.5)";
// c.fillRect(500, 100, 100, 100);

//line
// c.beginPath();
// c.strokeStyle = "rgba(222,150,43,0.9)";
// c.moveTo(300, 200);
// c.lineTo(400, 200);
// c.moveTo(200, 100);
// c.lineTo(500, 100);
// c.stroke();

//arc/circle
// c.beginPath();
// c.arc(150, 100, 30, 0, Math.PI * 2, false);
// c.stroke();
// var gradient = c.createLinearGradient(
//   0,
//   0,
//   window.innerWidth,
//   window.innerHeight
// );
// gradient.addColorStop("0", "magenta");
// gradient.addColorStop("0.5", "blue");
// gradient.addColorStop("1.0", "red");
function Circle(x, y, dx, dy, radius) {
  this.x = x;
  this.y = y;
  this.dx = dx;
  this.dy = dy;
  this.radius = radius;
  this.draw = function () {
    c.beginPath();
    c.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
    var gradient = c.createLinearGradient(
      0,
      0,
      window.innerWidth,
      window.innerHeight
    );
    gradient.addColorStop("0", "magenta");
    gradient.addColorStop("0.5", "blue");
    gradient.addColorStop("1.0", "cyan");
    c.lineWidth = 2.5;
    c.strokeStyle = gradient;
    //c.fillStyle = gradient;
    c.fill();
    //c.strokeStyle = `rgba(${r},${g},${b},${o})`;
    c.stroke();
  };
  this.update = function () {
    this.x += this.dx;
    this.y += this.dy;
    if (this.x > window.innerWidth - this.radius || this.x < this.radius) {
      this.dx = -this.dx;
    }
    if (this.y > window.innerHeight - this.radius || this.y < this.radius) {
      this.dy = -this.dy;
    }
    this.draw();
  };
}
// var gradient = c.createLinearGradient(
//   0,
//   0,
//   window.innerWidth,
//   window.innerHeight
// );
// gradient.addColorStop("0", "magenta");
// gradient.addColorStop("0.5", "blue");
// gradient.addColorStop("1.0", "cyan");
var r = Math.random() * 255;
var g = Math.random() * 255;
var b = Math.random() * 255;
var o = 1;
var circleArray = [];
for (let i = 0; i < 200; i++) {
  var dx = (Math.random() - 0.5) * 2;
  var dy = (Math.random() - 0.5) * 2;
  var x = Math.random() * (window.innerWidth - radius * 2) + radius;
  var y = Math.random() * (window.innerHeight - radius * 2) + radius;
  var radius = 30;
  circleArray.push(new Circle(x, y, dx, dy, radius));
}

console.log(circleArray);
function animate() {
  requestAnimationFrame(animate);
  // c.strokeStyle = gradient;
  c.clearRect(0, 0, innerWidth, innerHeight);
  c.beginPath();
  //c.arc(x, y, radius, 0, Math.PI * 2, false);
  //c.strokeStyle = `rgba(${r},${g},${b},${o})`;
  //c.strokeStyle = gradient;

  for (let i = 0; i < circleArray.length; i++) {
    circleArray[i].update();
  }
}
animate();
// function createCircleNumberImage(radius, number, style) {
//   // create HTML 5 image element
//   img = document.createElement("canvas");
//   // size it
//   img.width = Math.ceil(radius * 2);
//   img.height = Math.ceil(radius * 2);
//   // get a drawing context
//   img.ctx = img.getContext("2d");

//   // set custom attributes
//   img.radius = radius;
//   img.number = number;
//   img.displayStyle = style;

//   // set defaults
//   style.color = style.color ? style.color : "red";
//   style.font = style.font ? style.font : "18px arial";
//   style.fontColor = style.fontColor ? style.fontColor : "white";
//   style.fit = style.fit === undefined ? true : style.fit;
//   style.decimals =
//     style.decimals === undefined || isNaN(style.decimals) ? 0 : style.decimals;

//   // add draw function
//   img.draw = function () {
//     var fontScale, fontWidth, fontSize, number;
//     // resize
//     this.width = Math.ceil(this.radius * 2);
//     this.height = Math.ceil(this.radius * 2);
//     // clear (incase resize did not do it)
//     this.ctx.clearRect(0, 0, this.width, this.height);

//     // draw the circle
//     this.ctx.fillStyle = this.displayStyle.color;
//     this.ctx.beginPath();
//     this.ctx.arc(radius, radius, radius, 0, Math.PI * 2);
//     this.ctx.fill();

//     // setup the font styles
//     this.ctx.font = this.displayStyle.font;
//     this.ctx.textAlign = "center";
//     this.ctx.textBaseline = "middle";
//     this.ctx.fillStyle = this.displayStyle.fontColor;

//     // get the value to display
//     number = this.number.toFixed(this.displayStyle.decimals);

//     // get the font size
//     fontSize = Number(/[0-9\.]+/.exec(this.ctx.font)[0]);
//     if (!this.displayStyle.fit || isNaN(fontSize)) {
//       // Dont fit text or font height unknown
//       this.ctx.fillText(number, radius, radius);
//     } else {
//       // fit font as based on the angle from text center to bottom right
//       fontWidth = this.ctx.measureText(number).width;
//       fontScale =
//         (Math.cos(Math.atan(fontSize / fontWidth)) * this.radius * 2) /
//         fontWidth;
//       this.ctx.setTransform(
//         fontScale,
//         0,
//         0,
//         fontScale,
//         this.radius,
//         this.radius
//       );
//       this.ctx.fillText(number, 0, 0);
//       this.ctx.setTransform(1, 0, 0, 1, 0, 0); // restor the transform
//     }

//     if (!this.displayStyle.fit || isNaN(fontSize)) {
//       // Dont fit text or font height unknown
//       this.ctx.fillText(number, radius, radius);
//     } else {
//       fontScale =
//         (Math.cos(Math.atan(fontSize / fontWidth)) * this.radius * 2) /
//         fontWidth;
//       this.ctx.setTransform(
//         fontScale,
//         0,
//         0,
//         fontScale,
//         this.radius,
//         this.radius
//       );
//       this.ctx.fillText(number, 0, 0);
//       this.ctx.setTransform(1, 0, 0, 1, 0, 0); // restor the transform
//     }
//     // return this so you can call the draw function from within a canvas drawImage function
//     return this;
//   };
//   // draw first time
//   img.draw();
//   // return new image
//   return img;
// }

// var canvas = document.createElement("canvas");
// canvas.width = 320;
// canvas.height = 200;
// var ctx = canvas.getContext("2d");
// document.body.appendChild(canvas);

// // set comments above the function declaration for help
// var sun = createCircleNumberImage(60, 1, {
//   fontColor: "white",
//   font: "24px arial",
//   color: "#EE0",
//   fit: true,
//   decimals: 0,
// });

// function doAgain() {
//   ctx.fillStyle = "black";
//   ctx.fillRect(0, 0, canvas.width, canvas.height / 2);
//   ctx.fillStyle = "Red";
//   ctx.fillRect(0, canvas.height / 2, canvas.width, canvas.height / 2);

//   if (sun.number > 5000000000) {
//     sun.number = 0;
//   }
//   sun.number = sun.number + Math.floor(sun.number / 10) + 1;
//   ctx.drawImage(
//     sun.draw(),
//     ctx.canvas.width / 2 - sun.radius,
//     ctx.canvas.height / 2 - sun.radius
//   );
//   setTimeout(doAgain, 200);
// }
// doAgain();
