const fs = require("fs");
const names = require('./namesData.js');
const faker = require('faker');

const cassanData = () => {
  let fields = 'id,first_name,city,state,country,listing_name,features,host_guidebook\n';
  fs.appendFileSync('./hostings.csv', fields);
  fields = 'id,first_name,last_name,join_in_date,references_count,verified,description,response_rate,response_time,languages,email\n';
  fs.appendFileSync('./stats.csv', fields);
  fields = 'id,listing_name,lat_location,lon_location\n';
  fs.appendFileSync('./locations.csv', fields);
  fields = 'id,listing_name,rating\n';
  fs.appendFileSync('./reviews.csv', fields);
  let count = 1;
  while( count <= names.length ) {
    let hostings = '';
    let stats = '';
    let location = '';
    let reviews = '';
    let hunthou = 0;
    while(hunthou < 100000 && count <= names.length) {
      let first_name = faker.name.firstName();
      hostings += `${count},`;
      hostings += `"${first_name}",`;
      hostings += `"${faker.address.city()}",`;
      hostings += `"${faker.address.stateAbbr()}",`;
      hostings += `"${faker.address.country()}",`;
      hostings += `${names[count]},`;
      hostings += `"${faker.lorem.words(4)}",`;
      hostings += `"${faker.lorem.words(2)}"\n`;
      stats += `${count},`;
      stats += `"${first_name}",`;
      stats += `"${faker.name.lastName()}",`;
      stats += `${JSON.stringify(faker.date.between('2016-01-01', '2018-06-11')).slice(1,11)},`;
      stats += `${Math.floor(Math.random()*500)},`;
      stats += `${Math.floor(Math.random()*2) === 0? true : false},`;
      stats += `"${faker.lorem.sentences(2)}",`;
      stats += `${Math.floor(Math.random()*100)/100},`;
      stats += `${Math.floor(Math.random()*100)},`;
      stats += `"${faker.lorem.words(2)}",`;
      stats += `"${faker.lorem.word()}@gmail.com"\n`;
      location += `${count},`;
      location += `${names[count]},`;
      location += `${Math.floor(Math.random()*100)/100 + Math.floor(Math.random() * 100)},`
      location += `${Math.floor(Math.random()*100)/100 + Math.floor(Math.random() * 100)}\n`
      reviews += `${count},`;
      reviews += `${names[count]},`;
      reviews += `${Math.floor(Math.random() * 5)}\n`;
      count+= 1;
      hunthou += 1;
    }
    fs.appendFileSync('./hostings.csv', hostings);
    fs.appendFileSync('./stats.csv', stats);
    fs.appendFileSync('./locations.csv', location);
    fs.appendFileSync('./reviews.csv', reviews);
  }
}

cassanData();
