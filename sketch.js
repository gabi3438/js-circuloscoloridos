let cor
let posicaoHorizontal
let posicaoVertical

function setup() {
  createCanvas(400, 400);
  background("#CCA5CC");
  cor=color(random(0,255), random(0,255), random(0,255))
  posicaoHorizontal = [0,0,0]
  posicaoVertical=[random(height),random(height),random(height)]
}

function draw(){
  fill(cor)
  for(let contador in posicaoHorizontal) {
  circle(posicaoHorizontal[contador],posicaoVertical[contador],50)
  posicaoHorizontal[contador]+=random(1,3)
  posicaoVertical[contador]+=random(-3,3)
  if(posicaoHorizontal[contador]>=width){
    posicaoHorizontal[contador]=0;
    posicaoVertical[contador]=random(height)
  }
  if(mouseIsPressed){
    cor=color(random(0, 255), random(0, 255), random(0, 255), random(0,100));
}
}
}
