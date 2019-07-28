-- phpMyAdmin SQL Dump
-- version 4.8.5
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1:3306
-- Generation Time: Jul 28, 2019 at 12:06 PM
-- Server version: 5.7.26
-- PHP Version: 7.2.18

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `aiti`
--

-- --------------------------------------------------------

--
-- Table structure for table `actiontable`
--

DROP TABLE IF EXISTS `actiontable`;
CREATE TABLE IF NOT EXISTS `actiontable` (
  `id` int(3) NOT NULL AUTO_INCREMENT,
  `staffname` varchar(25) NOT NULL,
  `staffid` varchar(20) NOT NULL,
  `checkInDate` date NOT NULL,
  `checkInTime` time NOT NULL,
  `checkOutTime` time DEFAULT NULL,
  `display` varchar(10) DEFAULT NULL,
  `actionDate` date NOT NULL,
  `actionTime` time NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=239 DEFAULT CHARSET=latin1;

--
-- Dumping data for table `actiontable`
--

INSERT INTO `actiontable` (`id`, `staffname`, `staffid`, `checkInDate`, `checkInTime`, `checkOutTime`, `display`, `actionDate`, `actionTime`) VALUES
(237, 'FIRE BURN THEM', 'AITI-12345678', '2019-07-28', '11:56:38', NULL, 'seen', '2019-07-28', '11:56:53'),
(238, 'FIRE BURN THEM', 'AITI-12345678', '2019-07-28', '11:57:44', NULL, 'seen', '2019-07-28', '11:58:05');

-- --------------------------------------------------------

--
-- Table structure for table `logtable`
--

DROP TABLE IF EXISTS `logtable`;
CREATE TABLE IF NOT EXISTS `logtable` (
  `id` int(30) NOT NULL AUTO_INCREMENT,
  `staffId` varchar(15) NOT NULL,
  `checkInDate` date DEFAULT NULL,
  `checkInTime` time NOT NULL,
  `checkOutTime` time DEFAULT NULL,
  `Day` varchar(15) NOT NULL,
  `logBool` int(1) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=349 DEFAULT CHARSET=latin1;

--
-- Dumping data for table `logtable`
--

INSERT INTO `logtable` (`id`, `staffId`, `checkInDate`, `checkInTime`, `checkOutTime`, `Day`, `logBool`) VALUES
(346, 'AITI-12121212', '2019-07-26', '05:57:52', NULL, 'Friday', 1),
(345, 'AITI-12345678', '2019-07-26', '05:57:45', NULL, 'Friday', 1);

-- --------------------------------------------------------

--
-- Table structure for table `staffinfo`
--

DROP TABLE IF EXISTS `staffinfo`;
CREATE TABLE IF NOT EXISTS `staffinfo` (
  `staffId` varchar(15) NOT NULL,
  `staffname` tinytext NOT NULL,
  `adminPassword` varchar(16) DEFAULT NULL,
  PRIMARY KEY (`staffId`)
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

--
-- Dumping data for table `staffinfo`
--

INSERT INTO `staffinfo` (`staffId`, `staffname`, `adminPassword`) VALUES
('AITI-33225544', 'George', NULL),
('AITI-12121212', 'DUNAMIS', '11111111'),
('AITI-12345678', 'FIRE BURN THEM', '22222222');
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
