const db = require("../config/UserDb");
const Sequelize = require("sequelize");
const Op = Sequelize.Op;

module.exports = {
  searchCase,
  searchIndex,
  searchCitation,
  searchCourt,
  searchAdvance,
};
// ---------------------search-case-----------------------
async function searchCase(ref) {
  //  keyword & fromto
  if (
    ref.keyword !== "" &&
    ref.court == "" &&
    ref.from !== "" &&
    ref.to !== ""
  ) {
    const cas = await db.Case.findAll({
      where: {
        [Op.and]: [
          { Head_Notes: { [Op.like]: `%${ref.keyword}%` } },
          { Year: { [Op.between]: [ref.from, ref.to] } },
        ],
      },
    });
    return cas;
  }
  // court & keyword & fromto
  if (
    ref.keyword !== "" &&
    ref.court !== "" &&
    ref.from !== "" &&
    ref.to !== ""
  ) {
    const cas = await db.Case.findAll({
      where: {
        [Op.and]: [
          { Head_Notes: { [Op.like]: `%${ref.keyword}%` } },
          { Citation_Court: ref.court },
          { Year: { [Op.between]: [ref.from, ref.to] } },
        ],
      },
    });
    return cas;
  }
}

// ---------------------search-index-----------------------
async function searchIndex(ref) {
  //  journal & year
  if (ref.journal !== "" && ref.year !== "" && ref.court == "") {
    const cas = await db.Citation.findAll({
      where: {
        [Op.and]: [{ Journal_Name: ref.journal }, { Year: ref.year }],
      },
    });
    // console.log(cas.length,"journal & year");
    return cas;
  }
  //  journal & year & court
  if (ref.journal !== "" && ref.year !== "" && ref.court !== "") {
    const cas = await db.Citation.findAll({
      where: {
        [Op.and]: [
          { Journal_Name: ref.journal },
          { Year: ref.year },
          { Citation_Court: ref.court },
        ],
      },
    });
    return cas;
  }
}

