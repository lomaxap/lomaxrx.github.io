var PIXI
var stage, renderer;
var circle, square, triangleContainer, shapes, grid;
var mouseX = null, mouseY = null;
var windowHalfX, windowHalfY;

export function init({ addShapes=true }) {
  PIXI = require('pixi.js');
  windowHalfX = window.innerWidth / 2;
  windowHalfY = window.innerHeight / 2;

  renderer = PIXI.autoDetectRenderer(window.innerWidth, window.innerHeight, { resolution: 2, transparent: true } );

  // 2. Append canvas element to the body
  document.getElementById('site').appendChild(renderer.view);

  // 3. Create a container that will hold your scene
  stage = new PIXI.Container();

  makeGrid();

  circle = new PIXI.Graphics();
  circle.beginFill(0xD1E6EF, 1);
  circle.drawCircle(0, 350, 150);
  circle.endFill()

  square = new PIXI.Graphics();
  square.beginFill(0xEF9696, 1);
  square.drawRect(0, 150, 180, 180);
  square.endFill();

  let triangle = new PIXI.Graphics();
  triangle.moveTo(100,0);
  triangle.beginFill(0x7f7f7f);
  triangle.lineTo(200, 175);
  triangle.lineTo(0, 175);
  triangle.lineTo(100,0);
  triangle.endFill();

  triangleContainer = new PIXI.Container();
  triangleContainer.addChild(triangle);
  triangleContainer.pivot.x = 150;
  triangleContainer.pivot.y = 150;
  triangleContainer.rotation = 0.75;
  triangleContainer.position.x = 600;
  triangleContainer.position.y = 600;

  shapes = new PIXI.Container();
  shapes.addChild(circle);
  shapes.addChild(square);
  shapes.addChild(triangleContainer);
  stage.addChild(shapes);
  shapes.visible = addShapes;

  reposition();

  window.addEventListener('resize', resize);
  window.addEventListener('mousemove', mousemove);
  render();
}

function reposition(){
  if(window.innerWidth > 990){
    circle.position.x = 0;
    triangleContainer.position.x = 600;
    square.position.x = 500;
    shapes.position.x = window.innerWidth/2 - 495 + 200;
  } else {
    circle.position.x = window.innerWidth*0.1;
    triangleContainer.position.x = window.innerWidth - window.innerWidth*0.25;
    square.position.x = window.innerWidth - window.innerWidth*0.3;
    shapes.position.x = 0;
  }

  stage.removeChild(grid);
  makeGrid();
}

function makeGrid(){
  grid = new PIXI.Container();
  grid.zIndex = 0;
  let rows = 10;
  let dx = Math.max(150, window.innerWidth / rows);
  let cols = window.innerHeight / dx;

  for(let i = 0; i < rows+1; i++){
    let line = new PIXI.Graphics();
    line.lineStyle(1, 0x00000, 0.05);
    line.position.x = i * dx;
    line.position.y = -100;
    line.moveTo(0,0);
    line.lineTo(0, window.innerHeight + 200);
    grid.addChild(line);

    for(let j = 0; j<cols; j++){
      let dot = new PIXI.Graphics();
      dot.beginFill(0x00000, 0.075);
      dot.drawCircle(i*dx, j*dx, 2);
      dot.endFill();
      grid.addChild(dot);
    }
  }

  for(let i = 0; i < cols; i++){
    let line = new PIXI.Graphics();
    line.lineStyle(1, 0x00000, 0.05);
    line.position.x = -100;
    line.position.y = i * dx;
    line.moveTo(0,0);
    line.lineTo(window.innerWidth+200, 0);
    grid.addChild(line);
  }

  stage.addChildAt(grid);
}

function render(){
    renderer.render(stage);
}

function resize(){
  let w = window.innerWidth;
  let h = window.innerHeight;

  if(w < 600) return;

  renderer.resize(w, h);
  reposition();
  render();
}

export function addShapes() {
  if(!shapes) return;
  shapes.visible = true;
  render();
}

export function removeShapes(){
  if(!shapes) return;
  shapes.visible = false;
  render();
}

function mousemove(e){
  if(!mouseX || window.innerWidth < 600){
    mouseX = e.clientX;
    mouseY = e.clientY;
    return;
  }
  let dx = mouseX - e.clientX;
  let dy = mouseY - e.clientY;

  circle.position.x += dx / 8;
  circle.position.y += dy / 20;
  //
  square.position.x += dx / 10;
  square.position.y += dy / 25;

  triangleContainer.position.x += dx / 15;
  triangleContainer.position.y += dy / 30;

  grid.position.x += dx / 20;
  grid.position.y += dy / 35;

  mouseX = e.clientX;
  mouseY = e.clientY;
  render();
}

function animate() {
  render();
	requestAnimationFrame( animate );

}
