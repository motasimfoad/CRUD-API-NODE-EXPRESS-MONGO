var ObjectID = require('mongodb').ObjectID;
module.exports = function(app, db) {  
    
    app.post('/notes', (req, res) => {    
    const note = { 
        title: req.body.title,
        desc: req.body.desc, 
    };
        
    db.collection('notes').insert(note, (err, result) => {      
        if (err) {         
            res.send({ 
                'error': 'An error has occurred' 
            }); 
              } 
                else 
            {        
                res.send(result);     
        }    
    });  
  });
  
  app.get('/notes/:id', (req, res) => {
    const id = req.params.id;
    const details = { '_id': new ObjectID(id) }; 
    console.log(details);
       
    db.collection('notes').findOne(details, (err, item) => {      
        if (err) {        
            res.send({'error':'An error has occurred'});      
          } else { 
                     res.send(item);     
                   }   
            }); 
});
};



      