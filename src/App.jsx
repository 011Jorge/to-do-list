import React, { useState } from "react";

import { v4 as uuid } from "uuid";

function App() {
  const [list, setList] = useState([{ id: uuid(), task: "nada" }]);

  function writingTask(e) {
    setList([{ id: uuid(), task: e.target.value }]);
  }

  function addTask() {
    console.log("working button");
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
