import styled, { css, keyframes } from 'styled-components';
  
const showDiv = keyframes`
  0% {
    opacity: 0;
  }

  100% {
    opacity: 1;
  }
`;

const hideDiv = keyframes`
  0% {
    opacity: 1;
  }

  100% {
    opacity: 0;
  }
`;

export const Card = styled.div`
  width: 320px;
  position: relative;
  bottom: 70px;
  right: 50px;

  opacity: 0;

  transition: opacity 0.05s ease-in-out;

  animation: ${showDiv} 0.1s 0.05s ease-in;
  animation-fill-mode: forwards;
`

export const CardHeader = styled.div`
  padding: 20px 15px;
  background: #095e54;
  display: flex;
  position: relative;
  border-radius: 6px 6px 0 0;
`
export const CardAvatar = styled.img`
  width: 52px;
  height: 52px;
  background-color: #fff;
  border-radius: 50%;
`

export const CardDetails = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding-left: 15px;
`

export const CardName = styled.p`
  text-transform: uppercase;
  color: #fff;
  margin: 0 0 4px;
  font-size: 16px;
  font-weight: 700;
`

export const CardStatus = styled.p`
  text-transform: uppercase;
  color: #fff;
  margin: 0;
  font-size: 13px;
`

export const CardCloseButton = styled.div`
  position: absolute;
  right: 12px;
  top: 12px;
  cursor: pointer;

  svg, path {
    fill: #fff;
    stroke: #fff;
  }
`

export const CardBody = styled.div`
  padding: 15px;
  background: url("https://i.redd.it/qwd83nc4xxf41.jpg");
  height: 170px;
`
export const ChatMessage = styled.div`
  padding: 7px 7px 7px 15px;
  background: #e6ddd4;
  border-radius: 0 4px 4px;
  width: 99%
`

export const ChatMessageFrom = styled.p`
  font-size: 13px;
  font-weight: 700;
  margin: 0 0 4px;
`
export const ChatMessageText = styled.p`
  font-size: 14px;
  margin: 0;
`

export const ChatMessageTime = styled.p`
  text-align: right;
  font-size: 11px;
  margin: 0;
`

export const CardFooter = styled.div`
  padding: 25px
  background: #fff;
`

export const CardButton = styled.a`
  padding: 10px;
  color: #fff;
  text-decoration: none;
  background: #24cd63;
  justify-content: center;
  align-items: center;
  width: 100%;
  display: inline-block;
  text-align: center;
  border-radius: 25px;
`