
const db=require('../config/UserDb')
const Sequelize = require("sequelize");
const Op = Sequelize.Op;
const bcrypt = require("bcryptjs");
const requests=require("requests")
const nodemailer =require("nodemailer")

module.exports = {
    otpRequest,
    otpMatch,
    resetPassword,
    sendEmail
};
    // -------------------otpRequest-----------------------
    const generateOTP = () => {
        let otp = '';
        for (let i = 0; i <= 5; i++) {
            const randVal = Math.round(Math.random() * 9)
            otp = otp + randVal;
        }
        return otp
    }
//   ----------------------------------- 
async function otpRequest(obj){
    const user = await db.User.findOne({
      where: { contact: obj.contact, email:obj.email },
    });
    if(user){

let api_token = 'c8be00e27f3ddfeaa65e23068852eacff102036744';
let api_secret = 'mysecretforapisecret@Ewakalat';
let to = user.contact;
let from = '8584';
let otp=generateOTP();
let message = `This is an automates SMS from eWakalat.com. Your verification code is ${otp}. please enter the pin for instant verification. Thank you!`;


requests(`https://lifetimesms.com/plain?api_token=${api_token}&api_secret=${api_secret}&to=${to}&from=${from}&message=${message}`)
.on('data', function (chunk) {
  console.log(chunk,"ok response")

 db.Code.create({email:obj.email,code:otp})

})
.on('end', function (err) {
if (err) 
console.log(err,"err response");
});
  return "If doesn't receive the code!"
    }else{
      return "Invalid Contact Number"
    }
  }
  // ---------------------
  async function otpMatch(obj){
    const user = await db.Code.findOne({
      where: { email: obj.email, code:obj.code },
    });
    if(user){
      return "Now create new password"
    }else{
      return "Wrong Otp Code!"
    }
  }

    // ---------------------
    async function resetPassword(obj){
      const User = await db.User.findOne({
        where: { email: obj.email},
      });

      if(User){
            // hash password
            if (obj.newPassword) {
              obj.hash = await bcrypt.hash(obj.newPassword, 10);
            }
             // copy params to user and save
            Object.assign(User, {hash:obj.hash});
            await User.save();
        return "Change password successfully"
      }
    }

    // -----------------send email-----------------------------

    async function sendEmail(msg){
    const mailTransport = () => nodemailer.createTransport({
      host: 'smtp.gmail.com',
      port: 465,
      secure: true,
      auth: {
          user: 'Ewaqalatsend@gmail.com',
          pass: '@Ewaqalat5277'
      },
  });
  mailTransport().sendMail({
    from: "Ewaqalatsend@gmail.com",
    to: "Ewaqalatget@gmail.com",
    subject: msg.subject,
    text: msg.text,
  })
  return "Email send successfully"
}