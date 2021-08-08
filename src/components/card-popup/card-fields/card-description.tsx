import { FC } from "react";
import { Field } from "react-final-form";

import styles from "../styles";

const CardDescriptionField: FC = () => {
  return (
    <Field name="description">
      {({ input, meta }) => (
        <div>
          <styles.CardDescription {...input} placeholder="Type your description..." />
          {meta.error && meta.touched && <span>{meta.error}</span>}
        </div>
      )}
    </Field>
  );
};

export default CardDescriptionField;
