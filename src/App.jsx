import React, { useState } from "react";

import { v4 as uuid } from "uuid";

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
    <div>
      <input onChange={writingTask} placeholder="O que tenho para fazer" />
      <button onClick={addTask}>Adicionar</button>
      <ul>
        {list.map((item) => (
          <li key={item.id}>{item.task}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
