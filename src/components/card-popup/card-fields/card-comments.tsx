import { FC } from "react";
import { Field } from "react-final-form";

import { Values } from "../card-form";
import styles from "../comment-row/styles";

function returnTwoLetterFromName(name: string) {
  return name
    .split(" ")
    .map((i) => i[0])
    .slice(0, 2)
    .join("");
}

const CardCommnetsField: FC<Values> = (values) => {
  return (
    <>
      {values.comment.map((item) => (
        <Field name="Comment">
          {({ input }) => (
            <styles.CommentRowContainer>
              <styles.AutorLogo>{returnTwoLetterFromName(item.author)}</styles.AutorLogo>
              <styles.CardCommentContainer>
                <h4>{item.author}</h4>
                <styles.NewCommentInput {...input} textAreaFocus={false} />
              </styles.CardCommentContainer>
            </styles.CommentRowContainer>
          )}
        </Field>
      ))}
    </>
  );
};

export default CardCommnetsField;
