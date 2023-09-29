const mongoose=require('mongoose');
const Dbconn = mongoose.connect('mongodb+srv://rohan:rabbitcat@cluster0.wuhmurf.mongodb.net/employees?retryWrites=true&w=majority',

{
    useNewUrlParser:true,
    useUnifiedTopology:true
})

.then(()=>console.log('connected successfully'))
.catch((err)=>console.log('err'))

module.exports = Dbconn;