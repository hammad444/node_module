const config = require("../config/config.json");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const db = require("../config/UserDb");
const Sequelize = require("sequelize");
const Op = Sequelize.Op;
var Json2csvParser = require('json2csv').Parser;
const fs = require("fs");
var path = require('path');

module.exports = {
  authenticate,
  create,
  picture,
  getUsers,
  getUser,
  searchUser,
  deleteUser,
  updateUser,
  updatePassword,
  downloadUsers,
  paymentAccount,
  allPayAccounts
};
// ---------------------login authentication-----------------------
async function authenticate({ email, password, macAddress}) {
const newMacAddress=macAddress.macAddress

  const User = await db.User.scope("withHash").findOne({ where: { email } });

  if (!User || !(await bcrypt.compare(password, User.hash)))
    return { message: "Username or password is incorrect" };

if(Object.keys(User.macAddress).length==1 && User.macAddress.macAddress1!==newMacAddress){
     var newObject=User.macAddress
          newObject={...newObject,"macAddress2":newMacAddress}
          Object.assign(User, { macAddress: newObject });
       await User.save()
    // authentication successful
    const token = jwt.sign({ sub: User.id }, config.secret, { expiresIn: "7d" });
    return { ...omitHash(await User.get()), token };   
}

if(User.macAddress.macAddress2==newMacAddress || User.macAddress.macAddress1==newMacAddress){
 // authentication successful
 const token = jwt.sign({ sub: User.id }, config.secret, { expiresIn: "7d" });
 return { ...omitHash(await User.get()), token };   
}

return{ message: 'Already two devices registered!' };

}
// ---------------------user registration-----------------------
async function create(params) {
  // validate
  if (await db.User.findOne({ where: { email: params.email } })) {
    return { message: 'Email "' + params.email + '" is already taken!' };
  }


  // hash password
  if (params.password) {
    params.hash = await bcrypt.hash(params.password, 10);
  }

  // save user
  if (await db.User.create(params)) {
    return { message: "Your account is created successfully" };
  }
}
// -----------------------picture save-----------------------------------
async function picture(params, id) {
  if (await db.User.findOne({ where: { id: id } })) {
    const User = await db.User.findOne({ where: { id: id } });
    // copy params to user and save
    Object.assign(User, { picture: params });
    await User.save();
    return { message: "Profile Picture updated successfully" };
  }
}
// -----------------------delete-package-----------------------------------
async function deleteUser(id) {
  const user = await db.User.findByPk(id);
  await user.destroy();
  return { message: "User deleted successfully" };
}
// -----------------------update-user-----------------------------------

async function updateUser(params, id) {
  if (await db.User.findOne({ where: { id: id } })) {
      const User=await db.User.findOne({ where: { id: id } })
  // copy params to user and save
    Object.assign(User, params);
    await User.save();
    return {message:"Updated Successfully"};
  }
}
// -----------------------update-password-----------------------------------

async function updatePassword(params, id) {
      const User = await db.User.scope("withHash").findOne({ where: {  id: id } });
      if (User && await bcrypt.compare(params.oldPassword, User.hash)){
    // hash password
    if (params.newPassword) {
      params.hash = await bcrypt.hash(params.newPassword, 10);
    }
     // copy params to user and save
    Object.assign(User, {hash:params.hash});
    await User.save();

    return {message:"Password Changed Successfully"};
      }else{
        return {message:"Wrong old Password!"};
      }
}
// ---------------------get all users-----------------------
async function getUsers() {
  // get users
  const users = await db.User.findAll();
  return users;
}

function omitHash(user) {
  const { hash, ...userWithoutHash } = user;
  return userWithoutHash;
}
// ---------------------get user-----------------------
async function getUser(id) {
  // get user
  const user = await db.User.findByPk(id);
  return user;
}
// ---------------------search users-----------------------
async function searchUser(obj) {
  // search users
if(obj.name==""){
  const users = await db.User.findAll({ where: {  contact: obj.contact } });
  return users;
}else if(obj.contact==""){
  
  const users = await db.User.findAll({ where: {
      [Op.or]: [
        { firstName: { [Op.like]: `%${obj.name}%` } },
        { lastName: { [Op.like]: `%${obj.name}%` }},
      ],
    },
  });
  return users;
}else{
    
  const users = await db.User.findAll({ where: {
    [Op.or]: [
      { firstName: { [Op.like]: `%${obj.name}%` } },
      { lastName: { [Op.like]: `%${obj.name}%` }},
    ],
     contact: obj.contact ,
  },
});
return users;
}
}
// -----------------------download users-----------------------------------
async function downloadUsers() {
  let users = [];
    await db.User.findAll().then((objs) => {
      objs.forEach((obj) => {
        const {criteria, firstName, lastName,email, contact,address, city, speciality,macAddress,university,intake} = obj;
        users.push({criteria, firstName, lastName,email, contact,address, city, speciality,macAddress,university,intake});
      });
    })

    if(users){
      // const jsonUsers = JSON.parse(JSON.stringify(users));
      const csvFields = ['criteria', 'firstName', 'lastName','email', 'contact','address', 'city', 'speciality','macAddress','university','intake'];
      const json2csvParser = new Json2csvParser({ csvFields });
      const csv = json2csvParser.parse(users);
      // -----          
      var file_path = path.join("downloads/","usrs");
      // --------
      fs.writeFile("users.csv", csv, function(error) {
        if (error) throw error;
        return "users.csv file downloaded successfully!";
      });
    }
}

// ---------------------paymentAccount-----------------------
async function paymentAccount(acc) {

  // validate
  if (await db.PayAccount.findOne({ where: { account_name: acc.account_name, account_type:acc.account_type } })) {
    return 'Payment Account "' + acc.account_name + '" is already added!'
  }

  // save user
  else if (await db.PayAccount.create(acc)) {
    return "Payment account is created successfully"
  }
  }
  // ------------------------allPayAccounts-------------------------------
  async function allPayAccounts() {

    // validate
    const acc=await db.PayAccount.findAll()
      return acc;
  }
// -----------------------------------------------------------
function omitHash(user) {
  const { hash, ...userWithoutHash } = user;
  return userWithoutHash;
}
