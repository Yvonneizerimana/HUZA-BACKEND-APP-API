import express from 'express';
import profileController from '../controllers/profile.controller.js';
import authCheck from "../utils/authCheck.js"

const router = express.Router();

router.post('/createProfile', authCheck.skilled,profileController.create);
router.put('/update/:id', authCheck.skilled, profileController.update);
router.delete('/delete/:id', authCheck.skilled, profileController.delete);

export default router;