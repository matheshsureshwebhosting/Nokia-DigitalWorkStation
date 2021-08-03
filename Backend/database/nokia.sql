-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Aug 03, 2021 at 10:51 PM
-- Server version: 10.4.19-MariaDB
-- PHP Version: 8.0.7

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `nokia`
--

-- --------------------------------------------------------

--
-- Table structure for table `otatable`
--

CREATE TABLE `otatable` (
  `id` int(255) NOT NULL,
  `date` varchar(255) DEFAULT NULL,
  `machine_Sl_No` varchar(255) DEFAULT NULL,
  `shift` varchar(255) DEFAULT NULL,
  `checked_by` varchar(255) DEFAULT NULL,
  `ota1` varchar(255) DEFAULT NULL,
  `ota2` varchar(255) DEFAULT NULL,
  `ota3` varchar(255) DEFAULT NULL,
  `ota4` varchar(255) DEFAULT NULL,
  `ota5` varchar(255) DEFAULT NULL,
  `ota6` varchar(255) DEFAULT NULL,
  `ota7` varchar(255) DEFAULT NULL,
  `ota8` varchar(255) DEFAULT NULL,
  `ota9` varchar(255) DEFAULT NULL,
  `ota10` varchar(255) DEFAULT NULL,
  `Otatime1` varchar(255) DEFAULT NULL,
  `Otatime2` varchar(255) DEFAULT NULL,
  `Otatime3` varchar(255) DEFAULT NULL,
  `Otatime4` varchar(255) DEFAULT NULL,
  `Otatime5` varchar(255) DEFAULT NULL,
  `Otatime6` varchar(255) DEFAULT NULL,
  `Otatime7` varchar(255) DEFAULT NULL,
  `Otatime8` varchar(255) DEFAULT NULL,
  `Otatime9` varchar(255) DEFAULT NULL,
  `Otatime10` varchar(255) DEFAULT NULL,
  `description` varchar(255) DEFAULT NULL,
  `status` varchar(255) DEFAULT NULL,
  `average` varchar(255) DEFAULT NULL,
  `statuslists` varchar(255) DEFAULT NULL,
  `applieddate` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `pvatable`
--

CREATE TABLE `pvatable` (
  `id` int(255) NOT NULL,
  `date` varchar(255) DEFAULT NULL,
  `machine_Sl_No` varchar(255) DEFAULT NULL,
  `shift` varchar(255) DEFAULT NULL,
  `checked_by` varchar(255) DEFAULT NULL,
  `pressure_guage_value` varchar(255) DEFAULT NULL,
  `pva1` varchar(255) DEFAULT NULL,
  `pva2` varchar(255) DEFAULT NULL,
  `pva3` varchar(255) DEFAULT NULL,
  `pva4` varchar(255) DEFAULT NULL,
  `pva5` varchar(255) DEFAULT NULL,
  `pva6` varchar(255) DEFAULT NULL,
  `pva7` varchar(255) DEFAULT NULL,
  `pva8` varchar(255) DEFAULT NULL,
  `pva9` varchar(255) DEFAULT NULL,
  `pva10` varchar(255) DEFAULT NULL,
  `pva11` varchar(255) DEFAULT NULL,
  `pva12` varchar(255) DEFAULT NULL,
  `pva13` varchar(255) DEFAULT NULL,
  `pvatime1` varchar(255) DEFAULT NULL,
  `pvatime2` varchar(255) DEFAULT NULL,
  `pvatime3` varchar(255) DEFAULT NULL,
  `pvatime4` varchar(255) DEFAULT NULL,
  `pvatime5` varchar(255) DEFAULT NULL,
  `pvatime6` varchar(255) DEFAULT NULL,
  `pvatime7` varchar(255) DEFAULT NULL,
  `pvatime8` varchar(255) DEFAULT NULL,
  `pvatime9` varchar(255) DEFAULT NULL,
  `pvatime10` varchar(255) DEFAULT NULL,
  `pvatime11` varchar(255) DEFAULT NULL,
  `pvatime12` varchar(255) DEFAULT NULL,
  `pvatime13` varchar(255) DEFAULT NULL,
  `description` varchar(255) DEFAULT NULL,
  `status` varchar(255) DEFAULT NULL,
  `average` varchar(255) DEFAULT NULL,
  `statuslists` varchar(255) DEFAULT NULL,
  `applieddate` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `solderingtable`
--

CREATE TABLE `solderingtable` (
  `id` int(255) NOT NULL,
  `date` varchar(255) DEFAULT NULL,
  `time` varchar(255) DEFAULT NULL,
  `shift` varchar(255) DEFAULT NULL,
  `defaultTemp` int(11) NOT NULL,
  `machine_Sl_No` varchar(255) DEFAULT NULL,
  `station` varchar(255) DEFAULT NULL,
  `catridge_used` varchar(255) DEFAULT NULL,
  `temperature` varchar(255) DEFAULT NULL,
  `checked_by` varchar(255) DEFAULT NULL,
  `description` varchar(255) DEFAULT NULL,
  `status` varchar(255) DEFAULT NULL,
  `applieddate` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `thermaltable`
--

CREATE TABLE `thermaltable` (
  `id` int(255) NOT NULL,
  `date` varchar(255) DEFAULT NULL,
  `machine_Sl_No` varchar(255) DEFAULT NULL,
  `shift` varchar(255) DEFAULT NULL,
  `checked_by` varchar(255) DEFAULT NULL,
  `thermal1` varchar(255) DEFAULT NULL,
  `thermal2` varchar(255) DEFAULT NULL,
  `thermal3` varchar(255) DEFAULT NULL,
  `thermal4` varchar(255) DEFAULT NULL,
  `thermal5` varchar(255) DEFAULT NULL,
  `thermal6` varchar(255) DEFAULT NULL,
  `thermal7` varchar(255) DEFAULT NULL,
  `thermal8` varchar(255) DEFAULT NULL,
  `thermal9` varchar(255) DEFAULT NULL,
  `thermal10` varchar(255) DEFAULT NULL,
  `thermal11` varchar(255) DEFAULT NULL,
  `thermal12` varchar(255) DEFAULT NULL,
  `thermal13` varchar(255) DEFAULT NULL,
  `thermaltime1` varchar(255) DEFAULT NULL,
  `thermaltime2` varchar(255) DEFAULT NULL,
  `thermaltime3` varchar(255) DEFAULT NULL,
  `thermaltime4` varchar(255) DEFAULT NULL,
  `thermaltime5` varchar(255) DEFAULT NULL,
  `thermaltime6` varchar(255) DEFAULT NULL,
  `thermaltime7` varchar(255) DEFAULT NULL,
  `thermaltime8` varchar(255) DEFAULT NULL,
  `thermaltime9` varchar(255) DEFAULT NULL,
  `thermaltime10` varchar(255) DEFAULT NULL,
  `thermaltime11` varchar(255) DEFAULT NULL,
  `thermaltime12` varchar(255) DEFAULT NULL,
  `thermaltime13` varchar(255) DEFAULT NULL,
  `description` varchar(255) DEFAULT NULL,
  `status` varchar(255) DEFAULT NULL,
  `average` varchar(255) DEFAULT NULL,
  `statuslists` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id` int(11) NOT NULL,
  `name` varchar(256) NOT NULL,
  `email` varchar(256) NOT NULL,
  `password` varchar(256) NOT NULL,
  `userid` varchar(256) NOT NULL,
  `token` varchar(256) NOT NULL,
  `role` varchar(256) NOT NULL,
  `create_date` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `name`, `email`, `password`, `userid`, `token`, `role`, `create_date`) VALUES
(10, 'john', 'john@gmail.com', '$2a$10$ygLlVmdF4pVTXEmF9POROu0ngG5CycyLATO3IZZDlPHFUjf0mrHJy', '1625731484585', 'eyJhbGciOiJIUzI1NiJ9.MTYyNTczMTQ4NDU4NQ.5FDPIWLJzBVA6nmy2Uiolm9n2d3EUUfJ7AQGxLxnYEM', 'Tester', '2021-07-15 04:51:46');

-- --------------------------------------------------------

--
-- Table structure for table `uwatable`
--

CREATE TABLE `uwatable` (
  `id` int(255) NOT NULL,
  `date` varchar(255) DEFAULT NULL,
  `machine_Sl_No` varchar(255) DEFAULT NULL,
  `shift` varchar(255) DEFAULT NULL,
  `checked_by` varchar(255) DEFAULT NULL,
  `uwa1` varchar(255) DEFAULT NULL,
  `uwa2` varchar(255) DEFAULT NULL,
  `uwa3` varchar(255) DEFAULT NULL,
  `uwa4` varchar(255) DEFAULT NULL,
  `uwa5` varchar(255) DEFAULT NULL,
  `uwa6` varchar(255) DEFAULT NULL,
  `uwa7` varchar(255) DEFAULT NULL,
  `uwa8` varchar(255) DEFAULT NULL,
  `uwa9` varchar(255) DEFAULT NULL,
  `uwa10` varchar(255) DEFAULT NULL,
  `uwatime1` varchar(255) DEFAULT NULL,
  `uwatime2` varchar(255) DEFAULT NULL,
  `uwatime3` varchar(255) DEFAULT NULL,
  `uwatime4` varchar(255) DEFAULT NULL,
  `uwatime5` varchar(255) DEFAULT NULL,
  `uwatime6` varchar(255) DEFAULT NULL,
  `uwatime7` varchar(255) DEFAULT NULL,
  `uwatime8` varchar(255) DEFAULT NULL,
  `uwatime9` varchar(255) DEFAULT NULL,
  `uwatime10` varchar(255) DEFAULT NULL,
  `description` varchar(255) DEFAULT NULL,
  `status` varchar(255) DEFAULT NULL,
  `average` varchar(255) DEFAULT NULL,
  `statuslists` varchar(255) DEFAULT NULL,
  `applieddate` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `vaccumetable`
--

CREATE TABLE `vaccumetable` (
  `id` int(255) NOT NULL,
  `date` varchar(255) DEFAULT NULL,
  `shift` varchar(255) DEFAULT NULL,
  `machine_Sl_No` varchar(255) DEFAULT NULL,
  `checked_by` varchar(255) DEFAULT NULL,
  `pressure_guage_value` varchar(255) DEFAULT NULL,
  `process1_result` varchar(255) DEFAULT NULL,
  `process2_result` varchar(255) DEFAULT NULL,
  `process3_result` varchar(255) DEFAULT NULL,
  `process4_result` varchar(255) DEFAULT NULL,
  `process5_result` varchar(255) DEFAULT NULL,
  `process6_result` varchar(255) DEFAULT NULL,
  `process7_result` varchar(255) DEFAULT NULL,
  `process8_result` varchar(255) DEFAULT NULL,
  `process9_result` varchar(255) DEFAULT NULL,
  `process1_time` varchar(255) DEFAULT NULL,
  `process2_time` varchar(255) DEFAULT NULL,
  `process3_time` varchar(255) DEFAULT NULL,
  `process4_time` varchar(255) DEFAULT NULL,
  `process5_time` varchar(255) DEFAULT NULL,
  `process6_time` varchar(255) DEFAULT NULL,
  `process7_time` varchar(255) DEFAULT NULL,
  `process8_time` varchar(255) DEFAULT NULL,
  `process9_time` varchar(255) DEFAULT NULL,
  `description` varchar(255) DEFAULT NULL,
  `status` varchar(255) DEFAULT NULL,
  `average` varchar(255) DEFAULT NULL,
  `statuslists` varchar(255) DEFAULT NULL,
  `applieddate` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Indexes for dumped tables
--

--
-- Indexes for table `otatable`
--
ALTER TABLE `otatable`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `pvatable`
--
ALTER TABLE `pvatable`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `solderingtable`
--
ALTER TABLE `solderingtable`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `thermaltable`
--
ALTER TABLE `thermaltable`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `vaccumetable`
--
ALTER TABLE `vaccumetable`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `otatable`
--
ALTER TABLE `otatable`
  MODIFY `id` int(255) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `pvatable`
--
ALTER TABLE `pvatable`
  MODIFY `id` int(255) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `solderingtable`
--
ALTER TABLE `solderingtable`
  MODIFY `id` int(255) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `thermaltable`
--
ALTER TABLE `thermaltable`
  MODIFY `id` int(255) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;

--
-- AUTO_INCREMENT for table `vaccumetable`
--
ALTER TABLE `vaccumetable`
  MODIFY `id` int(255) NOT NULL AUTO_INCREMENT;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
