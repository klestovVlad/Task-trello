import React, { useState } from 'react';
import {
  Shadow,
  Popup,
  Question,
  Input,
  ButtonApply,
} from '../styles/newUserPopupStyle';

interface NewUserPopupProps {
  isPopupShow: boolean;
  newUserName(userName:string):void;
}

const NewUserPopup:React.FC<NewUserPopupProps> = (props) => {
  const [userName, setuserName] = useState('');
  const nameAply = () => {
    props.newUserName(userName);
  };
  if (props.isPopupShow) {
    return (
      <Shadow>
        <Popup>
          <Question>
            what is your name?
          </Question>
          <Input
            type="text"
            value={userName}
            placeholder="Type your name..."
            onChange={(e) => {
              setuserName(e.target.value);
            }}
            onKeyDown={(ev) => {
              if (ev.key === 'Enter') {
                nameAply();
              }
            }}
          />
          <ButtonApply
            onClick={nameAply}
            startInput={userName.length > 0}
          >
            Apply
          </ButtonApply>
        </Popup>
      </Shadow>
    );
  }
  return (
    <></>
  );
};

export default NewUserPopup;
