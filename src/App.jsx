import React from "react";

function App() {
  function writingTask(e) {
    console.log(e.target.value);
  }

  function addTask() {
    console.log("working button");
  }

  return (
    <div>
      <input onChange={writingTask} placeholder="O que tenho para fazer" />
      <button onClick={addTask}>Adicionar</button>
      <ul>
        <li>tarefas aqui...</li>
      </ul>
    </div>
  );
}

export default App;
