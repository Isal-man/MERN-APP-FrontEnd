import React from "react";
import "./register.scss";
import { RegisterBg } from "../../assets";
import { Button, Gap, Input, Link } from "../../components";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const navigate = useNavigate();
  return (
    <div className="main-page">
      <div className="left">
        <img src={RegisterBg} alt="Register Image" className="bg-image"/>
      </div>
      <div className="right">
        <p className="title">Register</p>
        <Input placeholder="Masukan nama lengkap" label="Full Name" />
        <Gap height={18} />
        <Input placeholder="Masukan Email" label="Email" />
        <Gap height={18} />
        <Input placeholder="Masukan Password" label="Password" />
        <Gap height={50} />
        <Button title="Register" onClick={() => navigate('/login')}/>
        <Gap height={50} />
        <Link title="&laquo; Kembali ke halaman login" onClick={() => navigate('/login')}/>
      </div>
    </div>
  );
};

export default Register;
