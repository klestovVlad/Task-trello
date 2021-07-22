import { useState } from 'react';
import { Column, ColumnName } from './styles';
import { Cards } from '../cards/index';
import { ColumnsFooter } from './columns-footer/index';
import { IdataStructure } from '../../listData';

interface ColumnProps {
  data:IdataStructure;
  columnNameChange(event: React.ChangeEvent<HTMLInputElement>, id:number):void;
  toggleVisibilityAddCardField(id:number):void;
  pushNewCard(columnId:number, cardName:string):void;
  showCardPopup(columnId:number, cardNum:number):void;
}

const Columns:React.FC<ColumnProps> = ({
  data,
  columnNameChange,
  toggleVisibilityAddCardField,
  pushNewCard,
  showCardPopup
}) => {
  const [title, setTitle] = useState<string>(data.listName);

  const changeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(event.target.value);
    columnNameChange(event, data.id);
  };

  return (
    <Column>
      <ColumnName
        value={title}
        onChange={changeHandler}
      />
      {
        data.cards.map((item, index) => (
          <Cards
            key={index}
            columnId={data.id}
            cardNum={index}
            cardsData={data.cards}
            showCardPopup={showCardPopup}
          />
        ))
      }
      <ColumnsFooter
        columnId={data.id}
        toggleVisibilityAddCardField={toggleVisibilityAddCardField}
        isCardAdding={data.isCardAdding}
        pushNewCard={pushNewCard}
      />
    </Column>
  );
};

export default Columns;
