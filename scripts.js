
var canvasElement;
var CANVAS_WIDTH = 800;
var CANVAS_HEIGHT = 600;
var FPS = 30;
var textX = 50;
var textY = 50;

var player = {
  color: generateRandomColor(),
  x: Math.random() * CANVAS_WIDTH,
  y: Math.random() * CANVAS_HEIGHT,
  width: 32,
  height: 32,
  draw: function() {
    canvas.fillStyle = this.color;
    canvas.fillRect(this.x, this.y, this.width, this.height);
  }
};

$(document).ready(function(){
  canvasElement = $('#game-canvas');
  canvas = canvasElement.get(0).getContext("2d");

  keyBindings();

  setInterval(function() {
    draw();
    update();
  }, 1000/FPS);

});

function draw() {
  canvas.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
  player.draw();
}


function update() {
  textX += 1;
  textY += 1;
}

function keyBindings(){
  $(document).keypress(function(e){
    console.log(e.keyCode); 
    switch(e.keyCode)
    {
      //left
      case 97:
        console.log('left');
        player.x -= 1;
        break;
      //right
      case 100:
        console.log('right');
        player.x += 1;
        break;
      //up
      case 119:
        console.log('up');
        player.y -= 1;
        break;
      //down
      case 115:
        console.log('down');
        player.y += 1;
        break;
    }
  });
}


function generateRandomColor(){
  return '#'+(0x1000000+(Math.random())*0xffffff).toString(16).substr(1,6);
}
