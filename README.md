# CRUD-API_NODE_EXPRESS_MONGO
basic CRUD operation nodeJS api boilerplate with MongoDB &amp; Express.

If you have any queries feel free to ping me via https://motasimfoad.com/contact 

Its a simple note keeping api containing 2 felds, Title and Description. Which take post request and intermingle with MongoDB on Localhost. 

###Properties & Endpoints : 

CREATE endpoint >> localhost:4200/notes/
         >> POST body {
             title : "String" 
             desc : "String"
         }

UPDATE endpoint >> localhost:4200/notes/{id}
         >> PUT body {
             title : "String" 
             desc : "String"
         }

READ/FIND endpoint >> localhost:4200/notes/{id}
         >> GET 

DELETE endpoint >> localhost:4200/notes/{id}
         >> DELETE 
