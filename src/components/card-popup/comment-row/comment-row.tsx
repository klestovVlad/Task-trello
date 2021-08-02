import { FC, useContext, useRef, useState } from "react";
import { useDispatch } from "react-redux";

import { CardStructure } from "../../../context/board/data";
import { returnTwoLetterFromName } from "../card-popup";
import actions from "./action";
import styles from "./styles";

interface CommentRowProps {
  columnId: number;
  cardNum: number;
  textAreaFocus: number;
  commentNum: number;
  thisCard: CardStructure;
  focusOnTextarea(num: number): void;
}

const CommentRow: FC<CommentRowProps> = ({
  columnId,
  cardNum,
  textAreaFocus,
  commentNum,
  thisCard,
  focusOnTextarea,
}) => {
  const [newComment, setNewComment] = useState(thisCard.comment[commentNum].text);
  const [commentCode, setCommentCode] = useState("//");
  const inputEl = useRef<HTMLTextAreaElement>(null);
  const dispatch = useDispatch();

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
    <styles.CommentRowContainer>
      <styles.AutorLogo>
        {returnTwoLetterFromName(thisCard.comment[commentNum].author)}
      </styles.AutorLogo>
      <styles.CardCommentContainer>
        <h4>{thisCard.comment[commentNum].author}</h4>
        <styles.NewCommentInput
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
        <styles.SaveCommentButton
          style={{ bottom: "35px" }}
          textAreaFocus={textAreaFocus == commentNum}
          newComment={newComment}
          onClick={() => {
            dispatch(actions.commentEditSave(columnId, cardNum, commentNum, newComment));
          }}
        >
          save
        </styles.SaveCommentButton>
        <p>
          <styles.Сaption onClick={() => onButtonEditClick()}>Edit</styles.Сaption>
          &nbsp;
          <styles.Сaption
            onClick={() => {
              dispatch(actions.commentDelite(columnId, cardNum, commentNum));
            }}
          >
            Delete
          </styles.Сaption>
        </p>
      </styles.CardCommentContainer>
    </styles.CommentRowContainer>
  );
};

export default CommentRow;
