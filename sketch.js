let isRecording = true; //assign as true when you want to record
let firstFrame = 1; //choose a starting point to record
let lastFrame = 125; //choose an ending point to finish recording
//Your Declarations Here:

function setup() {
  canvasToRecord = createCanvas(500, 500).canvas;
  //Your Initializations/Assignments Here:
}

function draw() {
  background(80);
  //Your Animation Here:
  exampleAnimation()
  //Keep "recordGIF() at the end of the draw function"
  recordGIF()
}
