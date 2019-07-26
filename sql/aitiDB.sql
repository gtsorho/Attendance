-- phpMyAdmin SQL Dump
-- version 4.8.5
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1:3306
-- Generation Time: Jul 26, 2019 at 06:09 PM
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
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=237 DEFAULT CHARSET=latin1;

--
-- Dumping data for table `actiontable`
--

INSERT INTO `actiontable` (`id`, `staffname`, `staffid`, `checkInDate`, `checkInTime`, `checkOutTime`, `display`) VALUES
(221, 'FIRE BURN THEM', 'AITI-12345678', '2019-07-26', '04:54:48', NULL, 'seen'),
(219, 'FIRE BURN THEM', 'AITI-12345678', '2019-07-26', '04:49:19', NULL, 'seen'),
(220, 'DUNAMIS', 'AITI-12121212', '2019-07-26', '04:54:55', NULL, 'seen'),
(218, 'FIRE BURN THEM', 'AITI-12345678', '2019-07-26', '04:48:22', NULL, 'seen'),
(217, 'FIRE BURN THEM', 'AITI-12345678', '2019-07-26', '04:44:10', NULL, 'seen'),
(213, 'FIRE BURN THEM', 'AITI-12345678', '2019-07-26', '04:36:37', NULL, 'seen'),
(214, 'FIRE BURN THEM', 'AITI-12345678', '2019-07-26', '04:39:49', NULL, 'seen'),
(215, 'FIRE BURN THEM', 'AITI-12345678', '2019-07-26', '04:41:33', NULL, 'seen'),
(216, 'FIRE BURN THEM', 'AITI-12345678', '2019-07-26', '04:42:58', NULL, 'seen'),
(209, 'FIRE BURN THEM', 'AITI-12345678', '2019-07-26', '03:25:02', NULL, 'seen'),
(208, 'DUNAMIS', 'AITI-12121212', '2019-07-26', '03:25:09', NULL, 'seen'),
(205, 'George', 'AITI-33225544', '2019-07-26', '03:19:17', NULL, 'seen'),
(204, 'DUNAMIS', 'AITI-12121212', '2019-07-26', '03:19:13', NULL, 'seen'),
(196, 'DUNAMIS', 'AITI-12121212', '2019-07-26', '03:14:11', NULL, 'seen'),
(197, 'George', 'AITI-33225544', '2019-07-26', '03:16:22', NULL, 'seen'),
(198, 'DUNAMIS', 'AITI-12121212', '2019-07-26', '03:16:00', NULL, 'seen'),
(199, 'DUNAMIS', 'AITI-12121212', '2019-07-26', '03:17:19', NULL, 'seen'),
(200, 'George', 'AITI-33225544', '2019-07-26', '03:17:23', NULL, 'seen'),
(201, 'George', 'AITI-33225544', '2019-07-26', '03:18:13', NULL, 'seen'),
(211, 'DUNAMIS', 'AITI-12121212', '2019-07-26', '04:05:42', '04:09:01', 'seen'),
(190, 'George', 'AITI-33225544', '2019-07-26', '03:04:53', NULL, 'seen'),
(191, 'George', 'AITI-33225544', '2019-07-26', '03:06:57', NULL, 'seen'),
(192, 'George', 'AITI-33225544', '2019-07-26', '03:08:16', NULL, 'seen'),
(193, 'DUNAMIS', 'AITI-12121212', '2019-07-26', '03:04:45', '03:06:52', 'seen'),
(194, 'George', 'AITI-33225544', '2019-07-26', '03:12:52', '03:13:04', 'seen'),
(186, 'George', 'AITI-33225544', '2019-07-26', '02:58:21', '02:59:33', 'seen'),
(187, 'George', 'AITI-33225544', '2019-07-26', '03:02:01', NULL, 'seen'),
(188, 'George', 'AITI-33225544', '2019-07-26', '03:03:11', NULL, 'seen'),
(182, 'DUNAMIS', 'AITI-12121212', '2019-07-26', '02:56:54', NULL, 'seen'),
(183, 'Godspower', 'AITI-12345678', '2019-07-26', '02:56:44', NULL, 'seen'),
(212, 'FIRE BURN THEM', 'AITI-12345678', '2019-07-26', '04:28:37', NULL, 'seen'),
(210, 'FIRE BURN THEM', 'AITI-12345678', '2019-07-26', '04:09:38', '04:09:44', 'seen'),
(207, 'DUNAMIS', 'AITI-12121212', '2019-07-26', '03:22:22', NULL, 'seen'),
(206, 'FIRE BURN THEM', 'AITI-12345678', '2019-07-26', '03:22:14', NULL, 'seen'),
(203, 'FIRE BURN THEM', 'AITI-12345678', '2019-07-26', '02:58:17', '02:59:19', 'seen'),
(202, 'DUNAMIS', 'AITI-12121212', '2019-07-26', '03:18:22', NULL, 'seen'),
(195, 'George', 'AITI-33225544', '2019-07-26', '03:14:15', NULL, 'seen'),
(189, 'DUNAMIS', 'AITI-12121212', '2019-07-26', '03:01:57', NULL, 'seen'),
(185, 'DUNAMIS', 'AITI-12121212', '2019-07-26', '02:59:28', NULL, 'seen'),
(184, 'DUNAMIS', 'AITI-12121212', '2019-07-26', '02:58:29', NULL, 'seen'),
(181, 'George', 'AITI-33225544', '2019-07-26', '02:57:08', NULL, 'seen'),
(180, 'Godspower', 'AITI-12345678', '2019-07-26', '02:44:21', '02:47:34', 'seen'),
(179, 'DUNAMIS', 'AITI-12121212', '2019-07-26', '02:56:04', NULL, 'seen'),
(178, 'DUNAMIS', 'AITI-12121212', '2019-07-26', '02:55:05', NULL, 'seen'),
(177, 'DUNAMIS', 'AITI-12121212', '2019-07-26', '02:47:41', NULL, 'seen'),
(176, 'DUNAMIS', 'AITI-12121212', '2019-07-26', '02:45:50', NULL, 'seen'),
(175, 'DUNAMIS', 'AITI-12121212', '2019-07-26', '02:44:30', NULL, 'seen'),
(174, 'Godspower', 'AITI-12345678', '2019-07-26', '02:44:05', NULL, 'seen'),
(173, 'Godspower', 'AITI-12345678', '2019-07-26', '02:40:53', '02:42:42', 'seen'),
(172, 'DUNAMIS', 'AITI-12121212', '2019-07-26', '02:43:24', NULL, 'seen'),
(171, 'DUNAMIS', 'AITI-12121212', '2019-07-26', '02:42:54', NULL, 'seen'),
(170, 'DUNAMIS', 'AITI-12121212', '2019-07-26', '02:41:03', NULL, 'seen'),
(169, 'Godspower', 'AITI-12345678', '2019-07-26', '02:30:45', '02:35:43', 'seen'),
(168, 'George', 'AITI-33225544', '2019-07-26', '02:37:08', NULL, 'seen'),
(167, 'DUNAMIS', 'AITI-12121212', '2019-07-26', '02:37:33', NULL, 'seen'),
(166, 'DUNAMIS', 'AITI-12121212', '2019-07-26', '02:35:49', NULL, 'seen'),
(165, 'George', 'AITI-33225544', '2019-07-26', '02:36:06', NULL, 'seen'),
(164, 'DUNAMIS', 'AITI-12121212', '2019-07-26', '02:34:31', NULL, 'seen'),
(163, 'DUNAMIS', 'AITI-12121212', '2019-07-26', '02:30:53', NULL, 'seen'),
(162, 'George', 'AITI-33225544', '2019-07-26', '02:29:49', NULL, 'seen'),
(161, 'Godspower', 'AITI-12345678', '2019-07-26', '02:29:53', NULL, 'seen'),
(160, 'DUNAMIS', 'AITI-12121212', '2019-07-26', '02:30:03', NULL, 'seen'),
(159, 'Godspower', 'AITI-12345678', '2019-07-26', '02:29:21', NULL, 'seen'),
(158, 'Godspower', 'AITI-12345678', '2019-07-26', '02:28:46', NULL, 'seen'),
(157, 'DUNAMIS', 'AITI-12121212', '2019-07-26', '02:28:56', NULL, 'seen'),
(156, 'DUNAMIS', 'AITI-12121212', '2019-07-26', '02:16:45', NULL, 'seen'),
(155, 'Godspower', 'AITI-12345678', '2019-07-26', '02:25:18', NULL, 'seen'),
(154, 'Godspower', 'AITI-12345678', '2019-07-26', '02:19:05', NULL, 'seen'),
(153, 'George', 'AITI-33225544', '2019-07-26', '02:19:10', NULL, 'seen'),
(152, 'Godspower', 'AITI-12345678', '2019-07-26', '02:14:05', '02:16:38', 'seen'),
(151, 'George', 'AITI-33225544', '2019-07-26', '02:16:33', NULL, 'seen'),
(222, 'FIRE BURN THEM', 'AITI-12345678', '2019-07-26', '04:56:47', NULL, 'seen'),
(223, 'DUNAMIS', 'AITI-12121212', '2019-07-26', '04:56:55', NULL, 'seen'),
(224, 'FIRE BURN THEM', 'AITI-12345678', '2019-07-26', '04:57:22', '04:57:28', 'seen'),
(225, 'DUNAMIS', 'AITI-12121212', '2019-07-26', '04:57:34', NULL, 'seen'),
(226, 'FIRE BURN THEM', 'AITI-12345678', '2019-07-26', '04:59:15', NULL, 'seen'),
(227, 'FIRE BURN THEM', 'AITI-12345678', '2019-07-26', '05:00:16', NULL, 'seen'),
(228, 'DUNAMIS', 'AITI-12121212', '2019-07-26', '05:00:27', NULL, 'seen'),
(229, 'DUNAMIS', 'AITI-12121212', '2019-07-26', '05:37:46', NULL, 'seen'),
(230, 'FIRE BURN THEM', 'AITI-12345678', '2019-07-26', '05:37:39', NULL, 'seen'),
(231, 'George', 'AITI-33225544', '2019-07-26', '05:43:11', '05:43:17', 'seen'),
(232, 'DUNAMIS', 'AITI-12121212', '2019-07-26', '05:41:46', NULL, 'seen'),
(233, 'FIRE BURN THEM', 'AITI-12345678', '2019-07-26', '05:41:37', NULL, 'seen'),
(234, 'DUNAMIS', 'AITI-12121212', '2019-07-26', '05:44:02', NULL, 'seen'),
(235, 'FIRE BURN THEM', 'AITI-12345678', '2019-07-26', '05:43:54', NULL, 'seen'),
(236, 'George', 'AITI-33225544', '2019-07-26', '05:43:49', NULL, NULL);

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
) ENGINE=MyISAM AUTO_INCREMENT=347 DEFAULT CHARSET=latin1;

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
