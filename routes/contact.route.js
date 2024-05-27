import contactController from "../controllers/contact.controller.js";
// import authCheck from '../utils/authCheck.js';
import express from 'express';
const routerContact = express.Router();

routerContact.post('/createContact', contactController.create);
routerContact.post('/createContact', contactController.create);
routerContact.get('/listContact',contactController.listContact);
routerContact.get('/listContactByEmail',contactController.listContactByEmail);
routerContact.get('/createContactByPhone',contactController.listContactByPhoneNumber);
routerContact.get('/cdeleteContactById',contactController.deleteContactById);

export default routerContact;