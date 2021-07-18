import styled from 'styled-components';

export const Board = styled.div`
  padding:50px 5px 0px 5px;
  background: linear-gradient(128.65deg, #7C85D0 0%, #8850AA 48.18%, #CE497F 100%);
  min-height: calc(100vh - 50px);
  display: flex;
  flex-direction: row;
  color: white;
`;

export const NewColumn = styled.div`
  background-color: rgba(187, 187, 187, 0.5);
  height: 100%;
  padding: 10px;
  border-radius: 3px;
  cursor: pointer;
  margin-left:4px;
`;
