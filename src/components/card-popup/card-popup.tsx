import { FC } from "react";
import { useDispatch, useSelector } from "react-redux";

import actions from "../../state/board/actions";
import { Card } from "../../state/board/state";
import { RootState } from "../../state/root-reducer";
import { CardForm } from "./card-form";
import styles from "./styles";

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export function returnTwoLetterFromName(name: string) {
  return name
    .split(" ")
    .map((i) => i[0])
    .slice(0, 2)
    .join("");
}
interface CardPopupProps {
  columnId: number;
  cardNum: number;
  isPopupCardShow: boolean;
  closeCardPopup(): void;
}

const CardPopup: FC<CardPopupProps> = ({
  columnId,
  cardNum,
  isPopupCardShow,
  closeCardPopup,
}) => {
  let thisCard: Card;
  const data = useSelector((state: RootState) => state.data);
  const userName = useSelector((state: RootState) => state.userName.userName);
  const dispatch = useDispatch();

  if (data[columnId].cards.length > 0) {
    thisCard = data[columnId].cards[cardNum];
  } else {
    thisCard = {
      name: "",
      author: "",
      description: "",
      comment: [],
    };
  }

  const initValue = {
    ...thisCard,
    columnId: columnId,
    cardNum: cardNum,
    columnName: data[columnId].columnName,
    newComment: "",
    currentUser: userName,
  };

  const deleteThisCard = (columnId: number, cardNum: number) => {
    closeCardPopup();
    setTimeout(() => dispatch(actions.deleteCard(columnId, cardNum)), 100);
  };

  if (isPopupCardShow) {
    return (
      <styles.ShadowCard>
        <styles.PopUpCard>
          <styles.CloseIcon className="fas fa-times" onClick={closeCardPopup} />
          <CardForm {...initValue} deleteThisCard={deleteThisCard} />
        </styles.PopUpCard>
      </styles.ShadowCard>
    );
  }
  return <></>;
};

export default CardPopup;
