import { FC, useContext, useState } from "react";

import dataContext from "../../../context/data";
import { AddCardButtn, AddNewCard, CancelCardButtn, CardInput } from "../styles";

interface ColumnsFooterProps {
  columnId: number;
  isCardAdding: boolean;
}

const ColumnsFooter: FC<ColumnsFooterProps> = ({ columnId, isCardAdding }) => {
  const [cardName, setCardName] = useState("");
  const { dispatch } = useContext(dataContext);

  function addNewCard(columnId: number, cardName: string) {
    dispatch({
      type: "pushNewCard",
      payload: { columnId: columnId, cardName: cardName },
    });
    setCardName("");
  }

  if (!isCardAdding) {
    return (
      <AddNewCard
        onClick={() => {
          dispatch({
            type: "toggleVisibilityAddCardField",
            payload: { id: columnId },
          });
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
          dispatch({
            type: "toggleVisibilityAddCardField",
            payload: { id: -1 },
          });
        }}
      />
    </>
  );
};

export default ColumnsFooter;
