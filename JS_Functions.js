function myName(){
    console.log("Samarth Thaker");
}
myName();
myName();
function add(num1, num2){
    //console.log( num1 + num2);
    return num1 + num2;
    //console.log("Samarth");//Nothing will do after return statement;
}

const result = add(7, 8);
//console.log(result);
function loginMessage(userName){
    if(userName===undefined)
    //Also, if(!userName) is also valid 

    {
        console.log("Please enter a username");
        return;
    }
    else{
    return `${userName} just logged in `;
    }
}
console.log(loginMessage())
// If no argument is passed, the output of this function is "undefined just logged in"
function calculateCartPrice(...num1){
    return num1;//returns array of all the values
}
console.log(calculateCartPrice(200, 400, 500));//:prints"[200, 400, 500]"
//"..."is rest and spread operator: in this caseit is spread

const user={
userName: "Samarth",
price: 199
}
function handleObject(anyObject){
    console.log(`Username is ${anyObject.userName} and price is ${anyObject.price}`);
}
handleObject(user)
handleObject({
    userName:"Tushar",
    price: 400
})
const myArray = [200, 400, 800, 1600];
function returnSecondValue(array){
    return array[1];
}
const num = returnSecondValue(myArray);
console.log(num);