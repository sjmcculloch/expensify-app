import * as firebase from 'firebase';

const config = {
    apiKey: process.env.FIREBASE_API_KEY,
    authDomain: process.env.FIREBASE_AUTH_DOMAIN,
    databaseURL: process.env.FIREBASE_DATABASE_URL,
    projectId: process.env.FIREBASE_PROJECT_ID,
    storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID
  };

firebase.initializeApp(config);

const database = firebase.database();

export { firebase, database as default };

// database.ref('expenses').on('child_removed', (snapshot) => {
//     console.log(snapshot.key, snapshot.val());
// });

// database.ref('expenses').on('child_changed', (snapshot) => {
//     console.log(snapshot.key, snapshot.val());
// });

// database.ref('expenses').on('child_added', (snapshot) => {
//     console.log(snapshot.key, snapshot.val());
// });


// database.ref('expenses').on('value', (snapshot) => {
//     const expenses = [];
//           snapshot.forEach((childSnapshot) => {
//             expenses.push({
//                 id: childSnapshot.key,
//                 ...childSnapshot.val()
//             });
//           });
    
//           console.log(expenses);
// }, (e) => {
//     console.log("error while fetching", e);
// });

// setTimeout(() => {
//     database.ref('expenses').push({
//         description: 'eee',
//         note: 'ccc',
//         amount: 10,
//         createdAt: 100
//     });
// }, 3500);



// database.ref('expenses')
//   .once('value')
//   .then((snapshot) => {
//       const expenses = [];
//       snapshot.forEach((childSnapshot) => {
//         expenses.push({
//             id: childSnapshot.key,
//             ...childSnapshot.val()
//         });
//       });

//       console.log(expenses);
//   }).catch((e) => {
//       console.log('there was an error');
//   });

// database.ref('notes/-L5DxV_sv_u-vHly7GDM').update({
//     body: 'Buy food'
// });

// database.ref('notes/-L5DxV_sv_u-vHly7GDM').remove();

// database.ref('expenses').push({
//     description: 'd1',
//     note: 'n1',
//     amount: 10,
//     createdAt: 100
// });

// database.ref('expenses').push({
//     description: 'd2',
//     note: 'n2',
//     amount: 10,
//     createdAt: 100
// });

// database.ref('expenses').push({
//     description: 'd3',
//     note: 'n3',
//     amount: 10,
//     createdAt: 100
// });


// database.ref('notes').push({
//     title: 'Course Topics',
//     body: 'React Native Angular Python'
// });

// database.ref().on('value', (snapshot) => {
//     const person = snapshot.val();
//     console.log(`${person.name} is a ${person.job.title} at ${person.job.company}`);
// }, (e) => {
//     console.log("error while fetching", e);
// });

// setTimeout(() => {
//     database.ref('job/title').set('Pro');
// }, 3500);

// setTimeout(() => {
//     database.ref().off();
// }, 7000);

// database.ref('location/city')
//     .once('value')
//     .then((snapshot) => {
//         const val = snapshot.val();
//         console.log('snapshot', val);
//     })
//     .catch((e) => {
//         console.log('Error fetching data', e);
//     });

// database.ref().set({
//     name: 'Scott McCulloch',
//     age: 26,
//     stressLevel: 6,
//     job: {
//         title: 'Software Developer',
//         company: 'Google'
//     },
//     isSingle: false,
//     location: {
//         city: 'Wollongong',
//         country: 'Australia'
//     } 
// }).then(() => {
//     console.log('data is saved');
// }).catch((e) => {
//     console.log('this failed', e);  
// });

// database.ref().update({
//     stressLevel: 9,
//     'job/company': 'Amazon',
//     'location/city': 'Seattle'
// });



// database.ref('age').remove().then(() => {
//     console.log('removed');
// }).catch((e) => console.log(e));