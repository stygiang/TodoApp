import React from "react";
import styled, { css } from "styled-components";

const Container = styled.div`
  background: #ffffff;
`;
const Header = styled.div`
  height: 200px;
  width: 100%;
  background-image: linear-gradient(
      rgba(107, 109, 184, 0.9),
      rgba(107, 109, 184, 0.9)
    ),
    url("images/Header.jpg");
  background-position: center;
  background-size: cover;
  padding: 0 25px;
  padding-top: 35px;
`;
const NavigationBox = styled.div`
  width: 35px;
  height: 22px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-end;
  margin-left: auto;
  cursor: pointer;
  /* margin-top: 43px; */
`;
const NavigationBar = styled.div`
  display: inline-block;
  height: 5px;
  border-radius: 5px;

  background: #f7f7f7;
  ${(p) =>
    p.one &&
    css`
      width: 100%;
    `}
  ${(p) =>
    p.two &&
    css`
      width: 50%;
    `}
    ${(p) =>
    p.three &&
    css`
      width: 35%;
    `}
`;
const ComponentsContainer = styled.div`
  padding: 0 25px;
  display: flex;
  flex-direction: column;
  margin-top: -37.5px;
  gap: 1em;
`;
const LiveInfoContainer = styled.div`
  height: 75px;
  background: #f7f7f7;
  border-radius: 5px;
  display: flex;
  justify-content: space-around;
  align-items: center;
`;
const LiveInfo = styled.div`
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

const CatagorysContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1em;
`;
const CatagorysHeader = styled.h3`
  font-family: Inter;
  font-style: normal;
  font-weight: 500;
  font-size: 15px;
  line-height: 18px;
  text-transform: capitalize;
  color: #818181;
  text-align: start;
`;
const CatagoryItemsContainer = styled.div`
  display: flex;
  /* justify-content: space-between; */
`;
const CatagoryItem = styled.div`
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
  width: 50%;
  border-radius: 10px;
  background: #20cfb1;
`;
const TasksContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 1.3em;
`;
const Task = styled.div`
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

const Dashboard = () => {
  return (
    <Container>
      <Header>
        <NavigationBox>
          <NavigationBar one />
          <NavigationBar two />
          <NavigationBar three />
        </NavigationBox>
      </Header>
      <ComponentsContainer>
        <LiveInfoContainer>
          <LiveInfo>
            <h1>709</h1>
            <p>Passed</p>
          </LiveInfo>
          <LiveInfo>
            <h1>709</h1>
            <p>Todo</p>
          </LiveInfo>
          <LiveInfo>
            <h1>709</h1>
            <p>Completed</p>
          </LiveInfo>
          <LiveInfo>
            <h1>709</h1>
            <p>Due Today</p>
          </LiveInfo>
        </LiveInfoContainer>
        <CatagorysContainer>
          <CatagorysHeader>Catagorys</CatagorysHeader>
          <CatagoryItemsContainer>
            <CatagoryItem>
              <CatagoryText>
                <p>40 Tasks</p>
                <h3>Buisness</h3>
              </CatagoryText>
              <BarContainer>
                <FullBar />
                <HalfBar />
              </BarContainer>
            </CatagoryItem>
            <CatagoryItem>
              <CatagoryText>
                <p>40 Tasks</p>
                <h3>Personal</h3>
              </CatagoryText>
              <BarContainer>
                <FullBar />
                <HalfBar />
              </BarContainer>
            </CatagoryItem>
          </CatagoryItemsContainer>
        </CatagorysContainer>
        <TasksContainer>
          <Task>
            <TaskCatagory>
              <i class='fas fa-tools'></i>
              Bugs
            </TaskCatagory>
            <Status>
              <div />
              incomplete
            </Status>
            <TaskTitle>code the users route for new website</TaskTitle>
            <TaskAssign>
              <p>Assigned to: </p>

              <span>
                <p>Save</p> <i class='fas fa-sort-down'></i>
              </span>
            </TaskAssign>
            <TaskTime>
              <p>2m</p>
            </TaskTime>
          </Task>
          <Task>
            <TaskCatagory>
              <i class='fas fa-user-friends'></i>
              Bugs
            </TaskCatagory>
            <Status>
              <div />
              incomplete
            </Status>
            <TaskTitle>code the users route for new website</TaskTitle>
            <TaskAssign>
              <p>Assigned to: </p>

              <span>
                <p>Save</p> <i class='fas fa-sort-down'></i>
              </span>
            </TaskAssign>
            <TaskTime>
              <p>2m</p>
            </TaskTime>
          </Task>
          <Task>
            <TaskCatagory>
              <i class='fas fa-archive'></i>
              Bugs
            </TaskCatagory>
            <Status>
              <div />
              incomplete
            </Status>
            <TaskTitle>code the users route for new website</TaskTitle>
            <TaskAssign>
              <p>Assigned to: </p>

              <span>
                <p>Save</p> <i class='fas fa-sort-down'></i>
              </span>
            </TaskAssign>
            <TaskTime>
              <p>2m</p>
            </TaskTime>
          </Task>
          <Task>
            <TaskCatagory>
              <i class='fas fa-lock'></i>
              Bugs
            </TaskCatagory>
            <Status>
              <div />
              incomplete
            </Status>
            <TaskTitle>code the users route for new website</TaskTitle>
            <TaskAssign>
              <p>Assigned to: </p>

              <span>
                <p>Save</p> <i class='fas fa-sort-down'></i>
              </span>
            </TaskAssign>
            <TaskTime>
              <p>2m</p>
            </TaskTime>
          </Task>
        </TasksContainer>
      </ComponentsContainer>
    </Container>
  );
};

export default Dashboard;
