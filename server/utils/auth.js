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
const NAVER_CLIENT_ID = process.env.NAVER_CLIENT_ID
const NAVER_CLIENT_SECRET = process.env.NAVER_CLIENT_SECRET// YOUR GOOGLE_CLIENT_SECRET;

let GOOGLE_LOGIN_REDIRECT_URI
let NAVER_LOGIN_REDIRECT_URI

if (process.env.NODE_ENV === 'production') {
    GOOGLE_LOGIN_REDIRECT_URI = 'https://project0100.shop/auth/google/redirect';
    NAVER_LOGIN_REDIRECT_URI = 'https://project0100.shop/auth/naver/redirect';
} else {
    GOOGLE_LOGIN_REDIRECT_URI = 'http://localhost:3000/auth/google/redirect';
    NAVER_LOGIN_REDIRECT_URI = 'https://localhost:3000/auth/naver/redirect';
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
  console.log("콘솔로그", req.body);
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

router.get('/naver', (req, res) => {
  console.log("/auth/naver");
  let url = 'https://nid.naver.com/oauth2.0/authorize';
  url += '?response_type=code'
  url += `&client_id=${NAVER_CLIENT_ID}`
  url += `&redirect_uri=${NAVER_LOGIN_REDIRECT_URI}`
  url += `&state=test` 

  // res.writeHead(200, {'Content-Type': 'text/html;charset=utf-8'});   
  res.redirect(url);
});

router.post('/naver/gettoken', function (req, res) {
  let code = req.body.code;
  let state = req.body.state;
  let api_url = 'https://nid.naver.com/oauth2.0/token?grant_type=authorization_code&client_id='
    + NAVER_CLIENT_ID + '&client_secret=' + NAVER_CLIENT_SECRET + '&redirect_uri=' + NAVER_LOGIN_REDIRECT_URI + '&code=' + code + '&state=' + state;

  const options = {
    url: api_url,
    headers: {'X-Naver-Client-Id': NAVER_CLIENT_ID, 'X-Naver-Client-Secret': NAVER_CLIENT_SECRET}
  };
  
  axios.get(api_url, options)
    .then(response => {
      const responseData = response.data
      const accessToken = responseData.access_token;

      var header = "Bearer " + accessToken;
      var api_url2 = 'https://openapi.naver.com/v1/nid/me';
      var options2 = {
        url: api_url2,
        headers: {'Authorization': header}
      };
      
      axios.get(api_url2, options2)
        .then(response => {
            res.writeHead(200, {'Content-Type': 'application/json;charset=utf-8'});
            res.end(JSON.stringify(response.data));
        })
        .catch(error => {
            console.error('Error:', error.message);
            if (error.response) {
                res.status(error.response.status).end();
                console.log('error = ' + error.response.status);
            } else {
                res.status(500).end();
            }
        });
    })
    .catch(error => {
      if (error.response) {
        res.status(error.response.status).end();
        console.error('Error:', error.response.status);
      } else {
        res.status(500).end();
        console.error('Error:', error.message);
      }
    });
});

export default router