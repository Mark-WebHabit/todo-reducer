import styled from "styled-components";

import { useContext } from "react";
import { TodoContext } from "../../context";

import Tasks from "./Tasks";

const TaskLists = () => {
  const { state } = useContext(TodoContext);
  const { tasks } = state;
  return (
    <TaskWrapper>
      {tasks.map((task) => (
        <Tasks key={task.id} task={task} />
      ))}
    </TaskWrapper>
  );
};

export default TaskLists;

const TaskWrapper = styled.ul`
  width: 100%;
  list-style: none;
  display: flex;
  flex-direction: column;
`;
