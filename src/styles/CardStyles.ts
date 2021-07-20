import styled from 'styled-components';

const Card = styled.div`
    display:block;
    color: #172B4D;
    font-weight: 400;
    padding: 6px 8px 2px;
    background-color:white;
    box-shadow: 0px 3px 3px grey;
    margin:10px 0;
    border-radius: 3px;
    cursor: pointer;
    word-break: break-word;
    white-space: pre-wrap;
    &:hover{
        background-color:#F4F5F7;
    }
`;

export default Card;
