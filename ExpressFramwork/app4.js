const express = require('express')
const app3=express()
app3.get('/',function(req,resp){
    resp.send("IT Department")
})
app3.get('/insert',function(req,resp){
    console.log("In insert")
    resp.send("hello insert")
})
app3.get('./insert/:id',function(req,resp){
    const id=req.params.id
    resp.send("id is "+id)
})
app3.get('/insert',function(req,resp)
{
    console.log("in insert abc")
    const abc=req.query.abc
    resp.send("data is "+abc)
})
app3.listen(8080,function(req,resp){
    console.log("server started...")
})