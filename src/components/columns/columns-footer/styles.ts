import styled from 'styled-components';

export const Column = styled.div`
  width: 300px;
  margin: 0 5px;
  height: 100%;
  box-sizing: border-box;
  display: inline-block;
  vertical-align: top;
  white-space: nowrap;
  background-color: #EBECF0;
  border-radius: 3px;
  padding: 10px;
  color: #172B4D;
`;

export const ColumnName = styled.input`
  color: #172B4D;
  font-size:16px;
  font-weight: 600;
  width:100%;
`;

export const AddNewCard = styled.div`
  padding: 5px;
  color: #5E6C84;
  cursor: pointer;
  &:hover {
      background-color: #DADBE2;
  }
  display: block;
`;

export const CardInput = styled.input`
  display: block;
  color: #172B4D;
  font-weight: 400;
  padding: 6px 8px;
  background-color:white;
  box-shadow: 0px 3px 3px grey;
  margin:10px 0;
  border-radius: 3px;
  overflow-wrap: break-word;
  resize: none;
  height: 54px;
  box-sizing: border-box;
  width: 100%;
  font-family: inherit;
  padding-bottom: 30px;
`;

export const AddCardButtn = styled.button`
  background-color: #0079BF;
  padding: 6px 8px;
  border: none;
  border-radius:3px;
  font: inherit;
  color: inherit;
  cursor: pointer;
  display: inline-block;
  color: white;
`;

export const CancelCardButtn = styled.i`
  margin-left: 15px;
  cursor: pointer;
  color: #5E6C84;
`;
