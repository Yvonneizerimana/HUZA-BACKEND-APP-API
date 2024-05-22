import {model, Schema} from 'mongoose'
// import bcrypt from 'bcrypt'

const serviceSchema = new Schema({
    photo:{
        type: 'string'
        
    },
    category:{
        type: 'string',
        required: true
        
    },
    description:{
        type: 'string',
        required: true,
        
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

// adminSchema.pre('save',async function(next){
//     const salt=await bcrypt.genSalt(10);
//     this.password=await bcrypt.hash(this.password,salt);
//     next();
//  })


export default model("service",serviceSchema);