import React from 'react';
import {
  Container,
  Inner,
  Top,
  TopWrapper,
  PreTitle,
  Title,
  Body,
  FootNote,
  SelectWrapper,
  SelectionLabel,
  SelectionInput,
  Selection,
  Table,
  TableRow,
  NoBorderTableRow,
  TableFeature,
  TableCell,
  Footer,
  PaymentBadge,
  PaymentWrapper,
  PaymentButton,
  PaymentText,
  PaymentArrow,
  PaymentType,
  PaymentLogo,
  PaymentImage,
  OrderContainer,
  OrderText,
  OrderPrice,
  OrderPlan,
  OrderButton,
  Agreement,
  AgreementInput,
  AgreementLabel,
} from './styles/informer';

export default function Informer({ children, ...restProps }) {
  return <Container {...restProps}>{children}</Container>;
}

Informer.Inner = function InformerInner({ children, ...restProps }) {
  return <Inner {...restProps}>{children}</Inner>;
};

Informer.Top = function InformerTop({ children, ...restProps }) {
  return <Top {...restProps}>{children}</Top>;
};

Informer.TopWrapper = function InformerTopWrapper({ children, ...restProps }) {
  return <TopWrapper {...restProps}>{children}</TopWrapper>;
};

Informer.PreTitle = function InformerPreTitle({ children, ...restProps }) {
  return <PreTitle {...restProps}>{children}</PreTitle>;
};

Informer.Title = function InformerTitle({ children, ...restProps }) {
  return <Title {...restProps}>{children}</Title>;
};

Informer.Body = function InformerBody({ children, ...restProps }) {
  return <Body {...restProps}>{children}</Body>;
};

Informer.FootNote = function InformerFootNote({ children, ...restProps }) {
  return <FootNote {...restProps}>{children}</FootNote>;
};

Informer.SelectWrapper = function InformerSelectWrapper({ children, ...restProps }) {
  return <SelectWrapper {...restProps}>{children}</SelectWrapper>;
};

Informer.Selection = function InformerSelection({ id, name, value, defaultChecked = false, children, ...restProps }) {
  return (
    <SelectionLabel htmlFor={id} {...restProps}>
      <SelectionInput type="radio" name={name} id={id} defaultChecked={defaultChecked} value={value} />
      <Selection>{children}</Selection>
    </SelectionLabel>
  );
};

Informer.Table = function InformerTable({ children, ...restProps }) {
  return <Table {...restProps}>{children}</Table>;
};

Informer.TableRow = function InformerTableRow({ children, ...restProps }) {
  return <TableRow {...restProps}>{children}</TableRow>;
};

Informer.NoBorderTableRow = function InformerNoBorderTableRow({ children, ...restProps }) {
  return <NoBorderTableRow {...restProps}>{children}</NoBorderTableRow>;
};

Informer.TableFeature = function InformerTableFeature({ children, ...restProps }) {
  return <TableFeature {...restProps}>{children}</TableFeature>;
};

Informer.TableCell = function InformerTableCell({ children, ...restProps }) {
  return <TableCell {...restProps}>{children}</TableCell>;
};

Informer.Footer = function InformerFooter({ children, ...restProps }) {
  return (
    <Footer {...restProps}>
      <span>{children}</span>
    </Footer>
  );
};

Informer.PaymentBadge = function InformerPaymentBadge({ children, ...restProps }) {
  return <PaymentBadge {...restProps}>{children}</PaymentBadge>;
};

Informer.PaymentWrapper = function InformerPaymentWrapper({ children, ...restProps }) {
  return <PaymentWrapper {...restProps}>{children}</PaymentWrapper>;
};

Informer.PaymentButton = function InformerPaymentButton({ children, ...restProps }) {
  return (
    <PaymentButton {...restProps}>
      <PaymentText>
        <PaymentType>
          <span>Credit or Debit Card</span>
        </PaymentType>
        <PaymentLogo>
          <span
            style={{
              float: 'none',
              whiteSpace: 'nowrap',
              marginTop: '-4px',
              maxHeight: '60px',
              lineHeight: 'normal',
              verticalAlign: 'middle',
              display: 'inline-block',
              overflow: 'auto',
              position: 'relative',
            }}
          >
            {children}
          </span>
        </PaymentLogo>
      </PaymentText>
      <PaymentArrow />
    </PaymentButton>
  );
};

Informer.PaymentImage = function InformerPaymentImage({ children, ...restProps }) {
  return <PaymentImage {...restProps}>{children}</PaymentImage>;
};

Informer.OrderContainer = function InformerOrderContainer({ children, ...restProps }) {
  return <OrderContainer {...restProps}>{children}</OrderContainer>;
};

Informer.OrderText = function InformerOrderText({ children, ...restProps }) {
  return <OrderText {...restProps}>{children}</OrderText>;
};

Informer.OrderPrice = function InformerOrderPrice({ children, ...restProps }) {
  return <OrderPrice {...restProps}>{children}</OrderPrice>;
};

Informer.OrderPlan = function InformerOrderPlan({ children, ...restProps }) {
  return <OrderPlan {...restProps}>{children}</OrderPlan>;
};

Informer.OrderButton = function InformerOrderButton({ children, ...restProps }) {
  return (
    <OrderButton type="button" {...restProps}>
      {children}
    </OrderButton>
  );
};

Informer.Agreement = function InformerAgreement({ id, children, ...restProps }) {
  return (
    <Agreement {...restProps}>
      <AgreementInput type="checkbox" id={id} required />
      <AgreementLabel htmlFor={id}>{children}</AgreementLabel>
    </Agreement>
  );
};
