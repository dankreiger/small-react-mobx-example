import styled from 'styled-components';

export const AppContainer = styled.div`
  padding-left: 30px;
  padding-right: 30px;
`;

export const Heading = styled.h1`
  margin-bottom: 2rem;
  > * {
    display: flex;
    width: 100%;
    flex-wrap: wrap;
    justify-content: center;
  }

  code {
    color: salmon;
  }
`;
