import React, { useState } from "react";

import { v4 as uuid } from "uuid";
import { FaTrashAlt, FaRegCheckSquare } from "react-icons/fa";

import { Container, ContainerItems, Input, Button, ListItems } from "./styles";

function App() {
  const [list, setList] = useState([
    { id: uuid(), task: "nada", finished: true },
  ]);
  const [task, setTask] = useState("");

  function writingTask(e) {
    setTask(e.target.value);
  }

  function addTask() {
    setList([...list, { id: uuid(), task, finished: false }]);
  }

  function finishTask(id) {
    const newList = list.map((item) =>
      item.id === id ? { ...item, finished: !item.finished } : item
    );

    setList(newList);
  }

  return (
    <Container>
      <ContainerItems>
        <Input onChange={writingTask} placeholder="O que tenho para fazer" />
        <Button onClick={addTask}>Adicionar</Button>
        <ul>
          {list.map((item) => (
            <ListItems isFinished={item.finished} key={item.id}>
              <FaRegCheckSquare onClick={() => finishTask(item.id)} />
              <li>{item.task}</li>
              <FaTrashAlt />
            </ListItems>
          ))}
        </ul>
      </ContainerItems>
    </Container>
  );
}

export default App;
