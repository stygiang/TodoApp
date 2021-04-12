import React from "react";
import styled from "styled-components";

const Task = styled.div`
  cursor: pointer;
  width: 100%;
  /* height: 100px; */
  border-radius: 10px;
  background: #f7f7f7;
  position: relative;
  padding: 10px 0;
  padding-left: 25px;
  padding-right: 15px;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(3, max-content);
  grid-template-areas:
    "catagory . status"
    "title title title"
    "assign assign time";
  grid-row-gap: 0.8em;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 10px;
    background: #0fbd97;
    border-radius: 10px 0px 0px 10px;
  }
`;
const TaskCatagory = styled.p`
  grid-area: catagory;
  display: inline-block;
  text-align: start;
  color: #818181;

  i {
    height: 15px;
    width: 15px;
    color: #818181;
    margin-right: 0.5em;
  }
`;
const Status = styled.div`
  grid-area: status;
  display: flex;
  align-items: center;
  justify-content: end;
  div {
    height: 4px;
    width: 4px;
    background: #0fbd97;
    border-radius: 50px;
    margin-right: 0.5em;
  }
  font-family: Inter;
  font-style: normal;
  font-weight: 500;
  font-size: 12px;
  line-height: 15px;
  text-transform: uppercase;

  color: #818181;
`;
const TaskTitle = styled.p`
  text-align: start;
  grid-area: title;
  font-family: Inter;
  font-style: normal;
  font-weight: 600;
  font-size: 15px;
  line-height: 18px;
  text-transform: capitalize;

  color: #4f4f4f;
`;
const TaskAssign = styled.p`
  text-align: start;
  grid-area: assign;
  font-family: Inter;
  font-style: normal;
  font-weight: normal;
  font-size: 12px;
  line-height: 15px;
  /* identical to box height */
  text-transform: capitalize;
  display: flex;
  gap: 0.3em;
  align-items: center;
  p {
    display: inline-block;
  }

  color: #818181;
  span {
    color: #4f4f4f;
    display: flex;
    align-items: center;
    gap: 0.4em;

    p {
      display: inline-block;
    }
    i {
      transform: translateY(-15%);
    }
  }
`;

const TaskTime = styled.div`
  grid-area: time;
  p {
    font-family: Inter;
    font-style: normal;
    font-weight: 500;
    font-size: 12px;
    line-height: 15px;
    /* identical to box height */
    text-transform: lowercase;
    font-family: Inter;
    font-size: 12px;
    text-align: right;

    color: #818181;
  }
`;

const Taskk = ({ data }) => {
  return (
    <Task>
      <TaskCatagory>
        <i class={data.catagory.class}></i>
        {data.catagory.text}
      </TaskCatagory>
      <Status>
        <div color={data.status.color} />
        {data.status.text}
      </Status>
      <TaskTitle>{data.title}</TaskTitle>
      <TaskAssign>
        <p>Assigned to: </p>

        <span>
          <p>{data.assign.name}</p> <i class='fas fa-sort-down'></i>
        </span>
      </TaskAssign>
      <TaskTime>
        <p>{data.time}m</p>
      </TaskTime>
    </Task>
  );
};

export default Taskk;
