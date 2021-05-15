import React from 'react';
import {
  Container,
  Header,
  Title,
  Body,
  Form,
  Input,
  Button,
  Main,
  Message,
  Image,
  Bubble,
  Text,
  Username,
} from './styles/chat';

export default function Chat({ children, ...restProps }) {
  return <Container {...restProps}>{children}</Container>;
}

Chat.Header = function ChatHeader({ children, ...restProps }) {
  return <Header {...restProps}>{children}</Header>;
};

Chat.Title = function ChatTitle({ children, ...restProps }) {
  return <Title {...restProps}>{children}</Title>;
};

Chat.Body = function ChatBody({ children, ...restProps }) {
  return <Body {...restProps}>{children}</Body>;
};

Chat.Main = function ChatMain({ children, ...restProps }) {
  return <Main {...restProps}>{children}</Main>;
};

Chat.Message = function ChatMessage({ children, ...restProps }) {
  return <Message {...restProps}>{children}</Message>;
};

Chat.Image = function ChatImage({ children, ...restProps }) {
  return <Image {...restProps}>{children}</Image>;
};

Chat.Bubble = function ChatBubble({ children, ...restProps }) {
  return <Bubble {...restProps}>{children}</Bubble>;
};

Chat.Username = function ChatUsername({ children, ...restProps }) {
  return <Username {...restProps}>{children}</Username>;
};

Chat.Text = function ChatText({ children, ...restProps }) {
  return <Text {...restProps}>{children}</Text>;
};

Chat.Form = function ChatForm({ submit, children, ...restProps }) {
  return (
    <Form onSubmit={submit} {...restProps}>
      {children}
    </Form>
  );
};

Chat.Input = function ChatInput({ placeHolder, children, ...restProps }) {
  return (
    <Input placeholder={placeHolder} {...restProps}>
      {children}
    </Input>
  );
};

Chat.Button = function ChatButton({ children, ...restProps }) {
  return <Button {...restProps}>{children}</Button>;
};
