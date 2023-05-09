class RegularBulb{
    constructor(){
        this.range = [50, 100];
        this.year = 1;
    }
}

class EnergySaverBulb{
    constructor(color){
        this.range = [5,40];
        this.year = 10;
        this.color = color;
    }
}

class Factory{
    createBulb(type, color){
        if(type === "regular"){
            return new RegularBulb();
        }else if (type=="energy"){
            return new EnergySaverBulb(color);
        }else{
            return null;
        }
    }
}

const bulbs = [];
const factory = new Factory();

bulbs.push(factory.createBulb("regular"));
bulbs.push(factory.createBulb("energy", "red"));


for (let i = 0, len = bulbs.length; i < len; i++) {
    console.log(bulbs[i]);
}