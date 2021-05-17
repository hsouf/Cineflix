import styled from 'styled-components/macro';
import * as Colors from '../../../constants/colors';

export const Container = styled.div`
  display: flex;
  justify-content: center;
  position: fixed;
  right: 0;
  width: 24%;
  height: fit-content;
  @media (max-width: 810px) {
    display: none;
  }
`;

export const Header = styled.div`
  background-color: #151515;
  border: solid 0.5px rgba(70, 70, 70, 0.8);
  top: 0;
  width: 100%;
  height: 9.5vh;
  min-height: 50px;
  color: white;
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 99;
  box-sizing: border-box;
`;

export const Title = styled.h1`
  text-transform: uppercase;
  font-size: 1.1vw;
  margin: 0;
  letter-spacing: 0.4px;
`;

export const ChatBody = styled.div`
  display: flex;
  position: relative;
  width: 100%;
  flex-direction: column;
  justify-content: center;
  min-height: 100vh;
  border: solid 0.5px rgba(70, 70, 70, 0.8);
  background-color: rgb(40, 40, 40);
`;

export const UserBody = styled.div`
  display: flex;
  position: relative;
  width: 100%;
  flex-direction: column;
  justify-content: center;
  min-height: 100vh;
  border: solid 0.5px rgba(70, 70, 70, 0.8);
  background-color: rgb(40, 40, 40);
`;

export const FriendInput = styled.input`
  left: 0;
  width: 96.5%;
  margin: 4px;
  color: white;
  padding: 14px 0;
  position: relative;
  background: #151515;
  height: fit-content;
  border-radius: 3px;
  transition: border 0.2s ease;
  border: solid 2px rgba(70, 70, 70, 0.8);
  padding-left: 10px;
  outline: none;
  &:hover {
    border: solid 2px rgba(255, 165, 0, 0.5);
  }
  &:focus {
    border: solid 2px rgba(255, 165, 0, 1);
  }
`;

export const InviteButton = styled.button`
  margin-top: -3%;
  margin-left: 8%;
  border: none;
  color: white;
  justify-content: center;
  align-items: center;
  text-decoration: none;
  display: flex;
  cursor: pointer;
  font-size: 1.8rem;
  width: 86%;
  padding: 9px 0;
  border-radius: 3px;
  background-color: ${Colors.TERTIARY_COLOR};
  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`;

export const FriendSearch = styled.div`
  margin-top: 1px;
  background-color: #151515;
  border: solid 0.5px rgba(70, 70, 70, 0.8);
  width: 97.65%;
  height: 23vh;
  min-height: 50px;
  color: white;
  position: relative;
  display: none;
  // justify-content: center;
  align-items: center;
  box-sizing: border-box;
  overflow-y: scroll;
  flex-direction: column;
  &::-webkit-scrollbar {
    width: 0.25rem;
  }
  &::-webkit-scrollbar-track {
    background: #1e1e24;
  }
  &::-webkit-scrollbar-thumb {
    background: ${Colors.TERTIARY_COLOR};
  }
`;

export const SubHeader = styled.div`
  background-color: #1c1c1c;
  border: solid 0.5px rgba(70, 70, 70, 0.8);
  width: 100%;
  height: 8.5vh;
  min-height: 40px;
  color: white;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  box-sizing: border-box;
`;

export const Main = styled.main`
  padding: 10px;
  height: 81.75vh;
  margin: 9.5vh 0 8.75vh;
  overflow-y: scroll;
  display: flex;
  flex-direction: column;
  &::-webkit-scrollbar {
    width: 0.25rem;
  }
  &::-webkit-scrollbar-track {
    background: #1e1e24;
  }
  &::-webkit-scrollbar-thumb {
    background: ${Colors.TERTIARY_COLOR};
  }
`;

export const FriendMain = styled.main`
  padding: 10px;
  height: fit-content;
  margin: 9.5vh 0 0;
  display: flex;
  flex-direction: column;
`;

export const Friend = styled.button`
  padding: 10px;
  border: none;
  background-color: #00000000;
  position: relative;
  align-items: center;
  display: flex;
  width: 100%;
  height: fit-content;
  cursor: pointer;
  &:hover {
    background-color: #45454599;
    border-radius: 5px;
  }
  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`;

export const FriendOverlay = styled.div`
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  font-size: 0;
  z-index: 99;
`;

export const FriendImage = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  float: left;
`;

export const FriendUsername = styled.p`
  font-size: 1.1rem;
  position: relative;
  color: #fff;
  margin: 0 12px;
`;

export const FriendStatus = styled.span`
  font-size: 1.1rem;
  position: relative;
  color: rgb(153, 153, 153);
  margin: 0 3px;
`;

// height ---> 70.5vh when normal and 47.5vh on friends search
export const UserMain = styled.main`
  padding: 20px 25px;
  height: 70.5vh;
  margin: 0;
  overflow-y: scroll;
  display: flex;
  flex-direction: column;
  &::-webkit-scrollbar {
    width: 0.25rem;
  }
  &::-webkit-scrollbar-track {
    background: #1e1e24;
  }
  &::-webkit-scrollbar-thumb {
    background: ${Colors.TERTIARY_COLOR};
  }
`;

export const Message = styled.div`
  padding: 0, 4px;
  position: relative;
  height: fit-content;
  &:hover {
    background-color: #45454599;
    border-radius: 5px;
  }
`;

export const MessageImage = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  margin: 15.75px 0;
  margin-left: 10px;
  float: left;
`;

export const MessageUsername = styled.p`
  position: relative;
  color: rgb(153, 153, 153);
  margin: 0;
  margin-left: 64px;
  margin-top: 14px;
  margin-right: 10px;
  word-wrap: break-word;
`;

export const MessageText = styled.p`
  position: relative;
  color: white;
  margin; 0;
  margin-left: 64px;
  margin-top: 8px;
  margin-bottom: 14px;
  margin-right: 10px;
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
  justify-content: center;
  align-items: center;
  text-decoration: none;
  display: flex;
  cursor: pointer;
  font-size: 2.2rem;
  width: 32.5%;
  background-color: ${Colors.TERTIARY_COLOR};
  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`;

export const ModalTitle = styled.h1`
  width: 100%;
  font-size: 2.2rem;
`;

export const ModalText = styled.p`
  width: 100%;
  margin-top: 4px;
  font-size: 1.5rem;
  word-wrap: break-word;
  line-height: 1.4;
`;

export const ModalConfirm = styled.button`
  border: solid 1px #000;
  color: white;
  font-weight: bold;
  justify-content: center;
  align-items: center;
  align-self: center;
  text-decoration: none;
  display: flex;
  cursor: pointer;
  font-size: 1.6rem;
  width: 67.5%;
  padding: 25px 8px;
  background-color: ${Colors.TERTIARY_COLOR};
  border-radius: 6px;
  opacity: 0.85;
  box-shadow: 0px 6px 6px -5px rgba(255, 165, 0, 0.5);
  transition: opacity 0.2s ease, box-shadow 0.3s ease;
  &:hover {
    opacity: 1;
    box-shadow: 0px 0.5px 5px 5px rgba(255, 165, 0, 0.55);
  }
`;
