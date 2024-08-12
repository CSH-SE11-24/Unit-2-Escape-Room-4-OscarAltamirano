const prompt = require('prompt-sync')()


let age = prompt("What's yuour age? ")
age = parseInt(age)
if(age >= 18){
  console.log("You can vote!")
}else{
  console.log("You can't vote!")

}

 let guess = prompt("Passsword ")

while (guess !== "SE11"){
 guess = prompt("Try again ")
console.log(guess)
}

let competencies =["if/else", "while", "for", "functions", "objects"]
for(let i = 0; i <= 4; i++){
  console.log(competencies[i])
}

