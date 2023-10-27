-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Oct 25, 2023 at 10:09 PM
-- Server version: 10.4.28-MariaDB
-- PHP Version: 8.0.28

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `greenthumb_db`
--

-- --------------------------------------------------------

--
-- Table structure for table `allsectors`
--

CREATE TABLE `allsectors` (
  `sid` int(4) NOT NULL,
  `sec_name` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `allsectors`
--

INSERT INTO `allsectors` (`sid`, `sec_name`) VALUES
(1, 'Advanced Manufacturing'),
(2, 'Agriculture'),
(3, 'Biotech/Laboratories'),
(4, 'Colleges/Univesities'),
(5, 'Commercial Real Estate'),
(6, 'Dairy'),
(7, 'Data Centers'),
(8, 'Electrification'),
(9, 'Food Processing'),
(10, 'Government'),
(11, 'Greenhouses'),
(12, 'Grocery'),
(13, 'Healthcare'),
(14, 'Hospitality'),
(15, 'K-12 Schools'),
(16, 'LiveStock'),
(17, 'New Construction'),
(18, 'Parking Garages/Lots'),
(19, 'Public Assembly'),
(20, 'Restaurant'),
(21, 'Residental'),
(22, 'Retail'),
(23, 'Senior Living'),
(24, 'Warehouses & Cold Storage'),
(25, 'Water Distribution/Wastewater Treatment'),
(26, 'Service Retail'),
(27, 'Small/Medium sized Businesses');

-- --------------------------------------------------------

--
-- Table structure for table `programs`
--

CREATE TABLE `programs` (
  `pid` int(2) NOT NULL,
  `program_name` varchar(255) NOT NULL,
  `program_type` enum('electricity','gas') NOT NULL,
  `program_link` varchar(255) NOT NULL,
  `program_brief` varchar(255) NOT NULL,
  `employee_count` int(3) NOT NULL,
  `postal_code` varchar(255) NOT NULL,
  `annual_ele_budget` int(11) NOT NULL,
  `min_ele_consumption` int(6) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `programs`
--

INSERT INTO `programs` (`pid`, `program_name`, `program_type`, `program_link`, `program_brief`, `employee_count`, `postal_code`, `annual_ele_budget`, `min_ele_consumption`) VALUES
(1, 'Small Business Program', 'electricity', 'https://saveonenergy.ca/en/For-Your-Small-Business/Programs-and-Incentives/Small-Business-Program', 'The Save on Energy Small Business program is designed to help small businesses across Ontario make equipment improvements to reduce their energy consumption, at no cost. Leveraging the success of the former Small Business Lighting program, this new and im', 50, '', 0, 0),
(2, 'Retrofit Program', 'electricity', 'https://saveonenergy.ca/en/For-Business-and-Industry/Programs-and-incentives/Retrofit-Program/Retrofit-Program-Update', 'The Save on Energy Retrofit program offers businesses incentives to upgrade equipment, reduce energy bills, lower carbon footprints and enhance staff comfort. The program offers financial incentives through two streams.', 0, '', 0, 0),
(3, 'Existing Building Commissioning program', 'electricity', 'https://saveonenergy.ca/For-Business-and-Industry/Programs-and-incentives/Existing-Building-Commissioning-Program', 'The EBCx program offers financial incentives to commercial building owners to hire qualified commissioning providers to undertake building recommissioning at their facilities, helping them realize energy savings from improved facility operations and maint', 0, '', 0, 0),
(4, 'Strategic Energy Management program', 'electricity', 'https://saveonenergy.ca/For-Business-and-Industry/Programs-and-incentives/Strategic-Energy-Management-Program', 'he program offers organizations a two-year cohort-based learning model to small groups of professionals across Ontario. This cohort-based approach is designed to create a strong focus on learning through shared experiences with other participants, and on ', 0, '', 0, 3000000),
(5, 'Industrial Energy Efficiency Program', 'electricity', 'https://saveonenergy.ca/For-Business-and-Industry/Programs-and-incentives/Industrial-Energy-Efficiency-Program', '', 0, '', 0, 0),
(6, 'Energy Performance Program', 'electricity', 'https://saveonenergy.ca/For-Business-and-Industry/Programs-and-incentives/Energy-Performance-Program', '', 0, '', 0, 1500000),
(7, 'Local Initiatives', 'electricity', 'https://saveonenergy.ca/For-Business-and-Industry/Programs-and-incentives/Local-Initiatives', 'Ontario\'s 2021-2024 CDM Framework encourages competition and innovation through local initiatives, saving 57 MW of demand and 230 GWh of energy while addressing regional needs via cost-effective procurements.', 0, '', 0, 0),
(8, 'Building automation & controls', 'gas', 'https://www.enbridgegas.com/business-industrial/incentives-conservation/energy-solutions-by-equipment/building-automation', 'A building automation system (BAS) is an efficient way to increase a building’s flexibility to respond to a variety of operating conditions. Monitoring, managing and adjusting key energy systems from a single touchpoint is an effective way to optimize ene', 0, '', 0, 0),
(9, 'Air curtain and dock door seals', 'gas', 'https://www.enbridgegas.com/business-industrial/incentives-conservation/energy-solutions-by-equipment/space-heating-ventilation-building-envelope/air-curtains', 'Stop air leaks at the door:  With shipping and receiving doors opening and closing all day, unwanted cold or hot air can be infiltrated or lost, reducing comfort and increasing energy costs. We can help you make simple changes for immediate savings with e', 0, '', 0, 0),
(10, 'Boilers', 'gas', 'https://www.enbridgegas.com/business-industrial/incentives-conservation/energy-solutions-by-equipment/space-heating-ventilation-building-envelope/boilers', 'Giving a proper guidance and incentives based on Boilers used in different industries making it optimal system and an effective way to maximize comfort while minimizing costs', 0, '', 0, 0),
(11, 'Equipment upgrades', 'gas', 'https://www.enbridgegas.com/business-industrial/incentives-conservation/programs-and-incentives/equipment-upgrades', 'Upgrading to Energy Efficient Equipment can optimize your operations, reduce energy costs, lower your carbon footprint and create a safer and more comfortable environment for staff, affordable housing residents or customers.', 0, '', 0, 0),
(12, 'New construction', 'gas', 'https://www.enbridgegas.com/business-industrial/incentives-conservation/programs-and-incentives/new-construction', 'Building science consulting and real-time energy modelling to maximize energy performance and avoid costly changes during construction.', 0, '', 0, 0),
(13, 'Retrofits & custom projects', 'gas', 'https://www.enbridgegas.com/business-industrial/incentives-conservation/programs-and-incentives/retrofits-custom-projects\n', 'Improving energy efficiency through building retrofits is beneficial for businesses. It lowers operating expenses, enhances profits, creates a comfortable space, and reduces greenhouse gas emissions. We provide various programs and incentives for retrofit', 0, '', 0, 0),
(14, 'Energy audits & studies', 'gas', 'https://www.enbridgegas.com/business-industrial/incentives-conservation/programs-and-incentives/audits-studies-assessments', 'Analyzing energy usage in your building can uncover opportunities to enhance efficiency and cut costs. An energy audit reveals the most significant energy-saving prospects, enabling you to create a strategy for optimal energy performance. Rely on our Ener', 0, '', 0, 0),
(15, 'Fixed Incentive Program', 'gas', 'https://www.enbridgegas.com/business-industrial/incentives-conservation/programs-and-incentives/equipment-upgrades/fixed-incentive-program', '\"Whether you’re replacing end-of-life equipment or planning to buy new, the Fixed Incentive Program makes it easy to offset the cost of upgrading to energy-efficient natural gas technology.\r\n\r\nWhy to choose this program?\r\nIdentify and prioritize energy pr', 0, '', 0, 0),
(16, 'Affordable Multi-Family Housing Program', 'gas', 'https://www.enbridgegas.com/business-industrial/incentives-conservation/programs-and-incentives/retrofits-custom-projects/affordable-multi-family-housing-program', '\"The Affordable Housing Multi-Residential program provides incentives to upgrade to high-efficiency equipment. Energy Solutions Advisors assist throughout the process, ensuring energy and cost savings. The program is for social/municipal housing, shelters', 0, '', 0, 0),
(17, 'Multi-Unit Residential In-Suite Fixed Incentive Program', 'gas', 'https://www.enbridgegas.com/business-industrial/incentives-conservation/programs-and-incentives/equipment-upgrades/multi-unit-res-in-suite-fixed-incentive', 'HRVs and ERVs are ventilation systems that maintain indoor air quality while conserving energy. They transfer heat and moisture between indoor exhaust air and outdoor supply air. In the heating season, these systems raise the temperature of incoming air b', 0, '', 0, 0);

-- --------------------------------------------------------

--
-- Table structure for table `psectors`
--

CREATE TABLE `psectors` (
  `id` int(4) NOT NULL,
  `pid` int(11) NOT NULL,
  `sid` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `psectors`
--

INSERT INTO `psectors` (`id`, `pid`, `sid`) VALUES
(1, 1, 1),
(2, 1, 2),
(3, 1, 3),
(4, 1, 4),
(5, 1, 5),
(6, 1, 6),
(7, 1, 7),
(8, 1, 8),
(9, 1, 9),
(10, 1, 10),
(11, 1, 11),
(12, 1, 12),
(13, 1, 13),
(14, 1, 14),
(15, 1, 15),
(16, 1, 16),
(17, 1, 17),
(18, 1, 18),
(19, 1, 19),
(20, 1, 20),
(21, 1, 21),
(22, 1, 22),
(23, 1, 23),
(24, 1, 24),
(25, 1, 25),
(26, 1, 26),
(27, 1, 27);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `allsectors`
--
ALTER TABLE `allsectors`
  ADD PRIMARY KEY (`sid`);

--
-- Indexes for table `programs`
--
ALTER TABLE `programs`
  ADD PRIMARY KEY (`pid`);

--
-- Indexes for table `psectors`
--
ALTER TABLE `psectors`
  ADD PRIMARY KEY (`id`),
  ADD KEY `pid` (`pid`),
  ADD KEY `sid` (`sid`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `allsectors`
--
ALTER TABLE `allsectors`
  MODIFY `sid` int(4) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=28;

--
-- AUTO_INCREMENT for table `programs`
--
ALTER TABLE `programs`
  MODIFY `pid` int(2) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=18;

--
-- AUTO_INCREMENT for table `psectors`
--
ALTER TABLE `psectors`
  MODIFY `id` int(4) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=28;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `psectors`
--
ALTER TABLE `psectors`
  ADD CONSTRAINT `psectors_ibfk_1` FOREIGN KEY (`pid`) REFERENCES `programs` (`pid`),
  ADD CONSTRAINT `psectors_ibfk_2` FOREIGN KEY (`sid`) REFERENCES `allsectors` (`sid`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
