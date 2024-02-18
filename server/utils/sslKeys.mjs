import fs from 'fs';

let sslKeys = {};
if (process.env.NODE_ENV === 'production') {
    // SSL 인증서 키
    sslKeys = {
        ca: fs.readFileSync('/etc/letsencrypt/live/project0100.shop/fullchain.pem'),
        key: fs.readFileSync('/etc/letsencrypt/live/project0100.shop/privkey.pem'),
        cert: fs.readFileSync('/etc/letsencrypt/live/project0100.shop/cert.pem'),
    };
}

export default sslKeys;