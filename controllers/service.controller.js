import serviceModel from '../models/services.model.js'; // Corrected import path

const serviceController = {
    addService: async (req, res) => {
        try {
            const newService = await serviceModel.create(req.body); // Using create method
            return res.status(201).json({
                message: "Service created successfully",
                savedService: newService
            });
        } catch (error) {
            return res.status(500).json({ error: error.message });
        }
    },
    listService: async (req, res) => {
        try {
            const allServices = await serviceModel.find();
            return res.status(200).json({
                status: 'success',
                allServices: allServices
            });
        } catch (error) {
            return res.status(500).json({ error: error.message });
        }
    },
    deleteService: async (req, res) => {
        try {
            const deletedService = await serviceModel.findByIdAndDelete(req.query.id);
            return res.status(200).json({
                status: 'success',
                deletedService: deletedService
            });
        } catch (error) {
            return res.status(500).json({ error: error.message });
        }
    },
    updateService:async (req, res)=>{
    try {
        const updatedService = await serviceModel.findByIdAndUpdate(req.params._id, req.body, { new: true });
        
        // Check if the service was found and updated
        if (!updatedService) {
             res.status(404).json({ message: 'Service not found' });
        }else{
            res.status(200).json({
                message: "Service updated successfully",
                updatedService
            });
        }

        // Service successfully updated
        
    } catch (error) {
        console.log(error);
    }
 }
    
}

export default serviceController;
