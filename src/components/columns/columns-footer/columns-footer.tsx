import { FC, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { boardAction } from "../../../store/board/index";
import { RootState } from "../../../store/root-reducer";
import styles from "./styles";

interface ColumnsFooterProps {
  columnId: number;
  isCardAdding: boolean;
}

const ColumnsFooter: FC<ColumnsFooterProps> = ({ columnId, isCardAdding }) => {
  const [cardName, setCardName] = useState("");
  const userName = useSelector((state: RootState) => state.userName.userName);
  const dispatch = useDispatch();

  function addNewCard(columnId: number, cardName: string) {
    dispatch(boardAction.pushNewCard(columnId, cardName, userName));
    setCardName("");
  }

  if (!isCardAdding) {
    return (
      <styles.AddNewCard
        onClick={() => {
          dispatch(boardAction.toggleAddCardField(columnId));
        }}
      >
        + Add new card
      </styles.AddNewCard>
    );
  }
  return (
    <>
      <styles.CardInput
        type="text"
        placeholder="Enter a title for this card"
        value={cardName}
        onChange={(e) => setCardName(e.target.value)}
        onKeyDown={(ev) => {
          if (ev.key === "Enter") {
            addNewCard(columnId, cardName);
          }
        }}
      />
      <styles.AddCardButtn onClick={() => addNewCard(columnId, cardName)}>
        add card
      </styles.AddCardButtn>
      <styles.CancelCardButtn
        className="fas fa-times"
        onClick={() => {
          dispatch(boardAction.toggleAddCardField(-1));
        }}
      />
    </>
  );
};

export default ColumnsFooter;
