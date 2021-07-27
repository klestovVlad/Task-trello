import { useEffect } from "react";
import { FC, useContext, useState } from "react";

import dataContext from "../../context/data";
import { CardPopup } from "../card-popup/index";
import { Columns } from "../columns/index";
import { NewUserPopup } from "../new-user-popup/index";
import Board from "./styles";

const Main: FC = () => {
  const [columnId, setColumnId] = useState(0);
  const [cardNum, setCardNum] = useState(0);
  const [isPopupCardShow, setIsPopupCardShow] = useState(false);
  const [isPopupNewUserShow, setIsPopupNewUserShow] = useState(
    localStorage.userName === undefined,
  );

  const { data, dispathc } = useContext(dataContext);

  const showCardPopup = (Id: number, cNum: number) => {
    setIsPopupCardShow(true);
    setColumnId(Id);
    setCardNum(cNum);
  };

  const closeCardPopup = () => {
    setIsPopupCardShow(false);
  };

  const newUserName = (userName: string) => {
    if (userName.length > 0) {
      localStorage.userName = userName;
      setIsPopupNewUserShow(false);
    }
  };

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const handleKeywordKeyPress = (event: any): void => {
    if (event.key == "Escape") {
      closeCardPopup();
    }
  };

  useEffect(() => {
    window.addEventListener("keydown", handleKeywordKeyPress, false);
    return () => window.removeEventListener("keydown", handleKeywordKeyPress, false);
  }, []);

  useEffect(() => {
    localStorage.data = JSON.stringify(data);
  });

  return (
    <>
      <Board>
        {Object.keys(data).map((item) => (
          <Columns
            key={data[item].id}
            data={data[item]}
            dispathc={dispathc}
            showCardPopup={showCardPopup}
          />
        ))}
      </Board>
      <CardPopup
        columnId={columnId}
        cardNum={cardNum}
        isPopupCardShow={isPopupCardShow}
        closeCardPopup={closeCardPopup}
        dispathc={dispathc}
      />
      <NewUserPopup isPopupShow={isPopupNewUserShow} newUserName={newUserName} />
    </>
  );
};

export default Main;
