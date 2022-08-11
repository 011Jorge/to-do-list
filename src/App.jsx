import React, { useState } from "react";

import { v4 as uuid } from "uuid";
import { FaTrashAlt, FaRegCheckSquare } from "react-icons/fa";

import { Container, ContainerItems, Input, Button } from "./styles";

function App() {
  const [list, setList] = useState([{ id: uuid(), task: "nada" }]);
  const [task, setTask] = useState("");

  function writingTask(e) {
    setTask(e.target.value);
  }

  function addTask() {
    setList([...list, { id: uuid(), task }]);
  }

  return (
    <Container>
      <ContainerItems>
        <Input onChange={writingTask} placeholder="O que tenho para fazer" />
        <Button onClick={addTask}>Adicionar</Button>
        <ul>
          {list.map((item) => (
            <>
              <FaRegCheckSquare />
              <li key={item.id}>{item.task}</li>
              <FaTrashAlt />
            </>
          ))}
        </ul>
      </ContainerItems>
    </Container>
  );
}

export default App;
