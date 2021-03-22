// Nodemailer client implementation for nodejs applicaion

"use strict";
const nodemailer = require("nodemailer");
// var smtpTransport = require('nodemailer-smtp-transport');

// async..await is not allowed in global scope, must use a wrapper
async function main() {

  // create reusable transport object using the default SMTP transport
  var transport = nodemailer.createTransport({
   host: "127.0.0.1",
   port: 465,
   secure: false,

   // Set rejectUnauthorized to false in case SMTP server
   // is using self signed certificates
   tls: { rejectUnauthorized: false },
   auth: {
     user: "admin",
     pass: "pass"
   },
   debug: true, // show debug output
   logger: true // log information in console
 });

// Mailtrap SMTP server configuration
//  var transport = nodemailer.createTransport({
//    host: "smtp.mailtrap.io",
//    port: 2525,
//    auth: {
//      user: "e3b0b1cab7889f",
//      pass: "36df67d5c56fe5"
//    },
//    debug: true, // show debug output
//    logger: true // log information in console
//  });

 var mailOptions = {

//******** Verification email template  ********
//    from: 'HKS Cloud <no-reply@hec-cloud.labgsd.com>',
//    to: 'harsh.shekhar@hitachivantara.com, sara@company.com',
//    subject: 'Hitachi Kubernetes Service Email Verification',
//    text: [
//     'Welcome to Hitachi Kubernetes Service',
//     'We\'re excited to have you aboard, please verify your email address to get started.',
//     '',
//     `https://test.com/auth/verify?token=ABCDEF&method_id=PLAIN`,
//     '',
//     'Regards,',
//     'The HKS Team'
// ].join('\n'), 
//    html: `<div style="text-align: left; font-family:lato, helvetica neue, helvetica, arial, sans-serif; padding: 150px 40px; color: #212B35; width: 500px; margin: auto;">
//    <div><img src="cid:hitachi-logo" width=150 alt="Hitachi Kubernetes Service"></div>
//    <h1 style="font-size: 32px;">Welcome to Hitachi Kubernetes Service</h1>
//    <p style="margin-bottom: 70px;">We're excited to have you aboard, please verify your email address to get started.</p>
//    <a href="https://test.com/auth/verify?token=ABCDEF&method_id=PLAIN" style="background-color: #3289FF; color: #fff; padding: 10px 16px; border-radius: 20px; text-decoration: none; font-size: 12px; letter-spacing: 2px;">VERIFY EMAIL</a>
// </div>`,


//******** Forgot password template ********
    to: 'harsh.shekhar@hitachivantara.com, sara@company.com',
    subject: 'HKS Password Reset',
    html: `<div style="text-align: left; font-family:lato, helvetica neue, helvetica, arial, sans-serif; padding: 150px 40px; color: #212B35; width: 500px; margin: auto;">
                    <div><img src="cid:hitachi-logo" width=150 alt="Hitachi Kubernetes Service"></div>
                    <h1 style="font-size: 40px;">Forgot your password?</h1>
                    <p style="margin-bottom: 70px;">Don't worry, it happens. Click the button below to reset your password.</p>
                    <a href="https://test.com/auth/PLAIN/reset?token=ABCDEF1234" style="background-color: #3289FF; color: #fff; padding: 10px 16px; border-radius: 20px; text-decoration: none; font-size: 12px; letter-spacing: 2px;">RESET PASSWORD</a>
                    <p style="margin-top: 70px;">If you didn't reset your password just ignore this link and it will expire. If you need further assistance please <a href="mailto:support@hitachivantara.com" style="color: #F800A7; text-decoration: none;">contact support.</a></p>
                </div>`,
    text: [
        'Forgot your password?',
        'Don\'t worry, it happens. Click the link below to reset your password.',
        '',
        `https://test.com/auth/PLAIN/reset?token=ABCDEF1234`,
        '',
        'Regards,',
        'The HKS Team'
    ].join('\n'),
    from: 'HKS Cloud <no-reply@hec-cloud.labgsd.com>',

//******** Attachments ********
   attachments: [
      {
         filename : 'hitachi-logo-vector.jpg',
         path: '/home/harsh/Downloads/hitachi-logo-vector.jpg',
         cid : 'hitachi-logo'
      },
      {   // utf-8 string as an attachment
          filename: 'text1.txt',
          content: 'hello world!'
      },
      {   // binary buffer as an attachment
          filename: 'text2.txt',
          content: new Buffer('hello world!','utf-8')
      },
      {   // file on disk as an attachment
          filename: 'package-lock.json',
          path: '/home/harsh/gitlab.com/harshshekhar15/node-app/package-lock.json' // stream this file
      },
      {   // filename and content type is derived from path
          path: '/home/harsh/gitlab.com/harshshekhar15/node-app/smtp-server/index.js'
      },
      {   // define custom content type for the attachment
          filename: 'text.bin',
          content: 'hello world!',
          contentType: 'text/plain'
      },
      {   // use URL as an attachment
          filename: 'license.txt',
          path: 'https://raw.github.com/nodemailer/nodemailer/master/LICENSE'
      },
      {   // encoded string as an attachment
          filename: 'text1.txt',
          content: 'aGVsbG8gd29ybGQh',
          encoding: 'base64'
      },
      {   // data uri as an attachment
          path: 'data:text/plain;base64,aGVsbG8gd29ybGQ='
      },
      {
          // use pregenerated MIME node
          raw: 'Content-Type: text/plain\r\n' +
               'Content-Disposition: attachment;\r\n' +
               '\r\n' +
               'Hello world!'
      }
  ]
}

transport.sendMail(mailOptions, (error, info) => {
   if (error) {
       return console.log(error);
   }
   console.log('Message sent: %s', info.messageId);
   console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
});

// verify connection configuration with SMTP server
// transport.verify(function(error, success) {
//     if (error) {
//       console.log(error);
//     } else {
//       console.log("Server is ready to take our messages");
//     }
//   });
}

main().catch(console.error);