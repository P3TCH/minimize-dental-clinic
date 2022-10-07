-- MariaDB dump 10.19  Distrib 10.8.3-MariaDB, for osx10.17 (arm64)
--
-- Host: localhost    Database: dentist
-- ------------------------------------------------------
-- Server version	10.8.3-MariaDB

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `address`
--

DROP TABLE IF EXISTS `address`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `address` (
  `userid` int(20) NOT NULL AUTO_INCREMENT,
  `housenumber` varchar(20) NOT NULL,
  `street` varchar(100) NOT NULL,
  `district` varchar(100) NOT NULL,
  `province` varchar(100) NOT NULL,
  `zipcode` varchar(20) NOT NULL,
  PRIMARY KEY (`userid`)
) ENGINE=InnoDB AUTO_INCREMENT=24 DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `address`
--

LOCK TABLES `address` WRITE;
/*!40000 ALTER TABLE `address` DISABLE KEYS */;
INSERT INTO `address` VALUES
(1,'455','รังสิต','ธัญบุรี','ปทุมธานี','12130'),
(6,'556','ลาดพร้าวตัดใหม่','เมือง','เมือง','กรุงเทพ'),
(7,'965','หน้าเมือง','เมือง','ตราด','60951'),
(8,'245','คนเดิน','ลาดพร้าว','กทม','11100'),
(9,'28/65','ข้าวสาร','เมือง','เชี้ยงใหม่','30355'),
(10,'88/16','หน้าบ้าน','ไรดี','ปทุมธานี','11132'),
(11,'321','บ้านใหม่','เมือง','ธนบุรี','60950'),
(12,'65','นิวไลน์','เมือง','ขอนแก่น','13333'),
(13,'33','หน้าปากซอย','เมือง','บุรีรัม','12144'),
(15,'1/2','เจริญกรุง','ดุสิต','บางกอก','10010'),
(16,'446','-','หนองกะโดน','กรุงเทพ','10000'),
(17,'555','ดาวอังคาร','แม่น้ำ','กรุงเทพ','11120'),
(18,'110','ดำรงรักษ์','บ้านบาตร','Bangkok Metropolis ','10100'),
(19,'123','ดาวอังคาร','นิวยอก','เจ้าพระยา','66743'),
(20,'23','-','หนองใหญ่','สระอำ','45678'),
(21,'23','-','-','-','1'),
(22,'101/19','ถนนใหญ่','เมือง','ลพบุรี','15000'),
(23,'321','บ้านใหม่','เมือง','ธนบุรี','; INSERT INTO addres');
/*!40000 ALTER TABLE `address` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `appointment`
--

DROP TABLE IF EXISTS `appointment`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `appointment` (
  `appid` int(20) NOT NULL AUTO_INCREMENT,
  `userid` varchar(20) NOT NULL,
  `docid` varchar(20) NOT NULL,
  `treatmentinfo` varchar(100) NOT NULL,
  `price` varchar(100) NOT NULL,
  `time` varchar(30) NOT NULL,
  `date` varchar(30) NOT NULL,
  `status` varchar(20) NOT NULL,
  PRIMARY KEY (`appid`)
) ENGINE=InnoDB AUTO_INCREMENT=25 DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `appointment`
--

LOCK TABLES `appointment` WRITE;
/*!40000 ALTER TABLE `appointment` DISABLE KEYS */;
INSERT INTO `appointment` VALUES
(16,'8','6','แก้อาการง่วง','300','11.22','2022-04-03','close'),
(24,'1','12','ปวดฟันมากๆๆๆๆๆๆๆ','','20.20','2022-05-13','open');
/*!40000 ALTER TABLE `appointment` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `users`
--

DROP TABLE IF EXISTS `users`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `users` (
  `userid` int(20) NOT NULL AUTO_INCREMENT,
  `email` varchar(100) NOT NULL,
  `password` varchar(100) NOT NULL,
  `tel` varchar(100) NOT NULL,
  `birthday` varchar(100) NOT NULL,
  `age` varchar(100) NOT NULL,
  `firstname` varchar(100) NOT NULL,
  `lastname` varchar(100) NOT NULL,
  `gender` varchar(1) NOT NULL,
  `citizenid` varchar(100) NOT NULL,
  `type` varchar(100) NOT NULL,
  PRIMARY KEY (`userid`)
) ENGINE=InnoDB AUTO_INCREMENT=23 DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `users`
--

LOCK TABLES `users` WRITE;
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
INSERT INTO `users` VALUES
(1,'petch@gmail.com','$2b$10$yNfm.07fYkoSFJnwNypfvuS7gu2sGwtowMp99K8gpe4E6CbuRXkK6','0996665656','1992-04-07','1','Petch','Zx','M','123123','patient'),
(6,'doc@gmail.com','$2b$10$lwkAAo/sgkk7MZPE/seeAe/Rma3yhJ2A5LTKxjVfxZJYWFhG1GjFm','0888888888','2022-04-07','1','หมอสุนิล','เดนทิสส','F','1132658896566','doctor'),
(7,'admin@gmail.com','$2b$10$v7b9MU2g3dA4pKrlB60KaeQaRnIlUmQqNV9/Hdeh0D.v6SVOWCgza','0956662314','2001-04-01','1','admin','tester01','M','1132500014544','admin'),
(8,'patient@gmail.com','$2b$10$R/ObTwVchtsJ0g1XA0MFwOEzA.XDhwCiB/XAIFXAGrOGz7sLl9OPe','0841114524','1995-02-01','1','patient','tester01','M','1102533148569','patient'),
(9,'doc2@gmail.com','$2b$10$dFDZuxK4OkKD3zLDKodBTukP2Ur6B/oyl5nT6wAA53EYG5M5Fqm..','0335556852','1990-02-01','1','doctor2','tester2','F','1325554478','doctor'),
(10,'som@gmail.com','$2b$10$fX92hMLTgOGQ1BlyCttZBO5wzvqQLyk0k9nT/be3Nw8OB5vuD35hu','0865554124','1984-12-09','1','สมชาย','หมายปอง','N','1144455665325','patient'),
(11,'doc3@gmail.com','$2b$10$CfSMmXRUzvWPuI/ZArkSv.EmpLBRTox.bOiX3rmsihrHWt/G92jbm','0888966565','1985-02-01','1','หมอดี','ฉี่เฉียงๆ','M','3325556565','doctor'),
(12,'newdoc@gmail.com','$2b$10$uaf/ey3KxV0sIEvoWtzcy.VHmHWGJ.ni7Nj8piIDGe1YFjhZvu01u','0889996666','1965-12-01','1','หมอใหม่','ใจดี','M','113222565658','doctor'),
(13,'admin2@gmail.com','$2b$10$vphx69A1wVokXGuOn0DnB./.mfbXrQyuLRqb5V5UTXxPwao10slI6','0999999999','1976-11-03','1','พนักงานใหม่','ใจดุ','N','1135622003333','admin'),
(15,'666@livemail.com','$2b$10$ho/dmKtT.Kt/WTh2IKJYd.ufrT2s3GF9oPiUUz39bNKnbcpmrFhKS','0666666666','1897-06-09','1','สมหมาย','ตายตรงนู้น','M','666','admin'),
(16,'tanong@gmail.com','$2b$10$OkN8wmjvSIP4VWZNhkpyzueb2VrqYZm7rbeDH3I48GOZcm1xX04Hu','090009777','2001-06-20','1','ทะทงทวย','คงควรคอย','F','11333111','patient'),
(17,'iyakan.kea@dome.tu.ac.th','$2b$10$wR439VkaQLR6mdNdNivwoOwqCLZLoj6BIOpGqAG7AXb3Qr9ivmSvO','0967104884','2002-02-03','1','อัยการ','เขมะสถิตย์','M','1234593874','patient'),
(18,'Niracha.aew@gmail.com','$2b$10$t0ZYwb2nxW1gyhU.1svUOe3ljk18CN.T86gNcgE.qMTRNxZ7O/Rd6','0614070155','2001-09-11','1','นิรชา','เจียกวธัญญู','F','74123987456321','patient'),
(19,'sakhowtu@gmail.com','$2b$10$cgxq9bEIQCKb5wv4vnfrY.cqS9izltBkH9iTXc26aby5Nt7Kiz4f.','0887656789','2021-10-13','1','สาราวิศา','ไม้ขนุน','M','5643876938','patient'),
(20,'fun@gmail.com','$2b$10$ZtDx6irPz5XZ9IjmissPJe3vUoPlW1KShfmR3R3XN1Uvyy6sRA1BS','0999889998','2000-08-18','1','ฟัน','แล้วทิ้ง','N','12345678','doctor'),
(21,'kee@gmail.com','$2b$10$AiKc.O.2udzO4WO9HNsfe.vD7D3r9e2FAL97hlspceu3eX14smudy','989489938','2022-05-14','1','กี๋','คงควรคอย','M','12334455','admin'),
(22,'peechud@hotmail.com','$2b$10$A9QyD5bRYF7AX3rDJC8NGe733vpCIdObyNFbBSEkExFPfMGRvm76u','0830423655','2021-08-24','1','พลพัฒน์','เพ็ชรล้อม','M','1160101739068','patient');
/*!40000 ALTER TABLE `users` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2022-10-08  1:20:37
