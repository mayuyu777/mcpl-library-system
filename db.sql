CREATE DATABASE mcpllibrary;

Use mcpllibrary;



CREATE TABLE user (
  user_id int(11) NOT NULL PRIMARY key,
  user_type enum('admin','librarian','staff','patron') NOT NULL,
  user_fname varchar(100) NOT NULL,
  user_lname varchar(100) NOT NULL,
  user_mname varchar(100) NOT NULL,
  user_email varchar(250) NOT NULL,
  user_pass varchar(100) NOT NULL,
  user_gender enum('male','female','other') DEFAULT NULL,
  user_contact varchar(12) NOT NULL,
  user_stat enum('online','offline') DEFAULT NULL,
  user_registration_date date DEFAULT NULL,
  user_expiration_date date DEFAULT NULL,
  created_at timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  updated_at timestamp NOT NULL DEFAULT '0000-00-00 00:00:00',
  delete_at timestamp NOT NULL DEFAULT '0000-00-00 00:00:00'
);


CREATE TABLE address (
  add_id int(11) NOT NULL PRIMARY key,
  add_street_num varchar(100) DEFAULT NULL,
  add_main_address varchar(350) DEFAULT NULL,
  add_sec_address varchar(350) DEFAULT NULL,
  add_city varchar(100) DEFAULT NULL,
  add_state varchar(100) DEFAULT NULL,
  add_zip varchar(4) DEFAULT NULL,
  add_country varchar(100) DEFAULT NULL,
  user_id int(11) NOT NULL,
  FOREIGN key(user_id) REFERENCES User(user_id)
);


CREATE TABLE book (
  book_id varchar(11) NOT NULL PRIMARY key,
  book_quantity int(11) NOT NULL,
  book_image varchar(1000) DEFAULT NULL,
  created_at timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  updated_ate timestamp NOT NULL DEFAULT '0000-00-00 00:00:00',
  delete_at timestamp NOT NULL DEFAULT '0000-00-00 00:00:00',
  user_id int(11) NOT NULL,
  FOREIGN key(user_id) REFERENCES User(user_id)
);

CREATE TABLE copy (
  copy_id int(11) NOT NULL PRIMARY key,
  book_id varchar(11) NOT NULL,
  copy_qr_code longblob NOT NULL,
  copy_stat enum('borrowed','available','unavailable') DEFAULT NULL,
  FOREIGN key(book_id) REFERENCES Book(book_id)
);

CREATE TABLE field (
  field_id varchar(11) NOT NULL PRIMARY key,
  book_id varchar(11) NOT NULL,
  field_name varchar(250) DEFAULT NULL,
  field_code varchar(3) DEFAULT NULL,
  field_indicator_one varchar(1) DEFAULT NULL,
  field_indicator_two varchar(1) DEFAULT NULL,
  FOREIGN key(book_id) REFERENCES Book(book_id)
);

CREATE TABLE subfield (
  sub_id int(10) NOT NULL PRIMARY key AUTO_INCREMENT,
  sub_name varchar(250) DEFAULT NULL,
  sub_code varchar(2) DEFAULT NULL,
  sub_value varchar(1000) DEFAULT NULL,
  field_id varchar(11) NOT NULL,
  FOREIGN key(field_id) REFERENCES Field(field_id)
);