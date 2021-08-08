import { FC } from "react";
import { Field } from "react-final-form";
import { useDispatch } from "react-redux";

import actions from "../../../state/board/actions";
import styles from "../styles";

interface CardNameFieldProps {
  columnId: number;
  cardNum: number;
}

const CardNameField: FC<CardNameFieldProps> = ({ columnId, cardNum }) => {
  const dispatch = useDispatch();
  return (
    <Field name="name">
      {({ input, meta }) => (
        <div>
          <i className="fa fa-list-alt" aria-hidden="true" />
          &nbsp;
          <styles.CardHeader
            {...input}
            onBlur={() =>
              dispatch(actions.cardNameChange(input.value, columnId, cardNum))
            }
            type="text"
            placeholder="card name"
          />
          {meta.error && meta.touched && <span>{meta.error}</span>}
        </div>
      )}
    </Field>
  );
};

export default CardNameField;
