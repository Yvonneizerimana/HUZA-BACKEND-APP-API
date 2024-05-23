import {model, Schema} from 'mongoose'
// import bcrypt from 'bcrypt'

const serviceSchema = new Schema({
    photo:{
        type: 'string',
        required: false
        
    },
    category:{
        type: 'string',
        required: false
        
    },
    description:{
        type: 'string',
        required: false,
        
    }
},{
timestamps:true
})

// adminSchema.pre('save',async function(next){
//     const salt=await bcrypt.genSalt(10);
//     this.password=await bcrypt.hash(this.password,salt);
//     next();
//  })


export default model("service",serviceSchema);