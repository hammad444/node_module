const config = require('../config/config.json');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const db=require('../config/UserDb')

module.exports = {
    getPayments,
    getPayment,
    searchPayment,
    setPayment,
    deletePayment,
    updatePayment
};
// -----------------------payment save-----------------------------------
async function setPayment(params) {
    if (await db.Payment.findOne({ where: { id: params.id } })) {
      const Payment=await db.Payment.findOne({ where: { id: params.id } })
      Object.assign(Payment, params);
      await Payment.save();
      const data= await Payment.get()
      return {data:data,message:"Payment method added successfully"}
    }
      // if package is Free
      if(params.package=="free"){
    function addHoursToDate(hours){
      var theDate = new Date();
      return new Date(theDate.setTime(theDate.getTime() + (hours*60*60*1000)));
    }
    var expireAt;
    expireAt=addHoursToDate(3)
    const newObject={id:params.id,email:params.email,expireAt:expireAt,package:params.package,receipt:params.receipt,isPaid:params.isPaid,}
    const Payment=await db.Payment.create(newObject)
    const data= await Payment.get()
    return {data:data,message:"Payment method added successfully"}
  }
    // save payment 
     const Payment=await db.Payment.create(params)
     const data= await Payment.get()
      return {data:data,message:"Payment method added successfully"}
}
// -----------------------delete-payment-----------------------------------
async function deletePayment(id) {
  const payment = await db.Payment.findByPk(id);
  await payment.destroy();
  return { message: 'Payment deleted successfully' }
}
// -----------------------update-payment-----------------------------------

async function updatePayment(params, id) {
  function addMonthsToDate(months){
    var theDate = new Date();
    return new Date(theDate.setMonth(theDate.getMonth() + months));
  }
  function addDaysToDate(days){
    var theDate = new Date();
    return new Date(theDate.setDate(theDate.getDate() + days));
}
function addHoursToDate(hours){
  var theDate = new Date();
  return new Date(theDate.setTime(theDate.getTime() + (hours*60*60*1000)));
}
  if (await db.Payment.findOne({ where: { id: id } })) {
      const Payment=await db.Payment.findOne({ where: { id: id } })
  // copy params to payment and save
  if(params.isPaid=="true"){
    var expireAt;
    if(params.expireAt==undefined){
      if(params.package=="free"){
        expireAt=addHoursToDate(3)
      }else if(params.package=="quarterly"){
        expireAt=addMonthsToDate(3)
      }else if(params.package=="biannually"){
        expireAt=addMonthsToDate(6)
      }else if(params.package=="annually"){
        expireAt=addMonthsToDate(12)
      }
    }else{
      expireAt=params.expireAt
    }
    const newObject={isPaid:params.isPaid,expireAt:expireAt,package:params.package}
    Object.assign(Payment, newObject);
  }else{
    const newObject={isPaid:params.isPaid,expireAt:null,package:params.package}
    Object.assign(Payment, newObject);
  }
    await Payment.save();
    return {message:"Payment Updated Successfully"};
  }
}
// -----------------------get-payments-----------------------------------
async function getPayments() {
      // get payment 
    const payments= await db.Payment.findAll();
    return payments;
 
}


// ---------------------search payment-----------------------
async function searchPayment(obj) {
  // search payment
  const payments = await db.Payment.findAll({ where: obj });
  return payments;
}

// ---------------------get payment-----------------------
async function getPayment(id) {
  // get payment
  const payment = await db.Payment.findOne({ where: { id: id } });
  return payment;
}