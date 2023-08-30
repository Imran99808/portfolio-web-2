const http=require('http');
const Url =require('url');


const routes=require('./routes');
const notFoundHandler=require('./Handler/errorHandler')

const port=5000;




const server=http.createServer((req,res)=>{
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'POST');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
    const headers = {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'POST',
        'Access-Control-Allow-Headers':'Content-Type'
      };
  
   
    if (req.method === 'OPTIONS') {
      
       res.writeHead(204,headers);
      res.end();
      return;
     } 
   console.log('emon') 
  const path=req.url
  const method=req.method;
  const reqObj={
    method
  }
  
  let formdata='';


  req.on('data',(chunk)=>{
       
    formdata+=chunk;

  });

  req.on('end',()=>{
   console.log(formdata)
     reqObj.body=JSON.parse(formdata)

    const chosenHandler=routes[path]?routes[path]:notFoundHandler;

    chosenHandler(reqObj,(statuscode,payoad)=>{
        res.writeHead(statuscode)
        res.end(payoad)
     
    })

    
  });

   

   
});


server.listen(port,()=>{
    console.log(`localhost:${port}`);
});




