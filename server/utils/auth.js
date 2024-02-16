import express from "express";
import axios from "axios";
import dotenv from 'dotenv';
dotenv.config();

const router = express.Router();

router.get("/", (req, res) => {
    res.send("이건 콘솔 로그로 보내집니다. 받을때 콘솔로그로 보내거든요");
});

const GOOGLE_CLIENT_ID = process.env.GOOGLE_CLIENT_ID// YOUR GOOGLE_CLIENT_ID;
const GOOGLE_CLIENT_SECRET = process.env.GOOGLE_CLIENT_SECRET// YOUR GOOGLE_CLIENT_SECRET;
let GOOGLE_LOGIN_REDIRECT_URI

if (process.env.NODE_ENV === 'production') {
    GOOGLE_LOGIN_REDIRECT_URI = 'https://project0100.shop/auth/google/redirect';
} else {
    GOOGLE_LOGIN_REDIRECT_URI = 'http://localhost:3000/auth/google/redirect';
}

router.get('/google', (req, res) => {
  console.log("/auth/google");
  let url = 'https://accounts.google.com/o/oauth2/v2/auth';
  url += `?client_id=${GOOGLE_CLIENT_ID}`
  url += `&redirect_uri=${GOOGLE_LOGIN_REDIRECT_URI}`
  url += '&response_type=code'
  url += '&scope=email profile'    
  res.redirect(url);
});

router.post('/google/gettoken', async (req, res) => {
  // console.log("콘솔로그", req.body);
  const resp = await axios.post('https://oauth2.googleapis.com/token', {
    // x-www-form-urlencoded(body)
    code: req.body.code,
    client_id: GOOGLE_CLIENT_ID,
    client_secret: GOOGLE_CLIENT_SECRET,
    redirect_uri: GOOGLE_LOGIN_REDIRECT_URI,
    grant_type: 'authorization_code',
  });

  const resp2 = await axios.get('https://www.googleapis.com/oauth2/v2/userinfo', {
    // Request Header에 Authorization 추가
    headers: {
        Authorization: `Bearer ${resp.data.access_token}`,
    },
  });
  console.log("resp2 ",resp2.data);
  res.json(resp2.data)
});

export default router