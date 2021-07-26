import { ChangeEvent, FC, useContext, useState } from "react";

import dataContext, { IdataStructure } from "../../context/data";
import { CardPopup } from "../card-popup/index";
import { Columns } from "../columns/index";
import { NewUserPopup } from "../new-user-popup/index";
import Board from "./styles";

const Main: FC = () => {
  const [columnId, setColumnId] = useState(0);
  const [cardNum, setCardNum] = useState(0);
  const [isPopupCardShow, setIsPopupCardShow] = useState(false);
  const [isPopupNewUserShow, setIsPopupNewUserShow] = useState(
    localStorage.userName === undefined,
  );
  const [textAreaFocus, setTextAreaFocus] = useState(-2);
  const [commentCode, setCommentCode] = useState("//");
  const { data, setData } = useContext(dataContext);

  const showCardPopup = (Id: number, cNum: number) => {
    setIsPopupCardShow(true);
    setColumnId(Id);
    setCardNum(cNum);
  };

  const closeCardPopup = () => {
    setIsPopupCardShow(false);
  };

  const cardNameChange = (
    event: ChangeEvent<HTMLInputElement>,
    columnId: number,
    cardNum: number,
  ) => {
    setData((state) => {
      const copyState = [...state];
      copyState[columnId].cards[cardNum].name = event.target.value;
      return copyState;
    });
  };

  const cardDescriptionChange = (
    event: ChangeEvent<HTMLTextAreaElement>,
    columnId: number,
    cardNum: number,
  ) => {
    setData((state) => {
      const copyState = [...state];
      copyState[columnId].cards[cardNum].text = event.target.value;
      return copyState;
    });
  };

  const focusOnTextarea = (num: number) => {
    setTimeout(() => setTextAreaFocus(num), 100);
  };

  const addNewComment = (columnId: number, cardNum: number, newComment: string) => {
    setData((state) => {
      const copyState = [...state];
      copyState[columnId].cards[cardNum].comment.push({
        text: newComment,
        author: localStorage.userName,
      });
      return copyState;
    });
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
      const copyState = [...state];
      copyState[columnId].cards[cardNum].comment[conmentNum].text = newComment;
      return copyState;
    });
  };

  const commentDelite = (columnId: number, cardNum: number, conmentNum: number) => {
    setData((state) => {
      const copyState = [...state];
      copyState[columnId].cards[cardNum].comment.splice(conmentNum, 1);
      return copyState;
    });
  };

  const deleteCard = (columnId: number, cardNum: number) => {
    setData((state) => {
      const copyState = [...state];
      copyState[columnId].cards.splice(cardNum, 1);
      return copyState;
    });
  };

  const newUserName = (userName: string) => {
    if (userName.length > 0) {
      localStorage.userName = userName;
      setIsPopupNewUserShow(false);
    }
  };

  return (
    <>
      <Board>
        {data.map((item: IdataStructure) => (
          <Columns
            key={item.id}
            data={item}
            setData={setData}
            showCardPopup={showCardPopup}
          />
        ))}
      </Board>
      <CardPopup
        columnId={columnId}
        cardNum={cardNum}
        isPopupCardShow={isPopupCardShow}
        closeCardPopup={closeCardPopup}
        cardNameChange={cardNameChange}
        cardDescriptionChange={cardDescriptionChange}
        focusOnTextarea={focusOnTextarea}
        textAreaFocus={textAreaFocus}
        addNewComment={addNewComment}
        commentEdit={commentEdit}
        commentCode={commentCode}
        commentEditSave={commentEditSave}
        commentDelite={commentDelite}
        deleteCard={deleteCard}
      />
      <NewUserPopup isPopupShow={isPopupNewUserShow} newUserName={newUserName} />
    </>
  );
};

export default Main;
