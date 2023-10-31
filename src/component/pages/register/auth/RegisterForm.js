// useEffect import
import React, { useEffect } from "react";
// useSelector, useDispatch import
import { useDispatch, useSelector } from "react-redux";
// auth module 액션 생성함수 import
import { changeField, initializeForm } from "../modules/auth";
// AuthForm import
import AuthForm from "./AuthForm";

const RegisterForm = () => {
  const dispatch = useDispatch();
  const { form } = useSelector(({ auth }) => ({
    form: auth.register,
  }));
  // input change event 로 액션 디스패치. 디스패치 : 액션을 발생시키는 것.
  const onChange = (e) => {
    const { value, name } = e.target;
    // 액션 생성 함수 import
    dispatch(
      changeField({
        form: "register",
        key: name,
        value,
      })
    );
  };
  // form submit event
  const onSubmit = (e) => {
    e.preventDefault();
    // 구현 예정
  };
  // 컴포넌트 초기 렌더링시 form 초기화
  useEffect(() => {
    // 액션 생성 함수 import
    dispatch(initializeForm("register"));
  }, [dispatch]);

  return (
    <AuthForm
      type="register"
      form={form}
      onChange={onChange}
      onSubmit={onSubmit}
    />
  );
};

export default RegisterForm;
