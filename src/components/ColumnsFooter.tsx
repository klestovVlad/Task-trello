import React, { useState } from 'react';
import {
  AddNewCard, CardInput, AddCardButtn, CancelCardButtn,
} from '../styles/columnStyles';

interface ColumnsFooterProps {
  columnId: number;
  isCardAdding: boolean;
  toggleVisibilityAddCardField(id:number):void;
  pushNewCard(columnId:number, cardName:string):void;
}



const ColumnsFooter:React.FC<ColumnsFooterProps> = (props) => {
  const [cardName, setCardName] = useState('');

  function addNewCard(columnId:number, cardName:string) {
    props.pushNewCard(columnId, cardName);
    setCardName('')
  }

  if (!props.isCardAdding) {
    return (
      <AddNewCard
        onClick={() => props.toggleVisibilityAddCardField(props.columnId)}
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
          if (ev.key === 'Enter') {
            addNewCard(props.columnId, cardName);
          }
        }}
      />
      <AddCardButtn
        onClick={() => addNewCard(props.columnId, cardName)}
      >
        add card
      </AddCardButtn>
      <CancelCardButtn
        className="fas fa-times"
        onClick={() => props.toggleVisibilityAddCardField(-1)}
      />
    </>
  );
};

export default ColumnsFooter;
