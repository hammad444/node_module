

const express = require('express');
const router = express.Router();
const Joi = require('joi');
const multer= require('multer');

const validateRequest = require('../middleware/validateRequest');
const authorize = require('../middleware/authMiddleware')
const paymentService = require('../service/paymentService');


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

    var type = upload.single('receipt');

// routes

router.post('/pay',authorize(), type, paymentSchema, payments);
router.get('/allPayments',authorize(), paymentsSchema, _payments);
router.post('/payment',authorize(), paymentsSchema, _payment);
router.post('/search',authorize(), _search);
router.delete('/:id',authorize(), _delete);
router.put('/:id',authorize(), paymentsSchema, _update);

module.exports = router;

function paymentSchema(req, res, next) {
    const schema = Joi.object({
        id:Joi.string(),
        email:Joi.string(),
        package:Joi.string().required(),
        receipt:Joi.string(),
        isPaid:Joi.string(),
        expireAt:Joi.date(),

    });
    validateRequest(req, next, schema);
    
}
function payments(req, res, next) {
  if(!req.file){
    var receipt=req.receipt
  }else{
   var receipt=req.protocol + '://' + req.get('host') + '/' + req.file.filename
  }
    const {id,email,package,isPaid}=req.body
    paymentService.setPayment({id,email,package,receipt,isPaid})
    .then((response) => res.json(response))
        .catch(next);
}

function paymentsSchema(req, res, next) {
    const schema = Joi.object({
        id:Joi.string().empty(''),
        email:Joi.string().empty(''),
        package:Joi.string().empty(''),
        receipt:Joi.string().empty(''),
        isPaid:Joi.string().empty(''),
        expireAt:Joi.date().empty(''),
    });
    validateRequest(req, next, schema);
    
}

function _payments(req, res, next) {
    paymentService.getPayments(req.body)
        .then(user => res.json(user))
        .catch(next);
}

function _search(req, res, next) {
    paymentService.searchPayment(req.body)
        .then(response => res.json(response))
        .catch(next);
  }

function _payment(req, res, next) {
  paymentService.getPayment(req.body.id)
      .then(response => res.json(response))
      .catch(next);
}

function _delete(req, res, next) {
  paymentService.deletePayment(req.params.id)
  .then((response) => res.json(response))
      .catch(next);
}

function _update(req, res, next) {
  paymentService.updatePayment( req.body,req.params.id)
  .then((response) => res.json(response))
      .catch(next);
}