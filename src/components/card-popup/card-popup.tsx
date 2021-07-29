import { FC, useContext, useState } from "react";

import {
  addNewComment,
  cardDescriptionChange,
  cardNameChange,
  deleteCard,
} from "../../context/board/actions";
import dataContext, { CardStructure } from "../../context/board/data";
import { CommentRow } from "./comment-row/index";
import {
  AutorLogo,
  CardDescription,
  CardHeader,
  CloseIcon,
  CommentRowContainer,
  DeleteButton,
  H3,
  NewCommentInput,
  PopUpCard,
  SaveCommentButton,
  ShadowCard,
} from "./styles";

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
  let thisCard: CardStructure;
  const { data, dispatch } = useContext(dataContext);

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
    setTimeout(() => dispatch(deleteCard(columnId, cardNum)), 100);
  };

  if (isPopupCardShow) {
    return (
      <ShadowCard>
        <PopUpCard>
          <CloseIcon className="fas fa-times" onClick={closeCardPopup} />
          <i className="fa fa-list-alt" aria-hidden="true">
            {" "}
          </i>
          &nbsp;
          <CardHeader
            value={thisCard.name}
            onChange={(event) => {
              dispatch(cardNameChange(event.target.value, columnId, cardNum));
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
          <H3>Description</H3>
          <br />
          <CardDescription
            value={thisCard.text}
            onChange={(event) => {
              dispatch(cardDescriptionChange(event.target.value, columnId, cardNum));
            }}
            placeholder="Type your description..."
          />
          <i className="fa fa-comments" aria-hidden="true">
            {" "}
          </i>
          &nbsp;
          <H3>Сomments</H3>
          <CommentRowContainer>
            <AutorLogo>{returnTwoLetterFromName(localStorage.userName)}</AutorLogo>
            <NewCommentInput
              placeholder="Type your comment..."
              onFocus={() => focusOnTextarea(-1)}
              onBlur={() => focusOnTextarea(-2)}
              textAreaFocus={textAreaFocus == -1}
              value={newComment}
              onChange={(e) => setNewComment(e.target.value)}
            />
            <SaveCommentButton
              textAreaFocus={textAreaFocus === -1}
              onClick={() => {
                dispatch(addNewComment(columnId, cardNum, newComment));
              }}
              newComment={newComment}
            >
              save
            </SaveCommentButton>
          </CommentRowContainer>
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
          <CommentRowContainer>
            <AutorLogo>{returnTwoLetterFromName(thisCard.author)}</AutorLogo>
            <h4>{thisCard.author}</h4>
            <span>&nbsp;add this card</span>
          </CommentRowContainer>
          <div
            style={{ float: "right" }}
            onClick={() => deleteThisCard(columnId, cardNum)}
          >
            <i className="fas fa-trash-alt" style={{ color: "#d63031" }} />
            <DeleteButton>Delete this card</DeleteButton>
          </div>
        </PopUpCard>
      </ShadowCard>
    );
  }
  return <></>;
};

export default CardPopup;
