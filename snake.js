

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
 
        this.speed = 300;
        this.vel = new Vec;
        this.snakeLenght =1 ;

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

        this.draw();


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


