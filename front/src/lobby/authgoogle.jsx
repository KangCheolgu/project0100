import {Container, Row, Col, Button} from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from "axios";
import { useEffect } from 'react';
import { useLocation, useNavigate, useSearchParams } from 'react-router-dom';
import cookie from 'react-cookies';

function AuthGoogle() {
    
  const navigate = useNavigate();
  const location = useLocation();
  const queryString = location.search; 
  const [searchParams, setSearchParams] = useSearchParams();

  useEffect(() => {
    const expires = new Date()
    expires.setMinutes(expires.getMinutes() + 60)

    setSearchParams(location)
    const code = searchParams.get("code")
    const scope = searchParams.get("scope")
    
    axios.post("http://localhost:5000/auth/getgoogletoken", {
      withCredentials: true,
      code: code,
      scope: scope
    })
      .then((res) => {
        if (res.status == 200) {
          // console.log(res.data.email);
          // console.log(res.data.name);
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
    <div>로딩 중</div>
  );
}

export default AuthGoogle;
