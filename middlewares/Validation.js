import { body } from 'express-validator';

const adminValidation = [
    body('firstName', 'First name is required').not().isEmpty(),
    body('lastName', 'Last name is required and must be in uppercase').not().isEmpty(),
    body('email', 'Email is required').isEmail(),
    body('phoneNumber', 'Phone number is required').not().isEmpty().matches(/^\d+$/).withMessage('Phone number should contain only digits').isLength({ max: 13, min: 10 }).isMobilePhone(),
    body('role', 'Role is required').not().isEmpty(),
    body('password', 'Password is required and should have at least 8 characters, including at least one uppercase letter, one lowercase letter, one digit, and one special character').not().isEmpty().isLength({ min: 8, max: 20 }).matches(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9]).{8,}$/)
];
const otpValidation = [
    body("otp", "Otp must be provided").not().isEmpty(),
];
const skilledValidation = [
    body('firstName', 'First name is required').not().isEmpty(),
    body('lastName', 'Last name is required and must be in uppercase').not().isEmpty(),
    body('email', 'Email is required').isEmail(),

]


export default{
    adminValidation,
    otpValidation,
    skilledValidation




    
}

