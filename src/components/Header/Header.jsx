import React, { useContext } from "react";
import { TodoContext } from "../../context";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";

const Header = () => {
  const { state, handleInput, handlePost } = useContext(TodoContext);
  const { task } = state;
  return (
    <Head>
      <h1>Task Lists</h1>
      <AddContainer>
        <FontAwesomeIcon icon={faPlus} onClick={handlePost} />
        <input
          type="text"
          placeholder="Add Task"
          name="input"
          maxLength={30}
          value={task}
          onChange={handleInput}
        />
      </AddContainer>
    </Head>
  );
};

export default Header;

const Head = styled.header`
  min-height: 50px;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #cc7a00;
  position: relative;

  @media (max-width: 500px) {
    flex-direction: column;
    padding: 0.7em 0;
  }

  h1 {
    font-family: "Roboto Mono", monospace;
    margin-right: 3em;

    @media (max-width: 500px) {
      margin-right: 0;
    }
  }
`;

const AddContainer = styled.div`
  width: 200px;
  border: 1px solid black;
  padding: 0.4em 1em;
  right: 2em;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 1em;
  overflow: hidden;

  svg {
    font-size: 1.5rem;
    color: #fff;
    cursor: pointer;
  }
  input {
    background: none;
    border: none;
    outline: none;
    padding-left: 0.5em;

    &::placeholder {
      color: #fff;
    }
  }
`;
