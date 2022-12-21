const db = require('../../db/mysql');
const jwt = require('jsonwebtoken');

module.exports = {
    verify: (req, res) =>{
        let sql = "Select * from admin where username = ? and password = ?";
        
        db.query(sql, [req.body.username, req.body.password], (err, response) =>{
            console.log("check")
            if(err) throw err;
            if(response == ""){
                return res.status(401).send('Unauthorized');
            }else{
                console.log(response);
                const token = jwt.sign({id: response[0].id}, process.env.TOKEN_SECRET, {expiresIn: 60*60});
                console.log(token)
                res.header('authen_token', token).send(token);
            }
        })
    }
}
