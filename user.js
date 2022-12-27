const { Module } = require("module");
const express=require("express");
const app=express();
const router = express.Router();

router.post("/send_token",async(req,res)=>{
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
module.export=router;