import React from "react";
import styled from "styled-components";

const Container = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  padding: 0 25px;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.51);
  z-index: 1000;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Model = styled.div`
  position: relative;
  width: 100%;
  height: max-content;
  background: #f7f7f7;
  border-radius: 10px;
  padding: 2em 2em;
  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
    height: 15px;
    width: 100%;
    background-color: ${(p) => p.color};
  }
`;
const Content = styled.div`
  text-align: left;
  display: flex;
  flex-direction: column;
  gap: 1em;
`;
const Header = styled.h2`
  font-family: Inter;
  font-style: normal;
  font-weight: bold;
  font-size: 23.44px;
  line-height: 28px;
  text-transform: capitalize;
  color: #000000;
`;
const StyledInput = styled.input`
  background: #ededed;
  border-radius: 5px;
  border: none;
  padding: 1em 1em;
  width: 70%;

  :focus {
    outline: none;
  }
  ::placeholder {
    color: ${(p) => p.color};
  }
`;
const Checkbox = styled.div`
  width: max-content;
  display: flex;
  flex-direction: row;
  padding: 0.3em;
  border-radius: 5px;
  background-color: ${(p) => p.color};
  cursor: pointer;

  p {
    font-family: Inter;
    font-style: normal;
    font-weight: normal;
    font-size: 15px;
    line-height: 18px;
    text-transform: capitalize;
    color: #ededed;
    margin-right: 0.3em;
  }
  i {
    margin-top: -1.5px;
    height: 12px;
    width: 9px;
    color: #ededed;
  }
`;
const Button = styled.p`
  cursor: pointer;
  padding: 0.8em 1.5em;
  width: max-content;
  border-radius: 5px;
  align-self: center;
  background-color: ${(p) => p.color};
  color: #ededed;
  font-size: 15px;
`;
const UpdateTaskModal = () => {
  return (
    <Container>
      <Model color='#0FBD97'>
        <Content>
          <Header>Update Task</Header>
          <StyledInput type='text' placeholder='Title:' color='#0FBD97' />
          <StyledInput type='text' placeholder='Description:' color='#0FBD97' />
          <StyledInput type='text' placeholder='Status:' color='#0FBD97' />
          <StyledInput type='text' placeholder='Time:' color='#0FBD97' />
          <Checkbox color='#0FBD97'>
            <p>Category</p>
            <i class='fas fa-sort-down'></i>
          </Checkbox>
          <Checkbox color='#0FBD97'>
            <p>Assign</p>
            <i class='fas fa-sort-down'></i>
          </Checkbox>
          <Button color='#0FBD97'>Hello</Button>
        </Content>
      </Model>
    </Container>
  );
};

export default UpdateTaskModal;
