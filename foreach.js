//for each method is used to call a funcnction and print the each and every array element from the array.
//there are two syntax are present

//synata-1
// var loki=[1000,2000,3000,4000,5000];
// loki.forEach(function(item,index,array) {
//     console.log(item); //in out put which variable we want to print that we write inside  paranthities
//     console.log(index);
//     console.log(array);
// }) //inside for each we can use any type of function not a matter
// console.log(item); //1)this is used for get element from array.
// console.log(index);//2)this is for printing index of array.
// console.log(array);//this used for printing total array.
// ----------------------------------------------------------------
//syntax -2 we write fnction seperately and call the function by uisng name inside of forEach method
// var loki=[1000,2000,3000,4000,5000];
// loki.forEach(murali) 
// function murali (item) {
//     alert(item); //in out put which variable we want to print that we write inside  paranthities
//     // console.log(index);
//     // console.log(array);
// }
// --------------------------now we perform examples---------------------
var salary=[1000,2000,3000,4000,5000];
console.table(salary);
salary.forEach(total);
function total(item) {
    var increment=item/10;
    var final=item+increment;
    console.table(final);
}