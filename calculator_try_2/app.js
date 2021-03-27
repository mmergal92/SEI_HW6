/*Breakdown into smaller steps:
User should be able to select the button and hold on to the value 
part 1 - select button and value; return value; store as variable 
repeat with all 9 keys 
part 2 - select operator. store as value. repeat with all 4 operators
part 3 - create 4 separate functions (one for each operator). 
for example: total sum = "variable 1" "+" "variable 2"
part 4 - display totals in desplay screen
part 5 - figure out how to include decimals into the functions and variables. 
*/
// let num1 = " ";
// let num2 = " ";
// let totalSum = 0;

$(()=>{
    $(".keys").click(function(){
        console.log("the number is " + $(this).text());
        })
        // if ($('.keys').click()){
        //     console.log($(this).text());
        // }
        // if ($('.operator').click()){
        //     console.log($(this.text()))
        // }
        // if ($(this).text() == "keys"){
            // ($('.calcDisplay).text($(this).text()));
            // console.log(typeof e);
            // console.log($(this).text())
            // if ($('.keys'))
            // console.log("the number is " + $(this).text());
            // let num1 = $(this).text()
        // addFunc();
        // subFunc(); 
        // divideFunc(); 
        // multiplyFunc(); 
})
/*
function addFunc(num1, num2){
    let sum = 0
    sum = num1 + num2
    return sum
}
function subFunc(num1, num2){
    let subTotal = 0
    subTotal = num1 - num2
    return subTotal
}
function divideFunc(num1, num2){
    let divTotal = 0
    divTotal = num1 / num2
    return divTotal
}
function multiplyFunc(num1, num2){
    let mulTotal = 0
    mulTotal = num2 * num1
    return mulTotal
}
*/
