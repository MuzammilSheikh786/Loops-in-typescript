// For loop
let Name1 = "ZAIN";
for(let i = 0 ; i < 500 ; i++){
    console.log(Name1);
}

// While loop
 let Name2 = "Sufiyan";
let z = 0;
while(z<=600){
    console.log(Name2);
    z++;
}

// Invite friends for dinner with the help of for loop
let Guest_list0 : string[] = ["Ali","Zubair","Usman","Shakeel"];
for(let i = 0 ; i < Guest_list0.length ; i++){
    console.log(`Dear ${Guest_list0[i]} : \n you are invited to dinner! \n`);
}

// Invite friends for dinner with the help of while loop
let Guest_list1 : string[] = ["Shah","Sufiyan","Mohsin"];
let i = 0;
while(i<Guest_list1.length){
    console.log(`Dear ${Guest_list1[i]}: \n you are invited to lunch \n`);
    i++;
}
// A trick to write a table with the help of while loop
let start : number = 1
while(start <= 10){
let finalResult = 12 * start;
console.log("12 * " + start + " = " + finalResult );
start = start + 1
} 

// A trick to write a table with the help of for loop
for(let start = 1 ; start <= 10 ; start = start + 1){
    let finalResult = 16 * start;
    console.log("16 * "  + start + " = " + finalResult);
}    



