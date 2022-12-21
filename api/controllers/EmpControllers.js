const db = require('../../db/mysql');

module.exports = {
    list: (req, res) => {
        let sql = 'Select * from emp99';

        db.query(sql, (err, data) =>{
            if(err) throw err;
            res.json(data);
        })
    },
    add: (req, res) => {
        let sql = 'Insert into emp99 set ?';
        let input = req.body;

        db.query(sql, [input], (err, data) => {
            if(err) throw err;
            res.json({message: 'Insert Success!'})
        })
    },
    detail: (req, res) => {
        let sql = 'Select * from emp99 where id = ?';
        let empId = req.params.employeeId;

        db.query(sql, [empId], (err, data) => {
            if(err) throw err;
            res.json(data);
        })
    },
    update: (req, res) => {
        let sql = 'Update emp99 set ? where id = ?';
        let input = req.body;
        let employeeId = req.params.employeeId;

        db.query(sql, [input, employeeId], (err, data) => {
            if(err) throw err;
            res.json({message: 'Update id '+employeeId+' success!'})
        })
    },
    delete: (req, res) =>{
        let sql = 'Delete from emp99 where id = ?';
        let employeeId = req.params.employeeId;

        db.query(sql, [employeeId], (err, data) =>{
            if(err) throw err;
            res.json({message: 'Delete Success!'})
        })
    }

}