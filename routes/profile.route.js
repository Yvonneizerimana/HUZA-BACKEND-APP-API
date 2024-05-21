import express from 'express';
import profileController from '../controllers/profile.controller.js';
// import authCheck from "../utils/authCheck.js"

const router = express.Router();

router.post('/createProfile',profileController.create);
router.put('/update/:id', profileController.update);
router.delete('/delete/:id', profileController.delete);
router.get('/viewProfileById',profileController.viewProfileById),
router.get('/viewProfileByCategory',profileController.viewProfileByCategory)
router.get('/approveProfile', profileController.verifyProfileByid)
router.get('/reject', profileController.denyProfileByEmail)
router.get("/allProfile", profileController.allProfile)

export default router;