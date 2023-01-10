// document.addEventListener('visibilitychange', function (event) {
//   if (document.hidden && !$("in_out").classList.contains("game_over")) {
//     $("lose").play();
//     $("in_out").children[0].innerHTML = "!GAME OVER! <br>" + "Score: " + Math.floor(score);
//     $("in_out").classList.toggle("active");
//     $("in_out").classList.add("game_over");
//     $("questions_window").classList.remove("active");
//     stop = true;
//     lock = false;
//     restartGame();
//   }
// });

// window.addEventListener('blur', function (event) {
//   if(!$("in_out").classList.contains("game_over")) {
//     $("lose").play();
//     $("in_out").children[0].innerHTML = "!GAME OVER! <br>" + "Score: " + Math.floor(score);
//     $("in_out").classList.toggle("active");
//     $("in_out").classList.add("game_over");
//     $("questions_window").classList.remove("active");
//     stop = true;
//     lock = false;
//     restartGame();
//   }
// });

function $(name){
  return document.getElementById(name);
}
////////////////////////////////////////////QUESTIONS//////////////////////////////////////////////
questionsHashtable = new HashTable();
let client_answer = "";
let lock = false;
const True_Button = document.querySelector(".true");
const False_Button = document.querySelector(".false");

questionsHashtable.putQuestion(0, "El intestino delgado mide unas tres veces y media la longitud de tu cuerpo.",true);
questionsHashtable.putQuestion(1, "Los plátanos son curvos porque crecen hacia el sol.",true);
questionsHashtable.putQuestion(2, "La caja negra de un avión es negra.",false);
questionsHashtable.putQuestion(3, "git stash - te permite descargar los cambios del repositorio remoto.",false);
questionsHashtable.putQuestion(4, "git grep - te permite buscar frases y palabaras especificas en los commits.", true);
questionsHashtable.putQuestion(5, "El sistema binario, usado hoy para la programación de ordenadores, fue inventado hace más de 300 años por Gottfried W. Leibnitz.", true);
questionsHashtable.putQuestion(6, "Las ramas hotfix derivan y se integran a la rama Master.", true);
questionsHashtable.putQuestion(7, "Gitflow es un sistema de control de versiones.", false);
questionsHashtable.putQuestion(8, "En un byte hay 8 bits.", true);
questionsHashtable.putQuestion(9, "Es posible descargar memoria ram desde la Microsoft Store.", false);
questionsHashtable.putQuestion(10, "El lenguaje Java fue desarrollado en sus inicios por Ryan Gosling, en el año 1991.", false);
questionsHashtable.putQuestion(11, "El logo de Java es un taza de té.", false);
questionsHashtable.putQuestion(12, "En enero del 2010, Sun Microsystems adquirió Oracle y todo su software, incluyendo Java Programming Languaje." , false );
questionsHashtable.putQuestion(13, "Gitlab fue creado por Linus Torvalds en 2011.", false);
questionsHashtable.putQuestion(14, "Un hypervínculo es una conexión directa entre dos espacios virtuales en el mundo digital.", true);
questionsHashtable.putQuestion(15, "Pie pequeño tenía los pies pequeños." ,);
questionsHashtable.putQuestion(16, "Las etiquetas HTML le dan formato y estructura al contenido de las paginas web." , true);
questionsHashtable.putQuestion(17, "Es posible utilizar variables en CSS.", true);
questionsHashtable.putQuestion(18, "Integer es un objeto y no un dato primitivo.", true);
questionsHashtable.putQuestion(19, "'private, extends, finally' - Son palabras reservadas en JAVA." , true);
questionsHashtable.putQuestion(20, "Ada Lovelace es considerada la primera programadora de ordenadores." , true);
questionsHashtable.putQuestion(21, "La seríe Dinosaurios de 1991 termina cuando la familia se despide antes de caer un Asteroide.", true);
questionsHashtable.putQuestion(22, "Oliver Atom de los supercampeones despertó un día sin una pierna.", false);
questionsHashtable.putQuestion(23, "Los discos solidos tienen mejor desempeño que los discos liquidos.", false);
questionsHashtable.putQuestion(24, "La computadora de Coraje el perro cobarde fue inspirada en la película de Kubrick '2001: Odisea en el espacio'.", true);
questionsHashtable.putQuestion(25, "Un traje de astronauta cuesta USD 12.000.000 como mínimo.", true);
questionsHashtable.putQuestion(26, "En 1962 se detono una bomba de hidrógeno 100 veces más poderosa que la de hiroshima en el espacio.", true);
questionsHashtable.putQuestion(27, "Vicente Guerrero fué el primer presidente de México.", false);
questionsHashtable.putQuestion(28, "Alexander Fleming descubrió la penicilina.", true);
questionsHashtable.putQuestion(29, "La única letra que no está en la tabla periódica es la letra J.", true);
questionsHashtable.putQuestion(30, "Si multiplicamos 111111111 x 111111111 el resultado es 12345678987654321", true);
questionsHashtable.putQuestion(31, "Kamehameha era el nombre del rey de la isla hawaiiana.", true)
$("in_out").children[0].addEventListener('click', (e) => {
  if($("in_out").classList.contains("game_over")){
    stop = false;
    $("in_out").classList.toggle("active");
    $("lose").currentTime = 0;
    $("lose").pause();
    $("ambient").currentTime = 0;
    $("ambient").play();
    restartGame();
    $("in_out").classList.remove("game_over");
  }else{
    $("in_out").classList.toggle("active");
    loop();
    $("ambient").play();
  }
});

True_Button.addEventListener('click', function(){
  client_answer = True_Button.innerHTML.toLowerCase();
  lock = true;
  if(lock){
    validateAnswer(questionsHashtable.getAnswer(questionsHashtable.getID($("question").innerHTML)));
  }
});

