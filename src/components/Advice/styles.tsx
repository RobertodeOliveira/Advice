import styled from "styled-components"

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  
  margin: 0;
  width: 100vw;
  height: 100vh;
  background-color: hsl(218, 23%, 16%);
`

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 500px;
  height: 300px;
  background-color: hsl(217, 19%, 24%);
  border-radius: 12px;
  `

  export const Button = styled.button`
    width: 50px;
    height: 50px;
    border-radius: 50%;
    z-index: 1;
    margin-top: 300px;
    
    border: none;
    background-color: hsl(150,100%,66%);
  `