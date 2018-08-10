CREATE TABLE hosts(
  id serial,
  first_name text,
  last_name text,
  city text,
  state text,
  country text,
  joined_in_date date,
  references_count integer,
  verified boolean,
  description text,
  response_rate float,
  response_time integer,
  languages text,
  email text,
  PRIMARY KEY (id)
);

CREATE TABLE listings(
  id serial,
  name text,
  features text,
  things_to_do text,
  lat_location float,
  lon_location float,
  host_guidebook text,
  PRIMARY KEY (id)
);

CREATE TABLE reviews(
  id serial,
  user_id integer,
  list_id integer,
  rating integer,
  FOREIGN KEY (user_id) REFERENCES hosts(id),
  FOREIGN KEY (list_id) REFERENCES listings(id),
  PRIMARY KEY (id)
);


-- \COPY hosts(id,first_name,last_name,city,state,country,joined_in_date,references_count,verified,description,response_rate,response_time,language,email)
-- FROM 'D:\hack-reactor\SDCdata\hosts.csv' DELIMITER ',' CSV HEADER;

-- \COPY listings(id,name,features,things_to_do,lat_location,lon_location,host_guidebook)
-- FROM 'D:\hack-reactor\SDCdata\listings.csv' DELIMITER ',' CSV HEADER;

-- \COPY reviews(id,user_id,list_id,rating)
-- FROM 'D:\hack-reactor\SDCdata\reviews.csv' DELIMITER ',' CSV HEADER;
