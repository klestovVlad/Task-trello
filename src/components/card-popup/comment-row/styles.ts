import styled from "styled-components";

const CardCommentContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
`;

const Сaption = styled.span`
  margin: 0;
  text-decoration: underline;
  cursor: pointer;
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

const CommentRowContainer = styled.div`
  position: relative;
  display: flex;
  margin: 35px 0 10px 0;
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

interface SaveCommentButtonProps {
  textAreaFocus: boolean;
  newComment: string;
}

const SaveCommentButton = styled.button<SaveCommentButtonProps>`
  display: ${(props) => (props.textAreaFocus ? "block" : "none")};
  position: absolute;
  bottom: 35px;
  left: 47px;
  padding: 8px 30px;
  font-family: inherit;
  transition: all 0.1s;
  cursor: ${(props) => (props.newComment.length > 0 ? "pointer" : "not-allowed")};
  border: none;
  color: ${(props) => (props.newComment.length > 0 ? "white" : "grey")};
  border-radius: 3px;
  background: ${(props) => (props.newComment.length > 0 ? "#0079BF" : "#F5F6F8")};
`;

export default {
  CardCommentContainer,
  Сaption,
  AutorLogo,
  CommentRowContainer,
  NewCommentInput,
  SaveCommentButton,
};
