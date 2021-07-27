import { Dispatch, FC, ReducerAction, SetStateAction, useRef, useState } from "react";

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
  commentNum: number;
  thisCard: ICard;
  focusOnTextarea(num: number): void;
  dispathc: Dispatch<SetStateAction<ReducerAction<any>>>;
}

const CommentRow: FC<CommentRowProps> = ({
  columnId,
  cardNum,
  textAreaFocus,
  commentNum,
  thisCard,
  focusOnTextarea,
  dispathc,
}) => {
  const [newComment, setNewComment] = useState(thisCard.comment[commentNum].text);
  const [commentCode, setCommentCode] = useState("//");
  const inputEl = useRef<HTMLTextAreaElement>(null);

  const commentEdit = (columnId: number, cardNum: number, conmentNum: number) => {
    setCommentCode(`${columnId}/${cardNum}/${conmentNum}`);
  };

  const chekCommentCode = (): boolean => {
    const result: boolean = commentCode !== `${columnId}/${cardNum}/${commentNum}`;
    return result;
  };

  const onButtonEditClick = () => {
    commentEdit(columnId, cardNum, commentNum);
    setTimeout(() => inputEl.current?.focus(), 10);
  };

  const onBlurComment = () => {
    setTimeout(() => {
      setNewComment(thisCard.comment[commentNum]?.text);
      commentEdit(-1, -1, -1);
      focusOnTextarea(-2);
    }, 100);
  };
  return (
    <CommentRowContainer>
      <AutorLogo>
        {returnTwoLetterFromName(thisCard.comment[commentNum].author)}
      </AutorLogo>
      <CardCommentContainer>
        <h4>{thisCard.comment[commentNum].author}</h4>
        <NewCommentInput
          onChange={(e) => {
            setNewComment(e.target.value);
            // props.comment.text = e.target.value;
          }}
          textAreaFocus={textAreaFocus == commentNum}
          ref={inputEl}
          onFocus={() => focusOnTextarea(commentNum)}
          onBlur={onBlurComment}
          disabled={chekCommentCode()}
          value={newComment}
        />
        <SaveCommentButton
          style={{ bottom: "35px" }}
          textAreaFocus={textAreaFocus == commentNum}
          newComment={newComment}
          onClick={() => {
            dispathc({
              type: "commentEditSave",
              payload: {
                columnId: columnId,
                cardNum: cardNum,
                commentNum: commentNum,
                newComment: newComment,
              },
            });
          }}
        >
          save
        </SaveCommentButton>
        <p>
          <Сaption onClick={() => onButtonEditClick()}>Edit</Сaption>
          &nbsp;
          <Сaption
            onClick={() => {
              dispathc({
                type: "commentDelite",
                payload: {
                  columnId: columnId,
                  cardNum: cardNum,
                  commentNum: commentNum,
                },
              });
            }}
          >
            Delete
          </Сaption>
        </p>
      </CardCommentContainer>
    </CommentRowContainer>
  );
};

export default CommentRow;
