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
interface Comment {
  userText: string;
  author: string;
}

const CardCommnetsField: FC<Comment> = (values) => {
  console.log(values);
  return (
    <Field name="userText">
      {({ input }) => (
        <styles.CommentRowContainer>
          <styles.AutorLogo>{returnTwoLetterFromName(values.author)}</styles.AutorLogo>
          <styles.CardCommentContainer>
            <h4>{values.author}</h4>
            <styles.NewCommentInput {...input} textAreaFocus={false} />
          </styles.CardCommentContainer>
        </styles.CommentRowContainer>
      )}
    </Field>
  );
};

export default CardCommnetsField;
