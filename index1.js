var user = {
    email : "samuelmanoah61@gmail.com",// properties
    name : "sammy",
    login(){
        console.log(this.email,"has login in"); // this refers to all object of user
    },
    logout(){
        console.log(this.email,"has log out");
    }

};
console.log(user.email);