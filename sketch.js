function setup() {
    createCanvas(600, 600)
    background("purple");
  }
  
  function draw(){
   
    stroke("whit");
    fill("black");
    
    // console.Iog(mouseIsPressed);
    
    if(mouseIsPressed) {
    rect (mouseX,mouseY, 20,35);
    }
    
    
    }