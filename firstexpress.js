var exp=require('express')
var app=exp()

app.get('/',(req,res)=>{
res.send("hello")
}
)
app.get('/home',(req,res)=>{
    res.send("welcome to my home page")
}
)
app.listen(3000,()=>{
    console.log("server started  at http://localhost:3000/");
}
)