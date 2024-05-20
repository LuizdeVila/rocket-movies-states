import styled from 'styled-components'

export const Container = styled.section`
  max-width: 1050px;
  margin: 50px auto;
  background-color: ${({ theme }) => theme.COLORS.BACKGROUND_700};
  border-radius: 8px;
  padding: 30px 40px;
  line-height: 1.8;
  text-align: justify;

  > svg {
    font-size: 20px;
    margin-top: 5px;
    display: inline;
  }

  > h4 {
    color: ${({ theme }) => theme.COLORS.WHITE};
    display: inline-block;
    margin: 15px 10px;
    padding: 5px 15px;
    background-color: ${({ theme }) => theme.COLORS.BACKGROUND_800};
    border-radius: 5px;
    box-shadow: 0 0 5px rgba(0, 0, 0, 0.5);
  }
`