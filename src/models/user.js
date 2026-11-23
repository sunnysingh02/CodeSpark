const mongoose = require('mongoose');
const {Schema} = mongoose;

const userSchema = new Schema({
    firstName:{
        type: String,
        require: true,
        minLenght: 3,
        maxlenght: 20
    },
    lastName:{
        type: String,
        minLengh: 3,
        maxlenght:20,
    },
    emailId:{
        type: String,
        require: true,
        unique: true,
        trim: true,
        lowercase: true,
        immutable: true,
    },
    age:{
        type:Number,
        min:6,
        max:80,
    },
    role:{
        type:String,
        enum: ['user', 'admin'],
        default: 'user'
    },
    problemSolved:{
        type:[string]
    }
},{
    timestamps: true
});
const user = mongoose.model("user", userSchema);
module.exports=user;
