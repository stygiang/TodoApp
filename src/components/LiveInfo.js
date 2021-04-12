import React from "react";
import styled from "styled-components";

const LiveInfoContainer = styled.div`
  height: 75px;
  background: #f7f7f7;
  border-radius: 5px;
  display: flex;
  justify-content: space-around;
  align-items: center;
`;
const LiveInfoo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 0px;
  h3 {
    font-family: Inter;
    font-style: normal;
    font-weight: 800;
    font-size: 18.75px;
    color: #000000;
  }
  p {
    font-family: Inter;
    font-style: normal;
    font-weight: 500;
    font-size: 15px;
    color: #818181;
  }
`;

const LiveInfo = ({ data }) => {
  return (
    <LiveInfoContainer>
      <LiveInfoo>
        <h1>{data.passed.number}</h1>
        <p>{data.passed.text}</p>
      </LiveInfoo>
      <LiveInfoo>
        <h1>{data.todo.number}</h1>
        <p>{data.todo.text}</p>
      </LiveInfoo>
      <LiveInfoo>
        <h1>{data.completed.number}</h1>
        <p>{data.completed.text}</p>
      </LiveInfoo>
      <LiveInfoo>
        <h1>{data.dueToday.number}</h1>
        <p>{data.dueToday.text}</p>
      </LiveInfoo>
    </LiveInfoContainer>
  );
};

export default LiveInfo;
