const express = require('express');
const cors=require("cors");
const app=express();
const PORT = 8080;
const bodyparser =require("body-parser");


app.set('veiw engine','handlebars');
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended:false}));
app.use(bodyparser.json());
app.use(bodyparser.urlencoded({extended:false}));
app.post("/send_token",async(req,res)=>{
    let code = req.body.code;
    let redirectUri = req.body.redirectUri;
    let accessToken = null;
    try {
        // send form based request to Instagram API
        let result = await request.post({
            url: 'https://api.instagram.com/oauth/access_token',
            form: {
                client_id: process.env.INSTA_APP_ID,
                client_secret: process.env.INSTA_APP_SECRET,
                grant_type: 'authorization_code',
                redirect_uri: req.body.redirectUri,
                code: req.body.code
            }
        });
        // Got access token. Parse string response to JSON
        accessToken = JSON.parse(result).access_token;
    } catch (e) {
        console.log("Error=====", e);
    }
})

app.listen(PORT,()=>
{
    console.log(`listening to port at ${PORT}`);
})

