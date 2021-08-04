import { FC, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import actions from "../../state/board/actions";
import { Card } from "../../state/board/state";
import { RootState } from "../../state/root-reducer";
import { CommentRow } from "./comment-row/index";
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
      text: "",
      comment: [],
    };
  }

  const [textAreaFocus, setTextAreaFocus] = useState(-2);
  const [newComment, setNewComment] = useState<string>("");

  const focusOnTextarea = (num: number) => {
    setTimeout(() => setTextAreaFocus(num), 100);
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
          <i className="fa fa-list-alt" aria-hidden="true">
            {" "}
          </i>
          &nbsp;
          <styles.CardHeader
            value={thisCard.name}
            onChange={(event) => {
              dispatch(actions.cardNameChange(event.target.value, columnId, cardNum));
            }}
          />
          <br />
          <p>
            in column
            {data[columnId].listName}
          </p>
          <i className="fa fa-list" aria-hidden="true">
            {" "}
          </i>
          &nbsp;
          <styles.H3>Description</styles.H3>
          <br />
          <styles.CardDescription
            value={thisCard.text}
            onChange={(event) => {
              dispatch(
                actions.cardDescriptionChange(event.target.value, columnId, cardNum),
              );
            }}
            placeholder="Type your description..."
          />
          <i className="fa fa-comments" aria-hidden="true">
            {" "}
          </i>
          &nbsp;
          <styles.H3>Сomments</styles.H3>
          <styles.CommentRowContainer>
            <styles.AutorLogo>{returnTwoLetterFromName(userName)}</styles.AutorLogo>
            <styles.NewCommentInput
              placeholder="Type your comment..."
              onFocus={() => focusOnTextarea(-1)}
              onBlur={() => focusOnTextarea(-2)}
              textAreaFocus={textAreaFocus == -1}
              value={newComment}
              onChange={(e) => setNewComment(e.target.value)}
            />
            <styles.SaveCommentButton
              textAreaFocus={textAreaFocus === -1}
              onClick={() => {
                dispatch(actions.addNewComment(columnId, cardNum, newComment));
              }}
              newComment={newComment}
            >
              save
            </styles.SaveCommentButton>
          </styles.CommentRowContainer>
          {thisCard.comment.map((item, index) => (
            <CommentRow
              key={index}
              columnId={columnId}
              textAreaFocus={textAreaFocus}
              commentNum={index}
              focusOnTextarea={focusOnTextarea}
              thisCard={thisCard}
              cardNum={cardNum}
            />
          ))}
          <styles.CommentRowContainer>
            <styles.AutorLogo>
              {returnTwoLetterFromName(thisCard.author)}
            </styles.AutorLogo>
            <h4>{thisCard.author}</h4>
            <span>&nbsp;add this card</span>
          </styles.CommentRowContainer>
          <div
            style={{ float: "right" }}
            onClick={() => deleteThisCard(columnId, cardNum)}
          >
            <i className="fas fa-trash-alt" style={{ color: "#d63031" }} />
            <styles.DeleteButton>Delete this card</styles.DeleteButton>
          </div>
        </styles.PopUpCard>
      </styles.ShadowCard>
    );
  }
  return <></>;
};

export default CardPopup;
