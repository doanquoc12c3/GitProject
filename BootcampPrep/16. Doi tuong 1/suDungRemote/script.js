function Remote(){
    
    this.adjustChannel = function(channel){
        this.channel = channel ;
        return this.channel;
    }

   
    this.increaseVolume = function(volume){
        this.volume = volume;
        this.volume = this.volume +1;
        return this.volume;
    }
    this.turnOff = function(){
        this.mode = false;
    }
    
}

function Tivi(channel, mode,volume){
    this.channel = channel;
    this.volume = volume;
    this.mode = mode;
    this.setChannel = function(channel){
        this.channel = channel;
        return this.channel;
    } 
    this.setVolume = function(volume){
        this.volume =volume;
    }

}

var tivi = new Tivi(7,true,0)
var remote = new Remote();

tivi.setChannel(remote.adjustChannel(3));
remote.increaseVolume(tivi.volume);
