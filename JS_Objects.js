//Singleton: 

//object lietrals
const mySym = Symbol("key1");//symbol declaration

const jsUser = {
    name: "Samarth",
    "full name": "Samarth Thaker", //Cannot be accessed by dot(.)
    age: 20,
    [mySym]:"mykey1",
    location: "Mumbai",
    email: "samarth.thaker07@gmail.com",
    isLoggedIn: false,

}
//Object.freeze(jsUser)///No key of object can be changed now. No change will propogate
//All the object parameters are strings behind the scenes
console.log(jsUser.email);//No need to take parameters as string when using dot(.)
console.log(jsUser["email"]);
console.log(jsUser["age"]);
console.log(jsUser[mySym]);

jsUser.greeting = function(){
    console.log("Hello JS user");
}
console.log(jsUser.greeting);//undefined
console.log(jsUser.greeting());
