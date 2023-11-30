
const { getEventListeners } = require('events');
const fs=require('fs');
var {sum, diff}=require('./lib')

// fs.open('abc.txt','r+',(err,data)=>{
//     if(err)
//     {
//         console.log(err)
//     }
//     else
//     {
//         console.log("file open success............")
//     }
// })

//write file

const data="hello howw are you";
// fs.writeFile('abc.txt',data,(err)=>{
//     if(err){
//     console.log(err)
//     }
//     else
//     {
//         console.log("file write succes.........")
//     }
// })
// fs.writeFileSync('abc.txt',data)
// console.log("file write sucess")

//write

//read
// const t1=performance.now();
// console.log()
// console.log(sum(10,20))
// const r=fs.readFile('xyz.txt','utf8',(err,data)=>{

//     if(err)
//     {
//         console.log(err)
//     }
//     else{
//         console.log(data)
//     }
// })
// console.log(diff(40-20))
// const t2=performance.now();
// console.log("total time is :",t2-t1)

// let r=fs.readFileSync('abc.txt','utf-8')
// console.log("reading file success..........",r)


//rename

// const x=fs.rename('abc.txt','xyz.txt',(err,data)=>{
//     if(err)
//     {
//         console.log(err)
//     }
//     else{
//         console.log("rename success.........")
//     }
// })
// console.log(x)

//append
const data1="hiiiiiiiiiiiiiiii"
// fs.appendFile('xyz.txt',data1,(err,data)=>{
//     if(err)
//     {
//         console.log(err)
//     }
//     else{
//         console.log("append file success")
//     }
// })


// fs.appendFileSync('xyz.txt',data1)
// console.log("data append success")

//delete file

// fs.unlinkSync('a.txt')
// console.log("delete file success...")

// fs.unlink('a.txt',(err,data)=>{
//     if(err)
//       console.log(err)
//     else
//     console.log("delete succdess..........")
// })

//close file

// fs.close(1,(err,data)=>{
//     if(err)
//       console.log(err)
//     else
//       console.log("close success......");
// })


