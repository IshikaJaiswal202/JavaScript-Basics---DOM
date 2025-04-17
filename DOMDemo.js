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


 // to get the value of the id , class name of attribute 
let getButton =document.querySelector("button");
console.log("get the button");
let butt=getButton.getAttribute("id");
console.dir(butt);
console.dir(getButton.getAttribute("name"));
// to set the value of attribute  
console.log("set the attribute ..." );
getButton.setAttribute("name","newButton")
console.log(getButton.getAttribute("name"));

// to change the css at runtime use node.style
getButton.style.backgroundColor="pink";
getButton.style.color="white";
getButton.style.fontSize="22px";
//getButton.style.visibility="hidden";

// to add the new element to doc. have two steps 
// first create the docunment 
let secondButton=document.createElement("button");
secondButton.innerText="first click !!";

//second add this to document it will add to the with any node 
// so i want to add with suppose div tag 
// first access the div tag and then append it 
let getDiv=document.querySelector("div");
   getDiv.append(secondButton);// inside bottom of the div 
   getDiv.prepend(secondButton);//inside top of the div
   getDiv.before(secondButton);// before div 
   getDiv.after(secondButton);//after div

