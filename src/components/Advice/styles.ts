import styled from "styled-components"

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  
  margin: 0;
  width: 100vw;
  height: 100vh;

  background-color: hsl(218, 23%, 16%);
`

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  justify-content: center;

  width: 550px;
  height: 330px;
  padding: 32px;

  background-color: hsl(217, 19%, 24%);
  border-radius: 12px;
  z-index: 0;
  `

const NumberAdvice = styled.h3`
  font-size: 16px;
  font-family: Manrope;
  letter-spacing: 4px;
  color: hsl(150, 100%, 66%);
`

const TextAdvice = styled.p`
  font-size: 28px;
  font-family: Manrope;
  font-weight: 800;
  margin-bottom: 30px;

  color: hsl(193, 38%, 86%);
`

const ImageDivider = styled.img`
  margin-top: 10px;
`

const Button = styled.button`
    width: 55px;
    height: 55px;
    border-radius: 70%;
    z-index: 10;
    margin-top: 390px;
    
    position: fixed;
    display: flex;
    align-items: center;
    justify-content: center;

    border: none;
    background-color: hsl(150,100%,66%);

    :hover{
      cursor: pointer;

      box-shadow: 0px 1px 20px 3px hsl(150,100%,66%), 0px 1px 2px 1px hsl(150,100%,66%);
      transition: box-shadow 0.3s;
      filter: blur(0.1px);
    }
  `

export { Button, NumberAdvice, Container, Wrapper, TextAdvice, ImageDivider }
