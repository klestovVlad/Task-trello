import styled from "styled-components";

const CardBoard = styled.div`
  padding: 50px 5px 0px 5px;
  background: linear-gradient(128.65deg, #7c85d0 0%, #8850aa 48.18%, #ce497f 100%);
  min-height: 100vh;
  display: flex;
  flex-direction: row;
  color: white;
  @media (max-width: 629px) {
    flex-wrap: wrap;
  }
`;

export default CardBoard;
