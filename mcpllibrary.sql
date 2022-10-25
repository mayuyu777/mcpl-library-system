-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Oct 25, 2022 at 04:30 AM
-- Server version: 10.4.24-MariaDB
-- PHP Version: 7.4.29

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `mcpllibrary`
--

-- --------------------------------------------------------

--
-- Table structure for table `address`
--

CREATE TABLE `address` (
  `add_id` int(11) NOT NULL,
  `add_street_num` varchar(100) DEFAULT NULL,
  `add_main_address` varchar(350) DEFAULT NULL,
  `add_sec_address` varchar(350) DEFAULT NULL,
  `add_city` varchar(100) DEFAULT NULL,
  `add_state` varchar(100) DEFAULT NULL,
  `add_zip` varchar(4) DEFAULT NULL,
  `add_country` varchar(100) DEFAULT NULL,
  `user_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `book`
--

CREATE TABLE `book` (
  `book_id` varchar(11) NOT NULL,
  `book_quantity` int(11) NOT NULL,
  `book_image` varchar(1000) DEFAULT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp(),
  `updated_at` timestamp NOT NULL DEFAULT '0000-00-00 00:00:00' ON UPDATE current_timestamp(),
  `delete_at` timestamp NOT NULL DEFAULT '0000-00-00 00:00:00',
  `user_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `book`
--

INSERT INTO `book` (`book_id`, `book_quantity`, `book_image`, `created_at`, `updated_at`, `delete_at`, `user_id`) VALUES
('44b31a98', 1, '0838949703.01.MZZZZZZZ.jpg', '2022-10-17 08:17:08', '0000-00-00 00:00:00', '0000-00-00 00:00:00', 0),
('79c441be', 1, '0593084667.01.MZZZZZZZ.jpg', '2022-10-17 05:57:21', '0000-00-00 00:00:00', '0000-00-00 00:00:00', 0);

-- --------------------------------------------------------

--
-- Table structure for table `copy`
--

CREATE TABLE `copy` (
  `copy_id` int(11) NOT NULL,
  `book_id` varchar(11) NOT NULL,
  `copy_qr_code` longblob NOT NULL,
  `copy_stat` enum('borrowed','available','unavailable') DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `field`
--

CREATE TABLE `field` (
  `field_id` varchar(11) NOT NULL,
  `book_id` varchar(11) NOT NULL,
  `field_name` varchar(250) DEFAULT NULL,
  `field_code` varchar(3) DEFAULT NULL,
  `field_indicator_one` varchar(1) DEFAULT NULL,
  `field_indicator_two` varchar(1) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `field`
--

INSERT INTO `field` (`field_id`, `book_id`, `field_name`, `field_code`, `field_indicator_one`, `field_indicator_two`) VALUES
('1c169d28', '44b31a98', 'DATE AND TIME OF LATEST TRANSACTION', '005', NULL, NULL),
('26e1a0fd', '79c441be', 'ADDED ENTRY ELEMENTS', '942', '', ''),
('2d422acc', '79c441be', 'DATE AND TIME OF LATEST TRANSACTION', '005', NULL, NULL),
('2e3f2a73', '44b31a98', 'CATALOGING SOURCE', '040', '#', '#'),
('3441f07e', '79c441be', 'CONTROL NUMBER IDENTIFIER', '003', NULL, NULL),
('34eb8dbc', '44b31a98', 'CONTROL NUMBER', '001', NULL, NULL),
('41833e9b', '44b31a98', 'Location', '852', '#', '#'),
('4e8e0af9', '44b31a98', 'CONTROL NUMBER IDENTIFIER', '003', NULL, NULL),
('52249225', '44b31a98', 'FIXED-LENGTH DATA ELEMENTS--GENERAL INFORMATION', '008', NULL, NULL),
('604b1300', '44b31a98', 'LIBRARY OF CONGRESS CONTROL NUMBER', '010', '#', '#'),
('6581b7f3', '79c441be', 'MAIN ENTRY--PERSONAL NAME', '100', '1', '#'),
('6c3bb669', '44b31a98', 'LIBRARY OF CONGRESS CALL NUMBER', '050', '', ''),
('6f699042', '79c441be', 'CATALOGING SOURCE', '040', '#', '#'),
('70c8459a', '79c441be', 'CONTROL NUMBER', '001', NULL, NULL),
('75dca48a', '79c441be', 'TITLE STATEMENT', '245', '1', '4'),
('79ff7bb0', '44b31a98', 'PHYSICAL DESCRIPTION', '300', '#', '#'),
('7bb044db', '44b31a98', 'INTERNATIONAL STANDARD BOOK NUMBER', '020', '#', '#'),
('7bdbab37', '79c441be', 'PHYSICAL DESCRIPTION', '300', '#', '#'),
('7f3891bc', '79c441be', 'FIXED-LENGTH DATA ELEMENTS--GENERAL INFORMATION', '008', NULL, NULL),
('86f7cdd1', '79c441be', 'INTERNATIONAL STANDARD BOOK NUMBER', '020', '#', '#'),
('902444d3', '44b31a98', 'TITLE STATEMENT', '245', '1', '0'),
('911a94ec', '44b31a98', 'BIBLIOGRAPHY, ETC. NOTE', '504', '#', '#'),
('9afeae59', '79c441be', 'DEWEY DECIMAL CLASSIFICATION NUMBER', '082', '1', '4'),
('9d33dedb', '79c441be', 'BIBLIOGRAPHY, ETC. NOTE', '504', '#', '#'),
('a2376ee5', '44b31a98', 'SYSTEM CONTROL NUMBER', '035', '', ''),
('a62ea38f', '44b31a98', 'ADDED ENTRY ELEMENTS', '942', '#', '#'),
('b7f53742', '79c441be', 'LEADER', '000', NULL, NULL),
('beb1ac98', '44b31a98', 'VARYING FORM OF TITLE', '246', '3', '0'),
('c700350a', '79c441be', 'SUBJECT ADDED ENTRY--TOPICAL TERM', '650', '#', '0'),
('c9f025db', '79c441be', 'EDITION STATEMENT ', '250', '#', '#'),
('d325989d', '79c441be', 'LIBRARY OF CONGRESS CALL NUMBER', '050', '1', '4'),
('db0c78e6', '79c441be', 'Location', '852', '', ''),
('de2b49e9', '79c441be', 'SYSTEM CONTROL NUMBER', '035', '#', '#'),
('e4e61b9b', '44b31a98', 'LEADER', '000', NULL, NULL),
('e613e96e', '79c441be', 'NATIONAL BIBLIOGRAPHIC AGENCY CONTROL NUMBER', '016', '7', '#'),
('efc2daa4', '44b31a98', 'FORMATTED CONTENTS NOTE', '505', '0', '#'),
('efd7dc68', '44b31a98', 'MAIN ENTRY--PERSONAL NAME', '100', '1', '#'),
('f3a578fb', '44b31a98', 'SUMMARY, ETC.', '520', '#', '#'),
('fa1c052d', '44b31a98', 'DEWEY DECIMAL CLASSIFICATION NUMBER', '082', '', '');

-- --------------------------------------------------------

--
-- Table structure for table `subfield`
--

CREATE TABLE `subfield` (
  `sub_id` int(10) NOT NULL,
  `sub_name` varchar(250) DEFAULT NULL,
  `sub_code` varchar(2) DEFAULT NULL,
  `sub_value` varchar(1000) DEFAULT NULL,
  `field_id` varchar(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `subfield`
--

INSERT INTO `subfield` (`sub_id`, `sub_name`, `sub_code`, `sub_value`, `field_id`) VALUES
(57, 'fixed length control field', '00', '00864nam  22002417a 4500', 'b7f53742'),
(58, 'control field', '00', 'on1301474293', '70c8459a'),
(59, 'control field', '00', 'OSt', '3441f07e'),
(60, 'control field', '00', '20221016223910.0', '2d422acc'),
(61, 'fixed length control field', '00', '20221016b        xxu||||| |||| 00| 0 eng d', '7f3891bc'),
(62, 'Source', '2', 'JP-ToKJK', 'e613e96e'),
(63, 'Record control number', 'a', 'BC12764612', 'e613e96e'),
(64, 'International Standard Book Number', 'a', '9780593084663', '86f7cdd1'),
(65, 'Qualifying information', 'q', 'paperback', '86f7cdd1'),
(66, 'System control number', 'a', '(OCoLC)1301474293', 'de2b49e9'),
(67, 'Original cataloging agency', 'a', 'KEI', '6f699042'),
(68, 'Language of cataloging', 'b', 'eng', '6f699042'),
(69, 'Transcribing agency', 'c', 'KEI', '6f699042'),
(70, 'Modifying agency', 'd', 'IVV', '6f699042'),
(71, 'Description conventions', 'e', 'rda', '6f699042'),
(72, 'Classification number', 'a', 'HA29', 'd325989d'),
(73, 'Item number', 'b', '.H2498 2021', 'd325989d'),
(74, 'Edition number', '2', '23', '9afeae59'),
(75, 'Classification number', 'a', '001.4/22', '9afeae59'),
(76, 'Personal name', 'a', 'Harford, Tim', '6581b7f3'),
(77, 'Dates associated with a name', 'd', '1973', '6581b7f3'),
(78, 'Relator term', 'e', 'author', '6581b7f3'),
(79, 'Title', 'a', 'The data detective :', '75dca48a'),
(80, 'Remainder of title', 'b', 'ten easy rules to make sense of statistics ', '75dca48a'),
(81, 'Statement of responsibility, etc.', 'c', 'Tim Harford', '75dca48a'),
(82, 'Edition statement', 'a', 'First Rverhead trade paperback edition.', 'c9f025db'),
(83, 'Extent', 'a', '325 page', '7bdbab37'),
(84, 'Dimensions', 'c', '21 cm', '7bdbab37'),
(85, 'Bibliography, etc', 'a', 'Includes bibliographical references and index.', '9d33dedb'),
(86, 'Topical term or geographic name as entry element', 'c', 'Statistics', 'c700350a'),
(87, 'General subdivision', 'k', 'Methodology.', 'c700350a'),
(88, 'Location', 'a', 'Main Library', 'db0c78e6'),
(89, 'Sublocation or collection', 'b', 'Library Science Collection', 'db0c78e6'),
(90, 'Shelving location', 'c', '1st Floor', 'db0c78e6'),
(91, 'Source of classification or shelving scheme', 'a', 'Dewey Decimal Classification', '26e1a0fd'),
(92, 'item type', 'b', 'Journal', '26e1a0fd'),
(93, 'Use Restrictions', 'c', 'No Restrictions', '26e1a0fd'),
(94, 'Damaged Status', 'd', 'Not Damaged', '26e1a0fd'),
(95, 'Collection Code', 'e', 'Non Fiction', '26e1a0fd'),
(96, 'Language', 'i', 'All', '26e1a0fd'),
(97, 'Current Location', 'f', 'Main Library', '26e1a0fd'),
(98, 'Shelving Location', 'g', '1st Floor', '26e1a0fd'),
(99, 'Date acquired', 'h', '09/12/22', '26e1a0fd'),
(100, 'Source of Acquisition', 'i', 'IDK', '26e1a0fd'),
(101, 'fixed length control field', '00', '02018nam  22002537a 4500', 'e4e61b9b'),
(102, 'control field', '00', 'on1267402389', '34eb8dbc'),
(103, 'control field', '00', 'OSt', '4e8e0af9'),
(104, 'control field', '00', '202210171636.0', '1c169d28'),
(105, 'fixed length control field', '00', '20221017b        xxu||||| |||| 00| 0 eng d', '52249225'),
(106, 'LC control number', 'a', '2021034871', '604b1300'),
(107, 'International Standard Book Number', 'a', '9780838949702', '7bb044db'),
(108, 'Qualifying information', 'q', 'paperback', '7bb044db'),
(109, 'System control number', 'a', '(OCoLC)1267402389', 'a2376ee5'),
(110, 'Canceled/invalid control number', 'z', '(OCoLC)1237252956', 'a2376ee5'),
(111, 'Original cataloging agency', 'a', 'DLC', '2e3f2a73'),
(112, 'Language of cataloging', 'b', 'eng', '2e3f2a73'),
(113, 'Transcribing agency', 'c', 'DLC', '2e3f2a73'),
(114, 'Modifying agency', 'd', 'OCLCO', '2e3f2a73'),
(115, 'Description conventions', 'e', 'rda', '2e3f2a73'),
(116, 'Classification number', 'a', 'ZA3088', '6c3bb669'),
(117, 'Item number', 'b', '.T39 2022', '6c3bb669'),
(118, 'Edition number', '2', '23', 'fa1c052d'),
(119, 'Classification number', 'a', '028.7', 'fa1c052d'),
(120, 'Personal name', 'a', 'Taylor, Natalie Greene', 'efd7dc68'),
(121, 'Dates associated with a name', 'd', '1987', 'efd7dc68'),
(122, 'Relator term', 'e', 'author', 'efd7dc68'),
(123, 'Title', 'a', 'Foundations of information literacy /', '902444d3'),
(124, 'Statement of responsibility, etc.', 'c', 'Natalie Greene Taylor, Paul T. Jaeger.', '902444d3'),
(125, 'Title proper/short title', 'a', 'Information literacy', 'beb1ac98'),
(126, 'Extent', 'a', 'xiii, 245 pages', '79ff7bb0'),
(127, 'Dimensions', 'c', '26 cm', '79ff7bb0'),
(128, 'Bibliography, etc', 'a', 'Includes bibliographical references (pages 181-214) and index.', '911a94ec'),
(129, 'Formatted contents note', 'a', 'Searching for Information (Literacy) -- Defining Information Literacy -- Information Literacy in the Context of Information Behavior and Everyday Life -- The Operationalization of Information Literacy, Part I: Academic and School Libraries -- The Operationalization of Information Literacy, Part II: Public Libraries, Special Libraries, and Archives -- Information Literacy Is a Human Right -- Controlling Information Literacy -- Literacy Politics and Literacy Policies -- Why Libraries? -- The Field Guide to Incorrect Information -- A Brief History of Advertising, Propaganda, and Other Delights -- Pandemic-Style Disinformation, Misinformation, and Illiteracy -- Toward Lifelong Information Literacy -- Advocacy, Activism, and Self-Reflection for Information (Literacy) Professionals -- The Social Infrastructure for Information Literacy -- The Lifelong Information Literacy Society.', 'efc2daa4'),
(130, 'Summary, etc', 'a', '\"Drawing upon both the latest research and best practices, the authors address information literacy in ways relevant for all types of libraries, providing both the broader context and a range of applied strategies and programs for promoting and teaching information literacy\"--', 'f3a578fb'),
(131, 'Location', 'a', 'Main Library', '41833e9b'),
(132, 'Shelving location', 'c', '1st Floor', '41833e9b'),
(133, 'Source of classification or shelving scheme', 'a', 'Dewey Decimal Classification', 'a62ea38f'),
(134, 'item type', 'b', 'Journal', 'a62ea38f'),
(135, 'Use Restrictions', 'c', 'No Restrictions', 'a62ea38f'),
(136, 'Damaged Status', 'd', 'Not Damaged', 'a62ea38f'),
(137, 'Collection Code', 'e', 'Library Science Collection', 'a62ea38f'),
(138, 'Language', 'i', 'English', 'a62ea38f'),
(139, 'Current Location', 'f', 'Main Library', 'a62ea38f'),
(140, 'Shelving Location', 'g', '1st Floor', 'a62ea38f'),
(141, 'Date acquired', 'h', '08/12/20', 'a62ea38f'),
(142, 'Source of Acquisition', 'i', 'IDK', 'a62ea38f');

-- --------------------------------------------------------

--
-- Table structure for table `user`
--

CREATE TABLE `user` (
  `user_id` int(11) NOT NULL,
  `user_type` enum('admin','librarian','staff','patron') NOT NULL,
  `user_fname` varchar(100) NOT NULL,
  `user_lname` varchar(100) NOT NULL,
  `user_mname` varchar(100) NOT NULL,
  `user_email` varchar(250) NOT NULL,
  `user_pass` varchar(100) NOT NULL,
  `user_gender` enum('male','female','other') DEFAULT NULL,
  `user_contact` varchar(12) NOT NULL,
  `user_stat` enum('online','offline') DEFAULT NULL,
  `user_registration_date` date DEFAULT NULL,
  `user_expiration_date` date DEFAULT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  `updated_at` timestamp NOT NULL DEFAULT '0000-00-00 00:00:00',
  `delete_at` timestamp NOT NULL DEFAULT '0000-00-00 00:00:00'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `user`
--

INSERT INTO `user` (`user_id`, `user_type`, `user_fname`, `user_lname`, `user_mname`, `user_email`, `user_pass`, `user_gender`, `user_contact`, `user_stat`, `user_registration_date`, `user_expiration_date`, `created_at`, `updated_at`, `delete_at`) VALUES
(0, 'admin', 'Peaches', 'Sagnoy', 'Invento', 'admin@gmail.com', '$2b$10$J7M1/raWudYKYAwFOSbST.SgBK4lOEzvuIzPIcXse1n4qE7wX/mlm', 'female', '09772103342', 'online', NULL, NULL, '2022-10-06 15:01:40', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(123, 'librarian', 'Natalie', 'Sagnoy', 'Invento', 'Librarian@gmail.com', '$2b$10$J7M1/raWudYKYAwFOSbST.SgBK4lOEzvuIzPIcXse1n4qE7wX/mlm', 'female', '09772013342', 'online', NULL, NULL, '2022-10-22 04:46:14', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(222, 'staff', 'Philippe', 'Tan', '', 'staff@gmail.com', '$2b$10$J7M1/raWudYKYAwFOSbST.SgBK4lOEzvuIzPIcXse1n4qE7wX/mlm', 'male', '09772013342', 'online', NULL, NULL, '2022-10-22 04:47:33', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(333, 'patron', 'Justin Rey', 'Collado', '', 'patron@gmail.com', '$2b$10$J7M1/raWudYKYAwFOSbST.SgBK4lOEzvuIzPIcXse1n4qE7wX/mlm', 'male', '09772013342', 'online', NULL, NULL, '2022-10-22 04:49:31', '0000-00-00 00:00:00', '0000-00-00 00:00:00');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `address`
--
ALTER TABLE `address`
  ADD PRIMARY KEY (`add_id`),
  ADD KEY `user_id` (`user_id`);

--
-- Indexes for table `book`
--
ALTER TABLE `book`
  ADD PRIMARY KEY (`book_id`),
  ADD KEY `user_id` (`user_id`);

--
-- Indexes for table `copy`
--
ALTER TABLE `copy`
  ADD PRIMARY KEY (`copy_id`),
  ADD KEY `book_id` (`book_id`);

--
-- Indexes for table `field`
--
ALTER TABLE `field`
  ADD PRIMARY KEY (`field_id`),
  ADD KEY `field_ibfk_1` (`book_id`);

--
-- Indexes for table `subfield`
--
ALTER TABLE `subfield`
  ADD PRIMARY KEY (`sub_id`),
  ADD KEY `subfield_ibfk_1` (`field_id`);

--
-- Indexes for table `user`
--
ALTER TABLE `user`
  ADD PRIMARY KEY (`user_id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `subfield`
--
ALTER TABLE `subfield`
  MODIFY `sub_id` int(10) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=143;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `address`
--
ALTER TABLE `address`
  ADD CONSTRAINT `address_ibfk_1` FOREIGN KEY (`user_id`) REFERENCES `user` (`user_id`);

--
-- Constraints for table `book`
--
ALTER TABLE `book`
  ADD CONSTRAINT `book_ibfk_1` FOREIGN KEY (`user_id`) REFERENCES `user` (`user_id`);

--
-- Constraints for table `copy`
--
ALTER TABLE `copy`
  ADD CONSTRAINT `copy_ibfk_1` FOREIGN KEY (`book_id`) REFERENCES `book` (`book_id`);

--
-- Constraints for table `field`
--
ALTER TABLE `field`
  ADD CONSTRAINT `field_ibfk_1` FOREIGN KEY (`book_id`) REFERENCES `book` (`book_id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `subfield`
--
ALTER TABLE `subfield`
  ADD CONSTRAINT `subfield_ibfk_1` FOREIGN KEY (`field_id`) REFERENCES `field` (`field_id`) ON DELETE CASCADE ON UPDATE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
