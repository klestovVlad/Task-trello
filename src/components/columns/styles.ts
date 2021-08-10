import styled from "styled-components";

const Column = styled.div`
  width: 300px;
  margin: 0 5px 5px 5px;
  height: 100%;
  box-sizing: border-box;
  display: inline-block;
  vertical-align: top;
  white-space: nowrap;
  background-color: #ebecf0;
  border-radius: 3px;
  padding: 10px;
  color: #172b4d;
  @media (max-width: 630px) {
    flex-grow: 1;
  }
`;

const ColumnName = styled.input`
  color: #172b4d;
  font-size: 16px;
  font-weight: 600;
  width: 100%;
`;

export default {
  Column,
  ColumnName,
};
