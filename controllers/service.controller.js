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
    updateService: async (req, res) => {
        try {
            const updatedService = await serviceModel.findByIdAndUpdate(req.query.id, req.body, { new: true });
    
            if (!updatedService) {
                return res.status(404).json({ error: "Service not found" });
            }
    
            const savedOne = await updatedService.save();
    
            return res.status(200).json({
                status: 'success',
                updatedService: savedOne
            });
        } catch (error) {
            console.log(error.message);
            return res.status(500).json({ error: error.message });
        }
    }
    
}

export default serviceController;
