var requireOption = require('../common').requireOption;
/* 
 * All rights reserved © 2017 Legow Hosting Kft.
 */

module.exports = function (objectRepository) {
    var taskModel = requireOption(objectRepository, 'taskModel');    
    
    return function (req,res,next) {
        taskModel.find({})
                .populate('_state','name')
                .populate('_assignedTo','name')
                .exec((err, result) => {
            if(err) {
                console.log(err);
            }    
            res.tpl.tasks = result;
            next();
        });
    };
};