import { h, Component } from 'preact'

import { GrClose } from 'react-icons/gr';

import { 
  Card,

  CardHeader,
  CardAvatar,
  CardDetails,
  CardName,
  CardStatus,
  CardCloseButton,

  CardBody,
  ChatMessage,
  ChatMessageFrom,
  ChatMessageText,
  ChatMessageTime,

  CardFooter,
  CardButton,
} from './styled';

class Popup extends Component {
  constructor(props) {
    super(props);

    this.state = {
      typing: true
    }
  }

  getCurrentTime() {
    const date = new Date();
    const timeString = date.toTimeString();

    const time = timeString.substring(0, 5);
    
    return time;
  }

  fakeTyping() {
    const { typing } = this.state;

    if (typing) {
      setTimeout(() => {
        this.setState({
          typing: false
        })
      }, 1000)

      return (
        <ChatMessage>
          <ChatMessageText>
            <i>Bot is typing...</i>
          </ChatMessageText>
        </ChatMessage>
      )
    }

    return (
      <ChatMessage>
        <ChatMessageFrom>Bot User</ChatMessageFrom>
        <ChatMessageText>
          Hi, 👋 how can I help you?
        </ChatMessageText>
        <ChatMessageTime>
          {this.getCurrentTime()}
        </ChatMessageTime>
      </ChatMessage>
    );
  }

  render() {
    return (
      <Card>
        <CardHeader>
          <CardAvatar src="https://img.icons8.com/plasticine/2x/bot.png" />
          <CardDetails>
            <CardName>Bot User</CardName>
            <CardStatus>Online</CardStatus>
          </CardDetails>
          <CardCloseButton onClick={this.props.onClick}>
            <GrClose />
          </CardCloseButton>
        </CardHeader>
        <CardBody>
          {this.fakeTyping()}
        </CardBody>
        <CardFooter>
          <CardButton href="https://api.whatsapp.com/send?phone=+5541992556375&text=Hello+everyone" target="_blank" rel="noopener noreferer">
            Open chat
          </CardButton>
        </CardFooter>
      </Card>
    )
  }
}

export default Popup