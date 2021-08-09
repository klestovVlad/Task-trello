import { FC } from "react";
import { Field, FieldRenderProps } from "react-final-form";
import { useDispatch } from "react-redux";

import actions from "../../../state/board/actions";
import styles from "../styles";

type Props = FieldRenderProps<number, HTMLElement>;

const CardDescriptionField: FC<Props> = ({ columnId, cardNum }) => {
  const dispatch = useDispatch();
  return (
    <Field name="description">
      {({ input, meta }) => (
        <div>
          <styles.CardDescription
            {...input}
            onBlur={() =>
              dispatch(actions.cardDescriptionChange(input.value, columnId, cardNum))
            }
            placeholder="Type your description..."
          />
          {meta.error && meta.touched && <span>{meta.error}</span>}
        </div>
      )}
    </Field>
  );
};

export default CardDescriptionField;
