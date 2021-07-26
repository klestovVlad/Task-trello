import { useContext, useState, FC } from 'react';
import Board from './styles';
import { Columns } from '../columns/index';
import { CardPopup } from '../card-popup/index';
import { NewUserPopup } from '../new-user-popup/index';
import dataContext, { IdataStructure } from '../../context/data';

const Main:FC = () => {
  const [toggleStateProps, setToggleStateProps] = useState(false);
  const [columnId, setColumnId] = useState(0);
  const [cardNum, setCardNum] = useState(0);
  const [isPopupCardShow, setIsPopupCardShow] = useState(false);
  const [isPopupNewUserShow, setIsPopupNewUserShow] = useState(localStorage.userName === undefined);
  const [textAreaFocus, setTextAreaFocus] = useState(-2);
  const [commentCode, setCommentCode] = useState('//');
  const data = useContext(dataContext);

  const dataChange = () => {
    // setToggleStateProps(!toggleStateProps);
    localStorage.listData = JSON.stringify(data.data);
    data.setData(data.data);
  };

  const pushNewCard = (columnId:number, cardName:string) => {
    if (cardName.length > 0) {
      data.data[columnId].cards.push({
        name: cardName,
        author: localStorage.userName,
        text: '',
        comment: [],
      });
    }
    dataChange();
  };

  const showCardPopup = (Id:number, cNum:number) => {
    setIsPopupCardShow(true);
    setColumnId(Id);
    setCardNum(cNum);
  };

  const closeCardPopup = () => {
    setIsPopupCardShow(false);
  };

  const cardNameChange = (
    event: React.ChangeEvent<HTMLInputElement>,
    columnId:number, cardNum:number,
  ) => {
    data.data[columnId].cards[cardNum].name = event.target.value;
    dataChange();
  };

  const cardDescriptionChange = (event: React.ChangeEvent<HTMLTextAreaElement>,
    columnId:number,
    cardNum:number) => {
    data.data[columnId].cards[cardNum].text = event.target.value;
    dataChange();
  };

  const columnNameChange = (event: React.ChangeEvent<HTMLInputElement>, id:number) => {
    data.data[id].listName = event.target.value;
    data.setData(data.data);
    dataChange();
  };

  const focusOnTextarea = (num:number) => {
    setTimeout(() => setTextAreaFocus(num), 100);
  };

  const addNewComment = (columnId:number, cardNum:number, newComment:string) => {
    data.data[columnId].cards[cardNum].comment.push({
      text: newComment,
      author: localStorage.userName,
    });
    dataChange();
  };

  const commentEdit = (columnId:number, cardNum:number, conmentNum:number) => {
    setCommentCode(`${columnId}/${cardNum}/${conmentNum}`);
  };

  const commentEditSave = (columnId:number, cardNum:number, conmentNum:number, newComment:string) => {
    data.data[columnId].cards[cardNum].comment[conmentNum].text = newComment;
    dataChange();
  };

  const commentDelite = (columnId:number, cardNum:number, conmentNum:number) => {
    data.data[columnId].cards[cardNum].comment.splice(conmentNum, 1);
    dataChange();
  };

  const deleteCard = (columnId:number, cardNum:number) => {
    data.data[columnId].cards.splice(cardNum, 1);
    dataChange();
  };

  const newUserName = (userName:string) => {
    if (userName.length > 0) {
      localStorage.userName = userName;
      setIsPopupNewUserShow(false);
    }
  };

  const toggleVisibilityAddCardField = (id:number) => {
    data.data.map((item:IdataStructure) => (
      item.isCardAdding = item.id == id ? !item.isCardAdding : false
    ));
    dataChange();
  };

  return (
    <>
      <Board>
        {data.data.map((item:IdataStructure) => (
          <Columns
            key={item.id}
            data={item}
            columnNameChange={columnNameChange}
            toggleVisibilityAddCardField={toggleVisibilityAddCardField}
            pushNewCard={pushNewCard}
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
      <NewUserPopup
        isPopupShow={isPopupNewUserShow}
        newUserName={newUserName}
      />
    </>
  );
};

export default Main;
