import { useEffect } from "react";
import { FC, useState } from "react";
import { useSelector } from "react-redux";

import { selectStoreData } from "../../store/board/index";
import { CardPopup } from "../card-popup/index";
import { Columns } from "../columns/index";
import { NewUserPopup } from "../new-user-popup/index";
import CardBoard from "./styles";

const Board: FC = () => {
  const [columnId, setColumnId] = useState(0);
  const [cardNum, setCardNum] = useState(0);
  const [isPopupCardShow, setIsPopupCardShow] = useState(false);

  const data = useSelector(selectStoreData);

  const showCardPopup = (Id: number, cNum: number) => {
    setIsPopupCardShow(true);
    setColumnId(Id);
    setCardNum(cNum);
  };

  const closeCardPopup = () => {
    setIsPopupCardShow(false);
  };

  const handleKeywordKeyPress = (event: KeyboardEvent): void => {
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
      <CardBoard>
        {Object.keys(data).map((item) => (
          <Columns
            key={data[item].id}
            dataColumn={data[item]}
            showCardPopup={showCardPopup}
          />
        ))}
      </CardBoard>
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

export default Board;
