const express=require('express');
const app=express();
const router=express.Router();


const bodyParser=require('body-parser');
const Dbconn= require('./Dbconnection');
const registerModel= require('./userSchema');
const PortModel=require('./pholioSchema');
app.set('view engine','ejs');
app.use(express.static('./views'));
app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static('./assets'));


router.get('/',function(req,res){
    res.render('./index');
});



router.post('/index',(req,res)=>{
    var portdata= new PortModel({
        name:req.body.name,
        email:req.body.email,
        subject:req.body.subject,
        message:req.body.message
    });
    portdata.save()
    .then(()=>{
        console.log('Data saved...');
    })
    .catch((err)=>{
        console.log(err);
    })
})

app.use('/',router);
app.listen(5000,()=>{
    console.log('The server is started!')
});