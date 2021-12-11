function SwitchButton(status,lamp){
    this.status = status;
    this.lamp = lamp;
    this.time = 0;
    this.SwitchButton= function (){
        for(let i=0;i<10;i++){
            this.switchOff();
            this.switchOn();
        }
    }
    this.connectToLamp = function (){
        this.ElectricLamp = ElectricLamp;
    }
    this.switchOff = function (lamp){
        this.lamp = this.lamp.turnOff();
    }
    this.switchOn = function (){
        this.status = this.lamp.turnOn();
    }

}

function ElectricLamp(status){
    this.status = status;
    this.ElectricLamp = function (){

    }
    this.turnOff = function (){
        return this.status = false;
    }
    this.turnOn = function (){
        return this.status = true;
    }
}