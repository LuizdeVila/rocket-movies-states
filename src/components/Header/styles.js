import styled from 'styled-components'
import { Link } from 'react-router-dom'

export const Container = styled.header`
  grid-area: header;

  height: 105px;
  width: 100%;

  border-bottom-width: 1px;
  border-bottom-style: solid;
  border-bottom-color: ${({ theme }) => theme.COLORS.BACKGROUND_700};

  display: flex;
  justify-content: end;

  padding: 0 80px;

  > h1 {
    color: red;
    display: flex;
    align-items: center;
  }

  .centralize {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;

    > button {
      background-color: transparent;
      border: none;
      color: ${({ theme }) => theme.COLORS.PINK};
      font-size: 18px;
      cursor: pointer;
    }
  }

  h1 {
    color: ${({ theme }) => theme.COLORS.PINK};
    font-size: 35px;
  }
`

export const Profile = styled(Link)`
  display: flex;
  align-items: center;

  > img {
    width: 56px;
    height: 56px;
    border-radius: 50%;
  }

  > div {
    display: flex;
    flex-direction: column;
    margin-right: 16px;
    line-height: 24px;

    strong {
      font-size: 18px;
      color: ${({ theme }) => theme.COLORS.WHITE};
    }
  }
`