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

var userOne = {
    name :"manoah",
    email :"manoah.co.ke",
    login(){
        console(this.email,"logged in");
    },
    logout(){
        console.log(this.email, "logged out")
    }
}

var userThree = {
    name:"mike",
    email:"mike@gmail.com",
    login(){
        console.log(this.email, "logged in");
    },
    logout(){
        console.log(this.email, "logged out");
    }



}

var userFour = {
    name: "sunshine",
    email: "sunshine@gmail.com",
    login(){
        console.log(this.email, "loggid");
    },
    logout(){
        console.log(this.email,"loggig");
    }
}



