CREATE DATABASE codedu;

-- grant all on codedu.* to 'admin'@'%';
-- flush privileges

USE codedu;

CREATE TABLE `codedu`.`user` (
  `user_id` INT NOT NULL AUTO_INCREMENT,
  `email` VARCHAR(128) NOT NULL,
  `password` VARCHAR(128) NOT NULL,
  `photo` VARCHAR(128) NULL DEFAULT 'castle',
  `exp` INT NULL DEFAULT 0,
  `level` INT NULL DEFAULT 1,
  `days_of_week` VARCHAR(45) NULL DEFAULT 'NNNNNNN',
  PRIMARY KEY (`user_id`),
  UNIQUE INDEX `user_id_UNIQUE` (`user_id` ASC));

CREATE TABLE `codedu`.`user_progress` (
  `part_id` VARCHAR(128) NOT NULL,
  `user_id` INT NOT NULL,
  `part_done` VARCHAR(128) NULL DEFAULT 'N',
  `quiz_done` VARCHAR(128) NULL DEFAULT 'NNNN',
  INDEX `user_id_idx` (`user_id` ASC),
  CONSTRAINT `user_id`
    FOREIGN KEY (`user_id`)
    REFERENCES `codedu`.`user` (`user_id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION);
