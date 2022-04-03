var mongodbclient=require("mongodb").MongoClient

var url="mongodb://127.0.0.1:27017/"
mongodbclient.connect(url,(error:any,db:any)=>{
    if (error) throw error
    console.log("db.connected")
    
var dbo=db.db('dbdotdb')
var query={id:3}


dbo.collection('user1').deleteOne(query,(error:any,res:any)=>{
    if (error) throw error
    console.log("value updated")
    db.close()

    
})
})