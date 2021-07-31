-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Jul 31, 2021 at 09:19 AM
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
  `statuslists` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `otatable`
--

INSERT INTO `otatable` (`id`, `date`, `machine_Sl_No`, `shift`, `checked_by`, `ota1`, `ota2`, `ota3`, `ota4`, `ota5`, `ota6`, `ota7`, `ota8`, `ota9`, `ota10`, `Otatime1`, `Otatime2`, `Otatime3`, `Otatime4`, `Otatime5`, `Otatime6`, `Otatime7`, `Otatime8`, `Otatime9`, `Otatime10`, `description`, `status`, `average`, `statuslists`) VALUES
(1, '2021-06-28 13:16:20', 'Not Provide', 'Shift A', 'john', 'Yes', 'Yes', 'No', 'Yes', 'No', 'Yes', 'No', 'Yes', 'No', 'Yes', '1', '1', '1', '1', '1', '0', '1', '0', '1', '1', 'Not Provided', 'In Complete', '6/10', 'Ota3,Ota5,Ota7,Ota9'),
(2, '2021-06-28 16:11:35', 'Not Provide', 'Shift B', 'ddd', 'Yes', 'Yes', 'Yes', 'Yes', 'No', 'No', 'Yes', 'Yes', 'No', 'No', '2', '3', '0', '0', '0', '1', '1', '0', '0', '1', 'Not Provided', 'In Complete', '6/10', 'Ota5,Ota6,Ota9,ota10'),
(3, '2021-06-28 16:13:44', 'Not Provide', 'Shift B', 'dd', 'Yes', 'Yes', 'Yes', 'Yes', 'Yes', 'Yes', 'Yes', 'Yes', 'Yes', 'Yes', '0', '0', '1', '0', '0', '0', '0', '0', '0', '1', 'Not Provided', 'Complete', '10 / 10', '');

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
  `statuslists` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `pvatable`
--

INSERT INTO `pvatable` (`id`, `date`, `machine_Sl_No`, `shift`, `checked_by`, `pressure_guage_value`, `pva1`, `pva2`, `pva3`, `pva4`, `pva5`, `pva6`, `pva7`, `pva8`, `pva9`, `pva10`, `pva11`, `pva12`, `pva13`, `pvatime1`, `pvatime2`, `pvatime3`, `pvatime4`, `pvatime5`, `pvatime6`, `pvatime7`, `pvatime8`, `pvatime9`, `pvatime10`, `pvatime11`, `pvatime12`, `pvatime13`, `description`, `status`, `average`, `statuslists`) VALUES
(1, '2021-06-28 17:7:41', 'Not Provide', 'Shift B', 'john', '22', 'Yes', 'Yes', 'No', 'No', 'Yes', 'Yes', 'No', 'Yes', 'Yes', 'No', 'No', 'Yes', 'Yes', '1', '0', '0', '0', '0', '0', '2', '1', '0', '0', '0', '0', '0', 'Not Provided', 'In Complete', '5/10', 'pva3,pva4,pva7,pva10,pva11'),
(2, '2021-07-15 12:26:30', 'Not Provide', 'Shift A', 'john', 'undefined', 'Yes', 'Yes', 'No', 'Yes', 'Yes', 'No', 'Yes', 'No', 'No', 'Yes', 'No', 'Yes', 'No', '2', '1', '0', '0', '0', '0', '4', '1', '0', '1', '1', '1', '1', 'Not Provided', 'In Complete', '4/10', 'pva3,pva6,pva8,pva9,pva11,pva13'),
(3, '2021-07-15 12:29:30', 'Not Provide', 'Shift A', 'john', '100', 'Yes', 'Yes', 'Yes', 'No', 'No', 'Yes', 'No', 'Yes', 'Yes', 'Yes', 'Yes', 'Yes', 'Yes', '1', '0', '0', '0', '0', '0', '4', '0', '0', '0', '0', '0', '0', 'Not Provided', 'In Complete', '7/10', 'pva4,pva5,pva7');

-- --------------------------------------------------------

--
-- Table structure for table `solderingtable`
--

