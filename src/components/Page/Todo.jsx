import React, { useContext } from "react";
import { TodoContext } from "../../context";
import styled from "styled-components";

import TaskLists from "./TaskLists";

const Todo = () => {
  const { state, loading } = useContext(TodoContext);
  const { tasks } = state;
  return (
    <Main>
      {loading && tasks && (
        <Empty>
          <h1>Loading...</h1>
        </Empty>
      )}
      {!loading && tasks.length ? (
        <TaskLists />
      ) : (
        <Empty>
          <h1>There are no tasks</h1>
        </Empty>
      )}
    </Main>
  );
};

export default Todo;

const Main = styled.main`
  min-height: calc(100vh - 70px);
  box-shadow: 0px 0px 5px 8px rgba(0, 0, 0, 0.73) inset;
  width: 500px;
  margin: auto;
  margin-top: 1em;
  overflow: hidden;
  background: #ff6600;
  @media (max-width: 499px) {
    width: 400px;
  }
  @media (max-width: 420px) {
    width: 350px;
  }
  @media (max-width: 370px) {
    width: 300px;
  }
`;

const Empty = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  margin-top: 2em;

  h1 {
    font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
  }
`;
