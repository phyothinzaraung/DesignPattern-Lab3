class User{

    constructor(name){
        this.name = name;
    }

    logger(){
        console.log("User: " + this.name);
    }
    
}

class DecoratedUser{
    constructor(user, city, state){
        this.user = user;
        this.name = user.name;
        this.city = city;
        this.state =state;
    }

    logger(){
        user.logger();
        console.log("Decorated User: " + this.name + ", " +
            this.city + ", " + this.state);
    }
}

const user = new User("Kelly");

const decorated = new DecoratedUser(user, "Broadway", "New York");
decorated.logger();