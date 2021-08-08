import { Dispatch, FC, SetStateAction } from "react";
import { Field, Form } from "react-final-form";
import { useDispatch } from "react-redux";

import action from "../../state/user/actions";
import { ButtonApply, Input, Inputwrapper } from "./styles";

interface NewUserFormProps {
  setIsPopupNewUserShow: Dispatch<SetStateAction<boolean>>;
}

const NewUserForm: FC<NewUserFormProps> = ({ setIsPopupNewUserShow }) => {
  const dispatch = useDispatch();
  const onSubmit = async (values: { userName: string }) => {
    dispatch(action.applyName(values));
    setIsPopupNewUserShow(false);
  };
  const required = (value: undefined | string) => (value ? undefined : "Required");

  return (
    <Form
      onSubmit={onSubmit}
      initialValues={{ userName: "test" }}
      render={({ handleSubmit, submitting, values }) => (
        <form onSubmit={handleSubmit}>
          <Field name="userName" validate={required}>
            {({ input, meta }) => (
              <Inputwrapper>
                <Input {...input} type="text" placeholder="Type your name..." />
                {meta.error && meta.touched && <span>{meta.error}</span>}
              </Inputwrapper>
            )}
          </Field>
          <div className="buttons">
            <ButtonApply
              type="submit"
              disabled={submitting}
              startInput={JSON.stringify(values).length > 2}
            >
              Apply
            </ButtonApply>
          </div>
        </form>
      )}
    />
  );
};

export default NewUserForm;
