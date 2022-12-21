const verify = require('./api/middlewares/VerifyToken');

const app = function(app){
    let authenController = require('./api/controllers/AuthenController');
    let empController = require('./api/controllers/EmpControllers');

    app.route('/verify')
    .post(authenController.verify);
    

    app.route('/employees')
    .get(verify, empController.list)
    .post(verify, empController.add);

    app.route('/employees/:employeeId')
    .get(verify, empController.detail)
    .put(verify, empController.update)
    .delete(verify, empController.delete);

};

module.exports = app;