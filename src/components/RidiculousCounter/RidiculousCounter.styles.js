import styled from 'styled-components';

export const RidiculousCounterContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  padding-top: 20px;
  padding-bottom: 20px;
  > * {
    margin-bottom: 20px;
  }
`;

export const RidiculousCounterCount = styled.div`
  font-size: 4em;
`;

export const RidiculousCounterButton = styled.button`
  position: relative;
  background: currentColor;
  border: 1px solid currentColor;
  font-size: 1.1rem;
  color: #4f93ce;
  padding: 0.75rem 3rem;
  cursor: pointer;
  transition: background-color 0.28s ease, color 0.28s ease,
    box-shadow 0.28s ease;
  overflow: hidden;
  box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 3px 1px -2px rgba(0, 0, 0, 0.2),
    0 1px 5px 0 rgba(0, 0, 0, 0.12);
  span {
    color: #fff;
    position: relative;
    z-index: 1;
  }

  &:hover {
    color: #337ab7;
  }
  &:active {
    box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.14), 0 1px 9px 0 rgba(0, 0, 0, 0.12),
      0 3px 5px -1px rgba(0, 0, 0, 0.2);
  }
  &:focus {
    outline: none;
  }
`;
