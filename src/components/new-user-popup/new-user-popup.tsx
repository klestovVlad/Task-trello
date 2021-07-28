import { FC, useContext, useState } from "react";

import { UserNameContext } from "../../context/data";
import { ButtonApply, Input, Popup, Question, Shadow } from "./styles";

const NewUserPopup: FC = () => {
  const { userName, setUserName } = useContext(UserNameContext);
  const [isPopupNewUserShow, setIsPopupNewUserShow] = useState(
    userName === undefined || userName.length < 1,
  );

  console.log(userName === undefined || userName.length < 1);
  console.log(isPopupNewUserShow);
  const nameAply = () => {
    setUserName(userName);
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
