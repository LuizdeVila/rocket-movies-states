import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  background-color: ${({ theme }) => theme.COLORS.BACKGROUND_800};
`;

export const New = styled.div`
  max-width: 1050px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 20px;
  gap: 30px;
  margin: auto;
  font-size: 25px;

  > a {
    color: ${({ theme }) => theme.COLORS.PINK};
    font-size: 20px;
    display: flex;
    align-items: center;
    gap: 10px;
  }

  .BlackBox {
    display: flex;
    align-items: center;
    background-color: ${({ theme }) => theme.COLORS.BACKGROUND_900};
    border-radius: 8px;
    height: 100px;
    padding: 10px;
    gap: 10px;
  }
`;

export const Data = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 30px;
`;

export const Confirmations = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 15px;

  button:first-child {
    background-color:  ${({ theme }) => theme.COLORS.BACKGROUND_900};
    color: ${({ theme }) => theme.COLORS.WHITE};
  }
`;