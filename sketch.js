var a, b, c, d;
var edges;

function preload() {

}

function setup() {
  createCanvas(500, 500);
  edges = createEdgeSprites();

  a = createSprite(250, 250, 50, 50);
  b = createSprite(250, 250, 50, 50);
  c = createSprite(250, 250, 50, 50);
  d = createSprite(250, 250, 50, 50);

  a.shapeColor = "red";
  b.shapeColor = "blue";
  c.shapeColor = "yellow";
  d.shapeColor = "lime";

  a.setVelocity(-2, 1);
  b.setVelocity(-2, -1);
  c.setVelocity(2, -1);
  d.setVelocity(2, 1);

}

function draw() {
  background(120);

  a.bounceOff(edges);
  b.bounceOff(edges);
  c.bounceOff(edges);
  d.bounceOff(edges);

  drawSprites()
}

function convert() {

}