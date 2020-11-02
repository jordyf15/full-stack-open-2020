const mongoose = require('mongoose');
const uniqueValidator=require('mongoose-unique-validator');
const userSchema= new mongoose.Schema({
    username: {
        type: String,
        unique: true,
        required: true,
        minlength: 3
    },
    name: String,
    password: {
        type: String,
        required: true
    },
    blogs:[
        {
        type: mongoose.Schema.Types.ObjectId,
        ref:'Blog'
        }
    ]

})
userSchema.plugin(uniqueValidator)

userSchema.set('toJSON',{
    transform: (doc,returnObject)=>{
        returnObject.id=returnObject._id.toString(),
        delete returnObject.password,
        delete returnObject._id,
        delete returnObject.__v
    }
})

module.exports=mongoose.model('User',userSchema)