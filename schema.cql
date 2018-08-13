CREATE KEYSPACE rental_hosts

  WITH REPLICATION = {
    'class' : 'SimpleStrategy',
    'replication_factor' : 1
  };

USE rental_hosts;

CREATE TABLE hosts(
  id int,
  first_name text,
  last_name text,
  city text,
  state text,
  country text,
  joined_in_date date,
  references_count int,
  verified boolean,
  description text,
  response_rate float,
  response_time int,
  languages text,
  email text,
  PRIMARY KEY (id)
);

CREATE TABLE listings(
  id int,
  name text,
  features text,
  things_to_do text,
  lat_location float,
  lon_location float,
  host_guidebook text,
  PRIMARY KEY (id)
);

CREATE TABLE reviews(
  id int,
  user_id int,
  list_id int,
  rating int,
  PRIMARY KEY (id)
);
