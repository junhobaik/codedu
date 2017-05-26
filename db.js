db.parts.drop();
db.parts.insert(
	[
		{
			"part_title": "TESTING",
			"quiz": [{
					"quiz_title": "FUNCTION TEST",
					"quiz_content": "test.md",
					"problems": "test.json"
				}
			]
		},
		{
			"part_title": "Javascript Basic of Basic",
			"quiz": [
				{
					"quiz_title": "First Step",
					"quiz_content": "first_step.md",
					"problems": "first_step.json"
				},
				{
					"quiz_title": "Variable",
					"quiz_content": "variable.md",
					"problems": "variable.json"
				},
				{
					"quiz_title": "Operator",
					"quiz_content": "operator.md",
					"problems": "operator.json"
				}				
			]
		}
	]
);



/**************************** */

CREATE TABLE `codedu`.`user` (
  `user_id` INT NOT NULL AUTO_INCREMENT,
  `email` VARCHAR(128) NOT NULL,
  `password` VARCHAR(128) NOT NULL,
  `photo` VARCHAR(128) NULL DEFAULT 'castle',
  `exp` INT NULL DEFAULT 0,
  `level` INT NULL DEFAULT 1,
  `days_of_week` VARCHAR(45) NULL DEFAULT 'NNNNNNN',
  `progress` JSON NULL,
  PRIMARY KEY (`user_id`),
  UNIQUE INDEX `user_id_UNIQUE` (`user_id` ASC));

// CREATE TABLE `codedu`.`user_progress` (
//   `part_id` VARCHAR(128) NOT NULL,
//   `user_id` INT NOT NULL,
//   `part_done` VARCHAR(128) NULL DEFAULT 'N',
//   `quiz_done` VARCHAR(128) NULL DEFAULT 'NNNN',
//   INDEX `user_id_idx` (`user_id` ASC),
//   CONSTRAINT `user_id`
//     FOREIGN KEY (`user_id`)
//     REFERENCES `codedu`.`user` (`user_id`)
//     ON DELETE NO ACTION
//     ON UPDATE NO ACTION);



// 	DEFAULT '{"items": []}'