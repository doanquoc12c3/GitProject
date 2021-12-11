function Rat(name,weight,speed,mode){
    this.name = name;
    this.speed = speed;
    this.weight = weight;
    this.mode = mode;
    this.sound = function(){
        this.sound = 'chit chit';
    }
    
    this.getSpeed = function(){
        return this.speed
    }
    this.setWeight = function(ratWeight){
        this.weight = ratWeight;
        console.log(this.weight)
    }
}
function Cat(name,weight,speed){
    this.name = name;
    this.weight = weight;
    this.speed = speed;
    this.rat = rat;
    this.numbersOfCatchedRat = 0;
    this.sound = function(){
        this.sound = 'meo meo'
    }
    this.catchRat = function(ratSpeed){
       
        if(this.speed > ratSpeed){
            this.numbersOfCatchedRat +=1;
            console.log(this.numbersOfCatchedRat)
        }else{
            alert('khong du speed de bat chuot, leu leu')
        }
    }
  
    this.eatRat = function(mode,ratWeight){
        if(mode==true && ratWeight>0 ){
            this.weight = this.weight+1;
            ratWeight = ratWeight -1;
            return ratWeight;
        }else{
            alert('meo khong an chuot song')
        }
    }
    this.getWeight = function(){
        return console.log(this.weight);
    }
    
    
}

var cat = new Cat("Tom",20,20);
var rat = new Rat('Jerry',18,18,true);
cat.eatRat(rat.mode,rate.weight);
cat.catchRat(rat.speed)

