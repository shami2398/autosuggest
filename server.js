//creating express obj express has builtin functions to create server and handle requests and responses
const express=require("express");
const app=express();
const port=process.env.PORT || 6700;

//to tell app,where static files-html/css/js are located
app.use(express.static("frontend"));

app.listen(port,function(){
    console.log("App is running on http://localhost:"+port);
});
