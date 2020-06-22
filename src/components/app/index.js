import { h, Component } from "preact";

import Button from '../button';
import Popup from '../popup';

import { GlobalStyled, Widget } from './styled';

export default class App extends Component {
  constructor() {
    super(); 

    this.state = {
      willClose: false,
      open: false
    }

    this.handlePopup = this.handlePopup.bind(this);
  }

  handlePopup() {
    this.setState(({ open }) => ({
      open: !open
    }))
  }

  render() {
    return (
      <Widget>
        <GlobalStyled />
        <Button onClick={this.handlePopup} />
        {this.state.open && (
          <Popup open={this.state.open} onClick={this.handlePopup} />
        )}
      </Widget>
    );
  }
}
