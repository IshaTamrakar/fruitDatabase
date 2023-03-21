// const MongoClient = require('mongodb').MongoClient;
// const assert = require('assert');

// //Connection URL
// const url = 'mongodb://localhost:27017';

// //Database Name
// const dbName = 'fruitsDB';

// //Create a new MongoClient
// const client = new MongoClient(url);

// //Use connect method to connect to the server
// client.connect(function(err){
//     assert.equal(null, err);
//     console.log("Connected successfully to server");

//     const db = client.db(dbName);

//     client.close();
// })


// getting-started.js
const mongoose = require('mongoose');

main().catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/fruitDB');
  const fruitSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    rating: {
        type: Number,
        min: 1,              //Adding Validations
        max: 10
    },
    reviews: String
})

console.log("Server Running");

const Fruit = mongoose.model("Fruit", fruitSchema);

const fruit = new Fruit({
    name: "Apple",
    rating: 7,
     reviews: "Tasty"
})

const peach = new Fruit({
    name: "Peach",
    rating: 7,
     reviews: "Tasty"
})

 peach.save();

const personSchema = new mongoose.Schema({
    name : String,
    age : Number,
    favFruit : fruitSchema
})

const Person = mongoose.model("Person" , personSchema);

const person = new Person({
    name: "John",
    age: 27
})

const newPerson = new Person({
    name: "Amy",
    age: 12,
    favFruit: peach
})

newPerson.save();

// person.save()

// const banana = new Fruit({
//     name: "Banana",
//     rating: 5,
//     reviews: "vhsdbhdvv"
// });

// const kiwi = new Fruit({
//     name: "Kiwi",
//     rating: 8,
//     reviews: "dshvjc"
// });

// Fruit.insertMany([kiwi,banana]).then(function(){
//     console.log("data inserted");
// }).catch(function(error){
//     console.log(error);
// })

  // use `await mongoose.connect('mongodb://user:password@127.0.0.1:27017/test');` if your database has auth enabled

// Fruit.find(fruit) 
// console.log(Fruit.find(fruit) );







}



