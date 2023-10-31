import React from "react";
import AuthTemplate from "./auth/AuthTemplate";
import RegisterForm from "./auth/RegisterForm";

const RegisterPage = () => {
  return (
    <AuthTemplate>
      <RegisterForm type="register" />
    </AuthTemplate>
  );
};

export default RegisterPage;
