import mongoose from "mongoose"

const skilledSchema = new mongoose.Schema({
    firstName:{
        type:String,
        required: true
    },
    lastName:{
        type:String,
        required: true
    },
    email:{
        type:String,
        required: true,
        unique: true
    },
    phone:{
        type:String,
        required: true,
        unique: true
    },
    password:{
        type:String,
        required: true
    },
    role:{
        type:String,
        default:"skilled"
    },
    otp:{
        type:String,
        required:false
    }
},{Timestamp:true}
)

const skilledModel = mongoose.model("SkilledPeople", skilledSchema)
export default skilledModel