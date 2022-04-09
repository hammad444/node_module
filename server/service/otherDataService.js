
const db=require('../config/UserDb')
const Sequelize = require("sequelize");
const Op = Sequelize.Op;

module.exports = {
    setBookmark,
    getBookmarks,
    updateBookmark,
    deleteBookmark,
    getDictionaries,
    getDictionary,
    getLegalterms,
    getLegalterm,
    getCaseByLegalterm,
    getArticles,
    getArticle,
    getSearchArticle,
    getTopics,
    getTopicStatute,
};


// ---------------------set bookmark-----------------------
async function setBookmark(params) {
  await db.Bookmark.create(params);
  return {message:"Bookmark Added"}
}
// ---------------------update bookmark-----------------------
async function updateBookmark(params,id) {
  if(await db.Bookmark.findOne({where:{User_id:id}})){
    const Bookmark=await db.Bookmark.findOne({where:{User_id:id}})
    Object.assign(Bookmark, params);
    await Bookmark.save();
    return {message:"Bookmark Added"}
  }
}
// ---------------------get bookmarks-----------------------
async function getBookmarks(id) {
  const bookmark = await db.Bookmark?.findOne({where:{User_id:id}});
  return bookmark;
}
// -----------------------delete-package-----------------------------------
async function deleteBookmark(id) {
  const user = await db.Bookmark.findOne({where:{Citation_id:id}});
  await user?.destroy();
  return { message: user };
}
// ---------------------get dictionary-----------------------
async function getDictionary(letter) {

  const word= await db.Dictionary.findAll({where:{ Words: { [Op.like]: `${letter}%` } }});
  return word
}
// ---------------------get dictionaries-----------------------
async function getDictionaries() {
  const dictionary = await db.Dictionary?.findAll();
  return dictionary;
}

// ---------------------get Legalterms-----------------------
async function getLegalterms() {
  const legalterms = await db.LegalTerm?.findAll();
  return legalterms;
}

// ---------------------get legalterm-----------------------
async function getLegalterm(letter) {

  const legalterm= await db.LegalTerm.findAll({where:{Legal_Terms: { [Op.like]: `${letter}%` } }});
  return legalterm
}
// ---------------------get-case-by-legalterm-----------------------
async function getCaseByLegalterm(ref) {
  //  keyword 
    const cas = await db.Case.findAll({
      where: {
           Head_Notes: { [Op.like]: `%${ref.keyword}%` } 
      },
    });
    return cas;
  }

  // ---------------------get articles-----------------------
async function getArticles() {
  const articles = await db.Article?.findAll();
  return articles;
}

// ---------------------get article-----------------------
async function getArticle(letter) {

  const article= await db.Article.findAll({where:{Title: { [Op.like]: `${letter}%` } }});
  return article;
}
// ---------------------search-article-----------------------
async function getSearchArticle(ref) {
  //  keyword 
    const art = await db.Article.findAll({
      where: {
           Title: { [Op.like]: `%${ref}%` } 
      },
    });
    return art;
  }
    // ---------------------get topics-----------------------
async function getTopics() {
  const topic = await db.Topic?.findAll();
  const arrayUniqueByKey = [...new Map(topic.map(item =>
    [item["Topics"], item])).values()];

    return arrayUniqueByKey
}
    // ---------------------get topics-----------------------
    async function getTopicStatute(ref) {
  const ordinance = await db.Topic.findAll({
    where: { Topics: ref },
  });
  const arrayUniqueByKey = [...new Map(ordinance.map(item =>
    [item["Ordinance_Name"], item])).values()];
    return arrayUniqueByKey
    }


 