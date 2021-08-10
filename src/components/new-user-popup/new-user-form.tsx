import { Dispatch, FC, SetStateAction } from "react";
import { Field, Form } from "react-final-form";
import { useDispatch } from "react-redux";

import { UserAction } from "../../store/user/index";
import { UserName } from "../../store/user/state";
import { composeValidators } from "../../units/validation";
import { ButtonApply, Input, Inputwrapper } from "./styles";

interface NewUserFormProps {
  initialValues: UserName;
  setIsPopupNewUserShow: Dispatch<SetStateAction<boolean>>;
}

const NewUserForm: FC<NewUserFormProps> = ({ setIsPopupNewUserShow, initialValues }) => {
  const dispatch = useDispatch();
  const onSubmit = async (values: { userName: string }) => {
    dispatch(UserAction.applyName(values));
    setIsPopupNewUserShow(false);
  };
  const required = (value: undefined | string) => (value ? undefined : "Required");

  return (
    <Form
      onSubmit={onSubmit}
      initialValues={initialValues}
      render={({ handleSubmit, submitting, values }) => (
        <form onSubmit={handleSubmit}>
          <Field name="userName" validate={composeValidators(required)}>
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
