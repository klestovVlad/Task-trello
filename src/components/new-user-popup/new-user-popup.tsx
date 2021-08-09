import { FC, useState } from "react";
import { useSelector } from "react-redux";

import { RootState } from "../../store/root-reducer";
import NewUserForm from "./new-user-form";
import { Popup, Question, Shadow } from "./styles";

const NewUserPopup: FC = () => {
  const userName = useSelector((state: RootState) => state.userName.userName);

  const [isPopupNewUserShow, setIsPopupNewUserShow] = useState(
    userName === undefined || userName === "",
  );

  const initialValues = {
    userName: userName,
  };

  if (isPopupNewUserShow) {
    return (
      <Shadow>
        <Popup>
          <Question>what is your name?</Question>
          <NewUserForm
            initialValues={initialValues}
            setIsPopupNewUserShow={setIsPopupNewUserShow}
          />
        </Popup>
      </Shadow>
    );
  }
  return <></>;
};

export default NewUserPopup;
