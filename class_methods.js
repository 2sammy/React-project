class aspirant {
    constructor(email,name){
    this.area = email;
    this.name = name;
    this.score = 0;

}
login(){
    console.log(this.email, "know your area");
}
logout(){
    console.log(this.email, "know your votes");
}
updateScore(){
    this.score++;
    console.log(this.email, "score is now", this.score)
}
}

var newAspirant = new aspirant("naks",2233,"sam");
var oldAspirant = new aspirant("nairobi",22223,"man");
    newAspirant.login();
    oldAspirant.login();




var newAspirant = new aspirant("naks","19998");
var newAspirant = new aspirant("nai",8876);
