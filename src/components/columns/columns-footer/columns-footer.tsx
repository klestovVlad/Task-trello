import { FC, useContext, useState } from "react";

import { toggleAddCardField } from "../../../context/actions";
import { pushNewCard } from "../../../context/actions";
import dataContext, { UserNameContext } from "../../../context/data";
import { AddCardButtn, AddNewCard, CancelCardButtn, CardInput } from "../styles";

interface ColumnsFooterProps {
  columnId: number;
  isCardAdding: boolean;
}

const ColumnsFooter: FC<ColumnsFooterProps> = ({ columnId, isCardAdding }) => {
  const [cardName, setCardName] = useState("");
  const { userName } = useContext(UserNameContext);
  const { dispatch } = useContext(dataContext);

  function addNewCard(columnId: number, cardName: string) {
    dispatch(pushNewCard(columnId, cardName, userName));
    setCardName("");
  }

  if (!isCardAdding) {
    return (
      <AddNewCard
        onClick={() => {
          dispatch(toggleAddCardField(columnId));
        }}
      >
        + Add new card
      </AddNewCard>
    );
  }
  return (
    <>
      <CardInput
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
      <AddCardButtn onClick={() => addNewCard(columnId, cardName)}>add card</AddCardButtn>
      <CancelCardButtn
        className="fas fa-times"
        onClick={() => {
          dispatch(toggleAddCardField(-1));
        }}
      />
    </>
  );
};

export default ColumnsFooter;
