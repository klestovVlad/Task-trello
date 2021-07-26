import { ChangeEvent, Dispatch, FC, SetStateAction, useState } from "react";

import { IdataStructure } from "../../context/data";
import { Cards } from "../cards/index";
import { ColumnsFooter } from "./columns-footer/index";
import { Column, ColumnName } from "./styles";

interface ColumnProps {
  data: IdataStructure;
  setData: Dispatch<SetStateAction<IdataStructure[]>>;
  showCardPopup(columnId: number, cardNum: number): void;
}

const Columns: FC<ColumnProps> = ({ data, setData, showCardPopup }) => {
  const [title, setTitle] = useState<string>(data.listName);

  const columnNameChange = (event: ChangeEvent<HTMLInputElement>, id: number) => {
    setData((state) => {
      const copyState = { ...state };
      copyState[id].listName = event.target.value;
      return copyState;
    });
  };

  const changeHandler = (event: ChangeEvent<HTMLInputElement>) => {
    setTitle(event.target.value);
    columnNameChange(event, data.id);
  };

  const toggleVisibilityAddCardField = (id: number) => {
    setData((state) => {
      const copyState = { ...state };
      for (const key in copyState) {
        copyState[key].isCardAdding = +key === id ? true : false;
      }
      copyState[id].isCardAdding = true;
      return copyState;
    });
  };

  const pushNewCard = (columnId: number, cardName: string) => {
    if (cardName.length > 0) {
      setData((state) => {
        const copyState = { ...state };
        if (columnId === -1) {
          return state;
        }
        copyState[columnId] = {
          ...copyState[columnId],
          cards: copyState[columnId].cards.concat({
            name: cardName,
            author: localStorage.userName,
            text: "",
            comment: [],
          }),
        };
        return copyState;
      });
    }
  };

  return (
    <Column>
      <ColumnName value={title} onChange={changeHandler} />
      {data.cards.map((item, index) => (
        <Cards
          key={index}
          columnId={data.id}
          cardNum={index}
          cardsData={data.cards}
          showCardPopup={showCardPopup}
        />
      ))}
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
