/**
 * Created by nhatnk on 6/27/17.
 */
const GAMEBOARD_WIDTH = 500;
const GAMEBOARD_HEIGHT = 500;

const ORIENTATION_LEFT = "left";
const ORIENTATION_RIGHT = "right";
const ORIENTATION_UP = "up";
const ORIENTATION_DOWN = "down";

const NINJA_WIDTH = 59;
const NINJA_HEIGHT = 86;

const DEFAULT_NINJA_X_POSITION = 100;
const DEFAULT_NINJA_Y_POSITION = 100;
const DEFAULT_NINJA_ORIENTATION = ORIENTATION_DOWN;
const DEFAULT_NINJA_SPEED = 20;

function Ninja(){
    this.xPosition = DEFAULT_NINJA_X_POSITION;
    this.yPosition = DEFAULT_NINJA_Y_POSITION;
    this.orientation = ORIENTATION_DOWN;
    this.speed = DEFAULT_NINJA_SPEED;

    this.buildImage = function(){
        this.image = 'car.png';
    };

    this.buildImage();

    this.move = function(){
        switch (this.orientation) {
            case ORIENTATION_DOWN:
                this.yPosition += this.speed;
                break;
            case ORIENTATION_UP:
                this.yPosition -= this.speed;
                break;
            case ORIENTATION_LEFT:
                this.xPosition -= this.speed;
                break;
            case ORIENTATION_RIGHT:
                this.xPosition += this.speed;
                break;
        }
    };


    this.show = function(ctx){
        var image = new Image();
        var xPosition = this.xPosition;
        var yPosition = this.yPosition;
        image.onload = function(){
            ctx.drawImage(image, xPosition, yPosition,80,80);
        };
        image.src = './images/' + this.image;
    }

}

function Obstacle(){
    this.xCordinate = Math.floor(Math.random()*GAMEBOARD_WIDTH);
    this.yCordinate = Math.floor(Math.random()*GAMEBOARD_HEIGHT);
    this.showObs= function (ctx){
        var obs = new Image();
        var xCor = this.xCordinate;
        var yCor = this.yCordinate;
        obs.onload = function (){
            ctx.drawImage(obs,xCor,yCor,60,60);
        }
        obs.src = './images/obstacle.png'
    }
}

function Award(){
    this.xAward = Math.floor(Math.random()*GAMEBOARD_WIDTH);
    this.yAward = Math.floor(Math.random()*GAMEBOARD_HEIGHT);
    this.showAward = function (ctx){
        var award = new Image();
        var x = this.xAward;
        var y = this.yAward;
        award.onload=function (){
            ctx.drawImage(award,x,y,60,60);
        }
        award.src = './images/award.png';


    }

}

function GameBoard() {
    this.award1 = new Award();
    this.obs1 = new Obstacle();
    this.obstacle = new Obstacle();
    this.ninja = new Ninja();
    this.ctx = undefined;
    this.start = function(){
        this.ctx = document.getElementById('gameCanvas').getContext('2d');
        this.ninja.show(this.ctx);
        this.obstacle.showObs(this.ctx);
        this.obs1.showObs(this.ctx);
        this.award1.showAward(this.ctx);
    };

    this.render = function(){
        this.ctx.clearRect(0, 0, GAMEBOARD_WIDTH, GAMEBOARD_HEIGHT);
        this.ninja.show(this.ctx);
        this.obstacle.showObs(this.ctx);
        this.obs1.showObs(this.ctx)
        this.award1.showAward(this.ctx);
    };

    this.moveNinja = function(event){
        var orientation = 0;
        switch (event.which){
            case 37:
                orientation = ORIENTATION_LEFT;
                break;
            case 38:
                orientation = ORIENTATION_UP;
                break;
            case 39:
                orientation = ORIENTATION_RIGHT;
                break;
            case 40:
                orientation = ORIENTATION_DOWN;
                break;
        }
        if(this.ninja.xPosition+80> this.obstacle.xCordinate && this.obstacle.xCordinate > this.ninja.xPosition && this.ninja.yPosition+80>this.obstacle.yCordinate && this.obstacle.yCordinate> this.ninja.yPosition){
            alert('you lose');

        }
        if(this.ninja.xPosition+80> this.obs1.xCordinate && this.obs1.xCordinate > this.ninja.xPosition && this.ninja.yPosition+80>this.obs1.yCordinate && this.obs1.yCordinate> this.ninja.yPosition){
            alert('you lose');

        }
        if(this.ninja.xPosition+20> this.award1.xAward && this.award1.xAward > this.ninja.xPosition && this.ninja.yPosition+20>this.award1.yAward && this.award1.yAward> this.ninja.yPosition){
            alert('you win');
        }

        if(orientation){
            if(this.ninja.orientation !== orientation){
                this.ninja.orientation = orientation;
            } else {
                this.ninja.move();
            }
            this.render();
            console.log('ninja : '+ this.ninja.xPosition + '\n'+'obs: '+ this.obstacle.xCordinate)
        }
    }
}

var gameBoard = new GameBoard();
gameBoard.start();