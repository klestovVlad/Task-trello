import React, { useState, useRef } from 'react';

import { factory } from 'typescript';
import listData, { ICard } from '../listData';

import {
  ShadowCard,
  PopUpCard,
  CloseIcon,
  CardHeader,
  H3,
  CardDescription,
  CommentRowContainer,
  AutorLogo,
  NewCommentInput,
  CardCommentContainer,
  Сaption,
  SaveCommentButton,
  DeleteButton,
} from '../styles/CardPopupStyles';

function returnTwoLetterFromName(name:string) {
  return name.split(' ').map((i) => i[0]).slice(0, 2).join('');
}

interface CardPopupProps {
  columnId: number;
  cardNum: number;
  isPopupCardShow: boolean;
  textAreaFocus:number;
  commentCode:string;
  closeCardPopup():void;

  cardNameChange(event: React.ChangeEvent<HTMLInputElement>,
    columnId:number,
    cardNum:number):void;

  cardDescriptionChange(event: React.ChangeEvent<HTMLTextAreaElement>,
    columnId:number,
    cardNum:number):void;

  focusOnTextarea(num:number):void;
  addNewComment(columnId:number, cardNum:number, newComment:string):void;
  commentEdit(columnId:number, cardNum:number, conmentNum:number):void;
  commentEditSave(columnId:number, cardNum:number, conmentNum:number, newComment:string):void;
  commentDelite(columnId:number, cardNum:number, conmentNum:number):void;
  deleteCard(columnId:number, cardNum:number):void;
}

interface CommentRowProps {
  columnId:number;
  cardNum:number;
  textAreaFocus:number;
  lineNum: number;
  thisCard:ICard;
  commentCode:string;
  focusOnTextarea(num:number):void;
  commentEdit(columnId:number, cardNum:number, conmentNum:number):void;
  commentEditSave(columnId:number, cardNum:number, conmentNum:number, newComment:string):void;
  commentDelite(columnId:number, cardNum:number, conmentNum:number):void;
}

const CommentRow:React.FC<CommentRowProps> = (props) => {
  const [newComment, setNewComment] = useState(props.thisCard.comment[props.lineNum].text);
  const inputEl = useRef<HTMLTextAreaElement>(null);

  const onButtonEditClick = () => {
    props.commentEdit(props.columnId, props.cardNum, props.lineNum);
    setTimeout(() => inputEl.current?.focus(), 10);
  };

  const onBlurComment = () => {
    setTimeout(() => {
      setNewComment(props.thisCard.comment[props.lineNum]?.text);
      props.commentEdit(-1, -1, -1);
      props.focusOnTextarea(-2);
    }, 100);
  };
  return (
    <CommentRowContainer>
      <AutorLogo>{returnTwoLetterFromName(props.thisCard.comment[props.lineNum].author)}</AutorLogo>
      <CardCommentContainer>
        <h4>{props.thisCard.comment[props.lineNum].author}</h4>
        <NewCommentInput
          onChange={(e) => {
            setNewComment(e.target.value);
            // props.comment.text = e.target.value;
          }}
          textAreaFocus={props.textAreaFocus == props.lineNum}
          ref={inputEl}
          onFocus={() => props.focusOnTextarea(props.lineNum)}
          onBlur={onBlurComment}
          disabled={props.commentCode !== `${props.columnId}/${props.cardNum}/${props.lineNum}`}
          value={newComment}
        />
        <SaveCommentButton
          style={{ bottom: '35px' }}
          textAreaFocus={props.textAreaFocus == props.lineNum}
          newComment={newComment}
          onClick={() => {
            props.commentEditSave(props.columnId, 
              props.cardNum,
              props.lineNum,
              newComment);
          }}
        >
          save
        </SaveCommentButton>
        <p>
          <Сaption
            onClick={() => onButtonEditClick()}
          >
            Edit
          </Сaption>
                &nbsp;
          <Сaption
            onClick={() => props.commentDelite(props.columnId, props.cardNum, props.lineNum)}
          >
            Delete
          </Сaption>
        </p>
      </CardCommentContainer>
    </CommentRowContainer>
  );
};

