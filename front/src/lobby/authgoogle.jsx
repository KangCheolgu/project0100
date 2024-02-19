import {Container, Row, Col, Button} from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from "axios";
import { useEffect } from 'react';
import { useLocation, useNavigate, useSearchParams } from 'react-router-dom';
import cookie from 'react-cookies';

const CURRENT_URL = "http://localhost:5000"
// const CURRENT_URL = "https://project0100.shop"

function AuthGoogle() {
    
  const navigate = useNavigate();
  const location = useLocation();
  const [searchParams, setSearchParams] = useSearchParams();

  useEffect(() => {
    const expires = new Date()
    expires.setMinutes(expires.getMinutes() + 60)
    setSearchParams(location)

    const code = searchParams.get("code")
    const scope = searchParams.get("scope")

    axios.post( CURRENT_URL + "/api/auth/google/gettoken", {
      withCredentials: true,
      code: code,
      scope: scope,
    })
      .then((res) => {
        if (res.status == 200) {

          cookie.save('userEmail', res.data.email, {
            path:"/",
            expires
          });
          cookie.save('userName', res.data.name, {
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
    <div>구글 로딩 중</div>
  );
}

export default AuthGoogle;
