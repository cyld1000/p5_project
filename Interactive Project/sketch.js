
let mainAudio;
let keyF; 
let keyG;
let keyH; 
let keyJ; 
let keyK; 
let keyL; 
let keyD; 
let mSound;
let mikuMain, miku1, miku2, miku3, miku4, miku5, miku6, miku7
let isVisible = false, isVisible2 = false, isVisible3 = false, isVisible4 = false, isVisible5 = false, isVisible6 = false, isVisible7 = false //variable to toggle visability


function preload(){
  mainAudio = loadSound("mainAudio.mp3");
  keyH = loadSound("Waves 0.mp3");
  keyF = loadSound("Waves 1.mp3");
  keyG = loadSound("Waves 2.mp3");
  keyL = loadSound("Waves 3.mp3");
  keyD = loadSound("Waves 4.mp3");
  keyK = loadSound("Waves 5.mp3");
  keyJ = loadSound("Waves 6.mp3");
  mikuMain = loadImage("miku.png");
  miku1 = loadImage("miku.png");
  miku2 = loadImage("miku.png");
  miku3 = loadImage("miku.png");
  miku4 = loadImage("miku.png");
  miku5 = loadImage("miku.png");
  miku6 = loadImage("miku.png");
  miku7 = loadImage("miku.png");

}

function setup() {
  createCanvas(1000, 1000);
  background("white");
  
 
}



function draw() {
  background(1000,1000)
  text('M - Play Beat', 50, 50);
  text('D, F, G, H, J, K, L - Notes!', 50, 70);
  if (isVisible) 
  { image(mikuMain,400,300);}

  if (isVisible2)
  { image(miku1, 200, 200, 100, 100); }

  if (isVisible3)
  {image(miku2, 360 ,500 ,400 , 400); }

  if (isVisible4)
  {image(miku3, 460,200 ,150 , 800); }

  if (isVisible5)
  {image(miku4, 400,300,450, 200);}

  if (isVisible6)
  {image(miku5, 300,300,800, 200);}

  if (isVisible7)
  {image(miku6, 200,300,200, 400);}


}

function keyPressed(){
if (key === 'f') { isVisible = true;}
if (key === 'g') { isVisible2 = true;}
if (key === 'h') { isVisible3 = true;}
if (key === 'j') { isVisible4 = true;}
if (key === 'k') { isVisible5 = true;}
if (key === 'l') { isVisible6 = true;}
if (key === 'd') { isVisible7 = true;}

}


//////////////////////
function keyReleased() {
  if (key === 'f') 
  { keyF.play();
    isVisible = !isVisible; 
  } 

    else if (key === 'g'){
    keyG.play();
    isVisible2 = !isVisible2;
  } 
  
  else if (key === 'h'){
    isVisible3 = !isVisible3;
    keyH.play();
  } 
  
  else if (key === 'j'){
    isVisible4 = !isVisible4;
      keyJ.play();
  } 
  
  else if (key === 'k'){
    isVisible5 = !isVisible5;
      keyK.play();
  } 
  
  else if (key === 'l'){
    isVisible6 = !isVisible6;
      keyL.play();
  } 
  
  else if (key === 'd'){
    isVisible7 = !isVisible7;
      keyD.play();
} 

else if(key === 'm') {
  ///
if (mainAudio.isPlaying()) 
{ mainAudio.stop(); } 
  else { mainAudio.play(); }
}
return false;
}