False_Button.addEventListener('click', function(){
  client_answer = False_Button.innerHTML.toLowerCase();
  lock = true;
  if(lock){
    validateAnswer(questionsHashtable.getAnswer(questionsHashtable.getID($("question").innerHTML)));
  }
});

function getRandomQuestion(lista){
    let randomID = Math.floor(Math.random()*lista.getLength());
    return lista.getQuestion(randomID);
}

function validateAnswer(correct_answer){
    if(client_answer == correct_answer.toString()){
      for(x of obs){
          x.setPosition(random(10,width-10),random(10,height-10));
      }
      $("uwu").play();
      $("ambient").play();
      $("questions_window").classList.remove("active");
      stop = false;
      lock = false;
      loop();
    }else{
      $("lose").play();
      $("in_out").children[0].innerHTML = "!GAME OVER! <br>" + "Score: " + Math.floor(score);
      $("in_out").classList.toggle("active");
      $("in_out").classList.add("game_over");
      $("questions_window").classList.toggle("active");
      stop = true;
      lock = false;
      restartGame();
    }
}

///////////////////////////////////////////////GAME////////////////////////////////////////////////
window.addEventListener('load', ()=>{
  noLoop();
});

let obs = [];
let score = 0;
let stop = false;
let powerCount = 0;
let powerColor = 0;
let power = false;

$("lose").volume = 0.1;
$("plus").volume = 0.1;
$("uwu").volume = 0.1;
$("ambient").volume = 0.01;
$("hyperjump").volume = 0.05;

function setup(){
  var canvas = createCanvas(700,500);
  canvas.parent("game_window");
  obs.push(new obstacle(random(10,width-10),random(10,height-10),Math.floor(random(5,15))));
  player = new chronos(width/2,height/2,20);
  bonus = new zone(width/2,height/2);
  frameRate(75);
}

function draw(){
  background(255,75);
  addPlayer();
  addObstacles();
  checkCollision();
  addBonusZone();
  addBonusToScore();
  activateThePower(-1.1,0.9);
  updatePowerCount();
  onStop();
}

function addPlayer(){
  player.display(color(0,255,0));
  player.setPosition(mouseX,mouseY);
  player.checkBound();
}

function addObstacles(){
  for(let x of obs){
    x.display(color(0));
    x.move();
    x.checkBound();
  }
}

function addBonusZone(){
  bonus.display(color(180),75);
}

setInterval(addNewObstacle,3500);
function addNewObstacle(){
  // new_Obs.play();
  if(!stop && $("in_out").classList.contains("active")){
    obs.push(new obstacle(random(10,width-10),random(10,height-10),Math.floor(random(5,15))));
  }
}

setInterval(updateBonusPosition,10000);
function updateBonusPosition(){
   bonus.setPosition(random(100,width-100),random(100,height-100));
}

function addBonusToScore(){
  if(player.getPosition().dist(bonus.getPosition()) < bonus.getDiameter()/2 + player.getDiameter()/2){
    $("plus").play();
    $("score_window").style.color = "green";
    $("score_window").style.fontSize = "3.5rem";
    let onPoint = Math.sin(frameCount*0.05)*bonus.getDiameter() +10;
    bonus.display(color(67,0,255),onPoint);
    score += 0.2;
    if(powerCount < 100){
      powerCount += 0.07;
      powerColor = Math.trunc(powerCount * 2.55);
    }
  }else{
    $("plus").pause();
    $("plus").currentTime = 0;
    $("score_window").style.color = "red";
    $("score_window").style.fontSize = "2rem";
  }
}

function checkCollision(question){
  for(let x of obs){
      if(player.getPosition().dist(x.getPosition()) < x.getDiameter()/2 + player.getDiameter()/3 && power == false){
          let randomID = Math.floor(Math.random()*questionsHashtable.getLength());
          $("question").innerHTML = questionsHashtable.getQuestion(randomID);
          $("questions_window").classList.toggle('active');
          stop = true;
      }
  }
}

function onStop(){
  if(stop){
    noLoop();
    $("ambient").pause();
    $("plus").pause();
  }else{
    $("score_window").innerHTML = Math.floor(score);
  }
}

function restartGame(){
  obs.length = 1;
  bonus.setPosition(width/2,height/2);
  score = 0;
  powerCount = 0;
  $("power_count").style.height = "0%";
  power = false;
  loop();
}

window.addEventListener('keydown', (e)=>{
  if(e.code == 'Space')
    if(!stop && powerCount >= 20){ 
      $("hyperjump").play();
      powerCount -= 20;
      powerColor -= 20;
      score -= 35;
      frameCount = 0;
      power = true;
      setTimeout(() => {
        power = false;
      },750);
    }
});

function updatePowerCount(){
  $("power_count").innerHTML = Math.trunc(powerCount);
  $("power_count").style.height = (4+powerCount/1.05 + "%");
  $("power_count").style.border = "1px solid rgba(" + (255-powerColor) + "," + powerColor + ",0)";
  $("power_bar").style.border = "1px solid rgba(" + (255-powerColor) + "," + powerColor + ",0)";
}

function activateThePower(near, away){
  if(power){
    $("game_window").style.filter = "invert(100%)";
    let powerExpansion = Math.sin(frameCount*0.1)*player.getDiameter()*5;
    push();
    stroke(255,0,100);
    noFill();
    circle(player.getPosition().x,player.getPosition().y, powerExpansion);
    pop();

    for(let i = 0; i < obs.length; i++){
      if(player.getPosition().dist(obs[i].getPosition()) <= powerExpansion){
        obs[i].powerReaction(near);
      }else{
        obs[i].powerReaction(away);
      }
    }
  }else{
    $("game_window").style.filter = "invert(0%)";
  }
}
