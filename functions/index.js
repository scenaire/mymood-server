//Author : Jiratchaya Yeeto

const functions = require('firebase-functions');
const admin = require("firebase-admin");
const nodemailer = require('nodemailer');

const trie = require('./trie');


admin.initializeApp();

//Mail

const gmailEmail = "mymoodday@gmail.com";
const gmailPassword = "Tempesta4321$";
const mailTransport = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: gmailEmail,
    pass: gmailPassword,
  },
});

//Send Welcome Email

exports.sendWelcomeEmail = functions.auth.user().onCreate((user) => {
    const recipent_email = user.email;

    const mailOptions = {
        from: '"My MoodDay" <sendermail@gmail.com>',
        to: recipent_email,
        subject: 'Welcome to MY APP',
        text: 'Thank you for installing my mood day!'
    };

  try {
    mailTransport.sendMail(mailOptions);
    console.log('mail send');

  } catch(error) {
    console.error('There was an error while sending the email:', error);
  }
return null;
  });


//Trie




// exports.searchWordSuicidal = functions.https.onRequest((request, response) => {

//     var data = request.body;

//     var trietest = new trie();

//     var fs = require('fs');
//     var inputSuicide = fs.readFileSync('./suicidal.txt', 'utf8');
//     var dataS = inputSuicide.split("\r"+"\n");

//     for(var i=0;i<dataS.length;i++)
//     {
//       trietest.insert(dataS[i]);
//     }

//     response.setHeader('Content-Type', 'application/json');
//     response.send(JSON.stringify(trietest.searchWordinSentence(data)));

// });

// exports.searchWordNegaive = functions.https.onRequest((request, response) => {

//   var data = request.body;

//   var trietest = new trie();

//   var fs = require('fs');
//   var inputNegative = fs.readFileSync('./negative.txt', 'utf8');
//   var dataN = inputNegative.split("\r"+"\n");

//   for(var i=0;i<dataN.length;i++)
//   {
//     trietest.insert(dataN[i]);
//   }

//   response.setHeader('Content-Type', 'application/json');
//   response.send(JSON.stringify(trietest.searchWordinSentence(data)));

// });




exports.addWordSuicide = functions.firestore.document('/User/{userId}/moodList/{moodId}')
    .onCreate( (snap, context) => {

      const moodId = context.params.moodId;
      const userId = context.params.userId;

      const suicideTrigger = admin.firestore().collection('User')
      .doc(userId)
      .collection('moodList')
      .doc(moodId);

      if (snap.data().message.trim() !== '') {
        let suicideArr = trie.searchSuicidal(snap.data().message);
        return suicideTrigger.update({ suicide: suicideArr.toString() });
      }

      return suicideTrigger.update({ suicide: ""});

  });

  exports.addWordNegative = functions.firestore.document('/User/{userId}/moodList/{moodId}')
      .onCreate( (snap, context) => {

        const moodId = context.params.moodId;
        const userId = context.params.userId;

        const suicideTrigger = admin.firestore().collection('User')
        .doc(userId)
        .collection('moodList')
        .doc(moodId);

        if (snap.data().message.trim() !== '') {
          let negativeArr = trie.searchNegative(snap.data().message);
          return suicideTrigger.update({ negative: negativeArr.toString() });
        }

        return suicideTrigger.update({ negative: ""});

    });
