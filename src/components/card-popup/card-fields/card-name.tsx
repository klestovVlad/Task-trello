import { FC } from "react";
import { Field } from "react-final-form";

import styles from "../styles";

const CardNameField: FC = () => {
  return (
    <Field name="name">
      {({ input, meta }) => (
        <div>
          <i className="fa fa-list-alt" aria-hidden="true" />
          &nbsp;
          <styles.CardHeader {...input} type="text" placeholder="card name" />
          {meta.error && meta.touched && <span>{meta.error}</span>}
        </div>
      )}
    </Field>
  );
};

export default CardNameField;
