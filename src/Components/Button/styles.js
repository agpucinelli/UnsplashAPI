import styled from "styled-components";


export const ButtonStl = styled.div`
display: flex;
justify-content: center;
align-items: center;
margin-top: 5px;

`
export const ButtonItem = styled.button`
background-color: purple;
font-family:monospace;
  color: white;
  padding: 10px 20px;
  border: none;
  border-radius: 4px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
  transition: all 0.3s ease;

  &:hover {
    background-color: darkblue;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.3);
    transform: translateY(-2px);
  }

  &:focus {
    outline: none;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.3);
  }

`



