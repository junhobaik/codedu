const express = require('express');
const router = express.Router();
const LocalStorage = require('node-localstorage').LocalStorage,
    localStorage = new LocalStorage('./scratch');

const mysqlConfig = require('../../../../config/mysql_config');

//MySQL
let mysql = require('mysql');
let connection = mysql.createConnection(mysqlConfig);

router.post('/', function(req, res) {
    const partTitle = localStorage.getItem('part_title');
    const quizTitle = localStorage.getItem('quiz_title');


    const score = req.body.score;
    const email = req.body.email;
    const length = req.body.length;

    const query = connection.query('Select * from user where email = ?', [email], function(err, rows) {
        if(err) return err;


        if(rows) {
            let progressJson = JSON.parse(rows[0].progress);
            let progressItem = progressJson.items;

            if(length/score <= 2) {
                let updateStr = "";

                const partIndex = progressItem.findIndex((items) => {
                    return items.part_title === partTitle;
                });

                if (partIndex === -1) {

                    if (quizTitle !== "parttest") {
                        updateStr = '{"part_title": "' + partTitle + '", "quiz_title": ["' + quizTitle + '"], "is_test_done": 0}';
                    } else {
                        updateStr = '{"part_title": "' + partTitle + '", "quiz_title": [], "is_test_done": 1}';
                    }
                    progressItem.push(JSON.parse(updateStr));

                } else {
                    if (quizTitle === "parttest") {
                        progressItem[partIndex].is_test_done = 1;
                    } else {
                        if (progressItem[partIndex].quiz_title.indexOf(quizTitle) !== -1) {
                        } else {
                            progressItem[partIndex].quiz_title.push(quizTitle);
                        }
                    }
                }
            }

            const progress = JSON.stringify(progressJson);

            const currentExp = rows[0].exp;
            const totalExp = currentExp + score * 5;


            let daysOfWeek = rows[0].days_of_week;  // 월화수목금토일
            let today = new Date().getDay();  // 일월화수목금토 index: 0,1,2,3,4,5,6
            let lastQuizDate = new Date().toISOString().substr(0,10);  // 2017-05-26

            today--;

            if(today < 0) {
                today = 6;
            }

            daysOfWeek = daysOfWeek.substr(0, today) + 'Y' + daysOfWeek.substr(today + 1);

            const update = connection.query('UPDATE user set exp = ?, progress = ?, days_of_week = ?, last_quiz_date = ? where email = ?', [totalExp, progress, daysOfWeek, lastQuizDate, email], function(err, rows) {
                if(err) return err;

                res.json({result: "ok", exp: totalExp})
            })
        }
    })
});

module.exports = router;