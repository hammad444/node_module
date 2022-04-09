const express = require("express");
const router = express.Router();
const Joi = require("joi");

const validateRequest = require("../middleware/validateRequest");
const authorize = require("../middleware/authMiddleware");
const searchService = require("../service/searchService");

// routes
router.post("/searchCase",authorize(), _searchCase);
router.post("/searchIndex",authorize(), _searchIndex);
router.post("/searchCitation",authorize(), _searchCitation);
router.post("/searchCourt",authorize(), _searchCourt);
router.post("/searchAdvance",authorize(), _searchAdvance);

module.exports = router;

function _searchCase(req, res, next) {
  searchService
    .searchCase(req.body.ref)
    .then((user) => res.json(user))
    .catch(next);
}

function _searchIndex(req, res, next) {
  searchService
    .searchIndex(req.body.ref)
    .then((user) => res.json(user))
    .catch(next);
}

function _searchCitation(req, res, next) {
    searchService
      .searchCitation(req.body.ref)
      .then((user) => res.json(user))
      .catch(next);
  }
  function _searchCourt(req, res, next) {
    searchService
      .searchCourt(req.body.ref)
      .then((user) => res.json(user))
      .catch(next);
  }
  function _searchAdvance(req, res, next) {
    searchService
      .searchAdvance(req.body.ref)
      .then((user) => res.json(user))
      .catch(next);
  }