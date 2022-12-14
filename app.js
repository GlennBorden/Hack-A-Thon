import { strings, concatenate, templateLiterals } from "./src/strings.js";
import {
  arrays,
  // arrayToString,
  compareArrays,
  stringToArray,
} from "./src/arrays.js";
import { forLoop, indexOfAlphabetsArray } from "./src/loops.js";

document.title = "Hackathon";
const divv = document.createElement("div");
document.body.prepend(divv);
divv.setAttribute("id", "div1");
const h1 = document.createElement("h1");
divv.appendChild(h1);
h1.setAttribute("id", "mainHeading");
h1.style.color = "#03fccf";
h1.style.textAlign = "center";
divv.style.textAlign = "center";
divv.style.width = "60%";
divv.style.height = "50%";
divv.style.margin = "auto";
divv.style.border = "1px solid grey";
divv.style.boxShadow = "grey 2px 2px";
const node = document.createTextNode("Cycle 11 Hackathon");
h1.appendChild(node);

const button = document.createElement("button");
divv.appendChild(button);
button.style.width = "20%";
button.style.height = "50%";
button.style.margin = "auto";
button.style.align = "center";
const node2 = document.createTextNode("Picture");
button.appendChild(node2);

const divv2 = document.createElement("div");
divv.after(divv2);
divv2.setAttribute("id", "picture");
const img = document.createElement("img");
divv2.appendChild(img);
img.setAttribute("id", "image");

img.src = "https://bit.ly/3FIkEjn";
img.style.display = "none";
img.style.margin = "auto";
img.style.height = "500px";
img.style.padding = "25px";

button.addEventListener("click", () => {
  document.getElementById("image").style.display = "block";
});

let base = "I am calling this function and passing this text as an argument.";
console.log(strings(base));
console.log(concatenate(base));
console.log(templateLiterals(base));

let arr = [1, 2, 3, 4];
console.log(arrays(arr));

let arr2 = [1, 2, 3, 4, 5];
console.log(compareArrays(arr, arr2));

let words = "a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z";
const a = stringToArray(words);
const b = stringToArray(words);
console.log(a);

let alphabet = "a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z";
console.log(a.join(","));

const c = forLoop(b);
console.log(forLoop(b));

console.log(indexOfAlphabetsArray(a, c));

export { base, arr, arr2, alphabet };
