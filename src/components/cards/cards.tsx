import { FC } from "react";

import { Card } from "../../store/board/state";
import styles from "./styles";

interface CardsProps {
  cardNum: number;
  columnId: number;
  cardsData: Card[];
  showCardPopup(columnId: number, cardNum: number): void;
}

const Cards: FC<CardsProps> = ({ cardNum, columnId, cardsData, showCardPopup }) => {
  const currentCard: Card = cardsData[cardNum];
  return (
    <>
      <styles.Card onClick={() => showCardPopup(columnId, cardNum)}>
        <p>{currentCard.name}</p>
        <p className="far fa-comment"> {currentCard.comment.length}</p>
      </styles.Card>
    </>
  );
};

export default Cards;
