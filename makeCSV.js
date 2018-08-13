const fs = require("fs");
const names = require('./namesData.js');
const faker = require('faker');

// const csvWriter = require('csv-write-stream');
// var writer = csvWriter();

// writer.pipe(fs.createWriteStream('data.csv'))
//
// for (let i = 1; i <= 4019400; i += 1) {
//   writer.write({id: `${i}`,
//   first_name: `${faker.name.firstName()}`,
//   last_name: `${faker.name.lastName()}`,
//   city: `${faker.address.city()}`,
//   state: `${faker.address.stateAbbr()}`,
//   country: `${faker.address.country()}`,
//   joined_in: `${JSON.stringify(faker.date.between('2016-01-01', '2018-06-11')).slice(1,11)}`,
//   references_count: `${Math.floor(Math.random()*500)}`,
//   verified: `${Math.floor(Math.random()*2) === 0 ? true : false}`,
//   response_rate: `${Math.random()}`,
//   response_time: `${Math.floor(Math.random()*100)}`,
//   language: `${faker.lorem.words(2)}`,
//   email: `${faker.lorem.word()}@gmail.com`})
// }
// writer.end();

const reviewsData = () => {
  let fields = 'id,user_id,list_id,rating\n';
  fs.appendFileSync('./reviews.csv', fields);
  let count = 1;
  let users = 12058199;
  while (count <= 50000000) {
    let csv = '';
    let hunthou = 0;
    while (hunthou < 100000) {
      csv += `${count},`;
      csv += `${Math.floor(Math.random()*users) + 1},`;
      csv += `${Math.floor(Math.random()*users) + 1},`;
      csv += `${Math.floor(Math.random()*5)}\n`;
      count += 1;
      hunthou += 1;
    }
    fs.appendFileSync('./reviews.csv', csv)
  }
}


const listingData = () => {
  let fields = 'id,name,features,things_to_do,lat_location,long_location,host_guidebook\n';
  fs.appendFileSync('./listings.csv', fields);
  let count = 1;

  while (count <= 12058200) {
    let csv = '';
    let hunthou = 0;
    while (hunthou < 100000) {
      csv += `${count},`;
      csv += `${names[count]},`;
      csv += `${faker.lorem.words(5)},`;
      csv += `${faker.lorem.words(5)},`;
      csv += `${Math.floor(Math.random()*150) + Math.random()},`;
      csv += `${Math.floor(Math.random()*150) + Math.random()},`;
      csv += `${faker.lorem.words(2)}\n`;
      count += 1;
      hunthou += 1;
    }
    fs.appendFileSync('./listings.csv', csv)
  }
}


const hostData = () => {
  let fields = 'id,first_name,last_name,city,state,country,joined_in_date,references_count,verified,description,response_rate,response_time,language,email\n';
  fs.appendFileSync('./hosts.csv', fields);
  let count = 1;

  while (count <= 12058200) {
    let csv = '';
    let hunthou = 0;
    while (hunthou < 100000) {
      csv += `${count},`;
      csv += `"${faker.name.firstName()}",`;
      csv += `"${faker.name.lastName()}",`;
      csv += `"${faker.address.city()}",`;
      csv += `"${faker.address.stateAbbr()}",`;
      csv += `"${faker.address.country()}",`;
      csv += `${JSON.stringify(faker.date.between('2016-01-01', '2018-06-11')).slice(1,11)},`;
      csv += `${Math.floor(Math.random()*500)},`;
      csv += `${Math.floor(Math.random()*2) === 0? true : false},`;
      csv += `"${faker.lorem.sentences(2)}",`;
      csv += `${Math.random()},`;
      csv += `${Math.floor(Math.random()*100)},`;
      csv += `"${faker.lorem.words(2)}",`;
      csv += `"${faker.lorem.word()}@gmail.com"\n`;
      count += 1;
      hunthou += 1;
    }
    fs.appendFileSync('./hosts.csv', csv)
  }
}
// hostData();
// listingData();
reviewsData();
