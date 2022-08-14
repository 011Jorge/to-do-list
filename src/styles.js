import styled from "styled-components";
import { FaTrash, FaCheckCircle, FaRegSadTear } from "react-icons/fa";

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: linear-gradient(140deg, #462eb4, #7344c0, #a15acd, #b665d3);

  @media (max-width: 800px) {
    width: 100vw;
    height: 100vh;
  }
`;

export const ContainerItems = styled.div`
  height: 100%;
  background-color: #fff;
  padding: 40px 30px;
  border-radius: 20px;

  ul {
    padding: 0;
    margin-top: 60px;
  }

  div {
    @media (max-width: 800px) {
    }
  }

  @media (max-width: 800px) {
    width: 100%;
    height: 100vh;
    border-radius: 30px 30px 0 0;
  }
`;

export const Header = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  h1 {
    font-size: 80px;
    margin-bottom: 50px;
    color: #fff;

    @media (max-width: 800px) {
      font-size: 50px;
    }
  }

  img {
    margin-top: 0px;
    width: 400px;

    @media (max-width: 800px) {
      width: 300px;
    }
  }
`;

export const Input = styled.input`
  width: 340px;
  height: 50px;
  padding: 15px;
  font-size: 18px;
  margin-right: 28px;
  border-radius: 5px;
  outline: none;
  border: none;
  background: #e4e4e4;
  box-shadow: 1px 4px 10px rgba(0, 0, 0, 0.2);

  @media (max-width: 800px) {
    width: 300px;
  }
`;

export const Button = styled.button`
  width: 130px;
  height: 50px;
  background: #2ea8df;
  border-radius: 5px;
  border: none;
  font-size: 17px;
  font-weight: bold;
  color: #fff;
  cursor: pointer;
  box-shadow: 1px 4px 10px #2ea8df;

  :hover {
    opacity: 0.8;
  }

  :active {
    opacity: 0.5;
  }

  @media (max-width: 800px) {
    width: 100px;
    margin-left: 35%;
    margin-top: 30px;
    border-radius: 40px;
  }
`;

export const ListItems = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  width: 500px;
  height: 60px;
  background: ${(props) => (props.isFinished ? "#55F13A" : "#E4E4E4")};
  text-decoration: ${(props) => (props.isFinished ? "line-through" : "none")};
  box-shadow: 1px 4px 10px rgba(0, 0, 0, 0.2);
  border-radius: 5px;
  margin-bottom: 30px;
  font-size: 20px;
  padding: 0 20px;

  li {
    list-style: none;
  }

  @media (max-width: 800px) {
    width: 100%;
    text-align: center;
    font-size: 16px;
  }
`;

export const H3 = styled.h3`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 400px;
  height: 60px;
  margin: 0 auto;
  border-radius: 10px;
  color: #808080;
  background-color: #e4e4e4;

  @media (max-width: 800px) {
    width: 300px;
  }
`;

export const Trash = styled(FaTrash)`
  cursor: pointer;
`;

export const Check = styled(FaCheckCircle)`
  cursor: pointer;
`;

export const EmojiSad = styled(FaRegSadTear)`
  margin: 10px;
`;
