import { useContext, useState } from "react";

import dataContext, { ICard } from "../../context/data";
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
  textAreaFocus: number;
  commentCode: string;
  closeCardPopup(): void;

  cardNameChange(
    event: React.ChangeEvent<HTMLInputElement>,
    columnId: number,
    cardNum: number,
  ): void;

  cardDescriptionChange(
    event: React.ChangeEvent<HTMLTextAreaElement>,
    columnId: number,
    cardNum: number,
  ): void;

  focusOnTextarea(num: number): void;
  addNewComment(columnId: number, cardNum: number, newComment: string): void;
  commentEdit(columnId: number, cardNum: number, conmentNum: number): void;
  commentEditSave(
    columnId: number,
    cardNum: number,
    conmentNum: number,
    newComment: string,
  ): void;
  commentDelite(columnId: number, cardNum: number, conmentNum: number): void;
  deleteCard(columnId: number, cardNum: number): void;
}

const CardPopup: React.FC<CardPopupProps> = ({
  columnId,
  cardNum,
  isPopupCardShow,
  textAreaFocus,
  commentCode,
  closeCardPopup,
  cardNameChange,
  cardDescriptionChange,
  focusOnTextarea,
  addNewComment,
  commentEdit,
  commentEditSave,
  commentDelite,
  deleteCard,
}) => {
  let thisCard: ICard;
  const data = useContext(dataContext);

  if (data.data[columnId].cards.length > 0) {
    thisCard = data.data[columnId].cards[cardNum];
  } else {
    thisCard = {
      name: "",
      author: "",
      text: "",
      comment: [],
    };
  }

  const [cardName, setcardName] = useState<string>(thisCard?.name);
  const [cardDesc, setcardDesc] = useState<string>(thisCard?.text);
  const [newComment, setNewComment] = useState<string>("");

  const changeHeaderHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setcardName(event.target.value);
    cardNameChange(event, columnId, cardNum);
  };

  const changeDescriptionHandler = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setcardDesc(event.target.value);
    cardDescriptionChange(event, columnId, cardNum);
  };

  const addComment = (columnId: number, cardNum: number, newComment: string): void => {
    addNewComment(columnId, cardNum, newComment);
    setNewComment("");
  };

  const deleteThisCard = (columnId: number, cardNum: number) => {
    closeCardPopup();
    setTimeout(() => deleteCard(columnId, cardNum), 100);
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
          <CardHeader value={thisCard.name} onChange={changeHeaderHandler} />
          <br />
          <p>
            in column
            {data.data[columnId].listName}
          </p>
          <i className="fa fa-list" aria-hidden="true">
            {" "}
          </i>
          &nbsp;
          <H3>Description</H3>
          <br />
          <CardDescription
            value={thisCard.text}
            onChange={changeDescriptionHandler}
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
                addComment(columnId, cardNum, newComment);
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
              lineNum={index}
              focusOnTextarea={focusOnTextarea}
              thisCard={thisCard}
              cardNum={cardNum}
              commentCode={commentCode}
              commentEdit={commentEdit}
              commentEditSave={commentEditSave}
              commentDelite={commentDelite}
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
