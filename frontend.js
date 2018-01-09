var iterations = 0;
var bg_image;
var full_rock;
var right_rock;
var left_rock;
var broken_rock;
var aaveg;
var broken = false;
var sizeVar = 24;
var x = 0, y = 0;

function setup() {
	createCanvas(windowWidth,windowHeight); 
	background(51);
	stroke("#000000");
	fill(color(126, 166, 247));
    noStroke();
    rect(0,0,windowWidth, windowHeight);

    bg_image = loadImage("imgs/asset1.png");
    full_rock = loadImage("imgs/full_rock.png");
    right_rock = loadImage("imgs/right_rock.png");
    left_rock = loadImage("imgs/left_rock.png");
    broken_rock = loadImage("imgs/broken_rock.png");
    aaveg = loadImage("imgs/Layer2.png");
    frameRate(8);
}

function draw() {
	iterations++;
	fill(color(126, 166, 247));
    noStroke();
	rect(0,0,windowWidth, windowHeight);
	background(bg_image);
	if(iterations < 16 && iterations%4==0) {
		push();
		translate(windowWidth/2 - full_rock.width/8, windowHeight - full_rock.height/3);
		rotate(radians(-5));
		imageMode(CENTER);
		image(full_rock,0,0);
		pop();
	}
	else if (iterations < 16 && iterations%4==1) {
		push();
		translate(windowWidth/2 - full_rock.width/8 , windowHeight - full_rock.height/3);
		rotate(radians(5));
		imageMode(CENTER);
		image(full_rock,0,0);
		pop();

	}
	else if (iterations < 16 ) {
		push();
		translate(windowWidth/2 - full_rock.width/8 , windowHeight - full_rock.height/3);
		imageMode(CENTER);
		image(full_rock, 0, 0);
		pop();
	}
	else if (iterations == 16){
		image(broken_rock, windowWidth/2 - broken_rock.width/2, windowHeight/2 - broken_rock.height/4);
		broken = true;
	}
	else if (iterations > 16){
		image(left_rock, windowWidth/2 - left_rock.width/2 - left_rock.width/sizeVar, windowHeight*3/4 - left_rock.height/2);
		image(right_rock, windowWidth/2 - right_rock.width/2 + right_rock.width/sizeVar, windowHeight*3/4 - right_rock.height/2);
		image(aaveg, windowWidth/2 - aaveg.width/sizeVar, windowHeight*3/4 - aaveg.height/sizeVar, aaveg.width*2/sizeVar, aaveg.height*2/sizeVar);
		if(sizeVar>8)
			sizeVar--;
		else
			noLoop();
	}
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}