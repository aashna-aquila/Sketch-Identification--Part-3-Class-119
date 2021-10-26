function setup()
{
    canvas=createCanvas(280,280);
    canvas.center();
    background("white");
    canvas.mouseReleased(classifyCanavs);
    synth=window.speechSynthesis;
}
function clear()
{
background("white");
}
function preload()
{
    initialize=ml5.imageClassifier('DoodleNet');
}
function draw()
{
    strokeWeight(13);
    stroke(0);
    if(mouseIsPressed)
    {
        line(pmouseX,pmouseY,mouseX,mouseY);
    }
}
function classifyCanavs()
{
    initialize.classify(canvas,gotresult);
}
function gotresult(error,results)
{
if(error)
{
console.log(error);
}
else
{
    console.log(results);
    document.getElementById("label").innerHTML="Label: "+results[0].label;
    document.getElementById("confidence").innerHTML="Confidence:"+ Math.round(results[0].confidence*100)+'%';
}
}