import styled, { injectGlobal } from 'styled-components'

export const GlobalStyled = injectGlobal`
  @import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap');

  * {
    box-sizing: border-box;
  }

  body {
    font-family: Roboto, sans-serif;
  }
`;

export const Widget = styled.div`
  position: absolute;
  bottom: 20px;
  right: 20px;
`;