module.exports = function(app, db){
app.post('/notes', (req, res)=>{
   note = {text: req.body.desc, title: req.body.title}
    db.collection('Notes').insert(note, (err, result) =>{
        if (err)
        console.log(err);
        console.log(result);
        
        
    })
    
    res.send('Hello')
});
};