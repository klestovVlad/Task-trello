import { FC } from "react";

import { CardStructure } from "../../state/board/data";
import Card from "./styles";

interface CardsProps {
  cardNum: number;
  columnId: number;
  cardsData: CardStructure[];
  showCardPopup(columnId: number, cardNum: number): void;
}

const Cards: FC<CardsProps> = ({ cardNum, columnId, cardsData, showCardPopup }) => {
  const currentCard: CardStructure = cardsData[cardNum];
  return (
    <>
      <Card onClick={() => showCardPopup(columnId, cardNum)}>
        <p>{currentCard.name}</p>
        <p className="far fa-comment"> {currentCard.comment.length}</p>
      </Card>
    </>
  );
};

export default Cards;
