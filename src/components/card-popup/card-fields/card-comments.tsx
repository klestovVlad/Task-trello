import { FC, useState } from "react";
import { FieldRenderProps } from "react-final-form";
import { useDispatch } from "react-redux";

import { boardAction } from "../../../store/board/index";
import { Comment } from "../../../store/board/state";
import styles from "../styles";

function returnTwoLetterFromName(name: string) {
  return name
    .split(" ")
    .map((i) => i[0])
    .slice(0, 2)
    .join("");
}

interface CardCommnetsFieldProps extends FieldRenderProps<Comment[]> {
  columnId: number;
  cardNum: number;
}

const CardCommnetsField: FC<CardCommnetsFieldProps> = ({ input, columnId, cardNum }) => {
  const dispatch = useDispatch();

  const [textAreaFocus, setTextAreaFocus] = useState(-1);
  const focusOnTextarea = (focus: number) => {
    setTimeout(() => setTextAreaFocus(focus), 100);
  };
  return (
    <>
      {input.value.map((item, index) => (
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
                  input.value.map((n, i) =>
                    i === index ? { ...n, userText: e.target.value } : n,
                  ),
                )
              }
            ></styles.NewCommentInput>
            <styles.SaveCommentButton
              style={{ bottom: "35px" }}
              textAreaFocus={textAreaFocus === index}
              newComment={item.userText}
              onClick={() => {
                dispatch(
                  boardAction.commentEditSave(columnId, cardNum, index, item.userText),
                );
              }}
            >
              save
            </styles.SaveCommentButton>
            <p>
              &nbsp;
              <styles.Сaption
                onClick={() => {
                  dispatch(boardAction.commentDelete(columnId, cardNum, index));
                }}
              >
                Delete
              </styles.Сaption>
            </p>
          </styles.CardCommentContainer>
        </styles.CommentRowContainer>
      ))}
    </>
  );
};

export default CardCommnetsField;
