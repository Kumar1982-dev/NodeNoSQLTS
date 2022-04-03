var mongodbclient=require("mongodb").MongoClient

var url="mongodb://127.0.0.1:27017/"
mongodbclient.connect(url,(error:any,db:any)=>{
    if (error) throw error
    console.log("db.connected")
    
var dbo=db.db('dbdotdb')
dbo.createCollection('user1',(error:any,db:any)=>{
    if (error) throw error 
    console.log("createdcollection")
    db.close()
})
    
        
})