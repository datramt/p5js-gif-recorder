function recordGIF() {
  if (firstFrame > lastFrame) {
    if (frameCount === 1) {
    console.log("lastFrame must be a larger value than firstFrame")
  }
  } else if (firstFrame < 1) {
    if (frameCount === 1) {
    console.log("firstFrame must be larger than or equal to a value of 1")
  }
  } else {
  if (isRecording) {
    console.log("recording")
    if (frameCount == firstFrame) {
      capturer.start()
    }
    if (frameCount < lastFrame) {
      capturer.capture(canvasToRecord)
    } else if (frameCount === lastFrame) {
      capturer.stop()
      capturer.save()
    }
  }
  }
}

function exampleAnimation() {
  translate(width/2, height/2)
  fill(205, 200, 100)
  noStroke();
  ellipse(0, 0, width/3)
  stroke(0)
  strokeWeight(3)
  arc(0, 0, width/5, width/5, 0, PI)
  fill(0)
  ellipse(-30, -30, 20, constrain(sin(frameCount*0.05)+1, 0, 1)*20)
  ellipse(30, -30, 20)
}
