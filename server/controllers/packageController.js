const express = require("express");
const router = express.Router();
const Joi = require("joi");

const validateRequest = require("../middleware/validateRequest");
const authorize = require("../middleware/authMiddleware");
const packageService = require("../service/packageService");

// routes
router.post("/setpackage",authorize(), packageSchema, packages);
router.get("/allPackages",authorize(), packagesSchema, _packages);
router.post("/package",authorize(), packagesSchema, _package);
router.delete("/:id",authorize(), _delete);
router.put("/:id",authorize(), packagesSchema, _update);

module.exports = router;

function packageSchema(req, res, next) {
  const schema = Joi.object({
    package: Joi.string().required(),
    duration: Joi.string().required(),
    fee: Joi.number().required(),
    registration: Joi.number().required(),
    total: Joi.number().required(),
  });
  validateRequest(req, next, schema);
}

function packages(req, res, next) {
  packageService
    .setPackage(req.body)
    .then((response) => res.json(response))
    .catch(next);
}

function packagesSchema(req, res, next) {
  const schema = Joi.object({
    package: Joi.string().empty(""),
    duration: Joi.string().empty(""),
    fee: Joi.number().empty(""),
    registration: Joi.number().empty(""),
    total: Joi.number().empty(""),
  });
  validateRequest(req, next, schema);
}

function _package(req, res, next) {
  packageService
    .getPackage(req.body.package)
    .then((user) => res.json(user))
    .catch(next);
}

function _packages(req, res, next) {
  packageService
    .getPackages(req.params.id)
    .then((user) => res.json(user))
    .catch(next);
}
function _delete(req, res, next) {
  packageService
    .deletePackage(req.params.id)
    .then((response) => res.json(response))
    .catch(next);
}

function _update(req, res, next) {
  packageService
    .updatePackage(req.body, req.params.id)
    .then((response) => res.json(response))
    .catch(next);
}
