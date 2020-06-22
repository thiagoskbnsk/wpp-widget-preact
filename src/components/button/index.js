import { h } from "preact";

import { ButtonStyled, Img } from './styled';

const Button = ({ onClick }) => {
  return (
    <ButtonStyled onClick={onClick}>
      <Img src="http://200.98.129.191:8080/dashboard/assets/img/whatsapp-icon.png" />
    </ButtonStyled>
  )
}

export default Button;