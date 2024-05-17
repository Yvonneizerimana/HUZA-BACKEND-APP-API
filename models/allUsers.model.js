import {model, Schema} from 'mongoose'
// import bcrypt from 'bcrypt'

const allUsersSchema = new Schema({
    firstName:{
        type: 'string',
        required: true
    },
    lastName:{
        type: 'string',
        required: true
    },
    email:{
        type: 'string',
        required: true,
        unique: true
    },
    phoneNumber:{
     type: 'string',
     required: true,
     unique: true
    },
    role:{
        type: 'string',
        required:true,
        enum:{
            values:['user','admin','skilled'],
            message:'{VALUE} is not a valid role'
        }
    },
    password:{
        type: 'string',
        required: true
    },
    confirmpassword:{
        type:String,
        required: true

    },

    otp:{
        type:Number,
        required:true
        
    },
    otpExpires:{
        type:Date,
        required:false
    },
    verified: {
        type: Boolean,
        required: true,
        default: false
    },
    resetToken:{
        type:String,
        required:false
    },
    resetTokenExpires:{
             type:Date,
            required:false    }


},{
    toJSON: {
        transform: (doc, ret) => {
            ret.id = ret._id;
            delete ret._id;
            delete ret.__v;
            delete ret.password;
            delete ret.confirmpassword;
            return ret;
        }
    },
timestamps:true
})

// adminSchema.pre('save',async function(next){
//     const salt=await bcrypt.genSalt(10);
//     this.password=await bcrypt.hash(this.password,salt);
//     next();
//  })


export default model("allUsers", allUsersSchema);