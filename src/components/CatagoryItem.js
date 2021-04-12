import React from "react";
import styled from "styled-components";
const Catagory = styled.div`
  width: 177px;
  background: #f7f7f7;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  padding: 10px;
  height: 100px;

  &:not(last-child) {
    margin-right: 8px;
  }
`;
const CatagoryText = styled.div`
  text-align: start;
  display: inline-block;

  p {
    font-family: Inter;
    font-style: normal;
    font-weight: 500;
    font-size: 12px;
    line-height: 15px;
    color: #818181;
    margin-bottom: 0.5em;
  }
  h3 {
    font-family: Inter;
    font-style: normal;
    font-weight: 600;
    font-size: 15px;
    line-height: 18px;
    text-transform: capitalize;
    color: #000000;
  }
`;
const BarContainer = styled.div`
  position: relative;
`;
const FullBar = styled.div`
  position: absolute;
  z-index: 1;
  height: 5px;
  width: 100%;
  border-radius: 10px;
  background: #818181;
`;
const HalfBar = styled.div`
  position: absolute;
  z-index: 2;
  height: 5px;
  width: ${(p) => p.data}%;
  border-radius: 10px;
  background: #20cfb1;
`;

const CatagoryItem = ({ data }) => {
  return (
    <Catagory>
      <CatagoryText>
        <p>{data.taskNum} Tasks</p>
        <h3>{data.name}</h3>
      </CatagoryText>
      <BarContainer>
        <FullBar />
        <HalfBar color={data.bar.color} data={data.bar.percentDone} />
      </BarContainer>
    </Catagory>
  );
};

export default CatagoryItem;
