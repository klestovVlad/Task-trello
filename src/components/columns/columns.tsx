import { FC } from "react";
import { useDispatch } from "react-redux";

import { DataStructure } from "../../state/board/data";
import { Cards } from "../cards/index";
import { columnNameChange } from "./actions";
import { ColumnsFooter } from "./columns-footer/index";
import styles from "./styles";

interface ColumnProps {
  dataColumn: DataStructure;
  showCardPopup(columnId: number, cardNum: number): void;
}

const Columns: FC<ColumnProps> = ({ dataColumn, showCardPopup }) => {
  const dispatch = useDispatch();
  return (
    <styles.Column>
      <styles.ColumnName
        value={dataColumn.listName}
        onChange={(event) => {
          dispatch(columnNameChange(event.target.value, dataColumn.id));
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
    </styles.Column>
  );
};

export default Columns;
