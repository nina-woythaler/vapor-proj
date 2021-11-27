function setup() {
  createCanvas(700, 700);
  background(200);
  doanart(new Random());
}

function doanart(R) {
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

  rotate(angle);
  scale(sign1, 1);

  translate(min(sign1*width,0),0);
  squig(R);
  translate(0, 250);
  squig(R);
}

function squig(R) {
  let rand1 = R.random_num(0, 1) + 0.15;
  let rand2 = R.random_num(0, 0.5) + 1;
  let rand3 = R.random_num(0, 1);
  let rand4 = R.random_num(0, 0.7) + 0.4;
  let rand5 = R.random_num(0, 1.5) + 0.1;
  let rand6 = R.random_num(0, 15) + 5;
  let rand7 = R.random_num(0, 14) + 1;
  let rand8 = R.random_num(0.36,0.62);

  let rp = R.random_num(0, 1.7) + 0.001;
  let gp = R.random_num(0, 1.7) + 0.001;
  let bp = R.random_num(0, 1.7) + 0.001;
  let rfrac = R.random_num(0, 0.65) + 0.7;
  let gfrac = R.random_num(0, 0.65) + 0.7;
  let bfrac = R.random_num(0, 0.65) + 0.7;
  let init = R.random_num(0, 20) + 15;

  for (let i = 0.5; i < 280; i += 0.5) {
    let x1 = i;
    let y1 = -rand1 * i * sin(pow(i, rand8)) + rand2 * i;
    let x2 = (i * i) / 80.0 - rand3 * i * sin(sqrt(i)) + rand4 * i;
    let y2 = rand5 * (i + rand6 * sin(i * rand7) * sin(i));

    let alpha = init + pow(i, 0.01);
    stroke(rfrac * pow(i, rp), gfrac * pow(i, gp), bfrac * pow(i, bp), alpha);
    line(x1, y1, x2, y2);
  }
}
