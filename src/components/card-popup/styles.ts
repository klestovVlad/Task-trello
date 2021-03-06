import styled from "styled-components";

const ShadowCard = styled.div`
  position: absolute;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(1px);
  top: 0;
  left: 0;
  z-index: 2;
  display: block;
`;

const PopUpCard = styled.div`
  position: absolute;
  padding: 25px 40px;
  background-color: #f4f5f7;
  border-radius: 10px;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: #172b4d;
  width: 700px;
  max-width: 100%;
  max-height: 100%;
  overflow-x: auto;
`;

const CloseIcon = styled.i`
  position: absolute;
  top: 25px;
  right: 25px;
  cursor: pointer;
`;

const CardHeader = styled.input`
  background: transparent;
  border-radius: 3px;
  box-shadow: none;
  font-size: 20px;
  font-weight: 600;
  line-height: 24px;
  min-height: 32px;
  padding: 4px 0;
  color: #172b4d;
  width: calc(100% - 35px);
  resize: none;
`;

const H3 = styled.h3`
  display: inline-block;
  margin: 15px 0 0 0;
`;

const CardDescription = styled.textarea`
  color: #172b4d;
  font-family: inherit;
  font-size: 16px;
  font-weight: 400;
  padding: 5px 0;
  width: 100%;
  resize: none;
  background: #f4f5f7;
  border: none;
`;

const CommentRowContainer = styled.div`
  position: relative;
  display: flex;
  margin: 15px 0 10px 0;
`;

const AutorLogo = styled.div`
  display: block;
  font-size: 12px;
  font-weight: 700;
  height: 32px;
  line-height: 32px;
  overflow: hidden;
  text-align: center;
  width: 32px;
  border-radius: 50%;
  background-color: rgba(94, 108, 132, 0.3);
  text-transform: uppercase;
  margin-right: 5px;
`;

interface NewCommentInputProps {
  textAreaFocus: boolean;
}

const NewCommentInput = styled.textarea<NewCommentInputProps>`
  background-color: white;
  border: 1px solid #d2d4dc;
  border-radius: 3px;
  padding: 8px 10px;
  widht: 100%;
  margin: 5px 0;
  flex-grow: 1;
  font-family: inherit;
  margin: 0;
  resize: none;
  transition: all 0.6s;
  height: ${(props) => (props.textAreaFocus ? "100" : "40")}px;
  font-family: inherit;
  color: #172b4d;
  font-size: 14px;
`;

const DeleteButton = styled.button`
  border: none;
  background: none;
  color: #d63031;
  cursor: pointer;
`;

interface SaveCommentButtonProps {
  textAreaFocus: boolean;
  newComment: string | undefined;
}

const SaveCommentButton = styled.button<SaveCommentButtonProps>`
  display: ${(props) => (props.textAreaFocus ? "block" : "none")};
  position: absolute;
  bottom: 10px;
  left: 47px;
  padding: 8px 30px;
  font-family: inherit;
  transition: all 0.1s;
  cursor: ${(props) =>
    props.newComment == undefined || props.newComment.length > 0
      ? "pointer"
      : "not-allowed"};
  border: none;
  color: ${(props) =>
    props.newComment == undefined || props.newComment.length > 0 ? "white" : "grey"};
  border-radius: 3px;
  background: ${(props) =>
    props.newComment == undefined || props.newComment.length > 0 ? "#0079BF" : "#F5F6F8"};
`;

const SaveCommentEditButton = styled(SaveCommentButton)`
  bottom: 35px;
`;

export const CardCommentContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
`;

export const ??aption = styled.span`
  margin: 0;
  text-decoration: underline;
  cursor: pointer;
`;

export const DeleteButtonRow = styled.div`
  float: right;
  i {
    color: #d63031;
  }
`;

export default {
  ShadowCard,
  PopUpCard,
  CloseIcon,
  CardHeader,
  H3,
  CardDescription,
  CommentRowContainer,
  AutorLogo,
  NewCommentInput,
  DeleteButton,
  SaveCommentButton,
  CardCommentContainer,
  ??aption,
  DeleteButtonRow,
  SaveCommentEditButton,
};
