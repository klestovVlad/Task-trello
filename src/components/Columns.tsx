import React, { useState } from 'react';
import { Column, ColumnName, AddNewCard } from '../styles/columnStyles';
import Cards from './Cards';
import ColumnsFooter from './ColumnsFooter';
import { IdataStructure } from '../listData';

interface ColumnProps {
  data:IdataStructure;
  columnNameChange(event: React.ChangeEvent<HTMLInputElement>, id:number):void;
  toggleVisibilityAddCardField(id:number):void;
  pushNewCard(columnId:number, cardName:string):void;
  showCardPopup(columnId:number, cardNum:number):void;

}

const Columns:React.FC<ColumnProps> = (props) => {
  const [title, setTitle] = useState<string>(props.data.listName);

  const changeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(event.target.value);
    props.columnNameChange(event, props.data.id);
  };

  return (
    <Column>
      <ColumnName
        value={title}
        onChange={changeHandler}
      />
      {
        props.data.cards.map((item, index) => (
          <Cards
            key={index}
            columnId={props.data.id}
            cardNum={index}
            cardsData={props.data.cards}
            showCardPopup={props.showCardPopup}
          />
        ))
      }
      <ColumnsFooter
        columnId={props.data.id}
        toggleVisibilityAddCardField={props.toggleVisibilityAddCardField}
        isCardAdding={props.data.isCardAdding}
        pushNewCard={props.pushNewCard}
      />
    </Column>
  );
};

export default Columns;
