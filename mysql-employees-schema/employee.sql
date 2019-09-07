CREATE DATABASE  IF NOT EXISTS `users_project`;
USE `users_project`;

--
-- Table structure for table `employee`
--

DROP TABLE IF EXISTS `users`;

CREATE TABLE `users` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `user_name` varchar(150) DEFAULT NULL,
  `first_name` varchar(100) DEFAULT NULL,
  `last_name` varchar(100) DEFAULT NULL,
  `password` varchar(100) DEFAULT NULL,
  `email` varchar(115) DEFAULT NULL,
  unique(email),
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=1 DEFAULT CHARSET=latin1;

insert into users(user_name,first_name,last_name,password,email)
values ('ahmed eid' , 'ahmed', 'eid' , '12345s','a@g.com')