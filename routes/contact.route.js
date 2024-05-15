import contactController from "../controllers/contact.controller.js";
import authCheck from '../utils/authCheck.js';
import express from 'express';
const routerContact = express.Router();

routerContact.post('/createContact', contactController.create);
routerContact.post('/createContact', contactController.create);
routerContact.get('/listContact', authCheck.admin,contactController.listContact);
routerContact.get('/listContactByEmail', authCheck.admin,contactController.listContactByEmail);
routerContact.get('/createContactByPhone',authCheck.admin, contactController.listContactByPhoneNumber);
routerContact.get('/cdeleteContactById',authCheck.admin, contactController.deleteContactById);

export default routerContact;