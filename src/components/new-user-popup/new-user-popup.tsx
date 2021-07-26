import React, { useState } from "react";

import { ButtonApply, Input, Popup, Question, Shadow } from "./styles";

interface NewUserPopupProps {
  isPopupShow: boolean;
  newUserName(userName: string): void;
}

const NewUserPopup: React.FC<NewUserPopupProps> = ({ isPopupShow, newUserName }) => {
  const [userName, setuserName] = useState("");
  const nameAply = () => {
    newUserName(userName);
  };
  if (isPopupShow) {
    return (
      <Shadow>
        <Popup>
          <Question>what is your name?</Question>
          <Input
            type="text"
            value={userName}
            placeholder="Type your name..."
            onChange={(e) => {
              setuserName(e.target.value);
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
