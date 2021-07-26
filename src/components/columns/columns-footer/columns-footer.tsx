import { useState } from "react";

import { AddCardButtn, AddNewCard, CancelCardButtn, CardInput } from "../styles";

interface ColumnsFooterProps {
  columnId: number;
  isCardAdding: boolean;
  toggleVisibilityAddCardField(id: number): void;
  pushNewCard(columnId: number, cardName: string): void;
}

const ColumnsFooter: React.FC<ColumnsFooterProps> = ({
  columnId,
  isCardAdding,
  toggleVisibilityAddCardField,
  pushNewCard,
}) => {
  const [cardName, setCardName] = useState("");

  function addNewCard(columnId: number, cardName: string) {
    pushNewCard(columnId, cardName);
    setCardName("");
  }

  if (!isCardAdding) {
    return (
      <AddNewCard onClick={() => toggleVisibilityAddCardField(columnId)}>
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
        onClick={() => toggleVisibilityAddCardField(-1)}
      />
    </>
  );
};

export default ColumnsFooter;
