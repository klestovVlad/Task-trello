import { Dispatch, FC, ReducerAction, SetStateAction, useState } from "react";

import { AddCardButtn, AddNewCard, CancelCardButtn, CardInput } from "../styles";

interface ColumnsFooterProps {
  columnId: number;
  isCardAdding: boolean;
  dispathc: Dispatch<SetStateAction<ReducerAction<any>>>;
}

const ColumnsFooter: FC<ColumnsFooterProps> = ({ columnId, isCardAdding, dispathc }) => {
  const [cardName, setCardName] = useState("");

  function addNewCard(columnId: number, cardName: string) {
    dispathc({
      type: "pushNewCard",
      payload: { columnId: columnId, cardName: cardName },
    });
    setCardName("");
  }

  if (!isCardAdding) {
    return (
      <AddNewCard
        onClick={() => {
          dispathc({
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
          dispathc({
            type: "toggleVisibilityAddCardField",
            payload: { id: -1 },
          });
        }}
      />
    </>
  );
};

export default ColumnsFooter;
