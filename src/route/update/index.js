var ObjectID = require('mongodb').ObjectID;
module.exports = function(app, db) {  
    
    app.put('/notes/:id', (req, res) => {
        const id = req.params.id;
        const details = { '_id': new ObjectID(id) }; 
        const note = { title: req.body.title, desc: req.body.desc }  

    db.collection('notes').update(details, note, (err, item) => {      
            if (err) {        
                res.send({'error':'An error has occurred'});      
              } else { 
                    res.send( "Updated");     
                       }   
         }); 
    });
};



      