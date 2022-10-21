import React, { useContext } from "react";
import { TodoContext } from "../../context";

import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTrash,
  faRotateLeft,
  faCheck,
} from "@fortawesome/free-solid-svg-icons";
import { Span } from "./SpanTxt";

const Tasks = ({ task }) => {
  const { handleUpdate, handleDelete } = useContext(TodoContext);
  return (
    <Li>
      <Span isComplete={task.isComplete}>{task.task}</Span>
      <div className="btns">
        <button onClick={() => handleUpdate(task.id, task.isComplete)}>
          <FontAwesomeIcon icon={task.isComplete ? faRotateLeft : faCheck} />
        </button>
        <button onClick={() => handleDelete(task.id)}>
          <FontAwesomeIcon icon={faTrash} />
        </button>
      </div>
    </Li>
  );
};

export default Tasks;

const Li = styled.li`
  width: 100%;
  height: 50px;
  padding: 2em;
  border-top: 1px solid black;
  border-bottom: 1px solid black;
  display: flex;
  justify-content: space-between;
  align-items: center;

  .btns {
    flex: 1;
    text-align: end;
    padding-right: 1em;

    button {
      margin: 0 0.4em;
      font-size: 1.5rem;
      background: none;
      border: none;
      cursor: pointer;
      svg {
        transition: all 200ms;
      }
      svg:hover {
        scale: 1.2;
        color: #aaa;
      }
    }
  }
`;
