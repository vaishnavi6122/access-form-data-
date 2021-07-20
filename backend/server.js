const express=require('express');
const bodyParser=require('body-parser')

const app=express();

//configure bodyparser to handle the post request
app.use(bodyParser.urlencoded({
    extended:true
}));
app.use(bodyParser.json());

app.post('/add',async(req,res)=>{
    try{
        const info=await req.body
        console.log(info)
        res.send(`the sum of two numbers is `)
    }catch(e){
        console.log("error ",e)
        res.send("404")
    }
})


app.get('/add',(req,res)=>{
   
    res.send("hello prncess");
})

app.get('/',(req,res)=>{
   
    res.send("hello");
})

app.listen(8000,()=>{
    console.log("server is connected");
})