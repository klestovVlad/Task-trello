import React from 'react';
import Board from './styles/AppStyles';
import Columns from './components/Columns';
import listData, { IdataStructure } from './listData';
import CardPopup from './components/CardPopup';
import NewUserPopup from './components/newUserPopup';

interface TodoState {
  toggleStateProps: boolean,
  columnId: number;
  cardNum: number;
  isPopupCardShow: boolean;
  isPopupNewUserShow: boolean;
  textAreaFocus: number;
  commentCode: string;
}

interface TodoProps {}

class App extends React.Component<TodoProps, TodoState> {
  constructor(props: TodoProps) {
    super(props);
    this.state = {
      toggleStateProps: false,
      columnId: 0,
      cardNum: 0,
      isPopupCardShow: false,
      isPopupNewUserShow: localStorage.userName === undefined,
      textAreaFocus: -2,
      commentCode: '//',
    };
    this.escFunction = this.escFunction.bind(this);
  }

  componentDidMount() {
    document.addEventListener('keydown', this.escFunction, false);
  }

  componentWillUnmount() {
    document.removeEventListener('keydown', this.escFunction, false);
  }

  pushNewCard = (columnId:number, cardName:string) => {
    if (cardName.length > 0) {
      listData[columnId].cards.push({
        name: cardName,
        author: localStorage.userName,
        text: '',
        comment: [],
      });
    }
    this.dataChange();
  }

  showCardPopup = (Id:number, cNum:number) => {
    this.setState({
      isPopupCardShow: true,
      columnId: Id,
      cardNum: cNum,
    });
  }

  closeCardPopup = () => {
    this.setState({ isPopupCardShow: false });
  }

  cardNameChange = (
    event: React.ChangeEvent<HTMLInputElement>,
    columnId:number, cardNum:number) => {
    listData[columnId].cards[cardNum].name = event.target.value;
    this.dataChange();
  };

  cardDescriptionChange = (event: React.ChangeEvent<HTMLTextAreaElement>,
    columnId:number,
    cardNum:number) => {
    listData[columnId].cards[cardNum].text = event.target.value;
    this.dataChange();
  };

  dataChange = () => {
    this.setState({ toggleStateProps: !this.state.toggleStateProps });
    localStorage.listData = JSON.stringify(listData);
  }

  columnNameChange = (event: React.ChangeEvent<HTMLInputElement>, id:number) => {
    listData[id].listName = event.target.value;
    this.dataChange();
  };

  focusOnTextarea = (num:number) => {
    setTimeout(() => this.setState({ textAreaFocus: num }), 100);
  }

  addNewComment = (columnId:number, cardNum:number, newComment:string) => {
    listData[columnId].cards[cardNum].comment.push({
      text: newComment,
      author: localStorage.userName,
    });
    this.dataChange();
  }

  commentEdit = (columnId:number, cardNum:number, conmentNum:number) => {
    this.setState({ commentCode: `${columnId}/${cardNum}/${conmentNum}` });
  }

  commentEditSave = (columnId:number, cardNum:number, conmentNum:number, newComment:string) => {
    listData[columnId].cards[cardNum].comment[conmentNum].text = newComment;
    this.dataChange();
  }

  commentDelite = (columnId:number, cardNum:number, conmentNum:number) => {
    listData[columnId].cards[cardNum].comment.splice(conmentNum, 1);
    this.dataChange();
  }

  deleteCard = (columnId:number, cardNum:number) => {
    listData[columnId].cards.splice(cardNum, 1);
    this.dataChange();
  }

  newUserName = (userName:string) => {
    if (userName.length > 0) {
      localStorage.userName = userName;
      this.setState({ isPopupNewUserShow: false });
    }
  }

  toggleVisibilityAddCardField = (id:number) => {
    listData.map((item:IdataStructure) => (
      item.isCardAdding = item.id == id ? !item.isCardAdding : false
    ));
    this.dataChange();
  }

  escFunction(event:any) {
    if (event.keyCode === 27) {
      this.setState({ isPopupCardShow: false });
    }
  }

  render() {
    return (
      <>
        <Board>
          {listData.map((item:IdataStructure) => (
            <Columns
              key={item.id}
              data={item}
              columnNameChange={this.columnNameChange}
              toggleVisibilityAddCardField={this.toggleVisibilityAddCardField}
              pushNewCard={this.pushNewCard}
              showCardPopup={this.showCardPopup}
            />
          ))}
        </Board>
        <CardPopup
          columnId={this.state.columnId}
          cardNum={this.state.cardNum}
          isPopupCardShow={this.state.isPopupCardShow}
          closeCardPopup={this.closeCardPopup}
          cardNameChange={this.cardNameChange}
          cardDescriptionChange={this.cardDescriptionChange}
          focusOnTextarea={this.focusOnTextarea}
          textAreaFocus={this.state.textAreaFocus}
          addNewComment={this.addNewComment}
          commentEdit={this.commentEdit}
          commentCode={this.state.commentCode}
          commentEditSave={this.commentEditSave}
          commentDelite={this.commentDelite}
          deleteCard={this.deleteCard}
        />
        <NewUserPopup
          isPopupShow={this.state.isPopupNewUserShow}
          newUserName={this.newUserName}
        />
      </>
    );
  }
}

export default App;
