const mongoose=require('mongoose');
const portSchema=mongoose.Schema({
    name:{
        type:String,
        
    },
    email:{
        type:String,
        
    },
    subject:{
        type:String
        
    },
    message:{
        type:String
        
    }
})

PortModel=mongoose.model('Portpholio',portSchema)
module.exports=PortModel;