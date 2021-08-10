import { FC } from "react";
import { useDispatch } from "react-redux";

import { boardAction } from "../../store/board/index";
import { BoardItem } from "../../store/board/state";
import { Cards } from "../cards/index";
import { ColumnsFooter } from "./columns-footer/index";
import styles from "./styles";

interface ColumnProps {
  dataColumn: BoardItem;
  showCardPopup(columnId: number, cardNum: number): void;
}

const Columns: FC<ColumnProps> = ({ dataColumn, showCardPopup }) => {
  const dispatch = useDispatch();
  return (
    <styles.Column>
      <styles.ColumnName
        value={dataColumn.columnName}
        onChange={(event) => {
          dispatch(
            boardAction.changeColumnName({ text: event.target.value, id: dataColumn.id }),
          );
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
