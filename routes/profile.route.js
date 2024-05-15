import express from 'express';
import profileController from '../controllers/profile.controller.js';

const router = express.Router();

router.post('/createProfile', profileController.create);
router.put('/update/:id', profileController.update);
router.delete('/delete/:id', profileController.delete);

export default router;