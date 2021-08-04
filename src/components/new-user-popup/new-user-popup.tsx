import { FC, useState } from "react";
import { useDispatch } from "react-redux";

import action from "../../state/user/actions";
import { ButtonApply, Input, Popup, Question, Shadow } from "./styles";

const NewUserPopup: FC = () => {
  const dispatch = useDispatch();
  const [userName, setUserName] = useState("");
  const [isPopupNewUserShow, setIsPopupNewUserShow] = useState(
    localStorage.userName === undefined,
  );

  const nameAply = () => {
    dispatch(action.applyName());
    setIsPopupNewUserShow(false);
  };
  if (isPopupNewUserShow) {
    return (
      <Shadow>
        <Popup>
          <Question>what is your name?</Question>
          <Input
            type="text"
            value={userName}
            placeholder="Type your name..."
            onChange={(e) => {
              setUserName(e.target.value);
              dispatch(action.typeNewUserName(userName));
            }}
            onKeyDown={(ev) => {
              if (ev.key === "Enter") {
                nameAply();
              }
            }}
          />
          <ButtonApply onClick={nameAply} startInput={userName.length > 0}>
            Apply
          </ButtonApply>
        </Popup>
      </Shadow>
    );
  }
  return <></>;
};

export default NewUserPopup;

//userName.length > 0
