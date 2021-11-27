function setup() {
  createCanvas(700, 700);

  // for (let i=25; i<50; i++) {
  //   clear();
  //   resetMatrix();
    background(200);
    // scale(0.5,0.5);
    doanart(new Random());
    //saveCanvas("generated/"+i,'jpg');

  // }
}

function doanart(R) {
// rect(0,0,width,height);

  var sign1;
  var angle;
  let r = R.random_num(0,PI/6.0);

  let rand = R.random_choice([0,1,2,3]);

  if (rand == 0) {
    sign1 = 1;
    angle = -r;
    translate(0,-sin(angle)*width);
  }
  else if (rand == 1) {
    sign1 = 1;
    angle = r;
    translate(sin(angle)*width,0);
  }
  else if (rand == 2) {
    sign1 = -1;
    angle = -r;
    translate(-height*sqrt(2)*cos(PI/4.0+angle)+width,-sin(angle)*width);
  }
  else {
    sign1 = -1;
    angle = r;
    translate((height/cos(angle)-height)*cos(angle),-height*sqrt(2)*cos(PI/4.0-angle)+width);
  }
  //1, -pi/6, 0,-
  //1, pi/6, width-,0
  //-1, -pi/6, weirdone,-
  //-1, pi/6, last



  // let angle = PI/6.0;//R.random_num(0, PI/6.0);


  // translate(0,-sin(angle)*width);
  // translate(width-sin(angle)*width,0);
  // translate(-height*sqrt(2)*cos(PI/4.0+angle)+width,0);
   // translate((height/cos(angle)-height)*cos(angle),-height*sqrt(2)*cos(PI/4.0-angle)+width);

  rotate(angle);
  // rect(0,0,width,height);
  scale(sign1, 1);


  translate(min(sign1*width,0),0);
  squig(R);
  translate(0, 250);
  squig(R);
}

function squig(R) {
  let rand1 = R.random_num(0, 1) + 0.15; //R.random_num(0, 0.5)+0.5
  let rand2 = R.random_num(0, 0.5) + 1;
  let rand3 = R.random_num(0, 1);
  let rand4 = R.random_num(0, 0.7) + 0.4;
  let rand5 = R.random_num(0, 1.5) + 0.1; //R.random_num(0, 0.5)+1
  let rand6 = R.random_num(0, 15) + 5;
  let rand7 = R.random_num(0, 14) + 1;

  let rp = R.random_num(0, 1.7) + 0.001;
  let gp = R.random_num(0, 1.7) + 0.001;
  let bp = R.random_num(0, 1.7) + 0.001;
  let rfrac = R.random_num(0, 0.65) + 0.7;
  let gfrac = R.random_num(0, 0.65) + 0.7;
  let bfrac = R.random_num(0, 0.65) + 0.7;
  let init = R.random_num(0, 20) + 15;

  let rand8 = R.random_num(0.36,0.62);

  //background(121, 140, 130);
  for (let i = 0.5; i < 280; i += 0.5) {
    //line(i*i*.05,i*.8,i,i*i/80.0);
    //stroke(i,i,pow(i,1.3),40+i/10);

    let x1 = i;
    let y1 = -rand1 * i * sin(pow(i, rand8)) + rand2 * i;
    let x2 = (i * i) / 80.0 - rand3 * i * sin(sqrt(i)) + rand4 * i;
    let y2 = rand5 * (i + rand6 * sin(i * rand7) * sin(i));

    let alpha = init + pow(i, 0.01); //min(max(30,init+pow(i, .8)),70);
    stroke(rfrac * pow(i, rp), gfrac * pow(i, gp), bfrac * pow(i, bp), alpha);
    line(x1, y1, x2, y2);
  }
}
