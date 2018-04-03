// Where is the circle
var canvas;
var x, y;
var points = [];

function setup() {
    createCanvas(window.innerWidth, window.innerHeight);
    //for up population
 for (var i=0; i<2000; i++) {
    points.push(new Points());
  }
    //for down population
     for (var i=0; i<1000; i++) {
    points.push(new PointsDown());
  }
}

function draw() {
  background(251,228,3);
  for (var i=0; i<points.length; i++) {
    points[i].move();
    points[i].show();
  }
}

//population going up
function Points() {
        this.x = random(width);
        this.y = height + random(700);  
    
    this.move = function() {
        this.y += random(-8);
        if (this.y < 0) {
            this.y = height;
        }
    };
    
    this.show = function() {
        stroke(60,60,255,random(100));
        strokeWeight(4);
        point(this.x, this.y);
    };
}

//population going down
function PointsDown() {
        this.x = random(width);
        this.y =  random(-700);  
    
    this.move = function() {
        this.y += random(8);
        if (this.y > height) {
            this.y = 0;
        }
    };
    
    this.show = function() {
        stroke(80,80,220,random(100));
        strokeWeight(4);
        point(this.x, this.y);
    };
}

