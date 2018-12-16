import styled from 'styled-components';

export const CounterContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 2fr 3fr 1fr;
  position: relative;
  input,
  button {
    height: 30px;
  }

  button {
    border: 1px solid #19a974;
    background: #19a974;
    line-height: 1;
    color: #fff;
    border-radius: 2px;
    font-size: 14px;
    font-weight: 600;
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;

export const CounterTodoItem = styled.div`
  margin-bottom: 10px;
`;
