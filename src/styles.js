import styled from "styled-components";

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background: linear-gradient(90deg, #383838 0%, #000000 81.25%);
`;

export const ContainerItems = styled.div`
  background-color: #fff;
  padding: 30px 20px;
  border-radius: 5px;
`;

export const Input = styled.input`
  width: 226px;
  height: 40px;
  padding: 10px;
  margin-right: 20px;
  border-radius: 5px;
  outline: none;
  border: none;
  background: #e4e4e4;
  box-shadow: 1px 4px 10px rgba(0, 0, 0, 0.2);
`;

export const Button = styled.button`
  width: 130px;
  height: 40px;
  background: #8052ec;
  border-radius: 5px;
  border: none;
  font-size: 17px;
  font-weight: bold;
  color: #fff;
  cursor: pointer;
`;
