import {Container, Row, Col, Button} from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from "axios";
import { useEffect } from 'react';
import { useLocation, useNavigate, useSearchParams } from 'react-router-dom';
import cookie from 'react-cookies';

const CURRENT_URL = "http://localhost:5000"
// const CURRENT_URL = "https://project0100.shop"

function AuthNaver() {
    
  const navigate = useNavigate();
  const location = useLocation();
  const [searchParams, setSearchParams] = useSearchParams();

  useEffect(() => {
    const expires = new Date()
    expires.setMinutes(expires.getMinutes() + 60)
    setSearchParams(location)

    const code = searchParams.get("code")
    const state = searchParams.get("state")

    axios.post( CURRENT_URL + "/api/auth/naver/gettoken", {
      withCredentials: true,
      code: code,
      state: state
    })
      .then((res) => {
        if (res.status == 200) {
          cookie.save('userEmail', res.data.response.email, {
            path:"/",
            expires
          });
          cookie.save('userName', res.data.response.name, {
            path:"/",
            expires
          });
          navigate('/lobby')
        } else {
          console.log("No status");
        }
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <div></div>
  );
}

export default AuthNaver;
