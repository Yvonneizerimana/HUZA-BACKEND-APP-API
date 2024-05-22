import {model, Schema} from 'mongoose'
// import bcrypt from 'bcrypt'

const contactSchema = new Schema({
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
    message:{
        type: 'string',
        required: true
    }
},{
    toJSON: {
        transform: (doc, ret) => {
            ret.id = ret._id;
            delete ret._id;
            delete ret.__v;
            return ret;
        }
    },
timestamps:true
})




export default model("contact",contactSchema);