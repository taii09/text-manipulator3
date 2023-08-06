

noseX=0
noseY=0
difference = 0;
rightWristX = 0;
leftWristX = 0;

function setup(){
    video = createCapture(VIDEO);
    video.size(550, 500);

    canvas = createCanvas(550,450);
    canvas.position(590, 110);

poseNet = ml5.poseNet(video, modelLoaded);
poseNet.on('pose', gotPoses);
}
function draw(){

    background('gray');

    textSize(difference)
    fill('yellow');
    stroke('yellow');
    text('Tanishq' , 50, 400);
}

function modelLoaded()
{
    console.log('poseNet Is Initialzied!');
}
function gotPoses(results)
{
    if(results.length > 0)
    {
        console.log(results);
        noseX = results[0].pose.nose.x;
        noseY = results[0].pose.nose.y;
       console.log("noseX = " + noseX +"noseY = "+noseY);

       leftWristX = results[0].pose.leftWrist.x;
       rightWristX = results[0].pose.rightWrist.x;
       difference = floor(leftWristX - rightWristX);
       console.log("leftWrist =" + leftWristX + " rightWristX = "+ rightWristX + "difference = " + difference);
    }
}