import React from "react";
import styled from "styled-components";
import CatagoryItem from "../components/CatagoryItem";
import LiveInfo from "../components/LiveInfo";
import Taskk from "../components/Task";
import { CatagoryData, LiveData, taskData } from "../data";
import Header from "../Layout/Header";
import UpdateTaskModal from "../models/UpdateTaskModal";

const Container = styled.div`
  position: relative;
  background: #ffffff;
`;

const ComponentsContainer = styled.div`
  padding: 0 25px;
  display: flex;
  flex-direction: column;
  margin-top: -37.5px;
  gap: 1em;
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

const TasksContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 1.3em;
`;

const Dashboard = () => {
  return (
    <Container>
      <UpdateTaskModal />
      <Header />
      <ComponentsContainer>
        <LiveInfo data={LiveData[0]} />
        <CatagorysContainer>
          <CatagorysHeader>Catagorys</CatagorysHeader>
          <CatagoryItemsContainer>
            <CatagoryItem data={CatagoryData[0]} />
            <CatagoryItem data={CatagoryData[0]} />
          </CatagoryItemsContainer>
        </CatagorysContainer>
        <TasksContainer>
          <Taskk data={taskData[0]} />
          <Taskk data={taskData[0]} />
          <Taskk data={taskData[0]} />
          <Taskk data={taskData[0]} />
        </TasksContainer>
      </ComponentsContainer>
    </Container>
  );
};

export default Dashboard;
