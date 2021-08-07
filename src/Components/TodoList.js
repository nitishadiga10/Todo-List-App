import { useState, useEffect } from "react";
import {
  TdList,
  Input,
  InputContainer,
  ItemContainer,
  ClearButton,
  NoItem,
  AddButton,
} from "./StyledItem";
import TodoItem from "./TodoItem";

const TodoList = () => {
  const [todoitem, setTodoItem] = useState("");
  const [todolist, setTodoList] = useState([]);

  const changeHandler = (e) => {
    setTodoItem(e.target.value);
  };
  const clearListHandler = () => {
    setTodoList([]);
  };
  // const saveList = async () => {
  //   const url =
  //     "https://to-do-list-app-96476-default-rtdb.asia-southeast1.firebasedatabase.app/list.json";
  //   const response = await fetch(url, {
  //     method: "put",
  //     body: JSON.stringify(todolist),
  //   });
  //   if (!response.ok) {
  //     alert("Couldn't save todo list onto database");
  //   }
  // };

  const addItemHandler = (e) => {
    if (todoitem.trim() === "") {
      alert("To-do Item cannot be Empty");
    } else if (todolist.includes(todoitem)) {
      alert(
        todoitem +
          " is already present on the list, Kindly type in a different Item"
      );
    } else {
      setTodoList((prevState) => [...prevState, todoitem]);
      // saveList();
      setTodoItem("");
    }
  };
  const deleteHandler = (itemToRemove) => {
    setTodoList((prevState) =>
      prevState.filter((item) => item !== itemToRemove)
    );
  };

  return (
    <TdList>
      <InputContainer>
        <Input
          type="text"
          placeholder="TO-DO ITEM"
          onChange={changeHandler}
          value={todoitem}
          required
        ></Input>
        <AddButton onClick={addItemHandler}></AddButton>
      </InputContainer>
      {todoitem}
      <ItemContainer>
        {todolist.map((item, index) => (
          <TodoItem
            item={item}
            click={deleteHandler}
            id={index}
            key={item}
          ></TodoItem>
        ))}
        {!todolist.length && <NoItem>NO TO-DO ITEMS TO SHOW!</NoItem>}
        {todolist.length > 1 && (
          <ClearButton onClick={clearListHandler}>Clear List</ClearButton>
        )}
      </ItemContainer>
    </TdList>
  );
};

export default TodoList;
