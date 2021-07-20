import React, { useState } from 'react';
import { ICard } from '../listData';
import Card from '../styles/CardStyles';

interface CardsProps {
  cardNum: number;
  columnId: number;
  cardsData:ICard[];
  showCardPopup(columnId:number, cardNum:number):void;
}

const Cards:React.FC<CardsProps> = (props) => {
  const currentCard:ICard = props.cardsData[props.cardNum];
  return (
    <>
      <Card
        onClick={() => props.showCardPopup(props.columnId,props.cardNum)}
      >
        <p>{currentCard.name}</p>
        <p className="far fa-comment">
          {' '}
          {currentCard.comment.length}
        </p>
      </Card>
    </>
  );
};

export default Cards;
