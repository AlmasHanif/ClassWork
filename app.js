

// var b = 10 ; 


// for(let b = 0 ; b < 5 ; b++){
//     console.log(b)
// }


// {
// const name1 = "almas";
// const num = 16; 
// }
// console.log(name1 )

// const name1 = "almas";
// const num = 16; 
//  num = 16 + 2;
//  console.log(num)


//  let myName 
//  myName = "Almas"
//  console.log(myName)


// let studentAge = 18;
// let userData = +prompt("enter your age")

// function form(){
//     if(userData === studentAge){
//     alert("you are eilgibale")
//     }
//     else{
//     alert("you are not eligible")
//     }
// }
// form()


// my = "almas";
// let my 
// console.log(my)

// sessionStorage.setItem("name" , "Almas")
// sessionStorage.setItem("role" , "student")

// console.log(sessionStorage.getItem("name"))
// console.log(sessionStorage.getItem("role"))


// // sessionStorage.getItem()
// sessionStorage.removeItem("name")

let obj = {
    name : "almas",
    role : "student",
    id : 224,
    institute : "saims"
}


sessionStorage.setItem("data",JSON.stringify(obj) )
console.log(sessionStorage.getItem("data"))
let value = JSON.parse(sessionStorage.getItem("data"))
console.log(value)