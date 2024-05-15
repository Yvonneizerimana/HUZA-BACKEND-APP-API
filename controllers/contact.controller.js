import contactModel from '../models/contact.model.js'
import asyncWrapper from '../errors/Async.js';

const contactController = {
    create: async (req, res) => {
       const newContact=await contactModel(req.body)
        return res.status(201).json({
            message: "Contact created successfully",
            newContact
        });
    },
    listContact:asyncWrapper(async(req,res)=>{
        const contacts = await contactModel.find();
        return res.status(200).json({
            status:'success',
            contacts
        })
    }),

    listContactByEmail:asyncWrapper(async(req,res)=>{
        const contacts = await contactModel.find({email:req.query.email});
        return res.status(200).json({
            status:'success',
            contacts
        })
    }),

    listContactByPhoneNumber:asyncWrapper(async(req,res)=>{
        const contacts = await contactModel.find({phoneNumber:req.query.phoneNumber});
        return res.status(200).json({
            status:'success',
            contacts
        })
    }),

    deleteContactById:asyncWrapper(async(req,res)=>{
        const contact = await contactModel.findByIdAndDelete(req.query.id);
        return res.status(200).json({
            status:'success',
            contact
        })
    })

}
 export default contactController;