const CardPopup:React.FC<CardPopupProps> = (props) => {
  let thisCard:ICard;

  if (listData[props.columnId].cards.length > 0) {
    thisCard = listData[props.columnId].cards[props.cardNum];
  } else {
    thisCard = {
      name: '',
      author: '',
      text: '',
      comment: [],
    };
  }

  const [cardName, setcardName] = useState<string>(thisCard?.name);
  const [cardDesc, setcardDesc] = useState<string>(thisCard?.text);
  const [newComment, setNewComment] = useState<string>('');

  const changeHeaderHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setcardName(event.target.value);
    props.cardNameChange(event, props.columnId, props.cardNum);
  };

  const changeDescriptionHandler = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setcardDesc(event.target.value);
    props.cardDescriptionChange(event, props.columnId, props.cardNum);
  };

  const addNewComment = (columnId:number, cardNum:number, newComment:string):void => {
    props.addNewComment(columnId, cardNum, newComment);
    setNewComment('');
  };

  const deleteThisCard = (columnId:number, cardNum:number) => {
    props.closeCardPopup();
    setTimeout(() => props.deleteCard(columnId, cardNum), 100);
  };

  if (props.isPopupCardShow) {
    return (
      <ShadowCard>
        <PopUpCard>
          <CloseIcon
            className="fas fa-times"
            onClick={props.closeCardPopup}
          />

          <i className="fa fa-list-alt" aria-hidden="true"> </i>
          &nbsp;

          <CardHeader
            value={thisCard.name}
            onChange={changeHeaderHandler}
          />
          <br />

          <p>
            in column
            {listData[props.columnId].listName}
          </p>

          <i className="fa fa-list" aria-hidden="true"> </i>
          &nbsp;
          <H3>Description</H3>
          <br />

          <CardDescription
            value={thisCard.text}
            onChange={changeDescriptionHandler}
            placeholder="Type your description..."
          />

          <i className="fa fa-comments" aria-hidden="true"> </i>
          &nbsp;
          <H3>Сomments</H3>

          <CommentRowContainer>
            <AutorLogo>
              {
                returnTwoLetterFromName(localStorage.userName)
              }
            </AutorLogo>
            <NewCommentInput
              placeholder="Type your comment..."
              onFocus={() => props.focusOnTextarea(-1)}
              onBlur={() => props.focusOnTextarea(-2)}
              textAreaFocus={props.textAreaFocus == -1}
              value={newComment}
              onChange={(e) => setNewComment(e.target.value)}
            />
            <SaveCommentButton
              textAreaFocus={props.textAreaFocus === -1}
              onClick={() => { addNewComment(props.columnId, props.cardNum, newComment); }}
              newComment={newComment}
            >
              save
            </SaveCommentButton>
          </CommentRowContainer>

          {
            thisCard.comment.map((item, index) => (
              <CommentRow
                key={index}
                columnId={props.columnId}
                textAreaFocus={props.textAreaFocus}
                lineNum={index}
                focusOnTextarea={props.focusOnTextarea}
                thisCard={thisCard}
                cardNum={props.cardNum}
                commentCode={props.commentCode}
                commentEdit={props.commentEdit}
                commentEditSave={props.commentEditSave}
                commentDelite={props.commentDelite}
              />
            ))
          }
          <CommentRowContainer>
            <AutorLogo>{returnTwoLetterFromName(thisCard.author)}</AutorLogo>
            <h4>{thisCard.author}</h4>
            <span>&nbsp;add this card</span>
          </CommentRowContainer>
          <div
            style={{ float: 'right' }}
            onClick={() => deleteThisCard(props.columnId, props.cardNum)}
          >
            <i className="fas fa-trash-alt" style={{ color: '#d63031' }} />
            <DeleteButton>Delete this card</DeleteButton>
          </div>
        </PopUpCard>
      </ShadowCard>
    );
  }
  return (
    <></>
  );
};

export default CardPopup;
