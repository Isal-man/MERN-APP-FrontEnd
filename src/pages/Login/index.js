import React from "react";
import { LoginBg } from "../../assets";
import { Button, Gap, Input, Link } from "../../components";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  return (
    <div className="main-page">
      <div className="left">
        <img src={LoginBg} alt="Register Image" className="bg-image"/>
      </div>
      <div className="right">
        <p className="title">Login</p>
        <Input placeholder="Masukan Email" label="Email" />
        <Gap height={18} />
        <Input placeholder="Masukan Password" label="Password" />
        <Gap height={50} />
        <Button title="Login" onClick={() => navigate('/')}/>
        <Gap height={50} />
        <Link title="Belum punya akun? Silahkan daftar disini" onClick={() => navigate('/register')}/>
      </div>
    </div>
  );
};

export default Login;
