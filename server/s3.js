const http=require('http');
const fs=require('fs');
const { json } = require('stream/consumers');
const index=fs.readFileSync('index.html','utf-8');
const data=fs.readFileSync('demo.txt','utf-8');
const d={id:'111',name:'peter'}
const server=http.createServer((req,res)=>{
   res.setHeader('dummy','data');
   
//    res.end(data)
   // res.write("welcome")
   res.end(JSON.stringify(d))
});

server.listen(5000,(err)=>
{
    if(err)
    {
        console.log(err)
    }
    else
    {
        console.log("server started.......")
    }
});
