function Hero(image, top, left, size, speed){
    this.image = image;
    this.top = top;
    this.left = left;
    this.size = size;
    this.speed = speed;
    this.firstLeft = left;
    this.firstTop = top;

    this.getHeroElement = function(){
        return '<img width="'+ this.size + '"' +
            ' height="'+ this.size + '"' +
            ' src="' + this.image +'"' +
            ' style="top: '+this.top+'px; left:'+this.left+'px;position:absolute;" />';
    }

    this.moveRight = function(){
        this.left += speed;
        console.log('ok: ' + this.left);
    }
    this.moveDown = function (){
        this.top +=speed;
    }
    this.moveLeft = function (){
        this.left = this.left - speed;
    }
    this.moveUp = function (){
        this.top = this.top - speed;
    }

}

var hero = new Hero('car.png', 20, 30, 100,100);

function start(){
    if(hero.left < window.innerWidth - hero.size - hero.speed && hero.top == 20) {
        hero.moveRight();
    }else if(hero.top < window.innerHeight - hero.size - hero.firstTop && hero.left > window.innerWidth - hero.size - hero.speed) {
        hero.moveDown();
    } else if(hero.left > hero.firstLeft){
        hero.moveLeft();
    }else if(hero.top > hero.firstTop){
        hero.moveUp();
    }
    document.getElementById('game').innerHTML = hero.getHeroElement();
    setTimeout(start, 100);
}







start();