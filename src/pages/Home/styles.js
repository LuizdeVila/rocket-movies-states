import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  overflow-y: hidden;
  background-color: ${({ theme }) => theme.COLORS.BACKGROUND_800};
`

export const Content = styled.div`
  padding-top: 20px;
  padding-bottom: 20px;
  height: calc(100vh - 60px);
  overflow-y: auto;
`

export const Create = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  color: ${({ theme }) => theme.COLORS.WHITE};

  > a {
    text-decoration: none;
  }

  button {
    width: 250px;
  }
`;