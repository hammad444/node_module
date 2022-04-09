const express = require("express");
const router = express.Router();
const multer = require("multer");
const Joi = require("joi");

const validateRequest = require("../middleware/validateRequest");
const authorize = require('../middleware/authMiddleware')


const fs = require("fs");
const csv = require("fast-csv");
const db = require("../config/UserDb");

// -----------upload files multer--------------
var upload = multer({ dest: "./server/uploads" });

var storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "./server/uploads");
  },
  filename: function (req, file, cb) {
    const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1e9);
    cb(null, uniqueSuffix + "_" + file.originalname.replace(/\s/g, ""));
  },
});
var upload = multer({ storage: storage });

var type = upload.single("file");

// routes
router.post("/statutes",authorize(), type, uploadStatuteData);
router.post("/cases",authorize(), type, uploadCaseData);
router.post("/legalterms",authorize(), type, uploadLegaltermData);
router.post("/articles",authorize(), type, uploadArticleData);
router.post("/topics",authorize(), type, uploadTopicData);
router.post("/dictionary",authorize(), type, uploadDictionaryData);


module.exports = router;

// upload statute csv to database
async function uploadStatuteData(req, res, next) {
  var path = req.file?.path;
  let csvData = [];
  let csvStream = csv
    .parse({ headers: true })
    .on("error", (error) => {
      throw error.message;
    })
    .on("data", (row) => {
      csvData.push(row);
    })
    .on("end", () => {
      csvData.shift();
      // console.log(csvData,"csv")
      for (var i = 0; i <= csvData.length - 1; i++) {
        db.Ordinance.create({
           Ordinance_Name: csvData[i].Ordinance_Name 
          });
        db.Statute.create({
          Statute_Name: csvData[i].Statute_Name,
          Section_Name: csvData[i].Section_Name,
          Ordinance_Name: csvData[i].Ordinance_Name,
          Definition: csvData[i].Definition,
          Case_Ref: csvData[i].Case_Ref,
          Statute_id: csvData[i].Statute_id,
        });
        db.StatuteRead.create({
          Read_Statute: csvData[i].Read_Statute,
          Statute_id: csvData[i].Statute_id,
        })
      }
      fs.unlinkSync(path);
    });
  await fs.createReadStream(path).pipe(csvStream);
  res.json("Statutes Data Added Successfully")
}

// upload case csv to database
async function uploadCaseData(req, res, next) {
  var path = req.file?.path;
  let csvData = [];
  let csvStream = csv
    .parse({ headers: true })
    .on("error", (error) => {
      throw error.message;
    })
    .on("data", (row) => {
      csvData.push(row);
    })
    .on("end", () => {
      csvData.shift();
      // console.log(csvData,"csv")
      for (var i = 0; i <= csvData.length - 1; i++) {
        db.Citation.create({
          Year: csvData[i].Year,
          Journal_Ref:csvData[i].Journal_Ref,
          Journal_Name: csvData[i].Journal_Name,
          Parties: csvData[i].Parties,
          Judge: csvData[i].Judge,
          Lawyer: csvData[i].Lawyer,
          Citation_Court: csvData[i].Citation_Court,
          Citation_id: csvData[i].Citation_id,
        });
        db.Case.create({
          Year: csvData[i].Year,
          Journal_Name: csvData[i].Journal_Name,
          Parties: csvData[i].Parties,
          Law_Ref: csvData[i].Law_Ref,
          Case_Ref: csvData[i].Case_Ref,
          Head_Notes: csvData[i].Head_Notes,
          Citation_Court: csvData[i].Citation_Court,
          Citation_id: csvData[i].Citation_id,
        });
        db.CaseDes.create({
          Case_Desc: csvData[i].Case_Desc,
          Citation_id: csvData[i].Citation_id,
        })
      }
      fs.unlinkSync(path);
    });

  await fs.createReadStream(path).pipe(csvStream);
  res.json("Cases Data Added Successfully")
}

// upload legalterms csv to database
async function uploadLegaltermData(req, res, next) {
  var path = req.file?.path;
  let csvData = [];
  let csvStream = csv
    .parse({ headers: true })
    .on("error", (error) => {
      throw error.message;
    })
    .on("data", (row) => {
      csvData.push(row);
    })
    .on("end", () => {
      csvData.shift();
      // console.log(csvData,"csv")
      for (var i = 0; i <= csvData.length - 1; i++) {
        db.LegalTerm.create({
          Legal_Terms: csvData[i].Legal_Terms,
        });
      }
      fs.unlinkSync(path);
    });

  await fs.createReadStream(path).pipe(csvStream);
  res.json("LegalTerms Data Added Successfully")
}
// upload topics csv to database
async function uploadTopicData(req, res, next) {
  var path = req.file?.path;
  let csvData = [];
  let csvStream = csv
    .parse({ headers: true })
    .on("error", (error) => {
      throw error.message;
    })
    .on("data", (row) => {
      csvData.push(row);
    })
    .on("end", () => {
      csvData.shift();
      // console.log(csvData,"csv")
      for (var i = 0; i <= csvData.length - 1; i++) {
        db.Topic.create({
          Topics:csvData[i].Topics,
          Statute:csvData[i].Statute,
        });
      }
      fs.unlinkSync(path);
    });

  await fs.createReadStream(path).pipe(csvStream);
  res.json("Topics Data Added Successfully")
}
// upload article csv to database
async function uploadArticleData(req, res, next) {
  var path = req.file?.path;
  let csvData = [];
  let csvStream = csv
    .parse({ headers: true })
    .on("error", (error) => {
      throw error.message;
    })
    .on("data", (row) => {
      csvData.push(row);
    })
    .on("end", () => {
      csvData.shift();
      // console.log(csvData,"csv")
      for (var i = 0; i <= csvData.length - 1; i++) {
        db.Article.create({
          Article_Number: csvData[i].Article_Number,
          Title: csvData[i].Title,
          Author: csvData[i].Author,
          Category: csvData[i].Category,
          Year: csvData[i].Year,
          Article_text: csvData[i].Article_text
        });
      }
      fs.unlinkSync(path);
    });

  await fs.createReadStream(path).pipe(csvStream);
  res.json("Articles Data Added Successfully")
}
// upload dictionary csv to database
async function uploadDictionaryData(req, res, next) {
  var path = req.file?.path;
  let csvData = [];
  let csvStream = csv
    .parse({ headers: true })
    .on("error", (error) => {
      throw error.message;
    })
    .on("data", (row) => {
      csvData.push(row);
    })
    .on("end", () => {
      csvData.shift();
      // console.log(csvData,"csv")
      for (var i = 0; i <= csvData.length - 1; i++) {
        db.Dictionary.create({
          Words: csvData[i].Words,
          Meaning: csvData[i].Meaning,
        });
      }
      fs.unlinkSync(path);
    });

  await fs.createReadStream(path).pipe(csvStream);
  res.json("Dictionary Data Added Successfully")
}