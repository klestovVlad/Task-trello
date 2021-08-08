import { FC } from "react";
import { Form } from "react-final-form";

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
}

interface Comment {
  text: string;
  author: string;
}

export const CardForm: FC<Values> = (initValue) => {
  const onSubmit = async (values: Values) => {
    console.log(values);
  };

  return (
    <Form
      onSubmit={onSubmit}
      initialValues={initValue}
      render={({ handleSubmit, values }) => (
        <form onSubmit={handleSubmit}>
          <CardNameField />
          <p>
            in column&nbsp;
            {values.columnName}
          </p>
          <i className="fa fa-list" aria-hidden="true" />
          &nbsp;
          <styles.H3>Description</styles.H3>
          <CardDescriptionField />
          <i className="fa fa-comments" aria-hidden="true" />
          &nbsp;
          <styles.H3>Сomments</styles.H3>
          <CardNewCommnetField {...values} />
          <CardCommnetsField {...values} />
          <pre>{JSON.stringify(values)}</pre>
        </form>
      )}
    />
  );
};
