import express from "express";
import maria from './consts.js';
maria.connect();  
const router = express.Router();

// 로비에 들어오면 랭킹 리스트를 보여준다.
router.get("/getrankinglist", (req, res) => {
    maria.query('SELECT userName, record ' +
     'FROM ranking order by record limit 3',
        (err, row, fields) => {
            if(!err) {         
                res.send(row);
            } else {
                console.log("err: " + err);
                res.send('err');
            }
    })
})

router.post("/saveWinnerRecord", (req, res) => {
    // 클라이언트에서 보낸 데이터를 요청에서 추출
    const { name, email, record } = req.body;
    console.log(req.body);
    // 해당 이메일이 이미 데이터베이스에 존재하는지 확인
    maria.query(
        'SELECT * FROM ranking WHERE userEmail = ?',
        [email],
        (err, rows) => {
            if (err) {
                console.error('Error checking email existence:', err);
                res.status(500).send('Error checking email existence');
            } else {
                // 이메일이 존재하는 경우, 해당 레코드를 업데이트
                if (rows.length > 0) {
                    maria.query(
                        'UPDATE ranking SET userName = ?, record = ? WHERE userEmail = ?',
                        [name, record, email],
                        (updateErr, updateResult) => {
                            if (updateErr) {
                                console.error('Error updating winner record:', updateErr);
                                res.status(500).send('Error updating winner record');
                            } else {
                                console.log('Winner record updated successfully:', updateResult);
                                res.status(200).send('Winner record updated successfully');
                            }
                        }
                    );
                } else {
                    // 이메일이 존재하지 않는 경우, 새로운 레코드를 삽입
                    maria.query(
                        'INSERT INTO ranking (userName, userEmail, record) VALUES (?, ?, ?)',
                        [name, email, record],
                        (insertErr, insertResult) => {
                            if (insertErr) {
                                console.error('Error saving winner record:', insertErr);
                                res.status(500).send('Error saving winner record');
                            } else {
                                console.log('Winner record saved successfully:', insertResult);
                                res.status(200).send('Winner record saved successfully');
                            }
                        }
                    );
                }
            }
        }
    );
});

export default router