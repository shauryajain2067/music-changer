haryy_potter="";
peter_pan="";
left_wrist_x=0;
left_wrist_y=0;
right_wrist_x=0;
right_wrist_y=0;

function preload(){
    peter_pan=loadSound("music.mp3");
    harry_potter=loadSound("music2.mp3"); 
}

function setup(){
    
    canvas=createCanvas(600,500);
    canvas.center();
    video=createCapture(VIDEO);
    video.hide();

    poseNet=ml5.poseNet(video,modelLoaded);
    poseNet.on('pose',gotPoses);
  
}

function modelLoaded(){
    console.log("POSENET IS INITILIZED");
}

function draw(){
    image(video,0,0,600,500);
}



function gotPoses(results){
    if(results > 0){
        console.log(results);
        left_wrist_x=results[0].pose.leftWrist.x;
        left_wrist_y=results[0].pose.leftWrist.y;
        console.log("left wrist x is " + left_wrist_x + "left wrist y is " + left_wrist_y);

        right_wrist_x=results[0].pose.rightWrist.x;
        right_wrist_y=results[0].pose.rightWrist.y;
        console.log("right wrist x is " + right_wrist_x + "right wrist y is " + right_wrist_y);

    }
}
    
