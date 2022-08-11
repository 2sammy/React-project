class aspirant {
    constructor(email,name){
    this.area = email;
    this.name = name;
    this.score = 0;
    //this.grade = a;

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
//updateGrade(){
  //  this.updateGrade++
    //console.log(this.email,"the score",this.grade);
//}
}

var newAspirant = new aspirant("naks",2233,"sam");
var oldAspirant = new aspirant("nairobi",22223,"man");
    newAspirant.login();
    oldAspirant.login();




var newAspirant = new aspirant("naks","19998");
var newAspirant = new aspirant("nai",8876);
newAspirant.login().updateScore.logout().updateScore