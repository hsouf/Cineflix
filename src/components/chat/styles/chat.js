import styled from 'styled-components/macro';
import * as Colors from '../../../constants/colors';

export const Container = styled.div`
  display: flex;
  justify-content: center;
  position: fixed;
  right: 0;
  width: 24%;
  height: fit-content;
`;

export const Header = styled.div`
  background-color: #151515;
  border: solid 0.5px rgba(70, 70, 70, 0.8);
  top: 0;
  width: 100%;
  height: 10vh;
  min-height: 50px;
  color: white;
  position: absolute;
  display: flex;
  justify-content: center;
  z-index: 99;
  box-sizing: border-box;
`;

export const Title = styled.h1`
  text-transform: uppercase;
  font-size: 1.35rem;
  margin: 0;
  align-self: center;
  letter-spacing: 0.4px;
`;

export const Body = styled.div`
  display: flex;
  position: relative;
  width: 100%;
  flex-direction: column;
  justify-content: center;
  min-height: 100vh;
  border: solid 0.5px rgba(70, 70, 70, 0.8);
  background-color: rgb(43, 43, 46);
`;

export const Main = styled.main`
  padding: 10px;
  height: 81.25vh;
  margin: 10vh 0 8.75vh;
  overflow-y: scroll;
  display: flex;
  flex-direction: column;
  &::-webkit-scrollbar {
    width: 0.25rem;
  };
  &::-webkit-scrollbar-track {
    background: #1e1e24;
  };
  &::-webkit-scrollbar-thumb {
    background: ${Colors.TERTIARY_COLOR};
  };
`;

export const Message = styled.div`
  padding: 0, 4px;
  position: relative;
  with: fit-content;
  height: fit-content;
  &:hover {
    background-color: #45454599;
    border-radius: 5px;
  };
`;

export const Image = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  margin: 20px 5px;
  float: left;
`;

export const Bubble = styled.div`
  margin-left: 55px;
  width: 0%;
  height: 100%;
  position: relative;
`;

export const Username = styled.p`
  position: relative;
  color: rgb(153, 153, 153);
  margin: 0;
  margin-left: 56px;
  margin-top: 19.5px;
  word-wrap: break-word;
`;

export const Text = styled.p`
  position: relative;
  color: white;
  margin; 0;
  margin-left: 56px;
  margin-top: 7px;
  word-wrap: break-word;
`;

export const Form = styled.form`
  height: 8.75vh;
  position: absolute;
  bottom: 0;
  background-color: rgb(24, 23, 23);
  width: 100%;
  display: flex;
  font-size: 1.5rem;
`;

export const Input = styled.input`
  line-height: 1.5;
  left: 0;
  width: 100%;
  font-size: 1.2rem;
  background: rgb(58, 58, 58);
  color: white;
  outline: none;
  border: none;
  padding: 0 10px;
`;

export const Button = styled.button`
  border: none;
  color: white;
  padding: 15px 32px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  cursor: pointer;
  font-size: 1.35rem;
  width: 30%;
  background-color: ${Colors.TERTIARY_COLOR};
  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  };
`;