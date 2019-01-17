# p5js-gif-recorder

***p5js-gif-recorder*** is a modified p5.js project folder with a feature that allows creative coders to render their p5.js sketches into a *short* .GIF file.

Creative coders who wish to share their work in the form of a GIF may be disappointed to learn that p5.js does not feature a native functionality for rendering animations as a GIF. Although it is possible to save individual images using `saveCanvas()` or `saveFrame()` in the draw function, the browser will not package the images into an image sequence; rather, it will attempt to download each image separately. It is of course also possible to use an alternative method: video-capturing the screen using OBS, GIPHY, QuickTime, or a similar application while this sketch is running. Unfortunatley, this technique will usually result in skipped frames and/or low-resolution GIFS. 

It is thus often common for creative coders to use processing (java) rather than p5.js if their goal is to document their work as an image sequence, as processing can natively acheive this functionality. Given the significantly growing userbase of p5.js, this project helps to cater to the demand of creative coders who want to make GIFs out of their sketches.

### how to use it ###
- Clone/download this project. 

p5.js users will note that the sketch.js file will look *mostly* familiar:
```js
let isRecording = false; //assign as true when you want to record
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
  // exampleAnimation()

  //Keep "recordGIF()" at the end of the draw function
  recordGIF()
}
```
**In the setup function**, there is a canvas that is targeted for recording. 
``canvasToRecord = createCanvas(500, 500).canvas;``
This should be treated like a typical canvas. The width and height may be adjusted, and it is also possible to use WEBGL. As with a standard p5 sketch, put initializations/assignments below the canvas initialization. 

**In the draw function**, there is a function invoked called `recordGIF()`. This must stay *at the bottom* of the draw function (i.e., it must be the last thing that is invoked to ensure that all animation layers are recorded). Place animation logic above the `recordGIF()`

**At the top of the sketch** are a few declarations.
```js
let isRecording = false; //assign as true when you want to record
let firstFrame = 1; //choose a starting point to record
let lastFrame = 125; //choose an ending point to finish recording
//Your Declarations Here:
```
The above code is the only code that will need to be adjusted. 
- First set the starting frame, which must be a 1 or higher.
- Then set an ending frame, which must be higher than the starting frame
- When ready to record the sketch, set 'isRecording' to true 
- Run the sketch, preferably while viewing console
- The browser will prompt the user to download a file. Save the file to the hard drive

### warning ###
The browser may refuse to finish the task if the file is too large (approx. 1 GB). Decrease the value of `lastFrame` or decrease the size of the canvas in order to keep the GIF file below 1 GB. Furthermore, most social media sites refuse GIFs larger than 15mb, so it is advised to ensure that animation loops are rather short if possible.

### how it works ###
***p5js-gif-recorder*** is simply using CCapture.js to capture the contents of the p5 canvas. It is important to note that this project is only meant to streamline the process of combining CCapture.js with p5.js. 

### credits ###
- [CCapture.js](https://github.com/spite/ccapture.js)
- [p5.js](https://github.com/processing/p5.js-web-editor)
### see also ###
- [Michael Khayata tutorial](https://youtu.be/xmV-JvvMFQ8)
