const express = require("express");
const router = express.Router();
const Joi = require("joi");

const validateRequest = require("../middleware/validateRequest");
const authorize = require("../middleware/authMiddleware");
const otherDataService = require("../service/otherDataService");

// routes

router.post("/setBookmark",authorize(),bookmarkSchema,  bookmarks);
router.post("/allBookmarks",authorize(), _bookmarks);
router.put('/bookmark/:id',authorize(), _update);

router.get("/allLegalterms",authorize(), legaltermSchema, _legalterms);
router.post("/legalterm",authorize(), _legalterm);
router.post("/casebyLegalterm",authorize(), _casebylegalterm);

router.get("/allArticles",authorize(), legaltermSchema, _articles);
router.post("/article",authorize(), _article);
router.post("/searchArticle",authorize(), _searchArticle);

router.get("/allDictionary",authorize(),dictionarySchema, _dictionaries);
router.post("/dictionary",authorize(), _dictionary);

router.get("/allTopics",authorize(),topicSchema, _topics);
router.post("/topicStatutes",authorize(), _topicStatute);


module.exports = router;

function bookmarkSchema(req, res, next) {
    const schema = Joi.object({
      User_id:Joi.string().required(),
      Citation_ids:Joi.array(),
    });
    validateRequest(req, next, schema);
  }

function bookmarks(req, res, next) {
  otherDataService
    .setBookmark(req.body)
    .then((user) => res.json(user))
    .catch(next);
}


function _bookmarks(req, res, next) {
  otherDataService
    .getBookmarks(req.body.id)
    .then((user) => res.json(user))
    .catch(next);
}

function _update(req, res, next) {
  otherDataService.updateBookmark(req.body,req.params.id)
  .then((response) => res.json(response))
      .catch(next);
}



function dictionarySchema(req, res, next) {
  const schema = Joi.object({
      Words:Joi.string().empty(""),
      Meaning:Joi.string().empty(""),
  });
  validateRequest(req, next, schema);
}

function _dictionaries(req, res, next) {
otherDataService
  .getDictionaries(req.body)
  .then((user) => res.json(user))
  .catch(next);
}

function _dictionary(req, res, next) {
  otherDataService
    .getDictionary(req.body.letter)
    .then((user) => res.json(user))
    .catch(next);
  }

  function legaltermSchema(req, res, next) {
    const schema = Joi.object({
      Legal_Terms:Joi.string().empty(""),
    });
    validateRequest(req, next, schema);
  }
  
  function _legalterms(req, res, next) {
    otherDataService
      .getLegalterms(req.body)
      .then((user) => res.json(user))
      .catch(next);
    }

    function _legalterm(req, res, next) {
      otherDataService
        .getLegalterm(req.body.letter)
        .then((user) => res.json(user))
        .catch(next);
      }
      
      function _casebylegalterm(req, res, next) {
        otherDataService
          .getCaseByLegalterm(req.body.ref)
          .then((user) => res.json(user))
          .catch(next);
        }
        function _articles(req, res, next) {
          otherDataService
            .getArticles(req.body)
            .then((user) => res.json(user))
            .catch(next);
          }
      
          function _article(req, res, next) {
            otherDataService
              .getArticle(req.body.letter)
              .then((user) => res.json(user))
              .catch(next);
            }
            
            function _searchArticle(req, res, next) {
              otherDataService
                .getSearchArticle(req.body.ref)
                .then((user) => res.json(user))
                .catch(next);
              }

              function topicSchema(req, res, next) {
                const schema = Joi.object({
                    Topics:Joi.string().empty(""),
                    Statute:Joi.string().empty(""),
                });
                validateRequest(req, next, schema);
              }
              
              function _topics(req, res, next) {
              otherDataService
                .getTopics(req.body)
                .then((user) => res.json(user))
                .catch(next);
              }

              function _topicStatute(req, res, next) {
                otherDataService
                  .getTopicStatute(req.body.ref)
                  .then((user) => res.json(user))
                  .catch(next);
                }
