

class Vec {
    constructor(x=0, y=0){
        this.x = x;
        this.y = y;
    } 

}

class Rect {
    constructor(w,h) {
        this.pos = new Vec;
        this.size = new Vec(w,h);
    }
}

class Player extends Rect{
    constructor() {
        super(30,30);
 
        this.speed = 30;
        this.vel = new Vec;
        this.snakeLenght = 1;

    }    


}
//need to randomize pos each time snake touches the part
class Part extends Rect {
    constructor(c) {
        super(26,26);
        this.pos.x = Math.floor(Math.random() * c.width) - this.size.x;
        this.pos.y = Math.floor(Math.random() * c.height) - this.size.y;;
        this.color = 'green';
    }

}




class SnakeGame {
    constructor(canvas,cW,cH){
        this.c = canvas;
        this.cW = cW;
        this.cH= cH;
        this.c.width = this.cW;
        this.c.height = this.cH;
        this.ctx = canvas.getContext("2d");
        this.player = new Player;
        this.player.pos.x = this.cW /2;
        this.player.pos.y = this.cH /2;

       this.part= new Part(canvas);
        let lastTime;
        const callback = (millis) => {
            if (lastTime) {
                this.update((millis-lastTime)/1000)
            }
            lastTime = millis;
            requestAnimationFrame(callback)

        }
        callback();

    }

    draw() {

        this.ctx.fillStyle="#000";
        this.ctx.fillRect(0,0,this.cW,this.cH);    

        this.ctx.fillStyle ='#fff';
        this.ctx.fillRect(this.player.pos.x,this.player.pos.y, this.player.size.x, this.player.size.y)
        
        this.ctx.fillStyle = this.part.color;
        this.ctx.fillRect(this.part.pos.x,this.part.pos.y, this.part.size.x, this.part.size.y)
    }

    collide() {
        let touched = false

        if(Math.floor(this.player.pos.x) === this.part.pos.x &&
           Math.floor(this.player.pos.y) === this.part.pos.y &&
           touched === false
        ) {
         touched === true;
         if ( touched===true) {
            this.player.snakeLenght += 1;
         }
         
        }
        console.log( this.player.snakeLenght)
        
    }

    update(dt) {

        this.player.pos.x += this.player.vel.x * dt;
        this.player.pos.y += this.player.vel.y * dt;

        if (this.player.pos.x > this.cW) {
            this.player.pos.x = 0;
        } else if(this.player.pos.x < 0) {
            this.player.pos.x = this.cW;

        } else if(this.player.pos.y > this.cH ) {
            this.player.pos.y = 0;
        } else if(this.player.pos.y < 0) {
            this.player.pos.y = this.cH;
        }
        this.collide();
        this.draw();
        console.log(this.player.snakeLenght)

    }

}


addEventListener('keydown', function(e){
    sP = snakeGame.player;
    console.log(e);
    if (e.code === 'ArrowUp') {
        console.log('uppp')
        sP.vel.y = -sP.speed;
        sP.vel.x = 0;
    }
    else if (e.code === 'ArrowDown') {
        console.log('downnn')
        sP.vel.y = sP.speed;
        sP.vel.x = 0;
    }
    else if (e.code === 'ArrowLeft') {
        console.log('lefft')
        sP.vel.x = -sP.speed;
        sP.vel.y = 0;
    }
    else if (e.code === 'ArrowRight') {
        console.log('right')
        sP.vel.x = sP.speed;
        sP.vel.y = 0;
        
    }
    console.log(sP.vel)
})

const canvas = document.getElementById("mySnake");
const snakeGame = new SnakeGame(canvas,800,800);


