import arrayMutators from "final-form-arrays";
import { FC } from "react";
import { Field, Form } from "react-final-form";

import CardCommnetsField from "./card-fields/card-comments";
import CardDescriptionField from "./card-fields/card-description";
import CardNameField from "./card-fields/card-name";
import CardNewCommnetField from "./card-fields/card-new-comment";
import styles from "./styles";

export interface Values {
  columnName: string;
  name: string;
  author: string;
  description: string;
  comment: Comment[];
  newComment: string;
  currentUser: string;
  columnId: number;
  cardNum: number;
}

interface Comment {
  userText: string;
  author: string;
}

interface CardFormProps {
  initialValues: Values;
}

export const CardForm: FC<CardFormProps> = ({ initialValues }) => {
  const onSubmit = async (values: Values) => {
    console.log(values);
  };
  return (
    <Form
      onSubmit={onSubmit}
      initialValues={initialValues}
      mutators={{
        ...arrayMutators,
      }}
      render={({ handleSubmit, values }) => (
        <form onSubmit={handleSubmit}>
          <Field
            name="name"
            component={CardNameField}
            columnId={values.columnId}
            cardNum={values.cardNum}
          ></Field>
          <p>
            in column&nbsp;
            {values.columnName}
          </p>
          <i className="fa fa-list" aria-hidden="true" />
          &nbsp;
          <styles.H3>Description</styles.H3>
          <Field
            name="description"
            component={CardDescriptionField}
            columnId={values.columnId}
            cardNum={values.cardNum}
          ></Field>
          <i className="fa fa-comments" aria-hidden="true" />
          &nbsp;
          <styles.H3>Сomments</styles.H3>
          <CardNewCommnetField {...values} />
          <Field
            name="comment"
            component={CardCommnetsField}
            columnId={values.columnId}
            cardNum={values.cardNum}
          />
        </form>
      )}
    />
  );
};
