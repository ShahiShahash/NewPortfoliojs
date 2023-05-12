// let marks = prompt("Enter marks: ")
// if (marks<101 & marks >70){
//     alert("First class honours")
// }
// else if (marks < 70 & marks > 60){
//     alert("Second class")
// }
// else if (marks < 60 & marks > 40){
//     alert("3rd class")
// }
// else{
//     alert("fail")
// }

// let i;
// for (i =1;i<=10;i++){
//     if(i%2==0){
//         console.log(i)
//     }
// }


function myFunction(){
    const element = document.body;
    element.classList.toggle("dark-mode");

    const button = document.querySelector("button");
    if(element.classList.contains("dark-mode")){
        button.textContent="Light-mode";
    }else{
        button.textContent="Dark-mode";
    }
}

const textchange  = document.querySelector("#change");
const textvalue = ["a FullStackDeveloper","a Designer","a Teacher"];
let counter = 0;
setInterval(()=>{
    textchange.textContent = textvalue[counter];
    counter=(counter+1)% textvalue.length;
},3000);