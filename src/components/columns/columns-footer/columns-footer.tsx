import { FC, useContext, useState } from "react";

import dataContext from "../../../context/board/data";
import { UserNameContext } from "../../../context/user/data";
import actions from "./actions";
import styles from "./styles";

interface ColumnsFooterProps {
  columnId: number;
  isCardAdding: boolean;
}

const ColumnsFooter: FC<ColumnsFooterProps> = ({ columnId, isCardAdding }) => {
  const [cardName, setCardName] = useState("");
  const { userName } = useContext(UserNameContext);
  const { dispatch } = useContext(dataContext);

  function addNewCard(columnId: number, cardName: string) {
    dispatch(actions.pushNewCard(columnId, cardName, userName));
    setCardName("");
  }

  if (!isCardAdding) {
    return (
      <styles.AddNewCard
        onClick={() => {
          dispatch(actions.toggleAddCardField(columnId));
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
          dispatch(actions.toggleAddCardField(-1));
        }}
      />
    </>
  );
};

export default ColumnsFooter;
