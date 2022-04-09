const db = require("../config/UserDb");

module.exports = {
  create,
  updateClient,
  getClients,
  getClient,
  createCase,
  updateCase,
  getCases,
  getCase,
  getClientsCases,
  getClientsCasesFiles,
  getClientsCasesNotes,
  getClientsCasesDesc
};

// ---------------------create client-----------------------
async function create(params) {
  // save user
  if (await db.Client.create(params)) {
    return { message: "Client is created successfully" };
  }
}

// -----------------------update-client-----------------------------------

async function updateClient(obj, id) {
  if (await db.Client.findOne({ where: { user_id:obj.user_id,client_id: id } })) {
    const Client = await db.Client.findOne({ where: { user_id:obj.user_id,client_id: id } });
    // copy obj to user and save
    Object.assign(Client, obj);
    await Client.save();
    return { message: "Client Updated Successfully" };
  }
}
// -----------------------get clients-----------------------------------

async function getClients(id) {
  const clients = await db.Client.findAll({ where: { user_id: id } });
  return clients;
}

// -----------------------get client-----------------------------------

async function getClient(ids) {
  const client = await db.Client.findOne({
    where: { user_id: ids.user_id, client_id: ids.client_id },
  });
  return client;
}

// ---------------------create case-----------------------
async function createCase(params) {
  // save user
  if (await db.ClientCase.create(params)) {
    return { message: "Client Case is created successfully" };
  }
}

// -----------------------update-case-----------------------------------

async function updateCase(obj, id) {
  if (await db.ClientCase.findAll({ where: { user_id:obj.user_id,client_id: obj.client_id,case_number:id } })) {
  await db.ClientCase.findAll({where:{user_id:obj.user_id,client_id: obj.client_id,case_number:id}}).then((result) => {
      if(result){
        for(var i=0;i<=result.length-1;i++){
          result[i].set(obj);
          result[i].save();
        }
      }})
    return { message: "Client Cases Updated Successfully" };
  }
}
// -----------------------get cases-----------------------------------

async function getCases(ids) {
  const cases = await db.ClientCase.findAll({
    where: { user_id: ids.user_id, client_id: ids.client_id },
  });
  const arrayUniqueByKey = [
    ...new Map(cases.map((item) => [item["case_number"], item])).values(),
  ];

  return { cases: arrayUniqueByKey, hearings: cases };
}

// -----------------------get case-----------------------------------

async function getCase(ids) {
  const cas = await db.ClientCase.findOne({
    where: {
      user_id: ids.user_id,
      client_id: ids.client_id,
      case_number: ids.case_number,
    },
  });
  return cas;
}
// -----------------------get all clients cases-----------------------------------

async function getClientsCases(id) {
  const cases = await db.ClientCase.findAll({ where: { user_id: id } });

  const open = cases.filter((obj) => {
    return obj.case_close == "close";
  });
  const close = cases.filter((obj) => {
    return obj.case_close == "closed";
  });
  return { open: open, close: close };
}

// -----------------------get all clients cases notes-----------------------------------

async function getClientsCasesNotes(ids) {
  const cases = await db.ClientCase.findAll({ where: { user_id: ids.user_id, client_id: ids.client_id ,case_number: ids.case_number} });
  const notes=cases.map((obj)=>{
    return obj.case_notes
  })
  return notes;
}

// -----------------------get all clients desc-----------------------------------

async function getClientsCasesDesc(ids) {
  const cases = await db.ClientCase.findAll({ where: { user_id: ids.user_id, client_id: ids.client_id ,case_number: ids.case_number} });
  const desc=cases.map((obj)=>{
    return obj.case_desc
  })
  return desc;
}
// -----------------------get all clients files-----------------------------------

async function getClientsCasesFiles(ids) {
  const cases = await db.ClientCase.findAll({ where: { user_id: ids.user_id, client_id: ids.client_id ,case_number: ids.case_number} });
  const files=cases.map((obj)=>{
    return obj.case_files
  })
  return files;
}
