class aspirant {
    constructor(email,name){
    this.area = email;
    this.name = name;
    this.score = 0;

}
login(){
    console.log(this.email, "know your area");
    return this;
}
logout(){
    console.log(this.email, "know your votes");
    return this;
}
updateScore(){
    this.score++;
    console.log(this.email, "score is now", this.score);
    return this;
}

}

class Admin extends aspirant{
    deleleAspirant(){
    

    }

}

var newAspirant = new aspirant("sam@gmail.com","sam");
var oldAspirant = new aspirant("manoah@gmail.com","man")
var aspirants = [newAspirant,oldAspirant];