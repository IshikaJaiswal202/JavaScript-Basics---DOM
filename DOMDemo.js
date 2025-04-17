// it alert is part of window object not js's 
alert("hello");
console.log("hello everyone");

//to print the window object use 
console.dir(window);
console.dir(window.document);
console.dir(document.body);

// to print in html form use 
console.log(window.document);

// to get the element by id
let heading=document.getElementById("heading");
console.dir(heading);

// to get the element by class
let myclass=document.getElementsByClassName("myclass");
console.dir(myclass);


// to get the element by id
let mybutton=document.getElementById("mybutton");
console.dir(mybutton);

//to get element based on element 
let bytagName=document.getElementsByTagName("h2");
console.dir(bytagName);

//to get with any one of the above (classname, idname and tag name ) and only element of matching 
let getbyTagName=document.querySelector("p");
console.log("using query selectory");
console.dir(getbyTagName);


//to get with any one of the above (classname, idname and tag name ) give all the element of match
let getbyTag=document.querySelectorAll("p");
console.log("using query selectory all");
console.dir(getbyTag);

// to get the name of the tag 
// let heading=document.getElementById("heading");
// console.dir(heading);
let getname =heading.tagName;
console.log("get the name if the tag");
console.dir(getname);// output 'H1'

// to get innertext of parent and children both 
let getInnerText=document.querySelector("div");
 let printText=getInnerText.innerText;
 console.log("get inner text");
 console.dir(printText);
 // get inner html 
 let printHtml=getInnerText.innerHTML;
 console.log("get inner html");
 console.dir(printHtml);

 let getPtag=document.querySelector("#myp");
 console.log("get p tag object");
 console.dir(getPtag);

 // it will not print the hidden text 
let  a= getPtag.innerText
 console.log("get p tag by inner text but output will be ' ' ");
 console.dir(a);// output ''

 // but i will print the inner text by using text content
let b=getPtag.textContent
console.log("get p tag by text content  but output will be ' ' ");
console.dir(b); //  output ' Learn About Document Object model (DOM)'

let geth3tag=document.querySelector("#hello");
 console.log("get h3  tag object");
 console.dir(geth3tag);

  geth3tag.innerText= geth3tag.innerText +"  from .............";
 console.log("append some data");
 //console.dir(appendValue);


