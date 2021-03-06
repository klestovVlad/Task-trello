import { FC } from "react";
import { useDispatch, useSelector } from "react-redux";

import { boardAction } from "../../store/board/index";
import { selectStoreData } from "../../store/board/index";
import { Card } from "../../store/board/state";
import { selectUserName } from "../../store/user/index";
import { CardForm } from "./card-form";
import { returnTwoLetterFromName } from "./functions";
import styles from "./styles";

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
  const data = useSelector(selectStoreData);
  const userName = useSelector(selectUserName);
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

  const initialValues = {
    ...thisCard,
    columnId: columnId,
    cardNum: cardNum,
    columnName: data[columnId].columnName,
    newComment: "",
    currentUser: userName,
  };

  const deleteThisCard = (columnId: number, cardNum: number) => {
    closeCardPopup();
    setTimeout(() => dispatch(boardAction.deleteCard({ columnId, cardNum })), 100);
  };

  return isPopupCardShow ? (
    <styles.ShadowCard>
      <styles.PopUpCard>
        <styles.CloseIcon className="fas fa-times" onClick={closeCardPopup} />
        <CardForm initialValues={initialValues} />
        <br />
        <styles.CommentRowContainer>
          <styles.AutorLogo>{returnTwoLetterFromName(thisCard.author)}</styles.AutorLogo>
          <h4>{thisCard.author}</h4>
          <span>&nbsp;have added this card</span>
        </styles.CommentRowContainer>
        <styles.DeleteButtonRow onClick={() => deleteThisCard(columnId, cardNum)}>
          <i className="fas fa-trash-alt" />
          <styles.DeleteButton>Delete this card</styles.DeleteButton>
        </styles.DeleteButtonRow>
      </styles.PopUpCard>
    </styles.ShadowCard>
  ) : null;
};

export default CardPopup;
