import { createContext, useEffect, useReducer, useState } from "react";
import axios from "axios";

export const TodoContext = createContext({});

const INITIAL = {
  tasks: [],
  task: "",
  loading: false,
};

const reducer = (state, action) => {
  switch (action.type) {
    case "FETCH":
      return {
        ...state,
        tasks: action.payload,
      };
    case "UPDATE":
      return {
        ...state,
      };
    case "DELETE":
      return {
        ...state,
      };
    case "INPUT":
      return {
        ...state,
        task: action.payload,
      };
    case "POST":
      return {
        ...state,
        task: "",
      };

    default:
      throw new Error();
  }
};

const BASE_URL = "http://localhost:3001/task";
const Context = ({ children }) => {
  const [loading, setLoading] = useState(true);
  const [state, dispatch] = useReducer(reducer, INITIAL);

  const fetchData = async () => {
    const response = await axios.get(BASE_URL);
    dispatch({ type: "FETCH", payload: response.data });
  };

  useEffect(() => {
    try {
      setLoading(true);
      fetchData();
    } catch (err) {
      console.log(err.message);
    } finally {
      setLoading(false);
    }
  }, []);

  const handleUpdate = async (id, value) => {
    await axios.patch(`${BASE_URL}/${id}`, {
      isComplete: !value,
    });
    dispatch({ type: "UPDATE" });
    fetchData();
  };

  const handleDelete = async (id) => {
    await axios.delete(`${BASE_URL}/${id}`);
    fetchData();
  };

  const handleInput = (e) => {
    dispatch({
      type: "INPUT",
      payload: e.target.value,
    });
  };

  const handlePost = async () => {
    if (state.task === "") return;
    await axios.post(BASE_URL, {
      task: state.task,
      isComplete: false,
    });
    dispatch({ type: "POST" });
    fetchData();
  };

  return (
    <TodoContext.Provider
      value={{
        state,
        handleUpdate,
        handleDelete,
        handleInput,
        handlePost,
        loading,
      }}
    >
      {children}
    </TodoContext.Provider>
  );
};

export default Context;
