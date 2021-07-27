import { Dispatch, FC, ReducerAction, SetStateAction } from "react";

import { IdataStructure } from "../../context/data";
import { Cards } from "../cards/index";
import { ColumnsFooter } from "./columns-footer/index";
import { Column, ColumnName } from "./styles";

interface ColumnProps {
  data: IdataStructure;
  dispathc: Dispatch<SetStateAction<ReducerAction<any>>>;
  showCardPopup(columnId: number, cardNum: number): void;
}

const Columns: FC<ColumnProps> = ({ data, dispathc, showCardPopup }) => {
  return (
    <Column>
      <ColumnName
        value={data.listName}
        onChange={(event) => {
          dispathc({ type: "columnNameChange", payload: { event: event, id: data.id } });
        }}
      />
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
        isCardAdding={data.isCardAdding}
        dispathc={dispathc}
      />
    </Column>
  );
};

export default Columns;
