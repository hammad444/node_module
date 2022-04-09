const express = require("express");
const router = express.Router();
const Joi = require("joi");
const multer = require("multer");

const validateRequest = require("../middleware/validateRequest");
const authorize = require("../middleware/authMiddleware");
const dairyService = require("../service/dairyService");

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

var type = upload.single('case_files');


// routes

router.post("/allClientsCases",authorize(), getAllClientsCases);
router.post("/allClients",authorize(), getAllClients);
router.post("/client",authorize(),  _getClient);
router.post("/clients",authorize(), clientSchema, _clients);
router.put("/clients/:id",authorize(), clientsSchema, _clientupdate);

router.post("/allCases", authorize(), getAllCases);
router.post("/case",authorize(), _getCase);
router.post("/cases",authorize() ,type, caseSchema, _cases);
router.put("/cases/:id",authorize(), casesSchema, _caseupdate);

router.post("/allCasesFiles",authorize(), getAllCasesFiles);
router.post("/allCasesNotes",authorize(), getAllCasesNotes);
router.post("/allCasesDesc",authorize(), getAllCasesDesc);


module.exports = router;

function clientSchema(req, res, next) {
  const schema = Joi.object({
    user_id: Joi.string().required(),
    client_id: Joi.string().required(),
    client_name: Joi.string().required(),
    client_contact: Joi.string().required(),
    client_address: Joi.string().required(),
    client_city: Joi.string().required(),
    client_from: Joi.date().required(),
  });
  validateRequest(req, next, schema);
}

function clientsSchema(req, res, next) {
  const schema = Joi.object({
    user_id: Joi.string().empty(""),
    client_id: Joi.string().empty(""),
    client_name: Joi.string().empty(""),
    client_contact: Joi.string().empty(""),
    client_address: Joi.string().empty(""),
    client_city: Joi.string().empty(""),
    client_from: Joi.date().empty(""),
  });
  validateRequest(req, next, schema);
}

function getAllClients(req, res, next) {
  dairyService
    .getClients(req.body.id)
    .then((response) => res.json(response))
    .catch(next);
}

function _getClient(req, res, next) {
  dairyService
    .getClient(req.body.ids)
    .then((response) => res.json(response))
    .catch(next);
}

function _clients(req, res, next) {
  dairyService
    .create(req.body)
    .then((user) => res.json(user))
    .catch(next);
}

function _clientupdate(req, res, next) {
  dairyService
    .updateClient(req.body, req.params.id)
    .then((response) => res.json(response))
    .catch(next);
}

function caseSchema(req, res, next) {
  const schema = Joi.object({
    user_id: Joi.string().required(),
    client_id: Joi.string().required(),
    case_number: Joi.string().required(),
    case_title: Joi.string().required(),
    case_date: Joi.string().required(),
    hearing_date: Joi.string().required(),
    hearing_time: Joi.string().required(),
    case_court: Joi.string().required(),
    case_city: Joi.string().required(),
    case_desc: Joi.string().required(),
    case_notes: Joi.string().required(),
    case_files: Joi.string(),
    case_close: Joi.string(),
  });
  validateRequest(req, next, schema);
}

function casesSchema(req, res, next) {
  const schema = Joi.object({
    user_id: Joi.string().empty(""),
    client_id: Joi.string().empty(""),
    case_number: Joi.string().empty(""),
    case_title: Joi.string().empty(""),
    case_date: Joi.string().empty(""),
    hearing_date: Joi.string().empty(""),
    hearing_time: Joi.string().empty(""),
    case_court: Joi.string().empty(""),
    case_city: Joi.string().empty(""),
    case_desc: Joi.string().empty(""),
    case_notes: Joi.string().empty(""),
    case_files: Joi.string().empty(""),
    case_close: Joi.string().empty(""),
  });
  validateRequest(req, next, schema);
}
function getAllCases(req, res, next) {
  dairyService
    .getCases(req.body.ids)
    .then((response) => res.json(response))
    .catch(next);
}

function _getCase(req, res, next) {
  dairyService
    .getCase(req.body.ids)
    .then((response) => res.json(response))
    .catch(next);
}

function _cases(req, res, next) {
  if (!req.file) {
    var case_files = req.case_files;
  } else {
    var case_files =
      req.protocol + "://" + req.get("host") + "/" + req.file.filename;
  }
  const {
    user_id,
    client_id,
    case_number,
    case_title,
    case_date,
    hearing_date,
    hearing_time,
    case_court,
    case_city,
    case_desc,
    case_notes,
    case_close,
  } = req.body;
  dairyService
    .createCase({
        user_id,
        client_id,
        case_number,
        case_title,
        case_date,
        hearing_date,
        hearing_time,
        case_court,
        case_city,
        case_desc,
        case_notes,
        case_files,
        case_close,
      })
    .then((user) => res.json(user))
    .catch(next);
}

function _caseupdate(req, res, next) {
  dairyService
    .updateCase(req.body, req.params.id)
    .then((response) => res.json(response))
    .catch(next);
}

function getAllClientsCases(req, res, next) {
  dairyService
    .getClientsCases(req.body.id)
    .then((response) => res.json(response))
    .catch(next);
}


function getAllCasesFiles(req, res, next) {
  dairyService
    .getClientsCasesFiles(req.body.ids)
    .then((response) => res.json(response))
    .catch(next);
}
function getAllCasesNotes(req, res, next) {
  dairyService
    .getClientsCasesNotes(req.body.ids)
    .then((response) => res.json(response))
    .catch(next);
}
function getAllCasesDesc(req, res, next) {
  dairyService
    .getClientsCasesDesc(req.body.ids)
    .then((response) => res.json(response))
    .catch(next);
}