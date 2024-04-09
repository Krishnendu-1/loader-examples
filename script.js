var pointer = document.querySelector("#rect");

// pointer.style.backgroundColor="blue";

let a=window.prompt("What should you want to write in the box!");
console.log(a);
if(a==0)
pointer.innerHTML="Box";
else
pointer.innerHTML=a;


var b = pointer.getBoundingClientRect()//it hold the values of "#pointer"

console.log(b)

pointer.addEventListener("mousemove",function(d){// this "d " is assumed and its value wont be counted, we can take any value like that in JS to ease up our work
    console.log(d.x-b.left); // we cant take the "b.x" since the "b" is within the rectangle

    if((d.x-b.left)<(b.width)/2){
    console.log("left");
    pointer.style.backgroundColor="blue";
    pointer.style.color="red";


    }
else{
console.log("right");
pointer.style.backgroundColor="red";
pointer.style.color="blue";

}
})