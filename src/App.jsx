import React, { useState } from "react";

import { v4 as uuid } from "uuid";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import Logo from "./assets/logo.png";

import {
  Container,
  ContainerItems,
  Input,
  Button,
  ListItems,
  Check,
  Trash,
  EmojiSad,
  H3,
  Header,
} from "./styles";

function App() {
  const [list, setList] = useState([]);
  const [task, setTask] = useState("");

  function writingTask(e) {
    setTask(e.target.value);
  }

  function addTask() {
    if (task) {
      setList([...list, { id: uuid(), task, finished: false }]);
      toast.success("Tarefa adicionada com sucesso");
    } else {
      console.log("Error adding task");
      toast.error("Opss! por favor, digite a tarefa!");
    }
  }

  function finishTask(id) {
    const newList = list.map((item) =>
      item.id === id ? { ...item, finished: !item.finished } : item
    );

    setList(newList);
    toast.success("Tarefa concluída com sucesso!");
  }

  function deleteTask(abacate, chave) {
    const trashTask = list.filter((item) => item.id !== abacate);
    setList(trashTask);
    toast.success("Tarefa deletada com sucesso!");
  }

  return (
    <Container>
      <Header>
        <img src={Logo} alt="logo" />
        <h1>TO DO LIST</h1>
      </Header>
      <ContainerItems>
        <Input onChange={writingTask} placeholder="O que tenho para fazer..." />
        <Button onClick={() => addTask("task", task)}>Adicionar</Button>
        <ul>
          {list.length > 0 ? (
            list.map((item) => (
              <ListItems isFinished={item.finished} key={item.id}>
                <abbr title="concluir tarefa">
                  <Check onClick={() => finishTask(item.id)} />
                </abbr>
                <li>{item.task}</li>
                <abbr title="deletar tarefa">
                  <Trash onClick={() => deleteTask(item.id)} />
                </abbr>
              </ListItems>
            ))
          ) : (
            <>
              <H3>
                Não há itens na lista
                <EmojiSad />
              </H3>
            </>
          )}
        </ul>
        <ToastContainer />
      </ContainerItems>
    </Container>
  );
}

export default App;
