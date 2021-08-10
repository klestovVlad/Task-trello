import { useState } from "react";
import { FC } from "react";
import { Field } from "react-final-form";
import { useDispatch } from "react-redux";

import { boardAction } from "../../../store/board/index";
import { Values } from "../card-form";
import styles from "../styles";

function returnTwoLetterFromName(name: string) {
  return name
    .split(" ")
    .map((i) => i[0])
    .slice(0, 2)
    .join("");
}

const CardNewCommnetField: FC<Values> = ({
  author,
  newComment,
  currentUser,
  columnId,
  cardNum,
}) => {
  const dispatch = useDispatch();
  const [textAreaFocus, setTextAreaFocus] = useState(false);
  const focusOnTextarea = (focus: boolean) => {
    setTimeout(() => setTextAreaFocus(focus), 100);
  };
  const addNewComment = () => {
    if (newComment.length > 0) {
      dispatch(
        boardAction.addNewComment({ columnId, cardNum, newComment, userName: author }),
      );
    }
  };
  return (
    <Field name="newComment">
      {({ input }) => (
        <styles.CommentRowContainer>
          <styles.AutorLogo>{returnTwoLetterFromName(currentUser)}</styles.AutorLogo>
          <styles.NewCommentInput
            {...input}
            placeholder="Type your comment..."
            onFocus={() => focusOnTextarea(true)}
            onBlur={() => focusOnTextarea(false)}
            textAreaFocus={textAreaFocus}
          />
          <styles.SaveCommentButton
            textAreaFocus={textAreaFocus}
            newComment={newComment}
            onClick={addNewComment}
          >
            save
          </styles.SaveCommentButton>
        </styles.CommentRowContainer>
      )}
    </Field>
  );
};

export default CardNewCommnetField;
