/*
SQLyog Enterprise Trial - MySQL GUI v7.11 
MySQL - 5.5.5-10.4.6-MariaDB : Database - colegio
*********************************************************************
*/

/*!40101 SET NAMES utf8 */;

/*!40101 SET SQL_MODE=''*/;

/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;

CREATE DATABASE /*!32312 IF NOT EXISTS*/`colegio` /*!40100 DEFAULT CHARACTER SET latin1 */;

USE `colegio`;

/*Table structure for table `asigna_materia_docente` */

DROP TABLE IF EXISTS `asigna_materia_docente`;

CREATE TABLE `asigna_materia_docente` (
  `id_amd` int(45) NOT NULL AUTO_INCREMENT,
  `id_docente` int(44) DEFAULT NULL,
  `id_materia` int(45) DEFAULT NULL,
  `id_periodo` int(45) DEFAULT NULL,
  PRIMARY KEY (`id_amd`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

/*Data for the table `asigna_materia_docente` */

/*Table structure for table `docentes` */

DROP TABLE IF EXISTS `docentes`;

CREATE TABLE `docentes` (
  `id_docente` int(11) NOT NULL AUTO_INCREMENT,
  `nombre_docente` varchar(45) DEFAULT NULL,
  `edad` varchar(45) DEFAULT NULL,
  `correo` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`id_docente`)
) ENGINE=InnoDB AUTO_INCREMENT=8 DEFAULT CHARSET=latin1;

/*Data for the table `docentes` */

insert  into `docentes`(`id_docente`,`nombre_docente`,`edad`,`correo`) values (1,'alexander','19','alexander@gmail.com'),(2,'camila','20','camila@gmail.com'),(3,'nicolas','22','nicolas@gmail.com');

/*Table structure for table `estudiantes` */

DROP TABLE IF EXISTS `estudiantes`;

CREATE TABLE `estudiantes` (
  `id_estudiantes` int(11) NOT NULL AUTO_INCREMENT,
  `nombre_estudiante` varchar(45) DEFAULT NULL,
  `edad` int(45) DEFAULT NULL,
  `correo` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`id_estudiantes`)
) ENGINE=InnoDB AUTO_INCREMENT=8 DEFAULT CHARSET=latin1;

/*Data for the table `estudiantes` */

insert  into `estudiantes`(`id_estudiantes`,`nombre_estudiante`,`edad`,`correo`) values (1,'carlos',20,'carlos@gmail.com'),(2,'maria',18,'maria@gmail.com'),(3,'lorena',19,'lorena@gmail.com');

/*Table structure for table `materia` */

DROP TABLE IF EXISTS `materia`;

CREATE TABLE `materia` (
  `id_materia` int(11) NOT NULL AUTO_INCREMENT,
  `materia` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`id_materia`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=latin1;

/*Data for the table `materia` */

insert  into `materia`(`id_materia`,`materia`) values (1,'español'),(2,'matematicas'),(3,'ciencia');

/*Table structure for table `notas` */

DROP TABLE IF EXISTS `notas`;

CREATE TABLE `notas` (
  `id_notas` int(11) NOT NULL AUTO_INCREMENT,
  `id_docente` int(11) DEFAULT NULL,
  `id_materia` int(11) DEFAULT NULL,
  `nota` int(45) DEFAULT NULL,
  `id_periodo` int(11) DEFAULT NULL,
  PRIMARY KEY (`id_notas`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=latin1;

/*Data for the table `notas` */

insert  into `notas`(`id_notas`,`id_docente`,`id_materia`,`nota`,`id_periodo`) values (1,NULL,NULL,4,NULL);

/*Table structure for table `periodo_academico` */

DROP TABLE IF EXISTS `periodo_academico`;

CREATE TABLE `periodo_academico` (
  `id_periodo` int(11) NOT NULL AUTO_INCREMENT,
  `periodo` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`id_periodo`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=latin1;

/*Data for the table `periodo_academico` */

insert  into `periodo_academico`(`id_periodo`,`periodo`) values (1,'uno'),(2,'dos'),(5,'tres');

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