// -----------------------search-citation-----------------------------------
async function searchCitation(ref) {
  // 1-journal & year
  if (
    (ref.journal !== "",
    ref.court == "" &&
      ref.year !== "" &&
      ref.ref == "" &&
      ref.judge == "" &&
      ref.lawyer == "" &&
      ref.parties == "")
  ) {
    const cas = await db.Citation.findAll({
      where: {
        [Op.and]: [{ Journal_Name: ref.journal }, { Year: ref.year }],
      },
    });
    // console.log(cas.length,"journal & year");
    return cas;
  }
  // 2-journal & year & court
  if (
    (ref.journal !== "",
    ref.court !== "" &&
      ref.year !== "" &&
      ref.ref == "" &&
      ref.judge == "" &&
      ref.lawyer == "" &&
      ref.parties == "")
  ) {
    const cas = await db.Citation.findAll({
      where: {
        [Op.and]: [
          { Journal_Name: ref.journal },
          { Year: ref.year },
          { Citation_Court: ref.court },
        ],
      },
    });
    // console.log("journal &  year & court");
    return cas;
  }
  // 3-journal & year &  ref
  if (
    (ref.journal !== "",
    ref.court == "" &&
      ref.year !== "" &&
      ref.ref !== "" &&
      ref.judge == "" &&
      ref.lawyer == "" &&
      ref.parties == "")
  ) {
    const cas = await db.Citation.findAll({
      where: {
        [Op.and]: [
          { Journal_Name: ref.journal },
          { Year: ref.year },
          { Journal_Ref: ref.ref },
        ],
      },
    });
    // console.log("journal &  year  & ref");
    return cas;
  }
  // 4-journal & year & judge
  if (
    (ref.journal !== "",
    ref.court == "" &&
      ref.year !== "" &&
      ref.ref == "" &&
      ref.judge !== "" &&
      ref.lawyer == "" &&
      ref.parties == "")
  ) {
    const cas = await db.Citation.findAll({
      where: {
        [Op.and]: [
          { Journal_Name: ref.journal },
          { Year: ref.year },
          { Judge: ref.judge },
        ],
      },
    });
    // console.log("journal &  year & judge");
    return cas;
  }
  // 5-journal & year & lawyer
  if (
    (ref.journal !== "",
    ref.court == "" &&
      ref.year !== "" &&
      ref.ref == "" &&
      ref.judge == "" &&
      ref.lawyer !== "" &&
      ref.parties == "")
  ) {
    const cas = await db.Citation.findAll({
      where: {
        [Op.and]: [
          { Journal_Name: ref.journal },
          { Year: ref.year },
          { Lawyer: ref.lawyer },
        ],
      },
    });
    // console.log("journal &  year &  lawyer");
    return cas;
  }
  // 6-journal & year & parties
  if (
    (ref.journal !== "",
    ref.court == "" &&
      ref.year !== "" &&
      ref.ref == "" &&
      ref.judge == "" &&
      ref.lawyer == "" &&
      ref.parties !== "")
  ) {
    const cas = await db.Citation.findAll({
      where: {
        [Op.and]: [
          { Journal_Name: ref.journal },
          { Year: ref.year },
          { Parties: ref.parties },
        ],
      },
    });
    // console.log("journal &  year &  parties");
    return cas;
  }
  // 7-journal & year & court & ref
  if (
    (ref.journal !== "",
    ref.court !== "" &&
      ref.year !== "" &&
      ref.ref !== "" &&
      ref.judge == "" &&
      ref.lawyer == "" &&
      ref.parties == "")
  ) {
    const cas = await db.Citation.findAll({
      where: {
        [Op.and]: [
          { Journal_Name: ref.journal },
          { Year: ref.year },
          { Citation_Court: ref.court },
          { Journal_Ref: ref.ref },
        ],
      },
    });
    // console.log("journal &  year & court & ref");
    return cas;
  }
  // 8-journal & year & court &  judge
  if (
    (ref.journal !== "",
    ref.court !== "" &&
      ref.year !== "" &&
      ref.ref == "" &&
      ref.judge !== "" &&
      ref.lawyer == "" &&
      ref.parties == "")
  ) {
    const cas = await db.Citation.findAll({
      where: {
        [Op.and]: [
          { Journal_Name: ref.journal },
          { Year: ref.year },
          { Citation_Court: ref.court },
          { Judge: ref.judge },
        ],
      },
    });
    // console.log("journal &  year & court &  judge");
    return cas;
  }
  // 9-journal & year & ref &  judge
  if (
    (ref.journal !== "",
    ref.court == "" &&
      ref.year !== "" &&
      ref.ref !== "" &&
      ref.judge !== "" &&
      ref.lawyer == "" &&
      ref.parties == "")
  ) {
    const cas = await db.Citation.findAll({
      where: {
        [Op.and]: [
          { Journal_Name: ref.journal },
          { Year: ref.year },
          { Journal_Ref: ref.ref },
          { Judge: ref.judge },
        ],
      },
    });
    // console.log("journal & year & ref &  judge");
    return cas;
  }
  // 10-journal & year & court &  lawyer
  if (
    (ref.journal !== "",
    ref.court !== "" &&
      ref.year !== "" &&
      ref.ref == "" &&
      ref.judge == "" &&
      ref.lawyer !== "" &&
      ref.parties == "")
  ) {
    const cas = await db.Citation.findAll({
      where: {
        [Op.and]: [
          { Journal_Name: ref.journal },
          { Year: ref.year },
          { Citation_Court: ref.court },
          { Lawyer: ref.lawyer },
        ],
      },
    });
    // console.log("journal & year & court &  lawyer");
    return cas;
  }
  // 11-journal & year & ref &  lawyer
  if (
    (ref.journal !== "",
    ref.court == "" &&
      ref.year !== "" &&
      ref.ref !== "" &&
      ref.judge == "" &&
      ref.lawyer !== "" &&
      ref.parties == "")
  ) {
    const cas = await db.Citation.findAll({
      where: {
        [Op.and]: [
          { Journal_Name: ref.journal },
          { Year: ref.year },
          { Journal_Ref: ref.ref },
          { Lawyer: ref.lawyer },
        ],
      },
    });
    // console.log("journal & year & ref &  lawyer");
    return cas;
  }
  // 12-journal & year & judge &  lawyer
  if (
    (ref.journal !== "",
    ref.court == "" &&
      ref.year !== "" &&
      ref.ref == "" &&
      ref.judge !== "" &&
      ref.lawyer !== "" &&
      ref.parties == "")
  ) {
    const cas = await db.Citation.findAll({
      where: {
        [Op.and]: [
          { Journal_Name: ref.journal },
          { Year: ref.year },
          { Judge: ref.judge },
          { Lawyer: ref.lawyer },
        ],
      },
    });
    // console.log("journal & year & judge &  lawyer");
    return cas;
  }
   // 13-journal & year & court &  parties
   if (
    (ref.journal !== "",
    ref.court !== "" &&
      ref.year !== "" &&
      ref.ref == "" &&
      ref.judge == "" &&
      ref.lawyer == "" &&
      ref.parties !== "")
  ) {
    const cas = await db.Citation.findAll({
      where: {
        [Op.and]: [
          { Journal_Name: ref.journal },
          { Year: ref.year },
          { Citation_Court: ref.court },
          { Parties: ref.parties },
        ],
      },
    });
    // console.log("journal & year & court &  parties");
    return cas;
  }
   // 14-journal & year & ref &  parties
   if (
    (ref.journal !== "",
    ref.court == "" &&
      ref.year !== "" &&
      ref.ref !== "" &&
      ref.judge == "" &&
      ref.lawyer == "" &&
      ref.parties !== "")
  ) {
    const cas = await db.Citation.findAll({
      where: {
        [Op.and]: [
          { Journal_Name: ref.journal },
          { Year: ref.year },
          { Journal_Ref: ref.ref },
          { Parties: ref.parties },
        ],
      },
    });
    // console.log("journal & year & ref &  parties");
    return cas;
  }
    // 15-journal & year & judge &  parties
     if (
      (ref.journal !== "",
      ref.court == "" &&
        ref.year !== "" &&
        ref.ref == "" &&
        ref.judge !== "" &&
        ref.lawyer == "" &&
        ref.parties !== "")
    ) {
      const cas = await db.Citation.findAll({
        where: {
          [Op.and]: [
            { Journal_Name: ref.journal },
            { Year: ref.year },
            { Judge: ref.judge },
            { Parties: ref.parties },
          ],
        },
      });
      // console.log("journal & year & judge &  parties");
      return cas;
    }
         // 16-journal & year & lawyer &  parties
         if (
          (ref.journal !== "",
          ref.court == "" &&
            ref.year !== "" &&
            ref.ref == "" &&
            ref.judge == "" &&
            ref.lawyer !== "" &&
            ref.parties !== "")
        ) {
          const cas = await db.Citation.findAll({
            where: {
              [Op.and]: [
                { Journal_Name: ref.journal },
                { Year: ref.year },
                { Lawyer: ref.lawyer },
                { Parties: ref.parties },
              ],
            },
          });
          // console.log("journal & year & lawyer &  parties");
          return cas;
        }

  // 17-journal & year & court & ref & judge
  if (
    (ref.journal !== "",
    ref.court !== "" &&
      ref.year !== "" &&
      ref.ref !== "" &&
      ref.judge !== "" &&
      ref.lawyer == "" &&
      ref.parties == "")
  ) {
    const cas = await db.Citation.findAll({
      where: {
        [Op.and]: [
          { Journal_Name: ref.journal },
          { Year: ref.year },
          { Citation_Court: ref.court },
          { Journal_Ref: ref.ref },
          { Judge: ref.judge },
        ],
      },
    });
    // console.log("journal &  year & court & ref & judge");
    return cas;
  }
  // 18-journal & year & court & ref &  lawyer
  if (
    (ref.journal !== "",
    ref.court !== "" &&
      ref.year !== "" &&
      ref.ref !== "" &&
      ref.judge == "" &&
      ref.lawyer !== "" &&
      ref.parties == "")
  ) {
    const cas = await db.Citation.findAll({
      where: {
        [Op.and]: [
          { Journal_Name: ref.journal },
          { Year: ref.year },
          { Citation_Court: ref.court },
          { Journal_Ref: ref.ref },
          { Lawyer: ref.lawyer },
        ],
      },
    });
    // console.log("journal &  year & court & ref & lawyer");
    return cas;
  }
    // 19-journal  & year & court & judge & lawyer
    if (
      (ref.journal !== "",
      ref.court !== "" &&
        ref.year !== "" &&
        ref.ref == "" &&
        ref.judge !== "" &&
        ref.lawyer !== "" &&
        ref.parties == "")
    ) {
      const cas = await db.Citation.findAll({
        where: {
          [Op.and]: [
            { Journal_Name: ref.journal },
            { Year: ref.year },
            { Citation_Court: ref.court },
            { Judge: ref.judge },
            { Lawyer: ref.lawyer },
          ],
        },
      });
      // console.log("journal  & year & court & judge & lawyer");
      return cas;
    }  // 20-journal & year &  ref & judge & lawyer
    if (
      (ref.journal !== "",
      ref.court == "" &&
        ref.year !== "" &&
        ref.ref !== "" &&
        ref.judge !== "" &&
        ref.lawyer !== "" &&
        ref.parties == "")
    ) {
      const cas = await db.Citation.findAll({
        where: {
          [Op.and]: [
            { Journal_Name: ref.journal },
            { Year: ref.year },
            { Journal_Ref: ref.ref },
            { Judge: ref.judge },
            { Lawyer: ref.lawyer },
          ],
        },
      });
      // console.log("journal & year &  ref & judge & lawyer");
      return cas;
    }
  // 21-journal & year & court & ref & parties
  if (
    (ref.journal !== "",
    ref.court !== "" &&
      ref.year !== "" &&
      ref.ref !== "" &&
      ref.judge == "" &&
      ref.lawyer == "" &&
      ref.parties !== "")
  ) {
    const cas = await db.Citation.findAll({
      where: {
        [Op.and]: [
          { Journal_Name: ref.journal },
          { Year: ref.year },
          { Citation_Court: ref.court },
          { Journal_Ref: ref.ref },
          { Parties: ref.parties },
        ],
      },
    });
    // console.log("journal &  year & court & ref & parties");
    return cas;
  }
   // 22-journal & year & court & judge & parties
   if (
    (ref.journal !== "",
    ref.court !== "" &&
      ref.year !== "" &&
      ref.ref == "" &&
      ref.judge !== "" &&
      ref.lawyer == "" &&
      ref.parties !== "")
  ) {
    const cas = await db.Citation.findAll({
      where: {
        [Op.and]: [
          { Journal_Name: ref.journal },
          { Year: ref.year },
          { Citation_Court: ref.court },
          { Judge: ref.judge },
          { Parties: ref.parties },
        ],
      },
    });
    // console.log("journal & year & court & judge & parties");
    return cas;
  }
     // 23-journal & year &  ref & judge & parties
  if (
    (ref.journal !== "",
    ref.court == "" &&
      ref.year !== "" &&
      ref.ref !== "" &&
      ref.judge !== "" &&
      ref.lawyer == "" &&
      ref.parties !== "")
  ) {
    const cas = await db.Citation.findAll({
      where: {
        [Op.and]: [
          { Journal_Name: ref.journal },
          { Year: ref.year },
          { Journal_Ref: ref.ref },
          { Judge: ref.judge },
          { Parties: ref.parties },
        ],
      },
    });
    // console.log("journal & year &  ref & judge & parties");
    return cas;
  }
   // 24-journal & year & court & lawyer & parties
   if (
    (ref.journal !== "",
    ref.court !== "" &&
      ref.year !== "" &&
      ref.ref == "" &&
      ref.judge == "" &&
      ref.lawyer !== "" &&
      ref.parties !== "")
  ) {
    const cas = await db.Citation.findAll({
      where: {
        [Op.and]: [
          { Journal_Name: ref.journal },
          { Year: ref.year },
          { Citation_Court: ref.court },
          { Lawyer: ref.lawyer },
          { Parties: ref.parties },
        ],
      },
    });
    // console.log("journal & year & court & lawyer & parties");
    return cas;
  }
   // 25-journal & year &  ref & lawyer & parties
   if (
    (ref.journal !== "",
    ref.court == "" &&
      ref.year !== "" &&
      ref.ref !== "" &&
      ref.judge == "" &&
      ref.lawyer !== "" &&
      ref.parties !== "")
  ) {
    const cas = await db.Citation.findAll({
      where: {
        [Op.and]: [
          { Journal_Name: ref.journal },
          { Year: ref.year },
          { Journal_Ref: ref.ref },
          { Lawyer: ref.lawyer },
          { Parties: ref.parties },
        ],
      },
    });
    // console.log("journal & year &  ref & lawyer & parties");
    return cas;
  }
   // 26-journal & year & judge & lawyer & parties
   if (
    (ref.journal !== "",
    ref.court == "" &&
      ref.year !== "" &&
      ref.ref == "" &&
      ref.judge !== "" &&
      ref.lawyer !== "" &&
      ref.parties !== "")
  ) {
    const cas = await db.Citation.findAll({
      where: {
        [Op.and]: [
          { Journal_Name: ref.journal },
          { Year: ref.year },
          { Judge: ref.judge },
          { Lawyer: ref.lawyer },
          { Parties: ref.parties },
        ],
      },
    });
    // console.log("journal & year & judge & lawyer & parties");
    return cas;
  }
  // 27-journal & year & court & ref & judge & lawyer
  if (
    (ref.journal !== "",
    ref.court !== "" &&
      ref.year !== "" &&
      ref.ref !== "" &&
      ref.judge !== "" &&
      ref.lawyer !== "" &&
      ref.parties == "")
  ) {
    const cas = await db.Citation.findAll({
      where: {
        [Op.and]: [
          { Journal_Name: ref.journal },
          { Year: ref.year },
          { Citation_Court: ref.court },
          { Journal_Ref: ref.ref },
          { Judge: ref.judge },
          { Lawyer: ref.lawyer },
        ],
      },
    });
    // console.log("journal &  year & court & ref & judge & lawyer");
    return cas;
  }
  // 28-journal & year & court & ref & judge & parties
  if (
    (ref.journal !== "",
    ref.court !== "" &&
      ref.year !== "" &&
      ref.ref !== "" &&
      ref.judge !== "" &&
      ref.lawyer == "" &&
      ref.parties !== "")
  ) {
    const cas = await db.Citation.findAll({
      where: {
        [Op.and]: [
          { Journal_Name: ref.journal },
          { Year: ref.year },
          { Citation_Court: ref.court },
          { Journal_Ref: ref.ref },
          { Judge: ref.judge },
          { Parties: ref.parties },
        ],
      },
    });
    // console.log("journal &  year & court & ref & judge & parties");
    return cas;
  }

   // 29-journal & year & court & ref  & lawyer & parties
   if (
    (ref.journal !== "",
    ref.court !== "" &&
      ref.year !== "" &&
      ref.ref !== "" &&
      ref.judge == "" &&
      ref.lawyer !== "" &&
      ref.parties !== "")
  ) {
    const cas = await db.Citation.findAll({
      where: {
        [Op.and]: [
          { Journal_Name: ref.journal },
          { Year: ref.year },
          { Citation_Court: ref.court },
          { Journal_Ref: ref.ref },
          { Lawyer: ref.lawyer },
          { Parties: ref.parties },
        ],
      },
    });
    // console.log("journal &  year & court & ref  & lawyer & parties");
    return cas;
  }

 // 30-journal & year & court & judge & lawyer & parties
 if (
  (ref.journal !== "",
  ref.court !== "" &&
    ref.year !== "" &&
    ref.ref == "" &&
    ref.judge !== "" &&
    ref.lawyer !== "" &&
    ref.parties !== "")
) {
  const cas = await db.Citation.findAll({
    where: {
      [Op.and]: [
        { Journal_Name: ref.journal },
        { Year: ref.year },
        { Citation_Court: ref.court },
        { Judge: ref.judge },
        { Lawyer: ref.lawyer },
        { Parties: ref.parties },
      ],
    },
  });
  // console.log("journal & year & court & judge & lawyer & parties");
  return cas;
}
  // 31-journal & year & ref & judge & lawyer & parties
  if (
    (ref.journal !== "",
    ref.court == "" &&
      ref.year !== "" &&
      ref.ref !== "" &&
      ref.judge !== "" &&
      ref.lawyer !== "" &&
      ref.parties !== "")
  ) {
    const cas = await db.Citation.findAll({
      where: {
        [Op.and]: [
          { Journal_Name: ref.journal },
          { Year: ref.year },
          { Journal_Ref: ref.ref },
          { Judge: ref.judge },
          { Lawyer: ref.lawyer },
          { Parties: ref.parties },
        ],
      },
    });
    // console.log("journal & year & ref & judge & lawyer & parties");
    return cas;
  }

  // 32-journal & year & court & ref & judge & lawyer & parties
  if (
    (ref.journal !== "",
    ref.court !== "" &&
      ref.year !== "" &&
      ref.ref !== "" &&
      ref.judge !== "" &&
      ref.lawyer !== "" &&
      ref.parties !== "")
  ) {
    const cas = await db.Citation.findAll({
      where: {
        [Op.and]: [
          { Journal_Name: ref.journal },
          { Year: ref.year },
          { Citation_Court: ref.court },
          { Journal_Ref: ref.ref },
          { Judge: ref.judge },
          { Lawyer: ref.lawyer },
          { Parties: ref.parties },
        ],
      },
    });
    // console.log("journal &  year & court & ref & judge & lawyer & parties");
    return cas;
  }
}
// ---------------------search-court-----------------------
async function searchCourt(ref) {
  //  fromto  & court
  if (
    ref.from !== "" &&
    ref.to !== "" &&
    ref.court !== "" &&
    ref.journal == ""
  ) {
    const cas = await db.Case.findAll({
      where: {
        [Op.and]: [
          { Citation_Court: ref.court },
          { Year: { [Op.between]: [ref.from, ref.to] } },
        ],
      },
    });
    return cas;
  }
  //   fromto & court &journal
  if (
    ref.from !== "" &&
    ref.to !== "" &&
    ref.court !== "" &&
    ref.journal !== ""
  ) {
    const cas = await db.Case.findAll({
      where: {
        [Op.and]: [
          { Year: { [Op.between]: [ref.from, ref.to] } },
          { Citation_Court: ref.court },
          { Journal_Name: ref.journal },
        ],
      },
    });
    return cas;
  }
}
// ---------------------search-advance-----------------------
async function searchAdvance(ref) {
  const cas = await db.Citation.findAll({
    where: {
      [Op.and]: [
        ref.keyword && { Parties: { [Op.like]: `%${ref.keyword}%` } },
        ref.journal && { Journal_Name: ref.journal },
        ref.year && { Year: ref.year },
        ref.court && { Citation_Court: ref.court },
        ref.ref && { Journal_Ref: ref.ref },
        ref.judge && { Judge: ref.judge },
        ref.lawyer && { Lawyer: ref.lawyer },
        ref.parties && { Parties: ref.parties },
      ],
    },
  });
  // console.log("advance");
  return cas;
}
