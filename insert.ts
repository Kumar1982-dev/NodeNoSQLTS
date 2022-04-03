var mongodbclient=require("mongodb").MongoClient

var url="mongodb://127.0.0.1:27017/"
mongodbclient.connect(url,(error:any,db:any)=>{
    if (error) throw error
    console.log("db.connected")
    
var dbo=db.db('dbdotdb')
var obj={id:1,name:"kumar",class:"fswd course",emailid:"kumar@gmail.com"}
var obj={id:2,name:"afiqah",class:"fswd course",emailid:"afiqah@gmail.com"}

var obj1={id:2,name:"afiqah",class:"fswd course",emailid:"afiqah@gmail.com",contact:"1234"}
dbo.collection('user1').insertOne(obj1,(error:any,res:any)=>{
    if (error) throw error
    console.log(res)
    db.close()
})

dbo.collection('user1').insertOne(obj,(error:any,res:any)=>{
    if (error) throw error
    console.log(res)
    db.close()

})


})
