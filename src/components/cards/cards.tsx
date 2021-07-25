import { ICard } from '../../context/data';
import Card from './styles';

interface CardsProps {
  cardNum: number;
  columnId: number;
  cardsData:ICard[];
  showCardPopup(columnId:number, cardNum:number):void;
}

const Cards:React.FC<CardsProps> = ({ cardNum, columnId, cardsData, showCardPopup }) => {
  const currentCard:ICard = cardsData[cardNum];
  return (
    <>
      <Card
        onClick={() => showCardPopup(columnId,cardNum)}
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
