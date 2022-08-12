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

  ul {
    padding: 0;
    margin-top: 60px;
  }
`;

export const Input = styled.input`
  width: 340px;
  height: 50px;
  padding: 15px;
  margin-right: 28px;
  border-radius: 5px;
  outline: none;
  border: none;
  background: #e4e4e4;
  box-shadow: 1px 4px 10px rgba(0, 0, 0, 0.2);
`;

export const Button = styled.button`
  width: 130px;
  height: 50px;
  background: #8052ec;
  border-radius: 5px;
  border: none;
  font-size: 17px;
  font-weight: bold;
  color: #fff;
  cursor: pointer;
  box-shadow: 1px 4px 10px #8052ec;
`;

export const ListItems = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  width: 500px;
  height: 60px;
  background: ${(props) => (props.isFinished ? "#E8FF8B" : "#E4E4E4")};
  box-shadow: 1px 4px 10px rgba(0, 0, 0, 0.2);
  border-radius: 5px;
  margin-bottom: 30px;
  padding: 0 20px;

  li {
    list-style: none;
  }
`;
