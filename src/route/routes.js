const create = require('./create');
const read = require('./read');
const update = require('./update');
const remove = require('./delete')
module.exports = function(app, db) {  
    create(app, db);
    read(app, db);
    remove(app, db);
    update(app, db);
};



      