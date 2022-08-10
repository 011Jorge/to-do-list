import React, { useState } from "react";

import { v4 as uuid } from "uuid";
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
            <li key={item.id}>{item.task}</li>
          ))}
        </ul>
      </ContainerItems>
    </Container>
  );
}

export default App;
