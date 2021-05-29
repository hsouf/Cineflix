import styled from 'styled-components/macro';

import * as COLORS from '../../../constants/colors';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  border-top: 1px solid #606060;
  border-bottom: 1px solid #606060;
  height: auto;
  padding: 0;
  padding-bottom: 95px;
  color: white;
`;

export const Inner = styled.div`
  margin: 0 auto 15px;
  width: 100%;
  max-width: 1024px;
  height: 100%;
  padding: 32px;
`;

export const Top = styled.div`
  max-width: 420px;
  margin: 0 auto;
  width: 100%;
  height: 100%;
  display: grid;
`;

export const TopWrapper = styled.div`
  display: inline-block;
`;

export const PreTitle = styled.span``;

export const Title = styled.h1`
  font-weight: 700;
  font-size: 23px;
  margin: 0.4rem 0;
`;

export const Body = styled.h2`
  line-height: 1.6;
`;

export const FootNote = styled.p`
  line-height: 1.6;
  margin-top: 2.25rem;
  font-size: 17px;
`;

export const SelectWrapper = styled.div`
  display: flex;
  width: 100%;
  place-content: flex-end;
  grid-template-columns: repeat(3, auto);
  grid-template-rows: repeat(1, auto);
`;

export const SelectionLabel = styled.label`
  position: relative;
  width: calc(67% / 3);
  height: auto;
  text-align: -webkit-center;
  margin: 0 0 12px 0;
  @media (max-width: 700px) {
    width: calc(100% / 3);
    padding: 0px 4px;
  }
`;

export const Selection = styled.div`
  cursor: pointer;
  color: black;
  text-align: center;
  border-radius: 2px;
  box-shadow: 0 2px 4px 0 rgba(21, 21, 21, 0);
  border: solid 2px transparent;
  background: #c0c0c0;
  font-size: 100%;
  padding: 15px;
  display: grid;
  place-content: center;
  transition: 0.1s linear all;
  user-select: none;
  @media (min-width: 951px) {
    width: 120px;
    height: 120px;
  }
  @media (max-width: 950px) and (min-width: 701px) {
    width: 90px;
    height: 90px;
  }
`;

export const Table = styled.table`
  display: flex;
  flex-direction: column;
  padding-bottom: 10px;
`;

export const TableBody = styled.tbody`
  display: flex;
  flex-direction: column;
`;

export const TableRow = styled.tr`
  display: flex;
  align-items: center;
  border-bottom: 1px solid #606060;
  @media only screen and (min-width: 951px), only screen and (max-width: 950px) and (min-width: 701px) {
    min-height: 60px;
  }
  @media only screen and (max-width: 700px) {
    flex-wrap: wrap;
  }
`;

export const NoBorderTableRow = styled.tr`
  display: flex;
  align-items: center;
  @media only screen and (min-width: 951px), only screen and (max-width: 950px) and (min-width: 701px) {
    min-height: 60px;
  }
  @media only screen and (max-width: 700px) {
    flex-wrap: wrap;
  }
`;

export const TableFeature = styled.td`
  color: #c0c0c0;
  fill: #c0c0c0;
  flex: 0 0 auto;
  text-align: left;
  display: block;
  @media only screen and (min-width: 951px), only screen and (max-width: 950px) and (min-width: 701px) {
    width: calc(99% / 3);
    padding: 12px 15.85px;
  }
  @media only screen and (max-width: 700px) {
    width: 100%;
    text-align: center;
    font-size: 13px;
    padding: 16px 8px 4px;
    min-height: 37px;
    position: relative;
  }
`;

export const TableCell = styled.td`
  font-weight: 700;
  color: #e0e0e0;
  fill: #e0e0e0;
  flex: 1 1 auto;
  text-align: center;
  display: block;
  box-sizing: border-box;
  transition: 0.1s linear all;
  @media only screen and (min-width: 951px), only screen and (max-width: 950px) and (min-width: 701px) {
    width: calc(60% / 3);
    padding: 12px 16px;
  }
  @media only screen and (max-width: 700px) {
    width: calc(100% / 3);
    min-height: 37px;
    padding: 8px;
    position: relative;
  }
`;

export const SelectionInput = styled.input`
  display: none;
  &:checked ~ ${Selection} {
    box-shadow: 0 0 3px 1.5px rgba(255, 165, 0, 0.7);
    color: white;
    background: ${COLORS.TERTIARY_COLOR};
    &:after {
      content: '';
      transform: translateX(-50%);
      display: block;
      border: 0px solid transparent;
      border-top-color: ${COLORS.TERTIARY_COLOR};
      position: absolute;
      top: 100%;
      left: 50%;
      border-width: 12px;
    }
  }
`;

export const Footer = styled.small`
  text-align: start;
  padding: 6px 180px 6px 16px;
  color: #c0c0c0;
  font-size: 13px;
  display: block;
`;

export const PaymentBadge = styled.div`
  -webkit-box-align: end;
  align-items: flex-end;
  display: flex;
  -webkit-box-orient: horizontal;
  -webkit-box-direction: reverse;
  flex-direction: row-reverse;
  height: 16px;
  justify-content: flex-start;
