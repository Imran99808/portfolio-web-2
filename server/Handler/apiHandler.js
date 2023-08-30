const sendMail=require('nodemailer');
const method={}

const apiHnadler=(req,cb)=>{
console.log(req.body)
if(req.method==="POST"){
    method.post(req,cb);

}else{
    cb(405);
}

};

method.post=async(req,cb)=>{
  const transport=sendMail.createTransport({
     service:'gmail',
     auth:{
        user:'shafikul34405@gmail.com',
        pass:''
     }
  });
const mail={
    to:"emranreja222@gmail.com", // list of receivers
    subject: `CLIENT=>[${req.body.name}]:[${req.body.mail}]`, // Subject line
    text: req.body.comment, 
   
  };
  

  transport.sendMail(mail,(err,info)=>{
    if(err){
      cb(500);
      console.log(err);
    }else{
      cb(200,"success")
    }
  });


 
 




}


module.exports=apiHnadler;