lipstickX=0;
lipstickY=0;
function preload() {
    lips=loadImage('https://www.google.com/url?sa=i&url=https%3A%2F%2Fsimilarpng.com%2Flipstick-kiss-print-isolated-on-transparent-png%2F&psig=AOvVaw2pgWR82DX5pMNyMlbNCs9O&ust=1643649561375000&source=images&cd=vfe&ved=0CAsQjRxqFwoTCLCrtPb92fUCFQAAAAAdAAAAABAI');
}

function setup() {
    canvas = createCanvas(300, 300);
    canvas.center();
    video=createCapture(VIDEO);
    video.size(300, 300);
    video.hide();
    poseNet=ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}

function draw() {
    image(video, 0, 0, 300, 300);
    image(lipstick, lipstickX, lipstickY, 40, 40);

}


function modelLoaded() {
    console.log('PoseNet Is Initialized');
}

function gotPoses(results) {
    if(results.length > 0){
        console.log(results);
        lipstickX=results[0].pose.nose.x-15;
        lipstickY=results[0].pose.nose.y-15;
        console.log('noseX='+noseX);
        console.log('noseY'+noseY);
    }
}

function take_snapshot() {
    save('myfilterimage.png');
}