`;

export const PaymentWrapper = styled.div`
  min-height: 60px;
  position: relative;
  margin: 5px 0;
`;

export const PaymentButton = styled.a`
  min-height: 60px;
  height: auto;
  display: flex;
  -webkit-box-align: center;
  align-items: center;
  text-decoration: none;
  line-height: 60px;
  color: #333;
  background-color: #fff;
  margin: 5px 0;
  border: 2px solid #606060;
  border-radius: 5px;
  transition: position 0.5s ease-in;
  cursor: pointer;
`;

export const PaymentText = styled.div`
  height: auto;
  padding: 15px 0;
  display: flex;
  -webkit-box-pack: start;
  justify-content: flex-start;
  -webkit-box-align: center;
  align-items: center;
  flex-wrap: wrap;
  width: 90%;
  line-height: 60px;
  text-align: left;
`;

export const PaymentType = styled.div`
  margin-right: 0;
  margin-top: 5px;
  margin-bottom: 5px;
  float: none;
  max-width: none;
  min-height: 20px;
  line-height: 20px;
  margin: 0 15px;
  user-select: none;
`;

export const PaymentLogo = styled.div`
  min-height: 20px;
  line-height: 20px;
  overflow: hidden;
`;

export const PaymentImage = styled.img`
  width: auto;
  background-image: none;
  max-width: 100%;
  border: 0;
  height: 25px;
  margin: 5px 6px 1px 0;
  float: left;
  white-space: nowrap;
  user-select: none;
`;

export const PaymentArrow = styled.span`
  font-size: 19px;
  position: absolute;
  top: 50%;
  right: 0;
  transform: translateY(-50%);
  margin-right: 10px;
  vertical-align: bottom;
  float: right;
  background-image: url(https://assets.nflxext.com/ffe/siteui/acquisition/reg_selection/chevron_060915_2.svg);
  speak: none;
  font-style: normal;
  font-weight: 400;
  font-variant: normal;
  text-transform: none;
  line-height: 1;
  height: 1em;
  width: 1em;
  margin: 0 0.2em;
  display: inline-block;
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center center;
`;

export const OrderContainer = styled.div`
  padding: 0;
  margin: 0;
  text-align: left;
  background-color: #ccc;
  border-radius: 5px;
  margin-top: 4px;
  height: 70px;
  width: 100%;
  display: flex;
`;

export const OrderText = styled.div`
  -webkit-box-flex: 1;
  flex: 1 1 auto;
  display: flex;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  flex-direction: column;
  -webkit-box-pack: center;
  justify-content: center;
  padding: 0 14px;
  line-height: 16px;
  height: 70px;
  box-sizing: border-box;
  overflow: hidden;
  width: 80%;
`;

export const OrderPrice = styled.div`
  font-size: 16px;
  font-weight: 700;
  color: #333;
`;

export const OrderPlan = styled.div`
  padding-top: 5px;
  font-size: 16px;
  font-weight: 400;
  color: #606060;
`;

export const OrderButton = styled.button`
  font-size: 16px;
  appearance: none;
  background: 0 0;
  border: 0;
  border-top-color: initial;
  border-top-style: initial;
  border-top-width: 0px;
  border-right-color: initial;
  border-right-style: initial;
  border-right-width: 0px;
  border-bottom-color: initial;
  border-bottom-style: initial;
  border-bottom-width: 0px;
  border-left-color: initial;
  border-left-style: initial;
  border-left-width: 0px;
  border-image-source: initial;
  border-image-slice: initial;
  border-image-width: initial;
  border-image-outset: initial;
  border-image-repeat: initial;
  margin: 0;
  padding: 14px;
  -webkit-box-flex: 0;
  flex: 0 0 auto;
  font-weight: 700;
  color: ${COLORS.SECONDARY_COLOR};
  cursor: pointer;
  font-family: inherit;
  &:hover {
    text-decoration: underline;
  }
`;

export const Agreement = styled.div`
  width: 100%;
  position: relative;
  box-sizing: border-box;
  padding-left: 36px;
  user-select: none;
  min-height: 32px;
  font-size: 16px;
  max-width: 500px;
`;

export const AgreementLabel = styled.label`
  margin: 8px 0;
  position: relative;
  display: block;
  line-height: 1.2;
  padding: 6px 0;
  &:before {
    width: 25px;
    height: 25px;
    content: '';
    position: absolute;
    display: block;
    top: 2px;
    left: -36px;
    padding: 0;
    border: 1px solid;
    border-color: #b52a00;
    background-color: #fff;
  }
`;

export const AgreementInput = styled.input`
  position: absolute;
  top: 10px;
  left: 0;
  opacity: 0;
  width: 25px;
  height: 25px;
  &:checked ~ ${AgreementLabel} {
    &:after {
      display: block;
      position: absolute;
      top: 6.5px;
      left: -31.95px;
      height: 11px;
      width: 16.5px;
      color: ${COLORS.SECONDARY_COLOR};
      content: '';
      border-bottom: 4px solid;
      border-left: 4px solid;
      transform: rotate(-45deg);
    }
    &:before {
      border-color: ${COLORS.SECONDARY_COLOR};
    }
  }
`;
