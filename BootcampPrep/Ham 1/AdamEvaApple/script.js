function Apple(){
    this.weight = 10;
    this.Apple = function (){

    }
    this.decrease = function(){
    this.weight = this.weight -1;
    }
    this.isEmpty = function(){

    }
    this.getWeight = function (){
        return this.weight;
    }
}


function Human(name, sex, weightHuman){
    this.name = name;
    this.sex = sex;
    this.weightHuman = weightHuman;
    this.say = function(){
        console.log(this.say = 'Hi, nice to meet '+ this.name)
    }
    this.isMale = function (sex){
        if(this.sex == 'male'){
            return true;
        } else if(this.sex == 'female'){
            return false;
        }
    }
    this.setGender(){
        this.sex = sex;
    }
    this.eat = function (){
        this.weightHuman = this.weightHuman + 1;
        this.apple.decrease()
    }
    this.checkApple = function (){
        return this.apple.getWeight();
    }
    this.getName = function (){
        return this.name;
    }
    this.setName = function (){
        this.name = this.name;
    }
    this.getWeight  = function (){
        return this.weightHuman = weightHuman;
    }
    this.setWeight = function (){
        this.weightHuman = weightHuman;
    }
}