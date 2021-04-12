import React from "react";
import styled from "styled-components";

const Container = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background: linear-gradient(180deg, #20cfb1 0%, #6b6db8 67.71%);
  padding: 0 25px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const LoginContainer = styled.div`
  width: 100%;
  background: #f7f7f7;
  height: 304px;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  padding: 20px 10px;
  justify-content: space-between;
`;
const Header = styled.h1`
  font-family: Inter;
  font-style: normal;
  font-weight: 600;
  font-size: 30px;
  line-height: 36px;
  text-transform: capitalize;
  color: #000000;
`;
const InputsContainer = styled.div`
  text-align: center;
  display: flex;
  flex-direction: column;
  gap: 18px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const Input = styled.input`
  padding: 0.3em 0.3em;
  font-size: 15px;
  border: none;
  border-bottom: 1.5px solid #20cfb1;
  text-transform: capitalize;
  display: inline-block;

  width: 65%;
  background: transparent;

  &:focus {
    outline: none;
  }
`;
const Button = styled.p`
  display: inline-block;
  font-family: Inter;
  font-size: 15px;
  text-transform: capitalize;
  padding: 0.53em 2.8em;
  background: #6b6db8;
  border-radius: 10px;
  color: #ededed;
`;

const SignUpPage = () => {
  return (
    <Container>
      <LoginContainer>
        <Header>sign up</Header>
        <InputsContainer>
          <Input type='text' placeholder='name:' />
          <Input type='email' placeholder='Email:' />
          <Input type='password' placeholder='password:' />
        </InputsContainer>
        <div>
          <Button>Log in</Button>
        </div>
      </LoginContainer>
    </Container>
  );
};

export default SignUpPage;
