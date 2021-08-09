import { FC, useState } from "react";
import { useDispatch } from "react-redux";

import actions from "../../../state/board/actions";
import styles from "../comment-row/styles";

function returnTwoLetterFromName(name: string) {
  return name
    .split(" ")
    .map((i) => i[0])
    .slice(0, 2)
    .join("");
}

const CardCommnetsField: FC<any> = ({ input, columnId, cardNum }) => {
  const dispatch = useDispatch();

  const [textAreaFocus, setTextAreaFocus] = useState(-1);
  const focusOnTextarea = (focus: number) => {
    setTimeout(() => setTextAreaFocus(focus), 100);
  };
  return input.value.map((item: any, index: any) => (
    <styles.CommentRowContainer key={index}>
      <styles.AutorLogo>{returnTwoLetterFromName(item.author)}</styles.AutorLogo>
      <styles.CardCommentContainer>
        <h4>{item.author}</h4>
        <styles.NewCommentInput
          value={item.userText}
          textAreaFocus={textAreaFocus === index}
          onFocus={() => focusOnTextarea(index)}
          onBlur={() => focusOnTextarea(-1)}
          onChange={(e) =>
            input.onChange(
              input.value.map((n: any, i: any) =>
                i === index ? { ...n, userText: e.target.value } : n,
              ),
            )
          }
        ></styles.NewCommentInput>
        <styles.SaveCommentButton
          textAreaFocus={textAreaFocus === index}
          newComment={item.userText}
          onClick={() => {
            dispatch(actions.commentEditSave(columnId, cardNum, index, item.userText));
          }}
        >
          save
        </styles.SaveCommentButton>
        <p>
          &nbsp;
          <styles.Сaption
            onClick={() => {
              dispatch(actions.commentDelete(columnId, cardNum, index));
            }}
          >
            Delete
          </styles.Сaption>
        </p>
      </styles.CardCommentContainer>
    </styles.CommentRowContainer>
  ));
};

export default CardCommnetsField;
