import React from 'react';
import { Container, Error, Base, Title, Text, TextSmall, Link, Input, Submit } from './styles/sign-form';

export default function SignForm({ children, ...restProps }) {
  return <Container {...restProps}>{children}</Container>;
}

SignForm.Error = function FormError({ children, ...restProps }) {
  return <Error {...restProps}>{children}</Error>;
};

SignForm.Base = function FormBase({ children, ...restProps }) {
  return <Base {...restProps}>{children}</Base>;
};

SignForm.Title = function FormTitle({ children, ...restProps }) {
  return <Title {...restProps}>{children}</Title>;
};

SignForm.Text = function FormText({ children, ...restProps }) {
  return <Text {...restProps}>{children}</Text>;
};

SignForm.TextSmall = function FormTextSmall({ children, ...restProps }) {
  return <TextSmall {...restProps}>{children}</TextSmall>;
};

SignForm.Link = function FormLink({ children, ...restProps }) {
  return <Link {...restProps}>{children}</Link>;
};

SignForm.Input = function FormInput({ children, ...restProps }) {
  return <Input {...restProps}>{children}</Input>;
};

SignForm.Submit = function FormSubmit({ children, ...restProps }) {
  return <Submit {...restProps}>{children}</Submit>;
};
