

const express = require('express');
const router = express.Router();
const Joi = require('joi');
const multer= require('multer');

const validateRequest = require('../middleware/validateRequest');
const authorize = require('../middleware/authMiddleware')
const userService = require('../service/userService');


// -----------upload files multer--------------
var upload = multer({ dest: "./server/uploads" });
var storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "./server/uploads");
  },
  filename: function (req, file, cb) {
    const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1e9);
    cb(null, uniqueSuffix + "_" + file.originalname.replace(/\s/g, ''));
  },
});
var upload = multer({ storage: storage });

var type = upload.single('file');
// -----------upload files multer--------------

// routes
router.post('/authenticate', authenticateSchema, authenticate);
router.post('/register', registerSchema, register);

router.put('/picture/:id',authorize(), type, savePicture);
router.put('/password/:id',authorize(),  _password);

router.get('/allUsers',authorize(), usersSchema, _users);
router.get('/user/:id',authorize(), usersSchema, _user);
router.post('/search',authorize(), _search);
router.delete('/:id',authorize(), _delete);
router.put('/:id',authorize(), usersSchema, _update);

router.get('/exportcsv',authorize(), _download);
router.post('/payaccount',authorize(),payAccountSchema, _payaccount);
router.get('/allPayAccounts',authorize(),payAccountsSchema, _allPayAccounts);

module.exports = router;

const getmac = require('getmac')

const callMac = () =>{
    return getmac.default()
}
const macAddress=callMac()

function authenticateSchema(req, res, next) {
    req.body.macAddress={macAddress:macAddress}
    const schema = Joi.object({
        email: Joi.string().required(),
        password: Joi.string().required(),
        macAddress:Joi.object(),
    });
    validateRequest(req, next, schema);
    
}

function authenticate(req, res, next) {
    userService.authenticate(req.body)
        .then(user => res.json(user))
        .catch(next);
}

function registerSchema(req, res, next) {
    const schema = Joi.object({
        id:Joi.string(),
        picture:Joi.string(),
        isAdmin:Joi.boolean(),
        criteria:Joi.string().required(),
        firstName: Joi.string().required(),
        lastName: Joi.string().required(),
        email: Joi.string().required(),
        contact:Joi.string().required(),
        address:Joi.string().required(),
        city:Joi.string().required(),
        speciality:Joi.string().required(),
        newsLatter:Joi.boolean(),
        terms:Joi.boolean().required(),
        macAddress:Joi.object(),
        university:Joi.string(),
        intake:Joi.string(),
        password: Joi.string().min(6).required()
    });
    validateRequest(req, next, schema)
}

function register(req, res, next) {
    req.body.macAddress={macAddress1:macAddress}
    userService.create(req.body)
    .then((response) => res.json(response))
        .catch(next);
}

function usersSchema(req, res, next) {
    const schema = Joi.object({
        picture:Joi.string().empty(""),
        isAdmin:Joi.boolean().empty(""),
        criteria:Joi.string().empty(""),
        firstName: Joi.string().empty(""),
        lastName: Joi.string().empty(""),
        email: Joi.string().empty(""),
        contact:Joi.string().empty(""),
        address:Joi.string().empty(""),
        city:Joi.string().empty(""),
        speciality:Joi.string().empty(""),
        newsLatter:Joi.boolean().empty(""),
        terms:Joi.boolean().empty(""),
        macAddress:Joi.object().empty(""),
        university:Joi.string().empty(""),
        intake:Joi.string().empty(""),
        password: Joi.string().min(6).empty("")
    });
    validateRequest(req, next, schema)
}


function _users(req, res, next) {
    userService.getUsers(req.body)
        .then(user => res.json(user))
        .catch(next);
}

function _user(req, res, next) {
    userService.getUser(req.params.id)
        .then(user => res.json(user))
        .catch(next);
}

function _search(req, res, next) {
    userService.searchUser(req.body)
        .then(user => res.json(user))
        .catch(next);
}

function _delete(req, res, next) {
    userService.deleteUser(req.params.id)
    .then((response) => res.json(response))
        .catch(next);
}

function _update(req, res, next) {
    userService.updateUser( req.body, req.params.id)
    .then((response) => res.json(response))
        .catch(next);
}

function _password(req, res, next) {
    userService.updatePassword( req.body, req.params.id)
    .then((response) => res.json(response))
        .catch(next);
}


function savePicture(req, res, next) {
    const picture=req.protocol + '://' + req.get('host') + '/' + req.file.filename
    userService.picture(picture,req.params.id)
    .then((response) => res.json(response))
        .catch(next);
}

function _download(req, res, next) {
    userService.downloadUsers( req.body, req.params.id)
    .then((response) => 
    res.json(response),
    res.setHeader("Content-Type", "text/csv"),
    )
        .catch(next);
}


function payAccountSchema(req, res, next) {
    const schema = Joi.object({
        user_name: Joi.string().required(),
        account_name: Joi.string().required(),
        account_number:Joi.string().required(),
        account_type:Joi.string().required(),
    });
    validateRequest(req, next, schema);
    
}

function _payaccount(req, res, next) {
    userService.paymentAccount( req.body)
    .then((response) => 
    res.json(response)
    ).catch(next);
}

function payAccountsSchema(req, res, next) {
    const schema = Joi.object({
        user_name: Joi.string().empty(""),
        account_name: Joi.string().empty(""),
        account_number:Joi.string().empty(""),
        account_type:Joi.string().empty(""),
    });
    validateRequest(req, next, schema);
    
}

function _allPayAccounts(req, res, next) {
    userService.allPayAccounts()
    .then((response) => 
    res.json(response)
    ).catch(next);
}
