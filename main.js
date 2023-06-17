nosex = "";
nosey = "";

function preload() {
    mustache = loadImage("256272.jpg");

}

function setup() {
    canvas = createCanvas(300, 300);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(300, 300);
    video.hide();
    pmodel = ml5.poseNet(video, modelready);

}

function draw() {
    image(video, 0, 0, 300, 300);
   image(mustache,nosex-25,nosey+5,50,30);

}

function takepic() {
    save("c114.png");
}

function modelready() {
    console.log("model is working!!!");
    pmodel.on("pose", rgot);
}

function rgot(results) {
    if (results.length > 0) {
        // console.log(results);
        nosex = results[0].pose.nose.x;
        nosey = results[0].pose.nose.y;
        console.log(nosex, nosey);
    }
}