noseY = 0;
noseX = 0;

function preload() {
    mustache1 = loadImage("https://i.postimg.cc/xj7qXJzX/mustache-1-removebg-preview.png")
    mustache2 = loadImage("https://i.postimg.cc/6qDQggXr/mustache-2-removebg-preview.png")
    mustache3 = loadImage("https://i.postimg.cc/C5Z1vYWM/mustache-3-removebg-preview.png")
    mustache4 = loadImage("https://i.postimg.cc/G2m9yvKy/mustache-4-removebg-preview.png")

}

function setup() {
    canvas = createCanvas(400, 300);
    canvas.center()
    video = createCapture(VIDEO)
    video.size(400, 300)
    video.hide()
    poseNet = ml5.poseNet(video, modelLoaded)
    poseNet.on('pose', gotPoses)
}

function modelLoaded() {
    console.log('PoseNet is Initialized')
}

function gotPoses(results) {
    if (results.length > 0) {
        console.log(results)
        console.log('nose x=' + results[0].pose.nose.x)
        console.log('nose y=' + results[0].pose.nose.y)
        noseX = results[0].pose.nose.x;
        noseY = results[0].pose.nose.y;
    }

}

function draw() {
    type=document.getElementById("type").value
    image(video, 0, 0, 400, 300)
    if (type == "Mustache1") {
        image(mustache1, noseX - 33, noseY+2, 70, 20)
    } else if (type == "Mustache2") {
        image(mustache2, noseX - 34, noseY+2, 70, 20)
    } else if (type == "Mustache3") {
        image(mustache3, noseX - 29, noseY+2, 70, 20)
    } else {
        image(mustache4, noseX - 35, noseY+2, 70, 15)
    }
}


    function take_snapshot() {
        save('myFilterImage.png');
    }