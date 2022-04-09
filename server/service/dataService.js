const db = require("../config/UserDb");
const Sequelize = require("sequelize");
const Op = Sequelize.Op;

module.exports = {
  getJournal,
  getCaseIds,
  getCase,
  getCases,
  getCaseDesc,
  getRefCase,
  getCitation,
  getCitations,
  getOrdinance,
  getStatute,
  getStatutes,
  getStatuteRead,
  getRefLaw,
};
// ---------------------get-journal-names-----------------------
async function getJournal(ref) {
  const journal = await db.Citation.findAll().then((jrnl) => {
     return jrnl.map((obj) => {
      return {value:obj.Journal_Name,label:obj.Journal_Name}
    });
  })

  const arrayUniqueByKey = [...new Map(journal.map(item =>
    [item["Journal_Name"], item])).values()];

    return arrayUniqueByKey
}
// ---------------------get-case-ids-----------------------
async function getCaseIds() {
  const ids = await db.Citation.findAll().then((cit) => {
     return cit.map((ids) => {
      return ids.Citation_id
    });
  })
return ids;
  // const arrayUniqueByKey = [...new Map(ids.map(item =>
  //   [item["Journal_Name"], item])).values()];

  //   return arrayUniqueByKey
}
// ---------------------get-case-----------------------
async function getCase(ref) {
  const cas = await db.Case.findOne({ where: ref });
  return cas;
}
// ---------------------get cases by refrences-----------------------
async function getCases(ref) {
  const cas = await db.Case.findAll({
    where: { Citation_id: { [Op.in]: [ref] } },
  });
  return cas;
}
// ---------------------get case description-----------------------
async function getCaseDesc(ref) {
  const casDes = await db.CaseDes.findOne({ where: ref });
  return casDes;
}
// ---------------------get-case-by-One-Ref-----------------------
async function getRefCase(ref) {

    const cas = await db.Case.findAll({
      where: { Case_Ref : { [Op.like]: `%${ref}%`  }},
          })
          return cas;

}
// -----------------------get-citation-----------------------------------
async function getCitation(ref) {
  const citation = await db.Case.findAll({ where: ref });
  return citation;
}
// ---------------------get citation by refrences-----------------------
async function getCitations(ref) {
  const cas = await db.Citation.findAll({
    where: { Citation_id: { [Op.in]: [ref] } },
  });
  return cas;
}

// ---------------------get-ordinance-----------------------
async function getOrdinance(name) {
  const ordinance = await db.Ordinance.findAll({
    where: { Ordinance_Name: { [Op.like]: `${name}%` } },
  });
  const arrayUniqueByKey = [...new Map(ordinance.map(item =>
    [item["Ordinance_Name"], item])).values()];

    return arrayUniqueByKey
}
// ---------------------get-statute-----------------------
async function getStatute(ref) {
  const statute = await db.Statute.findAll({ where: ref });
  return statute;
}
// ---------------------get statute by refrences-----------------------
async function getStatutes(ref) {
  const statute = await db.Statute.findAll({ where: ref });
  return statute;
}
// ---------------------get statute raed-----------------------
async function getStatuteRead(ref) {
  const statuteRead = await db.StatuteRead.findOne({ where: ref });
  return statuteRead;
}
// ---------------------get-law-by-One-Ref-----------------------
async function getRefLaw(ref) {
  const cas = await db.Case.findAll({
     where: {
    Law_Ref: { [Op.like]: `%${ref}%`  }
  } 
});
  return cas;
}