CREATE TABLE `solderingtable` (
  `id` int(255) NOT NULL,
  `date` varchar(255) DEFAULT NULL,
  `time` varchar(255) DEFAULT NULL,
  `shift` varchar(255) DEFAULT NULL,
  `machine_Sl_No` varchar(255) DEFAULT NULL,
  `station` varchar(255) DEFAULT NULL,
  `catridge_used` varchar(255) DEFAULT NULL,
  `temperature` varchar(255) DEFAULT NULL,
  `checked_by` varchar(255) DEFAULT NULL,
  `description` varchar(255) DEFAULT NULL,
  `status` varchar(255) DEFAULT NULL,
  `uploaddate` date NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `solderingtable`
--

INSERT INTO `solderingtable` (`id`, `date`, `time`, `shift`, `machine_Sl_No`, `station`, `catridge_used`, `temperature`, `checked_by`, `description`, `status`, `uploaddate`) VALUES
(1, '2021-07-30', '24', 'Shift B', 'not provide', '1', 'STTC 160 / 398°c', '398', 'k', 'Not Provided', 'Complete', '0000-00-00'),
(2, '2021-07-30', '26', 'Shift B', 'not provide', '2', 'STTC 804L / 425°c', '425', 't', 'Not Provided', 'Complete', '0000-00-00');

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
  `statuslists` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `uwatable`
--

INSERT INTO `uwatable` (`id`, `date`, `machine_Sl_No`, `shift`, `checked_by`, `uwa1`, `uwa2`, `uwa3`, `uwa4`, `uwa5`, `uwa6`, `uwa7`, `uwa8`, `uwa9`, `uwa10`, `uwatime1`, `uwatime2`, `uwatime3`, `uwatime4`, `uwatime5`, `uwatime6`, `uwatime7`, `uwatime8`, `uwatime9`, `uwatime10`, `description`, `status`, `average`, `statuslists`) VALUES
(0, '2021-06-28 13:17:51', 'Not Provide', 'Shift A', 'john', 'Yes', 'No', 'Yes', 'No', 'Yes', 'No', 'Yes', 'No', 'Yes', 'No', '1', '0', '0', '1', '0', '1', '0', '1', '0', '0', 'Not Provided', 'In Complete', '5/10', 'Uwa2,Uwa4,Uwa6,Uwa8,uwa10');

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
  `statuslists` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `vaccumetable`
--

INSERT INTO `vaccumetable` (`id`, `date`, `shift`, `machine_Sl_No`, `checked_by`, `pressure_guage_value`, `process1_result`, `process2_result`, `process3_result`, `process4_result`, `process5_result`, `process6_result`, `process7_result`, `process8_result`, `process9_result`, `process1_time`, `process2_time`, `process3_time`, `process4_time`, `process5_time`, `process6_time`, `process7_time`, `process8_time`, `process9_time`, `description`, `status`, `average`, `statuslists`) VALUES
(1, '2021-06-28 13:11:23', 'Shift A', 'dhfgh', 'john', '333', 'Yes', 'No', 'Yes', 'No', 'Yes', 'Yes', 'Yes', 'Yes', 'No', '1', '1', '0', '1', '0', '2', '0', '0', '4', 'Not Provided', 'In Complete', '6/9', 'step2,step4,step9'),
(2, '2021-07-14 17:15:36', 'Shift B', 'fff', 'fff', '333', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', '11', '24', '13', '10', '9', '8', '9', '8', '11', 'undefined', 'In Complete', '0/9', 'step1,step2,step3,step4,step5,step6,step7,step8,step9'),
(3, '2021-07-15 10:56:40', 'Shift A', 'ghf4f4', 'john', '150', 'No', 'Yes', 'No', 'No', 'Yes', 'No', 'No', 'No', 'Yes', '3', '2', '2', '4', '2', '2', '4', '3', '17', 'undefined', 'In Complete', '3/9', 'step1,step3,step4,step6,step7,step8');

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
  MODIFY `id` int(255) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `pvatable`
--
ALTER TABLE `pvatable`
  MODIFY `id` int(255) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `solderingtable`
--
ALTER TABLE `solderingtable`
  MODIFY `id` int(255) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

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
  MODIFY `id` int(255) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
