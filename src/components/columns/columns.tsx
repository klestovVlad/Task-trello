import { FC, useContext } from "react";

import dataContext from "../../context/data";
import { DataStructure } from "../../context/data";
import { Cards } from "../cards/index";
import { ColumnsFooter } from "./columns-footer/index";
import { Column, ColumnName } from "./styles";

interface ColumnProps {
  dataColumn: DataStructure;
  showCardPopup(columnId: number, cardNum: number): void;
}

const Columns: FC<ColumnProps> = ({ dataColumn, showCardPopup }) => {
  const { dispatch } = useContext(dataContext);

  return (
    <Column>
      <ColumnName
        value={dataColumn.listName}
        onChange={(event) => {
          dispatch({
            type: "columnNameChange",
            payload: { text: event.target.value, id: dataColumn.id },
          });
        }}
      />
      {dataColumn.cards.map((item, index) => (
        <Cards
          key={index}
          columnId={dataColumn.id}
          cardNum={index}
          cardsData={dataColumn.cards}
          showCardPopup={showCardPopup}
        />
      ))}
      <ColumnsFooter columnId={dataColumn.id} isCardAdding={dataColumn.isCardAdding} />
    </Column>
  );
};

export default Columns;
