DROP KEYSPACE IF EXISTS test;

CREATE KEYSPACE test

  WITH REPLICATION = {
    'class' : 'SimpleStrategy',
    'replication_factor' : 1
  };

USE test;

CREATE TABLE host_listings(
  id int,
  first_name text,
  city text,
  state text,
  country text,
  listing_name text,
  features text,
  host_guidebook text,
  PRIMARY KEY (id, listing_name)
);

CREATE TABLE host_stats(
  id int,
  first_name text,
  last_name text,
  joined_in_date date,
  references_count int,
  verified boolean,
  description text,
  response_rate float,
  response_time int,
  languages text,
  email text,
  PRIMARY KEY(id)
);

CREATE TABLE listing_location(
  id int,
  listing_name text,
  lat_location float,
  lon_location float,
  PRIMARY KEY (id, listing_name)
);

CREATE TABLE listing_reviews(
  id int,
  listing_name text,
  rating text,
  PRIMARY KEY (id, listing_name)
);
-- account for queries
-- => Find all listings from a hosts
-- => Get info about a hosts
-- => Find location of a listings
-- => Get all review ratings for a listings (to find average rating)
