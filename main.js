video = ""
function preload(){
    video = createVideo("video.mp4")
    video.hide()
}
function setup(){
    canvas = createCanvas(483,380)
    canvas.center()
}
function draw(){
image(video,0,0,483,380)
}
function start(){
objdec = ml5.objectDetector("cocossd",modeloaded)
document.getElementById("status").innerHTML = "Status:Detecting Objects"
}
function modeloaded(){
    console.log("Model Loaded Successfully")
    status = true
    video.loop()
    video.speed(1)
    video.volume(0)
}