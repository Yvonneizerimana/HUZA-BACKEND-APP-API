import express from 'express';
import profileController from '../controllers/profile.controller.js';
const router = express.Router();
import multer from 'multer';


const upload = multer({dest:'upload/'})

router.post('/createProfile',upload.fields([{name:'resume',maxCount:1},{name:'nationalID',maxCount:1},{name:'certificate',maxCount:1},{name:'photo',maxCount:1}]),profileController.create);
router.put('/update/:id', profileController.update);
router.delete('/delete/:id', profileController.delete);
router.get('/viewProfileById',profileController.viewProfileById),
router.get('/viewProfileByCategory',profileController.viewProfileByCategory)
router.get('/approveProfile', profileController.verifyProfileByid)
router.get('/reject', profileController.denyProfileByEmail)
router.get("/allProfile", profileController.allProfile)

export default router;