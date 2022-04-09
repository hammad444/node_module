const express = require("express");
const router = express.Router();
const Joi = require("joi");

const validateRequest = require("../middleware/validateRequest");
const authorize = require("../middleware/authMiddleware");
const dataService = require("../service/dataService");

// routes

router.post("/case",authorize(), _case);
router.post("/cases",authorize(), _cases);
router.post("/caseDesc",authorize(), _caseDesc);
router.post("/refCases",authorize(), _refCases);

router.get("/citationids",authorize(), _citationIds);
router.get("/journal",authorize(), _journal);
router.post("/citation",authorize(), _citation);
router.post("/citations",authorize(), _citations);

router.post("/ordinance",authorize(), _ordinance);
router.post("/statute",authorize(), _statute);
router.post("/statutes",authorize(), _statutes);
router.post("/statuteRead",authorize(), _statuteRead);
router.post("/refStatutes",authorize(), _refStatutes);

module.exports = router;


function _case(req, res, next) {
  dataService
    .getCase(req.body.ref)
    .then((user) => res.json(user))
    .catch(next);
}
function _cases(req, res, next) {
  dataService
    .getCases(req.body.ref)
    .then((user) => res.json(user))
    .catch(next);
}
function _caseDesc(req, res, next) {
  dataService
    .getCaseDesc(req.body.ref)
    .then((user) => res.json(user))
    .catch(next);
}
function _refCases(req, res, next) {
  dataService
    .getRefCase(req.body.ref)
    .then((user) => res.json(user))
    .catch(next);
}

function _citation(req, res, next) {
  dataService
    .getCitation(req.body.ref)
    .then((user) => res.json(user))
    .catch(next);
}
function _citations(req, res, next) {
  dataService
    .getCitations(req.body.ref)
    .then((user) => res.json(user))
    .catch(next);
}


function _ordinance(req, res, next) {
  dataService
    .getOrdinance(req.body.letter)
    .then((user) => res.json(user))
    .catch(next);
}
function _statute(req, res, next) {
    dataService
      .getStatute(req.body.ref)
      .then((user) => res.json(user))
      .catch(next);
  }
  function _statutes(req, res, next) {
    dataService
      .getStatutes(req.body.ref)
      .then((user) => res.json(user))
      .catch(next);
  }
  function _statuteRead(req, res, next) {
    dataService
      .getStatuteRead(req.body.ref)
      .then((user) => res.json(user))
      .catch(next);
  }
  function _refStatutes(req, res, next) {
    dataService
      .getRefLaw(req.body.ref)
      .then((user) => res.json(user))
      .catch(next);
  }

  function _journal(req, res, next) {
    dataService
      .getJournal()
      .then((user) => res.json(user))
      .catch(next);
  }

  function _citationIds(req, res, next) {
    dataService
      .getCaseIds()
      .then((user) => res.json(user))
      .catch(next);
  }  