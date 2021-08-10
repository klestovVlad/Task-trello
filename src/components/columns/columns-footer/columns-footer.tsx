import { FC, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { boardAction } from "../../../store/board/index";
import { selectUserName } from "../../../store/user/index";
import styles from "./styles";

interface ColumnsFooterProps {
  columnId: number;
  isCardAdding: boolean;
}

const ColumnsFooter: FC<ColumnsFooterProps> = ({ columnId, isCardAdding }) => {
  const [cardName, setCardName] = useState("");
  const userName = useSelector(selectUserName);
  const dispatch = useDispatch();

  function addNewCard(columnId: number, cardName: string) {
    dispatch(boardAction.pushNewCard({ columnId, cardName, userName }));
    setCardName("");
  }

  if (!isCardAdding) {
    return (
      <styles.AddNewCard
        onClick={() => {
          dispatch(boardAction.toggleAddCardField({ id: columnId }));
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
          dispatch(boardAction.toggleAddCardField({ id: -1 }));
        }}
      />
    </>
  );
};

export default ColumnsFooter;
