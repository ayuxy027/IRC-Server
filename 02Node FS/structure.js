const fs = require('fs');

// fs.writeFileSync("./test.txt" , "Hey Boi")


// write file 

// fs.writeFile("./test.txt", "Hey Boi again 2.0", (err)=>{} )


// read file 

// sync and aysn read file 

// sync 

// const a =fs.readFileSync("./contact.txt", "utf-8" )
// console.log(a);

// async 

// fs.readFile("./contact.txt", "utf-8" , (err,result) =>{
//     if (err) {
//         console.log("Error", err)
//     }
//     else{
//         console.log(result)
//     }
// })


// append files 


// fs.appendFileSync("./test.txt", `${Date.now()} Hi again\n`);


// Date and time format below 

// const currentDate = new Date();
// const formattedDate = currentDate.toLocaleString()
// fs.appendFileSync("./test.txt", `${formattedDate} Hi again\n`);


// copy file 

// fs.cpSync("./test.txt","./copy1.txt");


// delete file 

// fs.unlinkSync("./copy1.txt");


// create folders

// fs.mkdirSync("Module 3");
