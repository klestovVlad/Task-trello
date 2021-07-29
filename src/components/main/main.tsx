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

  const { data } = useContext(dataContext);

  const showCardPopup = (Id: number, cNum: number) => {
    setIsPopupCardShow(true);
    setColumnId(Id);
    setCardNum(cNum);
  };

  const closeCardPopup = () => {
    setIsPopupCardShow(false);
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

  return (
    <>
      <Board>
        {Object.keys(data).map((item) => (
          <Columns
            key={data[item].id}
            dataColumn={data[item]}
            showCardPopup={showCardPopup}
          />
        ))}
      </Board>
      <CardPopup
        columnId={columnId}
        cardNum={cardNum}
        isPopupCardShow={isPopupCardShow}
        closeCardPopup={closeCardPopup}
      />
      <NewUserPopup />
    </>
  );
};

export default Main;
