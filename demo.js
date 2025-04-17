 "use strict";
// mm=110; it that folloe the rule while doing code 
var a=12;
var b=a;
b=b+2;
function abc()
{
    console.log("helllo");
    return 33;
}
var i=abc();
console.log(i);

// problem with the reference type
var c=[1,2,3,4,5];
var d=c;
d.pop();
console.log(c);

//solution of refernce type 
var m=[1,2,3,4,5];
var n=[...m];
n.pop();
console.log(m);

//to reverse a array
// var reverseTo=m.reverse
// reverseTo.forEach(function(i)
// {
//     console.log(i);
// });
console.log(m.reverse);

//to print an array 
m.forEach(function(i)
{
   console.log(i);
});

//objects in js 
// and to get the person.fun 
//  person.fun("ishika") output will be my name is ishika

let person={
    name:"ishika",
    age:"22",
    address:"indore",
    fun:function myName(name)
    {
        console.log("my name is "+ name);
    }
}

//to delete the parameter like name
 delete person.name;


//to print an object 
for(let key in person)
{
    console.log(key,person[key]);
}


// if will work with -1
if(-1)
{
    console.log("if condition is working ")
}

// if does not works with the null,NaN,0,false,undefined,document.all rather than this it will always return the true
if(NaN)
    {
        console.log("if condition is working ")
    }
 else{
    console.log("else is working ");
 }   

 if(undefined)
    {
        console.log("if condition is working ")
    }
 else{
    console.log("else is working ");
 } 

 if(0)
    {
        console.log("if condition is working ")
    }
 else{
    console.log("else is working ");
 } 
 if(false)
    {
        console.log("if condition is working ")
    }
 else{
    console.log("else is working ");
 } 
 if(document.all)
    {
        console.log("if condition is working ")
    }
 else{
    console.log("else is working ");
 } 

 if(null)
    {
        console.log("if condition is working ")
    }
 else{
    console.log("else is working ");
 } 

 
//arrow function 
//  function abc()
// {
//     console.log("helllo");
//     return 33;
// } normal function converting to the arrow function
// this is not working with use strict +normal function but below will work


function iifg()
{
    console.log("normal function "+this);
    return 33;
}

//this will work with the use strict 
 
iifg();
 var check=()=>
 {
     console.log("arrow function "+this);
     return 33;
 }
 check();


 //callback function
 function checkCallBack()
 {
    console.log(" it always is working");
    setTimeout(()=>{
        console.log(" after 3 second it's working ");
    },3000);
    console.log("after call back function ");
 }
 checkCallBack();

