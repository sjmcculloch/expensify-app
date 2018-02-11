// const person = {
//     name: 'Andrew',
//     age: 26,
//     location: {
//         city: 'Philly',
//         temp: '92'
//     }
// };

// // const name = person.name;
// // const age = person.age;

// const { name = 'Anonymous', age } = person;
// console.log(`${name} is ${age}.`);

// const { temp, city } = person.location;
// if (city && temp ) {
//     console.log(`It's ${temp} in ${city}.`);
// }

// const book = {
//     title: 'Ego is the Enemy',
//     author: 'Ryan Holiday',
//     publisher: {
//         name: 'Penguin'
//     }
// };

// const { name: publisherName = 'Self-Published' } = book.publisher;
// console.log(publisherName);

const address = ['1299 S Juniper Street', 'Philly', 'Penn', '19147'];

const [, city, state = 'New York'] = address;

console.log(`You are in ${city} ${state}`);

const item = ['Coffee (hot)', '$2.00', '$2.50', '$2.75'];
const [product, , price] = item;

console.log(`A medium ${product} costs ${price}`);