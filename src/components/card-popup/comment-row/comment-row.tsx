import { FC, useRef, useState } from "react";

import { ICard } from "../../../context/data";
import { returnTwoLetterFromName } from "../card-popup";
import {
  AutorLogo,
  CommentRowContainer,
  NewCommentInput,
  SaveCommentButton,
} from "../styles";
import { CardCommentContainer, Сaption } from "./styles";

interface CommentRowProps {
  columnId: number;
  cardNum: number;
  textAreaFocus: number;
  lineNum: number;
  thisCard: ICard;
  commentCode: string;
  focusOnTextarea(num: number): void;
  commentEdit(columnId: number, cardNum: number, conmentNum: number): void;
  commentEditSave(
    columnId: number,
    cardNum: number,
    conmentNum: number,
    newComment: string,
  ): void;
  commentDelite(columnId: number, cardNum: number, conmentNum: number): void;
}

const CommentRow: FC<CommentRowProps> = ({
  columnId,
  cardNum,
  textAreaFocus,
  lineNum,
  thisCard,
  commentCode,
  focusOnTextarea,
  commentEdit,
  commentEditSave,
  commentDelite,
}) => {
  const [newComment, setNewComment] = useState(thisCard.comment[lineNum].text);
  const inputEl = useRef<HTMLTextAreaElement>(null);

  const onButtonEditClick = () => {
    commentEdit(columnId, cardNum, lineNum);
    setTimeout(() => inputEl.current?.focus(), 10);
  };

  const onBlurComment = () => {
    setTimeout(() => {
      setNewComment(thisCard.comment[lineNum]?.text);
      commentEdit(-1, -1, -1);
      focusOnTextarea(-2);
    }, 100);
  };
  return (
    <CommentRowContainer>
      <AutorLogo>{returnTwoLetterFromName(thisCard.comment[lineNum].author)}</AutorLogo>
      <CardCommentContainer>
        <h4>{thisCard.comment[lineNum].author}</h4>
        <NewCommentInput
          onChange={(e) => {
            setNewComment(e.target.value);
            // props.comment.text = e.target.value;
          }}
          textAreaFocus={textAreaFocus == lineNum}
          ref={inputEl}
          onFocus={() => focusOnTextarea(lineNum)}
          onBlur={onBlurComment}
          disabled={commentCode !== `${columnId}/${cardNum}/${lineNum}`}
          value={newComment}
        />
        <SaveCommentButton
          style={{ bottom: "35px" }}
          textAreaFocus={textAreaFocus == lineNum}
          newComment={newComment}
          onClick={() => {
            commentEditSave(columnId, cardNum, lineNum, newComment);
          }}
        >
          save
        </SaveCommentButton>
        <p>
          <Сaption onClick={() => onButtonEditClick()}>Edit</Сaption>
          &nbsp;
          <Сaption onClick={() => commentDelite(columnId, cardNum, lineNum)}>
            Delete
          </Сaption>
        </p>
      </CardCommentContainer>
    </CommentRowContainer>
  );
};

export default CommentRow;
