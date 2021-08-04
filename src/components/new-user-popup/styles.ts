import styled from "styled-components";

export const Shadow = styled.div`
  position: absolute;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.3);
  backdrop-filter: blur(4px);
  top: 0;
  left: 0;
  z-index: 2;
  display: block;
`;
export const Popup = styled.div`
  position: absolute;
  padding: 25px;
  background-color: white;
  border-radius: 10px;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;
export const Question = styled.h2`
  background: linear-gradient(96.5deg, #e9aee7 0%, #f8848b 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  max-width: 400px;
  text-align: center;
  font-size: 36px;
  padding: 15px;
  margin-top: 0;
`;
export const Input = styled.input`
  background: #efefef;
  width: 100%;
  height: 50px;
  border-radius: 5px;
  font-size: 18px;
  color: #172b4d;
`;

interface ButtonApplyProps {
  startInput: boolean;
}

export const ButtonApply = styled.button<ButtonApplyProps>`
  background: ${(props) =>
    props.startInput ? "linear-gradient(96.5deg, #E9AEE7 0%, #F8848B 100%)" : "grey"};
  padding: 10px;
  font-family: inherit;
  font-size: 16px;
  margin: 10px auto;
  white-space: nowrap;
  width: 100px;
  text-align: center;
  border-radius: 5px;
  cursor: pointer;
  color: white;
  border: none;
  display: block;
`;

export const Inputwrapper = styled.div`
  span {
    color: red;
  }
`;
