
const db=require('../config/UserDb')

module.exports = {
    setPackage,
    getPackage,
    getPackages,
    deletePackage,
    updatePackage
};
// -----------------------package save-----------------------------------
async function setPackage(params) {
    // save package 
   if(await db.Package.create(params)){
     return {message:"Package Created Successfully"};
   }
}
// -----------------------update-package-----------------------------------

async function updatePackage(params, id) {
    if (await db.Package.findOne({ where: { id: id } })) {
        const Package=await db.Package.findOne({ where: { id: id } })
    // copy params to user and save
      Object.assign(Package, params);
      await Package.save();
      return {message:"Package Updated Successfully"};
    }
}
// -----------------------delete-package-----------------------------------
async function deletePackage(id) {
    const package = await db.Package.findByPk(id);
    await package.destroy();
    return { message: 'Package deleted successfully' }
}
// -----------------------get-packages-----------------------------------
async function getPackages() {
  const packages= await db.Package.findAll();
  return packages;
}
// ---------------------get package-----------------------
async function getPackage(pkg) {
  const package = await db.Package.findOne({ where: { package: pkg } });
  return package;
}