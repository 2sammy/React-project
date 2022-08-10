class aspirant {
    constructor(area,votes,name){
    this.votes = votes;
    this.area = area;
    this.name = name;

}
login(){
    console.log(this.area, "know your area");
}
logout(){
    console.log(this.area, "know your votes");
}
}

var newAspirant = new aspirant("naks",2233,"sam");
var oldAspirant = new aspirant("nairobi",22223,"man");
    newAspirant.login();
    oldAspirant.login();




var newAspirant = new aspirant("naks","19998");
var newAspirant = new aspirant("nai",8876);
