import { ChangeEvent, Dispatch, FC, SetStateAction, useContext, useState } from "react";

import dataContext, { ICard, IdataStructure } from "../../context/data";
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

  setData: Dispatch<SetStateAction<IdataStructure[]>>;
}

const CardPopup: FC<CardPopupProps> = ({
  columnId,
  cardNum,
  isPopupCardShow,
  closeCardPopup,
  setData,
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

  const [, setcardName] = useState<string>(thisCard?.name);
  const [, setcardDesc] = useState<string>(thisCard?.text);
  const [commentCode, setCommentCode] = useState("//");
  const [textAreaFocus, setTextAreaFocus] = useState(-2);
  const [newComment, setNewComment] = useState<string>("");

  const cardNameChange = (
    event: ChangeEvent<HTMLInputElement>,
    columnId: number,
    cardNum: number,
  ) => {
    setData((state) => {
      const copyState = { ...state };
      copyState[columnId].cards[cardNum].name = event.target.value;
      return copyState;
    });
  };

  const changeHeaderHandler = (event: ChangeEvent<HTMLInputElement>) => {
    setcardName(event.target.value);
    cardNameChange(event, columnId, cardNum);
  };

  const cardDescriptionChange = (
    event: ChangeEvent<HTMLTextAreaElement>,
    columnId: number,
    cardNum: number,
  ) => {
    setData((state) => {
      const copyState = { ...state };
      copyState[columnId].cards[cardNum].text = event.target.value;
      return copyState;
    });
  };

  const changeDescriptionHandler = (event: ChangeEvent<HTMLTextAreaElement>) => {
    setcardDesc(event.target.value);
    cardDescriptionChange(event, columnId, cardNum);
  };

  const focusOnTextarea = (num: number) => {
    setTimeout(() => setTextAreaFocus(num), 100);
  };

  const addNewComment = (columnId: number, cardNum: number, newComment: string) => {
    setData((state) => {
      const copyState = { ...state };
      copyState[columnId].cards[cardNum].comment.push({
        text: newComment,
        author: localStorage.userName,
      });
      return copyState;
    });
  };

  const addComment = (columnId: number, cardNum: number, newComment: string): void => {
    addNewComment(columnId, cardNum, newComment);
    setNewComment("");
  };

  const commentEdit = (columnId: number, cardNum: number, conmentNum: number) => {
    setCommentCode(`${columnId}/${cardNum}/${conmentNum}`);
  };

  const commentEditSave = (
    columnId: number,
    cardNum: number,
    conmentNum: number,
    newComment: string,
  ) => {
    setData((state) => {
      const copyState = { ...state };
      copyState[columnId].cards[cardNum].comment[conmentNum].text = newComment;
      return copyState;
    });
  };

  const commentDelite = (columnId: number, cardNum: number, conmentNum: number) => {
    setData((state) => {
      const copyState = { ...state };
      copyState[columnId].cards[cardNum].comment.splice(conmentNum, 1);
      return copyState;
    });
  };

  const deleteCard = (columnId: number, cardNum: number) => {
    setData((state) => {
      const copyState = { ...state };
      copyState[columnId].cards.splice(cardNum, 1);
      return copyState;
    });
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
